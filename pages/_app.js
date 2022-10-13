import '../styles/globals.css'
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>  
  )
}

export default MyApp
