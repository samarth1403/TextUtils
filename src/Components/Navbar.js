import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";


export default function Navbar(props) {
  
  return (
    
    <div>
      
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
        
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
         
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
            
                <Link to="/"className="nav-link active" aria-current="page" >
                  {props.homeTitle}
                </Link>
         
              </li>
              <li className="nav-item">
           
                <Link to="/about" className="nav-link">
                  {props.aboutTitle}
                </Link>
    
              </li>
            </ul>
            <div className={`form-check text-${props.modeBtn} mx-3`}>
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={props.handleRedMode}/>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                Red Mode
                </label>
            </div>
            <div className={`form-check text-${props.modeBtn} mx-3`}>
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={props.handleGreenMode}/>
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                Green Mode
                </label>
            </div>
            <div className={`form-check form-switch text-${props.modeBtn} mx-3`}>
                <input className="form-check-input" type="checkbox" role="switch" name="flexRadioDefault" id="flexSwitchCheckDefault" 
                onClick={props.handleChangeMode}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault"
                >{props.modeBtnText}</label>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      
    </div>
    
  );
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    aboutTitle : PropTypes.string.isRequired,
    homeTitle : PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title : "TitleUtils",
    aboutTitle : "About",
    homeTitle : "Home"
}