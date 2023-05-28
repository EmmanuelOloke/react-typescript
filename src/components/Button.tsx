import { ButtonProps } from '../types';

export const Button = (props: ButtonProps) => {
  return <button onClick={(event) => props.handleClick(event, 1)}>Click</button>;
};
