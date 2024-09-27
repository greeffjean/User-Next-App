import classNames from "classnames";
import styles from "./Stats.module.css";

export type TStats = {
    count: number;
    label: string;
}

const Stats: FC<TStats> = ({ label, count }) => {

    return <div className="roboto">
        <p className={classNames(styles.count, "body-overline-small")}>{count}</p>
        <p className={classNames(styles.label, "body-overline-small")}>{label}</p>
    </div>
}

export { Stats };