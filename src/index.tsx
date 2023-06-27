import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root, {loader as rootLoader, action as rootAction} from './routers/root'
import { Provider } from 'react-redux'
import appStore from './redux/store/appStore'

import './style.css'
import AppImage from './orange.png'
import './index.css'

function App() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <img src={AppImage}></img>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    action: rootAction,
  },
])


createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <Provider store={appStore}>
        <RouterProvider router={router} />
      </Provider>
   </React.StrictMode>
)
