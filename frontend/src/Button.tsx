import * as React from 'react';

import './styles/Button.css';

type ButtonProps = {
  isSubmit?: boolean,
  text: string,
  clickHandler?: () => void | null,
  disabled?: boolean,
}

const Button = ({
  text, isSubmit, clickHandler, disabled,
}: ButtonProps) => (
  <button
    className="button"
    type={isSubmit ? 'submit' : 'button'}
    onClick={clickHandler}
    disabled={disabled}
  >
    {text}
  </button>
);

Button.defaultProps = {
  isSubmit: false,
  clickHandler: null,
  disabled: false,
};

export default Button;
