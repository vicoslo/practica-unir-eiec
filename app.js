
const express = require('express');
const path = require('path');
const connectDB = require('./db');
const Persona = require('./models/Persona');

const app = express();
const port = 3000;

// Conexión a la base de datos
connectDB();

// Middleware para procesar JSON y servir archivos estáticos
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// RUTAS API CRUD

// 1. CREAR una nueva persona (POST)
app.post('/api/personas', async (req, res) => {
  try {
    const nuevaPersona = new Persona(req.body);
    const personaGuardada = await nuevaPersona.save();
    res.status(201).json(personaGuardada);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la persona', message: error.message });
  }
});

// 2. LEER todas las personas (GET)
app.get('/api/personas', async (req, res) => {
  try {
    const personas = await Persona.find();
    res.json(personas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las personas', message: error.message });
  }
});

// 3. LEER una persona por ID (GET)
app.get('/api/personas/:id', async (req, res) => {
  try {
    const persona = await Persona.findById(req.params.id);
    if (!persona) {
      return res.status(404).json({ message: 'Persona no encontrada' });
    }
    res.json(persona);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la persona', message: error.message });
  }
});

// 4. ACTUALIZAR una persona por ID (PUT)
app.put('/api/personas/:id', async (req, res) => {
  try {
    const personaActualizada = await Persona.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!personaActualizada) {
      return res.status(404).json({ message: 'Persona no encontrada' });
    }
    res.json(personaActualizada);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la persona', message: error.message });
  }
});

// 5. BORRAR una persona por ID (DELETE)
app.delete('/api/personas/:id', async (req, res) => {
  try {
    const personaBorrada = await Persona.findByIdAndDelete(req.params.id);
    if (!personaBorrada) {
      return res.status(404).json({ message: 'Persona no encontrada' });
    }
    res.json({ message: 'Persona eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la persona', message: error.message });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
