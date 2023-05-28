import { InputProps } from '../types';

export const Input = ({ value }: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return <input type="text" value={value} onChange={handleInputChange} />;
};
