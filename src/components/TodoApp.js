import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { 
  Typography,
  Paper,
  AppBar,
  Toolbar,
  Grid
} from '@material-ui/core';

import { TodosProvider } from '../contexts/TodosContext';

export default function TodoApp() {
  return (
    <Paper style={{
      padding: 0,
      margin: 0,
      height: '100vh',
      backgroundColor: '#fafafa'
    }} elevation={0}>
      <AppBar color='primary' position='static' style={{ hieght: '64px' }}>
        <Toolbar>
          <Typography color='inherit'>
            The Power List - Win The Day, Win Your Life
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Grid container justify="center" style={{marginTop: "1rem"}}>
      <Grid item xs={11} md={8} lg={4}>
        <TodosProvider>
          <TodoForm />
          <TodoList />
        </TodosProvider>
      </Grid>
      </Grid>
    </Paper>
  )
}