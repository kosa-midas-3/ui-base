import { css, FlattenSimpleInterpolation } from "styled-components";

export type colorType =
  | "black"
  | "green"
  | "blackBorder"
  | "greenBorder"
  | "gray"
  | "grayBorder";

export const colorStyle: Record<colorType, FlattenSimpleInterpolation> = {
  black: css`
    color: #ffffff;
    background-color: #000000;
    border: 2px solid #000000;
  `,
  blackBorder: css`
    color: #000000;
    background-color: #ffffff;
    border: 2px solid #000000;
  `,
  green: css`
    background-color: #6cdc84;
    color: #ffffff;
    border: 2px solid #6cdc84;
  `,
  greenBorder: css`
    color: #6cdc84;
    background-color: #ffffff;
    border: 2px solid #6cdc84;
  `,
  gray: css`
    color: #ffffff;
    background-color: #d9d9d9;
    border: 2px solid #d9d9d9;
  `,
  grayBorder: css`
    color: #d9d9d9;
    background-color: #ffffff;
    border: 2px solid #d9d9d9;
  `,
};
