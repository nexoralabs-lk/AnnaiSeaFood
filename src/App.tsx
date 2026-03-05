import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar.tsx'
import { Footer } from './components/layout/Footer.tsx'
import { HomePage } from './pages/HomePage.tsx'
import { ProductsPage } from './pages/ProductsPage.tsx'
import { ProductDetailsPage } from './pages/ProductDetailsPage.tsx'
import { AboutPage } from './pages/AboutPage.tsx'
import { GalleryPage } from './pages/GalleryPage.tsx'
import { ContactPage } from './pages/ContactPage.tsx'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductDetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
