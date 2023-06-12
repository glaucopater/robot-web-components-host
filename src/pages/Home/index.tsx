import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <Link to="/reminders">Go to Reminders</Link>
    </div>
  );
};

export default Home;
