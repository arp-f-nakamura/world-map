import { ReactNode, useEffect, useReducer, useRef } from "react";
import {
    gokumonTestData,
    testData,
    TestDataAction,
    TestDataDispatchContext,
    TestDataStateContext,
} from "./TestContext";
import { loadTestData, saveTestData } from "../utils/localStorage";

// State更新処理
const testDataReducer = (
    state: testData[],
    action: TestDataAction,
): testData[] => {
    switch (action.type) {
        case "SET_ANSWER":
            return state.map((item, index) =>
                index === action.payload.index
                    ? { ...item, answer: action.payload.answer }
                    : item,
            );

        case "RESET":
            return gokumonTestData.map((item) => ({ ...item }));

        default:
            return state;
    }
};

type Props = {
    children: ReactNode;
};

export const TestDataProvider = ({ children }: Props) => {
    // 初期化時にlocalStorageからデータを取得
    const [state, dispatch] = useReducer(
        testDataReducer,
        undefined,
        loadTestData,
    );

    // 常に最新のStateを参照するためのRef
    const stateRef = useRef(state);
    stateRef.current = state;

    // State更新時に保存
    useEffect(() => {
        saveTestData(state);
    }, [state]);

    // ページ離脱・バックグラウンド移行時にも保存
    useEffect(() => {
        const save = () => {
            saveTestData(stateRef.current);
        };

        // アプリがバックグラウンドに移動したときも保存
        const handleVisibilityChange = () => {
            if (document.visibilityState === "hidden") {
                save();
            }
        };

        // ページを離れるときも保存
        window.addEventListener("pagehide", save);
        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            window.removeEventListener("pagehide", save);
            document.removeEventListener(
                "visibilitychange",
                handleVisibilityChange,
            );
        };
    }, []);

    return (
        <TestDataStateContext.Provider value={state}>
            <TestDataDispatchContext.Provider value={dispatch}>
                {children}
            </TestDataDispatchContext.Provider>
        </TestDataStateContext.Provider>
    );
};
