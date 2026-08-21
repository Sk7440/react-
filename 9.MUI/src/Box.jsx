import Box from '@mui/material/Box';

export default function BoxBasic() {
  return (
    <Box component="section"  sx={{ p: 2, border: '1px dashed grey', backgroundColor: {xs: 'red', md: 'blue'} }}>
      This Box renders as an HTML section element.
    </Box>
  );
}
