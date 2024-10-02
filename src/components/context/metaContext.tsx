"use client"
import { TTitles } from "@/types";
import { createContext, Dispatch, SetStateAction, useState } from "react";


type TMetaContext = {
    title: string;
    setTitle: Dispatch<SetStateAction<TTitles>>;
}


export const MetaContext = createContext<TMetaContext>({} as TMetaContext);

const MetaContextProvider: FC = ({ children }) => {
    const [title, setTitle] = useState<TTitles>("");

    return <MetaContext.Provider value={{ title, setTitle }}>
        {children}
    </MetaContext.Provider>
}

export { MetaContextProvider }