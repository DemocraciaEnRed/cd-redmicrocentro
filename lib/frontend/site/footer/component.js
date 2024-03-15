import React, { Component } from 'react'
import { Link } from 'react-router'
import t from 't-component'
import config from 'lib/config'

export default class Footer extends Component {
  render () {
    return (
      <footer className='ext-footer'>
        <div className='footer-1 container'>
          <div className='col-md-8'>
            <div className='institutional'>
              <div className='logo gob'>
                <a href='/'><img height={40} src='/lib/frontend/site/footer/urbanismo-vivo.png' alt='Logo Urbanismo vivo' /></a>
                <a href='/'><img height={40} src='/lib/frontend/site/footer/der.png' alt='Logo Democracia en red' /></a>

              </div>
              <p className='text-muted small'>
                Los contenidos de esta página están licenciados bajo <a href='https://www.gnu.org/licenses/gpl-3.0-standalone.html'>GNU General Public License v3.0</a>
              </p>
            </div>
          </div>
          <nav className='menu'>
            <Link to='/ayuda/como-funciona'>¿Cómo funciona?</Link>
            <Link to='/ayuda/acerca'>Acerca de este sitio</Link>
            <Link to='/ayuda/acerca'>Contacto</Link>
          </nav>
          <nav className='menu'>
            <Link to='/ayuda/terminos-y-condiciones'>{ t('help.tos.title')}</Link>
            <Link to='/ayuda/privacidad'>{ t('help.pp.title')}</Link>
          </nav>
        </div>
        <div className='footer-2'>
          <div className='container'>
            <div className='desarrollo'>
              <img height={30} src='/lib/frontend/site/footer/desarrollo.png' alt='Desarrollado por Democracia en Red' />
              <span className='text-muted small derechos'>Todos los derechos reservados 2023</span>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
