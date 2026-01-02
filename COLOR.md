### 1. Bộ Màu Thương Hiệu (Brand Colors)

Đây là màu nhận diện chung cho tổ chức "Youth for Change", dùng cho Logo, Header, Button chính.

| Tên màu          | Mã Hex    | Tailwind Suggestion | Vai trò & Ý nghĩa                                                                                                                    |
| ---------------- | --------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Primary Blue** | `#0F4C81` | `blue-900` (custom) | **Sự tin cậy, Trí tuệ.** Gợi nhắc màu xanh Liên Hợp Quốc nhưng đậm hơn để tạo sự hiện đại. Dùng cho Header, Footer, Text quan trọng. |
| **Action Green** | `#26D07C` | `emerald-500`       | **Tuổi trẻ, Hy vọng, Bền vững.** Dùng cho nút bấm chính (CTA), link, icon nổi bật.                                                   |
| **Alert Red**    | `#E63946` | `red-500`           | **Cấp bách.** Dùng cho các tin tức nóng, badge thông báo, hoặc nút "Donate".                                                         |

### 2. Bộ Màu Nền & Văn Bản (UI/UX Foundation)

Kết hợp với font **Geist**, bộ này giúp mắt dễ chịu khi đọc tin tức dài.

| Tên màu          | Mã Hex    | Tailwind Suggestion | Vai trò                                               |
| ---------------- | --------- | ------------------- | ----------------------------------------------------- |
| **Background**   | `#FFFFFF` | `white`             | Nền chính trang web.                                  |
| **Surface**      | `#F3F4F6` | `gray-100`          | Nền phụ (Section background), nền của Card.           |
| **Heading Text** | `#111827` | `gray-900`          | Màu chữ cho Tiêu đề (Montserrat). Đen dịu, không gắt. |
| **Body Text**    | `#374151` | `gray-700`          | Màu chữ nội dung (Geist Sans).                        |
| **Border/Line**  | `#E5E7EB` | `gray-200`          | Đường viền ngăn cách các section.                     |

### 3. Bộ Màu Chuẩn 17 SDGs (Quan trọng)

Bạn **bắt buộc** phải dùng đúng mã màu này khi nhắc đến từng mục tiêu cụ thể (ví dụ: Tag bài viết, Icon).

```css
/* Tham khảo chuẩn UN SDGs */
SDG 1 (No Poverty): #E5243B
SDG 2 (Zero Hunger): #DDA63A
SDG 3 (Good Health): #4C9F38
SDG 4 (Quality Education): #C5192D
SDG 5 (Gender Equality): #FF3A21
SDG 6 (Clean Water): #26BDE2
SDG 7 (Clean Energy): #FCC30B
SDG 8 (Decent Work): #A21942
SDG 9 (Industry/Innovation): #FD6925
SDG 10 (Reduced Inequalities): #DD1367
SDG 11 (Sustainable Cities): #FD9D24
SDG 12 (Consumption): #BF8B2E
SDG 13 (Climate Action): #3F7E44
SDG 14 (Life Below Water): #0A97D9
SDG 15 (Life on Land): #56C02B
SDG 16 (Peace/Justice): #00689D
SDG 17 (Partnerships): #19486A

```

### 4. Áp dụng thực tế (Nguyên tắc 60-30-10)

Để trang web đẹp "như Tây", hãy áp dụng quy tắc phối màu này:

1. **60% Màu trung tính:** Dùng Trắng (`bg-white`) và Xám nhạt (`bg-gray-100`) cho toàn bộ nền. Chữ dùng màu Xám đậm (`text-gray-900` / `text-gray-700`).
2. **30% Màu thương hiệu (Primary):** Dùng màu Xanh Dương (`bg-primary`, `text-primary`) cho Header, Footer, và các Tiêu đề lớn.
3. **10% Màu điểm nhấn (Action/SDG):**

- Dùng màu Xanh Lá (`bg-action`) cho nút "Tham gia ngay", "Đọc thêm".
- Dùng màu SDG cụ thể (ví dụ Đỏ SDG1) **chỉ cho** thẻ bài viết (Card Badge) hoặc Icon liên quan đến mục tiêu đó.

**Ví dụ Code Component (Card tin tức):**

```tsx
// Ví dụ hiển thị bài viết thuộc SDG 4 (Giáo dục)
export default function NewsCard() {
    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
            {/* Ảnh thumbnail */}
            <div className="relative h-48 w-full bg-gray-200">
                {/* Badge SDG: Dùng màu cụ thể của SDG đó */}
                <span className="bg-sdg-4 font-heading absolute top-4 left-4 rounded px-2 py-1 text-xs font-bold text-white uppercase">
                    SDG 4 • Education
                </span>
            </div>

            <div className="p-6">
                <h3 className="font-heading mb-2 text-xl font-bold text-gray-900">
                    Dự án lớp học vùng cao cho trẻ em
                </h3>
                <p className="mb-4 line-clamp-2 font-sans text-gray-700">
                    Nhóm Youth for Change đã mang sách vở và thiết bị học tập đến với...
                </p>

                {/* Nút hành động chung */}
                <button className="text-action font-heading hover:text-action-hover flex items-center gap-1 text-sm font-bold">
                    Đọc tiếp <span>→</span>
                </button>
            </div>
        </div>
    )
}
```

### Tổng kết

- **Màu chủ đạo:** Xanh dương đậm (#0F4C81) + Xanh lá tươi (#26D07C).
- **Màu nền:** Trắng + Xám nhạt.
- **Màu SDG:** Giữ nguyên mã gốc của UN, chỉ dùng làm điểm nhấn (badge, icon).

Bộ màu này đảm bảo trang web của bạn vừa chuyên nghiệp (cho tin tức/tổ chức), vừa năng động (cho giới trẻ), lại tôn trọng đúng nhận diện của 17 SDGs. Bạn có muốn tôi giúp thiết kế cấu trúc **Header/Footer** với bộ màu này không?
