import Card from 'react-bootstrap/Card'
import './LandingImage.css'

function LandingImage() {


  return (
  <div className='landing-image'>
  <Card className="bg-dark">
    <Card.Img id='landing'src='https://cdn.pixabay.com/photo/2016/03/09/09/16/earth-1245707_960_720.jpg' alt="Card image" />
    <Card.ImgOverlay>
      <div className='landing-title'>
      <h1>Weather-Wise</h1>
        </div>
      {/* <Card.Text>
        This is a demo site I built using the Weatherstack API for up to date weather conditions and forecast.
    </Card.Text> */}
    </Card.ImgOverlay>
      </Card>
      </div>
)
}

export default LandingImage

// https://media.istockphoto.com/photos/lightning-during-summer-storm-picture-id1206456618?b=1&k=6&m=1206456618&s=170667a&w=0&h=q8twclyjZKf_J8kZyuY4mUQgLq8C9LnAYt_RxWcLmH4=

// https://weatherflow.com/wp-content/uploads/2020/03/weird-weather-1.png