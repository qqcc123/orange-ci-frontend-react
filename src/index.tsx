import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider,  } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from './redux/store/appStore'
import appRouter from './appRouter'
import './index.css'

createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <Provider store={appStore}>
        <RouterProvider router={appRouter} />
      </Provider>
   </React.StrictMode>
)
