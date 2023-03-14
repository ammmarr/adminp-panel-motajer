import Category from "./components/Category/Category"
import { motion } from 'framer-motion'
import './App.scss'
import Costumer from './components/Costumer/Costumer'
import Features from './components/Feature/Features'
import Industry from './components/Industry/Industry'
import NavBar from './components/NavBar/NavBar'
import Package from './components/Package/Package'
import Store from './components/Store/Store'
import "./globalStyles.scss"
import { Route, Routes } from "react-router-dom"
import Product from "./components/Product/Product"


function App() {

  return (
    <motion.div className="App" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, ease: 'easeOut' }}
      key="asakldm">
      <NavBar />
      <Routes>
        <Route path="/" element={<Package />} />

        <Route path="/Feature" element={<Features />} />

        <Route path="/Costumer" element={<Costumer />} />

        <Route path="/Store" element={<Store />} />

        <Route path="/Industry" element={<Industry />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Product" element={<Product />} />
      </Routes>
    </motion.div>
  )
}

export default App
