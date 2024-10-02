import classNames from "classnames";
import styles from "./Card.module.css";

type TPadding = "sm" | "md" | "lg";

type TCard = {
    classes?: string;
    padding?: TPadding;
};


const Card: FC<TCard> = ({ children, classes, padding = "lg" }) => {

    return <div className={classNames(styles.wrapper, "rounded-xl relative md:overflow-hidden bg-white", classes, padding)}>
        {children}
    </div>
}

export { Card };