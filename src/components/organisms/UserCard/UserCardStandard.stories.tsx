import type { Meta, StoryObj } from '@storybook/react';
import { UserCardStandard, TUserCardStandard } from './UserCardStandard';


const meta: Meta<typeof UserCardStandard> = {
    title: "Organisms/UserCard/Standard",
    component: UserCardStandard,
};

type Story = StoryObj<TUserCardStandard>;

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
        }
    }
}

export default meta;