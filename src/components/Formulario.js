import React, { Fragment, useState } from "react";

const Formulario = () => {

    // Crear State de Citas
    const [cita, actualizarCita] = useState({})

    // Funcion que se ejecuta cada que el usuario escribe en un input
    const handleChange = () => {
        console.log('escribiendo');
    }
    return (
        <Fragment>
            <h1>Crear Cita</h1>

            <form>
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handleChange}
                />

                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la mascota"
                    onChange={handleChange}
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                />

                <label>Descripcion</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={handleChange}
                ></textarea>

                <button
                    type="button"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
    )
}

export default Formulario