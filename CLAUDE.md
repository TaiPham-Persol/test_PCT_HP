# Design System Rules - PERSOL Career Tech Studio Landing Page

## Overview

This document provides comprehensive rules for integrating Figma designs into the PERSOL Career Tech Studio landing page codebase using the Model Context Protocol. The project uses Nuxt.js 2 with Vue 2, Tailwind CSS, and SCSS for styling.

## 1. Token Definitions

### Color Tokens

**Location**: `assets/styles/_variables.scss` and `assets/styles/_variable.scss`

**CSS Custom Properties** (Primary source for Figma integration):

```scss
:root {
  /* Colors */
  --white: #ffffff;
  --gray00: #f8f8f7;
  --gray01: #ebebe8;
  --gray02: #bbbcbc;
  --gray04: #53565a;
  --black: #333333;
  --yellow: #ffb81c;
  --green: #00bfb3;

  /* Gradients */
  --linear: linear-gradient(
    97.74deg,
    rgba(255, 184, 28, 1) 0%,
    rgba(232, 209, 157, 1) 48.92473518848419%,
    rgba(26, 206, 195, 1) 100%
  );
  --style: radial-gradient(
    closest-side,
    rgba(255, 223, 101, 1) 0%,
    rgba(255, 184, 28, 1) 100%
  );

  /* Fonts */
  --roboto-font-family: Roboto, sans-serif;
  --notosan-font-family: Noto Sans, sans-serif;

  /* Effects */
  --drop-shadow-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.15);
}
```

**SCSS Variables** (Legacy - prefer CSS custom properties):

```scss
$white: #ffffff;
$persol-gray: #97999b;
$accent_color_primary: #ffb81a;
$accent_color_secondary: #1a76ff;
$text_color: #333333;
```

### Typography Tokens

**Fonts**: Google Fonts + Local fonts

- Roboto (300, 400, 500, 700)
- Noto Sans (400, 700)
- Montserrat (100-900, variable)
- Hind (400, 700)

**Font Loading**: `assets/styles/font.scss`

```scss
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Noto+Sans:wght@400;700&family=Montserrat:wght@100..900&family=Hind:wght@400;700&display=swap');
```

### Spacing & Layout Tokens

```scss
$max-width: 1140px;
$sp-max-width: 640px;
$header-height: 80px;
```

## 2. Component Library

### Component Architecture

- **Framework**: Vue 2 with Nuxt.js 2
- **Language**: TypeScript (`.vue` files with `<script lang="ts">`)
- **Pattern**: Atomic Design (Base components, feature components)
- **Styling**: Scoped SCSS with Tailwind utilities

### Base Components

Located in `components/` directory:

**BaseTypography.vue** - Typography component with design tokens:

```vue
<BaseTypography
  font="Roboto"
  size="size_16"
  weight="regular"
  tag="p"
  color="#333333"
>
  Content
</BaseTypography>
```

**BaseAccordion.vue** - Navigation accordion:

```vue
<BaseAccordion :items="menuItems" :allow-multiple="false" />
```

**ButtonPrimary.vue** - Primary CTA button with glassmorphism effect

### Component Patterns

- **Props Validation**: Strict prop validation with validators
- **TypeScript**: `defineComponent` with proper typing
- **Events**: Explicit emit declarations
- **Styling**: Scoped SCSS with BEM-like naming
- **Assets**: Dynamic imports using `require()` for images

## 3. Frameworks & Libraries

### Core Framework

- **Nuxt.js 2.15.8**: Static site generation
- **Vue 2.6.14**: Component framework
- **TypeScript**: Type checking and IntelliSense

### Styling Stack

- **Tailwind CSS 3.3.0**: Utility-first CSS framework
- **Sass/SCSS**: Preprocessing with variables and mixins
- **PostCSS**: Autoprefixer and Tailwind processing
- **RESS**: CSS reset library

### Build & Development

- **Webpack 4**: Bundling (via Nuxt)
- **ESLint + Prettier**: Code formatting and linting
- **Husky**: Git hooks for pre-commit checks

### Configuration Files

- `nuxt.config.js`: Main Nuxt configuration
- `tailwind.config.js`: Tailwind customization
- `tsconfig.json`: TypeScript configuration
- `postcss.config.js`: PostCSS plugins

## 4. Asset Management

### Directory Structure

```
assets/
├── fonts/           # Local font files (.ttf)
├── images/          # Static images and icons
│   ├── banners/     # Partner/sponsor logos
│   └── our-business/# Business-related images
├── styles/          # SCSS files and variables
└── videos/          # Video assets (.mp4)
```

### Asset Referencing

**In Templates**:

```vue
<!-- Static assets -->
<img src="@/assets/images/icon-plus.svg" alt="plus" />

<!-- Dynamic assets -->
<img :src="require(`@/assets/images/banners/${imageName}`)" />
```

**In Styles**:

```scss
@font-face {
  src: url('../fonts/Montserrat-VariableFont_wght.ttf') format('truetype');
}
```

### Asset Optimization

- **Static Generation**: Nuxt generates optimized static files
- **Image Formats**: WebP, PNG, SVG, JPG based on use case
- **Font Loading**: Google Fonts with local fallbacks

## 5. Icon System

### Icon Storage

