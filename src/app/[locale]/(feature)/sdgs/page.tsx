import SDGList from "#/components/sdgs/sdg-list"
import SDGHeading from "#/components/sdgs/sdg-title"

export default function SDGPage() {
    return (
        <div className="from-background via-card to-background min-h-screen bg-linear-to-br">
            <div className="container mx-auto px-4 py-16">
                {/* Title */}
                <SDGHeading />

                {/* SDGs list */}
                <SDGList />
            </div>
        </div>
    )
}
