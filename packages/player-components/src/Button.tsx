import React from 'react';

import classnames from 'classnames';

import { useTheme } from '@tempo-adjust/theme-provider';

import * as css from './Button.module.scss';

// In practice, this can be used as a checkbox, radio, and a button
// You can use aria-checked to make the button active
const Button = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const theme = useTheme();
  return (
    <button
      className={classnames(css.button, {
        [css.dark]: theme === 'dark',
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
