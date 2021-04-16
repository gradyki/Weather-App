import "./Detail.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { forecastURL } from "../../services/index";
import { Card, CardDeck, Spinner } from "react-bootstrap";
import sun from "../../assets/sun2.jpg";
import moon from "../../assets/Moon.jpg";
import { timeFormat, dateFormat } from "../../services/utils";
import SearchFailed from "../../screens/SearchFailed/SearchFailed";
import ForcastReport from "../../components/ForecastReport/ForecastReport";
import ForecastReport from "../../components/ForecastReport/ForecastReport";

function Detail() {
  const [forecast, setForecast] = useState(null);
  const [dayForecast, setDayForecast] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const search = useParams();

  useEffect(() => {
    const getForecast = async () => {
      const resp = await axios.get(`${forecastURL}${search.id}`);
      setForecast(resp.data);
      setDayForecast(resp.data.forecast);
      setLoaded(true);
    };
    getForecast();
  }, [search]);

  if (!isLoaded) {
    return (
      <div className="spinner-container">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  let dateFormatted = dateFormat(forecast.location.localtime);
  let forecastInfo = dayForecast[dateFormatted];

  console.log("info", forecastInfo);

  if (forecast.success === false) {
    return <SearchFailed />;
  } else {
    return (
      <div>
        <NavBar />
        <div className="forecast-container">
          <div className="forecast-title">
            <h1>
              {forecast.location.country === "United States of America"
                ? `${forecast.location.name} , ${forecast.location.region}`
                : `${forecast.location.name} , ${forecast.location.country}`}
            </h1>
          </div>

          <div className="forecast-cards">
            <div className="current-forecast-card">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={forecast.current.is_day === "yes" ? sun : moon}
                />
                <Card.Body>
                  <Card.Title>Current</Card.Title>
                  <Card.Text>
                    <h5>
                      {Math.floor((forecast.current.temperature * 9) / 5 + 32)}
                      °F
                    </h5>
                    <h5>Humidity: {forecast.current.humidity} %</h5>
                    <h5>
                      Wind: {forecast.current.wind_speed} mph{" "}
                      {forecast.current.wind_dir}
                    </h5>
                    <h5>{timeFormat(forecast.location.localtime)}</h5>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    {forecast.current.weather_descriptions[0]}
                  </small>
                </Card.Footer>
              </Card>
            </div>
          </div>
          <div>
            <ForecastReport forecastInfo={forecastInfo} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Detail;
