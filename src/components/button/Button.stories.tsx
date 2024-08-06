import TurnSlightLeftOutlinedIcon from '@mui/icons-material/TurnSlightLeftOutlined';
import { fn } from '@storybook/test';
import React from 'react';
import { Button as ButtonUI } from './Button';

export default {
  title: 'UI/Button',
  component: ButtonUI,
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export const Button = {
  args: {
    label: 'Button',
  },
};

export const ButtonWithIcon = {
  args: {
    Icon: <TurnSlightLeftOutlinedIcon />,
    label: 'Button',
  },
};
