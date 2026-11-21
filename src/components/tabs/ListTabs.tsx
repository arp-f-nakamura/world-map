import { ReactNode } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import styles from "./css_modules/ListTabs.module.css";

type ListTabsProps = {
    panel0: ReactNode;
    panel1: ReactNode;
    panel2: ReactNode;
    panel3: ReactNode;
    panel4: ReactNode;
};

export const ListTabs = ({
    panel0,
    panel1,
    panel2,
    panel3,
    panel4,
}: ListTabsProps) => {
    return (
        <Tabs className={styles.tabs}>
            <TabList className={styles.tabList}>
                <Tab className={styles.gokumon}>0</Tab>
                <Tab className={styles.gokumon}>R</Tab>
                <Tab className={styles.gokumon}>Q</Tab>
                <Tab className={styles.gokumon}>S</Tab>
                <Tab className={styles.gokumon}>T</Tab>
            </TabList>
            <TabPanel
                className={styles.tabPanel}
                selectedClassName={styles.selectedTabPanel}
            >
                {panel0}
            </TabPanel>
            <TabPanel
                className={styles.tabPanel}
                selectedClassName={styles.selectedTabPanel}
            >
                {panel1}
            </TabPanel>
            <TabPanel
                className={styles.tabPanel}
                selectedClassName={styles.selectedTabPanel}
            >
                {panel2}
            </TabPanel>
            <TabPanel
                className={styles.tabPanel}
                selectedClassName={styles.selectedTabPanel}
            >
                {panel3}
            </TabPanel>
            <TabPanel
                className={styles.tabPanel}
                selectedClassName={styles.selectedTabPanel}
            >
                {panel4}
            </TabPanel>
        </Tabs>
    );
};
