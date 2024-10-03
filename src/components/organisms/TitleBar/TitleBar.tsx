"use client"
import { ReactNode, useContext } from "react";
import styles from "./TitleBar.module.css";
import classNames from "classnames";
import { ROUTES } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MetaContext } from "@/components/context/metaContext";


export type TTitleBar = {
    controls?: Array<ReactNode>;
}

const TitleBar: FC<TTitleBar> = ({ controls = [""] }) => {
    const Controls = () => controls
    const pathname = usePathname()
    const display = (pathname ?? "").includes(ROUTES.profile)
    const { title } = useContext(MetaContext);

    return (
        <nav className={classNames("flex justify-between items-center p-3", styles.wrapper)}>
            <div className={classNames(styles.backButton, { display })} >
                <Link href={ROUTES.feed}>
                </Link>
            </div>
            <h3 className="heading-1 text-lg">{title}</h3>
            <div className="min-w-8">
                <Controls />
            </div>
        </nav>
    )
}

export { TitleBar }