import Response from "./components/Response";
import {useState} from 'react';

function App() {

  const apiKey="111c60cacb714524a35200850251603";
  const [apiResponse, setApiResponse] = useState('');

  const getWeather = async () => {
    const city = (document.getElementById("cityName") as HTMLTextAreaElement).value; 
    const response = await fetch('http://api.weatherapi.com/v1/current.json?key=' + apiKey + '&q=' + city + '&aqi=no');
    const data = await response.json();
    setApiResponse(data);
    //console.log(data.json());
  }

  return (
    <div>
      <div className="input-group">
        <span className="input-group-text">Name of the city</span>
        <textarea id="cityName" className="form-control" aria-label="Name of the city" onKeyDown={(e) => {if (e.key === "Enter")getWeather();}}></textarea>
      </div>
      <Response data={apiResponse}/>
    </div>
  );
}

export default App;
