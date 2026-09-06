# BEAUTY TEMPLATE V1

This branch is the reusable master for premium beauty salon / studio websites.

## Source
- Master branch: `beauty-template-v1`
- Based on the approved AGAPOVA STUDIO build.
- Do not edit AGAPOVA production on `main` when starting a new client.

## New client workflow
1. Start from `beauty-template-v1`.
2. Create/use a separate repository for the client.
3. Replace client-specific content and assets.
4. Keep the approved responsive layout, animations, sliders, mobile menu, reviews carousel, works carousel, map block, loyalty/CTA block and footer unless the client brief requires otherwise.
5. Run visual + functional QA on mobile and desktop before delivery.

## Client-specific replacements
- Brand / logo / studio name
- SEO title + description
- Hero desktop image
- Hero mobile image
- Hero copy and primary CTA
- About copy + numbers
- Services + service images
- Team photo + team copy
- Works/gallery images
- Reviews
- Loyalty/offer CTA copy + CTA image
- Booking URL
- Phone
- Address
- Opening hours
- Social links / messengers
- Yandex Maps organization URL / widget
- Optional palette adjustments

## Asset naming convention
Keep these stable where possible so the layout can be reused without rewriting CSS:
- `assets/images/hero-founder-desktop.jpg`
- `assets/images/hero-founder-mobile.jpg`
- `assets/images/team.jpg`
- `assets/images/cta.jpg`
- `assets/images/work1.jpg`, `work2.jpg`, etc.
- review images: `assets/images/review-*.jpg`

## QA before showing client
- Desktop: representative laptop + wide desktop
- Mobile: 390px and 430px widths
- No clipped faces / heads in hero, team, works or reviews
- Consistent section heading alignment
- All CTA links work
- Booking link works
- Works and reviews arrows work
- Touch swipe works on mobile
- Mobile menu works
- Map shows the correct fixed organization/location
- No text overlaps faces
- No broken images
- No horizontal overflow
- Footer icons fit inside viewport
- No console errors
- Smooth section transitions

## Chat handoff convention
In a new Workspace chat, use this opening message:

`Новый сайт по BEAUTY TEMPLATE V1. Клиент: <название>. Репо: <owner/repo>. Используй master из landify-pro/agapova-studio ветка beauty-template-v1. Всё в GitHub меняй сам. Вот данные и фото клиента: ...`

This gives the next chat an unambiguous source template and expected workflow.
