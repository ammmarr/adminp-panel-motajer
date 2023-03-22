import { motion } from 'framer-motion'
import { Provider } from 'react-redux'
import { Route, Routes } from "react-router-dom"
import NavBar from './components/NavBar/NavBar'
import "./globalStyles.scss"
import { routes } from "./routes/routes"
import store from './store'

function App() {

  return (
    <Provider store={store}>
      <motion.div className="App" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, ease: 'easeOut' }}
        key="asakldm">
        <NavBar />
        <Routes>
          {routes.map(route =>
            <Route path={route.path} element={route.element} key={route.path} />
          )}
        </Routes>
      </motion.div>
    </Provider>
  )
}

export default App
