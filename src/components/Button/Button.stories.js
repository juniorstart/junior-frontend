import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('Primary', () => <Button>Hello Button</Button>)
  .add('Secondary', () => <Button secondary>Hello Button</Button>);