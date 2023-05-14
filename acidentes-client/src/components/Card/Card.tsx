type CardProps = {
    children: React.ReactNode
}

export default function Card({children}: CardProps) {
    return (
        <div data-aos="fade-right" className="grid grid-cols-1 gap-12 p-12 border border-white rounded-2xl">
            {children}
        </div>
    )
}