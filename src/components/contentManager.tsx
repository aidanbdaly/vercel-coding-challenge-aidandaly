"use client";

import { useHomePageContext } from "@/contexts/homePageContext";
import {
    CompanyCard,
    EmployeeCard,
    ProductCard,
    TestimonialCard,
    DepartmentCard,
    RecentNewsCard,
} from "./cards";
import type {
    Department,
    Employee,
    Product,
    StartupData,
    Testimonial,
    NewsItem,
} from "@/types";
import { ReactElement, useMemo } from "react";
import { ContactCard } from "./cards/contactCard";

const Grid: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {children}
    </div>
);

type ContentManagerProps = {
    readonly data: StartupData;
} & React.HTMLAttributes<HTMLDivElement>;

const viewFactory = (data: StartupData) =>
    ({
        company: () => (
            <div className="flex flex-col items-center gap-4">
                <CompanyCard company={data.Company} />
                <video
                    src="https://hmqxjemv8pmwbgf6.public.blob.vercel-storage.com/video-ABOWVKqbcLQZ9qICKEIPFfxo1dE1xF.mp4"
                    className="w-full rounded-lg shadow-lg"
                    controls
                    preload="metadata"
                />
            </div>
        ),

        employees: () => (
            <Grid>
                {data.Employees.map((e: Employee) => (
                    <EmployeeCard key={e.ID} employee={e} />
                ))}
            </Grid>
        ),

        products: () => (
            <Grid>
                {data.Products.map((p: Product) => (
                    <ProductCard key={p.ProductID} product={p} />
                ))}
            </Grid>
        ),

        testimonials: () => (
            <Grid>
                {data.Testimonials.map((t: Testimonial) => (
                    <TestimonialCard key={t.TestimonialID} testimonial={t} />
                ))}
            </Grid>
        ),

        departments: () => (
            <Grid>
                {data.Departments.map((d: Department) => (
                    <DepartmentCard key={d.Name} department={d} />
                ))}
            </Grid>
        ),

        "recent-news": () => (
            <Grid>
                {data.RecentNews.map((n: NewsItem) => (
                    <RecentNewsCard key={n.Title} news={n} />
                ))}
            </Grid>
        ),

        "contact": () => (
            <ContactCard />
        ),
    }) as Record<string, () => ReactElement>;

export function ContentManager({
    data,
    className,
    ...props
}: ContentManagerProps) {
    const { selectedTab } = useHomePageContext();

    const views = useMemo(() => viewFactory(data), [data]);

    const View = views[selectedTab] ?? (() => null);

    return (
        <div
            className={`min-h-0 flex-1 overflow-y-auto rounded-xl p-4 shadow ${className}`}
            {...props}
        >
            <View />
        </div>
    );
}