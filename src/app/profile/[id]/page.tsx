import { HydratedProfile } from "@/components/templates/Profile/HydratedProfile"
import { Metadata } from "next/types";


type TGenerateMetadata = {
    params: { id: string }
}
export const metadata: Metadata = {
    title: 'Profile',
};

const Page = ({ params }: TGenerateMetadata) => {
    return (<main>
        <HydratedProfile id={params.id} />
    </main>)
};

export default Page;