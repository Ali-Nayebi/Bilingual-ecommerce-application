import { useDispatch, useSelector } from 'react-redux';
import { Badge, Box, Button, IconButton, Typography } from '@mui/material';
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { setIsCartOpen } from '../../state';
import Logo from '../../assets/logo.png';
import { changeLanguage, lang } from '../../localization';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="75px"
      backgroundColor="rgba(255, 255, 255, 0.60)"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="90%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Button
            color={lang === 'fa' ? 'secondary' : 'primary'}
            onClick={() => changeLanguage('fa')}
          >
            <Typography
              fontWeight={lang === 'fa' ? 'bold' : 'normal'}
              variant="h3"
            >
              فارسی
            </Typography>
          </Button>
          {'/'}
          <Button
            color={lang === 'en' ? 'secondary' : 'primary'}
            onClick={() => changeLanguage('en')}
          >
            <Typography
              fontWeight={lang === 'en' ? 'bold' : 'normal'}
              variant="h3"
            >
              English
            </Typography>
          </Button>
        </Box>

        <Box
          onClick={() => navigate('/')}
          sx={{ '&:hover': { cursor: 'pointer' }, marginRight: '-10px' }}
        >
          <img src={Logo} alt="logo" style={{ width: 150, height: 75 }} />
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <IconButton sx={{ color: 'black', transform: 'scale(1.4)' }}>
            <SearchOutlined />
          </IconButton>

          <IconButton sx={{ color: 'black', transform: 'scale(1.4)' }}>
            <PersonOutline />
          </IconButton>

          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              '& .MuiBadge-badge': {
                right: 5,
                top: 5,
                padding: '0 4px',
                height: '14px',
                minWidth: '13px',
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: 'black', transform: 'scale(1.4)' }}
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>

          <IconButton sx={{ color: 'black', transform: 'scale(1.4)' }}>
            <MenuOutlined />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
