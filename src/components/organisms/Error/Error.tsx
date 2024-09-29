import { Card } from "@/components/atoms/Card/Card";
import styles from "./Error.module.css";


export type TError = {
    title: string;
    description: string;
}

const Error: FC<TError> = ({ title, description }) => {
    return (<Card classes="grid gap-5 justify-items-center">
        <div className={styles.icon} />
        <div className="grid gap-3">
            <h4 className="heading-1 text-TextPrimary text-center text-lg">{title}</h4>
            <p className="body text-TextSecondary text-center">{description}</p>
        </div>
    </Card>)
}

export { Error }