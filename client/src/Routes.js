import { Typography } from '@mui/material';
import { getTranslate } from './localization';

function Routes() {
  const translate = getTranslate();
  return <Typography variant="h3">{translate.start}</Typography>;
}

export default Routes;
