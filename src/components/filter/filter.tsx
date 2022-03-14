import React from 'react';
import {
  StyledInput as Input,
  StyledCol as Col,
  StyledCheckbox as Checkbox,
} from '@/BaseUI';
import { PRIORITY, TTodoPriority } from '@/types';

interface IFilterProps {
  priority: TTodoPriority | undefined;
  // query?: string; in order to use throttling approach,
  // query will synced with the actual text that rendered on UI
  onQueryChange(query: string): void;
  onPriorityChange(priority: TTodoPriority | undefined): void;
}

const Filter: React.FC<IFilterProps> = ({
  onPriorityChange,
  onQueryChange,
  priority,
}) => {
  const priorsMarkdown = Object.values(PRIORITY).map((p) => (
    <Checkbox
      key={p}
      value={p}
      checked={p === priority}
      onChange={() => onPriorityChange(p)}
    >
      {p}
    </Checkbox>
  ));

  return (
    <Col span={24}>
      <Input
        placeholder="search..."
        onChange={(e) => onQueryChange(e.target.value)}
      />
      <hr />
      <Input.Group style={{ display: 'flex' }}>
        <Checkbox checked={!priority} onChange={() => onPriorityChange(undefined)}>ALL</Checkbox>
        {priorsMarkdown}
      </Input.Group>
    </Col>
  );
};

export { Filter };
