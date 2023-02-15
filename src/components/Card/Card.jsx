import { Flex, Text } from "@chakra-ui/react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

function Card({title, index, parent}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: title,
    data: {
      title,
      index,
      parent,
    },
  });
  const style = {
    transform: CSS.Translate.toString(transform)
  };
  return (
    <Flex
      padding='3'
      backgroundColor='white'
      margin='2'
      borderRadius='8'
      border='2px solid gray.500'
      boxShadow='0px 0px 5px 2px #2121213b'
      transform={style.transform}
      {...listeners}
      {...attributes}
      ref={setNodeRef}
    >
      <Text>{title}</Text>
    </Flex>
  );
};

export default Card;
