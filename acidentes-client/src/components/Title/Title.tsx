type TitleProps = {
    children: React.ReactNode
}

export default function Title({children}: TitleProps) {
    return (
        <h1 className="text-white text-3xl font-extralight">
            {children}
        </h1>
    )
}