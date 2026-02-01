# M-Config Configuration Manager - Documentation

## 📋 Project Overview

**M-Config Configuration Manager** is a modern Next.js-based web application built with TypeScript and Tailwind CSS. It provides a comprehensive interface for managing configuration patterns, attributes, and system settings for Jaguar Land Rover (JLR) manufacturing systems.

**Version**: 0.0.0
**Technology Stack**:
- **Framework**: Next.js 14 with App Router
- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Development**: Hot Module Replacement (HMR)
- **Container**: Docker & Docker Compose

---

## 🏗️ Architecture & File Structure

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
├── .eslintrc.json            # ESLint configuration
├── next-env.d.ts             # Next.js TypeScript declarations
├── DOCUMENTATION.md          # This documentation
└── README.md                 # Project README
```

### **Configuration Files**
- **`next.config.js`**: Next.js configuration (environment variables, redirects, etc.)
- **`tailwind.config.js`**: Tailwind CSS configuration (content paths, theme extensions)
- **`postcss.config.js`**: PostCSS configuration for Tailwind processing
- **`tsconfig.json`**: TypeScript configuration optimized for Next.js
- **`.eslintrc.json`**: ESLint configuration with Next.js rules
- **`next-env.d.ts`**: TypeScript declarations for Next.js

---

## 🚀 Quick Start & Build Steps

### Prerequisites
- Node.js 18+ and npm
- Docker (optional, for containerized deployment)

### Dependencies Installation

#### **Core Dependencies**
```json
{
  "next": "^14.0.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "lucide-react": "^0.563.0"
}
```

#### **Development Dependencies**
```json
{
  "@types/node": "^22.14.0",
  "@types/react": "^18.2.0",
  "@types/react-dom": "^18.2.0",
  "typescript": "~5.8.2",
  "tailwindcss": "^3.4.0",
  "autoprefixer": "^10.4.0",
  "postcss": "^8.4.0",
  "eslint": "^8.0.0",
  "eslint-config-next": "^14.0.0"
}
```

#### **Installation Command**
```bash
# Install all dependencies
npm install

# Or install specific packages
npm install next@14 react@18 react-dom@18 lucide-react
npm install -D @types/node @types/react @types/react-dom typescript tailwindcss autoprefixer postcss eslint eslint-config-next
```

### Local Development Setup

1. **Clone and Install Dependencies**
   ```bash
   git clone <repository-url>
   cd m-config-configuration-manager
   npm install
   ```

2. **Environment Configuration** (if needed)
   ```bash
   # Copy environment template
   cp .env.example .env.local

   # Edit with your configuration
   nano .env.local
   ```

   **Environment Variables:**
   ```env
   # API Keys
   GEMINI_API_KEY=your_gemini_api_key_here
   API_KEY=your_api_key_here

   # Next.js Environment Variables
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   - Access at: http://localhost:3000
   - Hot reload enabled for development

### Production Build Steps

1. **Build for Production**
   ```bash
   npm run build
   ```

2. **Start Production Server**
   ```bash
   npm run start
   ```
   - Access at: http://localhost:3000
   - Optimized production build

### Docker Build Steps

#### Production Build with Docker
```bash
# Build and run production container
docker-compose up --build

# Or run in background
docker-compose up -d --build
```

#### Development with Docker
```bash
# Start development environment
docker-compose --profile dev up --build

# Or run in background
docker-compose --profile dev up -d --build
```

#### Manual Docker Commands
```bash
# Build production image
docker build -t m-config-app .

# Run production container
docker run -p 3000:3000 m-config-app

# Build development image
docker build -f Dockerfile.dev -t m-config-dev .

# Run development container
docker run -p 3001:3000 -v $(pwd):/app m-config-dev
```

### Available Scripts
- `npm run dev` - Start Next.js development server with hot reload on http://localhost:3000
- `npm run build` - Create optimized production build in `.next` folder
- `npm run start` - Start production server from built files
- `npm run lint` - Run ESLint to check code quality and fix issues

### **Script Details**

#### **Development (`npm run dev`)**
- Starts Next.js development server
- Enables hot module replacement (HMR)
- Automatic TypeScript compilation
- Runs on port 3000 by default
- Includes error overlay and fast refresh

