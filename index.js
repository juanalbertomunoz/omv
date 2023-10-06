const express = require('express');
//const mongoose = require('mongoose');
const routes = require('./routes/emisoras');
const app = express();
const dbConnect = require("./config/mongo")
const PORT = process.env.PORT || 3000;

//mongoose.connect('tu_link_de_conexión_a_MongoDB', { useNewUrlParser: true, useUnifiedTopology: true });
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));
app.use(express.json());
app.get('/', (req, res, next) => {
  res.render("crear")
});
app.get('/buscar', (req, res, next) => {
  res.render("buscador")
});
/*
app.use('/api', (req, res, next) => {
  console.log("1");
  //res.render("crear")
});*/
app.use('/api', routes);
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

dbConnect()


/*
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors")
const multer = require('multer');

const app = express()

const PORT = 3000
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(cors())
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const maxSize = 5 * 1024 * 1024;

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "audio/mpeg" || file.mimetype === "audio/wav" || file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: maxSize }
}).fields([{ name: 'pdf', maxCount: 1 }, { name: 'audio', maxCount: 1 }]);

app.post("/api/crearemisora", async (req, res) => {
  upload(req, res, async function (err) {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    const { nombre, nit } = req.body;
    const pdfBuffer = req.files['pdf'][0].buffer;
    const audioBuffer = req.files['audio'][0].buffer;

    const Emisora = require('./models/emisora');

    try {
      const emisora = await Emisora.create({ nombre, nit, pdf: pdfBuffer, audio: audioBuffer });
      return res.status(201).json({ message: "Emisora creada exitosamente", data: emisora });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error al crear la emisora" });
    }
  });
});

// Resto del código sigue igual


const dbConnect = require("./config/mongo")
const emisoraRoutes = require("./routes/emisora")

app.use("/api", (req, res, next) => {
  req.body = req.body || {};
  next();
}, emisoraRoutes);

app.get('/', (req, res, next) => {
  res.render("home2")
});

app.listen(PORT, () => {
  console.log('Server express is connected in ' + PORT + ' PORT')
})

dbConnect()
*/