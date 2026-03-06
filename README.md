# Kinsan Ops Platform

A high-fidelity, cinematic fleet operations assistant dashboard built with Next.js, Tailwind CSS, and Framer Motion.

## Features
- **Cinematic UI:** Deep glassmorphism and neon accents.
- **Operational Chat:** AI-native command workspace with interactive cards.
- **Live Telemetry:** Real-time widgets for fleet turnaround and shift scheduling.
- **PWA Ready:** Installable web application with offline support.

## Project Status
- **GitHub:** [https://github.com/kostasuser01gr/ChatOPS](https://github.com/kostasuser01gr/ChatOPS)
- **Vercel Production:** [https://chatops-rouge.vercel.app](https://chatops-rouge.vercel.app)

## Local Development
1. Clone the repository.
2. Install dependencies: `npm install`
3. Set up environment variables based on `.env.example`.
4. Run the development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000)

## Deployment Workflow
- **Continuous Integration:** Every push to the `main` branch triggers a Vercel production deployment.
- **Preview Deployments:** Pull requests trigger Vercel preview environments.

## Environment Variables
- `EXAMPLE_SERVER_SECRET`: Redacted server-side secret.
- `NEXT_PUBLIC_EXAMPLE_PUBLIC_KEY`: Redacted public API key.

## Security
- No secrets are committed to the repository.
- `.gitignore` includes patterns for all `.env*` files except `.env.example`.
