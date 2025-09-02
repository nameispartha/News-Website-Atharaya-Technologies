import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import AdminLayout from './admin/layout/AdminLayout.jsx'
import DashboardHome from './admin/pages/DashboardHome.jsx'
import ManageNews from './admin/pages/ManageNews.jsx'
import AddNews from './admin/pages/AddNews.jsx'
import EditNews from './admin/pages/EditNews.jsx'
import { AdminRoute } from './components/routes/ProtectedRoutes.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import LoginForm from './components/LoginForm.jsx'
import Homepage from './pages/Homepage/Homepage.jsx'
import Home from './pages/Home.jsx'
import WorldNews from './components/WorldNews.jsx'
import IndiaNews from './components/IndiaNews.jsx'
import BusinessNews from './components/BusinessNews.jsx'
import Entertainment from './components/Entertainment.jsx'
import Hollywood from './components/Hollywood.jsx'
import Bollywood from './components/Bollywood.jsx'
import OpinionsNews from './components/OpinionsNews.jsx'
import VideosNews from './components/VideosNews.jsx'
import PhotosNews from './components/PhotosNews.jsx'
import TVShowsNews from './components/TVShowsNews.jsx'
import LifestyleNews from './components/LifestyleNews.jsx'
import ScienceNews from './components/ScienceNews.jsx'
import TechnologyNews from './components/TechnologyNews.jsx'
import Sports from './components/Sports.jsx'
import Cricket from './components/Cricket.jsx'
import Football from './components/Football.jsx'
import TrendingNews from './components/TrendingNews.jsx'
import DetailsPage from './components/DetailsPage.jsx'

// Header moved to components/Header.jsx

// Latest news title is now inside LatestNews component

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  const openLoginForm = () => {
    setIsLoginOpen(true)
  }

  const closeLoginForm = () => {
    setIsLoginOpen(false)
  }

  function ScrollToTop() {
    const { pathname } = useLocation()
    useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }, [pathname])
    return null
  }
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin')
  return (
    <AuthProvider>
      <div>
        {!isAdminRoute && (
          <>
            <Header openLoginForm={openLoginForm} />
            {/* Spacer div to prevent content jump when header becomes fixed */}
            <div className="h-[200px]"></div>
          </>
        )}
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/latest" element={<Home />} />
          <Route path="/world" element={<WorldNews />} />
          <Route path="/india" element={<IndiaNews />} />
          <Route path="/business" element={<BusinessNews />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/hollywood" element={<Hollywood />} />
          <Route path="/bollywood" element={<Bollywood />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/football" element={<Football />} />
          <Route path="/cricket" element={<Cricket />} />
          <Route path="/opinions" element={<OpinionsNews />} />
          <Route path="/videos" element={<VideosNews />} />
          <Route path="/photos" element={<PhotosNews />} />
          <Route path="/tvshows" element={<TVShowsNews />} />
          <Route path="/lifestyle" element={<LifestyleNews />} />
          <Route path="/science" element={<ScienceNews />} />
          <Route path="/tech" element={<TechnologyNews />} />
          <Route path="/trending" element={<TrendingNews />} />
          <Route path="/details/:id" element={<DetailsPage />} />

          {/* Admin protected */}
          <Route element={<AdminRoute />}>
            <Route element={<AdminLayout />}>
              <Route path="/admin" element={<DashboardHome />} />
              <Route path="/admin/news" element={<ManageNews />} />
              <Route path="/admin/news/add" element={<AddNews />} />
              <Route path="/admin/news/:id/edit" element={<EditNews />} />
            </Route>
          </Route>
        </Routes>
        {!isAdminRoute && <Footer />}
        
        {/* Global Login Form Modal */}
        {!isAdminRoute && <LoginForm isOpen={isLoginOpen} onClose={closeLoginForm} />}
      </div>
    </AuthProvider>
  )
}
