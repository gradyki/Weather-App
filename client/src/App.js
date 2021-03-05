import './App.css';
import { Switch, Route } from 'react-router-dom'
import {useEffect, useState } from 'react'
import { currentURL } from './services/index'
import axios from 'axios'
import Home from '../src/screens/Home/Home'
import Detail from '../src/screens/Detail/Detail'
import { timeFormat } from './services/utils'

function App() {

  const [raleigh, setRaleigh] = useState(null)
  const [newYork, setNewYork] = useState(null)
  const [copenhagen, setCopenhagen] = useState(null)
  // const [ralTime, setRalTime] = useState(null)
  // const [copTime, setCopTime] = useState(null)
  // const [nyTime, setNyTime] = useState(null)

  useEffect(async() => {
    const respRal = await axios.get(`${currentURL}Raleigh`)
    const resNy = await axios.get(`${currentURL}New%York`)
    const resCop = await axios.get(`${currentURL}Copenhagen`)
    setRaleigh(respRal.data)
    setNewYork(resNy.data)
    setCopenhagen(resCop.data)
    // console.log('coptime', timeFormat(copenhagen.location.localtime))
    // setNyTime(timeFormat(newYork.location.localtime))
    // setRalTime(timeFormat(raleigh.location.localtime))
    // setCopTime(timeFormat(copenhagen.location.localtime))
  }, [])
  

   

console.log('below useeffect', raleigh)

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Home raleigh={raleigh} newYork={newYork} copenhagen={copenhagen}/>
        </Route>
        <Route path='/detail'>
          <Detail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
