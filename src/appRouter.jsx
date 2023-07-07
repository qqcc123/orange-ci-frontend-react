import { createBrowserRouter, createHashRouter } from 'react-router-dom'
import Root, {loader as rootLoader, action as rootAction, action} from './routers/root'
import Contact, { loader as contactLoader, action as contactAction,} from './routers/contact'
import EditContact, { action as editAction } from "./routers/edit";
import { action as destroyAction } from "./routers/destroy";
import Index from "./routers/index";
import ErrorPage from './routers/error-page'
import * as React from 'react'
import Home, { homeAction, homeLoader } from './routers/navRouters/home';
import Main, {mainAction, mainLoader} from './routers/main'

//用vite打包的时候可以使用createBrowserRouter， 路由http://localhost:8080/contacts/1a7thln
//用webpack打包的时候可以使用createHashRouter， 路由http://localhost:8080/#/contacts/pdhn10j
//如果使用了createBrowserRouter，则会出现在某个路由页面刷新，出现Cannot GET /contacts/pdhn10j错误
// const appRouter = createHashRouter([
//     {
//       path: "/",
//       element: <Root />,
//       errorElement: <ErrorPage />,
//       loader: rootLoader,
//       action: rootAction,
//       children: [
//         {
//           errorElement: <ErrorPage />,
//           children: [
//             { 
//               index: true, 
//               element: <Index /> 
//             },
//             {
//               path: "contacts/:contactId",
//               element: <Contact />,
//               loader: contactLoader,
//               action: contactAction,
//             },
//             {
//               path: "contacts/:contactId/edit",
//               element: <EditContact />,
//               loader: contactLoader,
//               action: editAction,
//             },
//             {
//               path: "contacts/:contactId/destroy",
//               action: destroyAction,
//               errorElement: <div>Oops! There was an error.</div>,
//             },
//           ]
//         }
//       ]
//     },
//   ])

const appRouter = createHashRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        loader: mainLoader,
        action: mainAction,
        
        children: [
            {
                path: "/:nav",
                element: <Home />,
                errorElement: <ErrorPage />,
                loader: homeLoader,
                action: homeAction,
            },
            {

            }
        ]
    }
])

export default appRouter;