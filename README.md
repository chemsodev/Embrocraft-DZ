# Custom Embroidery Clothing Website

**Design Your Own Custom Embroidered Clothing** 🌟

This project is a web application built with **Next.js 15** and **Tailwind CSS** that allows users to design and order unique custom embroidery clothing pieces. It features a sleek, responsive design with user-friendly navigation, optimized for a smooth and creative experience.

## Table of Contents

- [Custom Embroidery Clothing Website](#custom-embroidery-clothing-website)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Folder Structure](#folder-structure)
  - [Future Enhancements](#future-enhancements)
  - [License](#license)

## Features

- **Home Page with Hero Section**: Engaging hero section with a background image, bold call-to-action buttons, and a creative tagline.
- **Customizable Design and Style Pages**: Users can start designing their own pieces or browse a gallery of styles.
- **Order Management**: Allows users to place orders for custom designs, track the status of their orders, and receive confirmation and updates.
- **Responsive and Accessible UI**: Built with Tailwind CSS for styling, ensuring compatibility across different devices and screen sizes.
- **Efficient Routing with Next.js**: The `app` directory structure simplifies routing and page organization for easier navigation and scalability.

## Tech Stack

- **Frontend**: Next.js 15, React, Tailwind CSS
- **Deployment**: Ready for deployment on platforms like Vercel, Netlify, or any other Next.js-compatible hosting.

## Getting Started

Follow these instructions to set up the project locally:

### Prerequisites

- Node.js and npm installed. You can download them [here](https://nodejs.org/).

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/chemsodev/Embrocraft-DZ-Front.git
   cd Embrocraft-DZ-Front
   ```
2. **Install Dependencies**:
```bash
npm install
```
3. **Run the Development Server**:
```bash
npm run dev --turbo
```
4. **Open the App**: Open http://localhost:3000 in your browser to view it.

## Folder Structure
This project follows the standard Next.js 15 project structure:

```bash
src/
├── app/
│   ├── layout.js        # Application layout
│   ├── page.js          # Home page
│   └── ...              # Additional pages and components
├── components/          # Reusable components like buttons, modals, etc.
├── styles/              # Tailwind CSS styles and custom styles
└── assets/              # Static assets like images, icons, etc.
 ```
**app/**: Contains the core pages and layout components.
**components/**: Houses reusable UI components like buttons, forms, etc.

**styles/**: Contains Tailwind CSS configuration and custom styles.

**assets/**: For storing static assets, such as images and icons.

## Future Enhancements
**Design Editor**: Adding a design editor with drag-and-drop embroidery elements for a more interactive design experience.

**Live Preview**: Integrating a real-time preview for custom designs.

**Order Tracking**: Allowing users to track their order status from placement to delivery.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
