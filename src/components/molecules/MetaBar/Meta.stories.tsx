import type { Meta, StoryObj } from '@storybook/react';
import { MetaBar, TMetaBar } from './MetaBar';


const meta: Meta<typeof MetaBar> = {
    title: "Molecules/MetaBar",
    component: MetaBar,
};

type Story = StoryObj<TMetaBar>;

export const Default: Story = {
    args: {
        likes: 43,
        views: 1200,
        shares: 45
    }
}

export const Partial: Story = {
    args: {
        likes: 43,
        views: 1200,
        shares: 0
    }
}

export default meta;