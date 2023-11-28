import { useEffect, useState } from 'react';
import { PerfilDTO } from '../../../../models/perfil';
import { useNavigate, useParams } from 'react-router-dom';
import { findUser } from '../../../../Services/product-service';
import './styles.css'

export default function Perfil() {
  const [profile, setProfile] = useState<PerfilDTO>([]);

  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    findUser(params.user).then((response) => {
      setProfile(response.data);
    })
      .catch(() => {
        navigate("/before/perfil/çç");
      })

  }, [profile]);

  return (
    <div className='profile'>
      <div className='profile-img'>
        <img src={profile.avatar_url} alt="image-profile" />
      </div>
      <div className='profile-data'>
        <h3> Informações</h3>
        <ul>
          <li>Perfil: {profile.url}</li>
          <li>Seguidores: {profile.followers}</li>
          <li>Localidade: {profile.location}</li>
          <li>Nome: {profile.name}</li>
        </ul>
      </div>
    </div>


  );

}