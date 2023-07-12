import Layout from "@/components/layout/Layout";
import { AuthProvider } from "../context/AuthContext";
import { Source_Sans_3 } from "next/font/google";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import Modal from "react-modal";

const sourceSans = Source_Sans_3({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Modal.setAppElement("#__next");
  }, []);
  return (
    <div className={sourceSans.className}>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer />
        </Layout>
      </AuthProvider>
    </div>
  );
}