#### **Build (`npm run build`)**
- Compiles TypeScript to JavaScript
- Runs ESLint for code quality checks
- Optimizes and minifies code
- Generates static assets
- Creates production-ready `.next` folder

#### **Start (`npm run start`)**
- Serves the production build
- Optimized for performance
- Includes compression and caching headers
- Runs on port 3000 by default

#### **Lint (`npm run lint`)**
- Runs ESLint with Next.js rules
- Checks for code quality issues
- Validates TypeScript types
- Can auto-fix some issues

### **Troubleshooting**

#### **Common Issues & Solutions**

**1. Port 3000 Already in Use**
```bash
# Kill process using port 3000
npx kill-port 3000

# Or run on different port
npm run dev -- -p 3001
```

**2. Build Errors**
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Check TypeScript errors
npx tsc --noEmit
```

**3. ESLint Errors**
```bash
# Auto-fix linting issues
npm run lint -- --fix

# Check specific file
npx eslint components/Header.tsx
```

**4. Docker Issues**
```bash
# Clean Docker containers
docker-compose down
docker system prune

# Rebuild without cache
docker-compose build --no-cache
```

**5. Environment Variables Not Loading**
```bash
# Ensure .env.local exists
ls -la .env*

# Restart development server
npm run dev
```

### **Deployment Options**

#### **Vercel Deployment (Recommended for Next.js)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production deployment
vercel --prod
```

#### **Docker Deployment**
```bash
# Production build
docker-compose up --build

# Development with hot reload
docker-compose --profile dev up --build
```

#### **Manual Server Deployment**
```bash
# Build and start
npm run build
npm run start
```

---

## 🔧 Core Components & Functionality

### 1. **app/layout.tsx** - Root Layout Component
**Purpose**: Next.js root layout providing global structure and styles

**Key Features**:
- **HTML Structure**: Provides `<html>` and `<body>` tags
- **Metadata**: SEO metadata and page titles
- **Global Styles**: Imports Tailwind CSS and custom styles
- **Font Loading**: System font stack configuration

### 2. **app/page.tsx** - Home Page Component
**Purpose**: Main application page with global state management

**Key Features**:
- **State Management**:
  - `activeTab`: Current active tab (Result Patterns, Attribute Groups, etc.)
  - `patternNameFilter`: Search filter for pattern names
  - `patternTypeFilter`: Type filter for patterns
  - `isDarkMode`: Theme toggle state
  - `activeNavItem`: Current navigation section

- **Theme Management**:
  - Automatic system preference detection
  - Local storage persistence
  - Dynamic class application to document root

- **Layout Structure**:
  ```tsx
  <div className="min-h-screen">
    <Header />           // Top navigation bar
    <main>
      <SubHeader />      // Tab navigation & breadcrumbs
      <Content />        // Dynamic content based on activeTab
    </main>
  </div>
  ```

### 3. **components/Header.tsx** - Top Navigation Bar
**Purpose**: Application header with branding, navigation, and user controls

**Components**:
- **Logo Section**: JLR branding with "M-Config" title
- **Main Navigation**: Equipment, Routes, Orders, Attributes, Personnel, Miscellaneous
- **User Controls**:
  - Search button (opens search modal)
  - Dark/Light mode toggle
  - Production status indicator (with blinking animation)
  - User dropdown menu

**Key Features**:
- **Navigation State**: Updates `activeNavItem` in page.tsx
- **Search Modal**: Full-screen search overlay with recent searches
- **User Menu**: Dropdown with profile options and sign out
- **Theme Toggle**: Switches between light/dark modes
- **Blinking Production Indicator**: Animated green dot showing live status

### 4. **components/SubHeader.tsx** - Tab Navigation & Breadcrumbs
**Purpose**: Secondary navigation with tabs and breadcrumb trail

**Features**:
- **Breadcrumb Navigation**: Shows "Home / [Active Section]"
- **Tab Navigation**: Result Patterns, Attribute Groups, Attributes, Switches, Import, Export, Test
- **Active State Management**: Visual feedback for current tab
- **Dark Mode Support**: Adapts colors for light/dark themes

