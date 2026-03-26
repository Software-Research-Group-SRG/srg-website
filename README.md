# SRG Website

A modern web application for the SRG organization, built with React, Vite, Tailwind CSS, and Docker. This project provides a scalable, maintainable, and fast frontend for organizational needs.

## Team

| Role                  | Name          |
| --------------------- | ------------- |
| Project Lead          | Name          |
| UI/UX Designer        | Name          |
| Frontend Developer    | Name          |
| Frontend Developer    | Name          |

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/) (install globally with `npm install -g pnpm`)
- [Docker](https://www.docker.com/) (optional, for containerized development)

### Installation

```bash
pnpm install
```

### Development

Start the development server:

```bash
pnpm dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

## Docker Usage

You can run the app in a Docker container for local development:

```bash
docker compose up --build -d
```

- Access the app at [http://localhost:5173](http://localhost:5173)
- Stop containers: `docker compose down`
- Rebuild after dependency changes: `docker compose up --build -d`

## Project Structure

```
├── public/              # Static assets
├── src/                 # Source code
│   ├── assets/          # Images and other assets
│   ├── components/      # Reusable components
│   ├── constants/       # Global constants
│   ├── data/            # Static data (JSON)
│   ├── hooks/           # Custom React hooks
│   ├── layout/          # Layout components
│   ├── pages/           # Page components
│   ├── routes/          # App routing
│   ├── sections/        # Page sections
│   ├── ui/              # UI primitives
│   └── utils/           # Utility functions
├── Dockerfile           # Docker build instructions
├── docker-compose.yml   # Docker Compose config
├── package.json         # Project metadata and scripts
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation
```

## License

This project is licensed under the MIT License.