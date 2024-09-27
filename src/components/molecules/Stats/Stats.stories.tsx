import type { Meta, StoryObj } from '@storybook/react';
import { Stats, TStats } from './Stats';

const meta: Meta<typeof Stats> = {
    title: "Molecules/Stats",
    component: Stats,
};

type Story = StoryObj<TStats>;

export const Default: Story = {
    args: {
        label: "likes",
        count: 6150
    }
}

export default meta;