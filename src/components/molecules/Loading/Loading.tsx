import styles from "./Loading.module.css";


const Loading: FC = () => {
    return <div className="grid gap-4 justify-items-center">
        <div className={styles.spinner} />
        <p className="body text-TextSecondary">Loading ...</p>
    </div>
}

export { Loading }