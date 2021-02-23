export declare namespace IEventData {
    interface IEvent {
        err_msg: string;
        err_code: number;
        response_id: string;
        api: string;
        version: number;
        data: {
            result: IEventResult[];
            empty_message: string;
        };
    }
    interface IEventResult {
        id: number;
        title: string;
        description: string;
        book_start_date: string;
        book_end_date: string;
        startdate: string;
        enddate: string;
        avatar: string;
        integrid: number;
        location: string;
        checkin: number;
        totaltickets: number;
        soldtickets: number;
    }
}
