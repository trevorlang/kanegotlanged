export default `
/* Position and sizing of burger button */
.bm-burger-button {
  position: fixed;
  width: 36px;
  height: 30px;
  left: 45px;
  top: 45px;
}

/* Color/shape of burger icon bars */
.bm-burger-bars {
  background: #cfa562;
}

/* Color/shape of burger icon bars on hover*/
.bm-burger-bars-hover {
  background: #ecc381;
}

/* Position and sizing of clickable cross button */
.bm-cross-button {
  height: 24px;
  width: 24px;
}

/* Color/shape of close button cross */
.bm-cross {
  background: #bdc3c7;
}

/*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
.bm-menu-wrap {
  position: fixed;
  height: 100%;
}

/* General sidebar styles */
.bm-menu {
  background: #53455f;
  padding: 2.5em 0 0;
  font-size: 1.15em;
}

/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
  fill: #373a47;
}

/* Wrapper for item list */
.bm-item-list {
  color: #fff;
  padding: 0.8em;
  
}

/* Individual item */
.bm-item {
  display: inline-block;
  color: #fff;
  padding: .25rem 0;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  font-size: 1rem;
}

/* Styling of overlay */
.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}
`;
