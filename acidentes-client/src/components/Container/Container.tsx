type ContainerProps = {
    children: React.ReactNode
}

export default function Container({children}: ContainerProps) {
    return (
        <div className="bg-gradient-to-t from-indigo-900 to-black flex justify-center text-center scroll-smooth">
            {children}
        </div>
    )
}