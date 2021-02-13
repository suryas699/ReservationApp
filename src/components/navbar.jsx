import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class NavBar extends Component {

    render() { 
        return ( 
            <nav className="navbar navbar-light bg-light">
                
                <div className="navbar-brand">
                    My Reservation App <span className="badge badge-pill badge-secondary"></span> 
                </div>
                <Link className="navbar-brand" to="/home">
                    Home <span className="badge badge-pill badge-secondary"></span> 
                </Link>
                <Link className="navbar-brand" to="/reservation">
                    Reservation <span className="badge badge-pill badge-secondary"></span> 
                </Link>
                <Link className="navbar-brand" to="/reservationdetails">
                    Reservation Details <span className="badge badge-pill badge-secondary"></span> 
                </Link>
                <Link className="navbar-brand" to="/profile">
                    Profile <span className="badge badge-pill badge-secondary"></span> 
                </Link>
                
            </nav>
         );
    }
}
 
export default NavBar;