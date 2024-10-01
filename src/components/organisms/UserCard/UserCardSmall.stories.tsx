import type { Meta, StoryObj } from '@storybook/react';
import { UserCardSmall, TUserCardSmall } from './UserCardSmall';


const meta: Meta<typeof UserCardSmall> = {
    title: "Organisms/UserCard/Small",
    component: UserCardSmall,
};

type Story = StoryObj<TUserCardSmall>;

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
        }
    }
}

export default meta;