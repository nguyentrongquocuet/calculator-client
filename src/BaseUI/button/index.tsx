import styled from 'styled-components';
import { getSizeStyle, TUISize } from '@/app/theme';

interface IButtonProps {
  fluid?: boolean;
  size?: TUISize;
  inline?: boolean;
}

export const StyledButton = styled.a<IButtonProps>`
  text-decoration: none;
  color: ${(props) => props.color};
  padding: 0.375em 0.75em;
  width: ${(props) => (props.fluid ? '100%' : 'fit-content')};
  display: ${(props) => (props.inline ? 'inline-block' : 'block')};
  border: 1px solid;
  border-radius: 0.2em;
  font-size: ${(props) => getSizeStyle(props.size)['font-size']};
  &:after {
    content: attr(aria-label);
    display: block;
    width: fit-content;
    position: absolute;
    top: -20px;
  }
`;
