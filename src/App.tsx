import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import HomeBody from './routes/Home/HomeBody'
import Before from './routes/Home/Before'
import Perfil from './routes/Home/Before/Perfil'
import NotFound from './routes/Home/Before/NotFound'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<HomeBody />} />
          <Route path='/before' element={<Before />}>
            <Route path="/before/perfil/:user" element={<Perfil />} />
            <Route path="/before/perfil/çç" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
