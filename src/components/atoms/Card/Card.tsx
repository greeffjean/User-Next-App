import classNames from "classnames";
import styles from "./Card.module.css";

type TCard = {
    classes?: string;
};


const Card: FC<TCard> = ({ children, classes }) => {

    return <div className={classNames(classes, "rounded-xl p-2.5 relative", styles.wrapper)}>
        {children}
    </div>
}

export { Card };