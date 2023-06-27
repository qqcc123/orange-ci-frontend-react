import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root, {loader as rootLoader, action as rootAction} from './routers/root'
import Contact, { loader as contactLoader, action as contactAction,} from './routers/contact'
import EditContact, { action as editAction } from "./routers/edit";
import { action as destroyAction } from "./routers/destroy";
import Index from "./routers/index";
import { Provider } from 'react-redux'
import appStore from './redux/store/appStore'
import ErrorPage from './routers/error-page'

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
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { 
            index: true, 
            element: <Index /> 
          },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: "contacts/:contactId/destroy",
            action: destroyAction,
            errorElement: <div>Oops! There was an error.</div>,
          },
        ]
      }
    ]
  },
])

createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <Provider store={appStore}>
        <RouterProvider router={router} />
      </Provider>
   </React.StrictMode>
)
