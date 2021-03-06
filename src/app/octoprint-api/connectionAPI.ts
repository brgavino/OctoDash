export interface OctoprintConnectionAPI {
    current: OctoprintConnectionCurrentAPI;
    options: OctoprintConnectionOptionsAPI;
}

interface OctoprintConnectionCurrentAPI {
    state: string;
    port: string;
    baudrate: number;
    printerProfile: string;
}

interface OctoprintConnectionOptionsAPI {
    ports: string[];
    baudrates: number[];
    printerProfiles: object[];
    portPreference: string;
    baudratePreference: string;
    printerProfilePreference: string;
    autoconnect: boolean;
}
