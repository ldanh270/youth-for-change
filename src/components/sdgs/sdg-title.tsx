"use client"

export default function SDGTitle() {
    return (
        <div className="animate-fade-in-up mb-16 text-center">
            <div className="from-sdg-14 to-sdg-15 text-primary-foreground mb-6 inline-block rounded-full bg-linear-to-r px-6 py-2 text-sm font-semibold shadow-lg">
                UN Sustainable Development Goals
            </div>
            <h1 className="from-sdg-14 to-sdg-3 lg:text-10xl mb-6 bg-linear-to-r bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
                17 Goals to Transform Our World
            </h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed md:text-xl">
                The Sustainable Development Goals are a universal call to action to end poverty,
                protect the planet, and ensure that by 2030 all people enjoy peace and prosperity.
            </p>
        </div>
    )
}
