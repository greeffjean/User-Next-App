import type { Meta, StoryObj } from '@storybook/react';
import { ErrorComponent, TError } from './Error';


const meta: Meta<typeof ErrorComponent> = {
    title: "Organisms/Error",
    component: ErrorComponent,
};

type Story = StoryObj<TError>;

export const Default: Story = {
    args: {
        title: "Title",
        description: "Non ipsum sint esse officia est mollit officia exercitation eiusmod nisi aliquip."
    }
};

export default meta;