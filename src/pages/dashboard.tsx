import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Indicator } from "../components/atoms/Indicator";
import MainLayout from "../components/organisms/MainLayout/MainLayout";
import TaxForm from "../components/organisms/TaxForm/TaxForm";
import { TaxFormProps } from "../components/organisms/TaxForm/TaxForm.types";
import TaxTable from "../components/organisms/TaxTable/TaxTable";
import { State } from "../models/state";
import { getTaxBrackets } from "../stores/tax/action";
import {
  selectTaxBrackets,
  selectTaxError,
  selectTaxLoading,
} from "../stores/tax/selector";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [income, setIncome] = useState<number>();
  const [year, setYear] = useState<number>();

  const taxBrackets = useSelector((state: State) => selectTaxBrackets(state));
  const loading = useSelector((state: State) => selectTaxLoading(state));
  const error = useSelector((state: State) => selectTaxError(state));

  const onSubmit = (data: TaxFormProps) => {
    dispatch(getTaxBrackets(data.year));
    setIncome(data.income);
    setYear(data.year);
  };

  useEffect(() => {
    if (error) toast(error);
  }, [error]);

  return (
    <>
      <MainLayout>
        <TaxForm submit={onSubmit} />
        <TaxTable taxBrackets={taxBrackets} income={income} year={year} />
      </MainLayout>
      <Indicator loading={loading} />
    </>
  );
};

export default Dashboard;
