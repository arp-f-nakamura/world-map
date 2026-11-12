import { useContext } from "react";
import {
    LanguageDataDispatchContext,
    LanguageDataStateContext,
} from "../contexts/LanguageContext";

// State取得用
export const useLanguageData = () => {
    const context = useContext(LanguageDataStateContext);

    if (!context) {
        throw new Error(
            "useLanguageData must be used within LanguageDataProvider",
        );
    }

    return context;
};

// 更新用
export const useLanguageDataDispatch = () => {
    const context = useContext(LanguageDataDispatchContext);

    if (!context) {
        throw new Error(
            "useLanguageDataDispatch must be used within LanguageDataProvider",
        );
    }

    return context;
};
