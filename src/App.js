import React from 'react';
import './styles/App.css';
import Form from './Form';

class App extends React.Component {

  state = {
    personas: [
      { 
        id: 1,
        nombre: "Santiago",
        telefono: 11223344,
        deuda: true
      },
      { 
        id: 2,
        nombre: "Micaela",
        telefono: 44552233,
        deuda: true
      },
      { 
        id: 3,
        nombre: "Joaquín",
        telefono: 11994422,
        deuda: false
      },
      { 
        id: 4,
        nombre: "Miguel",
        telefono: 95672111,
        deuda: false
      },
      { 
        id: 5,
        nombre: "Pablo",
        telefono: 98765432,
        deuda: true
      }
    ]
  }

  agregarPersona = (nuevoNombre, telefono) => {
    //this.personas.push({ id: nuevoId, nombre: nuevoNombre });
    const persona = {
      id: this.state.personas.length + 1,
      nombre: nuevoNombre,
      telefono: telefono
    }

    console.log("Datos recibidos: ", persona);

    this.setState({
      personas: [...this.state.personas, persona]
    });
  }

  eliminarPersona = (id) =>{
    const nuevoArreglo = this.state.personas.filter(persona => persona.id !== id);
    this.setState({personas: nuevoArreglo});
  }

  actualizarPersona = (id) =>{
    const nuevoArreglo = this.state.personas.map(persona => {
      if(persona.id === id){
        persona.deuda = !persona.deuda;
      }
      return persona;
    });
    this.setState({personas: nuevoArreglo});
  }

  render(){
    return (
      <div>
      <h1>Bienvenido a la aplicación</h1>
        <div>
          <h2>Datos del visitante:</h2>

          <Form agregarPersona={this.agregarPersona} />

        </div>
        <br />
        <br />
        <div>
          <h2>Contactos</h2>
          <dl className="lista">
            { this.state.personas.map(i => 
              <div className="elementos" key={i.id}>
                <dt>Nombre: { i.nombre } </dt>
                <dd>ID: { i.id }</dd>
                <dd>Telefono: { i.telefono } </dd>
                <dd>Deuda: { i.deuda ?  'Si' : 'No' }</dd>
                <button onClick={this.eliminarPersona.bind(this, i.id)} className="boton">Eliminar</button>
                <button onClick={this.actualizarPersona.bind(this, i.id)} className="boton">Modificar</button>
              </div> ) }
          </dl>
        </div>
      </div>
    );
  }
}

export default App;
