import { css, FlattenSimpleInterpolation } from "styled-components";

export type sizeType = "lg" | "md";

export const sizeStyle: Record<sizeType, FlattenSimpleInterpolation> = {
  lg: css`
    width: 252px;
    height: 64px;
    font-size: 32px;
    border-radius: 16px;
  `,
  md: css`
    width: 221px;
    height: 46px;
    border-radius: 8px;
    font-size: 20px;
  `,
};
