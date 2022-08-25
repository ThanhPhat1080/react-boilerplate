// Libraries
import * as renderer from 'react-test-renderer';

// Components
import { Animals } from '@Components';

describe('Testing Animals Component', () => {
  test('It should render correctly', () => {
    const component = renderer.create(<Animals />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
