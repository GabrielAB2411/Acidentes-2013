type WrapperProps = {
    children: React.ReactNode
}

export default function Wrapper({children}: WrapperProps) {
    return (
        <div className="grid grid-cols-1 gap-40 mb-24">
            {children}
        </div>
    )
}
