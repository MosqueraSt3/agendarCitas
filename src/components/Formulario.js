import React, { Fragment, useState } from "react";

const Formulario = () => {

    // Crear State de Citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario : '',
        fecha : '',
        hora : '',
        sintomas : ''
    })

    // state Error
    const [error, actualizarError] = useState(false)

    // Funcion que se ejecuta cada que el usuario escribe en un input
    const handleChange = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    // Extraer valores
    const {
        mascota,
        propietario,
        fecha,
        hora,
        sintomas
    } = cita

    // Cuando se envia el formulario
    const submitCita = e => {
        e.preventDefault()

        // Validar
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' ||
            hora.trim() === '' || sintomas.trim() === '') {
                return actualizarError(true)
        }

        // Asignar un Id
    }

    return (
        <Fragment>
            <h1>Crear Cita</h1>

            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handleChange}
                    value={mascota}
                />

                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la mascota"
                    onChange={handleChange}
                    value={propietario}
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                />

                <label>Descripcion</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={handleChange}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
    )
}

export default Formulario