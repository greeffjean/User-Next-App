import { HydratedFeed } from "@/components/templates/Feed/HydratedFeed";
import { Metadata } from "next/types";


export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Feed',
};

const Page = () => {
  return (
    <main>
      <HydratedFeed />
    </main>
  )
};

export default Page;