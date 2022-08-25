// Components
import { Link } from 'react-router-dom';
import { Animals } from '@Components';

// Enums
import { ROUTERS } from '@enums';

export const Zoo = () => {
  return (
    <>
      <h1>Welcome to the Zoo !</h1>
      <Animals />
      <nav>
        <Link to={ROUTERS.ROOT}>
          Back to HomePage
          <span role='img' aria-label='home'>
            🏠
          </span>
        </Link>
      </nav>
    </>
  );
};

export default Zoo;
