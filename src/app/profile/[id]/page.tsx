import { HydratedProfile } from "@/components/templates/Profile/HydratedProfile"
import { Metadata } from "next/types";


export const metadata: Metadata = {
    title: 'Metaversal | Profile',
}

type TGenerateMetadata = {
    params: { id: string }
}

const Page = ({ params }: TGenerateMetadata) => {
    return (<main>
        <HydratedProfile id={params.id} />
    </main>)
};

export default Page;