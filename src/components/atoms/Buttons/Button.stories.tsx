import type { Meta, StoryObj } from '@storybook/react';
import { Button, TButton } from './Buttons';
import { SIZES, VARIANTS } from '@/types';


const meta: Meta<typeof Button> = {
    title: "Atoms/Buttons",
    component: Button,
};

type Story = StoryObj<TButton>;

export const Primary: Story = {
    args: {
        size: SIZES.lg,
        variant: VARIANTS.primary,
        label: "Primary"
    }
}

export const Outline: Story = {
    args: {
        size: SIZES.lg,
        variant: VARIANTS.outline,
        label: "Outline"
    }
}

export const OutlineFilled: Story = {
    args: {
        size: SIZES.lg,
        variant: VARIANTS.outlineFilled,
        label: "OutlineFilled"
    }
}

export const Gradient: Story = {
    args: {
        size: SIZES.lg,
        variant: VARIANTS.gradient,
        label: "Gradient"
    }
}

export default meta;