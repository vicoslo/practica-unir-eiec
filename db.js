const mongoose = require('mongoose');

// La URI de conexión se toma de las variables de entorno de Docker Compose
const dbUri = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB conectado exitosamente...');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error.message);
    // Si la conexión falla, se cierra la aplicación para evitar errores
    process.exit(1);
  }
};

module.exports = connectDB;
