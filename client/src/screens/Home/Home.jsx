import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

function Home(){

  return (
    <div>
      <Nav />
<Link to='/detail'>
      <div >
        <h1>Home screen test</h1>
        </div>
        </Link>
      <div>
        <Footer />
        </div>
    </div>
  )
} 

export default Home;