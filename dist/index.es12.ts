import { __exports as t } from "./index.es16.ts";
import y from "react";
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var p;
function v() {
  if (p)
    return t;
  p = 1;
  var s = y, m = Symbol.for("react.element"), l = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, d = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(o, r, u) {
    var e, n = {}, _ = null, f = null;
    u !== void 0 && (_ = "" + u), r.key !== void 0 && (_ = "" + r.key), r.ref !== void 0 && (f = r.ref);
    for (e in r)
      c.call(r, e) && !a.hasOwnProperty(e) && (n[e] = r[e]);
    if (o && o.defaultProps)
      for (e in r = o.defaultProps, r)
        n[e] === void 0 && (n[e] = r[e]);
    return { $$typeof: m, type: o, key: _, ref: f, props: n, _owner: d.current };
  }
  return t.Fragment = l, t.jsx = i, t.jsxs = i, t;
}
export {
  v as __require
};
//# sourceMappingURL=index.es12.ts.map
