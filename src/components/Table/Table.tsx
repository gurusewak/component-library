import { TablePropsType } from "./type";
import { useState } from "react";
import { images } from "@assets/index.ts";
import {
  sortDataByTrackedTime,
  sortingDataByTime,
  formatData,
  getNotificationRelativeTime,
} from "@lib/helper";

import "@/index.scss";

export const Table: React.FC<TablePropsType> = ({items}) => {
  const [sortOrder, setSortOrder] = useState("none");
  const [sortedData, setSortedData] = useState(items);
  const [trackedTimeAscIcon, settrackedTimeAscIcon] = useState(false);
  const [trackedTimeDescIcon, settrackedTimeDescIcon] = useState(false);
  const [ascIconVisible2, setAscIconVisible2] = useState(false);
  const [descIconVisible2, setDescIconVisible2] = useState(false);
  const [ascIconVisible3, setAscIconVisible3] = useState(false);
  const [descIconVisible3, setDescIconVisible3] = useState(false);

  const dataToRender = sortOrder === "none" ? items : sortedData;

  const latestData = dataToRender.map((item) => {
    const formattedData = formatData(item.tracked_time);
    const relativeTime = getNotificationRelativeTime(item.notification_time);
    return {
      ...item,
      tracked_time_icon: formattedData.tracked_time_icon,
      last_call_icons: formattedData.last_call_icons,
      notification_time: relativeTime,
    };
  });

  return (
    <div className="p-6">
      <div className="container mx-auto">
        <table className="min-w-full bg-white border border-gray-300  border-collapse">
          <thead>
            <tr className="my-custom-backgroundColor heading-fontColor font-sans text-sm leading-tight tracking-normal text-left">
              {items[0].notification_id && (
                <th className="py-3 px-4 border-b">
                  <span>ID</span>
                </th>
              )}

              {items[0].patient_name && (
                <th className="py-3 px-4 border-b">
                  <span>PATIENT NAME</span>
                </th>
              )}

              {items[0].notification_value && (
                <th className="py-3 px-4 border-b">
                  <span>NOTIFICATION</span>
                  <images.DownArrow
                    className={`w-4 h-4 inline-block ml-2 cursor-pointer ${
                      descIconVisible3 ? "fill-gray-500" : "fill-gray-300"
                    }`}
                    onClick={() => {
                      sortingDataByTime(
                        "notification_time",
                        sortedData,
                        setSortedData,
                        setSortOrder,
                        false
                      );
                      setDescIconVisible3(true);
                      setAscIconVisible3(false);
                    }}
                  />
                  <images.ArrowUp
                    className={`w-4 h-4 inline-block cursor-pointer ${
                      ascIconVisible3 ? "fill-gray-500" : "fill-gray-300"
                    }`}
                    onClick={() => {
                      sortingDataByTime(
                        "notification_time",
                        sortedData,
                        setSortedData,
                        setSortOrder,
                        true
                      );
                      setAscIconVisible3(true);
                      setDescIconVisible3(false);
                    }}
                  />
                </th>
              )}

              {items[0].notification_time && (
                <th className="py-3 px-4 border-b">
                  <span>NOTIFICATION TIME</span>
                  <images.DownArrow
                    className={`w-4 h-4 inline-block ml-2 cursor-pointer ${
                      descIconVisible3 ? "fill-gray-500" : "fill-gray-300"
                    }`}
                    onClick={() => {
                      sortingDataByTime(
                        "notification_time",
                        sortedData,
                        setSortedData,
                        setSortOrder,
                        false
                      );
                      setDescIconVisible3(true);
                      setAscIconVisible3(false);
                    }}
                  />
                  <images.ArrowUp
                    className={`w-4 h-4 inline-block cursor-pointer ${
                      ascIconVisible3 ? "fill-gray-500" : "fill-gray-300"
                    }`}
                    onClick={() => {
                      sortingDataByTime(
                        "notification_time",
                        sortedData,
                        setSortedData,
                        setSortOrder,
                        true
                      );
                      setAscIconVisible3(true);
                      setDescIconVisible3(false);
                    }}
                  />
                </th>
              )}

              {items[0].tracked_time && (
                <th className="py-3 px-4 border-b">
                  <span>TIME SPENT</span>
                  <images.DownArrow
                    className={`w-4 h-4 inline-block ml-2 cursor-pointer ${
                      trackedTimeDescIcon ? "fill-gray-500" : "fill-gray-300"
                    }`}
                    onClick={() => {
                      sortDataByTrackedTime(
                        sortedData,
                        setSortedData,
                        setSortOrder,
                        false
                      );
                      settrackedTimeAscIcon(false);
                      settrackedTimeDescIcon(true);
                    }}
                  />
                  <images.ArrowUp
                    className={`w-4 h-4 inline-block cursor-pointer ${
                      trackedTimeAscIcon ? "fill-gray-500" : "fill-gray-300"
                    }`}
                    onClick={() => {
                      sortDataByTrackedTime(
                        sortedData,
                        setSortedData,
                        setSortOrder,
                        true
                      );
                      settrackedTimeAscIcon(true);
                      settrackedTimeDescIcon(false);
                    }}
                  />
                </th>
              )}

              {items[0].last_call_date && (
                <th className="py-3 px-4 border-b">
                  <span>LAST CALL</span>
                  <images.DownArrow
                    className={`w-4 h-4 inline-block ml-2 cursor-pointer ${
                      descIconVisible2 ? "fill-gray-500" : "fill-gray-300"
                    }`}
                    onClick={() => {
                      sortingDataByTime(
                        "last_call_date",
                        sortedData,
                        setSortedData,
                        setSortOrder,
                        false
                      );
                      setDescIconVisible2(true);
                      setAscIconVisible2(false);
                    }}
                  />
                  <images.ArrowUp
                    className={`w-4 h-4 inline-block cursor-pointer ${
                      ascIconVisible2 ? "fill-gray-500" : "fill-gray-300"
                    }`}
                    onClick={() => {
                      sortingDataByTime(
                        "last_call_date",
                        sortedData,
                        setSortedData,
                        setSortOrder,
                        true
                      );
                      setAscIconVisible2(true);
                      setDescIconVisible2(false);
                    }}
                  />
                </th>
              )}
            </tr>
          </thead>
          <tbody className="rows-fontColor">
            {latestData.map((data) => (
              <tr
                className="relative font-sans font-normal leading-relaxed tracking-normal text-left"
                key={data?.notification_id}
              >
                <td className="py-4 px-4 border-b relative">
                  {data?.notification_id}
                  {data?.notification_unread ? (
                    <div className="absolute left-0 top-2 bottom-2 w-2 right-borderColor"></div>
                  ) : null}
                </td>
                <td className="py-4 px-4 border-b">{data.patient_name}</td>
                <td
                  className="py-4 px-4 border-b relative onhover cursor-pointer"
                  data-tooltip-target="tooltip-top"
                  data-tooltip-placement="bottom"
                >
                  <img
                    src={
                      data.notification_type_icon === "lung"
                        ? images.Lung
                        : data.notification_type_icon === "lungTimer"
                        ? images.LungTimer
                        : data.notification_type_icon === "timer"
                        ? images.Timer
                        : data.notification_type_icon === "heart"
                        ? images.Heart
                        : data.notification_type_icon === "heartTimer"
                        ? images.HeartTimer
                        : data.notification_type_icon === "steps"
                        ? images.Steps
                        : ""
                    }
                    className="inline-block"
                    alt="AlertType"
                  />
                  {data?.notification_value_icon && (
                    <img
                      src={
                        data.notification_value_icon === "upArrow"
                          ? images.UpArrow
                          : ""
                      }
                      className="inline-block"
                      alt="UpArrow"
                    />
                  )}
                  <span
                    className={`font-sans text-xl font-semibold leading-tight inline-block ${
                      data?.notification_value_icon !== "upArrow" ? "ml-2" : ""
                    }`}
                  >
                    {data?.notification_value}
                    <span className="font-sans text-sm font-normal text-left">
                      {data?.notification_unit}
                    </span>
                  </span>
                  <div className="border hover-border my-custom-backgroundColor rows-fontColor p-2 mt-4 z-10 absolute hidden show w-full -translate-x-10">
                    <p className="font-open-sans text-sm font-normal leading-5">
                      {data?.notification_type_icon === "lung" ||
                      data?.notification_type_icon === "lungTimer"
                        ? `Respiratory Rate Episode started: Daily respiratory rate > ${data?.notification_value} above baseline`
                        : data?.notification_type_icon === "heart" ||
                          data?.notification_type_icon === "heartTimer"
                        ? `Heart Rate Episode started: Heart rate is > ${data?.notification_value} above baseline`
                        : data?.notification_type_icon === "timer"
                        ? `Total timer is ${data?.notification_value} hours`
                        : data?.notification_type_icon === "steps"
                        ? `Total count of steps for are ${data?.notification_value}`
                        : ""}
                    </p>
                  </div>
                </td>
                <td className="py-4 px-4 border-b relative onhover cursor-pointer">
                  {data?.notification_time}
                  <div className="border hover-border z-10 my-custom-backgroundColor rows-fontColor p-2 absolute show hidden -translate-x-5">
                    <ul className="font-open-sans text-sm font-normal leading-5 space-y-2">
                      {data?.notification_time_tooltip_data?.map(
                        (item: any, index: number) => (
                          <li key={index}>
                            {item.notification_type} {item.date}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </td>
                <td className="py-4 px-4 border-b">
                  <img
                    src={
                      data?.tracked_time_icon === "greyClock"
                        ? images.greyClock
                        : data?.tracked_time_icon === "blackClock"
                        ? images.blackClock
                        : data?.tracked_time_icon === "yellowClock"
                        ? images.yellowClock
                        : data?.tracked_time_icon === "redClock"
                        ? images.redClock
                        : ""
                    }
                    alt="clock"
                    className="inline-block"
                  />
                  <span className="align-middle ml-1">{data.tracked_time}</span>
                </td>
                <td className="py-4 px-4 border-b relative onhover cursor-pointer">
                  <img
                    src={
                      data?.last_call_icons === "phone"
                        ? images.phone
                        : "voicemail"
                        ? images.voicemail
                        : ""
                    }
                    alt="phone"
                    className="inline-block w-5 h-5"
                  />
                  <span className="pl-2">{data.last_call_date}</span>

                  {data?.last_call_icons &&
                    data?.last_call_icons === "voicemail" && (
                      <span className="font-open-sans text-sm heading-fontColor ml-6 block">
                        {data?.voice_mail_tooltip_data?.length} attempt
                      </span>
                    )}

                  {data?.last_call_icons &&
                    data?.last_call_icons === "voicemail" && (
                      <div className="border hover-border z-10 my-custom-backgroundColor rows-fontColor p-2 absolute show hidden -translate-x-5">
                        <ul className="font-open-sans text-sm font-normal leading-5 space-y-2">
                          {data?.voice_mail_tooltip_data?.map(
                            (item: any, index: number) => (
                              <li key={index}>
                                {item.date} {item.notification_type}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
