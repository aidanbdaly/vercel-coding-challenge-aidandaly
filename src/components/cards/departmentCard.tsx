import { Department } from "@/types";

type DepartmentCardProps = {
    readonly department: Department;
};

export const DepartmentCard: React.FC<DepartmentCardProps> = ({
    department,
}) => {
    const { Name, HeadCount, Lead, Budget, Goals } = department;

    return (
        <article className="flex flex-col gap-4 rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
            <header>
                <h4 className="text-xl font-semibold text-black">{Name}</h4>
                <p className="text-sm text-gray-600">
                    Head Count&nbsp;
                    <span className="font-medium text-black">{HeadCount}</span>
                </p>
            </header>

            <div className="space-y-1 text-sm">
                <p className="font-semibold text-gray-800">
                    Lead&nbsp;&mdash;&nbsp;{Lead.FirstName} {Lead.LastName}
                </p>
                <p className="text-gray-600">{Lead.Title}</p>
                <p className="text-xs text-gray-500">{Lead.Location}</p>
            </div>

            <p className="text-sm text-gray-700">
                Budget&nbsp;
                <span className="font-medium text-black">
                    ${Budget.toLocaleString()}
                </span>
            </p>

            <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Goals
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-gray-800">
                    {Goals.slice(0, 3).map((goal) => (
                        <li key={goal}>{goal}</li>
                    ))}
                    {Goals.length > 3 && (
                        <li className="text-xs text-gray-500">
                            +{Goals.length - 3} more
                        </li>
                    )}
                </ul>
            </div>
        </article>
    );
};