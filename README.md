# SupportFlow

This is a Next.js portfolio website for "OutsourceFlow", a startup that helps companies outsource their customer support. It's built with Firebase for authentication and database, and features a GenAI-powered contact form triage system.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Firebase Setup

This project is configured to use Firebase for Authentication and Firestore. To get it working, you need to:

1.  **Create a Firebase Project:**
    Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.

2.  **Create a Web App:**
    In your Firebase project, add a new Web App. Firebase will provide you with a `firebaseConfig` object.

3.  **Set up Environment Variables:**
    The project is configured to read from placeholder values in `src/lib/firebase.ts`. For a real application, you should use environment variables. Create a new file named `.env.local` in the root of your project and add your Firebase configuration.

    File: `.env.local`
    ```
    NEXT_PUBLIC_FIREBASE_API_KEY="your-api-key"
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your-auth-domain"
    NEXT_PUBLIC_FIREBASE_PROJECT_ID="your-project-id"
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="your-storage-bucket"
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="your-messaging-sender-id"
    NEXT_PUBLIC_FIREBASE_APP_ID="your-app-id"
    ```
    
    The file `src/lib/firebase.ts` is already configured to use these environment variables.

4.  **Enable Firebase Services:**
    - In the Firebase Console, go to the **Authentication** section and enable the **Email/Password** sign-in method.
    - Go to the **Firestore Database** section and create a new database. Start in **test mode** for development, but make sure to set up [proper security rules](https://firebase.google.com/docs/firestore/security/get-started) for production. The contact form requires public write access to the `contacts` collection.

## Project Structure

-   `src/app/`: Contains all the pages and layouts for the Next.js App Router.
-   `src/components/`: Reusable React components.
    -   `src/components/landing/`: Components specific to the landing page sections.
    -   `src/components/layout/`: Components like Header and Footer.
    -   `src/components/ui/`: ShadCN UI components.
-   `src/lib/`: Utility functions and Firebase configuration.
-   `src/context/`: React context providers (e.g., for authentication).
-   `src/ai/`: Contains Genkit flows for AI features. The contact form triage logic is in `src/ai/flows/triage-contact-form.ts`.