import { Dispatch, PropsWithChildren, RefObject, SetStateAction } from "react";
import styled from "styled-components";
import ModalWrapper from "./common/ModalWrapper";
import close from "../assets/colse.png";
interface CustomModalProps {
  modalRef: RefObject<HTMLDivElement>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const CustomModal = ({
  modalRef,
  setIsOpen,
  children,
}: PropsWithChildren<CustomModalProps>) => {
  return (
    <ModalWrapper modalRef={modalRef} setIsOpen={setIsOpen}>
      <ModalContainer>
        <img
          src={close}
          onClick={() => {
            setIsOpen(false);
          }}
        />
        {children}
      </ModalContainer>
    </ModalWrapper>
  );
};

const ModalContainer = styled.div`
  position: relative;
  width: 562px;
  padding: 40px;
  display: flex;
  z-index: 2;
  background-color: white;
  border-radius: 30px;
  flex-direction: column;
  > img {
    position: absolute;
    top: 30px;
    right: 30px;
  }
`;

export default CustomModal;
