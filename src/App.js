
import './App.css';
import DropDownSearch from './Components/World-clock-app/DropDownSearch';

function App() {
  //API key
  const TimeZoneDBapiKey = ""
  const OpenWeatherMapAPIkey = ""
  return (
    <div className="App">

      <h1 className='app-name'>World Clock App</h1>
      <DropDownSearch OpenWeatherMapAPIkey={OpenWeatherMapAPIkey} TimeZoneDBapiKey={TimeZoneDBapiKey}/>
     

    </div>
  );
}

export default App;
