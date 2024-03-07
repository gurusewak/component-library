import "react";
function o(e, f) {
  typeof e == "function" ? e(f) : e != null && (e.current = f);
}
function c(...e) {
  return (f) => e.forEach(
    (n) => o(n, f)
  );
}
export {
  c as composeRefs
};
//# sourceMappingURL=index.es15.ts.map
