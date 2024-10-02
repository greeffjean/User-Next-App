import { MetaContext } from "@/components/context/metaContext";
import { TTitles } from "@/types";
import { useContext } from "react";

type TTitle = {
    title: TTitles;
}

const Title: FC<TTitle> = ({ title }) => {
    const { setTitle } = useContext(MetaContext);
    setTitle(title)

    return null;
}

export { Title }