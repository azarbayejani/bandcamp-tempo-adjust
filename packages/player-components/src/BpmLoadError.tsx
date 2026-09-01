import React from 'react';

import * as css from './BpmLoadError.module.scss';

const BpmLoadError = () => (
  <div className={css.error} role="alert">
    <span>Error loading BPM. Please try reloading the page.</span>
  </div>
);

export default BpmLoadError;
