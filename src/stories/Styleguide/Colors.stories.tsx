import { COLORS } from "@/types";
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
        {Object.keys(COLORS).map(color => <ColorBlock key={color} color={color} />) }
    </section>
}


export default meta;

