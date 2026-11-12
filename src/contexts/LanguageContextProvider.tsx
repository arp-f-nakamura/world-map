import { ReactNode, useEffect, useReducer, useRef } from "react";
import {
    gokumonLanguageData,
    languageData,
    LanguageDataAction,
    LanguageDataDispatchContext,
    LanguageDataStateContext,
} from "./LanguageContext";
import { loadLanguageData, saveLanguageData } from "../utils/localStorage";

// State更新処理
const languageDataReducer = (
    state: languageData[],
    action: LanguageDataAction,
): languageData[] => {
    switch (action.type) {
        case "SET_MEANING":
            return state.map((item) =>
                item.word === action.payload.word
                    ? { ...item, meaning: action.payload.meaning }
                    : item,
            );

        case "RESET":
            return gokumonLanguageData.map((item) => ({ ...item }));

        default:
            return state;
    }
};

type Props = {
    children: ReactNode;
};

export const LanguageDataProvider = ({ children }: Props) => {
    // 初期化時にlocalStorageからデータを取得
    const [state, dispatch] = useReducer(
        languageDataReducer,
        undefined,
        loadLanguageData,
    );

    // 常に最新のStateを参照するためのRef
    const stateRef = useRef(state);
    stateRef.current = state;

    // State更新時に保存
    useEffect(() => {
        saveLanguageData(state);
    }, [state]);

    // ページ離脱・バックグラウンド移行時にも保存
    useEffect(() => {
        const save = () => {
            saveLanguageData(stateRef.current);
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
        <LanguageDataStateContext.Provider value={state}>
            <LanguageDataDispatchContext.Provider value={dispatch}>
                {children}
            </LanguageDataDispatchContext.Provider>
        </LanguageDataStateContext.Provider>
    );
};
