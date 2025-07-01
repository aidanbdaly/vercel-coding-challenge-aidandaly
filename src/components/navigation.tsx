"use client";

import { useHomePageContext } from "@/contexts/homePageContext";
import { MAIN_TABS, SECONDARY_TABS } from "@/types";
import { ReactElement } from "react";

type NavigationProps = React.HTMLAttributes<HTMLDivElement>;

export function Navigation({ ...props }: NavigationProps): ReactElement {
    const { selectedTab, setSelectedTab } = useHomePageContext();

    return (
        <nav className="w-56 shrink-0 border-r border-gray-200 flex flex-col justify-between px-4 py-6" {...props}>
            <div className="space-y-2">
                {MAIN_TABS.map((t) => (
                    <Tab key={t.id} tab={t} active={selectedTab === t.id}
                        onClick={() => setSelectedTab(t.id)} />
                ))}
            </div>

            <div className="space-y-2">
                <hr className="border-gray-200" />
                {SECONDARY_TABS.map((t) => (
                    <Tab key={t.id} tab={t} active={selectedTab === t.id}
                        onClick={() => setSelectedTab(t.id)} />
                ))}
            </div>
        </nav>
    );
};

const Tab = ({
    tab,
    active,
    onClick,
}: {
    tab: { id: string; name: string };
    active: boolean;
    onClick: () => void;
}) => (
    <button
        onClick={onClick}
        className={`block rounded px-4 py-2 text-sm transition-colors text-left w-full cursor-pointer
                ${active ? "bg-black text-white" : "text-black hover:bg-gray-200"}`}
    >
        {tab.name}
    </button>
);