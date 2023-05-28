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
