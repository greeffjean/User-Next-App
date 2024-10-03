const Container: FC = ({ children }) => {

    return (<main className="ml-auto mr-auto max-w-3xl px-4 py-8 grid gap-8">
        {children}
    </main>)
}

export { Container }