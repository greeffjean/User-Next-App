type TRender = {
    isTruthy: unknown;
}

const Render: FC<TRender> = ({ isTruthy, children }) => {
    if (Boolean(isTruthy)) return children
    return null;
}

export { Render }