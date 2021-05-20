import React, { FunctionComponent, MouseEventHandler } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isShown: boolean;
  hide: MouseEventHandler;
  modalContent: JSX.Element;
  headerText: string;
}

const Modal: FunctionComponent<ModalProps> = ({ isShown, hide, modalContent, headerText }) => {
  const modal = (
    <div className="text-center">
      <div>{headerText}</div>
      {modalContent}
      <button onClick={hide}>Button</button>
    </div>
  );

  return isShown ? createPortal(modal, document.getElementById('modal-root') as HTMLElement) : null;
};

export default Modal;
