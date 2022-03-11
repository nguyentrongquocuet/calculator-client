import React from 'react';
import {
  StyledButton as Button,
  StyledInput as Input,
  StyledSelect as Select,
  StyledTag as Tag,
} from '@/BaseUI';

import { PRIORITY, STATUS, TTodoData, TTodoPriority } from '@/types';

interface INewTodoProps {
  onSubmit(todo: TTodoData): void;
}

const colorMap: Record<keyof typeof PRIORITY, string> = {
  HIGH: 'red',
  MEDIUM: 'blue',
  LOW: 'gray',
};

const priorityOptions = Object.values(PRIORITY).map((p) => ({
  label: p,
  value: p,
}));

const NewTodo: React.FC<INewTodoProps> = ({ onSubmit }) => {
  const [state, setState] = React.useState<TTodoData>({
    content: '',
    priority: PRIORITY.LOW,
    status: STATUS.UNCOMPLETED,
  });

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((old) => ({ ...old, content: e.target.value }));
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState((old) => ({ ...old, priority: e.target.value as TTodoPriority }));
  };

  const handleAddTodo = () => {
    onSubmit(state);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;

    if (key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <Input.Group style={{ display: 'flex' }}>
      <Input
        value={state.content}
        onChange={handleContentChange}
        placeholder="add todo"
        onKeyDown={handleKeyDown}
        fluid
      />
      <Select value={state.priority} onChange={handlePriorityChange}>
        {priorityOptions.map((option) => (
          <Select.Option
            value={option.value}
            label={option.label}
            key={option.value}
          >
            <Tag color={colorMap[option.value]}>{option.label}</Tag>
          </Select.Option>
        ))}
      </Select>
      <Button type="primary" onClick={handleAddTodo}>
        Add
      </Button>
    </Input.Group>
  );
};

export { NewTodo };
