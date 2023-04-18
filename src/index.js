import React from 'react';
import './index.css';
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { NavBar } from './components/nav/NavBar.js';
import { ApplicationViews } from './components/views/ApplicationViews.js';

const container = document.getElementById("root")
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <NavBar />
    <ApplicationViews />
  </BrowserRouter>
)