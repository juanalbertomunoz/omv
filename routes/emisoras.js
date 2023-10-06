const express = require('express');
const router = express.Router();
const upload = require('../config/multer'); // Cambiado el path

const emisoraController = require('../controllers/emisoras'); // Cambiado el path
/*
router.post('/crearemisora', (req, res, next) => {
    console.log("1");
    //res.render("crear")
});*/

router.post('/crearemisora', upload.fields([{ name: 'pdf', maxCount: 1 }, { name: 'audio', maxCount: 1 }]), emisoraController.crearEmisora);
router.get('/buscaremisoras', emisoraController.buscaremisora);
module.exports = router;

//module.exports = router;

/*
const express = require("express")
const router = express.Router()
const emisoraCtrl = require("../controllers/emisoras")
/**
 *  @swagger
 * /api/emisoras:
 * get:
 * summary: Get zone
 * description: get all exist zones
 */
//router.get("/", emisoraCtrl.getZones)

/**
 * create one emisora

router.post("/crearemisora", emisoraCtrl.createEmisora)

/**
 * get detail zone
 */
//router.get("/:id", emisoraCtrl.getZone)

/**
 * update one zone
 */
//router.put("/:id", emisoraCtrl.updateZone)
/**
 * delete one zone
 */
//router.delete("/:id", emisoraCtrl.deleteZone)



//module.exports = router