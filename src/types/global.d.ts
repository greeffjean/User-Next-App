import React, { ReactNode } from "react";

declare global {
  type FC = React.FC<{ children: ReactNode }>;
}
