import { IColumnType } from "./Table.types";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";

interface Props<T> {
  data: T[];
  columns: IColumnType<T>[];
}

export function Table<T>({ data, columns }: Props<T>): JSX.Element {
  return (
    <table>
      <thead>
        <TableHeader columns={columns} />
      </thead>
      <tbody>
        <TableRow data={data} columns={columns} />
      </tbody>
    </table>
  );
}
