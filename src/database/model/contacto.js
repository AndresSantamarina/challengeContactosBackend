import mongoose, { Schema } from "mongoose"

const contactoSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        unique: true,
        minLength: 2,
        maxLength: 50
    },
    mail: {
        type: String,
        required: true,
        unique: true,
        minLength: 6,
        maxLength: 30,
        trim: true,
        validate: {
            validator: (value) => {
                const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
                return pattern.test(value)
            }
        }
    },
    telefono: {
        type: String,
        required: true,
        unique: true,
        minLength: 8,
        maxLength: 20
    },
    favorito: { type: Boolean, default: false }
})

const Contacto = mongoose.model('contacto', contactoSchema)

export default Contacto