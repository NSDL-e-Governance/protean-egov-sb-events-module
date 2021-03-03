export namespace IEventData {

        export interface IEvent {
                err_msg: string,
                err_code: number,
                response_id: string,
                api: string,
                version: number,
                data: {
                        result: IEventResult[],
                        empty_message: string
                }
        }

        export interface IEventResult {
                id: number,
                title: string,
                description: string,
                book_start_date: string,
                book_end_date: string,
                startdate: string,
                enddate: string,
                avatar: string,
                integrid: number,
                location: string,
                checkin: number,
                totaltickets: number,
                soldtickets: number
        }

        export interface IEventList {
                name: string,
                code: string,
                identifier: number,
                Description: string,
                status: string,
                posterImage: string,
                thumbnail: string,
                moreDetailsLink: string,
                language: string,
                ageGroup: string,
                topics: [],
                participationMethod: string,
                startDate: string,
                endDate: string,
                startTime: string,
                endTime: string,
                bookingStartDate: string,
                bookingEndDate: string,
                totalSeats: number,
                availableSeats: number,
                eventType: string,
                onlineProvider: string,
                venue: string,
                createdOn: string,
                createdBy: string,
                updatedOn: string,
                updatedBy: string,
                category:string
        }

        export interface IEventDetail {
                name: string,
                code: string,
                identifier: number,
                description:string,
                status: string,
                posterImage: string,
                thumbnail:string,
                moreDetailsLink: string,
                language:string,
                ageGroup:string,
                topics:[],
                participationMethod: string,
                startDate:string,
                endDate:string,
                startTime:string,
                endTime:string,
                bookingStartDate:string,
                bookingEndDate:string,
                totalSeats:number,
                availableSeats:number,
                eventType: string,
                onlineProvider: string,
                onlineProviderConfig: string,
                venue: string,
                recordingLink:string,
                recordingLinkPassword:string,
                dialCodes:string,
                createdOn:string,
                createdBy:string,
                updatedOn:string,
                updatedBy:string,
                flagReasons:string,
                flags:string,
                flaggedBy:string,
                lastFlaggedOn: string,
                category:string
               }
               
               


}