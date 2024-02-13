import { createContext } from "react";

interface ITokenProps {
  token: string | null;
}

export const TokenContext = createContext<ITokenProps>({ token: "" });
