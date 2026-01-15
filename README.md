# Youth for Change – SDGs Landing Page & Blog

A Next.js 14+ application for communicating the 17 United Nations Sustainable Development Goals (SDGs), built for the **Youth for Change** initiative at UD–UFLS.

The site serves as:

- A landing page highlighting SDG-related activities and impact
- A blog/news hub powered by Notion as a headless CMS
- A learning hub for all 17 SDGs
- A presentation space for the project team and mission

Design decisions (typography, color system, SDG palette) are documented in:

- [STYLE.md](STYLE.md)
- [COLOR.md](COLOR.md)

---

## 1. Features

### 1.1 Home / Landing Page

Entry route: [`Home`](src/app/page.tsx)

Sections:

- **Hero slider**  
  Fullscreen, auto-rotating hero based on latest Notion posts, implemented in:
    - [`HeroSection`](src/components/home/hero-section.tsx)
    - [`SlideCard`](src/components/home/slide-card.tsx)

- **SDG carousel**  
  Auto-scrolling carousel of the 17 SDGs, using config from [`SDGs`](src/configs/sdgs.ts):
    - [`SDGShowcase`](src/components/home/sdg-showcase.tsx)

- **Impact statistics**  
  Highlight key impact metrics:
    - [`StatsSection`](src/components/home/stats-section.tsx)

- **Latest blogs**  
  Grid of latest Notion posts:
    - [`LatestBlogs`](src/components/home/latest-blogs.tsx)

Global layout elements:

- Header: [`Header`](src/layouts/Header.tsx)
- Footer: [`Footer`](src/layouts/Footer.tsx)
- Sticky scroll-aware header: [`StickyHeader`](src/layouts/sticky-header.tsx), wired in [`RootLayout`](src/app/layout.tsx)

---

### 1.2 SDGs Page

Route: `/sdgs` → [`SDGPage`](src/app/%28feature%29/sdgs/page.tsx)

- Centralized SDG metadata: [`SDGs`](src/configs/sdgs.ts)
- Animated title section: [`SDGTitle`](src/components/sdgs/sdg-title.tsx)
- SDG list + detail cards:
    - [`SDGList`](src/components/sdgs/sdg-list.tsx)
    - [`SDGElement`](src/components/sdgs/sdg-element.tsx)

Each SDG card uses:

- Official UN SDG colors via CSS variables and utilities defined in [`globals.css`](src/app/globals.css) and described in [COLOR.md](COLOR.md)
- Responsive layout (image + description, “Learn more” CTA)

---

### 1.3 Blog System

#### 1.3.1 Data Source (Notion)

- Environment configuration: [`notionToken`, `blogDataSourceId`](src/configs/notion.ts)
- Notion client + markdown conversion:
    - [`getBlogBySlug`](src/libs/notion.ts)
    - Notion → Markdown mapping, then to HTML via [`convertMarkdownToHTML`](src/libs/markdown-converter.ts)
- Mapping raw Notion page → card model:
    - [`mapBlogToCard`](src/libs/notion-helper.ts)
- Type-safe Notion schema:
    - [`Blog`](src/types/blog.ts)

Caching:

- Latest posts are retrieved via [`getCachedLatestPosts`](src/libs/cache.ts), used by:
    - [`Home`](src/app/page.tsx)
    - Blog pages under [`blogs`](src/app/%28feature%29/blogs)

#### 1.3.2 Blog Listing

Route: `/blogs`

- Header with SDG filters:
    - [`BlogHeader`](src/components/blogs/blog-header.tsx): “Blogs” heading, description, SDG badges (`SDG 1–17`) mapped from [`SDGs`](src/configs/sdgs.ts)
- Blog cards:
    - [`BlogCard`](src/components/blogs/blog-card.tsx)
        - Uses [`Card`](src/components/ui/card.tsx) and [`Badge`](src/components/ui/badge.tsx)
        - Displays cover image, SDG title, description, last edited time (formatted by [`timeFormatter`](src/libs/utils.ts))

Filtering behavior:

- Clicking SDG badges on the blog list or hero slider toggles `?tag=<id>` query for simple filtering.

#### 1.3.3 Blog Details

