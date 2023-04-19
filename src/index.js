import React from 'react';
import './index.css';
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NavBar } from './components/nav/NavBar.js';
import { ApplicationViews } from './components/views/ApplicationViews.js';
import { Authorized } from './components/views/authorized.js';
import { Login } from './components/auth/login.js';
import { Register } from './components/auth/register.js';

const container = document.getElementById("root")
const root = createRoot(container)

root.render(
  <BrowserRouter>
    
    <Routes>
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />

		<Route path="*" element={
			<Authorized>
				<>
					<NavBar />
					<ApplicationViews />
				</>
			</Authorized>

		} />

	</Routes>


    
  </BrowserRouter>
)