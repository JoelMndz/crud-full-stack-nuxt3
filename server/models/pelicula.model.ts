import {Schema, model} from "mongoose";

const PeliculaSchema = new Schema({
  nombre: String,
  descripcion: String
})

export const Pelicula = model('peliculas', PeliculaSchema)