import { useTranslation } from "react-i18next";
import {
  bracketFormat,
  moneyValue,
  percentValue,
} from "../../../utils/common/helpers";
import { taxCalculator } from "../../../utils/taxCalculator";
import { Table } from "../../molecules/Table/Table";
import { IColumnType } from "../../molecules/Table/Table.types";
import * as S from "./TaxTable.styles";
import { TaxTableProps } from "./TaxTable.types";

interface IData {
  bracket: string;
  rate: string;
  tax: string;
}

const TaxTable = ({ year, income, taxBrackets }: TaxTableProps) => {
  const { t } = useTranslation();
  const columns: IColumnType<IData>[] = [
    {
      key: "bracket",
      title: t("tax-bracket"),
      width: 150,
    },
    {
      key: "rate",
      title: t("tax-rate"),
      width: 150,
    },
    {
      key: "tax",
      title: t("tax"),
      width: 150,
    },
  ];

  const { effectiveRate, total, taxPerBand } = taxCalculator(
    income,
    taxBrackets
  );

  const data: IData[] = taxBrackets
    ? taxBrackets.map((el) => ({
        bracket: bracketFormat(el.min, el.max),
        rate: percentValue(el.rate),
        tax: moneyValue(taxPerBand[`${el.min}-${el.max ?? ""}`]),
      }))
    : [];

  return (
    <>
      <S.Title>
        {year} {t("tax")}
      </S.Title>
      <Table data={data} columns={columns} />
      <S.BottomWrap>
        <S.Label>
          {t("total")}: <S.Span data-test="total">{moneyValue(total)}</S.Span>
        </S.Label>
        <S.Label>
          {t("effective-rate")}:{" "}
          <S.Span data-test="effective-rate">
            {percentValue(effectiveRate)}
          </S.Span>
        </S.Label>
      </S.BottomWrap>
    </>
  );
};

export default TaxTable;
