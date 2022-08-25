// Libraries
import * as renderer from 'react-test-renderer';

// Components
import { BrowserRouter } from 'react-router-dom';
import { Zoo } from '@Pages';

describe('Testing Zoo', () => {
  test('It should render correctly', () => {
    const component = renderer
      .create(
        <BrowserRouter>
          <Zoo />
        </BrowserRouter>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
