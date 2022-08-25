// Components
import { Link } from 'react-router-dom';

// Enum
import { ROUTERS } from '@enums';

export const HomePage = () => {
  return (
    <div>
      <h1>
        You are at{' '}
        <span role='img' aria-label='home'>
          🏠
        </span>
      </h1>
      <nav>
        <Link to={ROUTERS.ZOO}>
          Go to the Zoo{' '}
          <span role='img' aria-label='tend'>
            🎪
          </span>
        </Link>
      </nav>
    </div>
  );
};

export default HomePage;
