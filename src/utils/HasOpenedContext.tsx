import React, { createContext, useContext, useState } from "react";


const HasOpenedBeforeContext = createContext<{
    hasOpened: boolean | null;
    setHasOpened: (value: boolean | null) => void;
  }>({ hasOpened: null, setHasOpened: () => {} });

type IntroProviderProps = {
  children: React.ReactNode;
}


export const IntroProvider: React.FC<IntroProviderProps> = ({ children }) => {

    const hasOpenedBefore = sessionStorage.getItem("hasOpenedBefore");
    const [hasOpened, setHasOpened] = useState<boolean | null>(hasOpenedBefore ? JSON.parse(hasOpenedBefore) : null);

    return (
        <HasOpenedBeforeContext.Provider value={{hasOpened, setHasOpened}}>
            {children}
        </HasOpenedBeforeContext.Provider>
    );
}

export const useHasOpenedBefore = () => {
    const context = useContext(HasOpenedBeforeContext);

    return context;
  };