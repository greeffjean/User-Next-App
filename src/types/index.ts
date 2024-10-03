export enum COLORS {
  Primary = "Primary",
  MajorelleBlue50 = "MajorelleBlue50",
  MajorelleBlue700 = "MajorelleBlue700",
  RedCrayola50 = "RedCrayola50",
  RedCrayola700 = "RedCrayola700",
  LightBlue50 = "LightBlue50",
  LightBlue700 = "LightBlue700",
  MandarinOrange50 = "MandarinOrange50",
  MandarinOrange700 = "MandarinOrange700",
  Turquoise50 = "Turquoise50",
  Turquoise700 = "Turquoise700",
  TextPrimary = "TextPrimary",
  TextSecondary = "TextSecondary",
  TextLight = "TextLight",
  ContentBorder = "ContentBorder",
  GreyCold50 = "GreyCold50",
  Slate15 = "Slate15",
  ContentBase = "ContentBase",
}

export enum VARIANTS {
  primary = "primary",
  outline = "outline",
}

export enum SIZES {
  sm = "sm",
  md = "md",
  lg = "lg",
}

export enum ROUTES {
  feed = "/",
  profile = "/profile",
}

export type TVariants = VARIANTS;

export type TSizes = SIZES;

export const APP_FEEDBACK = {
  default: {
    error: "Whoops! There was an error here!",
  },
};

export type TTitles = "" | "Feed" | "Profile";
