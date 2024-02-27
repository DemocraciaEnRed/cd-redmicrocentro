import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, Link } from 'react-router'
import Jump from 'jump.js'
import userConnector from 'lib/frontend/site/connectors/user'
import config from 'lib/config'
import Footer from 'lib/frontend/site/footer/component'
import forumStore from 'ext/lib/stores/forum-store/forum-store'
import ForumContainer from './forum-container/component'
import ForumCard from './forum-card/component'
import Search from './search/component'

class HomeMultiForum extends Component {
  constructor (props) {
    super(props)

    this.state = {
      page: 0,
      activeFilter: 'byDate',
      forums: []
    }
  }

  componentDidMount () {
    const {
      activeFilter
    } = this.state;

    forumStore
      .filterBy(activeFilter)
      .then((forums) => {
        this.setState({
          forums,
          // las páginas son de a 3 (definido en ext/lib/api/filter.js), entonces si devuelve 3, tal vez hay más
          showMore: forums.length === 3
        })
      })
      .catch(console.error)
  }

  handleClick = (name) => {
    const { page } = this.state;

    forumStore
      .filterBy(name)
      .then((forums) => {
        this.setState({
          page,
          forums,
          activeFilter: name
        })
      })
      .catch(console.error)
  }

  handleMoreClick = () => {
    const {
      page,
      activeFilter
    } = this.state;

    forumStore
      .filterBy(activeFilter, page + 1)
      .then((forums) => {
        this.setState({
          page: this.state.page + 1,
          forums: [...this.state.forums, ...forums],
          showMore: forums.length === 3
        });
      })
      .catch(console.error)
  }

  handleButtonClick = () => {
    Jump('#consultas')
    // const consultasNode = ReactDOM.findDOMNode(this.refs.consultas)
    // window.scrollTo(0, consultasNode.offsetTop)
  }

  render () {
    if (this.props.user.state.pending) return null

    const {
      showMore,
      activeFilter,
      forums
    } = this.state

    return (
      <div className='ext-site-home-multiforum'>
        <section
          className='cover jumbotron'
          style={{
            backgroundImage: `url('${config.imgs.backgroundHome}')`
          }}>
          <div className='jumbotron_body'>
            <div className='container'>
              <img
                src={config.imgs.logoCentralHome}
                alt="Logo"
              />
              <p className='lead highlight'>
                {config.bajadaPlataforma}
              </p>
              {/* <button
                className='btn btn-primary'
                onClick={this.handleButtonClick}
              >
                Quiero participar
              </button> */}
            </div>
          </div>
        </section>
        <section id="call-to-action">
          <div className='lead-paragraph'>
              <h2 className="skyblue fw-bolder">{config.organizationName}</h2>
              <div className="row">
                <p className="col-md-3"></p>
                <p className="col-md-6 explain small">
                  Red-Microcentro es una plataforma para discutir, construir y movilizarnos alrededor de iniciativas que marcan la vida en el corazón de Buenos Aires.
                </p>
              </div>
              <br />
              <h6 className="skyblue fw-bolder">¿Cómo podés participar?</h6>
          </div>
          <div className='section-icons col-lg-10 offset-lg-1'>
            <div className='row'>
              <div className='col-md-4'>
                <div className="section-icon my-2">
                    <img
                      className='icon'
                      src={config.imgs.iconoHomeInformate}
                      alt='Informate'
                    />
                    <div className='text'>
                      <h5>Informate</h5> sobre las consultas disponibles
                    </div>

                </div>
              </div>
              <div className='col-md-4'>
                <div className="section-icon my-2">
                    <img
                      className='icon'
                      src={config.imgs.iconoHomeDebate}
                      alt='Debate'
                    />
                    <div className='text'>
                      <h5>Debatí</h5> con tu opinión, tu voto, tu comentario
                    </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className="section-icon my-2">
                <img
                    className='icon'
                    src={config.imgs.iconoHomePrioriza}
                    alt='Proponé'
                  />
                  <div className='text'>
                    <h5>Priorizá</h5> en los ejes de cada consulta
                  </div>
                  </div>
              </div>
            </div>
          </div>

        </section>

        <div className='forums-list' id='consultas'>
          <h2 className='forums-list-title'>Consultas disponibles</h2>

          <Search />


          <div className="content-center">
            <div className="btn-group btn-group-sm dropdown-element" role="group" aria-label="Filtros">
              <ul className='dropdown-content'>
                <li
                  className={`btn btn-item-dropdown mx-1 ${activeFilter === 'byDate' ? 'btn-active' : 'btn-secondary'}`}
                  onClick={this.handleClick.bind(this, 'byDate')}
                >
                  Nuevas
                </li>
                <li
                  className={`btn btn-item-dropdown mx-1 ${activeFilter === 'byPopular' ? 'btn-active' : 'btn-secondary'}`}
                  onClick={this.handleClick.bind(this, 'byPopular')}
                >
                  Mayor Participación
                </li>
                <li
                  className={`btn btn-item-dropdown mx-1 ${activeFilter === 'byClosed' ? 'btn-active' : 'btn-secondary'}`}
                  onClick={this.handleClick.bind(this, 'byClosed')}
                >
                  Finalizadas
                </li>
              </ul>
            </div>
          </div>


          {!forums.length && <h3 className="no-result content-center">No hay resultados</h3>}

          {!!forums.length && forums.map((forum, key) => (
            <ForumContainer forum={forum} key={forum.id} />
          ))}
          {!!forums.length && showMore &&
            <div className='row content-center'>
              <button className="btn btn-active show-more" onClick={this.handleMoreClick}>
                Cargar más consultas
              </button>
            </div>
          }
        </div>
        <Footer />
      </div>
    )
  }
}

export default userConnector(HomeMultiForum)
