import React from 'react';

import classnames from 'classnames';

import { useTheme } from '@tempo-adjust/theme-provider';

import * as css from './Button.module.scss';

// in practice, this is used as a checkbox, radio, and a button and should probably be split up for its actual uses
const Button = ({
  children,
  onClick,
  active,
  disabled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
}) => {
  const theme = useTheme();
  console.log('THEME', theme);
  return (
    <button
      className={classnames(css.button, {
        [css.active]: active,
        [css.dark]: theme === 'dark',
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
