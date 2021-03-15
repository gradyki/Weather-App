import './App.css';
import { Switch, Route } from 'react-router-dom'
import {useEffect, useState } from 'react'
import { currentURL } from './services/index'
import axios from 'axios'
import Home from '../src/screens/Home/Home'
import Detail from '../src/screens/Detail/Detail'


function App() {

  const [raleigh, setRaleigh] = useState(null)
  const [newYork, setNewYork] = useState(null)
  const [copenhagen, setCopenhagen] = useState(null)


  useEffect(async() => {
    const respRal = await axios.get(`${currentURL}Raleigh`)
    const resNy = await axios.get(`${currentURL}New%York`)
    const resCop = await axios.get(`${currentURL}Copenhagen`)
    setRaleigh(respRal.data)
    setNewYork(resNy.data)
    setCopenhagen(resCop.data)
   
  }, [])
  

   

console.log('below useeffect', raleigh)

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Home raleigh={raleigh} newYork={newYork} copenhagen={copenhagen}/>
        </Route>
        <Route path='/detail/:id'>
          <Detail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
