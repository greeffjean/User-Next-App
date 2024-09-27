import type { Meta, StoryObj } from '@storybook/react';

import { HeadingOne, HeadingTwo, HeadingThree, HeadingFour, Body, BodySmall, BodyMedium, BodyOverline, BodyOverlineSmall } from './Typography';

const meta = {
    title: "Atoms/Typography",
};

type Story = StoryObj<FC>;
export const Typography: Story = {
    render: () => <section>
        <HeadingOne>Heading One</HeadingOne>
        <br/>
        <HeadingTwo>Heading Two</HeadingTwo>
        <br />
        <HeadingThree>Heading Three</HeadingThree>
        <br />
        <HeadingFour>Heading Four</HeadingFour>
        <br />
        <Body>Body</Body>
        <br />
        <BodySmall>Body Small</BodySmall>
        <br />
        <BodyMedium>Body Medium</BodyMedium>
        <br />
        <BodyOverline>Body Overline</BodyOverline>
        <br />
        <BodyOverlineSmall>Body Overline Small</BodyOverlineSmall>
    </section>
};


export default meta;