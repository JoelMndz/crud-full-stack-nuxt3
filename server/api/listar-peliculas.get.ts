import { Pelicula } from "../models/pelicula.model"

export default defineEventHandler(async (event) => {
  // const body = await readBody(event)
  // return { body }
  return {
    peliculas: await Pelicula.find()
  }
})