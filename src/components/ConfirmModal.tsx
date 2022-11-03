import { Dispatch, RefObject, SetStateAction } from "react";
import styled from "styled-components";
import Button from "./Button";
import ModalWrapper from "./common/ModalWrapper";

interface ConfirmModalProps {
  text: {
    title: string;
    accept: string;
    refuse: string;
  };
  onFinally: (result: boolean) => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  modalRef: RefObject<HTMLDivElement>;
}

const ConfirmModal = ({
  text,
  modalRef,
  onFinally,
  setIsOpen,
}: ConfirmModalProps) => {
  return (
    <ModalWrapper modalRef={modalRef} setIsOpen={setIsOpen}>
      <ModalBox>
        <Title>{text.title}</Title>
        <ButtonWrapper>
          <Button
            size="md"
            color="gray"
            onClick={() => {
              setIsOpen(false);
              onFinally(false);
            }}
          >
            {text.refuse}
          </Button>
          <Button
            size="md"
            color="green"
            onClick={() => {
              setIsOpen(false);
              onFinally(true);
            }}
          >
            {text.accept}
          </Button>
        </ButtonWrapper>
      </ModalBox>
    </ModalWrapper>
  );
};

const ModalBox = styled.div`
  width: 600px;
  height: 380px;
  z-index: 2;
  border-radius: 30px;
  background-color: #ffffff;
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  white-space: pre-wrap;
  width: 320px;
  font-weight: 600;
  font-size: 40px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default ConfirmModal;
