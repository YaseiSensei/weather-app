
import './App.css';
import Navi from './layouts/Navi';
import Dashboard from './layouts/Dashboard';
import { ThemeProvider } from './contexts/ThemeContext.js'
import { WeatherProvider } from './contexts/WeatherContext';
import { CityProvider } from './contexts/CityContext';
import Footer from './layouts/Footer';
function App() {
  return (
    <ThemeProvider >
      <CityProvider>
        <WeatherProvider>
          <Navi />
          <Dashboard />
          <Footer />
        </WeatherProvider>
      </CityProvider>
    </ThemeProvider>
  );
}

export default App;
