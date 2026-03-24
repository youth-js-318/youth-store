import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CategoriesPage from './pages/CategoriesPage'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route 
            path='/'
            element={<HomePage />}
          />
          <Route
            path='/sobre'
            element={<AboutPage />}
          />
          <Route
            path='/categorias'
            element={<CategoriesPage />}
          />
          <Route
            path='/contato'
            element={null}
          />
        </Route>
      </Routes>
    </>
  )
}

export default App
