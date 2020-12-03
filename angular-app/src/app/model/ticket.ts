type TicketStatus = 'opened';

export interface Ticket {
    _id: string,
    dateOfCreation: string,
    product: string,
    status: TicketStatus,
}