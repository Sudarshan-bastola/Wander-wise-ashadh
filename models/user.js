import { Schema, model } from "mongoose";
// import mongoose from "mongoose"
// const {schema,model} = mongoose;
import { hash } from "bcrypt";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      validate: {
        validator: (email) => {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        },
        message: "Invalid email address",
      },
    },

    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await hash(this.password, 10);
  }
});

UserSchema.pre("findOneAndUpdate", async function () {
  if (this.getUpdate().password) {
    this.getUpdate().password = await hash(this.getUpdate().password, 10);
  }
});

const User = model("User", UserSchema);

export default User;