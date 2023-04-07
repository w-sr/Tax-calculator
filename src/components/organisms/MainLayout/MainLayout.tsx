import { MainLayoutProps } from "./MainLayout.types";
import * as S from "./MainLayout.styles";
import { LanguageSwitcher } from "../../atoms/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const MainLayout = ({ children }: MainLayoutProps) => {
  const { t } = useTranslation();
  return (
    <S.Wrap>
      <S.NavWrap>
        <S.LogoWrap to="/dashboard">
          <S.Image src="/logo.png" />
          {t("tax")}
        </S.LogoWrap>
        <LanguageSwitcher />
      </S.NavWrap>
      {children}
    </S.Wrap>
  );
};

export default MainLayout;
