export type Name = {
  first: string;
  last: string;
};

export type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export type HeadingProps = {
  children: string;
};

export type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type OscarProps = {
  children: React.ReactNode;
};

export type StatusProps = {
  status: 'loading' | 'success' | 'error';
};

export type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export type ContainerProps = {
  styles: React.CSSProperties;
};

export type AuthUser = {
  name: string;
  email: string;
};

export type CounterState = {
  count: number;
};

export type UpdateAction = {
  type: 'increment' | 'decrement';
  payload: number;
};

export type ResetAction = {
  type: 'reset';
};

export type CounterAction = UpdateAction | ResetAction;
