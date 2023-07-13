import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Tab, Tabs, useMediaQuery } from '@mui/material';
import Item from '../../components/Item';
import { setItemsen, setItemsfa } from '../../state';
import { getTranslate, getDirection } from '../../localization';

const ShoppingList = () => {
  const direction = getDirection();
  const translate = getTranslate();
  const dispatch = useDispatch();
  const [value, setValue] = useState('all');
  const itemsen = useSelector((state) => state.cart.itemsen);
  const itemsfa = useSelector((state) => state.cart.itemsfa);
  const isNonMobile = useMediaQuery('(min-width:600px)');
  // console.log('itemsen', itemsen);
  // console.log('itemsfa', itemsfa);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItemsen() {
    const items = await fetch(
      'http://localhost:1337/api/itemsen?populate=image',
      { method: 'GET' }
    );
    const itemsJson = await items.json();
    dispatch(setItemsen(itemsJson.data));
  }
  async function getItemsfa() {
    const items = await fetch(
      'http://localhost:1337/api/itemsfa?populate=image',
      { method: 'GET' }
    );
    const itemsJson = await items.json();
    dispatch(setItemsfa(itemsJson.data));
  }

  useEffect(() => {
    getItemsen();
    getItemsfa();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const topRatedItemsen = itemsen.filter(
    (item) => item.attributes.category === 'topRated'
  );
  const topRatedItemsfa = itemsfa.filter(
    (item) => item.attributes.category === 'برترین ها'
  );
  const newArrivalsItemsen = itemsen.filter(
    (item) => item.attributes.category === 'newArrivals'
  );
  const newArrivalsItemsfa = itemsfa.filter(
    (item) => item.attributes.category === 'تازه ها'
  );
  const bestSellersItemsen = itemsen.filter(
    (item) => item.attributes.category === 'bestSellers'
  );
  const bestSellersItemsfa = itemsfa.filter(
    (item) => item.attributes.category === 'پر فروش ها'
  );

  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        <b>{translate.ourFeatured}</b>
      </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: isNonMobile ? 'block' : 'none' } }}
        sx={{
          m: '25px',
          '& .MuiTabs-flexContainer': {
            flexWrap: 'wrap',
          },
        }}
      >
        <Tab label={translate.all} value="all"></Tab>
        <Tab label={translate.newArrivals} value="newArrivals"></Tab>
        <Tab label={translate.bestSellers} value="bestSellers"></Tab>
        <Tab label={translate.topRated} value="topRated"></Tab>
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {value === 'all' &&
          direction === 'ltr' &&
          itemsen.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === 'all' &&
          direction === 'rtl' &&
          itemsfa.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}

        {value === 'newArrivals' &&
          direction === 'ltr' &&
          newArrivalsItemsen.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === 'newArrivals' &&
          direction === 'rtl' &&
          newArrivalsItemsfa.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === 'bestSellers' &&
          direction === 'ltr' &&
          bestSellersItemsen.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === 'bestSellers' &&
          direction === 'rtl' &&
          bestSellersItemsfa.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === 'topRated' &&
          direction === 'ltr' &&
          topRatedItemsen.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === 'topRated' &&
          direction === 'rtl' &&
          topRatedItemsfa.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
      </Box>
    </Box>
  );
};

export default ShoppingList;
