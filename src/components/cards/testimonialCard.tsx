import { Testimonial } from "@/types";

export type TestimonialCardProps = {
    readonly testimonial: Testimonial;
};

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
    testimonial,
}) => {
    const {
        Customer,
        Content,
        Rating,
        DateSubmitted,
        ProductUsed,
        Featured,
        Verified,
    } = testimonial;

    return (
        <article
            className={`flex flex-col gap-4 rounded-lg border border-gray-300 bg-white p-6 shadow-sm ${Featured ? "ring-2 ring-gray-900" : ""
                }`}
        >
            <p className="text-sm text-gray-800">&ldquo;{Content}&rdquo;</p>

            <div className="flex items-center gap-1 text-sm">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} filled={i < Rating} />
                ))}
                <span className="text-xs text-gray-600">
                    {new Date(DateSubmitted).toLocaleDateString()}
                </span>
            </div>

            <div className="space-y-1 text-sm">
                <p className="font-medium text-black">
                    {Customer.Name}
                    {Verified && (
                        <span className="ml-2 rounded bg-gray-200 px-1.5 py-px text-2xs font-semibold uppercase text-gray-700">
                            Verified
                        </span>
                    )}
                </p>
                <p className="text-gray-700">
                    {Customer.Title} @ {Customer.Company}
                </p>
                <p className="text-xs text-gray-500">{Customer.Location}</p>
            </div>

            <footer className="mt-auto text-xs text-gray-600">
                Product:&nbsp;
                <span className="font-medium text-black">{ProductUsed}</span>
            </footer>
        </article>
    );
};

const Star = ({ filled }: { filled: boolean }) => (
    <svg
        aria-hidden
        viewBox="0 0 20 20"
        className={`h-4 w-4 ${filled ? "fill-black" : "fill-gray-300"}`}
    >
        <path d="M10 1.5 12.6 7l6 .5-4.6 4 1.4 6-5.4-3-5.4 3 1.4-6-4.6-4 6-.5L10 1.5z" />
    </svg>
);