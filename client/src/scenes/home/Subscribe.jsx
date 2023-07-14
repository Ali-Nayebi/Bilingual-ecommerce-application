import { Box, InputBase, Divider, Typography, IconButton } from '@mui/material';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import { useState } from 'react';
import { getTranslate } from '../../localization';

const Subscribe = () => {
  const translate = getTranslate();
  const [email, setEmail] = useState('');
  return (
    <Box width="80%" margin="80px auto" textAlign="center">
      <IconButton>
        <MarkEmailReadOutlinedIcon fontSize="large" />
      </IconButton>
      <Typography variant="h3">{translate.subscribe}</Typography>
      <Typography>{translate.coupon}</Typography>
      <Box
        p="2px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        width="75%"
        backgroundColor="#f2f2f2"
      >
        <InputBase // similar to Input but much more stripdown
          sx={{ ml: 1, flex: 1 }}
          placeholder={translate.enterEmail}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Typography sx={{ p: '10px', ':hover': { cursor: 'pointer' } }}>
          {translate.sub}
        </Typography>
      </Box>
    </Box>
  );
};

export default Subscribe;
