import { Card } from "@/components/atoms/Card/Card";
import { Stats } from "@/components/molecules/Stats/Stats";
import { TUser } from "@/types/services";
import avatar from "@/components/assets/images/Avatar.svg";
import Image from "next/image";
import classNames from "classnames";
import styles from "./UserCard.module.css";


export type TUserCardStandard = {
    user: TUser;
};

const UserCardStandard: FC<TUserCardStandard> = ({ user }) => {

    return (<Card classes="grid gap-2 p-8 pt-3 pb-3">
        <Image className="m-auto"
            width={40}
            height={40}
            src={avatar}
            alt="profile picture" />
        <div>
            <h2 className="heading-2 text-base">{user.firstName} {user.lastName}</h2>
            <p className="body text-TextSecondary text-xs text-center">{user.username}</p>
        </div>
        <div className={classNames("m-auto flex gap-3 pt-1", styles.stats)}>
            <Stats count={1} label="posts" />
            <Stats count={1} label="likes" />
        </div>
    
    </Card>)
};

export { UserCardStandard };