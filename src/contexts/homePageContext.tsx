"use client"

import React, { createContext, useLayoutEffect, useState } from "react";

export const MAIN_TABS = [
    { name: "Company", id: "company" },
    { name: "Employees", id: "employees" },
    { name: "Products", id: "products" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Departments", id: "departments" },
    { name: "Recent News", id: "recent-news" },
] as const;

export const SECONDARY_TABS = [
    { name: "Contact", id: "contact" },
] as const;

type Tab = (typeof MAIN_TABS[number] | typeof SECONDARY_TABS[number])["id"];

const HomePageContext = createContext<{
    selectedTab: string;
    setSelectedTab: ((tab: Tab) => void);
} | null>(null);

type HomePageProviderProps = {
    readonly defaultTab: Tab;
};

export const HomePageProvider: React.FC<React.PropsWithChildren<HomePageProviderProps>> = ({ children, defaultTab }) => {
    const [selectedTab, setSelectedTab] = useState<Tab>(defaultTab);

    useLayoutEffect(() => {
        const hash = window.location.hash.slice(1);

        const tab = [...MAIN_TABS, ...SECONDARY_TABS].find((t) => t.id === hash);

        if (tab) setSelectedTab(tab.id);
    }, []);

    return (
        <HomePageContext.Provider value={{ selectedTab, setSelectedTab }}>
            {children}
        </HomePageContext.Provider>
    );
};

export const useHomePageContext = () => {
    const context = React.useContext(HomePageContext)

    if (!context) {
        throw new Error("useHomePageContext must be used within a HomePageProvider");
    }

    return context;
};