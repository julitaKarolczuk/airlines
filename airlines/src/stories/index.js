import React from 'react';
import { storiesOf } from '@storybook/react'
import { Button } from '@storybook/react/demo';
import InputField from '../common/InputField';
import { withKnobs, text, boolean, number, withActions } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

storiesOf('TEST', module)
  .addDecorator(withKnobs)
  .add('as dynamic variables', () => {
    const groupId = 'GROUP-ID1'
    const name = text('Name', 'Arunoda Susiripala', groupId);
    const shouldDisplay = boolean(true, groupId);
    const numberTest = number(4, groupId);

    const content = `My name is ${name}.`;
    return shouldDisplay ? (<div>{content}{numberTest}</div>) : <p>ASD</p>;
  })
  .addDecorator(withActions('mouseover', 'asd'))
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with emoji', () => (
    <Button onClick={action('asd')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ))
  .add('with test input', () => (
    <InputField meta={{ touched: true }} />
  ));