import { NewsItem } from "@/types";

type RecentNewsCardProps = {
  readonly news: NewsItem;
};

export const RecentNewsCard: React.FC<RecentNewsCardProps> = ({ news }) => {
  const { Title, Date: DateString, Summary } = news;

  return (
    <article className="flex flex-col gap-4 rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
      <h4 className="text-lg font-semibold text-black">{Title}</h4>
      <time
        dateTime={DateString}
        className="text-xs uppercase tracking-wide text-gray-500"
      >
        {new Date(DateString).toLocaleDateString(undefined, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </time>
      <p className="text-sm text-gray-800">{Summary}</p>
    </article>
  );
};