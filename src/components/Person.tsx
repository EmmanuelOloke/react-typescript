import { Name } from '../types';

type PersonProps = {
  name: Name;
};

export const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
};