Route: `/blogs/[slug]` → [`BlogDetailsPage`](src/app/%28feature%29/blogs/%5Bslug%5D/page.tsx)

Key behaviors:

- **Static generation** of blog detail pages:
    - [`generateStaticParams`](src/app/%28feature%29/blogs/%5Bslug%5D/page.tsx) uses [`getCachedLatestPosts`](src/libs/cache.ts) and [`mapBlogToCard`](src/libs/notion-helper.ts)
- **SEO metadata** per post:
    - [`generateMetadata`](src/app/%28feature%29/blogs/%5Bslug%5D/page.tsx) uses [`getBlogBySlug`](src/libs/notion.ts)
- **UI structure**:
    - Optional cover image (full-width, border bottom)
    - Breadcrumb: Home → Blogs → Current post
    - Left “In this post” table of contents (anchors to overview and main content sections)
    - SDG badge linking back to `/blogs?tag=<id>`
    - Meta information:
        - Last updated date via [`timeFormatter`](src/libs/utils.ts)
        - Potential future fields: author, reading time, etc.
    - Markdown content:
        - HTML injected with `dangerouslySetInnerHTML` from [`convertMarkdownToHTML`](src/libs/markdown-converter.ts)
        - Styled via `.markdown-content` and `prose` classes in [`globals.css`](src/app/globals.css)

---

### 1.4 About Us

Route: `/abouts` → [`AboutUsPage`](src/app/%28feature%29/abouts/page.tsx)

Sections:

- **Hero section** (project intro, mission, hero image):
    - [`HeroAboutSection`](src/components/abouts/hero-section.tsx)
- **Team members grid**:
    - Data: [`TEAM_MEMBERS`](src/configs/members.ts)
    - Social platforms: [`SOCIALS`](src/configs/socials.ts)
    - UI: [`TeamMembersSection`](src/components/abouts/team-member.tsx)
- **Mission statement / CTA**:
    - [`OurMissionSection`](src/components/abouts/our-mission.tsx)

---

### 1.5 Flipbook

Route: `/flipbook` → [`FlipbookPage`](src/app/%28feature%29/flipbook/page.tsx)

- Simple full-height `<iframe>` embedding an external flipbook (Heyzine)
- Animations via Tailwind + `tw-animate-css`

---

### 1.6 Navigation, Layout & Shared UI

- **Global layout**: [`RootLayout`](src/app/layout.tsx)
    - Fonts: Geist Sans, Geist Mono, Montserrat (via `next/font`)
    - Dark/light theme management via `next-themes`
    - Sticky header: [`StickyHeader`](src/layouts/sticky-header.tsx)

- **Header & navigation**:
    - Main header: [`Header`](src/layouts/Header.tsx)
    - Desktop navigation:
        - [`Navbar`](src/components/header/navbar.tsx) with [`NavigationMenu`](src/components/ui/navigation-menu.tsx)
    - Mobile navigation:
        - [`Sheet`](src/components/ui/sheet.tsx) + [`Accordion`](src/components/ui/accordion.tsx)
    - Action buttons (e.g. CTA area): `ActionButtions` in [`Navbar`](src/components/header/navbar.tsx)

- **Footer**:
    - [`Footer`](src/layouts/Footer.tsx)
        - Brand block + logo
        - Link groups (About, Programs, Resources, Legal)
        - Email subscription field using [`Input`](src/components/ui/input.tsx) and [`Button`](src/components/ui/button.tsx)
        - Social links driven by [`SOCIALS`](src/configs/socials.ts)
        - Copyright with dynamic year

- **Loading & error states**:
    - Global loading skeleton: [`LoadingPage`](src/app/loading.tsx)
    - 404 page: [`MovieNotFound`](src/app/not-found.tsx)

---

## 2. Tech Stack

- **Framework**: Next.js (App Router, Server Components)
- **Language**: TypeScript
- **Styling**:
    - Tailwind CSS v4 (new `@import "tailwindcss"` and `@theme` API) in [`globals.css`](src/app/globals.css)
    - `tailwindcss-animate` and `tw-animate-css` for animations
    - Custom design tokens and CSS variables for:
        - Light/dark modes
        - SDG color palette
        - Brand colors
