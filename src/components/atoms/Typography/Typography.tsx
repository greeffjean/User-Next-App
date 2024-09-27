
const HeadingOne: FC = ({ children }) => {
    return <h1 className="heading-1">{children}</h1>
};
const HeadingTwo: FC = ({ children }) => {
    return <h1 className="heading-2">{children}</h1>
};
const HeadingThree: FC = ({ children }) => {
    return <h1 className="heading-3">{children}</h1>
};
const HeadingFour: FC = ({ children }) => {
    return <h1 className="heading-4">{children}</h1>
};
const Body: FC = ({ children }) => {
    return <h1 className="body">{children}</h1>
};
const BodySmall: FC = ({ children }) => {
    return <h1 className="body-small">{children}</h1>
};
const BodyMedium: FC = ({ children }) => {
    return <h1 className="body-medium">{children}</h1>
};
const BodyOverline: FC = ({ children }) => {
    return <h1 className="body-overline">{children}</h1>
};
const BodyOverlineSmall: FC = ({ children }) => {
    return <h1 className="body-overline-small">{children}</h1>
};


export { HeadingOne, HeadingTwo, HeadingThree, HeadingFour, Body, BodySmall, BodyMedium, BodyOverline, BodyOverlineSmall };