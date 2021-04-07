import "./CurrentReport.css";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { timeFormat } from "../../services/utils";
import copenhagenPhoto from "../../assets/copenhagen3.jpeg";
import raleighPhoto from "../../assets/raleigh.jpeg";
import newYorkPhoto from "../../assets/newYork.jpeg";

function CurrentReport(props) {
  const { raleigh, newYork, copenhagen } = props;

  return (
    <div className="current-section">
      <div className="title">
        <h1>Current Weather</h1>
      </div>

      <div className="report-container">
        <div className="report-card">
          {raleigh && (
            <Link to="/detail/raleigh">
              <div>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={raleighPhoto} />
                  <Card.Body>
                    <Card.Title>
                      {raleigh.location.name}, {raleigh.location.region}
                    </Card.Title>
                    <Card.Text>
                      <h5>
                        {Math.floor((raleigh.current.temperature * 9) / 5 + 32)}
                        °{raleigh.current.weather_descriptions[0]}
                      </h5>
                      <h5>
                        Wind: {raleigh.current.wind_speed}{" "}
                        {raleigh.current.wind_dir}
                      </h5>
                      <h5>{timeFormat(raleigh.location.localtime)}</h5>
                    </Card.Text>
                    <Button variant="primary">Today's Forecast</Button>
                  </Card.Body>
                </Card>
              </div>
            </Link>
          )}
        </div>

        <div className="report-card">
          {newYork && (
            <Link to="/detail/new york">
              <div>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={newYorkPhoto} />
                  <Card.Body>
                    <Card.Title>
                      {newYork.location.name}, {newYork.location.region}
                    </Card.Title>
                    <Card.Text>
                      <h5>
                        {Math.floor((newYork.current.temperature * 9) / 5 + 32)}
                        °{newYork.current.weather_descriptions[0]}
                      </h5>
                      <h5>
                        Wind: {newYork.current.wind_speed}{" "}
                        {newYork.current.wind_dir}
                      </h5>
                      <h5>{timeFormat(newYork.location.localtime)}</h5>
                    </Card.Text>

                    <Button variant="primary">Today's Forecast</Button>
                  </Card.Body>
                </Card>
              </div>
            </Link>
          )}
        </div>

        <div className="report-card">
          {copenhagen && (
            <Link to="/detail/copenhagen">
              <div>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={copenhagenPhoto} />
                  <Card.Body>
                    <Card.Title>
                      {copenhagen.location.name}, {copenhagen.location.region}
                    </Card.Title>
                    <Card.Text>
                      <h5>
                        {Math.floor(
                          (copenhagen.current.temperature * 9) / 5 + 32
                        )}
                        °{copenhagen.current.weather_descriptions[0]}
                      </h5>
                      <h5>
                        Wind: {copenhagen.current.wind_speed}{" "}
                        {copenhagen.current.wind_dir}
                      </h5>
                      <h5>{timeFormat(copenhagen.location.localtime)}</h5>
                      {/* <img src={copenhagen.current.weather_icons[0]} /> */}
                    </Card.Text>
                    <Button variant="primary">Today's Forecast</Button>
                  </Card.Body>
                </Card>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default CurrentReport;
