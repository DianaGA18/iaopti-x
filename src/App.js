import React, { useState } from 'react';
import './App.css';
import { MdHome } from 'react-icons/md';
import Home from './Home';



const App = () => {
  const [redirectToHome, setRedirectToHome] = useState(false);
		  
  const [formData, setFormData] = useState({
    folio: '',
    nombre: '',
    fechaNacimiento: '',
    genero: '',
    direccion: '',
    telefono: '',
    correo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  const handleClear = () => {
    setFormData({
      folio: '',
      nombre: '',
      fechaNacimiento: '',
      genero: '',
      direccion: '',
      telefono: '',
      correo: '',
  	 });
  };		  

  const handleIconClick = () => {
    // Cambiar el estado para redirigir a la página de inicio
    setRedirectToHome(true);
  }; 		  

  const handleBack = () => {
    // Cambiar el estado para regresar a la página principal
    setRedirectToHome(false);
  }; 

  if (redirectToHome) {
    return <Home onBack={handleBack} />;
  }  

  return (
    <div className="app-container">
		<header className="header1">
        <img src="logo.png" alt="Logo" className="logo1" />
		  <MdHome className="icon_home" onClick={handleIconClick} size={30} style={{ cursor: 'pointer' }} />
      </header>
			 
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
			 <h1>Datos del paciente</h1>
          <input
            type="text"
            id="folio"
            name="folio"
			 	placeholder="Folio"
            value={formData.folio}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="nombre"
            name="nombre"
			   placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            id="fechaNacimiento"
            name="fechaNacimiento"
            value={formData.fechaNacimiento}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="genero">Género:</label>
          <select
            id="genero"
            name="genero"
            value={formData.genero}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="text"
            id="direccion"
            name="direccion"
			   placeholder="Direccion"
            value={formData.direccion}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            id="telefono"
            name="telefono"
			 	placeholder="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="correo"
            name="correo"
			   placeholder="email@example.com"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group buttons">
			 <button type="button" onClick={handleClear}>Limpiar</button>
			 <button type="submit">Guardar</button>
        </div>
      </form>

		<footer className="footer2">
        <h3>Informacion de Contacto:</h3>
        <p>Telefono: (56) 1699-0155 </p>
        <p>Correo Electronico: kube.solutions23@gmail.com</p>
		  <p>Direccion:Jilotepec, C.P. 54240, Jilotepec de Molina Enríquez.</p>
      </footer>	 
    </div>
  );
};

export default App;

