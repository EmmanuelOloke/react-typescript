import { ButtonProps } from '../types';

export const Button = ({ handleClick }: ButtonProps) => {
  return <button onClick={(event) => handleClick(event, 1)}>Click</button>;
};
