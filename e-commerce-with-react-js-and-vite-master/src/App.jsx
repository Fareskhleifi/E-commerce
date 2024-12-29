import { Home } from './Pages/Home'
import {Cart} from './Pages/Cart'
import {Favorites} from './Pages/Favorites'
import {Order} from './Pages/Order'
import {Account} from './Pages/Account'
import {Registration} from './Pages/Registration'
import {ContactUs} from './Pages/ContactUs'
import {Aboutus} from './Pages/Aboutus'
import {Pay} from './Pages/Pay'
import {Con} from './Pages/Confirmed'
import {OrderClient} from './Pages/OrderClient'
import {Shop} from './Pages/Shop'
import {ProductPage1} from './Pages/ProductPage'
import { Sclient } from './Pages/SettingClient'
import { Pclient } from './Pages/ProfilClient'
import { Nclient } from './Pages/NotificationClient'
import { OHclient } from './Pages/OrderhistoryClient'
import { OCclient } from './Pages/OrderHistoryClt'
import { Cclient } from './Pages/ContactClientSide1'


//side bar
import Sidebar from './components/Sidebar'
//react router dom
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Outlet,
  Route
}from 'react-router-dom'
import ProductPage from './Pages/SKANDIKA'
import ProductPage2 from './Pages/IKEA'
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
        <Route index element={<Home/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/favs' element={<Favorites/>}/>
        <Route path='/orders' element={<Order/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/about' element={<Aboutus/>}/>
        <Route path='/payment' element={<Pay/>}/>
        <Route path='/confirmer' element={<Con/>}/>
        <Route path='/track' element={<OrderClient/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path="/produit/:id" element={<ProductPage1 />} />
        <Route path='/setting' element={<Sclient/>}/>
        <Route path='/profil' element={<Pclient/>}/>
        <Route path='/notifications' element={<Nclient/>}/>
        <Route path='/orderhistory' element={<OHclient/>}/>
        <Route path='/ordercourant' element={<OCclient/>}/>
        <Route path='/contact2' element={<Cclient/>}/>
        <Route path='/skandika' element={<ProductPage/>}/>
        <Route path='/ikea' element={<ProductPage2/>}/>

      </Route>
    )
  )
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  )
}

export default App
const Root = ()=>{
  return(
    <>
      <div>
      <Outlet/>
      </div>
    </>   
  )
}