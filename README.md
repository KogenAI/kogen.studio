# Kogen Studio identity website

Source for the public identity website at https://kogen.studio. Studio is a product-knowledge project; no Studio application is implemented. Its relationship with the Kogen feature workflow is described on the site.

## Start here

- [Homepage and project context](src/pages/index.astro).
- [Shared page metadata and layout](src/layouts/Page.astro).
- [Public site facts](agent-site.json); its organization record follows [Optimum’s canonical organization data](</Users/almirsarajcic/Library/Mobile Documents/com~apple~CloudDocs/Areas/Optimum/branding/optimum-brand-assets/organization.json>).
- [Markdown generation](scripts/build-agent-content.py) and [format negotiation](functions/_middleware.js).
- [Existing identity assets](public/).

## Develop and publish

Use Node 22.12+ and Python 3. Run npm ci, npm run dev and npm run build. Astro writes dist/; the build derives Markdown and discovery files from its HTML output. The Pages middleware negotiates Accept: text/markdown, sets Vary: Accept and preserves 404 status. Cloudflare Pages is the production host; pushes to GitHub main deploy to the existing kogen-studio project. Keep source, dependencies and build output outside iCloud.

Follow the [maintained DevOps workflow](</Users/almirsarajcic/Library/Mobile Documents/com~apple~CloudDocs/Areas/DevOps/workflows/agent-readable-websites.md>) for the shared readability checks and publication procedure.

## Folder map

[src/](src/) owns pages, components and layouts; [public/](public/) owns static assets; [functions/](functions/) owns format negotiation; [scripts/](scripts/) owns build generation. dist/ is generated and not committed.
