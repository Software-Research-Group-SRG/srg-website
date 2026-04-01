import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from "../components/layout/MainLayout";
import ScrollToTop from "../components/layout/ScrollToTop";

// Pages
// Landing
import Home from '../pages/landing/Page';

//Members
import MembersPage from '../pages/members/Page';

//Projects
import ProjectsPage from '../pages/projects/Page';
import ProjectDetailPage from '../pages/projects/ProjectDetailPage';

//Contact
import Contact from '../pages/contact/Contact';

function AppRoutes() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <MainLayout>
                <Routes>
                    //Home navigation
                    <Route path="/" element={<Home />} />

                    //Members navigation
                    <Route path="/members" element={<MembersPage />} />

                    //Projects navigation
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/projects/:projectId" element={<ProjectDetailPage />} />

                    //Contact navigation
                    <Route path="/contact" element={<Contact />} />

                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
}

export default AppRoutes;