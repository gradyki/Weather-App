import "./ForecastReport.css";

export default function ForecastReport(props) {
  const { forecastInfo } = props;
  let astro = forecastInfo.astro;
  return (
    <div className="forecast-report">
      <h3>Forecast</h3>
      <h5>
        High: {Math.floor((forecastInfo.maxtemp * 9) / 5 + 32)}
        °F
      </h5>
      <h5>
        Average: {Math.floor((forecastInfo.avgtemp * 9) / 5 + 32)}
        °F
      </h5>
      <h5>Low: {Math.floor((forecastInfo.mintemp * 9) / 5 + 32)}°F</h5>
      <h5>Sunrise: {astro.sunrise}</h5>
      <h5>Sunset: {astro.sunset}</h5>

      {/* <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Forecast</Card.Title>
          <Card.Text>
            <h5>
              High: {Math.floor((forecastInfo.maxtemp * 9) / 5 + 32)}
              °F
            </h5>
            <h5>Low: {Math.floor((forecastInfo.mintemp * 9) / 5 + 32)}°F</h5>
            <h5>Sunrise: {astro.sunrise}</h5>
            <h5>Sunset: {astro.sunset}</h5>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">footer</small>
        </Card.Footer>
      </Card>  */}
    </div>
  );
}
