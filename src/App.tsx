/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import BlogPost from './pages/BlogPost';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg selection:bg-accent/30">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
