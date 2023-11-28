import RideDAO from "./RideDAO";

export interface IRide {
    ride_id: string;
    passenger_id: string;
    driver_id: string;
    status: string;
    fare: number;
    distance: number;
    from_lat: number;
    from_long: number;
    to_lat: number;
    to_long: number;
    date: Date;
}

export default class GetRide {
    rideDAO: RideDAO;

    constructor() {
        this.rideDAO = new RideDAO();
    }

    async execute(rideId: string): Promise<IRide> {
        const ride = await this.rideDAO.getById(rideId);
        return ride;
    }
}