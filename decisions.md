# Decisions

A very brief description of the key decisions made during the project.

## Technology Choices

###  Guiding Principles
> Principles that guided the technology choices and approaches taken in this project (in order of importance)

1. **Consistency**: Maintain a consistent code style and structure to enable engineer onboarding and collaboration.
1. **Modularity**: Structure the codebase in a modular way to enhance maintainability and scalability
1. **Shift-left**: Catch issues early via tools and approaches that help the development process.
1. **Simplicity**: Keep the project as simple as possible to meet the requirements without unnecessary complexity.

### Tools Selected

- **BiomeJS**: Linting + Formating.
  - A relatively new tool gaining popularity, faster than ESLint + Prettier.
  - https://biomejs.dev/
- **Vite**: Build Tool + Dev Runner.
  - Fast, modern, and has excellent React + TypeScript support.
  - https://vitejs.dev/
- **Vitest**: Testing framework.
  - Lightweight and fast, and has 'browser' mode to enable integration testing without DOM simulation.
  - https://www.epicweb.dev/why-i-won-t-use-jsdom
- **Pnpm**: Package Manager.
  - Marginally less complex than yarn.
  - https://pnpm.io/
- **Pnpm Workspaces**: Monorepo management.
  - Encourages modularity for a more maintainable codebase.
  - https://pnpm.io/workspaces
- **Husky**: Git hooks.
  - To enforce linting and testing before commits.
  - https://typicode.github.io/husky/#/
- **Stylelint**: CSS Linting.
  - To maintain consistent styles and catch potential issues early.
  - https://stylelint.io/
- **Lint-staged**: Pre-commit linting.
  - To run linters only on staged files to ensure fixable linting/formatting errors are fixed before we commit.
  - https://github.com/lint-staged/lint-staged

### Tools _Not_ Selected

- **TanStack Query**:
  - Revisit when:
    - caching is more important.
    - multiple components need to share server state.
  - https://tanstack.com/query/latest
- **CSS Frameworks (e.g. Tailwind)**:
  - Not used to avoid unnecessary complexity and early abstractions
- **CSS build tools (e.g. PostCSS, SASS)**:
  - Modern CSS features are sufficient, even for very large projects.
- **Nx / Turborepo**:
  - Overhead not justified for a small project.
  - Pnpm workspaces sufficient for modularity.
  - Revisit when:
      - caching task output would speed up LTTC.
      - managing boilerplate (e.g. linting config) is painful.

## Approaches

**Minimal Initial Setup**

- Vite provides 1st class React + TypeScript support with minimal configuration.
- Kept the project simple and focused on the requirements.
- Can easily add React Router for routing or frameworks like Remix/Next.js for SSR when needed.

**Design System Components**

- Should be 'dumb' and contain zero business knowledge.
- Should work without the need for "wiring up" a global state or context.
- Should allow for labels and other text to be passed in as props. to support i18n in the future.
- Should use modern CSS features like CSS variables and Flexbox for layout.

**Minimal mocking in tests**

- Tests should test the component as it is used in the app.
- Avoid over-mocking which can lead to brittle tests that don't reflect real usage.
- Use integration tests where appropriate to test components together.

**Decouple Data Types from Component Types/Props**

- Define data types (e.g. `Currency`) separately from component props (e.g. `CurrencySelectorProps`).
- Allows for easier changes to data structures without affecting component interfaces.
- Promotes reusability of data types across different components.
- allows data to evolve independently from the UI components that consume it.

-**DDD (Domain-Driven Design) Approach**

- Structure the codebase around the domain model to promote a clear separation of concerns.
- features encapsulate cross-cutting concerns (i18n) and business knowledge (product catalog).
- the exported packages are to be treated as a public API for the feature.

## Future Considerations
- **State Management**: As the application grows, consider introducing a state management library (e.g. Zustand) to handle global state and reduce rerenders.
- **Routing**: If the application requires multiple views or pages, consider integrating React Router for client-side routing.
- **Server-Side Rendering (SSR)**: If SEO or initial load performance becomes a concern, consider migrating to a framework that supports SSR (e.g. Next.js).
- **Observability**: Introduce monitoring and analytics to track application performance, errors in production, and product performance.
- **Data validation**: Introduce runtime data validation (e.g. Zod) to ensure data integrity when fetching from external sources.


**high-level-design**

1. tbd
