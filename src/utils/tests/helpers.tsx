import type { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { render, RenderResult } from "@testing-library/react";

import { theme } from "../../styles/themes";

export const renderWithTheme = (children: ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
