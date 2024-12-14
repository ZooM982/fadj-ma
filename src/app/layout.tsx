import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToastNotification from "./components/ToastNotification";
import "./components/ToastNotification.css";
import { UserProvider } from "./components/userContexte";
import ClientOnly from "./ClientOnly";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fadj-Ma",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientOnly>
      <UserProvider>
        <ToastNotification />
        <body className={inter.className}>{children}</body>
      </UserProvider>
      </ClientOnly>
    </html>
  );
}
