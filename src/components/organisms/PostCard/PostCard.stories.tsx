import type { Meta, StoryObj } from '@storybook/react';
import { PostCard, TPostCard } from './PostCard';


const meta: Meta<typeof PostCard> = {
    title: "Organisms/PostCard",
    component: PostCard,
};

type Story = StoryObj<TPostCard>;

export const Default: Story = {
    args: {
        user: {
            id: "01",
            username: "@JeanCharl",
            firstName: "Jean",
            lastName: "Greeff",
            address: {
                state: "12 Anywhere street",
                country: "Cape Town"
            },
            company: {
                department: "Engineering"
            }
        },
        post: {
            body: `Irure excepteur velit amet cupidatat elit. Qui consectetur deserunt velit cillum occaecat dolor magna in do sint Lorem duis adipisicing qui. Excepteur adipisicing anim voluptate est deserunt qui. Commodo consequat amet excepteur do nostrud aute pariatur occaecat veniam in. Voluptate excepteur minim minim nostrud dolor proident adipisicing ullamco exercitation consequat voluptate qui et eiusmod. Officia aute nisi do est et do adipisicing cupidatat ullamco commodo esse dolor culpa. Consequat id sit excepteur laboris qui deserunt sint ut quis reprehenderit.
            Irure ut officia sit exercitation labore culpa consectetur consectetur ad proident qui dolor duis anim.Est pariatur deserunt dolore irure commodo nostrud exercitation ut ad mollit ullamco.Cupidatat mollit consequat mollit enim exercitation mollit cupidatat excepteur esse dolor.`,
            tags: ["adventure", "finance", "decentralized"],
            views: 40043,
            reactions: { dislikes: 23, likes: 2045 },
            id: "12",
            title: "Non culpa mollit eiusmod adipisicing.",
            userId: "01"
        }
    }
}

export default meta;