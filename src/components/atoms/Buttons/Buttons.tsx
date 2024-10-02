import { TSizes, TVariants, VARIANTS } from "@/types";
import { motion } from "framer-motion";
import styles from "./Button.module.css";
import classNames from "classnames";


export type TButton = {
    label: string,
    variant?: TVariants,
    size: TSizes
}

const Button: FC<TButton> = ({
    label,
    variant = VARIANTS.primary,
    size
}) => {
    return <motion.button
        className={classNames(styles[variant], styles[size], styles.button, "font-roboto")}>
        {label}
    </motion.button>;
};

export { Button };