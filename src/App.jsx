import { useRecoilValue } from "recoil"
import Todos from "./components/Todos"
import { totalTodoState } from "./state/selectors/TotalTodo"

function App() {
  const totalTodos = useRecoilValue(totalTodoState)
  return (
      <div>
        <Todos />
        <h5>Total todos: {totalTodos}</h5>
      </div>
  )
}

export default App
