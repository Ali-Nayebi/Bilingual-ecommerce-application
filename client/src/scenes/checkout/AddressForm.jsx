import { getIn } from 'formik';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';
import { getTranslate } from '../../localization';

const AddressForm = ({
  type,
  values,
  touched,
  errors,
  handleBlur,
  handleChange,
}) => {
  const translate = getTranslate();
  const isNonMobile = useMediaQuery('(min-width:600px)');

  const formattedName = (field) => `${type}.${field}`;

  const formattedError = (field) =>
    Boolean(
      getIn(touched, formattedName(field)) &&
        getIn(errors, formattedName(field))
    );

  const formattedHelper = (field) =>
    getIn(touched, formattedName(field)) && getIn(errors, formattedName(field));

  return (
    <Box
      display="grid"
      gap="15px"
      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
      sx={{
        '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
      }}
    >
      <TextField
        fullWidth
        type="text"
        label={translate.firstName}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.firstName}
        name={formattedName('firstName')}
        error={formattedError('firstName')}
        helperText={formattedHelper('firstName')}
        sx={{ gridColumn: 'span 2' }}
      />
      <TextField
        fullWidth
        type="text"
        label={translate.lastName}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.lastName}
        name={formattedName('lastName')}
        error={formattedError('lastName')}
        helperText={formattedHelper('lastName')}
        sx={{ gridColumn: 'span 2' }}
      />
      <TextField
        fullWidth
        type="text"
        label={translate.country}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.country}
        name={formattedName('country')}
        error={formattedError('country')}
        helperText={formattedHelper('country')}
        sx={{ gridColumn: 'span 4' }}
      />
      <TextField
        fullWidth
        type="text"
        label={translate.street}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.street1}
        name={formattedName('street1')}
        error={formattedError('street1')}
        helperText={formattedHelper('street1')}
        sx={{ gridColumn: 'span 2' }}
      />
      <TextField
        fullWidth
        type="text"
        label={translate.street2}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.street2}
        name={formattedName('street2')}
        error={formattedError('street2')}
        helperText={formattedHelper('street2')}
        sx={{ gridColumn: 'span 2' }}
      />
      <TextField
        fullWidth
        type="text"
        label={translate.city}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.city}
        name={formattedName('city')}
        error={formattedError('city')}
        helperText={formattedHelper('city')}
        sx={{ gridColumn: 'span 2' }}
      />
      <TextField
        fullWidth
        type="text"
        label={translate.state}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.state}
        name={formattedName('state')}
        error={formattedError('state')}
        helperText={formattedHelper('state')}
        sx={{ gridColumn: '1fr' }}
      />
      <TextField
        fullWidth
        type="text"
        label={translate.zip}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.zipCode}
        name={formattedName('zipCode')}
        error={formattedError('zipCode')}
        helperText={formattedHelper('zipCode')}
        sx={{ gridColumn: '1fr' }}
      />
    </Box>
  );
};

export default AddressForm;
