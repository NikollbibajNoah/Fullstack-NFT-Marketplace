# NFT Marketplace

> **Note:** This project is currently under active development.

---

## Overview

This repository contains the full project (frontend, backend, contracts WIP and database) for an NFT Marketplace. The Smart contract integrations are not yet fully available. The current implementation focuses on the user interface and user experience for browsing, listing, and viewing NFTs.

## Status

- **Frontend:** In progress and available for preview.
- **Backend:** Basic resolver for fetching mock data.
- **Smart Contracts:** Basic smart contracts (nowhere using for now).

## Getting Started

Please note that core marketplace functionality (such as minting, buying, or selling NFTs) is not operational at this stage.

---

## Roadmap

- Complete frontend features and UI/UX improvements
- Integrate backend services
- Connect to blockchain smart contracts

---

# Architecture

```
NFT-Marketplace/
├── frontend-nft-marketplace/          # Frontend Application
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   ├── cards/
│   │   │   │   ├── layout/
│   │   │   │   ├── sections/
│   │   │   │   ├── shared/
│   │   │   │   └── ui/
│   │   │   ├── page.tsx
│   │   │   └── layout.tsx
│   │   ├── graphql/
│   │   │   ├── queries/
│   │   │   ├── mutations/
│   │   │   └── ApolloClient.ts
│   │   └── lib/
│   ├── public/
│   └── package.json
│
├── backend-nft-marketplace/           # Backend Application
│   ├── src/main/java/
│   │   └── com/marketplace/
│   │       ├── controller/
│   │       ├── service/
│   │       ├── repository/
│   │       └── model/
│   ├── src/main/resources/
│   │   └── graphql/
│   │       └── schema.graphqls
│   └── pom.xml
│
├── contracts/                         # Smart Contracts (WIP)
│   ├── contracts/
│   │   ├── NFTMarketplace.sol
│   │   └── NFTToken.sol
│   ├── scripts/
│   └── hardhat.config.js
│
└── README.md
```

---

# Frontend
The frontend of this project is built using the following technologies:

- **Next.js** – React framework for server-side rendering and routing
- **TypeScript** – Strongly typed JavaScript for improved developer experience
- **Tailwind CSS** – Utility-first CSS framework for rapid UI development
- **Hero UI** – Unstyled, accessible UI components

These tools provide a modern, scalable, and maintainable foundation for building the NFT Marketplace user interface.

---

# Backend
The backend is designed to provide data and business logic for the marketplace. It currently uses the following technologies:

- **Spring Boot** - A Java-based framework for building robust and scalable backend services
- **GraphQL** – Flexible API query language for efficient data fetching
- **Apollo Server** – GraphQL server implementation for Node.js
- **Mock Data** – Used for development and testing before full integration

Future enhancements will include database integration and smart contract connectivity.

---