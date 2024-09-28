import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard, TProfileCard } from './ProfileCard';


const meta: Meta<typeof ProfileCard> = {
    title: "Organisms/ProfileCard",
    component: ProfileCard,
};

type Story = StoryObj<TProfileCard>;

export const Default: Story = {
    args: {
        user: {
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
        likes: 12,
        posts: 99
    }
}

export default meta;