### 5. **components/FilterBar.tsx** - Search & Filter Controls
**Purpose**: Input controls for filtering table data

**Components**:
- **Pattern Name Input**: Text search with "contains" logic
- **Pattern Type Dropdown**: Filter by Alphanumeric, Numeric, Boolean, Text
- **Search Button**: Triggers filtering (currently visual only)

**State Flow**:
```
FilterBar → App.tsx (filter states) → PatternTable (filtered data)
```

### 5. **PatternTable.tsx** - Data Table with CRUD Operations
**Purpose**: Main data display and manipulation interface

**Features**:
- **Data Display**: Tabular view of pattern configurations
- **Selection Management**: Checkbox selection for bulk operations
- **CRUD Operations**:
  - **Create**: Add new patterns with default values
  - **Read**: Display filtered/sorted data
  - **Update**: Edit selected pattern (single selection required)
  - **Delete**: Remove selected patterns (bulk delete supported)

- **Filtering**: Real-time filtering based on name and type
- **Sorting**: Column headers with sort indicators (UI only)
- **Pagination**: Footer showing total count (placeholder)

---

## 🎨 Styling & Theme System

### **Dark Mode Implementation**
- **Tailwind Configuration**: `darkMode: 'class'` in index.html
- **Theme Toggle**: Header button switches `dark` class on `<html>`
- **Component Adaptation**: All components check `isDarkMode` prop
- **Color Scheme**:
  - **Light**: Slate-50 background, Slate-900 text
  - **Dark**: Slate-900 background, Slate-100 text

### **Responsive Design**
- **Mobile-First**: Tailwind responsive utilities
- **Breakpoint Strategy**: `sm:`, `md:`, `lg:` prefixes
- **Flexible Layout**: Flexbox and grid systems

### **Animation & Interactions**
- **Hover Effects**: Smooth transitions on interactive elements
- **Loading States**: Pulse animation for status indicators
- **Modal Transitions**: Fade in/out for overlays

---

## 📊 State Management & Data Flow

### **State Hierarchy**
```
App (Root State)
├── activeTab: Tab
├── patternNameFilter: string
├── patternTypeFilter: string
├── isDarkMode: boolean
├── activeNavItem: string
└── patterns: Pattern[] (in PatternTable)
```

### **Data Flow Patterns**
1. **User Interaction** → **Component State** → **App State** → **Child Components**
2. **Filter Changes** → **App.tsx** → **PatternTable** → **Filtered Display**
3. **Theme Toggle** → **localStorage** → **DOM Class** → **Component Re-render**

### **Mock Data Structure**
```typescript
interface Pattern {
  id: string;
  patternName: string;
  patternType: 'Alphanumeric' | 'Numeric' | 'Boolean' | 'Text';
  resultMaxLength: number | null;
  resultPattern: string;
  resultMinValue: number | null;
  resultMaxValue: number | null;
}
```

---

## 🚀 Features & Functionality

### **✅ Implemented Features**

#### **1. Dark/Light Mode Toggle**
- Automatic system preference detection
- Manual toggle with persistence
- All components adapt dynamically

#### **2. Navigation System**
- Main navigation (Equipment, Routes, Orders, etc.)
- Tab navigation (Result Patterns, Attribute Groups, etc.)
- Breadcrumb updates based on navigation

#### **3. Search Functionality**
- Header search button opens modal
- Recent searches display
- Search input with clear functionality

#### **4. User Management**
- User dropdown menu with profile options
- Click-outside-to-close functionality
- User avatar and information display

#### **5. Data Management (Result Patterns)**
- **Filtering**: Real-time search and type filtering
- **CRUD Operations**:
  - Add: Creates new pattern with defaults
  - Edit: Renames selected pattern
  - Delete: Removes selected patterns
- **Selection**: Checkbox-based multi-select
- **Display**: Responsive table with hover effects

#### **6. Status Indicators**
- Production status with blinking animation
- Visual feedback for all interactive elements

### **🔄 User Interaction Flow**

1. **Page Load**:
   - Detect system theme preference
   - Load from localStorage if available
   - Initialize with default states

2. **Navigation**:
   - Click main nav → Update breadcrumb
   - Click tabs → Switch content area
   - Maintain filter state across navigation

