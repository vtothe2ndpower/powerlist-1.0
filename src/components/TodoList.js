import React, { useContext } from 'react';
import Todo from './Todo';
import { 
  Paper, 
  List, 
  Divider
} from '@material-ui/core';
import { TodosContext } from '../contexts/TodosContext';

export default function TodoList() {
  const todos = useContext(TodosContext);
  if(todos.length)
    return (
      <Paper>
        <List>
        {todos.map((todo, index) => (
          <>
            <Todo {...todo} key={todo.id} />
            {index < todos.length - 1 && <Divider/> }
          </>
        ))}
        </List>
      </Paper>
    );
    return null;
}
