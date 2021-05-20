import { useState, MouseEventHandler } from 'react';

export const useModal = (): [isShown: boolean, toggle: MouseEventHandler] => {
  const [isShown, setIsShown] = useState<boolean>(false);

  const toggle = (): void => setIsShown(!isShown);
  return [isShown, toggle];
};
