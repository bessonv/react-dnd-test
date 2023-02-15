import { Flex } from "@chakra-ui/react";
import { DndContext, rectIntersection } from "@dnd-kit/core";
import { useState } from "react";
import Lane from "../Lane/Lane";
import AddCard from "../AddCard/AddCard";

function Board() {
  const [todoItems, setTodoItems] = useState([]);
  const [doneItems, setDoneItems] = useState([]);
  const [inProgressItems, setInProgressItems] = useState([]);
  const [uItems, setuItems] = useState([]);

  const addNewCard = (title) => {
    setuItems([...uItems, { title }]);
  };

  const dragHandler = (e) => {
    const container = e.over.id;
    const title = e.active.data.current.title ?? "";
    const index = e.active.data.current.index ?? 0;
    const parent = e.active.data.current.parent ?? "ToDo";

    if (container === "ToDo") {
      setTodoItems([...todoItems, { title }]);
    } else if (container === "Done") {
      setDoneItems([...doneItems, { title }]);
    } else if (container === "Unassigned") {
      setuItems([...uItems, { title }]);
    } else {
      setInProgressItems([...inProgressItems, { title }]);
    }

    if (parent === "ToDo") {
      setTodoItems([
        ...todoItems.slice(0, index),
        ...todoItems.slice(index + 1),
      ]);
    } else if (parent === "Done") {
      setDoneItems([
        ...doneItems.slice(0, index),
        ...doneItems.slice(index + 1),
      ]);
    } else if (parent === "Unassigned") {
      setuItems([...uItems.slice(0, index), ...uItems.slice(index + 1)]);
    } else {
      setInProgressItems([
        ...inProgressItems.slice(0, index),
        ...inProgressItems.slice(index + 1),
      ]);
    }
  }

  return (
    <DndContext
      collisionDetection={rectIntersection}
      onDragEnd={dragHandler}
    >
      <Flex flexDirection='column'>
        <AddCard addCard={addNewCard} />
        <Flex flex='3'>
          <Lane title='ToDo' items={todoItems} />
          <Lane title='In Progress' items={inProgressItems} />
          <Lane title='Done' items={doneItems} />
          <Lane title='Unassigned' items={uItems} />
        </Flex>
      </Flex>
    </DndContext>
  );
};

export default Board;
