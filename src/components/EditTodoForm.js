import React, { useContext } from 'react';
import useInputState from '../hooks/useInputState';
import { 
  TextField
} from '@material-ui/core';
import { DispatchContext } from '../contexts/TodosContext';

export default function EditTodoForm({ id, task, toggleIsEditing }) {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form onSubmit={e => {
      e.preventDefault();
      dispatch({ type: 'EDIT', id, newTask: value });
      reset();
      toggleIsEditing();
    }} style={{ marginLeft: "1rem", width: "100%" }}>
    <TextField margin="normal" value={value} onChange={handleChange} fullWidth autoFocus />
    </form>
  )
}
