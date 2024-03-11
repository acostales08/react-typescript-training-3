import React, { createContext, useContext, useState, useEffect } from "react";
import { HttpRequest } from "../api/api";
import { UserType } from "../Type/userType";
import { AxiosResponse } from "axios";

type ContextType = {
    state: UserType[],
    fetchData: () => Promise<void>
    InserData: (props: UserType) => Promise<void>
}

const Context = createContext<ContextType | undefined>(undefined)

const UserDataProvider: React.FC<React.PropsWithChildren> = ({children}) => {
    const [state, setState] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async() => {
        const result = await new HttpRequest().fetchUser().then((response: AxiosResponse) => {
            setState(response.data)
        })
        return result
    }

    const InserData = async(props: UserType) => {
        const result = await new HttpRequest().addNewUser(props).then((response: AxiosResponse) => {
            console.log(response)
        })
        return result
    }


    const value:ContextType = {
        state,
        fetchData,
        InserData
    }

 return(
    <Context.Provider value={value}>{children}</Context.Provider>
 )
}

const useUserData = () => {
    const context = useContext(Context)

    if(!context){
        throw new Error("useUserData must be used inside Provider")
    }
    return context
}

export { UserDataProvider, useUserData}