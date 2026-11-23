import { useNavigate } from "react-router-dom";
import { ModalLayout } from "./ModalLayout";
import styles from "./css_modules/MenuModal.module.css";
import icon from "../../assets/images/icons/demo_icon.png";
import { useState } from "react";
import { ListTabs } from "../tabs/ListTabs";
import { TabLayout } from "../tabs/TabLayout";
import { WordTab } from "../tabs/WordTab";
import { useLanguageData } from "../../hooks/useLanguageData";
import { TestTab } from "../tabs/TestTab";
import { gokumonTest } from "../../constans/test";

type MenuModalProps = {
    isOpen: boolean;
    stage?: "word" | "test" | "recollection";
    onClose: () => void;
};

export const MenuModal = ({ isOpen, stage, onClose }: MenuModalProps) => {
    const navigate = useNavigate();
    const [viewModal, setViewModal] = useState<
        "menu" | "word" | "test" | "recollection"
    >("menu");
    const languageData = useLanguageData();

    return (
        <ModalLayout isOpen={isOpen}>
            <div className={styles.div}>
                <button
                    className={styles.button}
                    disabled={
                        stage && stage !== "word" && stage !== "recollection"
                    }
                    onClick={() => setViewModal("word")}
                >
                    <img src={icon} className={styles.icon} />
                    言葉
                </button>
                <button
                    className={styles.button}
                    disabled={
                        stage &&
                        stage !== "test" &&
                        stage !== "word" &&
                        stage !== "recollection"
                    }
                    onClick={() => setViewModal("test")}
                >
                    <img src={icon} className={styles.icon} />
                    試練
                </button>
                <button
                    className={styles.button}
                    disabled={stage && stage !== "recollection"}
                    onClick={() => setViewModal("recollection")}
                >
                    <img src={icon} className={styles.icon} />
                    回想
                </button>
                <button
                    className={styles.button}
                    disabled={stage !== undefined}
                    onClick={() => navigate("/")}
                >
                    <img src={icon} className={styles.icon} />
                    離脱
                </button>
            </div>
            {viewModal === "word" && (
                <div className={styles.detail}>
                    <ListTabs
                        panel0={
                            <TabLayout>
                                <WordTab words={languageData} />
                            </TabLayout>
                        }
                        panel1={<TabLayout />}
                        panel2={<TabLayout />}
                        panel3={<TabLayout />}
                        panel4={<TabLayout />}
                    />
                </div>
            )}
            {viewModal === "test" && (
                <div className={styles.detail}>
                    <ListTabs
                        panel0={
                            <TabLayout>
                                <TestTab tests={gokumonTest} />
                            </TabLayout>
                        }
                        panel1={<TabLayout />}
                        panel2={<TabLayout />}
                        panel3={<TabLayout />}
                        panel4={<TabLayout />}
                    />
                </div>
            )}
            {viewModal === "recollection" && (
                <div className={styles.detail}>
                    <p>回想を選択中</p>
                </div>
            )}
            <button
                onClick={() => {
                    onClose();
                    setViewModal("menu");
                }}
            >
                閉
            </button>
        </ModalLayout>
    );
};
