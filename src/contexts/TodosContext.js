import React, { createContext } from 'react';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';
import todosReducer from '../reducers/todosReducer';

const defaultTodos = [
  {id: 1, task: 'Workout for 30 Minutes', completed: false},
  {id: 2, task: 'Read 10 Pages', completed: false}
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer('todos', defaultTodos, todosReducer);
  return (
    <TodosContext.Provider value={todos}>
    <DispatchContext.Provider value={dispatch}>
      {props.children}
    </DispatchContext.Provider>
    </TodosContext.Provider>
  )
}