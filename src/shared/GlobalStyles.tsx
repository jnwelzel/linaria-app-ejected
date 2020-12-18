import React from 'react'
import {css} from "@linaria/core"

export interface GlobalStylesProps {};

const globalStyles = css`
  :global() {
    html {
      background-color: purple;
    }
  }
`;

export const GlobalStyles: React.FC<GlobalStylesProps> = () => {
  return <span className={globalStyles} />;
}