import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { forecastURL } from "../../services/index";
import { Card, CardDeck } from "react-bootstrap";
import sun from "../../assets/sun2.jpg";
import { timeFormat } from "../../services/utils";

function Detail() {
  const [forecast, setForecast] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const search = useParams();

  console.log("forecast ", forecast);

  useEffect(() => {
    const getForecast = async () => {
      const resp = await axios.get(`${forecastURL}${search.id}`);
      setForecast(resp.data);
      setLoaded(true);
    };
    getForecast();
  }, [search]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <NavBar />
      <div className="forecast-container">
        <div>
          <h1>
            {forecast.location.name}, {forecast.location.region}
          </h1>
        </div>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src={sun} />
            <Card.Body>
              <Card.Title>Current</Card.Title>
              <Card.Text>
                <h5>
                  {Math.floor((forecast.current.temperature * 9) / 5 + 32)}°{" "}
                  {forecast.current.weather_descriptions[0]}
                </h5>
                <h5>
                  Wind: {forecast.current.wind_speed} mph{" "}
                  {forecast.current.wind_dir}
                </h5>
                <h5>{timeFormat(forecast.location.localtime)}</h5>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
      <Footer />
    </div>
  );
}

export default Detail;
