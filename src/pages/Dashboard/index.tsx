import React, {useEffect, useState} from 'react';
import api from '../../services/api';

import Cards from '../../assets/components/Cards/Cards';
import Header from '../../assets/components/Header/Header';
import PageSelect from '../../assets/components/PageSelect/PageSelect';
import SideMenu from '../../assets/components/SideMenu/SideMenu';

import './styles.scss';

interface Users {
  id: string,
  name: string,
  email: string,
  phone: string,
  amount: string,
  photo_url: string,
  status: string
}

const Dashboard = () => {
  const userid = "1";
  const [userImage, setUserImage] = useState<string>('');
  const [totalClientes, setTotalClientes] = useState<string>('');
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    api.get(`profile/${userid}`).then(response => {
      setUserImage(response.data.photo_url);
    })
    api.get('users').then(response => {
      setTotalClientes(response.data.total);
      setUsers(response.data.users);
    })
  }, []);
  return (
    <>
      <SideMenu />
      <Header userImage={userImage}/>
      <section className="content">
        <h1>Visão Geral</h1>
        <div className="geral">
          <Cards
            infos={[
              "Total de clientes", totalClientes,
              "Clientes inadimplentes", "5",
              "Clientes adimplentes", "10",
              "Total arrecadado", "R$ 4.162,26"
            ]}
          />
        </div>
        <h2>Clientes Cadastrados</h2>
        <div className="clientes">
          <table>
            <tbody>
              {users.map(user => (
                <tr>
                  <div className="row">
                    <td className="client-data">
                      <div className="user-image">
                        <img src={user.photo_url} alt={user.name}/>
                      </div>
                      <span className="client">{user.name}</span>
                    </td>
                    <td className="client-email"><span className="client">{user.email}</span></td>
                    <td className="client-infos">
                      <span className="phone client">{user.phone}</span>
                      <span className="value client">{`R$ ${user.amount.replace('.',',')}`}</span>
                    </td>
                    <td className="client-status"><span className="client">{user.status==="0"?"Adimplente":"Inadimplente"}</span></td>
                  </div>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <PageSelect/>
    </>
  );
}

export default Dashboard;