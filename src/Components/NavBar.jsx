import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { faBold } from "@fortawesome/free-solid-svg-icons";
import {Link } from "react-router-dom";
import Profile from './ProfilePage'
import { NavLink } from "react-bootstrap";
export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar
      className="text-center"
      expand="lg"
      dark
      bgColor="black"
      color="white"
    >
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">Eventify</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="/profile">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem></MDBNavbarItem>
            <form className="d-flex input-group w-auto">
              <input
                type="search"
                className="form-control"
                placeholder="Search Location"
                aria-label="Search"
              />
              <MDBBtn color="primary">Search</MDBBtn>
            </form>
          </MDBNavbarNav>
          <MDBDropdown>
            <MDBDropdownToggle tag="a" className="nav-link">
              User
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem link = {Profile}>
                Profile
                {/* <Link to= {Profile}/> */}
              </MDBDropdownItem>
              <MDBDropdownItem link = "">Your Events</MDBDropdownItem>
              {/* <MDBDropdownItem link>Setting</MDBDropdownItem> */}
              <MDBDropdownItem link>Log Out</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}