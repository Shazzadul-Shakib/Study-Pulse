'use client'

import { ReactNode } from "react";
import { store } from "./store";
import { Provider } from "react-redux";

export function ApiProvider({ children }: { children: ReactNode }):JSX.Element  {
  return <Provider store={store}>{children}</Provider>
}