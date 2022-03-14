import React from 'react';
import {
  StyledTag as Tag,
  StyledCheckbox as Checkbox,
  StyledRow as Row,
} from '@/BaseUI';
import { TEST_ID } from '@/app/testing';
import { ITodo } from '@/types';

interface ITodoProps extends ITodo {
  onToggleStatus(id: ITodo['id']): void;
}

const Todo: React.FC<ITodoProps> = ({
  content,
  created,
  id,
  priority,
  status,
  onToggleStatus,
}) => {
  const isCompleted = status === 'COMPLETED';

  return (
    <Row data-testid={TEST_ID.TODO}>
      <Checkbox onChange={() => onToggleStatus(id)} checked={isCompleted}>
        {`${content} (${created})`}
      </Checkbox>
      <Tag autoCapitalize="on">{priority}</Tag>
    </Row>
  );
};

export { Todo };
