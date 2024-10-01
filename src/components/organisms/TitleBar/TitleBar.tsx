"use client"

import { ReactNode, useEffect, useState } from "react";
import styles from "./TitleBar.module.css";
import classNames from "classnames";
import { ROUTES } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type TTitleBar = {
    controls?: Array<ReactNode>;
}

const TitleBar: FC<TTitleBar> = ({ controls = [""] }) => {
    const Controls = () => controls
    const pathname = usePathname()
    const display = (pathname ?? "").includes(ROUTES.profile)
    const [title, setTitle] = useState("")

    useEffect(() => {
        setTitle(document.title)
    }, [pathname])


    return (
        <nav className={classNames("flex justify-between p-3", styles.wrapper)}>
            <div className={classNames(styles.backButton, { display })} >
                <Link href={ROUTES.feed}>
                </Link>
            </div>
            <h3 className="heading-1">{title}</h3>
            <div>
                <Controls />
            </div>
        </nav>
    )
}

export { TitleBar }