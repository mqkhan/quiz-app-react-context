import "@/styles/globals.css";
import { QuizProvider } from "@/QuizeContext";

function MyApp({ Component, pageProps }) {
  return (
    <QuizProvider>
      <Component {...pageProps} />
    </QuizProvider>
  );
}

export default MyApp;
