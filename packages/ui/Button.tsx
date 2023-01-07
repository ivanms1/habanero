import * as React from 'react';

export const Button = ({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return <button onClick={onClick}>Boop</button>;
};
