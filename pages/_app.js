import "@/styles/globals.css";
import { IcyProvider } from "@quicknode/icy-nft-hooks";


export default function App({ Component, pageProps }) {
  return (
    <IcyProvider apiKey={NFT_API_KEY}>
      <Component {...pageProps} />
    </IcyProvider>
  );
}
