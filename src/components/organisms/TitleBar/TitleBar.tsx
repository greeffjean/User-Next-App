import { ReactNode } from "react";
import styles from "./TitleBar.module.css";
import classNames from "classnames";

export type TTitleBar = {
    controls: Array<ReactNode>;
}

const TitleBar: FC<TTitleBar> = ({ controls = [""] }) => {
    const Controls = () => controls;

    return (
        <nav className={classNames("flex justify-between p-3", styles.wrapper)}>
            <button className={styles.backButton} />
            <h3 className="heading-1">Title</h3>
            <Controls />
        </nav>
    )
}

export { TitleBar }