**Location**: `assets/images/` (SVG icons)

- `icon-plus.svg`, `icon-arrow-r-white.svg`
- `icon-hamburger.svg`, `icon-close.svg`
- Brand icons: `persol_logo.svg`, `tech_studio_logo.svg`

### Icon Usage

```vue
<img
  src="@/assets/images/icon-plus.svg"
  alt="plus"
  class="w-6 h-6 transition-transform duration-200"
  :class="{ 'rotate-45': isOpen(index) }"
/>
```

### Icon Naming Convention

- `icon-{name}.svg` for UI icons
- `{brand}_{variant}.svg` for logos
- Color variants: `icon-arrow-r-white.svg`, `icon-arrow-s.svg`

## 6. Styling Approach

### CSS Methodology

**Hybrid Approach**:

1. **Tailwind Utilities**: Layout, spacing, responsive design
2. **Scoped SCSS**: Component-specific styles, design tokens
3. **CSS Custom Properties**: Design token variables

### Global Styles

**Entry Points** (`nuxt.config.js`):

```javascript
css: [
  'ress', // CSS reset
  '~/assets/styles/font.scss', // Font loading
  '~/assets/styles/_variables.scss', // Design tokens
  '~/assets/styles/tailwind.css', // Tailwind base
];
```

**Global SCSS Variables** (via `@nuxtjs/style-resources`):

```javascript
styleResources: {
  scss: ['~/assets/styles/_variable.scss'],
}
```

### Responsive Design

**Breakpoint Strategy**:

- Mobile-first approach with Tailwind
- Custom breakpoints in components
- SCSS media queries for complex responsive logic

### Component Styling Pattern

```vue
<style lang="scss" scoped>
// Design token usage
.banner-card {
  background-color: var(--white);
  box-shadow: var(--drop-shadow-box-shadow);
}

// Tailwind utilities
@apply flex items-center justify-center;

// Responsive design
@media (max-width: 768px) {
  .component {
    @apply flex-col;
  }
}
</style>
```

## 7. Project Structure

### Nuxt.js Structure

```
/
├── assets/           # Static assets
├── components/       # Vue components (auto-imported)
├── layouts/          # Page layouts
├── pages/            # File-based routing
├── plugins/          # Nuxt plugins
├── static/           # Static files (copied to dist)
├── store/            # Vuex store (if used)
└── types/            # TypeScript type definitions
```

### Component Organization

- **Base Components**: `Base*.vue` - reusable UI primitives
- **Feature Components**: Named after features (e.g., `HeaderDefault.vue`)
- **Page Components**: Located in `pages/` directory

### TypeScript Integration

**Type Definitions**: `types/index.ts`, `types/menu.ts`
**Component Types**: Interface definitions for props and data structures

### Build Output

- **Static Generation**: `nuxt generate` creates `docs/` folder
- **CNAME Configuration**: Auto-generated for GitHub Pages
- **Asset Optimization**: Images and fonts optimized automatically

## Figma Integration Guidelines

### 1. Token Extraction

When extracting design tokens from Figma:

1. **Colors**: Add to `assets/styles/_variables.scss` as CSS custom properties
2. **Typography**: Use existing font families, add new sizes to `BaseTypography.vue`
3. **Spacing**: Add to SCSS variables or use Tailwind spacing scale
4. **Effects**: Add shadows/gradients as CSS custom properties

### 2. Component Creation

1. **Base Components**: Create atomic design components in `components/`
2. **TypeScript**: Use `defineComponent` with proper prop types
3. **Styling**: Scoped SCSS with design tokens + Tailwind utilities
4. **Assets**: Place in appropriate `assets/` subdirectories

### 3. Asset Export

1. **Icons**: Export as SVG, place in `assets/images/`
2. **Images**: Use WebP for photos, PNG for graphics
3. **Naming**: Follow existing conventions (`kebab-case.svg`)

### 4. Responsive Implementation

1. **Mobile-First**: Use Tailwind responsive prefixes
2. **Breakpoints**: Match design system breakpoints
3. **Component Props**: Add responsive variants as needed

### 5. Code Generation

When using MCP tools for code generation:

- **Maintain TypeScript**: Generate proper Vue 2 + TypeScript code
- **Follow Patterns**: Match existing component structure
- **Use Tokens**: Reference CSS custom properties for design values
- **Scoped Styles**: Generate scoped SCSS with BEM-like classes

## Quality Gates

### Pre-commit Checks

- **ESLint**: `yarn lint:js` - Code quality
- **Prettier**: `yarn lint:css` - Code formatting
- **TypeScript**: Compiler checks enabled

### Build Verification

- **Static Generation**: `yarn generate` - Produces `docs/` folder
- **Asset Optimization**: Automatic image/font optimization
- **CNAME Generation**: Auto-creates GitHub Pages configuration

## Development Workflow

### Local Development

```bash
yarn dev          # Start development server
yarn build        # Production build
yarn generate     # Static site generation
yarn lint:fix     # Auto-fix linting issues
```

### Component Development

1. Create component in `components/` directory
2. Use TypeScript with `defineComponent`
3. Add scoped SCSS styles
4. Reference design tokens from `_variables.scss`
5. Test in pages before integration

This rules document should be updated whenever new patterns are established or Figma integrations introduce new conventions.</content>
