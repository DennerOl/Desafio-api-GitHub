import { Link } from 'react-router-dom';
import Button from '../../../componentes/Button';
import './styles.css'

export default function HomeBody() {


  return (
    <main>
      <div className='container'>
        <div className='text1'>Desafio Github API</div>
        <div className='text2'>DevSuperior - Escola de programação</div>
        <Link to="/before">
          <Button text="Começar" />
        </Link>

      </div>
    </main>
  );
}
