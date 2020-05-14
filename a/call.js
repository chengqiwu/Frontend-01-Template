function myCall(fn, thisArgs) {
  var obj = thisArgs || window
  obj.fn = fn
  var args = []
  for (var i = 2; i < arguments.length; i++) {
    args.push("arguments[" + i + "]");
  }

  var res = eval("obj.fn(" + args + ")");
  delete obj.fn
  return res
}

function myApply(fn, thisArgs) {
  var obj = thisArgs || window;
  obj.fn = fn;
  var args = arguments[2]

  var res = eval("obj.fn(" + args + ")");
  delete obj.fn;
  return res;
}