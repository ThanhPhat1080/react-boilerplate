import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { Animals } from './Animals';

export default {
  title: 'Animals',
  component: Animals,
} as ComponentMeta<typeof Animals>;

export const Template: ComponentStory<typeof Animals> = () => <Animals />;
