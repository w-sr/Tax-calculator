# Tax calculator

Simple federal tax calculator

## Workflow

- Input tax year
- Input total income
- Calculate total taxes, tax per band, effective rate

## Tech

- React, Typescript
- Redux DevToolkit, Redux Saga (state mamangement)
- React router (routing)
- React Hook Form (form submittion)
- Storybook (component testing)
- Styled-components (styling)
- Yup (schema)
- Axios (API interface)
- Jest (unit testing)
- Playwright (automated testing)

## Folder structure

- components (atomic design folder structure)
- i18n (internationalization)
- models
- pages
- routes
- services (axios interface)
- stores (action, reducer, saga)
- styles
- utils (helper functions)

## Scripts

### Running project

Update .env.example to .env

Open terminal, and run

```sh
npm i
npm run start
```

After running, you can access to http://localhost:3000

### Running unit tests

```sh
npm run test
```

### Running e2e tests

```sh
npx playwright install
npm run test:e2e
```

### Running Storybook

```sh
npm run storybook
```
