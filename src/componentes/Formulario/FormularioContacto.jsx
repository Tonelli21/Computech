import { useState } from 'react';


function FormularioContacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 

    alert(`Nombre: ${formData.nombre}\nEmail: ${formData.email}\nMensaje: ${formData.mensaje}`);
  };

  return (
    <div className="Formulario">
      <h2>Formulario de Registro</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Telefono:</label>
          <input
            type="telefono"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="fechanacimiento">Fecha de Nacimiento:</label>
          <input
            type="date"
            id="fechanacimiento"
            name="fechanacimiento"
            value={formData.fechanacimiento}
            onChange={handleChange}
            required />
        </div>

        <button className='boton' type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default FormularioContacto;
