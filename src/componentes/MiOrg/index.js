import "./MiOrg.css"
const MiOrg = (props) => {
    //Estado - hooks
    //useState
    // const [mostrar, actualizarNombre] = useState(true)
    // console.log("Mostrar/Ocultar formulario", !mostrar)
    // const manejarClick = () =>{
    //     console.log("Mostrar/Ocultar formulario", !mostrar)
    //     actualizarNombre(!mostrar)
    // }
    return <section className="orgSection">
        <h3 className="title">Mi Organizacion </h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg