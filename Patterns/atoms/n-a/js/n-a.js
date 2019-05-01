function replace_glossary_links() {
    var a, l;
    for (var e = "https://" + 'sra.org.uk', t = document.getElementsByTagName("a"), n = t.length - 1; n >= 0; n--)
        if ("glossary" == t[n].className && null !== document.getElementById("mainContent") && t[n].id.indexOf("glossary-term") === -1) {
            a = t[n].href.toString().replace(e, "");
            t[n].setAttribute("id", "glossary-term-" + n),
                t[n].setAttribute("href", "javascript:handleLink('" + a + "','glossary-term-" + n + "')"),
                t[n].setAttribute("title", "Get definition for " + t[n].innerHTML);
        } else if ("help" == t[n].className && null !== document.getElementById("mainContent") && t[n].id.indexOf("help-term") === -1) {
        a = t[n].href.toString().replace(e, "");
        t[n].setAttribute("id", "help-term-" + n),
            t[n].setAttribute("href", "javascript:showPop('" + a + "','help-term-" + n + "','Help')"),
            t[n].setAttribute("title", "Get help text");
    } else if ("help" == t[n].className && null !== document.getElementById("main-content")) {
        l,
        a = t[n].href.toString().replace(e, "");
        l = t[n].alt && -1 != t[n].innerHTML.indexOf("<img") ? t[n].alt : t[n].innerHTML,
        t[n].setAttribute("id", "help-term-" + n),
        t[n].setAttribute("href", "javascript:showPop('" + a + "','help-term-" + n + "','Help')"),
        t[n].setAttribute("title", "Get help text for '" + l + "'");
    }
}


function handleLink(e, t, n) {
    var a, n = document.getElementById(t);
    killDefinition(),
        a = n;
    var l = document.createElement("div");
    l.id = "shadowPopBox",
        l.style.display = "block",
        l.style.top = "inherit",
        l.style.width = "95%",
        l.style.left = "inherit",
        l.style.position = "absolute",
        l.style.boxShadow = "10px 10px 15px #6d6d6d",
        l.style.zIndex = '1000',
        l.style.backgroundColor = "#fff",
        null !== document.getElementById("main-content") && (l.className = "popover fade bottom in");
    var i = n.parentNode;
    return i.lastChild == n ? i.appendChild(l) : i.insertBefore(l, n.nextSibling),
        loadXMLDocument(e, t, a);
}

function killDefinition() {
    if (document.getElementById("shadowPopBox")) {
        var e = document.getElementById("shadowPopBox");
        e.parentNode.removeChild(e);
    }
}

function showPop(e, t, n) {
    var l;
    var a = document.getElementById(t);
    if (killDefinition(),
        "Glossary" == n)
        l = "Getting glossary term";
    else if ("Definition" == n)
        l = "Getting definition";
    else
        l = "Getting help text";
    var i = document.createElement("span");
    i.id = "shadowPopBox",
        i.className = n;
    var r = a.parentNode;
    return r.lastChild == a ? r.appendChild(i) : r.insertBefore(i, a.nextSibling),
        ajaxXMLDoc(e, l, n);
}

function loadXMLDocument(e, t, n) {
    var t;
    var t, a, l = document.createElement("div");
    l.id = "waitingMessage",
        l.innerHTML = '<h3 id="glossaryBanner" class="popover-title">' + 'Please wait...' + '</h3><div id="waitingIcon" class="popover-content"><img src="/images/loader.svg" alt="Please wait" width="100" height="100" style="border:0;margin:0.5em auto;display:block;"  /></div><div class="pop-footer" onclick="killDefinition()" onkeypress="killDefinition()"><span style="cursor:pointer;font-weight:bold;" class="btn center-block">Close</span></div>',
        document.getElementById("shadowPopBox").appendChild(l);
    var i = new Array;
    i = e.split("#");
    var r = i[1],
        o = new XMLHttpRequest;
    try {
        o.onreadystatechange = function () {
            var n = 800;
            if (4 == o.readyState) {
                var l = document.createElement("div");
                l.id = "tempy",
                    l.innerHTML = o.responseText,
                    document.getElementById("mainContent") ? document.getElementById("mainContent").appendChild(l) : document.getElementById("main-content").appendChild(l);
                var i = document.createElement("div"),
                    s = nextGlossObject(document.getElementById(r));
                if (null == s)
                    i.innerHTML = '<p style="padding:1em">Term unavailable.</p>';
                else {
                    var d;
                    d = s.textContent.length,
                        t = s.innerHTML.replace(/<a(.*?)>/g, ""),
                        d > n ? i.innerHTML = '<p>The definition you have requested is too long to display here.</p><p><a href="' + e + '" target="_blank">Display definition in new window</a></p>' : (a = t,
                            i.innerHTML = "<h4>" + document.getElementById(r).innerHTML + "</h4><p>" + a + "</p>");
                }
                document.getElementById("glossaryBanner").innerText = "Glossary",
                    document.getElementById("glossaryBanner").nextElementSibling.innerHTML = i.innerHTML,
                    document.getElementById("mainContent") ? document.getElementById("mainContent").removeChild(l) : document.getElementById("main-content").removeChild(l)
            }
        }, o.open("GET", i[0], !0), o.send(null);
    } catch (e) {}
}

