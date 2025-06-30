import { Company } from "@/types";

const Info = ({
    label,
    value,
}: {
    label: string;
    value: React.ReactNode;
}) => (
    <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            {label}
        </p>
        <p className="text-sm text-gray-800">{value}</p>
    </div>
);

const Metric = ({ label, value }: { label: string; value: string }) => (
    <li className="flex items-start justify-between">
        <span className="text-sm text-gray-600">{label}</span>
        <span className="font-medium text-black">{value}</span>
    </li>
);

type CompanyCardProps = {
    readonly company: Company;
} & React.HTMLAttributes<HTMLDivElement>;

export const CompanyCard: React.FC<CompanyCardProps> = ({
    company,
    ...props
}) => {
    return (
        <section className="max-w-full rounded-lg border border-gray-300 bg-white shadow-sm" {...props}>
            <header className="border-b border-gray-200 px-6 py-4">
                <h2 className="text-2xl font-semibold text-black">{company.Name}</h2>
                <p className="text-sm text-gray-600">
                    Founded&nbsp;{company.Founded} • {company.Industry} • {company.Stage}
                </p>
            </header>

            <div className="grid grid-cols-1 gap-x-8 gap-y-6 p-6 md:grid-cols-2">
                <div className="space-y-4">
                    <Info label="Mission" value={company.Mission} />
                    <Info label="Vision" value={company.Vision} />
                    <Info label="HQ" value={company.Headquarters} />
                    <Info
                        label="Website"
                        value={
                            <a
                                href={company.Website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-gray-700"
                            >
                                {company.Website.replace(/^https?:\/\//, "")}
                            </a>
                        }
                    />
                </div>

                <div>
                    <h3 className="mb-3 text-lg font-medium text-black">Key Metrics</h3>
                    <ul className="space-y-2 text-gray-800">
                        <Metric
                            label="Total Employees"
                            value={company.Metrics.TotalEmployees.toLocaleString()}
                        />
                        <Metric
                            label="Monthly Active Users"
                            value={company.Metrics.MonthlyActiveUsers.toLocaleString()}
                        />
                        <Metric
                            label="Revenue (M / Y)"
                            value={`$${company.Metrics.Revenue.Monthly.toLocaleString()} / $${company.Metrics.Revenue.Annual.toLocaleString()} (${company.Metrics.Revenue.Growth})`}
                        />
                        <Metric
                            label="Customer Satisfaction"
                            value={company.Metrics.CustomerSatisfaction}
                        />
                        <Metric
                            label="Funding Raised"
                            value={`${company.Metrics.Funding.TotalRaised} – ${company.Metrics.Funding.LastRound} (${company.Metrics.Funding.Investors} investors)`}
                        />
                    </ul>
                </div>
            </div>
        </section>
    )
}