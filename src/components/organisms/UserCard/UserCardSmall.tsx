import { Card } from "@/components/atoms/Card/Card";
import { SIZES, VARIANTS } from "@/types";
import avatar from "@/components/assets/images/Avatar.svg";
import Image from "next/image";
import { Button } from "@/components/atoms/Buttons/Buttons";
import { TUser } from "@/types/services";


export type TUserCardSmall = {
    user: TUser;
};

const UserCardSmall: FC<TUserCardSmall> = ({ user }) => {

    return (<Card padding="md" classes="flex items-center gap-12 rounded-2xl">
        <div className="flex gap-3">
            <Image className="m-auto"
                width={40}
                height={40}
                src={avatar}
                alt="profile picture" />
            <div>
                <h2 className="heading-2 text-base">{user.firstName} {user.lastName}</h2>
                <p className="body text-TextSecondary text-xs">{user.username}</p>
            </div>
        </div>
        <Button size={SIZES.sm} label="Follow" variant={VARIANTS.outline} />
    </Card>)
};

export { UserCardSmall };