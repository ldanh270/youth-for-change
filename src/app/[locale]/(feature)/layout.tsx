import Footer from "#/layouts/Footer"
import Header from "#/layouts/Header"

export default function FeatureLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="flex min-h-screen flex-col">
            <div className="mt-20 flex-1">{children}</div>
            <Footer />
        </div>
    )
}
