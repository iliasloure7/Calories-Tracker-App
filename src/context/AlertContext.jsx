import { createContext, useState } from 'react';

const AlertContext = createContext(null);

export const AlertContextProvider = ({ children }) => {
  const [alert, setAlert] = useState({});

  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
