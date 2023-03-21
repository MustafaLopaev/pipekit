// Custom css modules of page
import './index.css';

import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

import { Brand } from '../../components/Brand';
import { Search } from '../../components/Search';
import { NavbarInterface } from './index.d';
import { MainMenu } from './Menu';

const Navbar = ({}: NavbarInterface) => {
  const [isOpen, setIsOpen] = useState<any>({
    toggle: false,
  });

  function handleOpenClose(value: string) {
    setIsOpen({
      ...isOpen,
      [value]: !isOpen[value],
    });
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-container">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <Brand title="Pipekit" />
        </a>
        <button
          className="navbar-toggler toggler"
          type="button"
          name="toggle"
          onClick={(e) => handleOpenClose('toggle')}
          aria-expanded={isOpen['toggle']}
        >
          <MenuIcon sx={{ fontSize: '30px' }} />
        </button>
        <div
          className={`collapse navbar-collapse ${
            isOpen['toggle'] ? 'show' : ''
          }`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {MainMenu.map((menuItem, index) => (
              <li key={index}>
                <a
                  className="nav-link active navbar-link-header"
                  href={menuItem.link}
                >
                  {menuItem.name}
                </a>
              </li>
            ))}
          </ul>
          <Search />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
