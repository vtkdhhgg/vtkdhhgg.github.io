window.addEventListener("load", function (ev) {
    let pattern = /^(fnref)(.+)$/;
    let base = {html: e1 => '#tooltip' + pattern.exec(e1.id)[2].replace(/\./g, "\\.")}
    let extra = {"theme_name":"core","animation":["shift-away"],"duration":300,"interactive":true,"inertia":true,"placement":"top-start","allowHTML":true,"arrow":true,"distance":15,"arrowTransform":"scale(2)","theme":"core"}
    
    tippy('a[id^="fnref"]',
          Object.assign({},base, extra))
});