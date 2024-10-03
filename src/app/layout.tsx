import "./globals.css";
import { ReactQueryClientProvider } from "@/services/components/Provider";
import { TitleBar } from "@/components/organisms/TitleBar/TitleBar";
import { MetaContextProvider } from "@/components/context/metaContext";
import { Container } from "@/components/atoms/Container/Container";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-ContentBase">
        <ReactQueryClientProvider>
          <MetaContextProvider>
            <TitleBar />
            <Container>
              {children}
            </Container>
          </MetaContextProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
