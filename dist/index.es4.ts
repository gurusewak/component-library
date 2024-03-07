import { j as e } from "./index.es5.ts";
import { useState as a } from "react";
import { images as i } from "./index.es8.ts";
import { formatData as T, getNotificationRelativeTime as C, sortingDataByTime as c, sortDataByTrackedTime as y } from "./index.es9.ts";
import "./index.es10.ts";
const R = ({ items: t }) => {
  const [g, n] = a("none"), [l, s] = a(t), [j, d] = a(!1), [k, _] = a(!1), [N, x] = a(!1), [w, h] = a(!1), [b, p] = a(!1), [u, f] = a(!1), v = (g === "none" ? t : l).map((o) => {
    const r = T(o.tracked_time), m = C(o.notification_time);
    return {
      ...o,
      tracked_time_icon: r.tracked_time_icon,
      last_call_icons: r.last_call_icons,
      notification_time: m
    };
  });
  return /* @__PURE__ */ e.jsx("div", { className: "p-6", children: /* @__PURE__ */ e.jsx("div", { className: "container mx-auto", children: /* @__PURE__ */ e.jsxs("table", { className: "min-w-full bg-white border border-gray-300  border-collapse", children: [
    /* @__PURE__ */ e.jsx("thead", { children: /* @__PURE__ */ e.jsxs("tr", { className: "my-custom-backgroundColor heading-fontColor font-sans text-sm leading-tight tracking-normal text-left", children: [
      t[0].notification_id && /* @__PURE__ */ e.jsx("th", { className: "py-3 px-4 border-b", children: /* @__PURE__ */ e.jsx("span", { children: "ID" }) }),
      t[0].patient_name && /* @__PURE__ */ e.jsx("th", { className: "py-3 px-4 border-b", children: /* @__PURE__ */ e.jsx("span", { children: "PATIENT NAME" }) }),
      t[0].notification_value && /* @__PURE__ */ e.jsxs("th", { className: "py-3 px-4 border-b", children: [
        /* @__PURE__ */ e.jsx("span", { children: "NOTIFICATION" }),
        /* @__PURE__ */ e.jsx(
          i.DownArrow,
          {
            className: `w-4 h-4 inline-block ml-2 cursor-pointer ${u ? "fill-gray-500" : "fill-gray-300"}`,
            onClick: () => {
              c(
                "notification_time",
                l,
                s,
                n,
                !1
              ), f(!0), p(!1);
            }
          }
        ),
        /* @__PURE__ */ e.jsx(
          i.ArrowUp,
          {
            className: `w-4 h-4 inline-block cursor-pointer ${b ? "fill-gray-500" : "fill-gray-300"}`,
            onClick: () => {
              c(
                "notification_time",
                l,
                s,
                n,
                !0
              ), p(!0), f(!1);
            }
          }
        )
      ] }),
      t[0].notification_time && /* @__PURE__ */ e.jsxs("th", { className: "py-3 px-4 border-b", children: [
        /* @__PURE__ */ e.jsx("span", { children: "NOTIFICATION TIME" }),
        /* @__PURE__ */ e.jsx(
          i.DownArrow,
          {
            className: `w-4 h-4 inline-block ml-2 cursor-pointer ${u ? "fill-gray-500" : "fill-gray-300"}`,
            onClick: () => {
              c(
                "notification_time",
                l,
                s,
                n,
                !1
              ), f(!0), p(!1);
            }
          }
        ),
        /* @__PURE__ */ e.jsx(
          i.ArrowUp,
          {
            className: `w-4 h-4 inline-block cursor-pointer ${b ? "fill-gray-500" : "fill-gray-300"}`,
            onClick: () => {
              c(
                "notification_time",
                l,
                s,
                n,
                !0
              ), p(!0), f(!1);
            }
          }
        )
      ] }),
      t[0].tracked_time && /* @__PURE__ */ e.jsxs("th", { className: "py-3 px-4 border-b", children: [
        /* @__PURE__ */ e.jsx("span", { children: "TIME SPENT" }),
        /* @__PURE__ */ e.jsx(
          i.DownArrow,
          {
            className: `w-4 h-4 inline-block ml-2 cursor-pointer ${k ? "fill-gray-500" : "fill-gray-300"}`,
            onClick: () => {
              y(
                l,
                s,
                n,
                !1
              ), d(!1), _(!0);
            }
          }
        ),
        /* @__PURE__ */ e.jsx(
          i.ArrowUp,
          {
            className: `w-4 h-4 inline-block cursor-pointer ${j ? "fill-gray-500" : "fill-gray-300"}`,
            onClick: () => {
              y(
                l,
                s,
                n,
                !0
              ), d(!0), _(!1);
            }
          }
        )
      ] }),
      t[0].last_call_date && /* @__PURE__ */ e.jsxs("th", { className: "py-3 px-4 border-b", children: [
        /* @__PURE__ */ e.jsx("span", { children: "LAST CALL" }),
        /* @__PURE__ */ e.jsx(
          i.DownArrow,
          {
            className: `w-4 h-4 inline-block ml-2 cursor-pointer ${w ? "fill-gray-500" : "fill-gray-300"}`,
            onClick: () => {
              c(
                "last_call_date",
                l,
                s,
                n,
                !1
              ), h(!0), x(!1);
            }
          }
        ),
        /* @__PURE__ */ e.jsx(
          i.ArrowUp,
          {
            className: `w-4 h-4 inline-block cursor-pointer ${N ? "fill-gray-500" : "fill-gray-300"}`,
            onClick: () => {
              c(
                "last_call_date",
                l,
                s,
                n,
                !0
              ), x(!0), h(!1);
            }
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx("tbody", { className: "rows-fontColor", children: v.map((o) => /* @__PURE__ */ e.jsxs(
      "tr",
      {
        className: "relative font-sans font-normal leading-relaxed tracking-normal text-left",
        children: [
          /* @__PURE__ */ e.jsxs("td", { className: "py-4 px-4 border-b relative", children: [
            o?.notification_id,
            o?.notification_unread ? /* @__PURE__ */ e.jsx("div", { className: "absolute left-0 top-2 bottom-2 w-2 right-borderColor" }) : null
          ] }),
          /* @__PURE__ */ e.jsx("td", { className: "py-4 px-4 border-b", children: o.patient_name }),
          /* @__PURE__ */ e.jsxs(
            "td",
            {
              className: "py-4 px-4 border-b relative onhover cursor-pointer",
              "data-tooltip-target": "tooltip-top",
              "data-tooltip-placement": "bottom",
              children: [
                /* @__PURE__ */ e.jsx(
                  "img",
                  {
                    src: o.notification_type_icon === "lung" ? i.Lung : o.notification_type_icon === "lungTimer" ? i.LungTimer : o.notification_type_icon === "timer" ? i.Timer : o.notification_type_icon === "heart" ? i.Heart : o.notification_type_icon === "heartTimer" ? i.HeartTimer : o.notification_type_icon === "steps" ? i.Steps : "",
                    className: "inline-block",
                    alt: "AlertType"
                  }
                ),
                o?.notification_value_icon && /* @__PURE__ */ e.jsx(
                  "img",
                  {
                    src: o.notification_value_icon === "upArrow" ? i.UpArrow : "",
                    className: "inline-block",
                    alt: "UpArrow"
                  }
                ),
                /* @__PURE__ */ e.jsxs(
                  "span",
                  {
                    className: `font-sans text-xl font-semibold leading-tight inline-block ${o?.notification_value_icon !== "upArrow" ? "ml-2" : ""}`,
                    children: [
                      o?.notification_value,
                      /* @__PURE__ */ e.jsx("span", { className: "font-sans text-sm font-normal text-left", children: o?.notification_unit })
                    ]
                  }
                ),
                /* @__PURE__ */ e.jsx("div", { className: "border hover-border my-custom-backgroundColor rows-fontColor p-2 mt-4 z-10 absolute hidden show w-full -translate-x-10", children: /* @__PURE__ */ e.jsx("p", { className: "font-open-sans text-sm font-normal leading-5", children: o?.notification_type_icon === "lung" || o?.notification_type_icon === "lungTimer" ? `Respiratory Rate Episode started: Daily respiratory rate > ${o?.notification_value} above baseline` : o?.notification_type_icon === "heart" || o?.notification_type_icon === "heartTimer" ? `Heart Rate Episode started: Heart rate is > ${o?.notification_value} above baseline` : o?.notification_type_icon === "timer" ? `Total timer is ${o?.notification_value} hours` : o?.notification_type_icon === "steps" ? `Total count of steps for are ${o?.notification_value}` : "" }) })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs("td", { className: "py-4 px-4 border-b relative onhover cursor-pointer", children: [
            o?.notification_time,
            /* @__PURE__ */ e.jsx("div", { className: "border hover-border z-10 my-custom-backgroundColor rows-fontColor p-2 absolute show hidden -translate-x-5", children: /* @__PURE__ */ e.jsx("ul", { className: "font-open-sans text-sm font-normal leading-5 space-y-2", children: o?.notification_time_tooltip_data?.map(
              (r, m) => /* @__PURE__ */ e.jsxs("li", { children: [
                r.notification_type,
                " ",
                r.date
              ] }, m)
            ) }) })
          ] }),
          /* @__PURE__ */ e.jsxs("td", { className: "py-4 px-4 border-b", children: [
            /* @__PURE__ */ e.jsx(
              "img",
              {
                src: o?.tracked_time_icon === "greyClock" ? i.greyClock : o?.tracked_time_icon === "blackClock" ? i.blackClock : o?.tracked_time_icon === "yellowClock" ? i.yellowClock : o?.tracked_time_icon === "redClock" ? i.redClock : "",
                alt: "clock",
                className: "inline-block"
              }
            ),
            /* @__PURE__ */ e.jsx("span", { className: "align-middle ml-1", children: o.tracked_time })
          ] }),
          /* @__PURE__ */ e.jsxs("td", { className: "py-4 px-4 border-b relative onhover cursor-pointer", children: [
            /* @__PURE__ */ e.jsx(
              "img",
              {
                src: o?.last_call_icons === "phone" ? i.phone : i.voicemail,
                alt: "phone",
                className: "inline-block w-5 h-5"
              }
            ),
            /* @__PURE__ */ e.jsx("span", { className: "pl-2", children: o.last_call_date }),
            o?.last_call_icons && o?.last_call_icons === "voicemail" && /* @__PURE__ */ e.jsxs("span", { className: "font-open-sans text-sm heading-fontColor ml-6 block", children: [
              o?.voice_mail_tooltip_data?.length,
              " attempt"
            ] }),
            o?.last_call_icons && o?.last_call_icons === "voicemail" && /* @__PURE__ */ e.jsx("div", { className: "border hover-border z-10 my-custom-backgroundColor rows-fontColor p-2 absolute show hidden -translate-x-5", children: /* @__PURE__ */ e.jsx("ul", { className: "font-open-sans text-sm font-normal leading-5 space-y-2", children: o?.voice_mail_tooltip_data?.map(
              (r, m) => /* @__PURE__ */ e.jsxs("li", { children: [
                r.date,
                " ",
                r.notification_type
              ] }, m)
            ) }) })
          ] })
        ]
      },
      o?.notification_id
    )) })
  ] }) }) });
};
export {
  R as Table
};
//# sourceMappingURL=index.es4.ts.map
