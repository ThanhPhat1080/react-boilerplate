// Libraries
import * as renderer from 'react-test-renderer';

// Components
import { HomePage } from '@Pages';

describe('Testing HomePage', () => {
  test('It should render correctly', () => {
    const component = renderer.create(<HomePage />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
