# Karta Web Components

Collection of React MUI components with Karta branding

## Building

This project uses `@545490/karta-lch-utils` as a dependency which is a private package. Before running `npm install`, make sure to have an `.npmrc` at the root of the project path. Use the `.npmrc.example` as reference and replace `SECRET_GH_TOKEN` with your Github PAT that has access to read packages. Your `.npmrc` should look like the following below:

```
@545490:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=ghp_12345678901234567890
```

## Getting started

Before installing this package, add this to your `.npmrc` at the root of your project. If it doesn't exist, you can create one

```
@545490:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken={{your-github-personal-access-token}}
```

Change the token to your own PAT and then install via `npm` or `yarn`

```
npm i -S @545490/karta-web-components
yarn add @545490/karta-web-components
```

Start the storybook app with `yarn start`

## Usage

### Import components to your application

```
import { PrimaryButton } from '@545490/karta-web-components';

const MyApp = () => (
  <PrimaryButton onClick={() => alert('Clicked!')}>Clickity Click!</PrimaryButton>
);

```

## Releasing a new version

Version are tied to git tags. There are 2 ways to release at the moment. But before you create a release, make sure that the version in `package.json` is bumped higher.

### Manual

Create a new tag and push to origin

```
git tag -a v1.0.0
git push origin v1.0.0
```

Once you have a new version, go to the releases page on Github and create a new release (follow the "Via Github" after)

### Via Github

Go to https://github.com/545490/karta-web-components/releases and click on the "Draft New Release" button. You can select an existing tag or create a new one. Fill in the description/release notes and click publish. This will trigger the `ci-release` action and publish the package to Github Packages.
