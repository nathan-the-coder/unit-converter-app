# Unit Converter App

A simple web application designed to convert between different units of measurement. This project uses a modern tech stack to provide a seamless user experience.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- Convert between a variety of measurement units (e.g., length, weight, volume, etc.).
- Easy-to-use interface for quick conversions.
- Built with scalability and performance in mind.

---

## Tech Stack
The project uses the following technologies:
- **Frontend**:
  - React
  - TypeScript
  - Vite
  - TailwindCSS
- **Backend**:
  - Node.js
  - Express.js
- **Package Management**:
  - pnpm
- **Other Tools**:
  - ESLint for linting
  - Prettier for code formatting

---

## Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js (>= 18)
- pnpm (>= 7)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/nathan-the-coder/unit-converter-app.git
   cd unit-converter-app
   ```
2. Install dependencies:
Install both the frontend and backend dependencies on each individual  folders
  ```sh
  # cd unit-converter-frontend - frontend
  # cd unit-converter-backend - backend
  pnpm install
  ```

### Runnning the Application
To run the application locally:

1. Start the frontend:
```sh
cd unit-converter-frontend
pnpm run dev
```
2. Start the backend:
```sh
cd unit-converter-backend
pnpm run start
```
The app will be accessible at http://localhost:3000.

---
## Usage

1. Navigate to the app in your browser.
2. Select a measurement type (e.g., length, weight, volume).
3. Enter the value and choose the units to convert between.
4. Get instant results!

## Project Structure
```
unit-converter-app/
├── unit-converter-frontend/  # Frontend source code
├── unit-converter-backend/   # Backend source code
├── .github/                  # GitHub workflows and configurations
├── README.md                 # Project documentation
├── LICENSE                   # Project License
└── package.json              # Dependencies and scripts
```
---
## Contributing
We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch for your feature/bugfix.
3. Commit your changes and create a pull request.
---
## License
This project is licensed under the [MIT License](./LICENSE).
