## Menova AI

Menova AI is an innovative AI prompt marketplace built on the Polygon Blockchain. Drawing inspiration from platforms like Promptbase and PromptHero, Menova AI takes a step further by allowing users to not only generate images using AI models but also convert these images into NFTs.

### Features

- AI-Powered Image Generation: Utilize cutting-edge AI models like Stable Diffusion and DALL·E to transform text prompts into captivating images.

- NFT Creation: Once you're satisfied with the generated image, seamlessly convert it into an NFT. Add essential metadata such as the name, description, and the original prompt used for image generation. You can also specify other parameters like the maximum supply and price of the NFT.

- Tokengated Prompts: In a unique twist, the prompts used for generating images are tokengated. This means only users who purchase the NFT can access the original prompt. This allows them to generate secondary images using the exclusive prompt they've acquired.

- Smart Contract Integration: While the UI integration is still in progress, the underlying smart contract for the marketplace has been successfully built and deployed. The demo version allows users to buy NFTs directly from the NFT smart contract.

- OpenSea API Integration: Menova AI leverages the OpenSea API to fetch all NFT data from the Polygon Network. This integration also facilitates the tokengating of prompts.

## Smart Contract Address

- MenovaV3:
- Menova Prompt Marketplace:

## Tech Stack

| Component                      | Technology/Service                                                                                                     | Description                                                                                                                                                                                        |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Image Generation**           | [Stable Diffusion](https://stability.ai/stablediffusion) - "stable-diffusion-xl-beta-v2-2-2" release from Stability AI | Utilized for generating high-quality images based on user-defined prompts.                                                                                                                         |
| **NFT Metadata Storage**       | [NFT.storage](https://nft.storage/)                                                                                    | Employs IPFS to ensure decentralized and persistent storage of prompt NFT metadata.                                                                                                                |
| **Smart Contract Development** | [Solidity](https://soliditylang.org/)                                                                                  | Used to craft the ERC1155 Smart Contract that facilitates AI prompt to NFT conversion and underpins the marketplace functionalities.                                                               |
|                                | ERC1155 Marketplace                                                                                                    | The smart contract for the marketplace has been built and deployed, but is yet to be implemented in the UI. For the demo, users can create and purchase NFTs directly from the NFT Smart contract. |
| **NFT Metadata Retrieval**     | [OpenSea API](https://docs.opensea.io/reference/api-overview)                                                          | Integrated to fetch comprehensive NFT metadata from the Polygon blockchain.                                                                                                                 |
| **Blockchain Interaction**     | [Ethers.js](https://docs.ethers.io/)                                                                                   | Facilitates seamless interaction with smart contracts on the Ethereum blockchain.                                                                                                                  |
| **Authentication**             | [RainbowKit](https://www.rainbowkit.com/docs/introduction) & [WAGMI](https://wagmi.sh/)                                | Integrated to provide a streamlined and secure sign-in experience.                                                                                                                                 |

## Screenshots

![Home](https://github.com/0xTemplar/Menova-AI/assets/124390899/cdf60494-f226-403c-9b1b-f65ecfd61099)

![explore](https://github.com/0xTemplar/Menova-AI/assets/124390899/a6e1f4a9-474d-4ed1-acab-c1edd1a927dc)

![modal](https://github.com/0xTemplar/Menova-AI/assets/124390899/70588905-eab4-48cc-ac30-40a8fd46bd7b)

![create page](https://github.com/0xTemplar/Menova-AI/assets/124390899/17ab0f48-643f-4f18-b08b-ee69b7e5f68d)

![detail](https://github.com/0xTemplar/Menova-AI/assets/124390899/21e52d06-38a5-49b1-acfa-9389a0340f91)

## Getting Started

### Clone the repository

`git clone https://github.com/0xTemplar/Menova-AI.git`

### Navigate to the project directory

`cd Menova-AI`

### Install dependencies

`npm install`

# Start the application

`npm run dev`
