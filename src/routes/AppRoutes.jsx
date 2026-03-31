import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from "../components/layout/MainLayout";

// Pages
import Home from '../pages/landing/Home';
import ProjectsPage from '../pages/projects/Page';

function AppRoutes() {
    return (
        <BrowserRouter>
           <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    {/* Add more routes here */}
                </Routes>
           </MainLayout>
        </BrowserRouter>
    );
}

export default AppRoutes;