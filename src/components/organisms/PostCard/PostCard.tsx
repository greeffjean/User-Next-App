import { TPost, TUser } from "@/types";
import classNames from "classnames";
import { Card } from "@/components/atoms/Card/Card";
import avatar from "@/components/assets/images/Avatar.svg";
import styles from "./PostCard.module.css";
import Image from "next/image";
import { MetaBar } from "@/components/molecules/MetaBar/MetaBar";
import { useState } from "react";
import { Render } from "@/components/utils/Render";


export type TPostCard = {
    user: TUser;
    post: TPost;
}

const TEXT_HALF = 150;

const PostCard: FC<TPostCard> = ({ user, post }) => {
    const [viewMore, setViewMore] = useState(false);

    const viewMoreToggle = post.body.length > TEXT_HALF;
    const bodyText = [post.body.slice(0, TEXT_HALF), post.body.slice(0, Infinity)];

    return (
        <Card>
            <div className="flex gap-4 pt-1 pb-4">
                <div className={styles.avatar}>
                    <Image
                        width={40}
                        height={40}
                        src={avatar}
                        alt="profile picture"
                    />
                </div>
                <div>
                    <h2 className="heading-2 text-base">{user.firstName} {user.lastName}</h2>
                    <p className="body text-TextSecondary text-xs pb-3">{user.username}</p>
                    <div className="pb-2">
                        <span className={classNames(styles.body, "body-medium text-TextSecondary")}>{bodyText[0]}</span>
                        <Render isTruthy={viewMore}>
                            <span className={classNames(styles.body, "body-medium text-TextSecondary")}>{bodyText[1]}</span>
                        </Render>
                        <Render isTruthy={viewMoreToggle}>
                            <Render isTruthy={!viewMore}>
                                <span>  ...</span>
                            </Render>
                            <span
                                onClick={() => setViewMore(!viewMore)}
                                className="body-medium text-Primary cursor-pointer">{viewMore ? "  view less" : "view more"}</span>
                        </Render>
                    </div>
                    <div className="flex gap-3">
                        {post.tags.map(tag => <p key={tag} className="text-Primary body-small">#{tag}</p>)}
                    </div>
                </div>
            </div>
            <div className={classNames(styles.ctaBar)}>
                <MetaBar classes="pl-3 pt-2" likes={post.reactions.likes} shares={post.reactions.dislikes} views={post.views} />
            </div>
        </Card>
    )
}

export { PostCard };