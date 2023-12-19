import { selector } from "recoil";
import { todoState } from "../atoms/TodoState";

export const totalTodoState = selector({
    key: 'totalTodoState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const todo = get(todoState);
      console.log('todo:',todo);
      return todo.length;
    },
  });