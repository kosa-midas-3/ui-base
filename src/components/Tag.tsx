import { PropsWithChildren } from "react";
import { colorStyle, colorType } from "../foundation/color";
import styled from "styled-components";

interface TagType {
  color: colorType;
}

const Tag = ({ children, ...props }: PropsWithChildren<TagType>) => {
  return <TagBox {...props}>{children}</TagBox>;
};

const TagBox = styled.div<{ color: colorType }>`
  width: 95px;
  height: 28px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ color }) => colorStyle[color]}
`;

export default Tag;
