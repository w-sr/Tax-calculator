import get from "lodash.get";
import { IColumnType } from "./Table.types";
import * as S from "./Table.styles";

interface Props<T> {
  item: T;
  column: IColumnType<T>;
}

export function TableRowCell<T>({ item, column }: Props<T>): JSX.Element {
  const value = get(item, column.key);
  return (
    <S.TableCell>
      {column.render ? column.render(column, item) : value}
    </S.TableCell>
  );
}
