import { Outlet } from 'react-router-dom';
import Header from '../../componentes/Header';


export default function Home() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}