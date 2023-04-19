
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

      <form action="" className=" bg-white shadow-md rounded-lg py-10 px-5">
        <div>
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
      </form>

    </div>
  )
}

export default Formulario