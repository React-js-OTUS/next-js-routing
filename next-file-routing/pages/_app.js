import '../styles/globals.css'

// необходим для инициализации страниц приложения

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
