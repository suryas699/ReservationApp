import React from 'react';
import NavBar from './components/navbar';
import {Route,Switch} from 'react-router-dom';
import Profile from './components/profile'
import ReservationDetails from './components/reservationdetails';
import Reservation from './components/reservation';
const App =() =>{
  const home= () =>{
    return(
      <h1>Welcome to the Home page</h1>
    )
  }
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/home" component={home} />
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/reservation" component={Reservation} />
        <Route exact path="/reservationdetails" component={ReservationDetails} />
      </Switch>
      
    </div>
  )

}
export default App;