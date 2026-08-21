import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";

export default function BoxSx() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: "#007FFF",
            yellow: "#fbff01",
            red: "#fa0707",
            dark: "#0066CC",
          },
        },
      }}
    >
      <Box
        sx={{
          width: 100,
          height: 100,
          borderRadius: 1,
          bgcolor: "primary.red",
          "&:hover": {
            bgcolor: "primary.red",
          },
        }}
       
      />
    </ThemeProvider>
  );
}
