'use client';;
import { memo } from 'react';

import { LoadingSpinner } from '@components';

interface FilterInputProps {
  searchTerm: string;
  isLoading: boolean;
  onChange: (value: string) => void;
}

export const FilterInput = memo(
  ({ isLoading, onChange, searchTerm }: FilterInputProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      onChange(value);
    };

    return (
      <div className="flex items-center justify-center mx-auto relative bg-white rounded-lg h-12 px-4">
        <input
          type="text"
          autoFocus
          aria-label="Search for a country"
          spellCheck="false"
          autoComplete="off"
          defaultValue={searchTerm}
          placeholder="Search for a country..."
          className="bg-transparent text-gray-800 placeholder:text-gray-500 placeholder:text-center outline-0 size-full"
          onChange={handleChange}
        />
        {isLoading && (
          <div className="absolute right-4 inset-y-0 translate-y-1/2 size-6 z-10">
            <LoadingSpinner fill="#3a4bab" size={24} />
          </div>
        )}
      </div>
    );
  },
);

FilterInput.displayName = 'FilterInput';
