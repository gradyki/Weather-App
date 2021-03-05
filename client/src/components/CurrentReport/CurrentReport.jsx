import './CurrentReport.css'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { timeFormat } from '../../services/utils'



function CurrentReport(props) {
  const { raleigh, newYork, copenhagen } = props
  
  
  return (
    <div className='current-section'>
      <div className='title'>
        <h1>Current Weather</h1>
      </div>

      <div className='report-container'>
    <div className= 'report-card'>{raleigh && <Link to='/detail'>
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/132984577_749384349270182_9004728231977785116_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=Sv-KhgZXjP0AX89AtVH&oh=11497e1933d75a7ed7de9a85c9ff03b4&oe=6069C538" />
          <Card.Body>
            <Card.Title>{raleigh.location.name}, {raleigh.location.region}</Card.Title>
            <Card.Text>
                  <h3>{Math.floor((raleigh.current.temperature * 9 / 5) + 32)}°
              {raleigh.current.weather_descriptions[0]}</h3>
              <h3>{raleigh.current.wind_speed} {raleigh.current.wind_dir}</h3>
                  <h3>{timeFormat(raleigh.location.localtime)}</h3>
              {/* <img src={raleigh.current.weather_icons[0]} /> */}
            </Card.Text>
            <Button variant="primary">Today's Forecast</Button>
          </Card.Body>
        </Card>
      </div>
    </Link>}
      </div>
      
      <div className= 'report-card'>{newYork && <Link to='/detail'>
      <div>
        <Card  style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/121199423_817695555717838_1618265885191395506_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=495aYkGw28AAX-O76iQ&oh=2a518000e2c882b727b1e1df39983aca&oe=6068758D" />
          <Card.Body>
            <Card.Title>{newYork.location.name}, {newYork.location.region}</Card.Title>
            <Card.Text>
                  <h3>{Math.floor((newYork.current.temperature * 9 / 5) + 32)}°
              {newYork.current.weather_descriptions[0]}</h3>
              <h3>{newYork.current.wind_speed} {newYork.current.wind_dir}</h3>
              <h3>{timeFormat(newYork.location.localtime)}</h3>
              {/* <img src={newYork.current.weather_icons[0]} /> */}
            </Card.Text>
            <Button variant="primary">Today's Forecast</Button>
          </Card.Body>
        </Card>
      </div>
    </Link>}
      </div>

      <div className= 'report-card'>{copenhagen && <Link to='/detail'>
      <div>
        <Card  style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://scontent.cdninstagram.com/v/t51.2885-15/e15/p480x480/125559165_712080873021804_1080195584354446808_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=N7OchD6MljUAX-cTtvd&oh=4c055656c4a55fc027c64c62304495e6&oe=6043230D" />
          <Card.Body>
            <Card.Title>{copenhagen.location.name}, {copenhagen.location.region}</Card.Title>
            <Card.Text>
                  <h3>{Math.floor((copenhagen.current.temperature * 9 / 5) + 32)}°
              {copenhagen.current.weather_descriptions[0]}</h3>
              <h3>{copenhagen.current.wind_speed} {copenhagen.current.wind_dir}</h3>
                  <h3>{timeFormat(copenhagen.location.localtime)}</h3>
              {/* <img src={copenhagen.current.weather_icons[0]} /> */}
            </Card.Text>
            <Button variant="primary">Today's Forecast</Button>
          </Card.Body>
        </Card>
      </div>
    </Link>}
      </div>

    </div>
    </div>
    

  )
}

export default CurrentReport

