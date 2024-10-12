'use client';
import { memo } from 'react';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

import { TFilterItem } from '../filter.type';
import { highlightMatch } from '../filter.utils';

interface FilterItemProps {
  filter: TFilterItem;
}

export const FilterItem = memo(({ filter }: FilterItemProps) => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('name') ?? '';
  return (
    <li className="group">
      <div
        className="flex items-center min-h-12 px-4 py-2 border-b border-solid border-gray-100 group-last:border-b-0 gap-3"
        title={filter.name.common}>
        <span className="size-6 shrink-0">
          <Image
            src={filter.flags.svg}
            alt={filter.name.common}
            width={24}
            height={24}
            className="object-contain size-full"
          />
        </span>
        <h3 className="text-gray-100 text-base truncate">
          {highlightMatch(filter.name.common, searchTerm)}
        </h3>
      </div>
    </li>
  );
});

FilterItem.displayName = 'FilterItem';
