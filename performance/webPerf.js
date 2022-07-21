// web performance

//github.com/toddhgardner/perf-training-website

// measure
let webVitals = {
  fcp: {
    name: "first contentful paint",
    is: "time between first click/url entry to something was rendered",
    also: "the time until the user sees indication page is loading",
  },
  lcp: {
    name: "largest contentful paint",
    is: "when user percieves/sees most of page and its ready or almost ready",
  },
  cls: {
    name: "cumulative layout shift",
    is: "the measurement of all the movement distances, aka shift on the page a user experiecnes",
    note: "once content is seen, do not move it",
  },
  fid: {
    name: "first input delay",
    is: "browser time delay between the users first click and code execution",
    technical:
      "the functions the browser is being asked to do in the background ",
    and: "the page may look ready, but funtions have setTimeout params",
  },
};

let lighthouse = {
  about: "id problems tha affect site performance",
  location: "dev tools tab",
  settings: [clearStorageOn, simulatedThrottlingOn],
};

let useLighthouse = {
  one: "nav to site in incognito",
  two: "undock dev tools",
  three:
    "set clear storage and sim throtling for a 1x turn down of current hardware",
  four: "Generate Report",
  five: "view core web vitals",
  six: "view any previous reports in tab/dropdown ",
  ensure: "chrome has priority = running in foreground",
};

// metrics

let sourceOfMeasurement = {
  labData: "too controlled and usually no network involved, ie local machine",
  synthData:
    "use test machine or bot to load and respond with results, still limited/ lab like",
  fieldData:
    "capture from users on their networks ie run a lighthouse report on their machiens and get that data",
};

let fieldData = {
  run: "rum tools = real user monitor, like requestMetrics.com",
  thinkAbout: "signal and noise",
  results: "get lighthouse data from the user's machine",
  CrUX: "chrome user experience report",
  fieldData: "https://crux-compare.netlify.app/",
  dataShows:
    "at this site is over the last 28 days, 75% of site X users had this experience",
  googleBestPractices: "web.dev",
  p95: "is a common consideration for that worst users experience ",
};

interpreting = {
  averages: "are misleading",
  bestPractice: "use instead median and percentiles  ",
  googleFocus: "on the p75 number: 75% of users have a better score than this",
  googleRanks: "based on this score",
};

// improve performance
webBusiness =
  "needs definition to drive web performance measures and improvements";

let objectives = ["awareness", "retention", "conversion", "competition"];

competition = "needs to be 20% slower for any real difference";

see = "run synth lighthouse reports at  https://www.lightest.app/";

messure = "real field data";
bounceRate;
sessionTime;

usePerformanceAPI = {
  name: window.Performance,
  entryTimings: [getEntries, getEntriesByType, getEntriesByName],
};

let toUsePerforamce = {
  one: "open incognito",
  two: "perforamce is on global namespace at console/create live expression/performance",
  three:
    "invoke a performance.getEntries() method to return a large array of timing events",
  four: "PerformanceObserver = observe perf. allow for focus on specfic events",
};

capturePerfData = {
  one: "run lighhouse on site",
  two: {
    writeAgent:
      "in the app to capture field data, see the agent written in nexjs-lighthouse app",
    agentAndPerfAPI: "interact programatically",
    useAService: "or use a service to capture perf data",
  },
};

measuring =
  "done with an agent provided by a service or can be hand built like the one from the course repo at public/assets/js/util";
("would be loaded into the index page for use when app runs");

// optimize metrics
first = "infrastructure changes";
let improveFCP = " fast servers, small bundles, short distance";

second = "largest contentful paint = user believes page is almost ready";
let improveLCP = "defer resources, optimize images, reduce req overhead";

let doFewerThings = {
  forJS: "use 'defer' as script attribute",
  // eg: <script defer src="main.js">
  or: "reorder element/scripts to the end of the file",
  hence: "left with load and render of images to promote LCP",
};
