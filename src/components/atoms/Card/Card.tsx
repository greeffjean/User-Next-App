import classNames from "classnames";
import styles from "./Card.module.css";


const Card: FC = ({ children }) => {

    return <div className={classNames("rounded-xl p-2.5 relative overflow-hidden", styles.wrapper)}>
        {children}
    </div>
}

export { Card };