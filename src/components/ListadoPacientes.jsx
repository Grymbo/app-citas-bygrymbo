import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes}) => {

  console.log(pacientes);

  return (
    <div className=" md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll mx-5">
        <h2 className=" font-black text-3xl text-center">
          ListadoPacientes
        </h2>

        <p className=" text-xl mt-5 mb-10 text-center">
          Administra tus {''}
            <span className=" text-indigo-600 font-bold">
              Mascotas y Citas
            </span>
        </p>

        <Paciente/>
        
    </div>
  )
}

export default ListadoPacientes