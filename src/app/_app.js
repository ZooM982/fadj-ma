import { Provider } from 'react-redux';
import store from '../store'
import ToastNotification from "./components/ToastNotification"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ToastNotification />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
