# reactjs-ethereum-starter

My iteration of [Austin Griffith's scaffold-eth](https://github.com/austintgriffith/scaffold-eth).
Inspired by [Huntaro San's starter](https://github.com/ChangoMan/nextjs-ethereum-starter)

- [Typescript](https://www.typescriptlang.org/)
- [Hardhat](https://hardhat.org/)
- [TypeChain](https://github.com/ethereum-ts/TypeChain)
- [Ethers.js](https://docs.ethers.io/v5/)
- [wagmi](https://wagmi.sh/)
- [Rainbowkit](https://www.rainbowkit.com/docs/installation)
- [TailwindCss](https://tailwindcss.com/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
- Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)

<!-- 👀 [View the Live Demo](https://nextjs-ethereum-starter.vercel.app/) -->

## Getting Started

This project uses npm Workspaces, so you'll need npm

```bash
git clone https://github.com/shadrach-tayo/reactjs-ethereum-starter.git
cd reactjs-ethereum-starter

npm install

# Start up the Hardhat Network
npm chain
```

Here we just install the npm project's dependencies, and by running `npm chain` we spin up an instance of Hardhat Network that you can connect to using MetaMask. In a different terminal in the same directory, run:

```bash
npm deploy
```

This will deploy the contract to Hardhat Network. After this completes run:

```bash
npm dev
```

This will start up the Next.js development server and your site will be available at http://localhost:3000/

To interact with the local contract, be sure to switch your MetaMask Network to `Localhost 8545`
