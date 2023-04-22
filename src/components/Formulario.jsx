import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])
  

  // 1genera un id aleatorio, para el uso de la key
  const generarId = () => {

    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Para validar nuestro formulario y poder enviarlo correctamente
    if( [nombre, propietario, email, alta, sintomas].includes('')){
      setError(true);

      return;
    } 

    setError(false);

    // Creando el objeto de Pacientes
    const objetoPacientes = {
      nombre,
      propietario,
      email,
      alta,
      sintomas,
    }

    if(paciente.id) {
      // Editando el registro
      objetoPacientes.id = paciente.id
      const pacienteActualizado = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPacientes : pacienteState)
      setPacientes(pacienteActualizado);
      setPaciente({});

    } else {
      // Nuevo registro
      objetoPacientes.id = generarId()
      setPacientes([...pacientes, objetoPacientes]);
    }

    // Reinicio del formulario
    setNombre('');
    setPropietario('');
    setEmail('');
    setAlta('');
    setSintomas('');
  }

  return (
    <div className=" md:w-1/2 lg:w-2/5 mx-5">

      <h2 className=" font-black text-3xl text-center">
        Seguimiento de Mascotas
      </h2>

      <p className=" text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
          <span className=" text-indigo-600 font-bold">Administralos</span>
      </p>

      <form 
        action="" 
        className=" bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}>

          {error && 
            <Error>
              <p>
                Todos los campos son obligatorios
              </p>
            </Error>
          }

        <div className=" mb-5">
          <label htmlFor="Mascota" className=" block text-gray-700 uppercase">
              Nombre Mascota
          </label>

          <input 
            id="Mascota"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre de la Mascota" 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className=" mb-5">
          <label htmlFor="Propietario" className=" block text-gray-700 uppercase">
              Nombre Propietario
          </label>

          <input 
            id="Propietario"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre del Propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)} 
          />
        </div>

        <div className=" mb-5">
          <label htmlFor="Email" className=" block text-gray-700 uppercase">
              Email
          </label>

          <input 
            id="Email"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email"
            placeholder="Email del Propietario" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className=" mb-5">
          <label htmlFor="alta" className=" block text-gray-700 uppercase">
              Fecha de alta
          </label>

          <input 
            id="alta"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date" 
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>

        <div className=" mb-5">
          <label htmlFor="sintomas" className=" block text-gray-700 uppercase">
              Sintomas
          </label>

          <textarea 
            id="sintomas" 
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas del paciente"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input 
          type="submit"
          className=" bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={paciente.id ? 'Guardar Cambios' : 'Agregar Mascota'} 
        />
      </form>

    </div>
  )
}

export default Formulario