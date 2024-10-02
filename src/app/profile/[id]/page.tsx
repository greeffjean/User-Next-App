import { HydratedProfile } from "@/components/templates/Profile/HydratedProfile"


type TGenerateMetadata = {
    params: { id: string }
}

const Page = ({ params }: TGenerateMetadata) => {
    return (<main>
        <HydratedProfile id={params.id} />
    </main>)
};

export default Page;