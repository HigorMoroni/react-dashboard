import React from 'react';

import SideMenu from '../../assets/components/SideMenu/SideMenu';
import Header from '../../assets/components/Header/Header';
import PageSelect from '../../assets/components/PageSelect/PageSelect';

import User from "../../assets/image/me.jpg";

import './styles.scss';


const Dashboard = () => {
  return (
    <>
      <SideMenu />
      <Header />
      <section className="content">
        <h1>Visão Geral</h1>
        <div className="geral">
          Cards
        </div>
        <h2>Clientes Cadastrados</h2>
        <div className="clientes">
          <table>
            <tbody>
              <tr>
                <div className="row">
                  <td className="client-data">
                    <div className="user-image">
                      <img src={User} alt="User"/>
                    </div>
                    <span className="client">Ronaldo Abreu</span>
                  </td>
                  <td className="client-email"><span className="client">ronaldo.abreu@meusite.com.br</span></td>
                  <td className="client-infos">
                    <span className="phone client">(14) 99745-1234</span>
                    <span className="value client">R$ 251,59</span>
                  </td>
                  <td className="client-status"><span className="client">Inadimplente</span></td>
                </div>
              </tr>
              <tr>
                <div className="row">
                  <td className="client-data">
                    <div className="user-image">
                      <img src={User} alt="User"/>
                    </div>
                    <span className="client">Ronaldo Abreu</span>
                  </td>
                  <td className="client-email"><span className="client">ronaldo.abreu@meusite.com.br</span></td>
                  <td className="client-infos">
                    <span className="phone client">(14) 99745-1234</span>
                    <span className="value client">R$ 251,59</span>
                  </td>
                  <td className="client-status"><span className="client">Inadimplente</span></td>
                </div>
              </tr><tr>
                <div className="row">
                  <td className="client-data">
                    <div className="user-image">
                      <img src={User} alt="User"/>
                    </div>
                    <span className="client">Ronaldo Abreu</span>
                  </td>
                  <td className="client-email"><span className="client">ronaldo.abreu@meusite.com.br</span></td>
                  <td className="client-infos">
                    <span className="phone client">(14) 99745-1234</span>
                    <span className="value client">R$ 251,59</span>
                  </td>
                  <td className="client-status"><span className="client">Inadimplente</span></td>
                </div>
              </tr><tr>
                <div className="row">
                  <td className="client-data">
                    <div className="user-image">
                      <img src={User} alt="User"/>
                    </div>
                    <span className="client">Ronaldo Abreu</span>
                  </td>
                  <td className="client-email"><span className="client">ronaldo.abreu@meusite.com.br</span></td>
                  <td className="client-infos">
                    <span className="phone client">(14) 99745-1234</span>
                    <span className="value client">R$ 251,59</span>
                  </td>
                  <td className="client-status"><span className="client">Inadimplente</span></td>
                </div>
              </tr><tr>
                <div className="row">
                  <td className="client-data">
                    <div className="user-image">
                      <img src={User} alt="User"/>
                    </div>
                    <span className="client">Ronaldo Abreu</span>
                  </td>
                  <td className="client-email"><span className="client">ronaldo.abreu@meusite.com.br</span></td>
                  <td className="client-infos">
                    <span className="phone client">(14) 99745-1234</span>
                    <span className="value client">R$ 251,59</span>
                  </td>
                  <td className="client-status"><span className="client">Inadimplente</span></td>
                </div>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <PageSelect/>
    </>
  );
}

export default Dashboard;