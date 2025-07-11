import styled, { css } from 'styled-components';
import { ButtonProps } from './Button.types';
import React from 'react';
import {theme} from "../../theme";

const StyledButton = styled.button<ButtonProps>`
  border: 2px solid transparent;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${({ variant = 'solid', colorScheme = 'blue' }) => {
    const color = theme[colorScheme];
    switch (variant) {
        case 'outlined':
            return css`
          background-color: transparent;
          border-color: ${color};
          color: ${color};
          &:hover {
            background-color: ${color};
            color: white;
          }
        `;
        case 'ghost':
            return css`
          background-color: transparent;
          border-color: transparent;
          color: ${color};
          &:hover {
            background-color: #f0f0f0;
          }
        `;
        case 'solid':
        default:
            return css`
          background-color: ${color};
          color: white;
          &:hover {
            opacity: 0.9;
          }
        `;
    }
}}
`;

export const Button: React.FC<ButtonProps> = ({
                                                  children,
                                                  colorScheme = 'blue',
                                                  variant = 'solid',
                                                  ...props
                                              }) => {
    return (
        <StyledButton colorScheme={colorScheme} variant={variant} {...props}>
            {children}
        </StyledButton>
    );
};