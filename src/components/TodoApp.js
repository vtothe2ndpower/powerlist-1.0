import React, { useContext } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { 
  Typography,
  Paper,
  AppBar,
  Toolbar,
  Switch,
  Select,
  MenuItem,
  Grid
} from '@material-ui/core';
import { TodosProvider } from '../contexts/TodosContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';

const content = {
  english: 'The Power List',
  spanish: 'La Lista de Poder',
  japanese: 'パワーリスト'
}

export default function TodoApp() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { language, changeLanguage } = useContext(LanguageContext);
  const title = content[language];
  return (
    <Paper style={{
      padding: 0,
      margin: 0,
      height: '100vh',
      backgroundColor: isDarkMode ? 'black' : '#fafafa'
    }} elevation={0}>
      <AppBar color={isDarkMode ? 'default' : 'primary'} position='static' style={{ height: '64px' }}>
        <Toolbar>

          <Switch onChange={toggleTheme} /> 

          <Typography color='inherit' align="center" style={{width: "100%", alignItems: "center", fontSize: "48px"}}>
            {title}
          </Typography>

          <Select align='left' style={{ color: isDarkMode ? 'black' : 'white' }} value={language} onChange={changeLanguage}>
            <MenuItem value='english'>English</MenuItem>
            <MenuItem value='spanish'>Spanish</MenuItem>
            <MenuItem value='japanese'>Japanese</MenuItem>
          </Select>
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