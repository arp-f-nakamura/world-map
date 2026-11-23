import { createContext, Dispatch } from "react";

export type Answer = "A" | "B" | "C" | "";

export type testData = {
    answer: Answer;
};

// 初期データ
export const gokumonTestData: testData[] = [
    { answer: "" },
    { answer: "" },
    { answer: "" },
    { answer: "" },
    { answer: "" },
];

// 更新アクション
export type TestDataAction =
    | {
          type: "SET_ANSWER";
          payload: { index: number; answer: "A" | "B" | "C" | "" };
      }
    | { type: "RESET" };

// State用Context
export const TestDataStateContext = createContext<testData[] | undefined>(
    undefined,
);

// Dispatch用Context
export const TestDataDispatchContext = createContext<
    Dispatch<TestDataAction> | undefined
>(undefined);
