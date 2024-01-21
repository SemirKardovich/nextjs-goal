export default function RestaurantsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className='flex items-center justify-center min-h-[80vh]'>
            {children}
        </section>
    )
}