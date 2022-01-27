/**
 * This package contains deployed contract addresses, ABIs, and Typechain types
 * for the Dark Forest game.
 *
 * ## Installation
 *
 * You can install this package using [`npm`](https://www.npmjs.com) or
 * [`yarn`](https://classic.yarnpkg.com/lang/en/) by running:
 *
 * ```bash
 * npm install --save @darkforest_eth/contracts
 * ```
 * ```bash
 * yarn add @darkforest_eth/contracts
 * ```
 *
 * When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)
 *
 * ```js
 * import * as contracts from 'http://cdn.skypack.dev/@darkforest_eth/contracts'
 * ```
 *
 * ## Typechain
 *
 * The Typechain types can be found in the `typechain` directory.
 *
 * ## ABIs
 *
 * The contract ABIs can be found in the `abis` directory.
 *
 * @packageDocumentation
 */

/**
 * The name of the network where these contracts are deployed.
 */
export const NETWORK = 'localhost';
/**
 * The id of the network where these contracts are deployed.
 */
export const NETWORK_ID = 31337;
/**
 * The block in which the DarkForestCore contract was deployed.
 */
export const START_BLOCK = 0;
/**
 * The address for the DarkForestUtils library.
 */
export const UTILS_LIBRARY_ADDRESS = '0x1aE9623899dDc2bB42217eF985a3d98E6E7623C1';
/**
 * The address for the DarkForestPlanet library.
 */
export const PLANET_LIBRARY_ADDRESS = '0x500cf53555c09948f4345594F9523E7B444cD67E';

/**
 * The address for the DarkForestSpecialWeapons library.
 */
export const SPECIALS_LIBRARY_ADDRESS = '0xc2EEd1AdAAe36B640f64c06FeF8Cd32F7473afAA';

/**
 * The address for the DarkForestArtifactUtils library.
 */
export const ARTIFACT_UTILS_LIBRARY_ADDRESS = '0x8950bab77f29E8f81e6F78AEA0a79bADD88Eeb13';
/**
 * The address for the Verifier library.
 */
export const VERIFIER_LIBRARY_ADDRESS = '0x9696B08d71d3cBE15Fea4Da48B34a3b6576cCA16';
/**
 * The address for the DarkForestInitialize library.
 */
export const INITIALIZE_LIBRARY_ADDRESS = '0xBa82512922EDF35F6Fba9E652D822C8D02949888';
/**
 * The address for the DarkForestLazyUpdate library.
 */
export const LAZY_UPDATE_LIBRARY_ADDRESS = '0x6c452936A27F5Afc41bCC9Dd49a5bdedBdfA9b7A';
/**
 * The address for the DarkForestCore contract.
 */
export const CORE_CONTRACT_ADDRESS = '0x8bFe976461F9D6a3A34be5025EAC343A5a2e124D';
/**
 * The address for the DarkForestTokens contract.
 */
export const TOKENS_CONTRACT_ADDRESS = '0x627a72bbE16416Ae722BA05876C5cB2dcb0Dc6BB';
/**
 * The address for the DarkForestGetters contract.
 */
export const GETTERS_CONTRACT_ADDRESS = '0x7B93F89fB7630d7a5b29019cfcDdcC4B7fd6e5D9';
/**
 * The address for the Whitelist contract.
 */
export const WHITELIST_CONTRACT_ADDRESS = '0x1d8d73c2b578dd2ac32c79753dD8Ff34ad4c2FbF';
