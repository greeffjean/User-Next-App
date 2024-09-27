import React, { ReactNode } from "react";

declare global {
  type FC<T = {}> = React.FC<{ children?: ReactNode } & T>;
}
