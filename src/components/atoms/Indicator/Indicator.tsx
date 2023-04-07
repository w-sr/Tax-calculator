import * as S from "./Indicator.styles";
import { IndicatorProps } from "./Indicator.types";

const Indicator = ({ loading }: IndicatorProps) =>
  loading ? (
    <S.Wrapper>
      <S.Background />
      <S.SpinningIcon width={40} height={40} data-test="loading" />
    </S.Wrapper>
  ) : (
    <></>
  );

Indicator.displayName = "Indicator";

export { Indicator };
