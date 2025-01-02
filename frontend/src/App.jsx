
import './App.css'
import SideBar from './Components/sideBar'
import AddProducts from './Components/addProducts'
import AddProductModal from './Components/Modals/AddProductModal'
function App() {
  
  return (
    <div className="flex h-screen">
     
      <SideBar />
      
      <div className="flex-1 p-6 bg-gray-100 overflow-auto">
        <AddProducts />
        
      </div>
    </div>
  )
}

export default App
