# Plan: Whop-Powered Commit+ CTA Section

Add a new comparison-style CTA section to the homepage that fetches the public Commit+ product data from Whop and contrasts the free Discord preview with a paid Commit+ membership.

## Data Source

- Use the public `GET https://api.whop.com/api/v1/products/prod_dopzXjTA7UToz` endpoint (no auth required) to fetch live product metadata: title, headline, description, member count, review count, owner, company, and gallery image.
- Use the existing `getWhopReviews()` in `src/lib/whop.ts` to get the live number of published reviews.
- For live pricing/plans, the Whop plans endpoints require authentication. The implementation will expose a `getWhopProduct()` helper and gracefully fall back to a hard-coded price/comparison if the plans API is unavailable (no API key) or returns no usable data.

## Component

- Create `src/components/WhopCTA.tsx` — an async Server Component.
- Render a two-column comparison table/card set:
  - **Discord Grátis**: free, limited channels (general, introductions, announcements, help-seeking) with a "Experimenta" outline CTA.
  - **Commit+ (CommitPT)**: paid membership, full access to all features listed on Whop (live sessions, code reviews, project accountability, career channels, networking, resources), with a "Adere" primary CTA.
- Pull the headline, description, member count, and review count from the live Whop response for the Commit+ column.
- Display the product image as a visual anchor.
- Add JSON-LD `Product` structured data for the Commit+ subscription using the live Whop data.

## Placement & Integration

- Insert `<WhopCTA />` in `app/page.tsx` between `Features` and `Team`, or between `SocialProof` and `FAQ`, depending on final flow.
- Keep the existing `Features` and `Footer` CTAs for now, but update the new section to be the primary decision point.

## Verification

- `npm run typecheck` and `npm run build` must pass.
- Re-run Lighthouse on desktop and mobile to ensure the new section does not reintroduce accessibility or performance regressions.
- Confirm the public Whop API response is cached and the section renders without exposing secrets.
