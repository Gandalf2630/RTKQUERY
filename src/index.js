//Imports. Gør så det vises i react, det der bliver skrevet i App
import React from "react"
import {createRoot} from "react-dom/client"
import App from "./App"
//importer bootstrap til index
import "bootstrap/dist/css/bootstrap.min.css"
//Importer Provider fra react-redux ind i app
import { Provider } from 'react-redux';
import { store  } from "./store";
import { BrowserRouter } from 'react-router-dom'

//Properties.
const el = document.getElementById("root")
const root = createRoot(el)

//Render App, så det kommer frem på siden
root.render(<BrowserRouter> <Provider  store={store}> <App/> </Provider> </BrowserRouter>)
