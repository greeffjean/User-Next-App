import classNames from "classnames";
import styles from "./MetaBar.module.css";


export type TMetaBar = {
    views: number;
    shares: number;
    likes: number;
    classes?: string;
}

const MetaBar: FC<TMetaBar> = ({ likes, shares, views, classes }) => {
    const filteredItems = [{ count: likes, id: "likes" }, { count: shares, id: "shares" }, { count: views, id: "views" }]
        .filter((item) => Boolean(item.count));

    return (
        <div className={classNames(classes, "flex gap-6")}>
            {filteredItems.map(({ count, id }) => {
                return <div key={id} className={classNames(styles.meta, "flex gap-1")}>
                    <span className={styles[id]}></span>
                    <span className="text-sm">{count}</span>
                </div>
            })}
        </div>
    )
}

export { MetaBar };