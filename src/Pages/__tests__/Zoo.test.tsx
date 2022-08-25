// Libraries
import * as renderer from 'react-test-renderer';

// Components
import { Zoo } from '@Pages';

describe('Testing Zoo', () => {
  test('It should render correctly', () => {
    const component = renderer.create(<Zoo />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
