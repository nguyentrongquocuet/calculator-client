import React from 'react';
import { StyledRow as Row } from '@/BaseUI';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { filterPrioritySelector } from '@/app/store';
import { TEST_ID } from '@/app/testing';
import { createTimeThrottle } from '@/app/utils/throttle';
import { Filter } from '@/components/filter';
import { TTodoPriority } from '@/types';
import { setFilterPriority, setFilterQuery } from './store/actionCreators';

const FilterContainer = () => {
  const priority = useAppSelector(filterPrioritySelector);
  const [isLoading, setIsLoading] = React.useState(false);

  // const query = useAppSelector(filterQuerySelector);

  const dispatch = useAppDispatch();

  const handlePriorityChange = React.useCallback((newPriority: TTodoPriority | undefined) => {
    dispatch(setFilterPriority(newPriority));
  }, [dispatch]);

  const handleQueryChange = React.useCallback((newQuery: string) => {
    dispatch(setFilterQuery(newQuery));
    setIsLoading(false);
  }, [dispatch]);

  const throttledHandleQueryChange = React.useMemo(
    () => createTimeThrottle(handleQueryChange),
    [handleQueryChange],
  );

  return (
    <Row data-testid={TEST_ID.TODO_FILTER}>
      <Filter
        onPriorityChange={handlePriorityChange}
        onQueryChange={(q) => { setIsLoading(true); throttledHandleQueryChange(q); }}
        priority={priority}
      />
      {
        isLoading ? 'loading...' : null
      }
    </Row>
  );
};

export { FilterContainer };
