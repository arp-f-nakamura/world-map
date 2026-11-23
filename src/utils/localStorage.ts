import { gokumonLanguageData, languageData } from "../contexts/LanguageContext";
import { Answer, gokumonTestData, testData } from "../contexts/TestContext";

const LANGUAGE_STRAGE_KEY = "language-data";
const TEST_STRAGE_KEY = "test-data";

// localStorageから取得
export const loadLanguageData = (): languageData[] => {
    try {
        const savedData = localStorage.getItem(LANGUAGE_STRAGE_KEY);

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
        localStorage.setItem(LANGUAGE_STRAGE_KEY, JSON.stringify(data));
    } catch (error) {
        console.error("データの保存に失敗しました", error);
    }
};

// localStorageから取得
export const loadTestData = (): testData[] => {
    try {
        const savedData = localStorage.getItem(TEST_STRAGE_KEY);

        if (!savedData) {
            return gokumonTestData.map((item) => ({ ...item }));
        }

        const parsedData: unknown = JSON.parse(savedData);
        if (!Array.isArray(parsedData)) {
            throw new Error("保存データの形式が正しくありません");
        }

        return gokumonTestData.map((item, index) => {
            const savedItem = parsedData[index];
            return {
                ...item,
                answer: (typeof savedItem?.meaning as Answer)
                    ? savedItem.answer
                    : item.answer,
            };
        });
    } catch (error) {
        console.error("データの読み込みに失敗しました", error);
        return gokumonTestData.map((item) => ({ ...item }));
    }
};

// localStorageに保存
export const saveTestData = (data: testData[]): void => {
    try {
        localStorage.setItem(TEST_STRAGE_KEY, JSON.stringify(data));
    } catch (error) {
        console.error("データの保存に失敗しました", error);
    }
};
