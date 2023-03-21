// Custom css modules of page
import './index.css';

import { useState } from 'react';
import { Outlet } from 'react-router-dom';

interface NavbarInterface {}

const Navbar = (props: NavbarInterface) => {
  return (
    <>
      Navbar
      <Outlet />
    </>
  );
};

export default Navbar;
