import "@/styles/globals.css";
import { createInstance, HackleProvider } from "@hackler/react-sdk";
import type { AppProps } from "next/app";

const hackleClient = createInstance(process.env.NEXT_PUBLIC_HACKLE_SDK_KEY!);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HackleProvider hackleClient={hackleClient}>
      <Component {...pageProps} />
    </HackleProvider>
  );
}
