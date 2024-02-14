import { MouseEventHandler } from "react";
import Modal from "react-modal";

export interface IModalEdit {
  isOpen: boolean;
  children: React.ReactNode;
  onCloseModal: MouseEventHandler<HTMLButtonElement>;
  customStyles: any;
}

const ModalEdit = ({
  isOpen,
  children,
  customStyles,
  onCloseModal,
}: IModalEdit) => {
  return (
    <>
      <Modal isOpen={isOpen} style={customStyles} onRequestClose={onCloseModal}>
        {children}
      </Modal>
    </>
  );
};

export default ModalEdit;
