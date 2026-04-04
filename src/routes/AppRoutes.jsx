import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from "../components/layout/MainLayout";
import ScrollToTop from "../components/layout/ScrollToTop";

// Pages
// Landing
import Home from '../pages/landing/Page';

//this is temporary for accessing the profile details page, will be removed once the actual profile details page is created
import BaseProfileDetails from '../components/layout/BaseProfileDetails';

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

                    //this is temporary for accessing the profile details page, will be removed once the actual profile details page is created
                    <Route path="/BaseProfileDetails" element={<BaseProfileDetails />} />

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