const mongoose = require("mongoose")

const EmisoraScheme = new mongoose.Schema(
    {
        nombre: { type: String, required: true },
        nit: { type: Number, required: false },

        audio: [{ type: String, required: false }],
        pdf: [{ type: String, required: false }]
    },
    {
        versionKey: false,
        timestamps: true,
    }
);


module.exports = mongoose.model("emisoras", EmisoraScheme)