"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    category: {
        type: String,
        require: true,
    },
    brand: {
        type: String,
        require: true,
    },
    stockQuantity: {
        type: Number,
        require: true,
    },
    rating: {
        type: Number,
        require: true,
    },
    productDescription: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    isAvailable: {
        type: Boolean,
        default: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true,
});
// userSchema.pre("save", async function (next) {
//   // @typescript-eslint/no-this-alias
//   const user = this;
//   user.password = await bcrypt.hash(
//     user.password,
//     Number(config.bcrypt_salt_rounds),
//   );
//   next();
// });
// userSchema.post("save", async function (doc, next) {
//   doc.password = "";
//   next();
// });
// userSchema.statics.isUserExistsByCustomEmail = async function (email: string) {
//   return await User.findOne({ email }).select("+password");
// };
// userSchema.statics.isPasswordMatched = async function (
//   plainTextPassword,
//   hashedPassword,
// ) {
//   return await bcrypt.compare(plainTextPassword, hashedPassword);
// };
exports.Product = (0, mongoose_1.model)("Product", ProductSchema);
