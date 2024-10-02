import { HydratedFeed } from "@/components/templates/Feed/HydratedFeed";
import { Metadata } from "next/types";


export const metadata: Metadata = {
  title: 'Metaversal | Feed',
}


const Page = () => {
  return (
      <HydratedFeed />
  )
};

export default Page;