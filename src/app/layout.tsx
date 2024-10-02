import "./globals.css";
import { ReactQueryClientProvider } from "@/services/components/Provider";
import { TitleBar } from "@/components/organisms/TitleBar/TitleBar";
import { Metadata } from "next";
import { MetaContextProvider } from "@/components/context/metaContext";


export const metadata: Metadata = {
  title: 'Metaversal',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryClientProvider>
          <MetaContextProvider>
            <TitleBar />
            {children}
          </MetaContextProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
