import type { Meta, StoryObj } from '@storybook/react';
import { PILL_VARIANTS, Pills, TPills } from './Pills';

const meta: Meta<typeof Pills> = {
    title: "Atoms/Pills",
    component: Pills,
};

type Story = StoryObj<TPills>;

export const Purple: Story = {
    args: {
        variant: PILL_VARIANTS.purple,
        label: "Department"
    }
}

export const Red: Story = {
    args: {
        variant: PILL_VARIANTS.red,
        label: "Department"
    }
}

export const Blue: Story = {
    args: {
        variant: PILL_VARIANTS.blue,
        label: "Department"
    }
}

export const Orange: Story = {
    args: {
        variant: PILL_VARIANTS.orange,
        label: "Department"
    }
}

export const Green: Story = {
    args: {
        variant: PILL_VARIANTS.green,
        label: "Department"
    }
}

export default meta;