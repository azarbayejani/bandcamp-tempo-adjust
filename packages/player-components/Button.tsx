import React from 'react';

import classnames from 'classnames';

import * as css from './Button.module.scss';

// in practice, this is used as a checkbox, radio, and a button and should probably be split up for its actual uses
const Button = ({
  children,
  onClick,
  active,
}: {
  children: React.ReactNode;
  onClick: () => void;
  active?: boolean;
}) => {
  return (
    <div
      role="button"
      className={classnames(css.button, { [css.active]: active })}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
