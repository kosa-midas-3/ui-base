import ReactDom from "react-dom";
import { Dispatch, PropsWithChildren, RefObject, SetStateAction } from "react";
import styled from "styled-components";
import OutsideClickHandler from "react-outside-click-handler";
interface ModalProps {
  modalRef: RefObject<HTMLDivElement>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalWrapper = ({
  modalRef,
  children,
  setIsOpen,
}: PropsWithChildren<ModalProps>) => {
  return modalRef.current ? (
    ReactDom.createPortal(
      <WrapperBox>
        <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
          {children}
        </OutsideClickHandler>
      </WrapperBox>,
      modalRef.current
    )
  ) : (
    <>{children}</>
  );
};

const WrapperBox = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

export default ModalWrapper;
