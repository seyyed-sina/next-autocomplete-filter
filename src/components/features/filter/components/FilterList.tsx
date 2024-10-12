import { memo } from 'react';

import { FilterItem } from '@components';

import { TFilterItem } from '../filter.type';

interface FilterListProps {
  list: TFilterItem[];
}

export const FilterList = memo(
  ({ list }: FilterListProps) => {
    return (
      <ul className="flex flex-col bg-gray-800 absolute top-14 inset-x-0 max-h-96 overflow-y-auto rounded-lg">
        {list?.map((filter) => (
          <FilterItem key={filter.cca2} filter={filter} />
        ))}
      </ul>
    );
  },
  (prevProps, nextProps) => prevProps.list === nextProps.list,
);

FilterList.displayName = 'FilterList';
