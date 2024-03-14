import React, { Component } from 'react'
import config from 'lib/config'

export default class Announcement extends Component {
  render () {
    return (
      <div className='container px-5' >
        <h1> PLATAFORMA</h1>
        <h2>1. CONVOCATORIA:</h2>
        {/* <p>  Pantalla que tiene la info de la convocatoria y acceso a las BASES  y al FORMULARIO. Eventualmente FAQs </p> */}
        <br />
        <h3 className='my-1'>CONVOCATORIA</h3>
        <h3 className='my-1'>ACTIVACIÓN URBANA</h3>
        <h3 className='my-1'>RED MICROCENTRO</h3>
        <br />
        <h4>¡Red Microcentro en acción!</h4>
        <p>
          Esta convocatoria invita a diversas organizaciones, instituciones, comercios y actores locales de Microcentro a participar de una activación colectiva del barrio. El objetivo es realizar un evento de intervenciones urbanas culturales en el espacio público y una agenda de actividades compartidas.
        </p>
        <p>
          ¡Suma tu propuesta para la activación!
        </p>
        <h4>¿Qué es Red Microcentro - Activación Urbana?</h4>
        <p>
          El objetivo de la Red es contribuir a la revitalización del Microcentro de Buenos Aires mediante la activación del espacio público y la participación ciudadana, a través de proyectos culturales
        </p>
        <p>
          La convocatoria busca apoyar a los proyectos ganadores con diversos aportes: tanto logísticos, de difusión, permisos, y remuneración económica de acuerdo al proyecto propuesto.
        </p>
        <p>
          Es una iniciativa promovida por el Gobierno de la Ciudad de Buenos Aires con el apoyo del Banco Interamericano de Desarrollo, y llevada a cabo por Urbanismo Vivo y Democracia en Red.
        </p>
        <h4>¿Cuándo?</h4>
        <p>
          Se programa la realización del evento de activación la 3º semana de mayo de 2024. El mismo tendrá una duración de 2 días en horario extendido.
        </p>
        <h4>¿Dónde?</h4>
        <p>
          El polígono seleccionado para activar e intervenir será la zona de <strong>Microcentro entre Av. Córdoba, Av. Alem, Av. Corrientes y Av. 9 de Julio</strong>. En espacios públicos, espacios culturales, instituciones, galerías de arte, comercios locales (librerías, barberías, sexshops, etc.), galerías comerciales, gastronómicos, fundaciones, instituciones educativas, teatros, etc.
        </p>
        <h4>¿Quiénes pueden participar?</h4>
        <p>
          Puede participar toda persona física, jurídica o grupo compuesto por personas mayores de 18 años con una propuesta cultural para la activación tanto programática como de intervención urbana de un espacio tanto público como privado del polígono seleccionado.
        </p>
        <h4>¿Qué se puede proponer?</h4>
        <p>
          Esta convocatoria está abierta a recibir toda propuesta que tenga contenido cultural que visibilice y ponga en valor algún espacio o temática cultural que aporte a la activación del Microcentro.
        </p>
        <p>
          La idea es que las propuestas convoquen un público variado, tanto por género como por edad, que pueda atraer interés y presencia al microcentro y sus calles. Las propuestas pueden estar basadas en contenido artístico (musical, baile, literatura, teatro, audiovisual, gráfico, performativo, estético, moda, etc), arquitectura y urbanismo (recorridos, caminatas, exploraciones, diseño de nuevos espacios, mobiliario, etc.), historia y patrimonio, culturas regionales, gastronomía, etc.
        </p>
        <h3>Categorías para participar:</h3>
        <ul>
          <li>
            <h5>Agenda Cultural:</h5>
            <p>
              Muchas instituciones-organizaciones ya tienen sus agendas con actividades programadas y calendarizadas, este formato invita a sumarse a la Agenda Cultural de la Activación participando con esas actividades, que ya están programadas en la institución-organización.
            </p>
            <p>
              No hay límite en la cantidad de proyectos seleccionados.
            </p>
            <p>
              En ésta escala no contarán con el apoyo económico por parte de la Convocatoria.
            </p>
          </li>
          <li>
            <h5>Activación:</h5>
            <p>
              Este formato invita a proponer la realización de actividades programáticas o una intervención espacial para la el día de la activación.
            </p>
            <p>
              Se seleccionarán hasta 10 proyectos.
            </p>
            <p>
              Podrán solicitar un presupuesto de hasta $200.000.
            </p>
          </li>
          <li>
            <h5>Intervención:</h5>
            <p>
              Este formato apunta a una intervención en el espacio público de carácter físico, combinada con actividades comunitarias, diseñada y presupuestada para realizarse a lo largo de la activación. Si la intervención lo requiriera, se podría solicitar un permiso de corte de calle para la realización de la misma.
            </p>
            <p>
              Se seleccionarán hasta 3 proyectos integrales.
            </p>
            <p>
              En esta escala podrán solicitar un presupuesto de hasta $1.500.000.
            </p>
          </li>
        </ul>
        <p>
          Además, se considerará seleccionar propuestas de manera parcial tanto en <strong>activaciones</strong> como en <strong>intervenciones</strong>. La intención es maximizar el impacto global de la convocatoria, brindando oportunidades a una gran variedad de propuestas.
        </p>

        <h4>Fechas claves:</h4>
        <p>Lanzamiento convocatoria: 13 de marzo de 2024</p>
        <p>Cierre convocatoria: 8 de abril de 2024</p>
        <p>Anuncio de ganadores: 4º semana de abril de 2024</p>
        <p>Evento Activación: 3º semana de mayo de 2024</p>

        <h4>Cómo aplicar:</h4>
        <p> Para que la aplicación a la convocatoria sea válida los/las participantes deberán cumplimentar el siguiente instructivo:</p>
        <ul>
          <li>
            Enviar la propuesta vía formulario online a través del siguiente <a href='https://docs.google.com/forms/d/e/1FAIpQLSc6LZr-hBcH2QBOYIKEN6S7lQaDBkgL2GHvlppL9RdqT0sLzg/viewform' target='_blank'>link</a>. Se deberá completar el formulario con la información del proyecto.
          </li>
          <li>
            El responsable del proyecto deberá inscribirse a la plataforma digital <a href='https://redmicrocentro.org/'>Red Microcentro</a>. Deberá enviar un mail a <a href='mailto:info@urbanismovivo.com.ar'>info@urbanismovivo.com.ar</a>  para la solicitud de creación de su usuario con el título: SOLICITUD USUARIO NUEVO.
          </li>
        </ul>

        <h4>Documentos para la convocatoria</h4>
        <ul >
          <li><a href='https://docs.google.com/document/d/1de-58Q06wjG2cW2d3gYbu0pxjLugO17RJXlPizGqpcA/edit?usp=sharing' target='_blank'>Bases de convocatoria</a></li>
          <li><a href='https://docs.google.com/forms/d/e/1FAIpQLSc6LZr-hBcH2QBOYIKEN6S7lQaDBkgL2GHvlppL9RdqT0sLzg/viewform' target='_blank'>Formulario de aplicación</a></li>
        </ul>

        <h2>2. INTERACCIÓN</h2>
        <h3>AHORA</h3>
        <h4>2.1 Foro Debate</h4>
        <p>¿Qué persona, organización o institución no puede faltar para activar culturalmente el microcentro?</p>
        <h3>POST TALLER</h3>
        <h4>2.2 Jerarquizar</h4>
        <h5>A. HORARIO</h5>
        <p>
          ¿Qué horario te parece que tendría más impacto de asistencia de público?
          <br />
          Realizar actividades de….
          <br />
          Mañana / Mediodía / Tarde / Noche
        </p>

        <h5>B. SEMANA</h5>
        <p>
          ¿Qué momento de la semana te parece mejor?
          <br />
          Realizar actividades de….
          <br />
          Día de semana / Fin de Semana
        </p>

        <h5>¿Qué día de la semana es ?</h5>
        <p>
          Lunes
          <br />
          Martes
          <br />
          Miércoles
          <br />
          Jueves
          <br />
          Viernes
          <br />
          Sábado
          <br />
          Domingo
        </p>

        <h5>C. PÚBLICO</h5>
        <p>
          ¿Qué público hay que convocar en especial?
          <br />
          Infancias / Jóvenes / Gente Adulta / Tercera edad
        </p>

        <h5>C. LUGARES</h5>
        <p>
          ¿Qué lugares te parece que son ideales para activar culturalmente el microcentro?
          <br />(
          emergen del taller)
        </p>

        <h4>2.3 Rango</h4>
        <h5>PROGRAMACIÓN</h5>
        <p>
        Toda actividad cultural es mejor si está acompañada de una propuesta gastronómica
        <br />
        A FAVOR / EN CONTRA
        </p>

        <h5>POSIBILIDADES:</h5>
        <p>Voto: contiene las opciones “a favor”, “abstención” y “en contra”.</p>

        <ul>
          <li>Encuesta: se presenta un listado de opciones para elegir una de ellas.</li>
          <li>Causa: contiene una opción que permite apoyar la causa presentada en el eje.</li>
          <li>Rango: en base a una pregunta, se posiciona la respuesta en un rango que escala desde “no estoy de acuerdo” hasta “estoy a favor”.</li>
          <li>Jerarquía: de una lista de opciones, esta opción permite ordenarlas de mayor a menor en base a un criterio.</li>
        </ul>
        <div className='image-wrapper'>
          <img src='/lib/frontend/site/announcement/vote.png' alt='vote' />
        </div>
      </div>
    )
  }
}
