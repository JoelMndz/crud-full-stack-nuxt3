import { Pelicula } from "~/server/models/pelicula.model"
import {SchemaType, SchemaTypes} from "mongoose";


export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  try {
    const peliculaEliminada = await Pelicula.findByIdAndDelete(id)
    return peliculaEliminada
    
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: 'El id no es válido!',
    })
  }
})