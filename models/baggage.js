import { Schema, model } from "mongoose";

const BaggageSchema = new Schema(
    {
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        trip_id: {
            type: Schema.Types.ObjectId,
            ref: "trips",
            required: true,
        },

        name: {
            type: String,
            required: true,
            trim: true,
        },

        completed: {
            type: Boolean,
            default: false,
        }

    },

    {
        timestamps: true,
    }
)

const baggage = model("baggage", BaggageSchema)

export default baggage;