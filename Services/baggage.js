import Baggage from '../models/baggage.js';
import { NotFoundError } from '../errors/not-found.js';
import { find as findTrip } from './trip.js';

export const create = async (data) => {
    await findTrip(data.trip, data.user);
    return Baggage.create({
        trip_id: data.trip,
        user_id: data.user,
        name: data.name
    });
}

export const index = async (tripId, userId) => {
    return Baggage.find({ trip_id: tripId, user_id: userId });
}

export const find = async (baggageId, tripId, userId) => {
    const baggage = await Baggage.findOne({
        _id: baggageId, trip_id: tripId, user_id: userId
    });

    if (!baggage) throw new NotFoundError("Baggage Not Found");

    return baggage;
}

export const update = async (baggageId, tripId, userId, data) => {
    const baggage = await Baggage.findOneAndUpdate(
        { _id: baggageId, trip_id: tripId, user_id: userId },
        data,
        { returnDocument: 'after' },
    );

    if (!baggage) throw new NotFoundError("Baggage not found");

    return baggage;
}

export const remove = async (baggageId, tripId, userId) => {
    const baggage = await Baggage.findOneAndDelete({
        _id: baggageId, trip_id: tripId, user_id: userId,
    });

    if (!baggage) throw new NotFoundError("Baggage not found");

    return baggage;
}