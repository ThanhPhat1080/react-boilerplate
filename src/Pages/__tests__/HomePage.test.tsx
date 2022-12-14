// Libraries
import * as renderer from 'react-test-renderer';

// Components
import { BrowserRouter } from 'react-router-dom';
import { HomePage } from '@Pages';

describe('Testing HomePage', () => {
  test('It should render correctly', () => {
    const component = renderer
      .create(
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