- **UI primitives**:
    - Custom component library under [`src/components/ui`](src/components/ui)
        - [`Card`](src/components/ui/card.tsx), [`Button`](src/components/ui/button.tsx), [`Input`](src/components/ui/input.tsx), [`Badge`](src/components/ui/badge.tsx), [`Sheet`](src/components/ui/sheet.tsx), [`DropdownMenu`](src/components/ui/dropdown-menu.tsx), [`Accordion`](src/components/ui/accordion.tsx), [`Separator`](src/components/ui/separator.tsx), etc.
    - Icons: `lucide-react`, Font Awesome (for 404)
- **Animation & motion**:
    - `framer-motion` (scroll-based sticky header, micro-animations)
    - CSS animations via Tailwind and `tw-animate-css`
- **Content & data**:
    - Notion API via `@notionhq/client` and markdown converter
    - Centralized config in:
        - [`SDGs`](src/configs/sdgs.ts)
        - [`TEAM_MEMBERS`](src/configs/members.ts)
        - [`SOCIALS`](src/configs/socials.ts)
- **Theming**:
    - `next-themes` (class-based, `light` / `dark`)
    - Design tokens defined at `@theme` level in [`globals.css`](src/app/globals.css)
- **Tooling**:
    - ESLint with Next.js + TypeScript presets: [`eslint.config.mjs`](eslint.config.mjs)
    - Prettier: [.prettierrc](.prettierrc)
    - Next.js config: [next.config.ts](next.config.ts)
    - TypeScript config: [tsconfig.json](tsconfig.json)

---

## 3. Project Structure

High-level directories:

```bash
.
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Root layout, theme provider, sticky header
│   │   ├── page.tsx                  # Home page
│   │   ├── loading.tsx               # Global loading skeleton
│   │   ├── not-found.tsx             # 404 page
│   │   ├── (feature)/
│   │   │   ├── layout.tsx            # Shared layout (Header + Footer) for feature pages
│   │   │   ├── blogs/                # Blog list + blog detail routes
│   │   │   ├── sdgs/                 # SDGs overview page
│   │   │   └── abouts/               # About Us page
│   │   │   └── flipbook/             # Flipbook page
│   │   └── globals.css               # Tailwind, tokens, SDG utilities, markdown styles
│   │
│   ├── components/
│   │   ├── home/                     # HeroSection, SlideCard, SDGShowcase, StatsSection, LatestBlogs
│   │   ├── blogs/                    # BlogCard, BlogHeader
│   │   ├── sdgs/                     # SDGTitle, SDGList, SDGElement
│   │   ├── abouts/                   # HeroAboutSection, TeamMembersSection, OurMissionSection
│   │   ├── header/                   # Navbar, header actions
│   │   └── ui/                       # Reusable UI primitives
│   │
│   ├── layouts/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── sticky-header.tsx
│   │
│   ├── configs/
│   │   ├── sdgs.ts                   # SDG metadata and colors
│   │   ├── notion.ts                 # Notion token + database ID
│   │   ├── members.ts                # Team members
│   │   └── socials.ts                # Social channels
│   │
│   ├── libs/
│   │   ├── utils.ts                  # `cn`, `timeFormatter`
│   │   ├── notion.ts                 # Notion API helpers (getBlogBySlug, list posts, markdown)
│   │   ├── notion-helper.ts          # mapBlogToCard
│   │   └── cache.ts                  # Caching layer for latest posts
│   │
│   └── types/
│       └── blog.ts                   # Blog (Notion page) type
│
├── public/                           # Static assets (logo, SDG icons, team photos, etc.)
├── COLOR.md                          # Color system and SDG palette
├── STYLE.md                          # Typography and UI style guidelines
├── TODO.txt                          # Roadmap / pending tasks
├── next.config.ts
├── eslint.config.mjs
├── tsconfig.json
└── package.json
```

---

## 4. Design System

The visual system is documented in:

- [STYLE.md](STYLE.md) – typography roles and usage
    - Montserrat for headings and CTAs
    - Geist Sans for body text
    - Geist Mono for metadata (`dates`, `tags`)
- [COLOR.md](COLOR.md) – brand palette, background/foreground system, and official UN SDG colors

Implementation details:

