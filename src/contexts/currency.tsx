import { createContext, ReactNode, useState } from "react";

type ContextValue = {
  setCurrency: (val: string) => void;
  currency: string | null;
};

export const CurrencyContext = createContext<ContextValue | null>(null);

export const CurrencyContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [currency, setCurrency] = useState("");

  const contextValue: ContextValue = {
    setCurrency,
    currency,
  };

  return (
    <CurrencyContext.Provider value={contextValue}>
      {children}
    </CurrencyContext.Provider>
  );
};
