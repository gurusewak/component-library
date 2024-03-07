import { Table } from "@components/Table/Table";
import type { ControlType, Story } from "@ladle/react";
import "@index.scss";
import { TablePropsType } from "@components";

export const table: Story<TablePropsType> = (TableData) => {
  return (
    <>
      <Table items={TableData.items} />
    </>
  );
};

table.args ={
  items:[
  {
    notification_unread: true,
    notification_type_icon: "lung",
    notification_id: "3160",
    patient_name: "Anthony Adams",
    notification_value: "22%",
    notification_time: new Date().toISOString(),
    // notification_unit: "brmp",
    notification_value_icon: "upArrow",
    tracked_time: "00:00:00",
    last_call_date: "1 jan",
    tracked_time_icon: "greyClock",
    last_call_icons: "phone",
    notification_time_tooltip_data: [
      { notification_type: "Episode start", date: "Jan 8, 9:32 AM PST" },
      { notification_type: "Notification sent", date: "Jan 9, 3:14 PM PST" },
    ],
    voice_mail_tooltip_data: [
      { notification_type: "Left a voicemail", date: "Jan 9, 9:32 AM PST:" },
      { notification_type: "Left a voicemail", date: "Jan 9, 9:32 AM PST:" },
    ],
  },
  {
    notification_unread: false,
    notification_type_icon: "lungTimer",
    notification_id: "3162",
    patient_name: "Anthony Adams",
    notification_value: "10%",
    notification_time: new Date(Date.now() - 60000).toISOString(),
    notification_unit: "brmp",
    notification_value_icon: "upArrow",
    tracked_time: "00:21:00",
    last_call_date: "21 feb",
    tracked_time_icon: "greyClock",
    last_call_icons: "phone",
    notification_time_tooltip_data: [
      { notification_type: "Episode start", date: "Jan 8, 9:32 AM PST" },
      { notification_type: "Notification sent", date: "Jan 9, 3:14 PM PST" },
    ],
  },
  {
    notification_unread: true,
    notification_type_icon: "lung",
    notification_id: "3168",
    patient_name: "Anthony Adams",
    notification_value: "26%",
    notification_time: new Date(Date.now() - 120000).toISOString(),
    notification_unit: "brmp",
    // notification_value_icon: "upArrow",
    tracked_time: "01:21:00",
    last_call_date: "14 jan",
    tracked_time_icon: "greyClock",
    last_call_icons: "phone",
    notification_time_tooltip_data: [
      { notification_type: "Episode start", date: "Jan 8, 9:32 AM PST" },
      { notification_type: "Notification sent", date: "Jan 9, 3:14 PM PST" },
    ],
  },
  {
    notification_unread: true,
    notification_type_icon: "lung",
    notification_id: "3169",
    patient_name: "Anthony Adams",
    notification_value: "15%",
    notification_time: new Date(Date.now() - 20000).toISOString(),
    notification_unit: "brmp",
    notification_value_icon: "upArrow",
    tracked_time: "00:15:00",
    last_call_date: "14 jan",
    tracked_time_icon: "greyClock",
    last_call_icons: "phone",
    notification_time_tooltip_data: [
      { notification_type: "Episode start", date: "Jan 8, 9:32 AM PST" },
      { notification_type: "Notification sent", date: "Jan 9, 3:14 PM PST" },
    ],
  },
  {
    notification_unread: true,
    notification_type_icon: "heart",
    notification_id: "3164",
    patient_name: "Anthony Adams",
    notification_value: "10%",
    notification_time: new Date(Date.now() - 7800000).toISOString(),
    notification_unit: "brmp",
    notification_value_icon: "upArrow",
    tracked_time: "02:21:00",
    last_call_date: "31 jan",
    tracked_time_icon: "greyClock",
    last_call_icons: "phone",
    notification_time_tooltip_data: [
      { notification_type: "Episode start", date: "Jan 8, 9:32 AM PST" },
      { notification_type: "Notification sent", date: "Jan 9, 3:14 PM PST" },
    ],
  },
  {
    notification_unread: true,
    notification_type_icon: "lung",
    notification_id: "3163",
    patient_name: "Anthony Adams",
    notification_value: "32%",
    notification_time: new Date(Date.now() - 900000).toISOString(),
    notification_unit: "brmp",
    notification_value_icon: "upArrow",
    tracked_time: "00:56:00",
    last_call_date: "14 jan",
    tracked_time_icon: "greyClock",
    last_call_icons: "phone",
    notification_time_tooltip_data: [
      { notification_type: "Episode start", date: "Jan 8, 9:32 AM PST" },
      { notification_type: "Notification sent", date: "Jan 9, 3:14 PM PST" },
    ],
  },
  {
    notification_unread: false,
    notification_type_icon: "heartTimer",
    notification_id: "3176",
    patient_name: "Anthony Adams",
    notification_value: "22%",
    notification_time: new Date(
      Date.now() - 5 * 24 * 60 * 60 * 1000
    ).toISOString(),
    notification_unit: "brmp",
    notification_value_icon: "upArrow",
    tracked_time: "00:00:00",
    last_call_date: "14 jan",
    tracked_time_icon: "greyClock",
    last_call_icons: "phone",
    notification_time_tooltip_data: [
      { notification_type: "Episode start", date: "Jan 8, 9:32 AM PST" },
      { notification_type: "Notification sent", date: "Jan 9, 3:14 PM PST" },
    ],
    voice_mail_tooltip_data: [
        { notification_type: "Left a voicemail", date: "Jan 9, 9:32 AM PST:" },
        { notification_type: "Left a voicemail", date: "Jan 9, 9:32 AM PST:" },
      ],
  },
  {
    notification_unread: true,
    notification_type_icon: "timer",
    notification_id: "3134",
    patient_name: "Anthony Adams",
    notification_value: "10",
    notification_time: new Date(
      Date.now() - 4 * 24 * 60 * 60 * 1000
    ).toISOString(),
    notification_unit: "hours",
    notification_value_icon: "",
    tracked_time: "00:40:08",
    last_call_date: "14 jan",
    tracked_time_icon: "greyClock",
    last_call_icons: "phone",
    notification_time_tooltip_data: [
      { notification_type: "Episode start", date: "Jan 8, 9:32 AM PST" },
      { notification_type: "Notification sent", date: "Jan 9, 3:14 PM PST" },
    ],
  },
  {
    notification_unread: true,
    notification_type_icon: "steps",
    notification_id: "3156",
    patient_name: "Anthony Adams",
    notification_value: "22%",
    notification_time: new Date().toISOString(),
    notification_unit: "brmp",
    notification_value_icon: "upArrow",
    tracked_time: "00:33:45",
    last_call_date: "14 jan",
    tracked_time_icon: "greyClock",
    last_call_icons: "phone",
    notification_time_tooltip_data: [
      { notification_type: "Episode start", date: "Jan 8, 9:32 AM PST" },
      { notification_type: "Notification sent", date: "Jan 9, 3:14 PM PST" },
    ],
  },
  {
    notification_unread: true,
    notification_type_icon: "steps",
    notification_id: "3128",
    patient_name: "Anthony Adams",
    notification_value: "22%",
    notification_time: new Date(
      Date.now() - 7 * 24 * 60 * 60 * 1000
    ).toISOString(),
    notification_unit: "brmp",
    notification_value_icon: "upArrow",
    tracked_time: "01:56:00",
    last_call_date: "14 jan",
    tracked_time_icon: "greyClock",
    last_call_icons: "phone",
    notification_time_tooltip_data: [
      { notification_type: "Episode start", date: "Jan 8, 9:32 AM PST" },
      { notification_type: "Notification sent", date: "Jan 9, 3:14 PM PST" },
    ],
  },
]};

// Description - Display
// Within the last few seconds - just now
// Within the last minute - a minute ago
// Within 59 minutes - X minutes ago
// 60 minutes ago - 1 hour ago
// 1.49 hours ago - 1 hour ago
// 1.51 hours ago - 2 hours ago
// X hours ago - X hours ago
// 1 day ago w / time - yesterday at X:XX PM
// 2 to 7 days ago -X days ago
// 7 days ago - 1 week ago
// > 7 days ago - Month D
// > last year - Month D, YYYY
