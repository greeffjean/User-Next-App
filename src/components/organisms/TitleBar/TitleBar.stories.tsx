import type { Meta, StoryObj } from '@storybook/react';
import { TTitleBar, TitleBar } from './TitleBar';
import { Button } from '@/components/atoms/Buttons/Buttons';
import { SIZES, VARIANTS } from '@/types';


const meta: Meta<typeof TitleBar> = {
    title: "Organisms/TitleBar",
    component: TitleBar,
};

type Story = StoryObj<TTitleBar>;

export const Default: Story = {
    args: {
        controls: [<Button key="button" label='Button' size={SIZES.sm} variant={VARIANTS.primary} />],   
    }
};

export default meta;