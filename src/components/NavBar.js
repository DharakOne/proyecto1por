import React from "react"


export default function NavBar(){
    return(
        <section className="NavBar">
        <div className="container" >
            <div className="navbar-brand" >Amazing Wed</div>
            <div className="navbar-link">  
            {["Inicio","Sobre Nosotros","Servicios","Contactanos"].map(Link=>(
                <div className="link">
                    {Link}
                </div> 
            ))}
            </div>
            <div className="redes-sociales">
                <i className="icon">FB</i>
                <i className="icon">TT</i>
                <i className="icon">IG</i>
            </div>
        </div>
        </section>
    )
}