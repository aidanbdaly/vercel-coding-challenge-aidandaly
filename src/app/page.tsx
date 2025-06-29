import { Navigation } from "@/components";
import { ContentManager } from "@/components/contentManager";
import { HomePageProvider } from "@/contexts/homePageContext";

import { StartupData } from "@/types";

export default async function Home() {

  const response = await fetch("https://v0-next-js-startup-api.vercel.app/api/startup-data", {
    next: { revalidate: 60 },
  });

  const data: StartupData = await response.json();

  return (
    <HomePageProvider>
      <div className="flex gap-4">
        <Navigation />
        <ContentManager data={data} />
      </div>
    </HomePageProvider>
  );
}