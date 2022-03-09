import { PRIORITY, STATUS, TTodoData } from '@/types';
import { Button, Input, Select, Tag } from 'antd';
import React from 'react';

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

  const handlePriorityChange = (priority: any) => {
    setState((old) => ({ ...old, priority }));
  };

  const handleAdd = () => {
    onSubmit(state);
  };

  return (
    <Input.Group style={{ display: 'flex' }} compact>
      <Input
        value={state.content}
        onChange={handleContentChange}
        placeholder="add todo"
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
      <Button type="primary" onClick={handleAdd}>
        Add
      </Button>
    </Input.Group>
  );
};

export { NewTodo };
