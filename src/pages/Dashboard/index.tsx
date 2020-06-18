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
  const userid = "15";

  const [userImage, setUserImage] = useState<string>('');
  const [totalClientes, setTotalClientes] = useState<string>('');
  const [clientsSpace, setClientsSpace] = useState<number>(0);
  const [clientesInadimplentes, setClientesInadimplentes] = useState<string>('');
  const [clientesAdimplentes, setClientesAdimplentes] = useState<string>('');
  const [totalArrecadado, setTotalArrecadado] = useState<string>('');
  const [users, setUsers] = useState<Users[]>([]);

  const resizeWindow = () => {
    const windowSize = window.innerHeight;
    setClientsSpace(Math.floor((windowSize-360)/50));
  };
  useEffect(() => {
    let inadimplentes=0, adimplentes=0;
    users.map(user => user.status==="0"?adimplentes++:inadimplentes++)
    setClientesInadimplentes(String(inadimplentes));
    setClientesAdimplentes(String(adimplentes));
    setTotalArrecadado(
      String(users.reduce((contador, user) => {
        return contador + Number(user.amount)
      }, 0).toFixed(2))
    );
  },[users]);

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

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
              "Clientes inadimplentes", clientesInadimplentes,
              "Clientes adimplentes", clientesAdimplentes,
              "Total arrecadado", `R$ ${Number(totalArrecadado).toLocaleString('pt-BR')}`
            ]}
          />
        </div>
        <h2>Clientes Cadastrados</h2>
        <div className="clientes">
          <table>
            <tbody>
              {users.map(user => {
                if (Number(user.id)>clientsSpace) return ('');
                const status = user.status==="0"?"Adimplente":"Inadimplente";
                const amount = Number(user.amount).toLocaleString('pt-BR');
                return (
                  <tr>
                  <div className="row">
                    <td className="client-data lg">
                      <div className="user-image">
                        <img src={user.photo_url} alt={user.name}/>
                      </div>
                      <span className="client">{user.name}</span>
                    </td>
                    <td className="client-email sm"><span className="client">{user.email}</span></td>
                    <td className="client-phone md"><span className="client">{user.phone}</span></td>
                    <td className="client-amount sm"><span className="client">{amount}</span></td>
                    <td className="client-status sm">
                      <span className={`client ${user.status==="0"?"":"inadimplente"}`}>
                        {status}
                      </span>
                    </td>
                  </div>
                </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>
      <PageSelect
        totalClients={totalClientes}
        space={clientsSpace}
        atual={1}
      />
    </>
  );
}

export default Dashboard;