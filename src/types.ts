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
