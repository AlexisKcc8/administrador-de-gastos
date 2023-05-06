import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const useGlobalState = () => {
  const context = useContext(GlobalContext);
  return context;
};
