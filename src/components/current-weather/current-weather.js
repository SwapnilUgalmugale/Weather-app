import "./current-weather.css"
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                   <p className="city">Pune</p>
                   <p className="weather-description">Sunny</p>
                </div>
                <img alt="weather" className="weather-icon" src="icons/sun.png" />
            </div>
            <div className="bottom">
                <p className="temperature">18°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-lable">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-lable">Feels Like</span>
                        <span className="parameter-value">22</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-lable">Wind speed</span>
                        <span className="parameter-value">8.8km/h</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-lable">Humidity</span>
                        <span className="parameter-value">50%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-lable">Pressure</span>
                        <span className="parameter-value">1011mbar</span>
                    </div>
                </div>
            </div>
        </div>

    ); 

}

export default CurrentWeather;