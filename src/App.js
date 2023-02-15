import { ChakraProvider, theme, Text } from "@chakra-ui/react";
import Board from "./components/Board/Board";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Text fontSize="2xl" padding="5" fontWeight="bold" fontStyle="italic">
        Tasks
      </Text>
      <Board />
    </ChakraProvider>
  );
}

export default App;
