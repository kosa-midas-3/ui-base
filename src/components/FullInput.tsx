import { RefObject } from "react";
import styled from "styled-components";

interface FullInputProps {
  placeholder: string;
  onChange: () => void;
  value: string;
  name: string;
  inputRef: RefObject<HTMLInputElement>;
}

const FullInput = ({ inputRef, ...props }: FullInputProps) => {
  return <InputBox {...props} ref={inputRef} />;
};

const InputBox = styled.input`
  outline: none;
  width: 100%;
  height: 43px;
  border-radius: 8px;
  border: 1px solid #828282;
  padding: 16px;
  font-size: 16px;
  font-weight: 500;
`;

export default FullInput;
