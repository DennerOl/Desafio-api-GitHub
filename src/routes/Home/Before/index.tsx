import { useState } from "react";
import { Link, Outlet } from 'react-router-dom';
import Button from '../../../componentes/Button';
import './styles.css'

export default function Before() {

  const [user, setUser] = useState('');

  function handleSearchInput(event: any) {
    event.preventDefault();


  }

  function handleUserInput(event: any) {
    const value = event.target.value;
    setUser(value);
  }

  return (
    <>
      <div className="form">
        <form onSubmit={handleSearchInput}>
          <label>Encontre um perfil Github</label>
          <input
            type="text"
            name="gitUser"
            placeholder="Usuário Github"
            onChange={handleUserInput}
            value={user}

          />
          <Link to={`/before/perfil/${user}`}>
            <Button text="Encontrar" />

          </Link>

        </form>
      </div>
      <Outlet />
    </>

  );
}



{/*
  type FormData = {
    name: string;

  }

  const [fullName, setFullName] = useState<string>();

  const [formData, setFormData] = useState<FormData>({
    name: ''
  });

  //pegando os dados que digitei
  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;

    setFormData({ ...formData, [name]: value })


  }


  function handleFormSubmit(event: any) {
    event.preventDefault();
    setFullName(formData.name);

  }


  return (
    <>
      <div className='container card'>
        <div className='text-card'>
          Encontre um perfil Github
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className='pesquisar'>

            <input id='placeholder-text'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
              type="text"
              placeholder='Usuário Github'

            />
          </div>
          <div>
            <Link to={`/before/perfil/${fullName}`}>
              <button type='submit'> "Encontrar"  </button>
            </Link>
          </div>
        </form>

        <h2>{fullName}</h2>
      </div>
      <Outlet />
    </>
  );
  */}

