import React, { createContext, FC, useContext } from "react";

// TypeScript Types
import { CurrentMovieContext } from "../type";

// Custom Hooks
import { useProvideMovieContext } from "../hooks/useProvideMovieContext";

const currentMovieContext = createContext({} as CurrentMovieContext);

export const useCurrentMovieContext = () => {
  return useContext(currentMovieContext);
};

const ProvideCurrentMovie: FC<{ children: React.ReactNode }> = ({
  children,
}: any) => {
  const movie: CurrentMovieContext = useProvideMovieContext();

  return (
    <currentMovieContext.Provider value={movie}>
      {children}
    </currentMovieContext.Provider>
  );
};

export default ProvideCurrentMovie;
