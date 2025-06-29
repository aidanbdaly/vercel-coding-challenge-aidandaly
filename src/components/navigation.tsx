"use client";

import { TABS, useHomePageContext } from "@/contexts/homePageContext";
import { ReactElement, useEffect } from "react";

type NavigationProps = {
    title?: string;
    subtitle?: string;
    onTabChange?: (tab: string) => void;
} & React.HTMLAttributes<HTMLDivElement>;

export function Navigation({ ...props }: NavigationProps): ReactElement {

    const { selectedTab, setSelectedTab } = useHomePageContext();

    useEffect(() => {
        const hash = window.location.hash.slice(1);

        const tab = TABS.find((t) => t.id === hash);

        if (tab) setSelectedTab(tab.id);
    }, []);

    return (

        <nav className="flex flex-col justify-center gap-4 bg-white-800 px-4 h-full">
            {TABS.map((tab) => (
                <a
                    key={tab.id}
                    href={`#${tab.id}`}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`px-4 py-2 text-sm font-medium w-[200px] hover:text-gray-900 border-1 hover:bg-gray-300 rounded-sm transition-colors duration-200 ${selectedTab === tab.id
                        ? "bg-white text-black"
                        : "bg-transparent text-white"
                        }`}
                >
                    {tab.name}
                </a>
            ))}
        </nav>
    )
}