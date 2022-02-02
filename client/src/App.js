import './App.css';
import React from "react";
import Report from './components/Report';
import Spinner from './components/Spinner';


function App() {

  const [weather,weatherData]=React.useState(null);
  ////Form Stuff

  const [city,setCity]=React.useState();
  const [param,setParam]=React.useState();

  function cityUpdate(event){
    console.log('UpdateHere:',event.target.value);
    setCity(event.target.value);
  }

  function handleSubmit(event){

    console.log('City Name:',city);
    let ur='/weather/'+city;
    console.log(ur);
    setParam(ur);
    event.preventDefault();
    alert('Form submitted the form.');
  }


  ////FormEndStuff


  // async function loadWeather() {
  //   const response = await fetch("/weather/Nairobi");
  //   const climate = await response.json();
  //   console.log('climate',climate);
  //   weatherData(climate);
  //   console.log('weather loaded');
  // }
  // loadWeather()
  // console.log(weather);


  React.useEffect(()=> {
    console.log('InEffect:',param);
    fetch(param)
    .then((res) => res.json())
    .then((data) =>{ weatherData(data) })
    .catch((error)=> console.error('Error:',error) );
    // console.log('weatherhere',weather);
  }, [param]);

  function icons(icon){
    return "http://openweathermap.org/img/wn/"+icon+"@2x.png"
  }

  // let icon = "http://openweathermap.org/img/wn/"+weather.weather[0].icon+"@2x.png";

  return (
    <div className="App">
      <header className="App-header">

      <form onSubmit={handleSubmit} >
    <div class="form-group my-2">
      <label htmlFor="cityInput">City</label>
      <input type="text" className="form-control" id="city" value={city} onChange={cityUpdate}  placeholder="Enter city" />
      <button className="btn btn-light" type="submit" value="Enter"> Enter</button>
    </div>
      </form>

       {!weather ? <Spinner /> : <Report
        city={weather.name}
        country={weather.sys.country}
        icon={icons(weather.weather[0].icon)}
        curr={weather.main.temp}
        descr={weather.weather[0].description}
        min={weather.main.temp_min}
        humid={weather.main.humidity}
        max={weather.main.temp_max}
        />}


      </header>


    </div>

  );
}

export default App;
