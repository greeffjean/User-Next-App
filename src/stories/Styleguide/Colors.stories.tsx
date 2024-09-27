import { StoryObj } from "@storybook/react";

const ColorBlock: FC<{ color: string }> = ({ color }) => {
    return <div>
        <div className={`w-40 h-40`} style={{ background: `var(--${color})` }} />
        <p className="text-center">{color}</p>
    </div>
}

const meta = {
    title: "StyleGuide/Colors",
};

type Story = StoryObj<FC>;

export const Colors: Story = {
    render: () => <section className="flex gap-5 flex-wrap">
        <ColorBlock color="Primary" />
        <ColorBlock color="MajorelleBlue50" />
        <ColorBlock color="MajorelleBlue700" />
        <ColorBlock color="RedCrayola50" />
        <ColorBlock color="RedCrayola700" />
        <ColorBlock color="LightBlue50" />
        <ColorBlock color="LightBlue700" />
        <ColorBlock color="MandarinOrange50" />
        <ColorBlock color="MandarinOrange700" />
        <ColorBlock color="Turquoise50" />
        <ColorBlock color="Turquoise700" />
        <ColorBlock color="TextPrimary" />
        <ColorBlock color="TextSecondary" />
    </section>
}


export default meta;

