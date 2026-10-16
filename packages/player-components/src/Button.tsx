import React from 'react';

import classnames from 'classnames';

import { useButtonStyle, useTheme } from '@tempo-adjust/theme-provider';

import * as css from './Button.module.scss';

// Spelled as ComponentPropsWithoutRef rather than ButtonHTMLAttributes
// because react/prop-types only sees through the former when validating
// the destructured `className`.
type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

// In practice, this can be used as a checkbox, radio, and a button
// You can use aria-checked to make the button active
const Button = ({ children, className, ...props }: ButtonProps) => {
  const theme = useTheme();
  const buttonStyle = useButtonStyle();
  return (
    <button
      className={classnames(css.button, className, {
        [css.dark]: theme === 'dark',
        [css.rounded]: buttonStyle === 'rounded',
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
