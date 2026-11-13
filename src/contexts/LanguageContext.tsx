import { createContext, Dispatch } from "react";

export type languageData = {
    word: string;
    meaning: string;
};

// 初期データ
export const gokumonLanguageData: languageData[] = [
    { word: "0", meaning: "" },
    { word: "1", meaning: "" },
    { word: "2", meaning: "" },
    { word: "3", meaning: "" },
    { word: "4", meaning: "" },
    { word: "5", meaning: "" },
    { word: "6", meaning: "" },
    { word: "7", meaning: "" },
    { word: "8", meaning: "" },
    { word: "9", meaning: "" },
    { word: "?", meaning: "" },
    { word: "!", meaning: "" },
    { word: "AD", meaning: "" },
    { word: "AE", meaning: "" },
    { word: "AF", meaning: "" },
    { word: "BD", meaning: "" },
    { word: "BE", meaning: "" },
    { word: "BF", meaning: "" },
    { word: "CD", meaning: "" },
    { word: "CE", meaning: "" },
    { word: "CF", meaning: "" },
    { word: "G0", meaning: "" },
    { word: "GH", meaning: "" },
    { word: "GI", meaning: "" },
    { word: "GJ", meaning: "" },
    { word: "K", meaning: "" },
    { word: "L", meaning: "" },
    { word: "N", meaning: "" },
    { word: "O", meaning: "" },
    { word: "P", meaning: "" },
    { word: "a", meaning: "" },
    { word: "b", meaning: "" },
    { word: "c", meaning: "" },
    { word: "d", meaning: "" },
    { word: "e", meaning: "" },
    { word: "f", meaning: "" },
    { word: "g", meaning: "" },
    { word: "h", meaning: "" },
    { word: "i", meaning: "" },
    { word: "j", meaning: "" },
    { word: "k", meaning: "" },
    { word: "l", meaning: "" },
    { word: "m", meaning: "" },
    { word: "n", meaning: "" },
    { word: "o", meaning: "" },
    { word: "p", meaning: "" },
];

// 更新アクション
export type LanguageDataAction =
    | {
          type: "SET_MEANING";
          payload: { word: string; meaning: string };
      }
    | { type: "RESET" };

// State用Context
export const LanguageDataStateContext = createContext<
    languageData[] | undefined
>(undefined);

// Dispatch用Context
export const LanguageDataDispatchContext = createContext<
    Dispatch<LanguageDataAction> | undefined
>(undefined);
