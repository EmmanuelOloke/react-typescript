import { Login } from './Login';

type PrivateProps = {
  isLoggedIn: boolean;
  Component: React.ComponentType;
};

export const Private = ({ isLoggedIn, Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component />;
  } else {
    return <Login />;
  }
};