import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/header/Header.jsx'
import Banner from './components/banner/Banner.jsx'
import Products from './components/products/Pro.jsx'
import Sale from './components/sales/Sale.jsx'
import Company from './components/sponsor/Spo.jsx'
import Category from './components/categories/Cat.jsx'
import Comment from './components/comments/Comm.jsx'
import InstagramImages from './components/insta-img/Insta.jsx'
import Footer from './components/footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Banner />
    <Products />
    <Sale />
    <Company />
    <Category />
    <Comment />
    <InstagramImages />
    <Footer />
  </StrictMode>
)