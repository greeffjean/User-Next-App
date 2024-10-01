import { HydratedProfile } from "@/components/templates/Profile/HydratedProfile"


type TGenerateMetadata = {
    params: { id: string }
}

export const generateMetadata = async ({ params }: TGenerateMetadata) => {
    const id = params.id
    return { id }
}

const Page = ({ params }: TGenerateMetadata) => {
    return (<main>
        <HydratedProfile id={params.id} />
    </main>)
};

export default Page;