import './index.css';

// Interface for props
interface HomeInterface {}

/* Home page is used to display the general data. */
const Home = (props: HomeInterface) => {
  return (
    <div id="homePage" className="base-container">
      Home Page
    </div>
  );
};

export default Home;
