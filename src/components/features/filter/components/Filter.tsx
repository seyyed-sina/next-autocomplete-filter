'use client';
import { useCallback, useMemo, useReducer } from 'react';

import { useSearchParams, useRouter } from 'next/navigation';

import { debounce } from '@/utils/helper';
import { FilterList, FilterInput } from '@components';
import { api } from '@constants';

import { initialState } from '../filter.data';
import { reducer } from '../filter.reducer';

export const Filter = () => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('name') ?? '';
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();
  const params = useMemo(
    () => new URLSearchParams(searchParams.toString()),
    [searchParams],
  );

  const debouncedChange = useMemo(
    () =>
      debounce((value: string, callback: (value: string) => void) => {
        callback(value);
      }, 500),
    [],
  );

  const getData = useCallback(async (url: string) => {
    dispatch({ type: 'SET_LOADING' });
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      dispatch({ type: 'SET_COUNTRIES', payload: data });
    } catch {
      dispatch({ type: 'SET_ERROR' });
    }
  }, []);

  const getFilteredList = useCallback(
    async (value: string) => {
      if (!value) {
        dispatch({ type: 'RESET' });
        return;
      }

      if (value !== searchTerm) {
        params.set('name', value);
        router.push(`?${params.toString()}`, { scroll: false });
      }
      await getData(api.COUNTRIES_BY_NAME(value));
    },
    [getData, params, router, searchTerm],
  );

  const handleChange = useCallback(
    (value: string) => {
      debouncedChange(value, getFilteredList);
    },
    [debouncedChange, getFilteredList],
  );

  return (
    <div className="flex flex-col py-10">
      <h1 className="text-gray-300 text-xl text-center mb-10">
        Filter countries
      </h1>
      <div className="relative w-full max-w-md mx-auto">
        <FilterInput isLoading={state.loading} onChange={handleChange} />
        {!state.error && !state.loading && state.countries.length > 0 && (
          <FilterList list={state.countries} />
        )}
        {state.error && (
          <div className="text-center py-6 text-gray-400 text-sm">
            No results found
          </div>
        )}
      </div>
    </div>
  );
};
Filter.displayName = 'Filter';