function ajaxXMLDoc(e, t, n) {
    var a = document.createElement("div");
    a.id = "waitingMessage",
        a.innerHTML = '<h3 id="glossaryBanner" class="popover-title">' + t + '</h3><div id="waitingIcon" class="popover-content"><img src="/images/loader.svg" alt="Please wait" width="100" height="100" style="border:0;margin:0.5em auto;display:block;"  /></div><div class="pop-footer" onclick="killDefinition()" onkeypress="killDefinition()"><span>Close</span></div>',
        document.getElementById("shadowPopBox").appendChild(a);
    var l = new Array;
    l = e.split("#");
    var i = l[1],
        r = new XMLHttpRequest;
    try {
        r.onreadystatechange = function () {
            if (4 == r.readyState) {
                var e, t = document.createElement("div");
                t.id = "tempy",
                    t.innerHTML = r.responseText,
                    t.style.display = "none",
                    null !== document.getElementById("main-content") ? document.getElementById("main-content").appendChild(t) : document.getElementById("mainContent").appendChild(t);
                var a = document.createElement("div");
                if ("popover fade bottom in" != n)
                    var l = nextGlossObject(document.getElementById(i));
                else {
                    var l = document.getElementById(i);
                    null == l ? a.innerHTML = '<p style="padding:1em">Term unavailable.</p>' : (e = document.addEventListener ? l.innerHTML.replace(/<a(.*?)>/g, "") : l.innerHTML.replace(/<A(.*?)>/g, ""),
                        a.innerHTML = "<h4>" + document.getElementById(i).innerHTML + "</h4>" + e);
                }
                "Glossary" == n ? document.getElementById("glossaryBanner").innerText = "Glossary" : "Definition" == n ? document.getElementById("glossaryBanner").innerText = "Definition" : document.getElementById("glossaryBanner").innerText = "Help",
                    document.getElementById("glossaryBanner").nextElementSibling.innerHTML = a.innerHTML,
                    document.getElementById("main-content") ? document.getElementById("main-content").removeChild(t) : document.getElementById("mainContent").removeChild(t),
                    document.getElementById("shadowPopBox").style.display = "block",
                    document.getElementById("shadowPopBox").style.top = "inherit",
                    document.getElementById("shadowPopBox").style.left = "inherit";
            }
        }, r.open("GET", l[0], !0), r.send(null);
    } catch (e) {
        alert(e);
    }
}

function nextGlossObject(e) {
    var t = e;
    if (null !== t) {
        do
            t = t.nextSibling;
        while (t && 1 != t.nodeType && "DD" != t.nodeName);
        return t;
    }
}

function xhrSuccess() {
    this.callback.apply(this, this.arguments);
}

function xhrError() {
    console.error(this.statusText);
}

function loadFile(e, t) {
    var n = new XMLHttpRequest;
    n.callback = t,
        n.arguments = Array.prototype.slice.call(arguments, 2),
        n.onload = xhrSuccess,
        n.onerror = xhrError,
        n.open("get", e, !0),
        n.send(null);
}


if (document.querySelectorAll('.glossary').length >= 1){
  replace_glossary_links()
}
