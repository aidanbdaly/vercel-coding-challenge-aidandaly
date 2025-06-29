"use client"

import React, { createContext, useState } from "react";

export const TABS = [
    { name: "Company", id: "company" },
    { name: "Employees", id: "employees" },
    { name: "Products", id: "products" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Departments", id: "departments" },
    { name: "Recent News", id: "recent-news" },
] as const;

type Tab = (typeof TABS)[number]["id"];

const HomePageContext = createContext<{
    selectedTab: string;
    setSelectedTab: ((tab: Tab) => void);
} | null>(null);

export const HomePageProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [selectedTab, setSelectedTab] = useState<Tab>("company");

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