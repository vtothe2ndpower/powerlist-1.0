import TodoApp from './components/TodoApp';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import './App.css';

export default function App() {
  return (
    <ThemeProvider>
    <LanguageProvider>
      <TodoApp />
    </LanguageProvider>
    </ThemeProvider>
  );
}