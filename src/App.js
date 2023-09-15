
import './App.css';
import DropDownSearch from './Components/World-clock-app/DropDownSearch';

function App() {

  const TimeZoneDBapiKey = "MYZBX5328UTZ"
  const OpenWeatherMapAPIkey = "1d8f9dd146c6fac9dc4e77a3c9a3c723"
  return (
    <div className="App">

      <h1 className='app-name'>World Clock App</h1>
      <DropDownSearch OpenWeatherMapAPIkey={OpenWeatherMapAPIkey} TimeZoneDBapiKey={TimeZoneDBapiKey}/>
     

    </div>
  );
}

export default App;
