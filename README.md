# Next.js 16 Template

A template project for Next.js 16 + React 19

## Tech Stack

| Category           | Technology                                |
| ------------------ | ----------------------------------------- |
| Framework          | Next.js 16, React 19                      |
| Language           | TypeScript 5.9                            |
| Styling            | Tailwind CSS 4                            |
| Form               | React Hook Form, Zod                      |
| Testing            | Vitest, Testing Library, Playwright (VRT) |
| Storybook          | Storybook 10                              |
| Linter / Formatter | Biome, Prettier                           |
| Git Hooks          | Lefthook, Commitlint                      |
| Package Manager    | pnpm 10                                   |

## Installation

```bash
mise install
pnpm install
```

## Commands

### Development

| Command              | Description                               |
| -------------------- | ----------------------------------------- |
| `pnpm dev`           | Start development server (Turbopack)      |
| `pnpm build`         | Build for production                      |
| `pnpm build:analyze` | Build for production with bundle analysis |
| `pnpm start`         | Start production server                   |

### Storybook

| Command                | Description                        |
| ---------------------- | ---------------------------------- |
| `pnpm storybook`       | Start Storybook development server |
| `pnpm storybook:build` | Build Storybook                    |

### Testing

| Command                | Description                 |
| ---------------------- | --------------------------- |
| `pnpm test`            | Run unit tests              |
| `pnpm test:vrt`        | Run visual regression tests |
| `pnpm test:vrt:update` | Update VRT snapshots        |
| `pnpm test:vrt:report` | Show VRT report             |

### Code Quality

| Command           | Description                             |
| ----------------- | --------------------------------------- |
| `pnpm typecheck`  | Type check                              |
| `pnpm lint`       | Run linter (Biome)                      |
| `pnpm lint:fix`   | Run linter with auto-fix                |
| `pnpm format`     | Check code formatting                   |
| `pnpm format:fix` | Format code automatically               |
| `pnpm check`      | Run Biome check and Prettier            |
| `pnpm check:fix`  | Run Biome check and Prettier with fixes |

### Code Generation

| Command         | Description               |
| --------------- | ------------------------- |
| `pnpm generate` | Generate component (plop) |

## Visual Regression Testing with Playwright and Storybook

### Setup

Start the Playwright container before running tests:

```bash
docker compose up -d
```

### Running VRT

```bash
pnpm test:vrt              # Run VRT
pnpm test:vrt:update       # Update VRT snapshots
pnpm test:vrt:report       # Show VRT report (localhost:9001)
```

### Advanced Options

Specify snapshot save path:

```bash
SNAPSHOT_PATH=/main/add-button pnpm test:vrt        # Run with custom snapshot path
SNAPSHOT_PATH=/main/add-button pnpm test:vrt:update # Update with custom snapshot path
```
