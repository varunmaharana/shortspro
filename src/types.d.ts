import { Connection } from "mongoose";

declare global {
	var mongoose: {
		conn: void | Connection | null;
        promise: Promise<void | Connection> | null
	};
}

export {}