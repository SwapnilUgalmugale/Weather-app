import "./current-weather.css"
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const CurrentWeather = ({data}) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                   <p className="city">{data.city}</p>
                   <p className="weather-description">{data.weatherResponse.weather[0].description}</p>
                </div>
                <img alt="weather" className="weather-icon" src={`icons/${data.weatherResponse.weather[0].icon}.png`} />
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(data.weatherResponse.main.temp)}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-lable">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-lable">Feels like</span>
                        <span className="parameter-value">{Math.round(data.weatherResponse.main.feels_like)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-lable">Wind speed</span>
                        <span className="parameter-value">{data.weatherResponse.wind.speed}km/h</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-lable">Humidity</span>
                        <span className="parameter-value">{data.weatherResponse.main.humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-lable">Pressure</span>
                        <span className="parameter-value">{data.weatherResponse.main.pressure}mbar</span>
                    </div>
                </div>
            </div>
        </div>

    ); 

}

export default CurrentWeather;