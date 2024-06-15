import React from 'react';
import { classnames } from '../../lib';

const Textarea = (props, className) => {
  return (
    <textarea
      rows="9"
      className={classnames('textarea input', className && className)}
      {...props}
    />
  );
};

export default Textarea;
