import { GreetProps } from '../types';

export const Greet = ({ name, messageCount = 0, isLoggedIn }: GreetProps) => {
  return (
    <div>
      <h2>
        {isLoggedIn
          ? `Welcome ${name}, you have ${messageCount} unread messages. Popular man you are`
          : `Welcome Guest`}
      </h2>
    </div>
  );
};
