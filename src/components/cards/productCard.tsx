import { Product } from "@/types";

type ProductCardProps = {
    product: Product;  
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const {
        Name,
        Category,
        Description,
        Features,
        PricingTier,
        MonthlyPrice,
        LaunchDate,
        Status,
        TeamLead,
    } = product;

    return (
        <article className="flex flex-col gap-4 rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
            <header className="space-y-1">
                <h4 className="text-xl font-semibold text-black">{Name}</h4>
                <p className="text-sm text-gray-600">{Category}</p>
                <p className="text-xs uppercase tracking-wide text-gray-500">
                    {Status}
                </p>
            </header>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700">
                <span>
                    <span className="font-medium text-black">${MonthlyPrice}</span>/mo
                    &nbsp;({PricingTier})
                </span>
                <span className="text-gray-500">•</span>
                <span>Launch&nbsp;{new Date(LaunchDate).toLocaleDateString()}</span>
            </div>

            <p className="text-sm text-gray-800">{Description}</p>

            <ul className="flex flex-wrap gap-2">
                {Features.slice(0, 6).map((feat) => (
                    <li
                        key={feat}
                        className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-700"
                    >
                        {feat}
                    </li>
                ))}
                {Features.length > 6 && (
                    <li className="text-xs text-gray-500">
                        +{Features.length - 6} more
                    </li>
                )}
            </ul>
            
            <footer className="mt-auto border-t border-gray-200 pt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Team Lead
                </p>
                <p className="text-sm text-gray-800">
                    {TeamLead.FirstName} {TeamLead.LastName} – {TeamLead.Title}
                </p>
            </footer>
        </article>
    );
};