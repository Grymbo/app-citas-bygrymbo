
const Formulario = () => {

  return (
    <div className=" md:w-1/2 lg:w-2/5">

      <h2 className=" font-black text-3xl text-center">
        Seguimiento de Mascotas
      </h2>

      <p className=" text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
          <span className=" text-indigo-600 font-bold">Administralos</span>
      </p>

      <form action="" className=" bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className=" mb-5">
          <label htmlFor="Mascota" className=" block text-gray-700 uppercase">
              Nombre Mascota
          </label>

          <input 
            id="Mascota"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre de la Mascota" 
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

          />
        </div>

        <input 
          type="submit"
          className=" bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value="Agregar Mascota" 
        />
      </form>

    </div>
  )
}

export default Formulario