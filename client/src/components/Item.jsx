import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IconButton, Box, Typography, useTheme, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { shades } from '../theme';
import { addToCart } from '../state';
import { useNavigate } from 'react-router-dom';
import { getTranslate } from '../localization';

const Item = ({ item, width }) => {
  const translate = getTranslate();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1); // this will represent the number of items that we are going to add to the cart
  const [isHovered, setIsHovered] = useState(false); // this will determine if the user has the mouse hovered on top of the item
  const {
    palette: { neutral },
  } = useTheme(); // this is the color that we are grabing from the material ui theme that we have created and passed to the entire app

  const { category, price, name, image } = item.attributes; // here we are destructuring these from item.attributes that comes from strapi
  const {
    // more destructuring
    data: {
      // we are grabing the data property from image that we have already destructured above (item.attributes.image) and here we are destructuring image.data.attributes.formats.medium and this actualy grabs the url of the image this is how strapi formats it
      attributes: {
        formats: {
          medium: { url },
        },
      },
    },
  } = image;

  return (
    <Box width={width}>
      {' '}
      {/* because we might have different widths we pass it as a property and we define it later */}
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          alt={item.name}
          width="300px"
          height="400px"
          src={`http://localhost:1337${url}`} // the url is the thing that we have destructured above so we dont have to do it here
          onClick={() => navigate(`/item/${item.id}`)} // if they click on the image with this they will be navigated to the item page via the path that we have created in app.js for itemdetails
          style={{ cursor: 'pointer' }}
        />
        <Box
          display={isHovered ? 'block' : 'none'}
          position="absolute"
          bottom="10%"
          left="0"
          width="100%"
          padding="0 5%"
        >
          <Box display="flex" justifyContent="space-between">
            {/* AMOUNT */}
            <Box
              display="flex"
              alignItems="center"
              backgroundColor={shades.neutral[100]}
              borderRadius="3px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                {/* this way the count wont go below one */}
                <RemoveIcon />
              </IconButton>
              <Typography color={shades.primary[300]}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>

            {/* BUTTON */}
            <Button
              onClick={() => {
                dispatch(addToCart({ item: { ...item, count } }));
              }} // ...item is the object that we are adding to the cart and the count is the amount of that object
              sx={{ backgroundColor: shades.primary[300], color: 'white' }}
            >
              {translate.addToCart}
            </Button>
          </Box>
        </Box>
      </Box>
      <Box mt="3px">
        <Typography variant="subtitle2" color={neutral.dark}>
          {/* this is the color that we grabbed from useTheme earlier */}
          {category
            .replace(/([A-Z])/g, ' $1') // and we are replacing the category that we set up in strapi into proper format by capitalizing the first letter
            .replace(/^./, (str) => str.toUpperCase())}
        </Typography>
        <Typography>{name}</Typography>
        {/* all these like name and price we got from strapi by destructuring them earlier */}
        <Typography fontWeight="bold">
          {price} {translate.price}
        </Typography>
      </Box>
    </Box>
  );
};

export default Item;
