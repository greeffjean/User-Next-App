import { TUser } from "@/types/services";
import { createContext } from "react";


type TUserContext = {
    userDict: Record<string, TUser>
}

type TUserContextProvider = {
    value:  TUserContext 
}

export const UserContext = createContext<TUserContext>({} as TUserContext);

const UserContextProvider: FC<TUserContextProvider> = ({ children, value }) => {
    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}

export { UserContextProvider }