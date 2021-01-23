import React, { useContext, memo } from 'react';
import EditTodoForm from './EditTodoForm';
import useToggle from '../hooks/useToggle';
import { 
  ListItem, 
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { DispatchContext } from '../contexts/TodosContext';

function Todo({ id, task, completed }) {
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggleIsEditing] = useToggle(false);
  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? <EditTodoForm id={id} task={task} toggleIsEditing={toggleIsEditing} /> :
      <>
      <Checkbox color="default" tabIndex={-1} checked={completed} onClick={() => dispatch({ type: 'TOGGLE', id })} />
      <ListItemText style={{color: completed ? "green" : "red"}}>
        {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label='Delete' onClick={() => dispatch({ type: 'REMOVE', id })}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label='Edit' onClick={toggleIsEditing}>
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
      </>
      }
    </ListItem>  
  );
}

export default memo(Todo);