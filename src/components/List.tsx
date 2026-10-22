/**
 * Genereic List component:
 * - Handles list rendering while the caller decides how each item looks.
 * - Easily reusable for different data models and rendering needs.
 * that takes in an array of data, a function to get the key for each item, and a function to render each item.
 * It renders a list of items or a message if the list is empty.
 */
import type { Key, ReactNode } from 'react';
import Alert from './Alert';

type ListProps<T> = {
  data: readonly T[];
  getKey: (item: T) => Key;
  renderItem: (item: T) => ReactNode;
  emptyListMessage?: string;
  listClassName?: string;
};

export const List = <T,>({ data, getKey, renderItem, emptyListMessage = 'The list is empty.', listClassName }: ListProps<T>) => (
  data?.length > 0 ? (
    <ul className={listClassName}>
      {data.map((item) => <li key={getKey(item)}>{renderItem(item)}</li>)}
    </ul>
  ) : (
    <Alert variant="warning"><p>{emptyListMessage}</p></Alert>
  )
);
