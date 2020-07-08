whyGlobalScope

bundlerUse = [
    "files concatenated together prior to delivery to the browser and JS environment",
    "still need a mechanism to account for all the piecs and allow for accss"
]

exposedInGlobalScope =[
    "Js built-ins are" [
        "primitives: undefined, null ...",
        "natives: Date(), Object(), String()",
        "global functions: eval() ...",
        "namespaces: Math, JSON",
        "friends of JS: WebAssembly"
    ],
    "the hosting evnironment for the JS engine exposes these" [
        console,
        "DOM, window, document",
        "timers (setTimeout() ...",
        "web platform APIs: navigator, history, geolocation ..."
    ]
]

whereExactlyIsTheGlobal

browserWindow 

rules = [
    "var for globals",
    "let and const for block scopes"
]