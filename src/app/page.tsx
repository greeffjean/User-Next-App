import { HydratedFeed } from "@/components/templates/Feed/HydratedFeed";


export const dynamic = 'force-dynamic';

const Page = () => {
  return (
    <main>
      <HydratedFeed />
    </main>
  )
};

export default Page;