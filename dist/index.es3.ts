import { j as r } from "./index.es5.ts";
const t = (s) => /* @__PURE__ */ r.jsx(r.Fragment, { children: /* @__PURE__ */ r.jsxs("table", { className: "w-full border-separate mt-3 shadow-lg mb-6", children: [
  /* @__PURE__ */ r.jsx("thead", { children: /* @__PURE__ */ r.jsxs("tr", { children: [
    /* @__PURE__ */ r.jsx("th", { className: "border border-gray-300 bg-gray-100 py-2 px-4", children: "Name" }),
    /* @__PURE__ */ r.jsx("th", { className: "border border-gray-300 bg-gray-100 py-2 px-4", children: "Type" }),
    /* @__PURE__ */ r.jsx("th", { className: "border border-gray-300 bg-gray-100 py-2 px-4", children: "Required" }),
    /* @__PURE__ */ r.jsx("th", { className: "border border-gray-300 bg-gray-100 py-2 px-4", children: "Description" })
  ] }) }),
  /* @__PURE__ */ r.jsx("tbody", { children: Object.values(s).map((e, a) => /* @__PURE__ */ r.jsxs("tr", { children: [
    /* @__PURE__ */ r.jsx("td", { className: "border border-gray-300 py-2 px-4 font-semibold text-center", children: e.name }),
    /* @__PURE__ */ r.jsx("td", { className: "border border-gray-300 py-2 px-4 text-center", children: /* @__PURE__ */ r.jsx("span", { className: "border p-1 rounded-md bg-gray-50", children: e.type.name || "None" }) }),
    /* @__PURE__ */ r.jsx("td", { className: "border border-gray-300 py-2 px-4 text-center", children: e.flags.isOptional ? "No" : "Yes" }),
    /* @__PURE__ */ r.jsx("td", { className: "border border-gray-300 py-2 px-4 text-center", children: e.comment?.summary?.[0]?.text || "None" })
  ] }, a)) })
] }) });
export {
  t as PropsTable
};
//# sourceMappingURL=index.es3.ts.map
