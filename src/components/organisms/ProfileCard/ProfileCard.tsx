import { PILL_VARIANTS, Pills } from "@/components/atoms/Pills/Pills";
import { Stats } from "@/components/molecules/Stats/Stats";
import Image from "next/image";
import styles from "./ProfileCard.module.css";
import { Card } from "@/components/atoms/Card/Card";
import { Button } from "@/components/atoms/Buttons/Buttons";
import { SIZES, VARIANTS } from "@/types";
import avatar from "@/components/assets/images/Avatar.svg";
import classNames from "classnames";
import { TUser } from "@/types/services";


export type TProfileCard = {
    user: TUser,
    likes: number,
    posts: number
}

const ProfileCard: FC<TProfileCard> = ({
    user,
    posts,
    likes
}) => {

    return (<Card classes="md:mt-0 mt-10">
        <div className={styles.wrapper}>
            <div className={classNames("flex flex-col md:flex-row gap-5", styles.content)}>
                <div>
                    <Image
                        className={styles.image}
                        width={120}
                        height={120}
                        src={avatar}
                        alt="profile picture"
                    />
                </div>
                <div className="grid gap-3 justify-items-center md:justify-items-start">
                    <h2 className="heading-2 text-3xl">{user.firstName} {user.lastName}</h2>
                    <div className="flex items-center md:items-baseline flex-col md:flex-row gap-2">
                        <p className="body text-TextSecondary">@{user.username}</p>
                        <p className={classNames("body text-TextSecondary", styles.address)}>{user.address.state} {user.address.country}</p>
                    </div>
                    <Pills label={user.company.department} variant={PILL_VARIANTS.blue} />
                    <div className="flex gap-5 pt-3 pb-5">
                        <Stats label="posts" count={posts} />
                        <Stats label="likes" count={likes} />
                    </div>
                </div>
            </div>
            <div className={classNames("flex gap-3 pt-3 justify-center md:justify-normal", styles.ctaBar)}>
                <Button label="Follow" size={SIZES.md} variant={VARIANTS.primary} />
                <Button label="Message" size={SIZES.md} variant={VARIANTS.outline} />
            </div>
        </div>
    </Card>)
};

export { ProfileCard };