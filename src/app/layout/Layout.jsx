import PropTypes from 'prop-types';
import React from 'react';

import Navbar from '../components/navBar';

const Layout = ({ children }) => {
  return (
    <>
      {<Navbar />}
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Layout;
