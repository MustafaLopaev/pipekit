// Used by Menu interfaces to extend
interface MenuInterface {
  name: string; // Name of component
  link: string; // Link to navigate
}

// Main Menu Interface
interface MainMenuInterface extends MenuInterface {}

// Sub Menu Interface
interface SubMenuInterface extends MenuInterface {}

// Main Menu components
const MainMenu: MainMenuInterface[] = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Dashboard',
    link: '/dashboard',
  },
];
// Sub Menu components
const SubMenu: SubMenuInterface[] = [];

// Exporting
export { MainMenu, SubMenu };
