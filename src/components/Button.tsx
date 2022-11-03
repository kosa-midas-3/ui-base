import { PropsWithChildren } from "react";
import styled from "styled-components";
import { colorStyle, colorType } from "../foundation/color";
import { sizeStyle, sizeType } from "../foundation/size";

interface ButtonProps {
  size: sizeType;
  color: colorType;
  disable?: boolean;
  onClick?: () => void;
}

const Button = ({
  disable = false,
  onClick,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <ButtonBox
      onClick={() => !disable && onClick?.()}
      {...props}
      disable={disable}
    >
      {children}
    </ButtonBox>
  );
};

const ButtonBox = styled.div<{
  size: sizeType;
  color: colorType;
  disable: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  cursor: ${({ disable }) => (disable ? "default" : "pointer")};
  ${({ size }) => sizeStyle[size]}
  ${({ color }) => colorStyle[color]}
`;

export default Button;
