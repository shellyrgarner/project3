

import React from 'react';
import { Grid, Nav, NavItem } from 'react-bootstrap';

function Footer(/*props*/) {
  return (
    <footer>
      <Grid>
        <Nav>
          <NavItem>
            
            Privacy policy
          </NavItem>
          <NavItem
          
            title="Item">
            Terms & Conditions
          </NavItem>

        </Nav>
        <div float = "center" class="imageContainer">
                <a target="_blank" href="https://github.com/">
                <img src="https://png.icons8.com/color/50/000000/github.png"></img>
                </a>
                <a target="_blank" href="https://www.linkedin.com/">
                <img src="https://png.icons8.com/color/50/000000/linkedin.png"></img>
                </a>
                <a target="_blank" href="https://www.facebook.com/">
                <img src="https://png.icons8.com/color/50/000000/facebook.png"></img>
                </a>
                <a target="_blank" href="https://www.twitter.com/">
                <img src="https://png.icons8.com/color/50/000000/twitter.png"></img>
                </a>
            </div>
        <div className="text-center small copyright">
          © GTBC 2018
        </div>
      </Grid>
    </footer>
  );
}

export default Footer;