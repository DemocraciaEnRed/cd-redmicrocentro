import React, { Component, Fragment } from 'react'
import { Link } from 'react-router'

import Footer from 'lib/frontend/site/footer/component'

export default class Announcement extends Component {
  render () {
    return (
      <div>

        <main>
          <div className='breadcrumb-wrapper'>
            <div className='help-container container'>
              <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                  <Link to='/'>Consultas</Link>
                </li>
                <li className='breadcrumb-item active'>
                  <Link to='/convocatoria'>Convocatoria</Link>
                </li>
              </ol>
            </div>
          </div>

          <div className='banner-announcement'>
            <div className='container'>
              <h1>CONVOCATORIA <br /> ACTIVACIÓN URBANA <br /> RED MICROCENTRO</h1>
            </div>
          </div>
          <div className='container mt-3'>
            <div className=' row'>
              <div className='col-sm-9 col-xs-12'>
                <div className='container px-5' >
                  <h2 className='mt-0' id='convocatoria' >Convocatoria</h2>
                  <h4>¡Red Microcentro en acción!</h4>
                  <p>
                    Esta convocatoria invita a diversas organizaciones, instituciones, comercios y actores locales de Microcentro a participar de una activación colectiva del barrio. El objetivo es realizar un evento de intervenciones urbanas culturales en el espacio público y una agenda de actividades compartidas.
                  </p>
                  <p>
                    ¡Suma tu propuesta para la activación!
                  </p>
                  <h3 id='que-es' >¿Qué es Red Microcentro - Activación Urbana?</h3>
                  <p>
                    El objetivo de la Red es contribuir a la revitalización del Microcentro de Buenos Aires mediante la activación del espacio público y la participación ciudadana, a través de proyectos culturales
                  </p>
                  <p>
                    La convocatoria busca apoyar a los proyectos ganadores con diversos aportes: tanto logísticos, de difusión, permisos, y remuneración económica de acuerdo al proyecto propuesto.
                  </p>
                  <p>
                    Es una iniciativa promovida por el Gobierno de la Ciudad de Buenos Aires con el apoyo del Banco Interamericano de Desarrollo, y llevada a cabo por Urbanismo Vivo y Democracia en Red.
                  </p>
                  <h3 id='cuando' >¿Cuándo?</h3>
                  <p>
                    Se programa la realización del evento de activación la 3º semana de mayo de 2024. El mismo tendrá una duración de 2 días en horario extendido.
                  </p>
                  <h3 id='donde' >¿Dónde?</h3>
                  <p>
                    El polígono seleccionado para activar e intervenir será la zona de <strong>Microcentro entre Av. Córdoba, Av. Alem, Av. Corrientes y Av. 9 de Julio</strong>. En espacios públicos, espacios culturales, instituciones, galerías de arte, comercios locales (librerías, barberías, sexshops, etc.), galerías comerciales, gastronómicos, fundaciones, instituciones educativas, teatros, etc.
                  </p>
                  <h3 id='quienes'>¿Quiénes pueden participar?</h3>
                  <p>
                    Puede participar toda persona física, jurídica o grupo compuesto por personas mayores de 18 años con una propuesta cultural para la activación tanto programática como de intervención urbana de un espacio tanto público como privado del polígono seleccionado.
                  </p>
                  <h3>¿Qué se puede proponer?</h3>
                  <p>
                    Esta convocatoria está abierta a recibir toda propuesta que tenga contenido cultural que visibilice y ponga en valor algún espacio o temática cultural que aporte a la activación del Microcentro.
                  </p>
                  <p>
                    La idea es que las propuestas convoquen un público variado, tanto por género como por edad, que pueda atraer interés y presencia al microcentro y sus calles. Las propuestas pueden estar basadas en contenido artístico (musical, baile, literatura, teatro, audiovisual, gráfico, performativo, estético, moda, etc), arquitectura y urbanismo (recorridos, caminatas, exploraciones, diseño de nuevos espacios, mobiliario, etc.), historia y patrimonio, culturas regionales, gastronomía, etc.
                  </p>
                  <h2 id='categorias'>Categorías para participar:</h2>
                  <ul>
                    <li>
                      <h5>Agenda Cultural:</h5>
                      <ul>
                        <li><p> Muchas instituciones-organizaciones ya tienen sus agendas con actividades programadas y calendarizadas, este formato invita a sumarse a la Agenda Cultural de la Activación participando con esas actividades, que ya están programadas en la institución-organización.</p></li>
                        <li><p> No hay límite en la cantidad de proyectos seleccionados.</p></li>
                        <li><p> En ésta escala no contarán con el apoyo económico por parte de la Convocatoria.</p></li>
                      </ul>
                    </li>
                    <li>
                      <h5>Activación:</h5>
                      <ul>
                        <li><p> Este formato invita a proponer la realización de actividades programáticas o una intervención espacial para la el día de la activación.</p></li>
                        <li><p> Se seleccionarán hasta 10 proyectos.<br />Podrán solicitar un presupuesto de hasta $200.000.</p></li>
                      </ul>
                    </li>
                    <li>
                      <h5>Intervención:</h5>
                      <ul>
                        <li><p> Este formato apunta a una intervención en el espacio público de carácter físico, combinada con actividades comunitarias, diseñada y presupuestada para realizarse a lo largo de la activación. Si la intervención lo requiriera, se podría solicitar un permiso de corte de calle para la realización de la misma.</p></li>
                        <li><p> Se seleccionarán hasta 3 proyectos integrales.</p></li>
                        <li><p> En esta escala podrán solicitar un presupuesto de hasta $1.500.000.</p></li>
                      </ul>

                    </li>
                  </ul>
                  <p>
                    Además, se considerará seleccionar propuestas de manera parcial tanto en <strong>activaciones</strong> como en <strong>intervenciones</strong>. La intención es maximizar el impacto global de la convocatoria, brindando oportunidades a una gran variedad de propuestas.
                  </p>

                  <h3 id='fechas'>Fechas claves:</h3>
                  <ul>
                    <li><p>Lanzamiento convocatoria: 13 de marzo de 2024</p></li>
                    <li><p>Cierre convocatoria: 8 de abril de 2024</p></li>
                    <li><p>Anuncio de ganadores: 4º semana de abril de 2024</p></li>
                    <li><p>Evento Activación: 3º semana de mayo de 2024</p></li>
                  </ul>

                  <h3 id='como'>Cómo aplicar:</h3>
                  <p> Para que la aplicación a la convocatoria sea válida los/las participantes deberán cumplimentar el siguiente instructivo:</p>
                  <ul>
                    <li>
                      Enviar la propuesta vía formulario online a través del siguiente <a href='https://docs.google.com/forms/d/e/1FAIpQLSc6LZr-hBcH2QBOYIKEN6S7lQaDBkgL2GHvlppL9RdqT0sLzg/viewform' target='_blank'>link</a>. Se deberá completar el formulario con la información del proyecto.
                    </li>
                    <li>
                      El responsable del proyecto deberá inscribirse a la plataforma digital <a href='https://redmicrocentro.org/'>Red Microcentro</a>. Deberá enviar un mail a <a href='mailto:info@urbanismovivo.com.ar'>info@urbanismovivo.com.ar</a>  para la solicitud de creación de su usuario con el título: SOLICITUD USUARIO NUEVO.
                    </li>
                  </ul>

                  <h3 id='documentos'>Documentos para la convocatoria</h3>
                  <ul >
                    <li><a href='https://docs.google.com/document/d/1de-58Q06wjG2cW2d3gYbu0pxjLugO17RJXlPizGqpcA/edit?usp=sharing' target='_blank'>Bases de convocatoria</a></li>
                    <li><a href='https://docs.google.com/forms/d/e/1FAIpQLSc6LZr-hBcH2QBOYIKEN6S7lQaDBkgL2GHvlppL9RdqT0sLzg/viewform' target='_blank'>Formulario de aplicación</a></li>
                  </ul>

                </div>
              </div>
              <div className='col-xs-3 drawer hidden-sm-down'>
                <ul>
                  <li className={window.location.hash === '#convocatoria' ? 'active' : ''} ><Link href='#convocatoria'><h5>Convocatoria</h5></Link></li>
                  <li className={window.location.hash === '#que-es' ? 'active' : ''} ><Link href='#que-es'><p>¿Que es?</p></Link></li>
                  <li className={window.location.hash === '#cuando' ? 'active' : ''} ><Link href='#cuando'><p>¿Cuando?</p></Link></li>
                  <li className={window.location.hash === '#donde' ? 'active' : ''} ><Link href='#donde'><p>¿donde?</p></Link></li>
                  <li className={window.location.hash === '#quienes' ? 'active' : ''} ><Link href='#quienes'><p>¿Quiénes pueden participar?</p></Link></li>
                  <li className={window.location.hash === '#categorias' ? 'active' : ''} ><Link href='#categorias'><h5>Categorías</h5></Link></li>
                  <li className={window.location.hash === '#fechas' ? 'active' : ''} ><Link href='#fechas'><p>fechas clave</p></Link></li>
                  <li className={window.location.hash === '#como' ? 'active' : ''} ><Link href='#como'><h5>¿Cómo aplicar?</h5></Link></li>
                  <li className={window.location.hash === '#documentos' ? 'active' : ''} ><Link href='#documentos'><p>Documentos</p></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}
