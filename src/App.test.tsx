// Libraries
import * as renderer from 'react-test-renderer';

// Components
import App from './App';

describe('Testing App', () => {
  test('It should render correctly', () => {
    const component = renderer
      .create(
          <App />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
