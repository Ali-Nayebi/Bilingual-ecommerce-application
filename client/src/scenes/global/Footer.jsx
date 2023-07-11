import { useTheme } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { shades } from '../../theme';
import { getTranslate } from '../../localization';

const Footer = () => {
  const translate = getTranslate();
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h3"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            Fashion Shop
          </Typography>
          <div>{translate.lorem}</div>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            {translate.aboutUs}
          </Typography>
          <Typography mb="30px">{translate.careers}</Typography>
          <Typography mb="30px">{translate.ourStore}</Typography>
          <Typography mb="30px">{translate.terms}</Typography>
          <Typography mb="30px">{translate.privacy}</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            {translate.care}
          </Typography>
          <Typography mb="30px">{translate.help}</Typography>
          <Typography mb="30px">{translate.track}</Typography>
          <Typography mb="30px">{translate.return}</Typography>
          <Typography mb="30px">{translate.bug}</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            {translate.contactUs}
          </Typography>
          <Typography mb="30px">{translate.address}</Typography>
          <Typography mb="30px">
            {translate.email}: somethingsome@gmail.com
          </Typography>
          <Typography mb="30px">(222)333-4444</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
