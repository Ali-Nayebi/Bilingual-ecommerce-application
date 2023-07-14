import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IconButton, Box, Typography, Button, Tabs, Tab } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { shades } from '../../theme';
import { addToCart } from '../../state';
import { useParams } from 'react-router-dom';
import Item from '../../components/Item';
import { getTranslate, getDirection } from '../../localization';

const ItemDetails = () => {
  const translate = getTranslate();
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [value, setValue] = useState('description');
  const [count, setCount] = useState(1);
  const [itemen, setItemen] = useState(null);
  const [itemfa, setItemfa] = useState(null);
  const [itemsen, setItemsen] = useState([]);
  const [itemsfa, setItemsfa] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItemen() {
    const item = await fetch(
      `http://localhost:1337/api/itemsen/${itemId}?populate=image`,
      { method: 'GET' }
    );
    const itemJson = await item.json();
    setItemen(itemJson.data);
  }
  async function getItemfa() {
    const item = await fetch(
      `http://localhost:1337/api/itemsfa/${itemId}?populate=image`,
      { method: 'GET' }
    );
    const itemJson = await item.json();
    setItemfa(itemJson.data);
  }

  async function getItemsen() {
    const items = await fetch(
      'http://localhost:1337/api/itemsen?populate=image',
      { method: 'GET' }
    );
    const itemsJson = await items.json();
    setItemsen(itemsJson.data);
  }
  async function getItemsfa() {
    const items = await fetch(
      'http://localhost:1337/api/itemsfa?populate=image',
      { method: 'GET' }
    );
    const itemsJson = await items.json();
    setItemsfa(itemsJson.data);
  }

  useEffect(() => {
    getItemen();
    getItemfa();
    getItemsen();
    getItemsfa();
  }, [itemId]); // eslint-disable-line react-hooks/exhaustive-deps

  return getDirection() === 'ltr' ? (
    <Box width="80%" m="80px auto">
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        {/* IMAGES */}
        <Box flex="1 1 40%" mb="40px">
          <img
            alt={itemen?.name}
            width="100%"
            height="100%"
            src={`http://localhost:1337${itemen?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
            style={{ objectFit: 'contain' }}
          />
        </Box>

        {/* ACTIONS */}
        <Box flex="1 1 50%" mb="40px">
          <Box display="flex" justifyContent="space-between">
            <Box>{translate.homeItem}</Box>
            <Box>{translate.prevNext}</Box>
          </Box>

          <Box m="65px 0 25px 0">
            <Typography variant="h3">{itemen?.attributes?.name}</Typography>
            <Typography>
              {itemen?.attributes?.price} {translate.price}
            </Typography>
            <Typography sx={{ mt: '20px' }}>
              {itemen?.attributes?.shortDescription}
            </Typography>
          </Box>

          {/* COUNT AND BUTTON */}
          <Box display="flex" alignItems="center" minHeight="50px">
            <Box
              display="flex"
              alignItems="center"
              border={`1.5px solid ${shades.neutral[300]}`}
              mr="20px"
              p="2px 5px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography sx={{ p: '0 5px' }}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            <Button
              sx={{
                backgroundColor: '#222222',
                color: 'white',
                borderRadius: 0,
                minWidth: '150px',
                padding: '10px 40px',
              }}
              onClick={() =>
                dispatch(addToCart({ item: { ...itemen, count } }))
              }
            >
              {translate.addToCart}
            </Button>
          </Box>

          <Box>
            <Box m="20px 0 5px 0" display="flex">
              <FavoriteBorderOutlinedIcon />
              <Typography sx={{ ml: '5px' }}>{translate.addToWish}</Typography>
            </Box>
            <Typography>
              {translate.categories} {itemen?.attributes?.category}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* INFORMATION */}
      <Box m="20px 0">
        <Tabs value={value} onChange={handleChange}>
          <Tab label={translate.description} value="description" />
          <Tab label={translate.reviews} value="reviews" />
        </Tabs>
      </Box>
      <Box display="flex" flexWrap="wrap" gap="15px">
        {value === 'description' && (
          <div>{itemen?.attributes?.longDescription}</div>
        )}
        {value === 'reviews' && <div>{translate.reviews}</div>}
      </Box>

      {/* RELATED ITEMS */}
      <Box mt="50px" width="100%">
        <Typography variant="h3" fontWeight="bold">
          {translate.related}
        </Typography>
        <Box
          mt="20px"
          display="flex"
          flexWrap="wrap"
          columnGap="1.33%"
          justifyContent="space-between"
        >
          {itemsen.slice(0, 4).map((item, i) => (
            <Item key={`${item.name}-${i}`} item={item} />
          ))}
        </Box>
      </Box>
    </Box>
  ) : (
    <Box width="80%" m="80px auto">
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        {/* IMAGES */}
        <Box flex="1 1 40%" mb="40px">
          <img
            alt={itemfa?.name}
            width="100%"
            height="100%"
            src={`http://localhost:1337${itemfa?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
            style={{ objectFit: 'contain' }}
          />
        </Box>

        {/* ACTIONS */}
        <Box flex="1 1 50%" mb="40px">
          <Box display="flex" justifyContent="space-between">
            <Box>{translate.homeItem}</Box>
            <Box>{translate.prevNext}</Box>
          </Box>

          <Box m="65px 0 25px 0">
            <Typography variant="h3">{itemfa?.attributes?.name}</Typography>
            <Typography>
              {itemfa?.attributes?.price} {translate.price}
            </Typography>
            <Typography sx={{ mt: '20px' }}>
              {itemfa?.attributes?.shortDescription}
            </Typography>
          </Box>

          {/* COUNT AND BUTTON */}
          <Box display="flex" alignItems="center" minHeight="50px">
            <Box
              display="flex"
              alignItems="center"
              border={`1.5px solid ${shades.neutral[300]}`}
              mr="20px"
              p="2px 5px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography sx={{ p: '0 5px' }}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            <Button
              sx={{
                backgroundColor: '#222222',
                color: 'white',
                borderRadius: 0,
                minWidth: '150px',
                padding: '10px 40px',
              }}
              onClick={() =>
                dispatch(addToCart({ item: { ...itemfa, count } }))
              }
            >
              {translate.addToCart}
            </Button>
          </Box>

          <Box>
            <Box m="20px 0 5px 0" display="flex">
              <FavoriteBorderOutlinedIcon />
              <Typography sx={{ ml: '5px' }}>{translate.addToWish}</Typography>
            </Box>
            <Typography>
              {translate.categories} {itemfa?.attributes?.category}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* INFORMATION */}
      <Box m="20px 0">
        <Tabs value={value} onChange={handleChange}>
          <Tab label={translate.description} value="description" />
          <Tab label={translate.reviews} value="reviews" />
        </Tabs>
      </Box>
      <Box display="flex" flexWrap="wrap" gap="15px">
        {value === 'description' && (
          <div>{itemfa?.attributes?.longDescription}</div>
        )}
        {value === 'reviews' && <div>{translate.reviews}</div>}
      </Box>

      {/* RELATED ITEMS */}
      <Box mt="50px" width="100%">
        <Typography variant="h3" fontWeight="bold">
          {translate.related}
        </Typography>
        <Box
          mt="20px"
          display="flex"
          flexWrap="wrap"
          columnGap="1.33%"
          justifyContent="space-between"
        >
          {itemsfa.slice(0, 4).map((item, i) => (
            <Item key={`${item.name}-${i}`} item={item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ItemDetails;
