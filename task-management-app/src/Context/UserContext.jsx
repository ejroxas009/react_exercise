import { createContext, useState } from "react";

export const UserContext = createContext({
  onDefaultIsHome: () => {},
  onToggleIsHome: () => {},
  isHome: false,
  tasks: [],
  onSetTasks: () => {},
});

export const UserProvider = ({ children }) => {
  const [isHome, setIsHome] = useState(true);
  const [tasks, setTasks] = useState([]);

  const handleDefaultIsHome = () => {
    setIsHome(true);
  };

  const handleIsHome = () => {
    setIsHome(!isHome);
    console.log(isHome);
  };

  return (
    <UserContext.Provider
      value={{
        onDefaultIsHome: handleDefaultIsHome,
        onToggleIsHome: handleIsHome,
        isHome,
        tasks,
        onSetTasks: setTasks,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
