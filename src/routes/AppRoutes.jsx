import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from '@/pages/landing/Home';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                {/* Add more routes here */}
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;