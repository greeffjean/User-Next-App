import styles from "./Pills.module.css";
import classNames from "classnames";

export enum PILL_VARIANTS {
    purple = "purple",
    red = "red",
    blue = "blue",
    orange = "orange",
    green = "green"
}

export type TPills = {
    label: string,
    variant: PILL_VARIANTS,
}

const Pills: FC<TPills> = ({
    label,
    variant
}) => {
    return <div
        className={classNames(styles[variant], styles.pill, "roboto")}>
        {label}
    </div>;
};

export { Pills };