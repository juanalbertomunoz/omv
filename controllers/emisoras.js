const Emisora = require('../models/emisora');

const crearEmisora = async (req, res) => {
  try {
    const { nombre, nit } = req.body;
    const pdf = req.files['pdf'][0].path.replace(/\\/g, '/').replace('uploads/', ''); // Corregido aquí
    const audio = req.files['audio'][0].path.replace(/\\/g, '/').replace('uploads/', ''); // Corregido aquí
    console.log(pdf, audio);

    const emisora = new Emisora({
      nombre,
      nit,
      pdf,
      audio
    });

    await emisora.save();

    res.status(201).json({ mensaje: 'Emisora creada con éxito' });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la emisora' });
  }
};

const buscaremisora = async (req, res) => {

  try {
    const emisoras = await Emisora.find({}, 'nombre nit pdf audio');

    const emisorasConRutasPublicas = emisoras.map(emisora => {
      return {
        ...emisora.toObject(),
        pdf: `/uploads/${emisora.pdf}`,
        audio: `/uploads/${emisora.audio}`
      };
    });

    //console.log(emisorasConRutasPublicas, emisorasConRutasPublicas[0].pdf); // Agregado

    res.json(emisorasConRutasPublicas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las emisoras' });
  }

}

module.exports = { crearEmisora, buscaremisora };
