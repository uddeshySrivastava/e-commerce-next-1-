import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex h-[95vh] rounded-md flex-col items-start justify-start mt-0 ">
      <Component {...pageProps} />
    </div>
  );
}
