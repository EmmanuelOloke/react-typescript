type GreetProps = {
  name: string;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>Welcome {props.name}, you have 20 unread messages. Popular man you are</h2>
    </div>
  );
};
