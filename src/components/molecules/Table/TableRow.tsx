import { IColumnType } from "./Table.types";
import { TableRowCell } from "./TableRowCell";
import * as S from "./Table.styles";

interface Props<T> {
  data: T[];
  columns: IColumnType<T>[];
}

export function TableRow<T>({ data, columns }: Props<T>): JSX.Element {
  return (
    <>
      {data.map((item, itemIndex) => (
        <S.TableRowItem key={`table-body-${itemIndex}`}>
          {columns.map((column, columnIndex) => (
            <TableRowCell
              key={`table-row-cell-${columnIndex}`}
              item={item}
              column={column}
            />
          ))}
        </S.TableRowItem>
      ))}
    </>
  );
}
