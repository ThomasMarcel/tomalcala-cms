// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Gatsby = require("gatsby");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Js_undefined = require("bs-platform/lib/js/js_undefined.js");

function make(href, className, title, children) {
  return ReasonReact.wrapJsForReason(Gatsby.Link, {
              to: Js_undefined.fromOption(href),
              className: Js_undefined.fromOption(className),
              title: Js_undefined.fromOption(title)
            }, children);
}

var Link = {
  make: make
};

exports.Link = Link;
/* gatsby Not a pure module */
