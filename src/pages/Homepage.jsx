import { Link } from 'react-router-dom';
import PageNav from '../Components/PageNav';
import AppNav from '../Components/AppNav';

function Homepage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1>Homepage</h1>
      <Link to="/app">go to app</Link>
    </div>
  );
}

export default Homepage;
