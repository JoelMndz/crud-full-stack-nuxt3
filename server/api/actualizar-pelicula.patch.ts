import { Pelicula } from "../models/pelicula.model"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  await Pelicula.findByIdAndUpdate( body._id,{
    nombre: body.nombre,
    descripcion: body.descripcion
  })
  
  return body
})