const Emisora = require('../models/emisora');

const crearEmisora = async (req, res) => {
  try {
    const { nombre, nit } = req.body;
    const pdfPath = req.files['pdf'][0].path; // Modificado aquí
    const audioPath = req.files['audio'][0].path; // Modificado aquí

    const emisora = new Emisora({
      nombre,
      nit,
      pdfPath,
      audioPath
    });

    await emisora.save();

    res.status(201).json({ mensaje: 'Emisora creada con éxito' });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la emisora' });
  }
};

const buscaremisora = async (req, res) => {

  try {
    const emisoras = await Emisora.find({}, 'nombre nit pdfPath audioPath');
    res.json(emisoras);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las emisoras' });
  }

}


/*
// Importa el modelo Emisora
const Emisora = require('../models/emisora');

// Función para crear una emisora
exports.createEmisora = async (req, res) => {
  const { nombre, nit } = req.body;

  try {
    const emisora = await Emisora.create({ nombre, nit });
    return res.status(201).json({ message: "Emisora creada exitosamente", data: emisora });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al crear la emisora" });
  }
};


module.exports = {
  createEmisora,
};
*/


module.exports = { crearEmisora, buscaremisora }