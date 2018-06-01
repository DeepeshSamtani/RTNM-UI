export interface User {
    severity: string;
    owner: string;
    acknowledged: string;
    className: string;
    ticketNumber: string;
    eventName: string
    source:string;
    propertyName:string;
    occurrence:string;
    firstNotify:DateTimeFormat;
    lastNotify:DateTimeFormat;
}