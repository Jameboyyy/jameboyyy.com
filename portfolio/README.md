# React + Vite

## Persistent terminal blog editing

The `nano` terminal command saves plain-text posts to the existing Sanity
`production` dataset through the managed Azure Static Web Apps API in `api/`.
Both the Static Web Apps route and the API handler require the
`portfolio_admin` role. The Sanity write token is only read by the API and must
never use a `VITE_` prefix or be committed to the repository.

Before deploying, create a least-privilege Sanity robot token with permission
to read and write posts, then add it to the Static Web App's application
settings as:

```text
SANITY_API_WRITE_TOKEN=<token>
```

From `~/blogs`, use `nano post-name.md`, `nano category/post-name.md`, or
`nano category/subcategory/post-name.md`. You can also navigate into a blog
folder and edit relative to it, such as `cd azure` followed by
`nano post-name.md`. Filenames must be lowercase and URL-safe. Existing posts
containing images, links, or other rich Portable Text marks are intentionally
rejected by the terminal editor to avoid destructive conversion; edit those
posts in Sanity Studio.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
