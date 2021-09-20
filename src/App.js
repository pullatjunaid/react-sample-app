import logo from './logo.svg';
import './App.css';
import HomePage from './pages/home'
import HeaderComponent from './pages/header/Header';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <HomePage />
    </div>
  );
}

export default App;
