# 🦷 Dentwise

A modern dental appointment management system built with Next.js 15, featuring AI-powered voice assistance, real-time scheduling, and comprehensive admin controls.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://dentwise-wnbez.sevalla.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6.16.3-2D3748)](https://www.prisma.io/)

## ✨ Features

### For Patients
- **Easy Appointment Booking** - Schedule dental appointments with preferred doctors
- **Dashboard Overview** - View upcoming and past appointments at a glance
- **AI Voice Assistant** - Book appointments using natural voice commands via Vapi.ai integration
- **Email Notifications** - Receive appointment confirmations and reminders
- **Secure Authentication** - Protected user accounts with Clerk authentication

### For Administrators
- **Doctor Management** - Add, edit, and manage doctor profiles with specialties
- **Appointment Oversight** - View and manage all appointments across the system
- **Recent Activity Tracking** - Monitor latest appointments and system activity
- **User Management** - Access patient information and appointment history

### Technical Features
- **Real-time Updates** - Powered by TanStack Query for optimal data synchronization
- **Responsive Design** - Beautiful UI built with Tailwind CSS and Radix UI components
- **Type Safety** - Full TypeScript implementation with Zod validation
- **Database ORM** - Prisma for type-safe database operations
- **Modern UI Components** - Comprehensive component library with shadcn/ui

## 🚀 Tech Stack

- **Framework:** Next.js 15.5.4 (App Router)
- **Language:** TypeScript 5
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** Clerk
- **Styling:** Tailwind CSS 4
- **UI Components:** Radix UI + shadcn/ui
- **State Management:** TanStack Query (React Query)
- **Voice AI:** Vapi.ai
- **Email:** Resend + React Email
- **Form Handling:** React Hook Form + Zod
- **Charts:** Recharts
- **Code Quality:** Biome (Linting & Formatting)

## 📋 Prerequisites

- Node.js 20+ 
- PostgreSQL database
- npm/yarn/pnpm/bun

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/Nikhil-002/Dentwise.git
cd Dentwise
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/dentwise"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Vapi.ai (Voice Assistant)
NEXT_PUBLIC_VAPI_PUBLIC_KEY=your_vapi_public_key
VAPI_PRIVATE_KEY=your_vapi_private_key

# Resend (Email)
RESEND_API_KEY=your_resend_api_key
```

4. **Set up the database**
```bash
npx prisma generate
npx prisma db push
```

5. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
Dentwise/
├── prisma/
│   └── schema.prisma          # Database schema
├── public/                    # Static assets
├── src/
│   ├── app/
│   │   ├── admin/            # Admin dashboard
│   │   ├── api/              # API routes
│   │   ├── appointments/     # Appointment pages
│   │   ├── dashboard/        # User dashboard
│   │   ├── pro/              # Premium features
│   │   ├── voice/            # Voice assistant interface
│   │   └── page.tsx          # Landing page
│   ├── components/
│   │   ├── admin/            # Admin components
│   │   ├── appointments/     # Appointment components
│   │   ├── dashboard/        # Dashboard components
│   │   ├── emails/           # Email templates
│   │   ├── landing/          # Landing page sections
│   │   ├── ui/               # Reusable UI components
│   │   └── voice/            # Voice assistant components
│   ├── hooks/                # Custom React hooks
│   └── lib/                  # Utility functions & actions
├── components.json           # shadcn/ui configuration
├── biome.json               # Biome configuration
└── package.json
```

## 🗄️ Database Schema

The application uses three main models:

- **User** - Patient information and authentication
- **Doctor** - Doctor profiles with specialties and availability
- **Appointment** - Booking records linking users and doctors

## 🎨 Key Features Implementation

### Voice Assistant
Integrated Vapi.ai for natural language appointment booking. Users can speak to schedule appointments without manual form filling.

### Email System
Automated email notifications using Resend and React Email for:
- Appointment confirmations
- Appointment reminders
- Status updates

### Admin Dashboard
Comprehensive admin panel with:
- Real-time appointment tracking
- Doctor management interface
- User activity monitoring

## 📜 Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run Biome linter
npm run format       # Format code with Biome
```

## 🌐 Deployment

The application is deployed on [Sevalla](https://sevalla.com/) and accessible at:
**[https://dentwise-wnbez.sevalla.app/](https://dentwise-wnbez.sevalla.app/)**

### Deploy Your Own

1. Set up a PostgreSQL database
2. Configure environment variables on your hosting platform
3. Run `npm run build`
4. Deploy the `.next` folder

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Nikhil Kumar**
- GitHub: [@Nikhil-002](https://github.com/Nikhil-002)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Clerk](https://clerk.com/) - Authentication & User Management
- [Prisma](https://www.prisma.io/) - Next-generation ORM
- [Vapi.ai](https://vapi.ai/) - Voice AI Platform
- [shadcn/ui](https://ui.shadcn.com/) - UI Component Library
- [Sevalla](https://sevalla.com/) - Hosting Platform

---

Made with ❤️ for better dental care management
