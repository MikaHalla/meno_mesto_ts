import { createContext, ReactNode } from 'react';

interface AppContext {
  asdf: number;
}

interface AppProvider {
  children: ReactNode;
}

const AppContext = createContext({} as AppContext);

export const AppProvider = ({ children }: AppProvider) => {
  const asdf = 1;

  return (
    <AppContext.Provider
      value={{
        asdf,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
