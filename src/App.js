import MainPage from "./Components/MainPage";
import "./styles/root.css";
import "rsuite/dist/styles/rsuite-default.css";
import { WeatherProvider } from "./context/weather.context";

function App() {
  return (
    <div>
      <WeatherProvider>
        <MainPage />
      </WeatherProvider>
    </div>
  );
}

export default App;
