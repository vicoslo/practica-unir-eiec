const mongoose = require('mongoose');

const personaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // Asegura que no haya correos duplicados
  },
  foto_url: {
    type: String,
    required: false // La foto es opcional
  }
});

module.exports = mongoose.model('Persona', personaSchema);
