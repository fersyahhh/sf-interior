Project Architecture & Directory Structure
This document outlines the architectural standards and folder organization used in this project. We follow a Feature-Based Architecture (also known as a Modular Structure) to ensure the application is scalable, maintainable, and easy to navigate as it grows.

📁 Directory Structure
src/
│
├── app/                # Global app configuration (Redux store, context providers, main router)
│   ├── store.js
│   ├── provider.jsx
│   └── router.jsx
│
├── features/           # Feature-based modules (Modern best practice)
│   ├── auth/           # Authentication module
│   │   ├── components/ # Components exclusive to auth
│   │   ├── pages/      # View pages for auth (Login, Register, etc.)
│   │   ├── services/   # Auth-specific API calls & business logic
│   │   ├── hooks/      # Custom hooks specific to auth
│   │   └── authSlice.js# State management logic for auth
│   │
│   ├── product/        # Product module
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   └── productSlice.js
│
├── components/         # Reusable global components (Shared across features)
│   ├── ui/             # Atomic UI elements (Buttons, Inputs, Modals, etc.)
│   └── layout/         # Layout components (Navbar, Sidebar, Footer)
│
├── hooks/              # Global custom hooks (Generic and reusable)
│   └── useAuth.js
│
├── services/           # Global API configurations (Axios instances, interceptors)
│   └── api.js
│
├── utils/              # Helper functions & utility methods
│   └── formatDate.js
│
├── constants/          # Application-wide constants and Enums
│   └── index.js
│
├── styles/             # Global styling (Tailwind directives, CSS variables)
│   └── global.css
│
├── assets/             # Static assets (Images, icons, fonts, etc.)
│
├── routes/             # Routing definitions (Optional if not centralized in app/)
│   └── index.jsx
│
├── App.jsx             # Root application component
└── main.jsx            # Application entry point

🛠 Core Architectural Principles
1. Modular Feature Folders
The codebase is organized by Feature rather than by file type. Each folder within src/features/ contains everything required for that specific domain to function. This reduces "folder switching" and makes the code easier to isolate or refactor.

2. Separation of Concerns
Presentational vs. Logical: Shared UI components go into src/components/ui/, while logic-heavy components stay within their respective features/ folder.

State Management: Global state configuration resides in app/, while domain-specific state logic (Slices) is kept within the feature it governs.

Certainly! Here is the professionally structured content for your ARCHITECTURE.md in English. It explains your folder structure using industry-standard terminology for a Senior Frontend Developer role.

Project Architecture & Directory Structure
This document outlines the architectural standards and folder organization used in this project. We follow a Feature-Based Architecture (also known as a Modular Structure) to ensure the application is scalable, maintainable, and easy to navigate as it grows.

📁 Directory Structure
Plaintext
src/
│
├── app/                # Global app configuration (Redux store, context providers, main router)
│   ├── store.js
│   ├── provider.jsx
│   └── router.jsx
│
├── features/           # Feature-based modules (Modern best practice)
│   ├── auth/           # Authentication module
│   │   ├── components/ # Components exclusive to auth
│   │   ├── pages/      # View pages for auth (Login, Register, etc.)
│   │   ├── services/   # Auth-specific API calls & business logic
│   │   ├── hooks/      # Custom hooks specific to auth
│   │   └── authSlice.js# State management logic for auth
│   │
│   ├── product/        # Product module
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   └── productSlice.js
│
├── components/         # Reusable global components (Shared across features)
│   ├── ui/             # Atomic UI elements (Buttons, Inputs, Modals, etc.)
│   └── layout/         # Layout components (Navbar, Sidebar, Footer)
│
├── hooks/              # Global custom hooks (Generic and reusable)
│   └── useAuth.js
│
├── services/           # Global API configurations (Axios instances, interceptors)
│   └── api.js
│
├── utils/              # Helper functions & utility methods
│   └── formatDate.js
│
├── constants/          # Application-wide constants and Enums
│   └── index.js
│
├── styles/             # Global styling (Tailwind directives, CSS variables)
│   └── global.css
│
├── assets/             # Static assets (Images, icons, fonts, etc.)
│
├── routes/             # Routing definitions (Optional if not centralized in app/)
│   └── index.jsx
│
├── App.jsx             # Root application component
└── main.jsx            # Application entry point

🛠 Core Architectural Principles
1. Modular Feature Folders
The codebase is organized by Feature rather than by file type. Each folder within src/features/ contains everything required for that specific domain to function. This reduces "folder switching" and makes the code easier to isolate or refactor.

2. Separation of Concerns
Presentational vs. Logical: Shared UI components go into src/components/ui/, while logic-heavy components stay within their respective features/ folder.

State Management: Global state configuration resides in app/, while domain-specific state logic (Slices) is kept within the feature it governs.

3. Service Layer
All external communication is handled via the services/ directory. Feature-specific services should inherit from the base configuration found in src/services/api.js to maintain consistency in headers, error handling, and base URLs.

4. Scalability
This structure is designed to handle dozens of features without becoming cluttered. By keeping the components/ folder strictly for generic UI, we prevent it from becoming a "dumping ground" for feature-specific code.