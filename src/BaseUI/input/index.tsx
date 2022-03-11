import styled, { StyledComponent } from 'styled-components';
import { getSizeStyle, TUISize } from '@/app/theme';

interface IInputGroupProps {
  'justify-content'?: CSSStyleDeclaration['justifyContent'];
}

const InputGroup = styled.div<IInputGroupProps>`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: ${(props) => props['justify-content'] || 'flex-start'};
`;

interface IInputProps {
  size?: TUISize;
  fluid?: boolean;
}

const StyledInput = styled.input<IInputProps>`
  outline: none;
  width: ${(props) => (props.fluid ? '100%' : 'fit-content')};
  padding: 0.375em 0.75em;
  font-size: ${(props) => getSizeStyle(props.size)['font-size']};
` as StyledComponent<'input', any, IInputProps, never> & {
  Group: typeof InputGroup;
};

StyledInput.Group = InputGroup;

export { StyledInput };
