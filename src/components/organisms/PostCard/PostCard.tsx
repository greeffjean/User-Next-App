import classNames from "classnames";
import { Card } from "@/components/atoms/Card/Card";
import avatar from "@/components/assets/images/Avatar.svg";
import styles from "./PostCard.module.css";
import Image from "next/image";
import { MetaBar } from "@/components/molecules/MetaBar/MetaBar";
import { useState } from "react";
import { Render } from "@/components/utils/Render";
import { TPost, TUser } from "@/types/services";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";


export type TPostCard = {
    user: TUser;
    post: TPost;
}

const TEXT_HALF = 200;

const PostCard: FC<TPostCard> = ({ user, post }) => {
    const [viewMore, setViewMore] = useState(false);

    const viewMoreToggle = post.body.length > TEXT_HALF;
    const bodyText = [post.body.slice(0, TEXT_HALF), post.body.slice(TEXT_HALF, Infinity)];

    return (
        <Card>
            <div className="flex gap-4 pt-1 pb-4">
                <motion.div whileHover={{ opacity: 0.5 }} className={styles.avatar}>
                    <Link href={`/profile/${user.id}`}>
                        <Image
                            width={40}
                            height={40}
                            src={avatar}
                            alt="profile picture"
                        />
                    </Link>
                </motion.div>
                <div>
                    <Link href={`/profile/${user.id}`}>
                        <motion.h2 whileHover={{ textDecoration: "underline", textDecorationThickness: "2px" }} className="heading-2 text-base">{user.firstName} {user.lastName}</motion.h2>
                    </Link>
                    <p className="body text-TextSecondary text-xs pb-3">@{user.username}</p>
                    <div className="pb-2">
                        <span className={classNames(styles.body, "body-medium text-sm text-TextSecondary")}>{bodyText[0]}</span>
                        <AnimatePresence>
                            {viewMore && <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className={classNames(styles.body, "body-medium text-sm text-TextSecondary")}>{bodyText[1]}</motion.span>}
                        </AnimatePresence>
                        <Render isTruthy={viewMoreToggle}>
                            <AnimatePresence>
                                {!viewMore && <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}>  ...</motion.span>}
                            </AnimatePresence>
                            <span
                                onClick={() => setViewMore(!viewMore)}
                                className="body-medium text-sm text-Primary cursor-pointer">{viewMore ? "  view less" : "view more"}</span>
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