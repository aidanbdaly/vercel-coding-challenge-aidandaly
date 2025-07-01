import { Navigation } from "@/components";
import { ContentManager } from "@/components/contentManager";
import { HomePageProvider } from "@/contexts/homePageContext";

import { isTab, StartupData } from "@/types";

type PageProps = {
  searchParams: Promise<{
    tab?: string;
  }>
}

export default async function Home({ searchParams }: PageProps) {
  const response = await fetch("https://v0-next-js-startup-api.vercel.app/api/startup-data", {
    next: { revalidate: 60 },
  });

  const data: StartupData = await response.json();

  const tabParam = await searchParams.then(params => params.tab);
  const tab = tabParam && isTab(tabParam) ? tabParam : "company";

  return (
    <HomePageProvider defaultTab={tab}>
      <Navigation />
      <ContentManager data={data} className="h-full flex-1 overflow-hidden" />
    </HomePageProvider>
  )
}