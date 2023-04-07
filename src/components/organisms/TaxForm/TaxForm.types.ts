export type TaxFormProps = {
  income: number;
  year: number;
};

export interface Props {
  submit: (data: TaxFormProps) => void;
}
