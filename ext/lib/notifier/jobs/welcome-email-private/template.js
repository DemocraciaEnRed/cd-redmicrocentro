const config = require('lib/config')
const utils = require('lib/backend/utils')

const html = require('es6-string-html-template').html
const raw = require('es6-string-html-template').raw
// para inline-ar estilos css - https://github.com/Automattic/juice
const juice = require('juice')

const emailTemplate = require('ext/lib/notifier/responsive-html-email-template');
const buttonTemplate = require('ext/lib/notifier/responsize-email-button-template');

const baseUrl = utils.buildUrl(config)

module.exports = ({
  userName,
  userEmail,
  password
}) => emailTemplate({
  body: html`
    <p>¡Hola <strong>${userName}</strong>!</p>
    <p>¡Te damos la bienvenida a <strong>${config.organizationName} - Plataforma Participativa</strong>. Han hecho tu registro para que comiences a participar.</p>
    <p>Te estás sumando a este espacio como parte de una red de personas y organizaciones para potenciar el desarrollo de una comunidad más integrada y colaborativa en Microcentro. Esta plataforma es tu espacio digital para comunicarte, votar, intercambiar ideas y ser parte de las decisiones que darán forma a la Red Microcentro y el evento de Activación Urbana Cultural.</p>
    <p>Tu cuenta: 
        <ul>
          <li>Usuario: ${userEmail}</li>
          <li>Contraseña temporal: ${password}</li>
        </ul>
    </p>
    ${buttonTemplate({
      url: baseUrl,
      text: 'Entrar a la plataforma'
    })}    
    <p>Te recomendamos cambiar tu contraseña tan pronto como inicies sesión por primera vez. Personalizar tu contraseña asegura la seguridad de tu cuenta y la confidencialidad de tu participación.</p>
    <p>¿Qué podes hacer en la Plataforma?
        <ul>
          <li>Explorá: Descubrí los espacios de diálogo, intercambio y votación.</li>
          <li>Participá: Unite a conversaciones, compartí tus ideas y votá por las propuestas que más te entusiasman.</li>
          <li>Conectate: Establece conexiones con otros participantes y fortalece la colaboración.</li>
        </ul>
    </p>   
    <p>¡Animate a explorar la plataforma y hacer escuchar tu voz!</p> 
    <p>Si tenés alguna pregunta, no dudes en responder a este correo o escribirnos a urbanismovivo@gmail.com.</p> 
    <p>¡Gracias por ser parte de Red Microcentro!</p> 
    <p>Saludos,</p> 
    <p>Urbanismo Vivo</p> 
    <p>RED Microcentro - Plataforma Participativa</p> 
  `
})
