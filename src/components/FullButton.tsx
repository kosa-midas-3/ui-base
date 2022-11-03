import { PropsWithChildren } from "react";
import styled from "styled-components";

interface FullButtonProps {
  onClick: () => void;
}

const FullButton = ({
  onClick,
  children,
}: PropsWithChildren<FullButtonProps>) => {
  return <FullButtonBox onClick={onClick}>{children}</FullButtonBox>;
};

const FullButtonBox = styled.div`
  width: 100%;
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #6cdc84;
  border: 2px solid #6cdc84;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 8px;
  transition: 0.5s all;
  :hover {
    background-color: #ffffff;
    color: #6cdc84;
  }
`;

export default FullButton;
