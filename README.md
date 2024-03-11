# Starknet React ABI Form

The Starknet React ABI Form package is now available for use. To speed up the development of your dapp on Starknet, this package makes it easier to render forms via ABI and includes built-in input validations.

## Usage in Your Dapp

1. **Install Package**: 
  ```shell
    npm install starknet-abi-forms
  ```

2. **Import and Use ABIForm in Your Dapp**:
- Sample usage can be found [here](https://github.com/NethermindEth/starknet-abi-form/tree/dev/example/react-app/starknet-abi-form-driver/src/App.tsx).

3. **Import Form Styles**:
- Import the styles:
  ```javascript
  import "starknet-abi-forms/index.css";
  ```
- Override the CSS rules in your own CSS file to alter the styling.

4. **Check Out Sample React Project**:
- Explore a sample React project [here](https://github.com/NethermindEth/starknet-abi-form/tree/dev/example/react-app/starknet-abi-form-driver/).

## Using Custom CSS

Tailor the form styles to your personal preferences. Find out more here about utilizing customized CSS [here](https://github.com/NethermindEth/starknet-abi-form/tree/dev/custom_css.md).

## Building Locally

To build and run the package locally:

1. **Install Dependencies**:
  ```shell
    pnpm install
  ```

2. **Run in Development Mode**:
  ```shell
    pnpm dev
  ```

This will launch Storybook for development.

3. **Publish to Local PNPM Store**:
  ```shell
    yalc publish
  ```


## Roadmap

Here are the upcoming features that are on our roadmap:

- Support for enums in function params
- Support for Cairo v1, v0

Watch this space for updates! Please contact us with any queries or recommendations. Happy coding!
