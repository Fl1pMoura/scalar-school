import { getHomeData } from "@/lib/getHomeData";
import HomeClient from "./HomeClient";

export default async function HomePage() {
  const initialData = getHomeData();

  return <HomeClient initialData={initialData} />;
}
