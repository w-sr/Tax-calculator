import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Button } from "../../atoms/Button";
import { TextField } from "../../molecules/TextField";
import * as S from "./TaxForm.styles";
import { Props, TaxFormProps } from "./TaxForm.types";
import { useTranslation } from "react-i18next";

const TaxForm = ({ submit }: Props) => {
  const { t } = useTranslation();

  const schema = yup
    .object({
      income: yup
        .number()
        .typeError(t("income-number"))
        .min(0, t("income-zero"))
        .required(t("income-required")),
      year: yup
        .number()
        .typeError(t("year-number"))
        .min(1950, t("invalid-year"))
        .max(2099, t("invalid-year"))
        .required(t("year-required")),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaxFormProps>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: TaxFormProps) => {
    submit(data);
  };

  return (
    <S.FromContainer>
      <S.FormTitle>{t("tax-calculator")}</S.FormTitle>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.InputWrap>
          <TextField
            data-test="income"
            label={t("income")}
            {...register("income")}
            helper={errors.income?.message}
          />
        </S.InputWrap>
        <S.InputWrap>
          <TextField
            data-test="year"
            label={t("year")}
            {...register("year")}
            helper={errors.year?.message}
          />
        </S.InputWrap>
        <S.ButtonWrap>
          <Button data-test="calculate" type="submit">
            {t("calculate")}
          </Button>
        </S.ButtonWrap>
      </S.Form>
    </S.FromContainer>
  );
};

export default TaxForm;
