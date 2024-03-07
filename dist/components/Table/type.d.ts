export type TableProps = {
    /** Indicates whether the notification is unread or read */
    notification_unread: boolean;
    /** The icon representing the notification type as about lungs or heart and count of steps */
    notification_type_icon: string;
    /** It is unique for every patient for every notification*/
    notification_id: string;
    /** The name of the patient associated with the notification */
    patient_name: string;
    /** The value of the notification tells us the heartrate , respiratory rate and steps count*/
    notification_value: string;
    /** The unit of measurement for the notification value */
    notification_unit?: string;
    /** The icon representing the notification value wheather increase or decrease */
    notification_value_icon?: string;
    /** The time patient took on a call */
    notification_time: string;
    /** Tooltip data for notification date and its type*/
    notification_time_tooltip_data?: {
        notification_type: string;
        date: string;
    }[];
    /** The time the notification was tracked */
    tracked_time: string;
    /** The date of the last call */
    last_call_date: string;
    /** The icon representing the tracked time */
    tracked_time_icon: string;
    /** Icons representing the date of the last call */
    last_call_icons: string;
    /** Tooltip data for voice mail tells us date and notification type */
    voice_mail_tooltip_data?: {
        notification_type: string;
        date: string;
    }[];
};
export interface TablePropsType {
    items: TableProps[];
}
//# sourceMappingURL=type.d.ts.map