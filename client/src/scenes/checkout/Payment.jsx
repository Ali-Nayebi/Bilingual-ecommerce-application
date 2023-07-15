import { Box, Typography, TextField } from '@mui/material';
import { getTranslate } from '../../localization';

const Payment = ({ values, touched, errors, handleBlur, handleChange }) => {
  const translate = getTranslate();
  return (
    <Box m="30px 0">
      {/* CONTACT INFO */}
      <Box>
        <Typography sx={{ mb: '15px' }} fontSize="18px">
          {translate.contact}
        </Typography>
        <TextField
          fullWidth
          type="text"
          label={translate.email}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          name="email"
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
          sx={{ gridColumn: 'span 4', marginBottom: '15px' }}
        />
        <TextField
          fullWidth
          type="text"
          label={translate.phone}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.phoneNumber}
          name="phoneNumber"
          error={!!touched.phoneNumber && !!errors.phoneNumber}
          helperText={touched.phoneNumber && errors.phoneNumber}
          sx={{ gridColumn: 'span 4' }}
        />
      </Box>
    </Box>
  );
};

export default Payment;
