"use client"

import { Tab } from "@/types";
import { useRouter } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";

const HomePageContext = createContext<{
    selectedTab: string;
    setSelectedTab: ((tab: Tab) => void);
} | null>(null);

type HomePageProviderProps = {
    readonly defaultTab: Tab;
};

export const HomePageProvider: React.FC<React.PropsWithChildren<HomePageProviderProps>> = ({ children, defaultTab }) => {
    const [selectedTab, setSelectedTab] = useState<Tab>(defaultTab);

    const router = useRouter();

    useEffect(() => {
        const newSearchParams = new URLSearchParams(window.location.search);

        if (newSearchParams.get("tab") !== selectedTab) {
            newSearchParams.set("tab", selectedTab);
            router.replace(`?${newSearchParams.toString()}`, { scroll: false });
        }
    }, [selectedTab, router]);

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