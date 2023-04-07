import { IColumnType } from "./Table.types";
import * as S from "./Table.styles";

interface Props<T> {
  columns: IColumnType<T>[];
}

export function TableHeader<T>({ columns }: Props<T>): JSX.Element {
  return (
    <tr>
      {columns.map((column, columnIndex) => (
        <S.TableHeaderCell
          key={`table-head-cell-${columnIndex}`}
          style={{ width: column.width }}
        >
          {column.title}
        </S.TableHeaderCell>
      ))}
    </tr>
  );
}
