
import './App.css';
import TodoApp from './components/TodoApp';
import ContextProvider from './components/context/Context';

function App() {
  return (
    <ContextProvider>
      <TodoApp/>
    </ContextProvider>
  );
}

export default App;
