import { MetaContext } from "@/components/context/metaContext";
import { TTitles } from "@/types";
import { useContext, useEffect } from "react";

type TTitle = {
    title: TTitles;
}

const Title: FC<TTitle> = ({ title }) => {
    const { setTitle } = useContext(MetaContext);
    useEffect(() => setTitle(title), [])
  
    return null;
}

export { Title }