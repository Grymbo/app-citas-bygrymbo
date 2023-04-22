import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, elminarPaciente}) => {

  return (
    <div className=" md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll mx-5">

        {pacientes && pacientes.length ? (
          
          <>
            <h2 className=" font-black text-3xl text-center">
              ListadoPacientes
            </h2>

            <p className=" text-xl mt-5 mb-10 text-center">
              Administra tus {''}
                <span className=" text-indigo-600 font-bold">
                  Mascotas y Citas
                </span>
            </p>

            {pacientes.map((paciente) => (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                elminarPaciente={elminarPaciente}
              />
            ))}
          </>

        ) : (
          <>
            <h2 className=" font-black text-3xl text-center">
              No hay pacientes
            </h2>

            <p className=" text-xl mt-5 mb-10 text-center">
              Comienza agregando {''}
                <span className=" text-indigo-600 font-bold">
                  nuevas Mascotas y Citas
                </span>
            </p>
          </>
        )}

        

        
        
    </div>
  )
}

export default ListadoPacientes