import { Button, Flex, Image, Text } from "@chakra-ui/react";
import logo from "./assets/logo.svg";

function App() {
  return (
    <Flex
      bg={"#2E2C2F"}
      w={"100%"}
      minH={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={8}
    >
      <Flex
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={8}
      >
        <Flex
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Image src={logo} maxW={"300px"} />
          <Text fontWeight={"extrabold"} fontSize={"32px"} color={"#475B63"}>
            Battleship Game by AMIN!
          </Text>
        </Flex>
        <Flex>
          <Button>Start!</Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
