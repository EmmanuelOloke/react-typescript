import { StatusProps } from '../types';

export const Status = ({ status }: StatusProps) => {
  let message;

  if (status === 'loading') {
    message = 'Loading...';
  } else if (status === 'success') {
    message = 'Data Fetched Successfully!';
  } else if (status === 'error') {
    message = 'Error Fetching Data';
  }

  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};
