"use client";

import { useHomePageContext } from "@/contexts/homePageContext"
import { Department, NewsItem, Product, StartupData, Testimonial } from "@/types"
import { CompanyCard } from "./cards/companyCard";
import { EmployeeCard } from "./cards/employeeCard";
import { ProductCard } from "./cards/productCard";
import { TestimonialCard } from "./cards/testimonialCard";
import { DepartmentCard } from "./cards/departmentCard";
import { RecentNewsCard } from "./cards/recentNews";

type ContentManagerProps = {
    readonly data: StartupData
} & React.HTMLAttributes<HTMLDivElement>

export function ContentManager({ data }: ContentManagerProps) {
    const { selectedTab } = useHomePageContext();

    const renderView = () => {
        switch (selectedTab) {
            case "company": {
                return <CompanyCard company={data.Company} />
            }
            case "employees": {
                return (
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {data.Employees.map((employee) => (
                            <EmployeeCard key={employee.ID} {...employee} />
                        ))}
                    </div>
                )
            }
            case "products": {
                return (
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {data.Products.map((product: Product) => (
                            <ProductCard key={product.ProductID} product={product} />
                        ))}
                    </div>
                )
            }
            case "testimonials": {
                return (
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {data.Testimonials.map((testimonial: Testimonial) => (
                            <TestimonialCard key={testimonial.TestimonialID} testimonial={testimonial} />
                        ))}
                    </div>
                )
            }
            case "departments": {
                return (
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {data.Departments.map((department: Department) => (
                            <DepartmentCard key={department.Name} department={department} />
                        ))}
                    </div>
                )
            }
            case "recent-news": {
                return (
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {data.RecentNews.map((newsItem: NewsItem) => (
                            <RecentNewsCard key={newsItem.Title} news={newsItem} />
                        ))}
                    </div>
                )
            }
        }
    }

    return (
        <div className="flex-1 p-4 overflow-y-auto bg-gray-100 rounded-lg">
            {renderView()}
        </div>
    )
}