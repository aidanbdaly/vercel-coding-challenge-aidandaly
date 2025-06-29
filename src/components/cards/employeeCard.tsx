import { Employee } from "@/types";

type EmployeeCardProps = Employee;

export const EmployeeCard: React.FC<EmployeeCardProps> = (employee) => (
    <article className="flex flex-col gap-3 rounded-lg border border-gray-300 bg-white p-5 shadow-sm">
        <header>
            <h4 className="text-lg font-semibold text-black">
                {employee.FirstName} {employee.LastName}
            </h4>
            <p className="text-sm text-gray-600">{employee.Title}</p>
            <p className="text-xs text-gray-500">{employee.Department}</p>
        </header>

        <ul className="text-sm text-gray-800">
            <li className="flex justify-between">
                <span className="text-gray-600">Location</span>
                <span>{employee.Location}</span>
            </li>
            <li className="flex justify-between">
                <span className="text-gray-600">Started</span>
                <span>{new Date(employee.StartDate).toLocaleDateString()}</span>
            </li>
            <li className="flex justify-between">
                <span className="text-gray-600">Available</span>
                <span>{employee.AvailableForMeeting ? "Yes" : "No"}</span>
            </li>
        </ul>

        <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Key Skills
            </p>
            <div className="flex flex-wrap gap-2">
                {employee.Skills.slice(0, 4).map((skill) => (
                    <span
                        key={skill}
                        className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-700"
                    >
                        {skill}
                    </span>
                ))}
                {employee.Skills.length > 4 && (
                    <span className="text-xs text-gray-500">+{employee.Skills.length - 4}</span>
                )}
            </div>
        </div>

        <footer className="mt-auto flex gap-4">
            <a
                href={employee.LinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs underline hover:text-gray-700"
            >
                LinkedIn
            </a>
            {employee.GitHub && (
                <a
                    href={employee.GitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs underline hover:text-gray-700"
                >
                    GitHub
                </a>
            )}
        </footer>
    </article>
);