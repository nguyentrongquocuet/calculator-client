import styled from 'styled-components';
import React from 'react';
import { getSizeStyle, TUISize } from '@/app/theme';

const CheckboxWrapper = styled.label<{ size?: TUISize }>`
  display: inline-flex;
  font-size: ${(props) => getSizeStyle(props.size)['font-size']};
`;

const Checkbox = styled.input.attrs((props) => ({
  ...props,
  type: 'checkbox',
}))<React.HTMLAttributes<'input'>>`
  font-size: inherit;
`;

type ICheckboxProps = Omit<React.ComponentProps<typeof Checkbox>, 'type'> & {
  size?: TUISize;
  checked?: boolean;
};

const StyledCheckbox: React.FC<ICheckboxProps> = ({
  children,
  checked = false,
  size = 'medium',
  ...otherProps
}) => (
  <CheckboxWrapper size={size}>
    <Checkbox checked={checked} {...otherProps} />
    {children}
  </CheckboxWrapper>
);

export { StyledCheckbox };
