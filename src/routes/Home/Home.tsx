import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home
      <Link to="/voting">Voting</Link>
    </div>
  );
};

export default Home;
