export default function BlogHeader() {
    return (
        <div className="mb-16 space-y-4 text-center">
            {/* Badge */}
            <div className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                </svg>
                Blogs & Articles
            </div>

            {/* Title */}
            <h1 className="text-foreground font-title text-4xl font-bold md:text-5xl lg:text-6xl">
                Khám Phá Kiến Thức
            </h1>

            {/* Description */}
            <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed">
                Tìm hiểu về các mục tiêu phát triển bền vững, câu chuyện truyền cảm hứng và kiến
                thức hữu ích để cùng nhau tạo nên sự thay đổi tích cực cho cộng đồng.
            </p>
        </div>
    )
}
