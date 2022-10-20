import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars} from 'react-icons/fa'

import { useAuthentication } from '../hooks/useAuthentication'

import { useAuthValue } from '../context/authContext'

//CSS
import styles from "./Navbar.module.css"

const hamburger = [
  {name: 'hamburger', icon: <FaBars/>}
]

const Navbar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Lider Madeiras
      </NavLink>

      {hamburger.map((bar) => (
        <button className={styles.hamburger} 
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
          {bar.icon}
        </button>
      ))}
      <div className={isNavExpanded ? 
          styles.exitBar : 
          styles.exitBarExpanded}>
        <button 
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>x</button>
      </div>

      <div 
        className={
          isNavExpanded ? styles.navbar_menu : styles.navbar_menu_expanded 
      }>
        <ul>
          <li>
              <NavLink to="/" className={({isActive}) => (isActive ? styles.active : "")}
                onClick={() => {
                  isNavExpanded(false)
                }}
              >
                Home
              </NavLink>
          </li>

          {/* 
          <li>
              <NavLink to="/casas" className={({isActive}) => (isActive ? styles.active : "")}
              onClick={() => {
                isNavExpanded(false)
              }}>
                Casas
              </NavLink>
          </li>
          */}

            {!user && (
              <>
                <li className={styles.login}>
                  <NavLink to="/login" className={({isActive}) => (isActive ? styles.active : "")}
                  onClick={() => {
                    isNavExpanded(false)
                  }}>
                    Entrar
                  </NavLink>
                </li>
              </>
            )}

            {user && (
              <> 
                <li>
                  <NavLink to="/dashboard" className={({isActive}) => (isActive ? styles.active : "")}
                  onClick={() => {
                    isNavExpanded(false)
                  }}>
                    Dashboard
                  </NavLink>
                </li>
              </>
            )}
          
            <li>
              <NavLink to="/about" className={({isActive}) => (isActive ? styles.active : "")}
              onClick={() => {
                isNavExpanded(false)
              }}>
                Sobre
              </NavLink>
            </li>

            {user && (
              
                <li
                onClick={() => {
                  isNavExpanded(false)
                }}>
                  <button 
                  onClick={logout}
                  className={styles.btnLogout}
                  >
                    Sair
                  </button>
                </li>
              
            )}
        </ul>
      </div>
      
    </nav>
  
    
  )
}

export default Navbar