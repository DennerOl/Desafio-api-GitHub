import { Outlet } from 'react-router-dom';
import Header from '../../componentes/Header';
import './styles.css'
import Button from '../../componentes/Button';
import { Link } from 'react-router-dom';

export default function Home() {

  return (
    <>
      <Header />
      <div className='container'>
        <div className='text1'>Desafio Github API</div>
        <div className='text2'>DevSuperior - Escola de programação</div>

        <Link to="/before">
          <Button text="Começar" />
        </Link>

      </div>



      <Outlet />

    </>
  )
}