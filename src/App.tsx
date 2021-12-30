import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./components/pages/Home";
import { ShowEvent } from "./components/pages/ShowEvent";
import { ShowUser } from "./components/pages/ShowUser";
import { theme } from "./theme/theme";


export const App = () => (
  <ChakraProvider theme={theme}>
    <Home/>
    <ShowEvent/>
    <ShowUser/>
  </ChakraProvider>
)
