# Signalist - Real-Time Stock Tracker App (https://signalist-stock-tracker-app-eight.vercel.app)

## Description

Signalist is a comprehensive stock tracking application designed to provide users with real-time stock prices, personalized alerts, and detailed company insights. Built with Next.js, Tailwind, Shadcn, MongoDB, Inngest, BetterAuth, Typescript 

## Key Features & Benefits

- **Real-time Stock Prices:** Stay updated with current market data.
- **Personalized Alerts:** Receive notifications for price changes and other important events.
- **Detailed Company Insights:** Explore in-depth information about companies, including financials, news, and more.
- **User Authentication:** Secure sign-up and sign-in functionality.
- **Watchlist Management:** Easily add and manage stocks in your personal watchlist.
- **Background Job Processing**: Utilizes Inngest for efficient background tasks, such as sending daily news summaries and welcome emails.

## Prerequisites & Dependencies

Before you begin, ensure you have the following installed:

- **Node.js:**  (version >= 18) - Recommended version specified in package.json.
- **npm** or **yarn** or **pnpm** or **bun:** Package managers for installing dependencies.
- **MongoDB:** A database to store user data and watchlist information.
- **Inngest account and CLI:** Needed for background processing.
- **Tailwind CSS:** Styling Framework

## Installation & Setup Instructions

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/tanishijanweja/signalist_stock-tracker-app.git
   cd signalist_stock-tracker-app
   ```

2. **Install Dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Using yarn:

   ```bash
   yarn install
   ```

   Using pnpm:

   ```bash
   pnpm install
   ```

   Using bun:

   ```bash
   bun install
   ```

3. **Configure Environment Variables:**

   Create a `.env.local` file in the root directory and add the following environment variables:

   ```
   NODE_ENV='development'
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   
   # MONGODB
   MONGODB_URI=
   
   # BETTER AUTH
   BETTER_AUTH_SECRET=
   BETTER_AUTH_URL=
   
   # GEMINI
   GEMINI_API_KEY=
   
   #NODEMAILER
   NODEMAILER_EMAIL=
   NODEMAILER_PASSWORD=
   
   # FINNHUB
   NEXT_PUBLIC_FINNHUB_API_KEY=
   FINNHUB_API_KEY=
   ```

4. **Run the Development Server:**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```
 also run the inngest server
 ```bash
 npx inngest-cli@latest dev                   
```
5. **Access the Application:**

   Open your browser and navigate to `http://localhost:3000` and `https://localhost:8288` to access the application.