3. **Data Operations**:
   - Type in filters → Real-time table updates
   - Select rows → Enable/disable action buttons
   - Click actions → Modify data with immediate UI feedback

4. **Theme Switching**:
   - Click moon/sun icon → Toggle theme
   - Persist choice to localStorage
   - Update all components instantly

---

## 🛠️ Development & Build Process

### **Development Server**
```bash
npm run dev          # Start Next.js dev server (port 3000)
npm run build        # Production build with optimizations
npm run start        # Start production server
npm run lint         # Run ESLint for code quality
```

### **Build Configuration**
- **Next.js Config**: App Router, custom environment variables
- **TypeScript**: Strict mode enabled, Next.js JSX transform
- **Tailwind**: PostCSS processing with dark mode support
- **ESLint**: Next.js recommended rules

### **Code Quality**
- **TypeScript**: Full type checking with Next.js integration
- **ESLint**: Next.js core web vitals rules
- **Build Validation**: Automated linting and type checking on build

### **Next.js Specific Features**
- **App Router**: File-based routing with layouts and nested routes
- **Server Components**: Optimized performance with React Server Components
- **Client Components**: Interactive components marked with `'use client'`
- **Environment Variables**: Built-in support for `.env.local` files
- **API Routes**: Ready for backend integration (pages/api/)
- **Static Asset Handling**: Optimized fonts, images, and other assets

---

## 🔍 Component Communication

### **Props Flow**
```
App.tsx
├── Header (isDarkMode, onToggleDarkMode, activeNavItem, onNavItemChange)
├── SubHeader (activeTab, onTabChange, isDarkMode, activeNavItem)
└── Content Area
    ├── FilterBar (filters, onChange handlers, isDarkMode)
    └── PatternTable (filters, isDarkMode)
```

### **Event Handling**
- **Bubble Up**: Child components emit events to parent
- **State Sync**: App.tsx maintains single source of truth
- **Side Effects**: Theme changes affect document root

---

## 🎯 Key Technical Decisions

### **1. State Management**
- **Local State**: Simple useState for component-level state
- **Lifting State**: Shared state moved to App.tsx
- **Persistence**: localStorage for theme preferences

### **2. Component Architecture**
- **Functional Components**: Modern React with hooks
- **Props Interface**: TypeScript interfaces for type safety
- **Conditional Rendering**: Theme-based class application

### **3. Styling Approach**
- **Utility-First**: Tailwind CSS for rapid development
- **Dark Mode**: Class-based theme switching
- **Responsive**: Mobile-first responsive design

### **4. Performance Optimizations**
- **App Router**: Next.js 14 with optimized routing
- **Automatic Code Splitting**: Route-based code splitting
- **Static Generation**: Pre-rendered pages for better performance
- **Image Optimization**: Built-in Next.js image optimization (when used)

---

## 📝 Future Enhancements

### **Planned Features**
- [ ] Form validation for pattern creation/editing
- [ ] API integration for data persistence
- [ ] Advanced filtering and sorting
- [ ] User authentication and authorization
- [ ] Export/import functionality
- [ ] Real-time collaboration features

### **Technical Improvements**
- [ ] State management library (Zustand/Redux)
- [ ] Component testing suite
- [ ] Error boundary implementation
- [ ] Performance monitoring
- [ ] Accessibility improvements

---

## 🐛 Known Issues & Limitations

1. **Mock Data Only**: Currently uses static mock data
2. **No Persistence**: Changes don't persist across sessions
3. **Limited Validation**: Basic form validation only
4. **Single User**: No multi-user support
5. **No API Integration**: Frontend-only implementation

---

## 📞 Support & Maintenance

**Development Team**: Rohit Jain (rjain16@jlr.com)
**Technology**: Next.js 14 + React 18 + TypeScript + Tailwind CSS
**Last Updated**: February 1, 2026
**Status**: Development/Prototype

---

*This documentation provides a comprehensive overview of the M-Config Configuration Manager application architecture, features, and implementation details.*</content>
<parameter name="filePath">c:\Users\ASUS\Downloads\m-config-configuration-manager\DOCUMENTATION.md