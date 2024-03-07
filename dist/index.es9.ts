const l = (o) => {
  const [c, s, n] = o.split(":").map(Number);
  return c * 60 + s + n / 60;
}, m = (o, c, s, n) => {
  const e = [...o].sort((t, a) => {
    const r = l(t.tracked_time), i = l(a.tracked_time);
    return n ? r - i : i - r;
  });
  c(e), s(n ? "asc" : "desc");
}, d = (o, c, s, n, e) => {
  const t = [...c].sort((a, r) => {
    const i = new Date(a[o]).getTime(), u = new Date(r[o]).getTime();
    return e ? i - u : u - i;
  });
  s(t), n(e ? "asc" : "desc");
}, h = (o) => {
  const [c, s, n] = o.split(":").map((r) => parseInt(r)), e = c * 60 + s;
  let t = null;
  switch (!0) {
    case e <= 19:
      t = "greyClock";
      break;
    case (e >= 20 && e <= 39):
      t = "blackClock";
      break;
    case (e >= 40 && e <= 59):
      t = "yellowClock";
      break;
    default:
      t = "redClock";
  }
  const a = e > 0 ? "phone" : "voicemail";
  return {
    tracked_time_icon: t,
    last_call_icons: a
  };
}, w = (o) => {
  if (!o)
    return "";
  const s = Date.now() - new Date(o).getTime(), n = Math.floor(s / 1e3), e = Math.floor(n / 60), t = Math.floor(e / 60), a = Math.floor(t / 24);
  switch (!0) {
    case a > 7:
      return new Date(o).toLocaleDateString(void 0, {
        month: "short",
        day: "numeric"
      });
    case a === 7:
      return "1 week ago";
    case (a >= 2 && a <= 7):
      return `${a} days ago`;
    case a === 1:
      return "1 day ago";
    case (t >= 1 && t <= 23):
      return `${t} hours ago`;
    case (t === 0 && e > 1 && e <= 59):
      return `${e} minutes ago`;
    case (t === 0 && e === 1):
      return "a minute ago";
    case n <= 10:
      return "Within the last few seconds";
    default:
      return "just now";
  }
};
export {
  h as formatData,
  w as getNotificationRelativeTime,
  m as sortDataByTrackedTime,
  d as sortingDataByTime
};
//# sourceMappingURL=index.es9.ts.map
