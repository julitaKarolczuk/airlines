import React from 'react';
import { storiesOf } from '@storybook/react'
import { Button } from '@storybook/react/demo';
import InputField from '../common/InputField';

storiesOf('TEST', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ))
  .add('with test input', () => (
    <InputField meta={{ touched: true }} />
  ));