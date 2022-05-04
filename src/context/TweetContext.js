import { createContext, useState } from "react";

export const TweetsContext = createContext();

const TweetsProvider = ({ children }) => {
  const [tweetsArray, setTweetsArray] = useState([]);

  return (
    <TweetsContext.Provider value={{ tweetsArray, setTweetsArray }}>
      {children}
    </TweetsContext.Provider>
  );
};

export default TweetsProvider;