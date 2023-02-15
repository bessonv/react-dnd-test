import { ChakraProvider, theme, Text } from "@chakra-ui/react";
import Board from "./components/Board/Board";

const initData = localStorage.getItem('dnd-tasks');

function App() {
  const updateStorage = (data) => {
    localStorage.setItem('dnd-tasks', JSON.stringify(data));
  }

  return (
    <ChakraProvider theme={theme}>
      <Text fontSize="2xl" padding="5" fontWeight="bold" fontStyle="italic">
        Tasks
      </Text>
      <Board initState={initData ? JSON.parse(initData) : []} update={updateStorage}/>
    </ChakraProvider>
  );
}

export default App;
