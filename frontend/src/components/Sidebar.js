import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SocialIcons from './UI/SocialIcons';
import { logout } from '../actions/auth';
import classes from '../styles/Sidebar.module.css';

const Sidebar = () => {
  const { user: currentUser } = useSelector(state => state.auth);
  
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
  };

  const toggleMenu = () => {
    const navMenu = document.querySelector('nav');
    navMenu.classList.toggle(classes.toggle);
};

let section;
if(!currentUser) {
  section =  <ul>
  <li>
    <NavLink to="/login" className={classes.navlink} activeClassName={classes.active}>
      Login
    </NavLink>
  </li>
  <li>
    <NavLink to="/signupoptions" className={classes.navlink} activeClassName={classes.active}>
      Sign Up
    </NavLink>
  </li>
</ul>
}

else if (currentUser && currentUser.userId.roleId === "patient"||'') {
  section = <ul>
  <li>
    <NavLink to="/doctors" className={classes.navlink} activeClassName={classes.active}>
      Doctors
    </NavLink>
  </li>
  <li>
    <NavLink exact to="/appointments" className={classes.navlink} activeClassName={classes.active}>
      Appointments
    </NavLink>
  </li>
  <li>
    <NavLink to="/appointments/new" className={classes.navlink} activeClassName={classes.active}>
      Add Appointment
    </NavLink>
  </li>
  <li>
    <a href="/login" onClick={logOut} className={classes.navlink}>
      Logout
    </a>
  </li>
</ul>
} else if(currentUser && currentUser.userId.roleId === "doctor") {
  section = <ul>
  
  <li>
    <NavLink to="/adddoctor" className={classes.navlink} activeClassName={classes.active}>
      Add Doctor Profile
    </NavLink>
  </li>
  <li>
    <NavLink to="/doctorappoint" className={classes.navlink} activeClassName={classes.active}>
      View Appointments
    </NavLink>
  </li>
  <li>
    <a href="/login" onClick={logOut} className={classes.navlink}>
      Logout
    </a>
  </li>
</ul>
}
else if(currentUser && currentUser.userId.roleId === "admin") {
  section = <ul>
  
  <li>
    <NavLink to="/viewusers" className={classes.navlink} activeClassName={classes.active}>
      Manage Users
    </NavLink>
  </li>
 
  <li>
    <NavLink to="/doctorappoint" className={classes.navlink} activeClassName={classes.active}>
      Manage Appointments
    </NavLink>
  </li>
  <li>
    <a href="/login" onClick={logOut} className={classes.navlink}>
      Logout
    </a>
  </li>
</ul>
} else {
  section =  <ul>
  <li>
    <NavLink to="/login" className={classes.navlink} activeClassName={classes.active}>
      Login
    </NavLink>
  </li>
  <li>
    <NavLink to="/signupoptions" className={classes.navlink} activeClassName={classes.active}>
      Sign Up
    </NavLink>
  </li>
</ul>
}

  return (
    <div>
      <button type="button" className={classes.hamburger} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </button>
      <nav className={`${classes.sidenav} ${classes.toggle}`}>
        <NavLink exact to="/">
          <h2>Doctors App</h2>
        </NavLink>
       
        {currentUser
            && (
              <NavLink to="/profile" className={classes.navlink} activeClassName={classes.active}>
                {currentUser.userId.firstName}
              </NavLink>
            )}
            {section}
           
        <footer className={classes.social}>
          <SocialIcons />
          <p>&copy;2020, Doctor App</p>
        </footer>
      </nav>
    </div>
  );
};

export default Sidebar;
