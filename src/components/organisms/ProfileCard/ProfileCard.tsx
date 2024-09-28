import { PILL_VARIANTS, Pills } from "@/components/atoms/Pills/Pills";
import { Stats } from "@/components/molecules/Stats/Stats";
import Image from "next/image";
import styles from "./ProfileCard.module.css";
import { Card } from "@/components/atoms/Card/Card";
import { Button } from "@/components/atoms/Buttons/Buttons";
import { SIZES, VARIANTS } from "@/types";
import avatar from "@/components/assets/images/Avatar.png";
import classNames from "classnames";


export type TProfileCard = {
    user: {
        username: string;
        firstName: string,
        lastName: string,
        address: {
            state: string,
            country: string
        },
        company: {
            department: string
        }
    },
    likes: number,
    posts: number
}

const ProfileCard: FC<TProfileCard> = ({
    user,
    posts,
    likes
}) => {

    return (<Card>
        <div className={styles.wrapper}>
            <div className={classNames("flex flex-col md:flex-row gap-3 pt-4", styles.content)}>
                <div>
                    <Image
                        width={120}
                        height={120}
                        src={avatar}
                        alt="profile picture"
                    /></div>
                <div className="grid gap-3 justify-items-center md:justify-items-start">
                    <h2 className="heading-2">{user.firstName} {user.lastName}</h2>
                    <div className="flex flex-col md:flex-row gap-2">
                        <p className="body text-TextSecondary">{user.username}</p>
                        <p className="body text-TextSecondary">{user.address.state} {user.address.country}</p>
                    </div>
                    <Pills label={user.company.department} variant={PILL_VARIANTS.blue} />
                    <div className="flex gap-3 pt-3 pb-5">
                        <Stats label="posts" count={posts} />
                        <Stats label="likes" count={likes} />
                    </div>
                </div>
            </div>
            <div className={classNames("flex gap-3 p-4 pb-2 justify-center md:justify-normal", styles.ctaBar)}>
                <Button label="Follow" size={SIZES.sm} variant={VARIANTS.primary} />
                <Button label="Message" size={SIZES.sm} variant={VARIANTS.outline} />
            </div>
        </div>
    </Card>)
};

export { ProfileCard };