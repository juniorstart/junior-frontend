import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from './Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Primary', () => {
    const label = 'Colors';
    const options = {
      Red: '#F17A7E',
      Orange:  '#F9A66C',
      Yellow: '#FFC94B',
    };
    const defaultValue = '#F9A66C';
    const groupId = 'GROUP-ID1';
    const value = select(label, options, defaultValue, groupId);
    return <Button color={value}>Close / Save</Button>;
  })
  .add('Secondary', () => <Button secondary>Remove</Button>);
