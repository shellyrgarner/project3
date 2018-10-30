

import React from 'react';
import './Footer.css';

// <footer>
//   <Grid>
//     <Nav>
//       <NavItem>

//         Privacy policy
//       </NavItem>
//       <NavItem

//         title="Item">
//         Terms & Conditions
//       </NavItem>

//     </Nav>
//     <div className="text-center small copyright">
//       © GTBC 2018
//     </div>
//   </Grid>
// </footer>
function Footer(/*props*/) {
  return (
    <div className="Footer-main">
      <div className="row">
        <div className="col-3">
          <p>Logo Here</p>
        </div>
        <div className="col-3">
          <h3>Links</h3>
        </div>
        <div className="col-3">
          <h3>Other</h3>
        </div>
        <div className="col-3">
        <a target="_blank" href="https://github.com/">
            <img src="https://png.icons8.com/color/50/000000/github.png" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/">
            <img src="https://png.icons8.com/color/50/000000/linkedin.png" />
          </a>
          <a target="_blank" href="https://www.facebook.com/">
            <img src="https://png.icons8.com/color/50/000000/facebook.png" />
          </a>
          <a target="_blank" href="https://www.twitter.com/">
            <img src="https://png.icons8.com/color/50/000000/twitter.png" />
          </a>
        </div>
      </div>
      </div>
  );
}

export default Footer;