import React from "react";
import { Container, Navbar} from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        fixed="top"
        style={{ color: "rgb(20, 20, 14)" }}
      >
        <Container class="navigation">
          <p id="usersnav">Users Contacts</p>
         
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
