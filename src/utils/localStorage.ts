import { gokumonLanguageData, languageData } from "../contexts/LanguageContext";

const STORAGE_KEY = "my-app-data";

// localStorageから取得
export const loadLanguageData = (): languageData[] => {
    try {
        const savedData = localStorage.getItem(STORAGE_KEY);

        if (!savedData) {
            return gokumonLanguageData.map((item) => ({ ...item }));
        }

        const parsedData: unknown = JSON.parse(savedData);
        if (!Array.isArray(parsedData)) {
            throw new Error("保存データの形式が正しくありません");
        }

        return gokumonLanguageData.map((item, index) => {
            const savedItem = parsedData[index];
            return {
                ...item,
                meaning:
                    typeof savedItem?.meaning === "string"
                        ? savedItem.meaning
                        : item.meaning,
            };
        });
    } catch (error) {
        console.error("データの読み込みに失敗しました", error);
        return gokumonLanguageData.map((item) => ({ ...item }));
    }
};

// localStorageに保存
export const saveLanguageData = (data: languageData[]): void => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
        console.error("データの保存に失敗しました", error);
    }
};
