This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# react-nextjs-profile

[![Greenkeeper badge](https://badges.greenkeeper.io/mCodex/react-nextjs-profile.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/mCodex/react-nextjs-profile.svg?branch=master)](https://travis-ci.org/mCodex/react-nextjs-profile)

A template for user profiles, useful for a personal landing page. Built on React and NextJS.

You can simply fork this repo and edit the `data.js` file with your own info, then build and deploy the project to your favorite provider (See the live demo on Heroku [here](http://mcodex.herokuapp.com/)).

## Features

- Out-of-the-box integration with Google Analytics, you just have to set the `gaTrackingId` property in `data.js`
- Ready for continuous integration with Travis CI, just enable your forked repo in your Travis account
- I18n via [react-i18next](https://github.com/i18next/react-i18next)

## Contributing

We encourage you to contribute by forking the repository, making your changes, committing and creating a pull request. You can also create issues with questions or bug reports.

We care about code style, so there is a pre-commit hook that runs `eslint`. We also have test suites you can run with `yarn test`.
