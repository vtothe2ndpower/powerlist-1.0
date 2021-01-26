import React, { useContext } from 'react';
import { 
  Paper,
  TextField
} from '@material-ui/core';
import useInputState from '../hooks/useInputState';
import { DispatchContext } from '../contexts/TodosContext';
import { LanguageContext } from '../contexts/LanguageContext';

const content = {
  english: 'Add New Todo',
  spanish: 'Agregar Nueva Tarea',
  japanese: '新しいタスクを追加する'
}

export default function TodoForm() {
  const [value, handleChange, reset] = useInputState('');
  const dispatch = useContext(DispatchContext);
  const { language } = useContext(LanguageContext);
  const formText = content[language];

  return (
    <Paper style={{margin: "1rem 0", padding: "0 1rem"}}>
      <form onSubmit={e => {
        e.preventDefault();
        dispatch({ type: 'ADD', task: value });
        reset();
      }}>
        <TextField value={value} onChange={handleChange} margin="normal" label={formText} fullWidth />
      </form>
    </Paper>
  )
}
