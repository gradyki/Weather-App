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
import weather from "../../assets/Weather.jpg";
import { timeFormat } from "../../services/utils";

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
  console.log("forecast", forecast);
  if (forecast.success === false) {
    return <h1>oops something went wrong</h1>;
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
                      {Math.floor((forecast.current.temperature * 9) / 5 + 32)}°{" "}
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
            {/* <div className="forecast-card">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={weather} />
              <Card.Body>
                <Card.Title>Forecast</Card.Title>
                <Card.Text>Test</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </div> */}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Detail;
