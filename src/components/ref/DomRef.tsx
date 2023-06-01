import { useRef, useEffect } from 'react';

export const DomRef = () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};
