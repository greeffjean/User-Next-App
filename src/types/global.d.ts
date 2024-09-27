import React, { ReactNode } from "react";

declare global {
  type FC<T = unknown> = React.FC<{ children?: ReactNode } & T>;
}