- CSS variables and tokens defined in [`globals.css`](src/app/globals.css) under `@theme`
- SDG-specific background utilities (`.bg-sdg-1` … `.bg-sdg-17`) are defined in the `@layer utilities` section of [`globals.css`](src/app/globals.css) and used across:
    - [`SlideCard`](src/components/home/slide-card.tsx)
    - [`BlogHeader`](src/components/blogs/blog-header.tsx)
    - [`SDGElement`](src/components/sdgs/sdg-element.tsx)
    - Other SDG badges and CTA components

The color usage follows a 60–30–10 rule (base, primary, accent) as described in [COLOR.md](COLOR.md).

---

## 5. Environment Variables

Create a `.env` file at the project root:

```bash
NOTION_TOKEN=your_notion_integration_token
NOTION_BLOGS_DATA_SOURCES_ID=your_notion_database_id
```

Explanation:

| Variable                       | Required | Description                                                                |
| ------------------------------ | -------- | -------------------------------------------------------------------------- |
| `NOTION_TOKEN`                 | Yes      | Notion integration token (create in Notion’s “My Integrations” dashboard). |
| `NOTION_BLOGS_DATA_SOURCES_ID` | Yes      | Notion database ID used as the blog data source.                           |

These variables are consumed by [`notionToken` and `blogDataSourceId`](src/configs/notion.ts).

---

## 6. Getting Started (Development)

### 6.1 Prerequisites

- Node.js ≥ 18 (recommended: ≥ 20)
- npm, pnpm, yarn, or bun

### 6.2 Install Dependencies

```bash
# using npm
npm install

# or yarn
yarn

# or pnpm
pnpm install
```

### 6.3 Configure Environment

- Create `.env` with the variables described above.
- Ensure your Notion integration has access to the specified database.

### 6.4 Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

The app will be available at: <http://localhost:3000>

---

## 7. Scripts

Common scripts defined in [package.json](package.json):

```bash
# Start dev server
npm run dev

# Type-safe production build
npm run build

# Run production server (after build)
npm start

# Lint source files
npm run lint
```

ESLint configuration is in [eslint.config.mjs](eslint.config.mjs), combining:

- `eslint-config-next/core-web-vitals`
- `eslint-config-next/typescript`
- Custom rules (e.g. ignoring `indent` to delegate formatting to Prettier)

Prettier configuration is in [.prettierrc](.prettierrc).

---

## 8. Deployment

This project is optimized for deployment on **Vercel**.

### 8.1 Build

```bash
npm run build
```

Then:

```bash
npm start
```

### 8.2 Vercel Configuration

- Use the default Next.js build settings.
- Configure the following environment variables in the Vercel dashboard:
    - `NOTION_TOKEN`
    - `NOTION_BLOGS_DATA_SOURCES_ID`

Image handling is configured in [next.config.ts](next.config.ts):

- Allows remote images from:
    - Any HTTPS host
    - Cloudinary (`res.cloudinary.com`)
    - Notion (`www.notion.so`)
- Enables SVGs with `dangerouslyAllowSVG`
- Adds a strict `contentSecurityPolicy` for image responses

---

## 9. Quality & Conventions

- **Components**:
    - Prefer composition-based UI via primitives in [`src/components/ui`](src/components/ui)
    - Use [`cn`](src/libs/utils.ts) to merge Tailwind class names
- **Styling**:
    - Do not add global CSS files; use Tailwind utilities and tokens in [`globals.css`](src/app/globals.css)
    - Follow typography and color roles from [STYLE.md](STYLE.md) and [COLOR.md](COLOR.md)
- **Dates & formatting**:
    - Use [`timeFormatter`](src/libs/utils.ts) (powered by `date-fns` with `vi` locale by default)

---

## 10. Roadmap

High-level ideas and tasks are tracked in [TODO.txt](TODO.txt). Examples of future extensions:

- Individual detail pages per SDG (`/sdgs/1` … `/sdgs/17`)
- Dedicated pages for:
    - Projects (`/projects`)
    - Volunteer (`/volunteer`)
    - Training (`/training`)
    - News/Reports (`/news`, `/reports`)
- Blog search, pagination and advanced filtering
- Localization (EN / VI) using Next.js i18n features

---

## 11. License

This project is licensed under the **MIT License**.  
See [LICENSE](LICENSE) for details.
