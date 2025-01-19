
import './App.css'
import SideBar from './Components/SideBar'
import AddProducts from './Components/addProducts'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ViewProducts from './Components/ViewProducts'
function App() {

  return (
    <Router>
      <div className="flex h-screen">

        <SideBar />

        <div className="flex-1 p-6 bg-gray-100 overflow-auto">
          
          <Routes>
            <Route path="/view-products" element={<ViewProducts />} />
            <Route path="/add-products" element={<AddProducts />} />
          </Routes>

        </div>
      </div>

    </Router>


  )
}

export default App
