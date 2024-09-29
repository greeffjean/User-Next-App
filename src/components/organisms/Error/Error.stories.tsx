import type { Meta, StoryObj } from '@storybook/react';
import { Error, TError } from './Error';


const meta: Meta<typeof Error> = {
    title: "Organisms/Error",
    component: Error,
};

type Story = StoryObj<TError>;

export const Default: Story = {
    args: {
        title: "Title",
        description: "Non ipsum sint esse officia est mollit officia exercitation eiusmod nisi aliquip."
    }
};

export default meta;