import { useState, MouseEventHandler } from 'react';

export const useModal = (): { isShown: boolean; toggle: MouseEventHandler } => {
  const [isShown, setIsShown] = useState(false);

  function toggle(): void {
    setIsShown(!isShown);
  }
  return { isShown, toggle };
};
