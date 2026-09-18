import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mangá Hyouka - BR",
  description: "Fandom de Hyouka BR",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html>
      <body className={'antialiased'}>
        {children}
      </body>
    </html>
  );
}
