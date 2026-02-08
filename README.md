# M-Config Configuration Manager

<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://gbhackers.com/-confirms-gradual-restart-of-operations/" />
</div>

A modern Next.js-based web application for managing configuration patterns, attributes, and system settings for AB manufacturing systems.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Docker (optional, for containerized deployment)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd m-config-configuration-manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set environment variables** (if needed)
   ```bash
   # Copy and configure environment file
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Local: http://localhost:3000
   - Network: Available on your network interfaces

## 🐳 Docker Deployment

### Production Build with Docker

1. **Build and run with Docker Compose**
   ```bash
   # Build and start production container
   docker-compose up --build

   # Or run in background
   docker-compose up -d --build
   ```

2. **Access the application**
   - Production: http://localhost:3000

### Development with Docker

1. **Start development environment**
   ```bash
   # Start with development profile
   docker-compose --profile dev up --build

   # Or run in background
   docker-compose --profile dev up -d --build
   ```

2. **Access development server**
   - Development: http://localhost:3001

### Manual Docker Commands

```bash
# Build production image
docker build -t m-config-app .

# Run production container
docker run -p 3000:80 m-config-app

# Build development image
docker build -f Dockerfile.dev -t m-config-dev .

# Run development container
docker run -p 3001:3000 -v $(pwd):/app m-config-dev
```

## 📋 Available Scripts

- `npm run dev` - Start Next.js development server with hot reload
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🏗️ Project Structure

```
m-config-configuration-manager/
├── app/                         # Next.js App Router
│   ├── layout.tsx              # Root layout component
│   ├── page.tsx                # Home page component
│   └── globals.css             # Global styles
├── components/                 # React components
│   ├── Header.tsx             # Top navigation & user controls
│   ├── SubHeader.tsx          # Tab navigation & breadcrumbs
│   ├── FilterBar.tsx          # Search & filter controls
│   └── PatternTable.tsx       # Data table with CRUD operations
├── lib/                        # Utility functions and constants
│   └── constants.ts           # Application constants & mock data
├── types.ts                   # TypeScript type definitions
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Dependencies and scripts
├── Dockerfile                 # Production container
├── Dockerfile.dev            # Development container
├── docker-compose.yml        # Docker orchestration
├── .dockerignore             # Docker build exclusions
├── DOCUMENTATION.md          # Comprehensive documentation
└── README.md                 # This file
```

## ✨ Features

- **🎨 Dark/Light Mode**: Automatic theme switching with persistence
- **🔍 Advanced Search**: Global search with recent searches
- **👤 User Management**: Profile dropdown with user options
- **📊 Data Management**: CRUD operations for configuration patterns
- **🔧 Filtering**: Real-time search and type-based filtering
- **📱 Responsive Design**: Mobile-first responsive layout
- **⚡ Hot Reload**: Fast development with Next.js
- **🐳 Container Ready**: Docker support for easy deployment

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Container**: Docker & Docker Compose
- **Development**: Hot Module Replacement

## 📚 Documentation

For detailed information about the codebase, architecture, and implementation:

- **[📖 Full Documentation](DOCUMENTATION.md)** - Comprehensive code documentation
- **Component Architecture** - Modular React components
- **State Management** - Local state with React hooks
- **Theme System** - Dark/light mode implementation
- **Docker Setup** - Containerization guide

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software for ABC.

## 📞 Support

For support and questions:
- **Developer**: Ayush Sahu
- **Documentation**: See [DOCUMENTATION.md](DOCUMENTATION.md)
- **Issues**: Create an issue in the repository

---

*Built with ❤️ for ABC manufacturing systems*</content>
<parameter name="oldString"><div align="center">
<img width="1200" height="475" alt="GHBanner" src=https://gbhackers.com/-confirms-gradual-restart-of-operations/ />
</div>



## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
