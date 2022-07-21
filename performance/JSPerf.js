// intro

goal = "ensure performance no matter the client";

orient = "to the business objectives for foundation to performance";

perfTypes = [networkLoad, parseAndCompileCode, redneringPerf];

startFirst = "measure";

// JavaScript Perf
guidance = "write code that runs faster, later or not at all";

JavaScriptHastoBe = "parsed and compiled (seen as scripting in Chrome)";

fact = "JavaScript is compiled";
browsers = "use just in time compilation";

let journey = {
  cloud: "has the JS",
  request: "JS is sent",
  parser: "builds an abstract syntax tree data structure",
  interpreter: "or base-line compiler (ignition in V8) get the AST",
  byteCode: "then to bytecode and executed by browser",
  also: "optimizing compiler (turbo fan in V8) to try to make the JS faster",
};

parsing = {
  about: "is slow",
  twoPhases: "eager = full parse and lazy = pre-parse, do minimum",
  devAction: "delay function declarations and classes, parse only when needed",
  holdIt: "doing something twice is twice as slow, see example below",
};

eagerAndLazyExample;
// these are eager parsed
let g = 6;
let h = 99;
// this is lazy parsed
function sum(params) {
  return g / h;
}

// WAIT, this then invokes the lazy parsed func and it has to be eager parsed
sum(5, 6);

ast = {
  is: "data string from parsing placed into a data structure to rep code",
  then: "placed into byte code",
};

finding = "passing diff arg types to a function slow down tubo fan";
helpful = "to use TypeScript to control types and est performant code";

keyTakeaways = {
  one: "ship less JS",
  two: "use the User timing API to determine biggest pain points",
  three: "use a type system",
};
// Rendering Perf
guidance =
  "manage the performance implications of JavaScript running in the browser, there are a host of browser aspects that are in play";

webPageBuild = {
  step1: "req from client to server for web page",
  step2: "res is the web page in HTML (with ref to CSS and JS)",
  step3: "HTML is parsed into DOM tree",
  step4:
    "computed rules are converted to render tree, the stuff to show on page",
  step5: "establish the layout",
  step6: "paint the page with pixels",
  then: "at the first page render",
  renderPipelineIs: [JS, style, layout, paint, composite],
  JSShowsUpAndCan: {
    one: "changes class on object",
    two: "updates inline styles on an object",
    three: "add or remove elements from step4",
  },
};

// these two deal with layout in pipeline
reflows = {
  about: "layout = first time, while reflow = any other re-layout. ",
  are: "expensive",
};

layoutThrashing = {
  is: "JS is violently writing reading the DOM resulting in doc reflows",
};

// these deal with paint in pipeline
paintTriggered = "change to anything other than opacity and CSS transform";

paintActivates = "browser to tell each element to draw a pic of itself";

triggerLayout = "triggers a paint";

// Load Performance
latencyAndBandwidth = {
  bandwidth: "the diameter of the tube, how much stuff?",
  latency: "tube travel time, how long?",
  controlledBy: "by TCP, transmission control protocol: focused on reliability",
  proTip:
    "inital window size is 14kb, so if file < 14, eveything delivered in the first window",
  assetPlacement:
    "how to optimize asset placement?, use a CDN with an edge node",
};

caching = {
  method: "alt to the CDN",
  affects: "only safe http methods, GET, OPTIONS, HEAD",
  about: "need a resource?, you already have it locally, here it is",
  cacheState: {
    missing,
    stale,
    valid,
  },
  cacheProps: [
    "no-store: go get it fresh",
    "no-cache: store a copy, but first check with server",
    "max-age: file only valid for x period",
  ],
  CDNsCache: "via the max-age header, use s-maxage for CDNs only",
  purging: "bad files not possible on client browser, but can with a CDN",
};

serviceWorker = {
  without: "browser req internet for assets",
  with: "browser req service worker for assets",
  config: "using JS to manage cache in service worker",
};

lazyLoading = {
  theCombo: "lazy-loading, pre-loading with React and webpack",
  concept: "do it later, is faster than doing it now",
};

// Tools

babel = {
  for: "modern JS conversion to older JS for use across browsers",
  issue:
    "where modern feautres are used, babel responds with more code to ensure this compatibility",
  plugIns: "using babel-presets-env to outline what will be supported",
};
