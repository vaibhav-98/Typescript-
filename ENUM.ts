


/**
 * ENUMS or Enumeration 
 * const INITIALSED = "initialised"
 * Ticket status ["initialised" , "cancelled" "resolved" , "pending"]
 * 
 * ti.status == " resolved"
 */



enum TicketStatus {
    INITIALSED,
    CANCELLED,
    PENDING,
    CLOSED
}


const Ticket = {
    id: 1,
    title: "new ticket",
    status: TicketStatus.INITIALSED
}


if(Ticket.status == TicketStatus.CLOSED) {
    console.log("Done")
}
