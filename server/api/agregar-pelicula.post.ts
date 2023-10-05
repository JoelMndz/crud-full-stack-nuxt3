import { Pelicula } from "../models/pelicula.model"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const peliculaCreada = await Pelicula.create({
    nombre: body.nombre,
    descripcion: body.descripcion
  })
  
  return peliculaCreada
})