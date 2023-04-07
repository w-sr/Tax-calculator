import { forwardRef } from "react";

import { ButtonRef, ButtonProps } from "./Button.types";
import * as S from "./Button.styles";

const Button = forwardRef<ButtonRef, ButtonProps>(
  ({ children, ...props }, ref) => (
    <S.Button ref={ref} {...props}>
      {children}
    </S.Button>
  )
);

Button.displayName = "Button";

export { Button };
