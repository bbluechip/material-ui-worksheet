import AppbarComp from "../components/AppbarComp";
import CardGrid from "../components/CardGrid";
import TextFieldComp from "../components/TextFieldComp";
import TypoButtons from "../components/TypoButtons";
import { createTheme, ThemeProvider } from "@mui/material";
import { teal } from "@mui/material/colors";
const Home = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#44664c",
        light: "#1fa415",
        dark: "#46630c",
      },
      secondary: {
        main: teal[500],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <AppbarComp />
      <TypoButtons />
      <TextFieldComp />
      <CardGrid />
    </ThemeProvider>
  );
};

export default Home;
