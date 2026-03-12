var isGroupA, is55Match, time_count = 0,
    time_count_pr = 0,
    GA4Key = "G-B6DDWBTM8H";

function Condition_Loaded() {
    if ("undefined" != typeof $ && "undefined" != typeof jQuery) {
        let t = !1,
            e = ""; {
            function i(t) {
                let i = "";
                for (let e = 0; e < t; e++) i += Math.floor(9 * Math.random()) + 1;
                return i
            }
        }
        try {
            t = void 0 !== localStorage.LABID
        } catch (e) {
            t = !1
        } {
            function i(t) {
                let i = "";
                const n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
                for (let e = 0; e < t; e++) {
                    const o = Math.floor(Math.random() * n.length);
                    i += n[o]
                }
                return i
            }
            t ? e = localStorage.LABID : (e = i(15), localStorage.setItem("LABID", e))
        }(is55Match = ["xy-lite-tank-top", "xy-stretch-oversized-muscle-tee", "freshtx-muscle-tank", "xy-stretch-raglan-tshirt-ss24", "core186-muscle-training-tee", "xy-stretch-side-vent-shorts", "xy-stretch-side-vent-tee", "core186-side-vent-training-tee", "core186-raglan-training-tee", "xy-lite-stringer-tank-top"].some(e => document.location.href.includes(e))) ? (isGroupA = 4 < parseInt(e) % 10, test = isGroupA ? "A" : "B", Trigger_infFITS(), AfterbootstrapPR(), Attempt_Signal(), gtag("event", "reg-PageView-inf" + test, {
            send_to: GA4Key,
            event_category: "GAinf_Size",
            event_label: "Track/Size",
            value: 50
        }), gtag("event", "reg-str-PageView-inf" + test, {
            send_to: GA4Key,
            event_category: "GAinf_Size",
            event_label: "Track/Size",
            value: 50
        })) : (parseInt(e) % 10 != 0 ? (test = "A", isGroupA = !0, Trigger_infFITS(), AfterbootstrapPR()) : (test = "B", isGroupA = !1), Attempt_Signal()), gtag("event", "PageView-inf" + test, {
            send_to: GA4Key,
            event_category: "GAinf_Size",
            event_label: "Track/Size",
            value: 50
        }), gtag("event", "str-PageView-inf" + test, {
            send_to: GA4Key,
            event_category: "GAinf_Size",
            event_label: "Track/Size",
            value: 50
        })
    } else time_count <= 20 && setTimeout(Condition_Loaded, 250), time_count += .25
}

function AfterbootstrapPR() {
    [...document.styleSheets].some(e => e.href && e.href.includes("bootstrap")) ? window.location.href.includes("/products/") && Product_Recommendation() : (time_count_pr <= 20 && setTimeout(AfterbootstrapPR, 250), time_count_pr += .25)
}

function Trigger_infFITS() {
    function i() {
        dataLayer.push(arguments)
    }
    void 0 === String.prototype.replaceAll && (String.prototype.replaceAll = function(e, t) {
        e = e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), e = new RegExp(e, "g");
        return this.replace(e, t)
    });
    const e = document.createElement("script");

    function i() {
        dataLayer.push(arguments)
    }
    e.src = "https://www.googletagmanager.com/gtag/js?id=" + GA4Key, e.async = !0, document.body.appendChild(e), window.dataLayer = window.dataLayer || [], i("js", new Date), i("config", GA4Key, {
        groups: "ga4"
    });
    for (var o, r, E, F, t, a, d, s, n, l, c = window.dataLayer.length - 1, p = 0; p < c; p++)
        if ("event" == window.dataLayer[p][0] && "ga4" == window.dataLayer[p][2].send_to) {
            let e = Object.assign({}, window.dataLayer[p][2]);
            e.send_to = GA4Key, i(window.dataLayer[p][0], window.dataLayer[p][1], e)
        }
    function m() {
        if (0 < document.querySelectorAll(".variation-label-container").length)
            for (var e = document.querySelectorAll(".variation-label").length, t = 0; t < e; t++) document.getElementsByClassName("variation-label")[t].innerText.replaceAll(" ", "").split("(")[0] == r.replaceAll(" ", "") && document.getElementsByClassName("variation-label")[t].click()
    }
    window.addEventListener("message", function(e) {
        var t;
        "https://inffits.com" === e.origin && "GA4Event" === e.data.header && (t = GA4Key, "GA4Event" === (e = e).data.header && (i("event", e.data.event_action, {
            send_to: t,
            event_category: e.data.event_category,
            event_label: e.data.event_label,
            value: e.data.value
        }), "FindmySize" == e.data.event_action.slice(0, -1) && (i("set", "user_properties", {
            inffits_source_by_event: "inffits_used"
        }), $(".inf_sf-container").css("justify-content", "space-between"))))
    }), window.addEventListener("message", function(e) {
        "POPUP_adjustment" == e.data.MsgHeader && ($("#inffits_ctryon_window").css("box-shadow", "none"), $("#inf_close").css("top", "16%"), $("#inf_close").css("right", "-10px")), "POPUP_adjustment_LMD" == e.data.MsgHeader && (1 == e.data["data-type"] ? ($("#inf_close").hide(), $("#inf_close").css("top", "-5px"), setTimeout(function() {
            $("#inf_close").fadeIn()
        }, 350)) : 0 == e.data["data-type"] && ($("#inf_close").hide(), $("#inf_close").css("top", "16%"), setTimeout(function() {
            $("#inf_close").fadeIn()
        }, 350))), "SizeAI_Fast" == e.data.MsgHeader && ($(".inf_sf-main").hide(), $("#loader-section").hide(), "4_2" == e.data.DP_CODE ? $(".inf_sf-main").hide() : ($("#front_top_size").parent().fadeIn(), $("#front_top_size").parent()[0].style.display = "flex", $("#front_sec_size").parent().fadeIn(), $("#front_sec_size").parent()[0].style.display = "flex", $("#front_top_per").html(e.data.Top_Per), $("#front_sec_per").html(e.data.Sec_Per), $("#front_top_size").text(e.data.Top_Size), $("#front_sec_size").text(e.data.Sec_Size), r = e.data.Top_Size, e.data.Auto || $(".inf_sf-section-block")[0].classList.add("active"), $(".inf_sf-section-block")[0].click(), $(".inf_sf-main").css("background", "#eee"), $(".inf_sf-main").css("display", "flex")), window.location.href.includes("/products/") && (window.innerWidth, $("#infFITS_sizefast .logo-img").css("background-image", 'url("' + $("#sl-product-image")[0].src + '")'), document.getElementById("inffits_ctryon_window").contentWindow.postMessage({
            MsgHeader: "ImageUpdate",
            src: $("#sl-product-image")[0].src
        }, "*")), 1 == e.data.sarr.length && ($(".inf_sf-section-block")[1].style.display = "none"), e.data.Auto && (79488e5 < (new Date).getTime() - e.data.TID ? i("set", "user_properties", {
            inffits_source_by_event: "null"
        }) : i("set", "user_properties", {
            inffits_source_by_event: "inffits_used"
        }))), "SizeAI_Fast_pass" == e.data.MsgHeader && (window.location.href.includes("/products/") && (window.innerWidth, $("#infFITS_sizefast .logo-img").css("background-image", 'url("' + $("#sl-product-image")[0].src + '")'), document.getElementById("inffits_ctryon_window").contentWindow.postMessage({
            MsgHeader: "ImageUpdate",
            src: $("#sl-product-image")[0].src
        }, "*")), $("#loader-section").hide(), $(".inf_sf-main").hide()), "SizeAI_fast_off" == e.data.MsgHeader && (o = !1, $("#loader-section").hide())
    }), Math.floor(Date.now() / 1e3) < 1688112e3 && (n = "https://6o29gh0uc5.execute-api.ap-northeast-1.amazonaws.com/v0/param/", $.ajax({
        url: n,
        method: "GET",
        dataType: "text",
        data: "Brand=VER",
        crossDomain: !0,
        async: !0,
        success: e => {},
        error: e => {}
    })), window.location.href.includes("/confirm") && !window.location.href.includes("return_orders") && (E = "VER", F = function(e) {
        for (var t = "", i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = i.length, o = 0; o < e; o++) t += i.charAt(Math.floor(Math.random() * n));
        return t
    }, window.addEventListener("message", function(e) {
        function i(e) {
            AWS.config.region = "ap-northeast-1", AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                IdentityPoolId: "ap-northeast-1:ec9d0f5d-ae3e-4ff2-986f-2025ddbedf1a"
            }), AWS.config.credentials.get(function(e) {}), e = '{"action": "' + e + '"}', new AWS.Lambda({
                region: "ap-northeast-1",
                apiVersion: "2015-03-31"
            }).invoke({
                FunctionName: "Logging",
                InvocationType: "RequestResponse",
                LogType: "Tail",
                Payload: e
            }, function(e, t) {})
        }
        if ("BODYID_MSG" == e.data.MsgHeader) {
            bodyid_from_ls = e.data.BODYID;
            var t = document.documentElement.innerHTML.split('app.value(\'order\', {"_id":"')[1].split('",')[0],
                n = document.documentElement.innerHTML.split('"order_number":"')[1].split('"')[0],
                o = document.documentElement.innerHTML,
                a = o.split(',"object_data":{"_id":"'),
                r = o.split("data-variation-id=").length - 1,
                d = [];
            try {
                for (var s = 0; s < r; s++) d.push(a[s + 1].split('",')[0].replace(/"|'/g, ""))
            } catch (e) {
                d = "product_id_error"
            }
            var l = o.split('cart-promotion-lables">'),
                r = o.split("data-variation-id=").length - 1,
                c = [];
            try {
                for (s = 0; s < r; s++) c.push(l[s + 1].split("</div>")[1].replace(/\n|\r/g, "").replace(/<div>/g, "").trim().replace(/"|'/g, ""))
            } catch (e) {
                c = "name error"
            }
            var p = o.split("data-variation-id="),
                m = [],
                f = [],
                A = [];
            try {
                for (s = 1; s < p.length; s++) {
                    var g = (p[s].split("item-promotion")[0].match(/variant-name/g) || []).length;
                    A.push(g.toString().replace('"', ""));
                    for (var u = p[s].split("item-promotion")[0].split("variant-name"), y = "", b = 1; b < u.length; b++) y += u[b].split(">")[1].split("<")[0] + "_";
                    m.push(y.replace(/"|'/g, "").replace(/\n|\r/g, "").replace(/\\/g, ""))
                }
            } catch (e) {
                A = "count_list error", y = "", m = "dvitem_id_list error"
            }
            try {
                for (s = 1; s < p.length; s++) f.push(p[s].split('item-price">')[1].split("</span>")[0].split('"price-label">')[1].replaceAll(",", ""))
            } catch (e) {
                i("price_item_list " + E), i(f.toString()), f = "price error"
            }
            "undefined" == typeof bodyid_from_ls && (bodyid_from_ls = "nobodyid"), AWS.config.region = "ap-northeast-1", AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                IdentityPoolId: "ap-northeast-1:ec9d0f5d-ae3e-4ff2-986f-2025ddbedf1a"
            }), AWS.config.credentials.get(function(e) {});
            var h = "",
                e = "",
                o = "";
            document.documentElement.innerHTML.includes('"currentUser\\":null') || (h = document.documentElement.innerHTML.split('href="/users/')[1].split('",')[0].split('/edit"')[0]), gvid_exist = !1;
            try {
                gvid_exist = void 0 !== localStorage.GVID
            } catch (e) {
                gvid_exist = !1
            }
            gvid_exist ? e = localStorage.GVID : (e = F(20), localStorage.setItem("GVID", e)), lgvid_exist = !1;
            try {
                lgvid_exist = void 0 !== localStorage.LGVID
            } catch (e) {
                lgvid_exist = !1
            }
            lgvid_exist ? o = localStorage.LGVID : (o = F(20), localStorage.setItem("LGVID", o));
            var v = document.querySelectorAll(".product-image"),
                _ = v.length,
                x = [],
                w = [],
                I = [],
                S = [],
                k = [];
            try {
                for (s = 0; s < _; s++) v[s].hasAttribute("href") ? x.push(v[s].getAttribute("href").split("/").slice(-1)[0]) : x.push("gift"), w.push(document.querySelectorAll(".item-information > .description > div > span")[s].innerText.trim()), S.push(document.querySelectorAll(".cart-item  > .item-quantity")[s].innerText.split(":").slice(-1)[0].trim()), k.push(document.querySelectorAll(".item-price  > .price-label")[s].innerText.split("$").slice(-1)[0].replaceAll(",", ""))
            } catch (e) {
                x = "product_id_query error", w = "name_query error", S = "count_query error", k = "price_query error"
            }
            try {
                for (s = 0; s < _; s++) {
                    size_query_ptr = document.querySelectorAll(".item-information > .description")[s].querySelectorAll(".variant-name"), size_query_val = "";
                    for (b = 0; b < size_query_ptr.length; b++) size_query_val += size_query_ptr[b].innerText + "_";
                    I.push(size_query_val)
                }
            } catch (e) {
                I = "size_query error"
            }
            t = '{"PRODUCT_ID": "' + d.toString() + '","NAME": "' + c.toString() + '","Size": "' + m.toString() + '","PRICE": "' + f.toString() + '","COUNT": "' + S.toString() + '","PRODUCT_ID_QUERY": "' + x.toString() + '","NAME_QUERY": "' + w.toString() + '","Size_QUERY": "' + I.toString() + '","PRICE_QUERY": "' + k.toString() + '","COUNT_QUERY": "' + S.toString() + '","GVID":"' + e + '","LGVID":"' + o + '","MRID":"' + h + '","CLOTHLIST": "' + bodyid_from_ls.toString() + '","Brand": "' + E + '","ORDERID_INNER": "' + n + '","ORDERID": "' + t + '"}';
            new AWS.Lambda({
                region: "ap-northeast-1",
                apiVersion: "2015-03-31"
            }).invoke({
                FunctionName: "TransactionRecordByID_Brand",
                InvocationType: "RequestResponse",
                LogType: "Tail",
                Payload: t
            }, function(e, t) {
                e ? i("error" + e.errorMessage.toString().replace(/"|'/g, "").replace(/\n|\r/g, "")) : pullResults = JSON.parse(t.Payload);
                try {
                    localStorage.removeItem("GVID")
                } catch (e) {}
            })
        }
    }, !1), (l = document.createElement("script")).type = "text/javascript", l.src = "https://sdk.amazonaws.com/js/aws-sdk-2.243.1.min.js", document.head.appendChild(l), l.addEventListener("load", function() {
        LINK_SRC = "https://inffits.com/";
        var e = document.createElement("div");
        e.innerHTML = '<div id="LS_include_div" style="position:absolute; top:0px; text-align:left; display:none; border:none; outline:none;  z-index:19; touch-action:none"><iframe id="inffits_LS_window" style=" width:100%; height:100%; display:none; position:relative; border:none; outline:none;  z-index:19" src="https://inffits.com/webDesign/HTML/DB/LS/LS_include_Size.html"></iframe></div>', document.body.appendChild(e)
    })), window.location.href.includes("/apply_return") && (E = "VER", F = function(e) {
        for (var t = "", i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = i.length, o = 0; o < e; o++) t += i.charAt(Math.floor(Math.random() * n));
        return t
    }, window.addEventListener("message", function(b) {
        function e() {
            if ("BODYID_MSG" == b.data.MsgHeader) {
                bodyid_from_ls = b.data.BODYID;
                var e = document.querySelectorAll(".return-items-section > .section-header > p > a")[0].getAttribute("href").split("/").slice(-1)[0],
                    t = document.querySelectorAll(".return-items-section > .section-header > p > a")[0].innerText;
                document.documentElement.innerHTML;
                "undefined" == typeof bodyid_from_ls && (bodyid_from_ls = "nobodyid"), AWS.config.region = "ap-northeast-1", AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                    IdentityPoolId: "ap-northeast-1:ec9d0f5d-ae3e-4ff2-986f-2025ddbedf1a"
                }), AWS.config.credentials.get(function(e) {});
                var i = "",
                    n = "",
                    o = "";
                document.documentElement.innerHTML.includes('"currentUser\\":null') || (i = document.documentElement.innerHTML.split('href="/users/')[1].split('",')[0].split('/edit"')[0]), gvid_exist = !1;
                try {
                    gvid_exist = void 0 !== localStorage.GVID
                } catch (e) {
                    gvid_exist = !1
                }
                gvid_exist ? n = localStorage.GVID : (n = F(20), localStorage.setItem("GVID", n)), lgvid_exist = !1;
                try {
                    lgvid_exist = void 0 !== localStorage.LGVID
                } catch (e) {
                    lgvid_exist = !1
                }
                lgvid_exist ? o = localStorage.LGVID : (o = F(20), localStorage.setItem("LGVID", o));
                var a = document.querySelectorAll(".product-image"),
                    r = a.length,
                    d = [],
                    s = [],
                    l = [],
                    c = [],
                    p = [],
                    m = [],
                    f = [],
                    A = [];
                try {
                    for (var g, u = 0; u < r; u++) d.push(a[u].getAttribute("href").split("/").slice(-1)[0]), s.push(document.querySelectorAll(".item-information > .description > div")[u].innerText.trim()), obj = document.querySelectorAll(".return-item-row")[u].querySelectorAll("div"), g = document.querySelectorAll(".return-item-checkbox")[u].checked ? 1 : 0, c.push(obj[Object.keys(obj)[Object.keys(obj).length - 6 - g]].innerText.match(/[0-9]+/g)[0]), p.push(obj[Object.keys(obj)[Object.keys(obj).length - 5 - g]].innerText.match(/[0-9]+/g)[0]), 0 == document.querySelectorAll(".return-item-row")[u].querySelectorAll(".input-item_quantity ").length ? m.push(obj[Object.keys(obj)[Object.keys(obj).length - 3 - g]].innerText.match(/[0-9]+/g)[0]) : m.push(document.querySelectorAll(".return-item-row")[u].querySelectorAll(".input-item_quantity")[0].value), f.push(document.querySelectorAll(".return-item-row > div > .select-cart-form")[u].querySelectorAll("select")[0].value), A.push(document.querySelectorAll(".return-item-checkbox")[u].checked)
                } catch (e) {
                    d = "product_id_query error", s = "name_query error", c = "count_query error", p = "price_query error", m = "return_quantity_query error", f = "return_reason_query error", A = "return_if_query error"
                }
                try {
                    for (u = 0; u < r; u++) {
                        size_query_ptr = document.querySelectorAll(".item-information > .description")[u].querySelectorAll("span"), size_query_val = "";
                        for (var y = 0; y < size_query_ptr.length; y++) size_query_val += size_query_ptr[y].innerText + "_";
                        l.push(size_query_val)
                    }
                } catch (e) {
                    l = "size_query error"
                }
                e = '{"PRODUCT_ID_QUERY": "' + d.toString() + '","NAME_QUERY": "' + s.toString() + '","Size_QUERY": "' + l.toString() + '","PRICE_QUERY": "' + p.toString() + '","COUNT_QUERY": "' + c.toString() + '","RETURN_QUANTITY_QUERY": "' + m.toString() + '","RETURN_REASON_QUERY": "' + f.toString() + '","RETURN_IF_QUERY": "' + A.toString() + '","GVID":"' + n + '","LGVID":"' + o + '","MRID":"' + i + '","CLOTHLIST": "' + bodyid_from_ls.toString() + '","Brand": "' + E + '","ORDERID_INNER": "' + t + '","ORDERID": "' + e + '"}';
                new AWS.Lambda({
                    region: "ap-northeast-1",
                    apiVersion: "2015-03-31"
                }).invoke({
                    FunctionName: "ReturnRecordByID_Brand",
                    InvocationType: "RequestResponse",
                    LogType: "Tail",
                    Payload: e
                }, function(e, t) {
                    e ? function(e) {
                        AWS.config.region = "ap-northeast-1", AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                            IdentityPoolId: "ap-northeast-1:ec9d0f5d-ae3e-4ff2-986f-2025ddbedf1a"
                        }), AWS.config.credentials.get(function(e) {});
                        e = '{"action": "' + e + '"}';
                        new AWS.Lambda({
                            region: "ap-northeast-1",
                            apiVersion: "2015-03-31"
                        }).invoke({
                            FunctionName: "Logging",
                            InvocationType: "RequestResponse",
                            LogType: "Tail",
                            Payload: e
                        }, function(e, t) {})
                    }("error" + e.errorMessage.toString().replace(/"|'/g, "").replace(/\n|\r/g, "")) : pullResults = JSON.parse(t.Payload);
                    try {
                        localStorage.removeItem("GVID")
                    } catch (e) {}
                })
            }
        }
        for (var t = 0; t < document.querySelectorAll(".return-item-checkbox").length; t++) document.querySelectorAll(".return-item-row > div > .select-cart-form")[t].addEventListener("change", e), document.querySelectorAll(".return-item-checkbox")[t].addEventListener("change", e);
        document.querySelector(".btn-success").addEventListener("click", e)
    }, !1), (l = document.createElement("script")).type = "text/javascript", l.src = "https://sdk.amazonaws.com/js/aws-sdk-2.243.1.min.js", document.head.appendChild(l), l.addEventListener("load", function() {
        LINK_SRC = "https://inffits.com/";
        var e = document.createElement("div");
        e.innerHTML = '<div id="LS_include_div" style="position:absolute; top:0px; text-align:left; display:none; border:none; outline:none;  z-index:19; touch-action:none"><iframe id="inffits_LS_window" style=" width:100%; height:100%; display:none; position:relative; border:none; outline:none;  z-index:19" src="https://inffits.com/webDesign/HTML/DB/LS/LS_include_Size.html"></iframe></div>', document.body.appendChild(e)
    })); {
        function F(e) {
            for (var t = "", i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = i.length, o = 0; o < e; o++) t += i.charAt(Math.floor(Math.random() * n));
            return t
        }
        window.location.href.includes("/products/") && (t = document.getElementsByTagName("HEAD")[0], (l = document.createElement("link")).rel = "stylesheet", l.type = "text/css", l.href = "https://inffits.com/gtm/gtm_infFITS.css", t.appendChild(l), window.addEventListener("message", function(e) {
            if ("IDRxReady" == e.data.MsgHeader) {
                var t = "",
                    i = "",
                    n = "",
                    e = document.getElementById("inffits_ctryon_window").contentWindow;
                document.documentElement.innerHTML.includes('"currentUser\\":null') || (t = document.documentElement.innerHTML.split('href="/users/')[1].split('",')[0].split('/edit"')[0].length < 30 ? document.documentElement.innerHTML.split('href="/users/')[1].split('",')[0].split('/edit"')[0] : ""), gvid_exist = !1;
                try {
                    gvid_exist = void 0 !== localStorage.GVID
                } catch (e) {
                    gvid_exist = !1
                }
                gvid_exist ? i = localStorage.GVID : (i = F(20), localStorage.setItem("GVID", i)), lgvid_exist = !1;
                try {
                    lgvid_exist = void 0 !== localStorage.LGVID
                } catch (e) {
                    lgvid_exist = !1
                }
                lgvid_exist ? n = localStorage.LGVID : (n = F(20), localStorage.setItem("LGVID", n)), 9e3 == (new Date).getTime() % 10 ? (a = "B", document.getElementById("SizeAItag").style.display = "none", document.getElementById("infFITS_sizefast").style.display = "none", document.getElementById("infFITS_findSize").style.display = "none") : (a = "A", document.getElementById("SizeAItag").style.display = "block", document.getElementById("infFITS_sizefast").style.display = "block"), $(".inf_sf-main").hide(), $("#loader-section").css("display", "flex"), $(".inf_sf-section-block").removeClass("active"),
                    function(e, t, i, n, o, a) {
                        if ("undefined" != typeof ga && "function" == typeof ga.getAll && void 0 !== ga.getAll()[0]) try {
                            var r = ga.getAll()[0].get("clientId")
                        } catch (e) {
                            r = "notfoundgaid"
                        } else r = "notfoundgaid";
                        i.postMessage({
                            MsgHeader: "IDRxGet",
                            MRID: e,
                            GVID: t,
                            LGVID: n,
                            ga_id: r,
                            TESTING: o,
                            SizeAIFast_switch: a
                        }, "*")
                    }(t, i, e, n, a, o), document.getElementById("inffits_ctryon_window").contentWindow.postMessage({
                        MsgHeader: "RemoveWaistFlow"
                    }, "*"), document.getElementById("inffits_ctryon_window").contentWindow.postMessage({
                        MsgHeader: "Display",
                        FitText: d.FitText,
                        SizeOpt: d.SizeOpt,
                        FontWeightBold: d.FontWeightBold
                    }, "*")
            }
        }, !1), n = "https://api.inffits.com/httpgpi/model", l = {
            Brand: "VER",
            url: decodeURI(document.location.href.split("?")[0]),
            CONFIG: "on",
            DB: "on"
        }, $.ajax({
            url: n,
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(l),
            async: !0,
            success: e => {
                null !== e && e.pOnline && (e = JSON.stringify(e), o = !0, s = JSON.parse(e).Gender_ClothID, e = JSON.parse(e), d = e.Settings.Display, document.body.insertAdjacentHTML("beforeend", '<div class="" id="SizeAItag" style="visibility: hidden;position: fixed;right: 0px;top:calc(50vh - 62px);width: 35px;background: black;text-align: center;color: white;letter-spacing: .1rem;border-radius: 3px 0 0 3px;font-size: 12px;font-weight: 300;box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;font-family: Noto Sans TC, sans-serif; padding:10px;z-index: 1000000000;cursor:pointer;transition: 0.5s all;opacity:0.1;pointer-events: none;font-weight:400"><span style="font-family: inherit">AI<br>找<br>尺<br>寸</span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" class="eva eva-arrow-forward-outline" fill="#000" style="position: relative;top: 8px;left:0px;color: white;transform: rotate(90deg);display:block ;background: white;border-radius: 100%;margin-bottom: 10px "><g data-name="Layer 2"><g data-name="arrow-forward"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"></rect><path d="M5 13h11.86l-3.63 4.36a1 1 0 0 0 1.54 1.28l5-6a1.19 1.19 0 0 0 .09-.15c0-.05.05-.08.07-.13A1 1 0 0 0 20 12a1 1 0 0 0-.07-.36c0-.05-.05-.08-.07-.13a1.19 1.19 0 0 0-.09-.15l-5-6A1 1 0 0 0 14 5a1 1 0 0 0-.64.23 1 1 0 0 0-.13 1.41L16.86 11H5a1 1 0 0 0 0 2z"></path></g></g></svg></div>'), "left" == e.Settings.SizeAITag.position ? (document.getElementById("SizeAItag").style.left = 0, document.getElementById("SizeAItag").style.right = "auto", document.getElementById("SizeAItag").style.borderRadius = "0px 3px 3px 0px") : "right" == e.Settings.SizeAITag.position && (document.getElementById("SizeAItag").style.right = 0, document.getElementById("SizeAItag").style.left = "auto", document.getElementById("SizeAItag").style.borderRadius = "3px 0px 0px 3px"), document.getElementById("SizeAItag").style.background = e.Settings.SizeAITag.tagcolor, document.getElementById("SizeAItag").style.color = e.Settings.SizeAITag.tagtextcolor, document.getElementById("SizeAItag").querySelector("span").innerHTML = e.Settings.SizeAITag.tagtext, "close" == e.Settings.SizeAITag.tagtextheight ? document.getElementById("SizeAItag").style.lineHeight = "14px" : document.getElementById("SizeAItag").style.lineHeight = "inherit", 1 == e.Settings.SizeAITag.tagarrow ? document.getElementById("SizeAItag").querySelector("svg").style.display = "block" : document.getElementById("SizeAItag").querySelector("svg").style.display = "none", document.getElementById("SizeAItag").style.top = "calc(50vh - " + document.getElementById("SizeAItag").clientHeight / 2 + "px)", $(function() {
                    document.querySelector(".quantity-wrapper") ? e = document.querySelector(".quantity-wrapper") : document.querySelector(".quantity") && (e = document.querySelector(".quantity")), null !== e && e.insertAdjacentHTML("beforebegin", '<div id="infFITS_sizefast" style="/* width: 100%; font-size:14px;*/font-weight: 600;font-family: Noto Sans TC,sans-serif;cursor: pointer;display: block;position: relative;padding: 10px 0;letter-spacing: .1rem;margin-bottom:24px;opacity: 0;-webkit-animation: fadeIn_wrapper 1s 0.4s ease forwards; animation: fadeIn_wrapper 1s 0.4s ease forwards;border-radius:50px"><div style="position: absolute;right: -6px;border: 0;opacity: 0.5;bottom:-24px"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPUAAABuCAQAAABVGZ1uAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflBB0KLijuiy0TAAAI9UlEQVR42u2ceXBVZxXAf/e9lxCWBBIiSYGyFCiUJRCmAu0MU6ColC50EKUKYqntjEq102m1lVFqRx3Brlpb7JSpQpGBhqWVgtiELRRwYysIRRgKgUgIWR6Q7WV5zz9yc+e++/a75L0w5/f+ufdbzz3nW8/3JSAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIKYySbAESIo088ulFK9VcxptscboWXcfUucxmDuPJJR0/dZxnDxs5jF9L4aY/aSZKrqNSe86jZ1BcE5cJhI1JDD8VNIUJz2IwwxhCPll0A3x4qaCMz7lIjb0K7BqmVriPpUzBbQivZDWvUqG+5VHEMNoSLNvDBzypNhg3K3mAVl3cfhbRCLh5iwd1MYnKX88CDgWFpTGRB5nOCLLxGNK3co0LHKKE/ZR3op6TjpsfUEMgwu9jblfT9edsxFTRfu/jUkvwsMUQV0oPVYZNpsru+NVxd9A33cl7VMfM1cJJfsXoLtIhbWAxdVEVUky+aur/mjLDBp2pNxvi9mqm3mjJ1Dd0pk5nCeUJ5L3AI3ao0WUhb3+mMZtCujtq6An8PMYsOZNnLX1H55LOUl6hfwI5BtjzdWYL8fAExWxnCyWsYZRjinHzJIMMYYGQVIuZ4pgEdvMdnqdbQjmOU2JHxR6T+R7iVXoBkMM8MvkGtY4oZiSzg96P8hfO0IupPECWGuangeEcMF1HfM3dWs/qyD0uoqHbaEPBHaaeD3U7BAuYM7WHR1RDt3MPE9lphzghTFbn4XaKeIaLAKxiHm/Qh/McoISDlIXNfYWymEsaN2fikuR/nA9Z3QdIY4BBhzXUhKmzXt1qPRYyRsFZ9nGUchpwkcUARlHA7fRWYyv5wB5VmjN1epABIE0TzG5G6dRWxjLV0NDKetpQOEi5bmdtpIilcfTGligldNDGMn4dEupnKJsMuniXl8No1U81MID7DOGNvMmbXDBMSn24gy8zhwLc7OY/9qjSnKmbOMdU3buXz+0RJ4Rs3fMZzgfFFcXM7eOGbZKEd2hkhPT061yJWMZoBhtC3uEnYXbrXg5ykJXcz6Osp8WeDzA3A/l5N2hrv44T9ogTVb7mhN0jzu9HQ/UXrc6hZAS9e1kbxS1TyR+Zww67RDW7LCtlEU9TQDpX2MTv7Wp5MejqroQ+hvd6qmPk8NpXuVlTwy4OcAtp1FDlkGJuPoxrgr4Ucq6zKjdvamhybIa+WakgEDQyZfAitewO4ylwALOmdtFTN0/5dKc2Gbp9Yyv1auq+5JGFizoquZrAcK/vB4FOmiac4zTXDIP4GDawkY0cjTmUW8asqQfwNv3U1uhmFW9pMY/zmLp8crOHZ+jODOZyJ/l0R8FHNcfYzDauRyz7VgrUp0DQirUfD9GCAiicjnM3nFp8xjHuMYTl8l2+xWn+xT/4lPPUdE4fj58RVOgc8vod52904R8xgSIaQhz4zWxjfMSyF9NCs/pr0+Xy60J/FiZf6HHHSwl+VeTjjkgM45Ihx7Ko6R+lJeKxhp8ajvAnljDJCT+F+blav/EJRHgeyZ8ZHSZvGrMZxCKOhC3ZHUEqRXfxwE08TOWXUVftCtv5xLQGzFDETBZElCabbCbwbbx8xk62coRm+6q2siyLzfAocWNZwfywnnP7BrDJTI6RoraTTV3Pc/Tk4Rip+jCFKXyfj1nJvjh8eXGRzMO/e5mbxNrbsUmNCVDOE6yI6zJRNvPZzC9CduMm6QxTN7KfP/AyazlrqPvrYWfCeGTqOufToVSxlIdZG9d5VQ5LeYMcO6p1dgAHOMNP2cF1QGEoL7JQF1fAYE6F5CjTOQPHMlB7vsphdXB3cdpxuZ3Ezz4OMpZZfImx5MZouAup5DnT99o0nDZ1FUsoVp8DnONHjOSLWmwOt4UxdTG7tRxvs1gLP8xXtZ11ot7wSCTP1drKUY7yO26jkEkUMpzciIvNx9nGLqsVOm3qTYYbFBVs1pnaeBjajl+37mwzhNvtREn2HraBE5zgPTK5lbHcxd2MDroJ0E4W32SP1XWFs6ZuZnuIMo/RTLr21iNGCUqUt9j8jXVRB0eFfzr6/fFzg5Oc5H36MJEFzNNu2HRwF1+IcjgaF86a+kYYL7kXn87Uzi6vjrPG0fLtx8su9lLM6+QFheeTb9XUzqraR2NIWGsnbnC65jq9jfW8YwjrRmZqKyOQ9Lkw9RjOLXGkOmTbwlMj1dp98GzsDtpRtt0EDSeD5WxmTsy780MMq/EG65cUnN9Xx0tP7mA6OSznmhY2kom6FNXW95ZJZxIz6c06illDacRLHWN0W8x2LnHZatWpYOpMxjOdGRSQQ4AMVlABKIzmpaBDzONdvle7WEhvoAdzmMVJdlLKSSpp0IbrDPK5l6cYZ8j5ifXz7FQw9XRWa35ehaeYxj5qGMw0huhS1VCabEEtM4b7teduFFLID6mkjHKqaEShNwMZwaAQV0otG6xXngqmPsxFnUtfYQITwqTawbFkC2qZ+SF/q5XOQJ3rNxJr+Lv1ylNhWXaJV/DFTPOanWe3SWEgXzOVr4QVdqzHU8HUsJ6VUefhOl7g38kW0jJ1Ua9ZRaKY71lfkkGqmNrHC/w2Ys++yrOsTraINuDlx8xjSwLm9vI6iwxHv6YxP1frc7oiPIcrXQn6fyUdqa/zPEd4mgJD4/Oxl+XaSVeiX5N4Q3bHeLdWZyvF7GMSc5nB8Bh760pKWEWpfa4Us6auYyt9tdPj47qYT/lQdX0qVKmXg/XUsEU75FB09z59rKGEWXyFMeTgwccVDvMRe+LuBU38lf66icCd8ELOz370p2kujsdQdT1bydXV6Yr5x3RNlFJKHuOYTCHD6Ecm3fCgqBcl67jCKQ6wm1P2nuOZP6/Vt/eAzq/tCiozVFFKULv3h8zRHrLJxkMTtXgT3Ekb+2AgYX+7y6CR2CUY6/QnILOHLHLpSzY9SaONRrxUUUmt/W5RQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQUhx/g97pR3z75t9qgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNC0yOVQxMDo0NjowNCswMDowMC8cV2kAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDQtMjlUMTA6NDY6MDQrMDA6MDBeQe/VAAAAAElFTkSuQmCC" height="30px"></div><div id="infFITS_sizefast_wrapper"><div class="wrapper-flex"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.19 15.56" style="fill:none;stroke:#000000;stroke-width:2px;height: 10px;position:relative;right:3px;"><path d="m.71.71l7.07,7.07L.71,14.85"></path></svg></div><div class="inf_sf-container"><div class="inf_sf-maintext"><div style="font-weight: bold;">AI</div><div>找尺寸</div></div><div class="inf_sf-main"><div class="inf_sf-section"><div class="inf_sf-section-block"><span id="front_top_size" class="front_size"></span>&nbsp;<span class="front_per active" id="front_top_per"></span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACBQAAAgUAWFwnqMAAAAHdElNRQfpBgQOLjND9MctAAADZ0lEQVRo3sWZPUwUQRTHf4AREwPCxSPYSAzFYUKDlQJ+RVpa/G6MFYSEXH+tyTXKFYZcbGiEjsJCkouJFIaYwMXEWABixATIwZ3RQgHNHWOxt3hwM7sz+8HN63Zm5/ffna8379VhVqLE6KGbGOeIcJqTwF9+84NNlvnEB5bJm3RYZ4C+zAC9XKCFBkWbEj/5yjxveG8mw610kWCRXYSm7ZIlQVcw8BhJ1rTRlbZGkpg/eCtxVj3BbVslTqtXfB8ZSr7wAkGJDL3m8EZG2PANt22dYRpN8BFS7AWGFwj2GCeii29nOlC4bdO06+FnQsELBDPuEiJMhYa3/oLjQDTyLFS8QJBymo7DAU89+XQcUeF7WQ8dLxBs0CfDt5I5FrxAkJHtjvEAdj1dKxE/io/53PNNbdU+purLAh7RqbtPBVI6eVzpi3R5PHCd7Q8fyfJLUfuNi/8FJELAFxiljQhDfFG0SNj4KNkQ8A8PPu8mn6VtskStBoMGzpae5XlwaMRvsCJptcugVZ0KGQ9wnSVJy5Q1AAsB4+9L5/0Auaq2C0Shn8Ix4KGOSclM6a+nh5bAVneBMV4q6gTfq5610HOCbuU1AwRvecUphrikgc8zxpSyto0rVc8a6IY55e/c5wVnAehk1vXnb3PPQVwTE+xL3pqDZSU+zZmDDjpcJGxz1wHfzHPFUbcCeWlFiYkKvCXhdeB4QR52pF8/QXNVRyoJW9zxiBfsQFHyeJ42aWfnJRL84AVFuYCnyg6PStjitg+8oCgfgkmHuEGlBL94wY58EuYYcOjYlpDzjRfkVctwiauOEmbJMeQbL1hWb0TOEjq45jBMunjBHKSVlc4S/H+9QJCGUek68C7BBF9k1O04NpVgghcU6Hd3SEwkmOHLDom7S6YrwRRfdsl0nFIdCeb4A6c0yqJrYzcJ5njBou2W611MnCR4wVdcTHSvZioJ3vBrh0O5Sa2XZBK84QXJw93oXs+PSvCKX62OIusGKColNHnESwIUJiGaJW6VV8+Ex6hKRh7A1g9SbZLmCe+kjra7KYJUUPMwHTQyHrqAlHPcPBJSoNq2afeYeY2D1ZaEmobrrYEYDzxhkdJPWFjTcTjAyPEGI2YpG6v0Bpa06jOHW6XGaTur1DRxaZcQU7c1T17rC7BlBJy+/wfqq7Fr7G6HRQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNS0wNi0wNFQxNDo0NjoyMSswMDowMArbUkoAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMTAtMDJUMjE6NTE6MjQrMDA6MDBEpyZsAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI1LTA2LTA0VDE0OjQ2OjUxKzAwOjAwJlbCMAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=" width="8px" height="8px" style="position: absolute;right: 2px;top: 2px;display: none;"></div></div><div class="inf_sf-section"><div class="inf_sf-section-block"><span class="front_size" id="front_sec_size"></span> &nbsp;<span class="front_per" id="front_sec_per"></span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACBQAAAgUAWFwnqMAAAAHdElNRQfpBgQOLjND9MctAAADZ0lEQVRo3sWZPUwUQRTHf4AREwPCxSPYSAzFYUKDlQJ+RVpa/G6MFYSEXH+tyTXKFYZcbGiEjsJCkouJFIaYwMXEWABixATIwZ3RQgHNHWOxt3hwM7sz+8HN63Zm5/ffna8379VhVqLE6KGbGOeIcJqTwF9+84NNlvnEB5bJm3RYZ4C+zAC9XKCFBkWbEj/5yjxveG8mw610kWCRXYSm7ZIlQVcw8BhJ1rTRlbZGkpg/eCtxVj3BbVslTqtXfB8ZSr7wAkGJDL3m8EZG2PANt22dYRpN8BFS7AWGFwj2GCeii29nOlC4bdO06+FnQsELBDPuEiJMhYa3/oLjQDTyLFS8QJBymo7DAU89+XQcUeF7WQ8dLxBs0CfDt5I5FrxAkJHtjvEAdj1dKxE/io/53PNNbdU+purLAh7RqbtPBVI6eVzpi3R5PHCd7Q8fyfJLUfuNi/8FJELAFxiljQhDfFG0SNj4KNkQ8A8PPu8mn6VtskStBoMGzpae5XlwaMRvsCJptcugVZ0KGQ9wnSVJy5Q1AAsB4+9L5/0Auaq2C0Shn8Ix4KGOSclM6a+nh5bAVneBMV4q6gTfq5610HOCbuU1AwRvecUphrikgc8zxpSyto0rVc8a6IY55e/c5wVnAehk1vXnb3PPQVwTE+xL3pqDZSU+zZmDDjpcJGxz1wHfzHPFUbcCeWlFiYkKvCXhdeB4QR52pF8/QXNVRyoJW9zxiBfsQFHyeJ42aWfnJRL84AVFuYCnyg6PStjitg+8oCgfgkmHuEGlBL94wY58EuYYcOjYlpDzjRfkVctwiauOEmbJMeQbL1hWb0TOEjq45jBMunjBHKSVlc4S/H+9QJCGUek68C7BBF9k1O04NpVgghcU6Hd3SEwkmOHLDom7S6YrwRRfdsl0nFIdCeb4A6c0yqJrYzcJ5njBou2W611MnCR4wVdcTHSvZioJ3vBrh0O5Sa2XZBK84QXJw93oXs+PSvCKX62OIusGKColNHnESwIUJiGaJW6VV8+Ex6hKRh7A1g9SbZLmCe+kjra7KYJUUPMwHTQyHrqAlHPcPBJSoNq2afeYeY2D1ZaEmobrrYEYDzxhkdJPWFjTcTjAyPEGI2YpG6v0Bpa06jOHW6XGaTur1DRxaZcQU7c1T17rC7BlBJy+/wfqq7Fr7G6HRQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNS0wNi0wNFQxNDo0NjoyMSswMDowMArbUkoAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMTAtMDJUMjE6NTE6MjQrMDA6MDBEpyZsAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI1LTA2LTA0VDE0OjQ2OjUxKzAwOjAwJlbCMAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=" width="8px" height="8px" style="position: absolute; right: 2px; top: 2px; display: none;"></div></div></div><div id="loader-section"><div id="loader"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAFxIAABcSAWef0lIAAAAHdElNRQfpBgwKLSwnbBkoAAAA5ElEQVQoz2XRPUoDURSG4Sc/2qUQxMYFSNSAYjOoCFqqWYQILiroGkylYDYQQxQUFyBEHCSSYoQUyuRaGOJc8p3iwvnee344xCo50ZHJpa7UzencUJjFg/3YbngT5J7cGghy19UIOLCKGxc+bWt69BwDS+Beip4elCNgAvJiqjJ9l51qOLSBkYp1H8ZFMJEVpg8yyZ9RnRUfK1uwiG8/xtN2M9UkEi1B0JJI1OIKX7o4Aq+6/z/jLSrzuao1W3a09a3YA6O4e9tE8K7jRS4Y2IyBXf3CekNn8xesu5TKZe4cK8XmL0olT2O8a5VXAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI1LTA2LTEyVDEwOjQ0OjU0KzAwOjAwQl1s+AAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNS0wNi0xMlQxMDo0NDo1NCswMDowMDMA1EQAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjUtMDYtMTJUMTA6NDU6NDQrMDA6MDBHfZ47AAAAAElFTkSuQmCC" height="15px"><div class="cssload-speeding-wheel"></div></div></div></div><div class="logo-img-container"><div class="logo-img"></div></div></div></div></div></div>');
                    var e = document.querySelector("body");

                    function t() {
                        ! function(e) {
                            var t;
                            null !== document.querySelector(".price-sale") ? t = document.querySelector(".price-sale").innerText : null !== document.querySelector(".price-regular") && (t = document.querySelector(".price-regular").innerText);
                            for (var i = [], n = 0; n < document.querySelectorAll(".variation_title").length; n++) i.push(document.querySelectorAll(".variation_title")[n].innerText);
                            for (var o, a, r, n = 0; n < i.length; n++) i[n].includes("尺寸") && 0, i[n].includes("顏色") && (o = n);
                            r = 1 < document.querySelectorAll(".variation-label--selected").length ? (a = document.querySelectorAll(".variation-label--selected")[0].innerText, document.querySelectorAll(".variation-label--selected")[1].innerText) : (void 0 !== document.querySelectorAll(".variation_title")[o] && (a = document.querySelectorAll(".variation_title")[o].innerText), document.querySelectorAll(".variation-label--selected")[0].innerText);
                            var d = [];
                            if (0 < document.querySelectorAll(".variation-label--out-of-stock").length)
                                for (var s = document.querySelectorAll(".variation-label--out-of-stock").length, l = 0; l < s; l++) d.push(document.querySelectorAll(".variation-label--out-of-stock")[l].innerText);
                            var c = document.documentElement.innerHTML.split('"sku":"')[1].split('"')[0];
                            e && document.getElementById("inffits_ctryon_window").contentWindow.postMessage({
                                MsgHeader: "AddToCart_click",
                                Size: r,
                                Color: a,
                                Price: t,
                                ProductID: c,
                                OutofStock: d
                            }, "*")
                        }(!0)
                    }
                    e.insertAdjacentHTML("beforebegin", '<div style="display:none;position: fixed;width: 100%;height: 100%;top: 0;left: 0;z-index: 1000000000000;background: rgba(0,0,0,0.5);transform:translate(100%)"><div id="infFITS_findSize" class="inffits_cblock" style="display:block;right:0;bottom:0;top:0;left:0 ;position:absolute; z-index:1;margin:auto"><div class="ctryon" style="position:absolute; width:100%; height:100%;top:0px; text-align:left; visibility:visible;  border:none; outline:none;  z-index:1; touch-action:none;"><iframe id="inffits_ctryon_window" style=" width:100%; height:100%; visibility:visible; position:relative; border:none;outline:none;  z-index:14;border-radius:10px;box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;" src="https://inffits.com/webDesign/HTML/js/iframe/indexwebiframe_CAX_tw_ver.html?' + s + '"></iframe></div><div id="inf_close" style="position:absolute;top: -5px;z-index: 10000009;right: -10px;padding: 5px;height: 25px;width: 25px;border-radius: 50%;box-shadow: rgb(54 62 81 / 15%) 0px 0.0625rem 0.125rem 0.0625rem;background: white; opacity:1"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQflBB0KLijuiy0TAAABU0lEQVRo3sWZQZKCMBBFX825gtt4ZPEgbrQKV1wA9nHhFFUOxEmgO19XQtV/Tw2Q7gYI9ExM9HS0eHULLwAEbqTf953ojo/cF96NAP3yMZF4cnbFn3l+8HqYPw74KvzFJ+a1gJ/CGp+Y4bo66KOwhU9c4cSjgcI2/sEpf9JS4V+Cr0JRup9CcbKPQlWqvUJ1oq3CrjQ7hd1JNgqHUo4rHE44FmDyG+4PMVtFuaDvW5ZoeR3VK5ji6xXM8XUKLvhyBTd8mYIr/hsgFpx1VRiIRAZ/fF5hZGyDzys0w5cqOOJLFJzxb4Uhix8aFLdA3Fx4iXEP/qeFsfX3l/4F4kUovgzFNyLxrVj8MBI/jsUbEvGWTLwpFW/LxYWJuDQTF6fi8lzcoBC3aMRNKnGbTtyoFLdqxc1qcbtePLCQj2zkQyv52E4+uJSPbjv18BoCF8n4/kKAFws8B+VnA9YUAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA0LTI5VDEwOjQ2OjAzKzAwOjAw6rtp5wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNC0yOVQxMDo0NjowMyswMDowMJvm0VsAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC" style="position:absolute;top:0;bottom:0;right:0;left:0;width:10px;margin:auto;"></div></div></div>'), document.getElementById("SizeAItag").addEventListener("click", function() {
                        $("#infFITS_findSize").parent().fadeIn(), document.getElementById("inffits_ctryon_window").contentWindow.postMessage({
                            MsgHeader: "FindinfFITS_SizeAItag"
                        }, "*")
                    }), null !== e && void 0 !== s && (document.getElementById("infFITS_sizefast").addEventListener("click", function() {
                        var e = document.getElementById("inffits_ctryon_window").contentWindow;
                        e.postMessage({
                            MsgHeader: "FindinfFITS_toggle"
                        }, "*");
                        e.postMessage({
                            MsgHeader: "APPHeader",
                            CASE: "Scase"
                        }, "*"), $("#infFITS_findSize").parent().fadeIn()
                    }), $(".inf_sf-section-block").on("touchend click", function(e) {
                        e.stopPropagation(), e.preventDefault(), $(".inf_sf-section-block").removeClass("active"), $(this).addClass("active"), $(".inf_sf-section-block").find("img").hide(), $(this).find("img").show(), r = $(".inf_sf-section-block.active").text().replace(/[^a-z0-9]/gi, ""), m()
                    }), a = null === window.ontouchstart ? "touchend" : "click", document.getElementById("inf_close").addEventListener(a, function() {
                        $("#infFITS_findSize").parent().fadeOut()
                    }), e = document.querySelectorAll(".js-btn-main-checkout"), n = document.querySelectorAll(".btn-cart-fixed"), a = document.querySelectorAll(".btn-buy-now"), 0 < e.length && e.forEach(function(e) {
                        e.addEventListener("click", function() {
                            t()
                        })
                    }), 0 < n.length && n.forEach(function(e) {
                        e.addEventListener("click", function() {
                            t()
                        })
                    }), 0 < a.length && a.forEach(function(e) {
                        e.addEventListener("click", function() {
                            t()
                        })
                    }));
                    const i = new Date;
                    var n = i.toISOString().split("T")[0];
                    if ("F" == s.split("&")[0]) {
                        var o = "infFITS_popup_shown_at";
                        localStorage.getItem(o) !== n && (setTimeout(function() {}, 1e4), localStorage.setItem(o, n))
                    } else if ("M" == s.split("&")[0] || "MF" == s.split("&")[0]) {
                        var a = "infFITS_popup_shown_today",
                            o = window.location.pathname;
                        let e = JSON.parse(localStorage.getItem(a) || "{}");
                        e.date !== n && (e = {
                            date: n,
                            shown: []
                        }), e.shown.includes(o) || (isGroupA && magic_addon(), e.shown.push(o), localStorage.setItem(a, JSON.stringify(e)))
                    }
                }), window.addEventListener("message", function(e) {
                    if ("INFready" == e.data.MsgHeader) setTimeout(function() {}, 500);
                    else if ("inf_exit_close" == e.data.MsgHeader) document.getElementById("inf_close").style.display = "none";
                    else if ("inf_exit_open" == e.data.MsgHeader) document.getElementById("inf_close").style.display = "block";
                    else if ("AddtoCart" == e.data.MsgHeader) {
                        r = e.data.Size, m(), $("#infFITS_findSize").parent().hide();
                        for (var t = 0; t < $(".inf_sf-section-block").length; t++) r == document.querySelectorAll(".inf_sf-section-block")[t].querySelector("span").innerText && document.querySelectorAll(".inf_sf-section-block")[t].click()
                    } else "POPUP_adjustment_Finish" != e.data.MsgHeader && "ToggleReady" != e.data.MsgHeader || (document.getElementById("SizeAItag").style.pointerEvents = "auto", document.getElementById("SizeAItag").style.opacity = 1, document.getElementById("infFITS_findSize").parentNode.style.transform = "none", "A" == a ? (document.getElementById("SizeAItag").style.display = "block", document.getElementById("infFITS_sizefast").style.display = "block") : "B" == a && (document.getElementById("SizeAItag").style.display = "none", document.getElementById("infFITS_sizefast").style.display = "none"))
                }, !1))
            },
            error: e => {}
        }), (l = document.createElement("style")).innerText = `
            
#infFITS_sizefast_wrapper{
    background: rgb(255, 255, 255);color: black;margin: auto;border-radius: 50px;display: inline-block;width: 100%;padding: 6px;position: relative;font-family: "Noto Sans TC",sans-serif;text-align: left;box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;letter-spacing: 0.05rem;
}
.wrapper-flex{
    display: flex;justify-content: space-between;flex-direction: row-reverse;align-items: center;
}
.logo-img-container{
    position: relative;width: 45px;height: 45px;border-radius: 50%;
}
.logo-img{
    margin: auto;top: 0;right: 0;left: 0; bottom: 0;position: absolute;height: 42px;width: 42px;border-radius: 50%;background-repeat: no-repeat;background-size: cover;box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}
.inf_sf-container{
    display: flex;font-weight: initial;font-size: 12px;width: 80%;color: #333;justify-content: space-between;align-items: center;
}
inf_sf-maintext{
    color: #333;font-size: 12px;white-space: nowrap;text-align: center;font-weight:300;overflow:inherit;text-align: left;line-height: 14px
}

.inf_sf-main{
    position: relative;display: flex;width: 80%;padding: 6px;border-radius: 10px;align-items: center;display:none;
}
#loader-section{
    position: relative;display: flex;width: 80%;padding: 6px;border-radius: 10px;align-items: center;display:none;
}
.inf_sf-section{
    width: 50%;border-radius: 5px;height: 36px;position:relative
}
.inf_sf-section-block{
    justify-content: center;width: 100%;height: 100%;border-radius: 5px;text-align: center;display: none;display: flex;align-items: center;color:darkgray
}

.inf_sf-section-block.active{
   background: white;
   color:black
}
.inf_sf-section-block .front_size{
    font-size: 18px;
    font-weight: 600;
}
.inf_sf-section-block .front_per{
    font-size: 12px;font-weight: 400
}

#loader{
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    transform : scale(0.5);
    z-index:10000;
}
#loader img{
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
}

.cssload-speeding-wheel {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
        }
.cssload-speeding-wheel {
            width: 31px;
            height: 31px;
            border: 2px solid rgba(97,100,193,0.98);
            border-radius: 50%;
            border-left-color: transparent;
            border-right-color: transparent;
            animation: cssload-spin 625ms infinite linear;
            -o-animation: cssload-spin 625ms infinite linear;
            -ms-animation: cssload-spin 625ms infinite linear;
            -webkit-animation: cssload-spin 625ms infinite linear;
        }
@keyframes cssload-spin {
          100%{ transform: rotate(360deg); transform: rotate(360deg); }
        }

@-o-keyframes cssload-spin {
          100%{ -o-transform: rotate(360deg); transform: rotate(360deg); }
        }

@-ms-keyframes cssload-spin {
          100%{ -ms-transform: rotate(360deg); transform: rotate(360deg); }
        }

@-webkit-keyframes cssload-spin {
          100%{ -webkit-transform: rotate(360deg); transform: rotate(360deg); }
        }

@-moz-keyframes cssload-spin {
          100%{ -moz-transform: rotate(360deg); transform: rotate(360deg); }
        }
.inf_sf-container {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
}
.inf_sf-container::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}
     
        `, document.head.appendChild(l), document.location.href.startsWith("https://www.verve.com.tw/products/xy-stretch-raglan-tshirt-ss24-new-customer") && function e(t, i) {
            var n;
            0 !== t.length ? ((n = document.createElement("script")).src = t.shift(), n.onload = function() {
                e(t, i)
            }, n.onerror = function() {
                console.error("載入失敗:", n.src)
            }, document.head.appendChild(n)) : i()
        }(["https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js", "https://inf-g-login.vercel.app/demo/size.js", "https://inf-g-login.vercel.app/oauth-callback-handler.js"], function() {
            setTimeout(function() {
                "function" == typeof onloadIframeSendUrl && onloadIframeSendUrl("inffits_ctryon_window"), "function" == typeof initOAuthCallbackHandler && initOAuthCallbackHandler({
                    mode: "panel_v1",
                    iframeId: "inffits_ctryon_window"
                })
            }, 300)
        }))
    }
}

function Attempt_Signal() {
    function p(e) {
        var t;
        null !== document.querySelector(".price-sale") ? t = document.querySelector(".price-sale").innerText : null !== document.querySelector(".price-regular") && (t = document.querySelector(".price-regular").innerText);
        for (var i = [], n = 0; n < document.querySelectorAll(".variation_title").length; n++) i.push(document.querySelectorAll(".variation_title")[n].innerText);
        for (var o, a, r, n = 0; n < i.length; n++) i[n].includes("尺寸") && 0, i[n].includes("顏色") && (o = n);
        r = 1 < document.querySelectorAll(".variation-label--selected").length ? (a = document.querySelectorAll(".variation-label--selected")[0].innerText, document.querySelectorAll(".variation-label--selected")[1].innerText) : (void 0 !== document.querySelectorAll(".variation_title")[o] && (a = document.querySelectorAll(".variation_title")[o].innerText), document.querySelectorAll(".variation-label--selected")[0].innerText);
        var d = [];
        if (0 < document.querySelectorAll(".variation-label--out-of-stock").length)
            for (var s = document.querySelectorAll(".variation-label--out-of-stock").length, l = 0; l < s; l++) d.push(document.querySelectorAll(".variation-label--out-of-stock")[l].innerText);
        var c = document.documentElement.innerHTML.split('"sku":"')[1].split('"')[0];
        return e && document.getElementById("inffits_ctryon_window").contentWindow.postMessage({
            MsgHeader: "AddToCart_click",
            Size: r,
            Color: a,
            Price: t,
            ProductID: c,
            OutofStock: d
        }, "*"), [t, r, a, d]
    }

    function n() {
        var e = p(!1),
            t = e[0],
            i = e[1],
            n = e[2],
            o = e[3],
            a = document.documentElement.innerHTML.split('"sku":"')[1].split('"')[0].split(":")[0],
            r = document.querySelectorAll('[property="og:title"]')[0].content,
            d = null !== document.documentElement.querySelector(".quantity-wrapper").querySelector("input") ? document.documentElement.querySelector(".quantity-wrapper").querySelector("input").value.toString() : 0,
            s = "",
            l = "",
            e = "";
        if ("undefined" != typeof dataLayer)
            for (let e = 0; e < dataLayer.length; e++) {
                if ("Product-Detail" === dataLayer[e].Action) {
                    s = "" !== dataLayer[e].Uid ? dataLayer[e].Uid : "empty string in dataLayer";
                    break
                }
                s = "not FOUND in dataLayer"
            }
        gvid_exist = !1;
        try {
            gvid_exist = void 0 !== localStorage.GVID
        } catch (e) {
            gvid_exist = !1
        }
        gvid_exist ? l = localStorage.GVID : (l = makeid(20), localStorage.setItem("GVID", l)), lgvid_exist = !1;
        try {
            lgvid_exist = void 0 !== localStorage.LGVID
        } catch (e) {
            lgvid_exist = !1
        }
        lgvid_exist ? e = localStorage.LGVID : (e = makeid(20), localStorage.setItem("LGVID", e));
        e = '{"PRODUCT_ID": "' + a.split("?")[0].split("#")[0] + '","NAME": "' + r + '","Size": "' + i + '","COLOR": "' + n + '","PRICE": "' + t + '","OutofStock": "' + o.toString() + '","COUNT": "' + d + '","GVID":"' + l + '","LGVID":"' + e + '","MRID":"' + s + '","Brand": "' + f + '","Testing": "' + test + '"}';
        AWS.config.region = "ap-northeast-1", AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: "ap-northeast-1:ec9d0f5d-ae3e-4ff2-986f-2025ddbedf1a"
        }), AWS.config.credentials.get(function(e) {}), new AWS.Lambda({
            region: "ap-northeast-1",
            apiVersion: "2015-03-31"
        }).invoke({
            FunctionName: "AddtoCartRecordByID",
            InvocationType: "RequestResponse",
            LogType: "Tail",
            Payload: e
        }, function(e, t) {
            e ? logging("error : addtocart record ") : pullResults = JSON.parse(t.Payload)
        })
    }

    function e() {
        var e = document.querySelectorAll(".js-btn-main-checkout"),
            t = document.querySelector(".btn-cart-fixed"),
            i = document.getElementById("btn-variable-buy-now");
        0 < e.length && e.forEach(function(e) {
            e.addEventListener("click", function(e) {
                if (1, n(), "undefined" != typeof dataLayer)
                    for (let e = 0; e < dataLayer.length; e++) {
                        if ("view_item" === dataLayer[e].action) {
                            g = dataLayer[e].ecommerce.items;
                            break
                        }
                        g = "not FOUND in dataLayer"
                    }
                gtag("event", "add-to-cart-inf" + test, {
                    send_to: GA4Key,
                    event_category: "add-to-cart",
                    event_label: "add-to-cart-btn-inf",
                    items: g
                })
            })
        }), null !== t && t.addEventListener("click", function() {
            if (1, n(), "undefined" != typeof dataLayer)
                for (let e = 0; e < dataLayer.length; e++) {
                    if ("view_item" === dataLayer[e].action) {
                        g = dataLayer[e].ecommerce.items;
                        break
                    }
                    g = "not FOUND in dataLayer"
                }
            gtag("event", "add-to-cart-inf" + test, {
                send_to: GA4Key,
                event_category: "add-to-cart",
                event_label: "add-to-cart-btn-inf",
                items: g
            })
        }), null !== i && i.addEventListener("click", function() {
            if (1, n(), "undefined" != typeof dataLayer)
                for (let e = 0; e < dataLayer.length; e++) {
                    if ("view_item" === dataLayer[e].action) {
                        g = dataLayer[e].ecommerce.items;
                        break
                    }
                    g = "not FOUND in dataLayer"
                }
            gtag("event", "add-to-cart-inf" + test, {
                send_to: GA4Key,
                event_category: "add-to-cart",
                event_label: "add-to-cart-btn-inf",
                items: g
            })
        })
    }

    function m(e) {
        var t = p(!1),
            i = t[0],
            n = t[1],
            o = t[2],
            a = t[3],
            r = document.documentElement.innerHTML.split('"sku":"')[1].split('"')[0].split(":")[0],
            d = document.querySelectorAll('[property="og:title"]')[0].content,
            s = null !== document.documentElement.querySelector(".quantity-wrapper").querySelector("input") ? document.documentElement.querySelector(".quantity-wrapper").querySelector("input").value.toString() : 0,
            l = "",
            c = "",
            t = "";
        if ("undefined" != typeof dataLayer)
            for (let e = 0; e < dataLayer.length; e++) {
                if ("Product-Detail" === dataLayer[e].Action) {
                    l = "" !== dataLayer[e].Uid ? dataLayer[e].Uid : "empty string in dataLayer";
                    break
                }
                l = "not FOUND in dataLayer"
            }
        gvid_exist = !1;
        try {
            gvid_exist = void 0 !== localStorage.GVID
        } catch (e) {
            gvid_exist = !1
        }
        gvid_exist ? c = localStorage.GVID : (c = makeid(20), localStorage.setItem("GVID", c)), lgvid_exist = !1;
        try {
            lgvid_exist = void 0 !== localStorage.LGVID
        } catch (e) {
            lgvid_exist = !1
        }
        lgvid_exist ? t = localStorage.LGVID : (t = makeid(20), localStorage.setItem("LGVID", t));
        t = '{"Link":"' + window.location.href + '","element":"' + e.split("_")[0] + '","TYPE": "' + e.split("_")[1] + "_" + e.split("_")[2] + '","PRODUCT_ID": "' + r.split("?")[0].split("#")[0] + '","NAME": "' + d + '","Size": "' + n + '","COLOR": "' + o + '","PRICE": "' + i + '","OutofStock": "' + a.toString() + '","COUNT": "' + s + '","GVID":"' + c + '","LGVID":"' + t + '","MRID":"' + l + '","Brand": "' + f + '","Testing": "' + test + '"}';
        AWS.config.region = "ap-northeast-1", AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: "ap-northeast-1:ec9d0f5d-ae3e-4ff2-986f-2025ddbedf1a"
        }), AWS.config.credentials.get(function(e) {}), new AWS.Lambda({
            region: "ap-northeast-1",
            apiVersion: "2015-03-31"
        }).invoke({
            FunctionName: "user_engagement_tracking",
            InvocationType: "RequestResponse",
            LogType: "Tail",
            Payload: t
        }, function(e, t) {
            e ? logging("error : addtocart record ") : pullResults = JSON.parse(t.Payload)
        })
    }

    function t() {
        document.querySelectorAll(".select-box").forEach(e => {
            const t = e.previousElementSibling;
            if (t) {
                const i = t.textContent.trim();
                i.includes("尺寸") ? e.classList.add("sizebox") : i.includes("顏色") && e.classList.add("colorbox")
            }
        });
        var e = document.querySelectorAll(".spec-button"),
            t = document.querySelectorAll(".colorbox .variation-label"),
            i = document.querySelectorAll(".sizebox .variation-label"),
            n = document.querySelectorAll(".stoke-button"),
            o = document.querySelectorAll(".image-container"),
            a = document.querySelectorAll(".img-responsive"),
            r = document.querySelectorAll(".variant-gallery-control"),
            d = document.querySelectorAll(".product-imgbox .owl-prev"),
            s = document.querySelectorAll(".input-group"),
            l = document.querySelectorAll(".input-group-btn"),
            c = document.querySelectorAll(".btn-add-wishlist");
        0 < e.length && e.forEach(function(e) {
            e.addEventListener("click", function(e) {
                if (!A) {
                    if (m("spec-button_purchase-attempt_sizechart"), "undefined" != typeof dataLayer)
                        for (let e = 0; e < dataLayer.length; e++) {
                            if ("view_item" === dataLayer[e].action) {
                                g = dataLayer[e].ecommerce.items;
                                break
                            }
                            g = "not FOUND in dataLayer"
                        }
                    "isTrusted" in e && e.isTrusted && (A = !0, gtag("event", "purchase_variant_attempt" + test, {
                        send_to: GA4Key,
                        event_category: "purchase_variant_attempt",
                        event_label: "spec-button_purchase_variant_attempt_sizechart",
                        items: g
                    }), gtag("event", "purchase-attempt" + test, {
                        send_to: GA4Key,
                        event_category: "purchase-attempt",
                        event_label: "spec-button_purchase-attempt_sizechart",
                        items: g
                    }))
                }
            })
        }), 0 < i.length && i.forEach(function(e) {
            e.addEventListener("click", function(e) {
                if (!A) {
                    if (m("item-btn_purchase-attempt_selectsize"), "undefined" != typeof dataLayer)
                        for (let e = 0; e < dataLayer.length; e++) {
                            if ("view_item" === dataLayer[e].action) {
                                g = dataLayer[e].ecommerce.items;
                                break
                            }
                            g = "not FOUND in dataLayer"
                        }
                    "isTrusted" in e && e.isTrusted && (A = !0, gtag("event", "purchase_variant_attempt" + test, {
                        send_to: GA4Key,
                        event_category: "purchase_variant_attempt",
                        event_label: "item-btn_purchase_variant_attempt_selectsize",
                        items: g
                    }), gtag("event", "purchase-attempt" + test, {
                        send_to: GA4Key,
                        event_category: "purchase-attempt",
                        event_label: "item-btn_purchase-attempt_selectsize",
                        items: g
                    }))
                }
            })
        }), 0 < t.length && t.forEach(function(e) {
            e.addEventListener("click", function(e) {
                if (!A) {
                    if (m("item-btn_purchase-attempt_selectcolor"), "undefined" != typeof dataLayer)
                        for (let e = 0; e < dataLayer.length; e++) {
                            if ("view_item" === dataLayer[e].action) {
                                g = dataLayer[e].ecommerce.items;
                                break
                            }
                            g = "not FOUND in dataLayer"
                        }
                    "isTrusted" in e && e.isTrusted && (A = !0, gtag("event", "purchase_variant_attempt" + test, {
                        send_to: GA4Key,
                        event_category: "purchase_variant_attempt",
                        event_label: "item-btn_purchase_variant_attempt_selectcolor",
                        items: g
                    }), gtag("event", "purchase-attempt" + test, {
                        send_to: GA4Key,
                        event_category: "purchase-attempt",
                        event_label: "item-btn_purchase-attempt_selectcolor",
                        items: g
                    }))
                }
            })
        }), 0 < n.length && n.forEach(function(e) {
            e.addEventListener("click", function(e) {
                if (!A) {
                    if (m("stoke-button_purchase-attempt_findstock"), "undefined" != typeof dataLayer)
                        for (let e = 0; e < dataLayer.length; e++) {
                            if ("view_item" === dataLayer[e].action) {
                                g = dataLayer[e].ecommerce.items;
                                break
                            }
                            g = "not FOUND in dataLayer"
                        }
                    "isTrusted" in e && e.isTrusted && (A = !0, gtag("event", "purchase_variant_attempt" + test, {
                        send_to: GA4Key,
                        event_category: "purchase_variant_attempt",
                        event_label: "stoke-button_purchase_variant_attempt_findstock",
                        items: g
                    }), gtag("event", "purchase-attempt" + test, {
                        send_to: GA4Key,
                        event_category: "purchase-attempt",
                        event_label: "stoke-button_purchase-attempt_findstock",
                        items: g
                    }))
                }
            })
        }), 0 < o.length && o.forEach(function(e) {
            e.addEventListener("click", function(e) {
                if (!A) {
                    if (m("img-btn_purchase-attempt_picbox-img"), "undefined" != typeof dataLayer)
                        for (let e = 0; e < dataLayer.length; e++) {
                            if ("view_item" === dataLayer[e].action) {
                                g = dataLayer[e].ecommerce.items;
                                break
                            }
                            g = "not FOUND in dataLayer"
                        }
                    "isTrusted" in e && e.isTrusted && (A = !0, gtag("event", "purchase-attempt" + test, {
                        send_to: GA4Key,
                        event_category: "purchase-attempt",
                        event_label: "img-btn_purchase-attempt_picbox-img",
                        items: g
                    }))
                }
            })
        }), 0 < a.length && a.forEach(function(e) {
            e.addEventListener("touchend", function(e) {
                if (!A) {
                    if (m("img-btn_purchase-attempt_picbox-img"), "undefined" != typeof dataLayer)
                        for (let e = 0; e < dataLayer.length; e++) {
                            if ("view_item" === dataLayer[e].action) {
                                g = dataLayer[e].ecommerce.items;
                                break
                            }
                            g = "not FOUND in dataLayer"
                        }
                    "isTrusted" in e && e.isTrusted && (A = !0, gtag("event", "purchase-attempt" + test, {
                        send_to: GA4Key,
                        event_category: "purchase-attempt",
                        event_label: "img-btn_purchase-attempt_picbox-img",
                        items: g
                    }))
                }
            })
        }), 0 < r.length && r.forEach(function(e) {
            e.addEventListener("click", function(e) {
                if (!A) {
                    if (m("img-btn_purchase-attempt_owl-next"), "undefined" != typeof dataLayer)
                        for (let e = 0; e < dataLayer.length; e++) {
                            if ("view_item" === dataLayer[e].action) {
                                g = dataLayer[e].ecommerce.items;
                                break
                            }
                            g = "not FOUND in dataLayer"
                        }
                    "isTrusted" in e && e.isTrusted && (A = !0, gtag("event", "purchase-attempt" + test, {
                        send_to: GA4Key,
                        event_category: "purchase-attempt",
                        event_label: "img-btn_purchase-attempt_owl-next",
                        items: g
                    }))
                }
            })
        }), 0 < d.length && d.forEach(function(e) {
            e.addEventListener("click", function(e) {
                if (!A) {
                    if (m("img-btn_purchase-attempt_owl-prev"), "undefined" != typeof dataLayer)
                        for (let e = 0; e < dataLayer.length; e++) {
                            if ("view_item" === dataLayer[e].action) {
                                g = dataLayer[e].ecommerce.items;
                                break
                            }
                            g = "not FOUND in dataLayer"
                        }
                    "isTrusted" in e && e.isTrusted && (A = !0, gtag("event", "purchase-attempt" + test, {
                        send_to: GA4Key,
                        event_category: "purchase-attempt",
                        event_label: "img-btn_purchase-attempt_owl-prev",
                        items: g
                    }))
                }
            })
        }), 0 < s.length && s.forEach(function(e) {
            e.addEventListener("click", function(e) {
                if (!A) {
                    if (m("img-btn_purchase-attempt_count_wrapper"), "undefined" != typeof dataLayer)
                        for (let e = 0; e < dataLayer.length; e++) {
                            if ("view_item" === dataLayer[e].action) {
                                g = dataLayer[e].ecommerce.items;
                                break
                            }
                            g = "not FOUND in dataLayer"
                        }
                    "isTrusted" in e && e.isTrusted && (A = !0, gtag("event", "purchase_variant_attempt" + test, {
                        send_to: GA4Key,
                        event_category: "purchase_variant_attempt",
                        event_label: "img-btn_purchase_variant_attempt_count_wrapper",
                        items: g
                    }), gtag("event", "purchase-attempt" + test, {
                        send_to: GA4Key,
                        event_category: "purchase-attempt",
                        event_label: "img-btn_purchase-attempt_count_wrapper",
                        items: g
                    }))
                }
            })
        }), 0 < l.length && l.forEach(function(e) {
            e.addEventListener("click", function(e) {
                if (!A) {
                    if (m("img-btn_purchase-attempt_count_option"), "undefined" != typeof dataLayer)
                        for (let e = 0; e < dataLayer.length; e++) {
                            if ("view_item" === dataLayer[e].action) {
                                g = dataLayer[e].ecommerce.items;
                                break
                            }
                            g = "not FOUND in dataLayer"
                        }
                    "isTrusted" in e && e.isTrusted && (A = !0, gtag("event", "purchase_variant_attempt" + test, {
                        send_to: GA4Key,
                        event_category: "purchase_variant_attempt",
                        event_label: "img-btn_purchase_variant_attempt_count_option",
                        items: g
                    }), gtag("event", "purchase-attempt" + test, {
                        send_to: GA4Key,
                        event_category: "purchase-attempt",
                        event_label: "img-btn_purchase-attempt_count_option",
                        items: g
                    }))
                }
            })
        }), 0 < c.length && c.forEach(function(e) {
            e.addEventListener("click", function(e) {
                if (!A) {
                    if (m("img-btn_purchase-attempt_wishbutton"), "undefined" != typeof dataLayer)
                        for (let e = 0; e < dataLayer.length; e++) {
                            if ("view_item" === dataLayer[e].action) {
                                g = dataLayer[e].ecommerce.items;
                                break
                            }
                            g = "not FOUND in dataLayer"
                        }
                    "isTrusted" in e && e.isTrusted && (A = !0, gtag("event", "purchase_variant_attempt" + test, {
                        send_to: GA4Key,
                        event_category: "purchase_variant_attempt",
                        event_label: "img-btn_purchase_variant_attempt_wishbutton",
                        items: g
                    }), gtag("event", "purchase-attempt" + test, {
                        send_to: GA4Key,
                        event_category: "purchase-attempt",
                        event_label: "img-btn_purchase-attempt_wishbutton",
                        items: g
                    }))
                }
            })
        })
    }
    var f, A, g, i;
    window.location.href.includes("/products/") && (A = !(f = "VER"), "undefined" == typeof AWS ? ((i = document.createElement("script")).type = "text/javascript", i.src = "https://sdk.amazonaws.com/js/aws-sdk-2.243.1.min.js", document.head.appendChild(i), i.addEventListener("load", function() {
        t(), e()
    })) : (t(), e()))
}

function Product_Recommendation() {
    var e, t, a = "VER",
        r = document.documentElement.innerHTML.split('"sku":"')[1].split('"')[0],
        d = ".ProductDetail-gallery",
        s = ".ProductDetail-additionalInfo",
        i = "A";
    document.location.href.includes("/products/") && (e = function() {
        var e = document.createElement("link");
        e.rel = "stylesheet", e.href = "https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css", document.head.appendChild(e), (e = document.createElement("script")).src = "https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js", e.onload = function() {
            ! function($) {
                var e = document.createElement("link");
                e.rel = "preconnect", e.href = "https://fonts.googleapis.com", document.head.appendChild(e);
                e = document.createElement("link");
                e.rel = "preconnect", e.href = "https://fonts.gstatic.com", e.crossorigin = "anonymous", document.head.appendChild(e);
                e = document.createElement("style");
                e.id = "embedded-ad-bootstrap-scoped", document.head.appendChild(e);
                e = document.createElement("style");

                function o(e, t) {
                    e = e.map(e => `
    <a class="embeddedItem swiper-slide" href="${e.link}" target="_blank" data-title="${e.title}" data-link="${e.link}">
        <div class="embeddedItem__img">
        <div class="embeddedItem__imgBox" style="background-color:#efefef;">
            <img src="${e.image_link}" alt="${e.description}" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(100%);opacity:1;">
        </div>
        </div>
        <div class="embeddedItemInfo">
            <h3 class="embeddedItemInfo__title">${e.title}</h3>
            ${e.sale_price&&e.sale_price!==e.price?`<div class="embeddedItemInfo__content">
                <p class="embeddedItemInfo__discount">${Math.ceil(100-100*parseInt(e.sale_price.replace(",",""))/parseInt(e.price.replace(",","")))}% off</p>
                    <p class="embeddedItemInfo__price">NT$${e.sale_price}</p>
                    `:`<div class="embeddedItemInfo__content"> 
                    <p class="embeddedItemInfo__discount">${e.record_cnt} 人喜歡</p>               
                    <p class="embeddedItemInfo__price">NT$${e.price}</p>
                    `}
                </div>
        </div>
    </a>
    `).join("");
                    t ? ($("#swiper-wrapper-corr").html(e), new Swiper(".swiper-corr", {
                        direction: "horizontal",
                        loop: !0,
                        autoplay: {
                            delay: 4e3,
                            disableOnInteraction: !1,
                            pauseOnMouseEnter: !0,
                            stopOnLastSlide: !1,
                            waitForTransition: !0
                        },
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        loopFillGroupWithBlank: !0,
                        spaceBetween: 8,
                        grid: {
                            rows: 2
                        },
                        navigation: {
                            nextEl: ".swiper-next-corr",
                            prevEl: ".swiper-prev-corr"
                        },
                        simulateTouch: !0,
                        touchRatio: 1,
                        resistance: !0,
                        resistanceRatio: .65,
                        observer: !0,
                        observeParents: !0,
                        on: {
                            init: function() {
                                this.params.easing = "cubic-bezier(0.25, 0.1, 0.25, 1)";
                                const e = this.el;
                                let i = !1,
                                    n = !1,
                                    o, a;
                                if (window.matchMedia("(hover: hover)").matches) {
                                    e.addEventListener("mousedown", function(e) {
                                        i = !0, n = !1, o = e.pageX, a = e.pageY
                                    }), document.addEventListener("mousemove", function(e) {
                                        var t;
                                        i && (t = Math.abs(e.pageX - o), e = Math.abs(e.pageY - a), (5 < t || 5 < e) && (n = !0))
                                    }), document.addEventListener("mouseup", function() {
                                        i = !1
                                    });
                                    const t = e.querySelectorAll(".swiper-slide a");
                                    t.forEach(e => {
                                        e.addEventListener("click", function(e) {
                                            n && e.preventDefault()
                                        })
                                    })
                                }
                            },
                            resize: function() {
                                setTimeout(() => {
                                    this.update()
                                }, 500)
                            }
                        },
                        breakpoints: {
                            768: {
                                speed: 750,
                                spaceBetween: 0,
                                slidesPerGroup: 6,
                                slidesPerView: 6,
                                grid: {
                                    rows: 1
                                },
                                mousewheel: {
                                    enabled: !0,
                                    sensitivity: 1
                                },
                                longSwipes: !0,
                                longSwipesRatio: .4,
                                followFinger: !0,
                                threshold: 10
                            },
                            0: {
                                slidesPerView: 2.1,
                                slidesPerGroup: 2,
                                spaceBetween: 0,
                                speed: 750,
                                resistanceRatio: 0,
                                grid: {
                                    rows: 1
                                }
                            }
                        }
                    })) : ($("#swiper-wrapper-basic").html(e), new Swiper(".swiper-basic", {
                        direction: "horizontal",
                        loop: !0,
                        autoplay: {
                            delay: 4e3,
                            disableOnInteraction: !1,
                            pauseOnMouseEnter: !0,
                            stopOnLastSlide: !1,
                            waitForTransition: !0
                        },
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        loopFillGroupWithBlank: !0,
                        spaceBetween: 8,
                        grid: {
                            rows: 2
                        },
                        navigation: {
                            nextEl: ".swiper-next",
                            prevEl: ".swiper-prev"
                        },
                        simulateTouch: !0,
                        touchRatio: 1,
                        resistance: !0,
                        resistanceRatio: .65,
                        observer: !0,
                        observeParents: !0,
                        on: {
                            init: function() {
                                this.params.easing = "cubic-bezier(0.25, 0.1, 0.25, 1)";
                                const e = this.el;
                                let i = !1,
                                    n = !1,
                                    o, a;
                                if (window.matchMedia("(hover: hover)").matches) {
                                    e.addEventListener("mousedown", function(e) {
                                        i = !0, n = !1, o = e.pageX, a = e.pageY
                                    }), document.addEventListener("mousemove", function(e) {
                                        var t;
                                        i && (t = Math.abs(e.pageX - o), e = Math.abs(e.pageY - a), (5 < t || 5 < e) && (n = !0))
                                    }), document.addEventListener("mouseup", function() {
                                        i = !1
                                    });
                                    const t = e.querySelectorAll(".swiper-slide a");
                                    t.forEach(e => {
                                        e.addEventListener("click", function(e) {
                                            n && e.preventDefault()
                                        })
                                    })
                                }
                            },
                            resize: function() {
                                setTimeout(() => {
                                    this.update()
                                }, 500)
                            }
                        },
                        breakpoints: {
                            768: {
                                speed: 750,
                                spaceBetween: 0,
                                slidesPerGroup: 6,
                                slidesPerView: 6,
                                grid: {
                                    rows: 1
                                },
                                mousewheel: {
                                    enabled: !0,
                                    sensitivity: 1
                                },
                                longSwipes: !0,
                                longSwipesRatio: .4,
                                followFinger: !0,
                                threshold: 10
                            },
                            0: {
                                slidesPerView: 2.1,
                                slidesPerGroup: 2,
                                spaceBetween: 0,
                                speed: 750,
                                resistanceRatio: 0,
                                grid: {
                                    rows: 1
                                }
                            }
                        }
                    }))
                }
                e.type = "text/css", e.innerHTML = `:root {
                    --inf-embedded-ad-font-9: 9px;
                    --inf-embedded-ad-font-8: 8px;
                    --inf-embedded-ad-font-12: 12px;
                    --inf-embedded-ad-font-13: 13px;
                    --inf-embedded-ad-font-14: 14px;
                    --inf-embedded-ad-font-15: 15px;
                    --inf-embedded-ad-font-16: 16px;
                    --inf-embedded-ad-font-18: 18px;
                    --inf-embedded-ad-font-21: 21px;
                    --inf-embedded-ad-font-custom: 15px;
                    --inf-embedded-ad-radius-8: 8px;
                    --inf-embedded-ad-dark-yellow: rgba(59, 59, 50, 1);
                    --inf-embedded-ad-dark-gray: #3B3B32;
                    --inf-embedded-ad-dark-red: #EB7454;
                    --inf-embedded-ad-light-gray: rgba(59, 59, 50, 0.30);
                    --swiper-wrapper-transition-timing-function: liner !important;
                    
                    }
                    
                    .embeddedAdContainer {
                    padding: 0px;
                    margin: 0 auto;
                    width: 100%;
                    max-width: 100%;
                    display: none;
                    position: relative;
                    width:fit-content;
                    }
                    @media (min-width: 768px) {
                    .embeddedAdContainer {
                    padding: 16px 18px;
                    }
                    }
                    
                    .swiper-next,
                    .swiper-prev,
                    .swiper-next-corr,
                    .swiper-prev-corr {
                    display: none;
                    cursor:pointer;
                    }
                    .swiper-next::after, .swiper-prev::after, .swiper-next-corr::after, .swiper-prev-corr::after {
                    content: "";
                    }
                    @media (min-width: 768px) {
                    .swiper-next,
                    .swiper-prev,
                    .swiper-next-corr,
                    .swiper-prev-corr {
                    display: block;
                    position: absolute;
                    top: 45%;
                    z-index: 99;
                    }
                    .swiper-next, .swiper-next-corr{
                    right: -10px;
                    }
                    .swiper-prev, .swiper-prev-corr{
                    left: -10px;
                    }
                    }
                    
                    .embeddedAdContainer p,
                    .embeddedAdContainer h3 {
                    margin: 0;
                    padding: 0;
                    }
                    .embeddedAdContainer a {
                    text-decoration: none !important;
                    color: inherit;
                    background: none;
                    border: none;
                    padding: 0;
                    margin: 0;
                    font-weight: 500;
                    font-style: normal;
                    display: inline;
                    }
                    .embeddedAdContainer a:hover,
                    .embeddedAdContainer a:visited,
                    .embeddedAdContainer a:link,
                    .embeddedAdContainer a:active {
                    text-decoration: none;
                    }
                    .embeddedAdContainer a:focus {
                    outline: none;
                    }
                    .embeddedAdContainer .embeddedAdContainer__title {
                    //font-family: "Chocolate Classical Sans", "Figtree", sans-serif;
                    font-family: "Noto Sans TC", "Figtree", sans-serif;
                    text-align: center;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    color: #000;
                    font-size: var(--inf-embedded-ad-font-18);
                    letter-spacing: 1.6px;
                    margin-bottom: 24px;
                    margin-top: 12px;
                    }
                    @media (min-width: 768px) {
                    .embeddedAdContainer .embeddedAdContainer__title {
                    margin-top: 0px;
                    }
                    }
                    
                    @media (min-width: 1025px) {
                    .embeddedAdContainer .embeddedAdContainer__title {
                    color: var(--inf-embedded-ad-dark-yellow), var(--inf-embedded-ad-dark-gray);
                    //font-size: var(--inf-embedded-ad-font-21);
                    font-size: 26px;
                    letter-spacing: 26px;
                    letter-spacing: 0.84px;
                    font-weight: 500;
                    margin-bottom: 24px;
                    margin-top: 0px;
                    padding-left:8px
                    }
                    }
                    .embeddedAdContainer .embeddedAdImgContainer {
                    display: -ms-flexbox;
                    display: flex;
                    -ms-flex-wrap: wrap;
                    flex-wrap: wrap;
                    gap: 32px 24px;
                    width: 100%;
                    height: 100%;
                    box-sizing: border-box;
                    position: relative;
                    overflow: hidden;
                    /* height: 450px; /* 自适应高度 */
                    }
                    @media (min-width: 540px) {
                    .embeddedAdContainer .embeddedAdImgContainer {
                    /*  height: 550px; 自适应高度 */
                    }
                    }
                    @media (min-width: 768px) {
                    .embeddedAdContainer .embeddedAdImgContainer {
                    display: -ms-flexbox;
                    display: flex;
                    -ms-flex-wrap: no-wrap;
                    flex-wrap: no-wrap;
                    gap: 0 48px;
                    width: 100%;
                    height: 100%;
                    -ms-flex-pack: center;
                    justify-content: center;
                    width: 100%;
                    margin: 0 auto;
                    overflow: visible;
                    }
                    }
                    .embeddedAdContainer .embeddedAdImgContainer .slick-slide,
                    .embeddedAdContainer .embeddedAdImgContainer .slick-slider .slick-track,
                    .embeddedAdContainer .embeddedAdImgContainer .slick-slider .slick-list {
                    will-change: transform;
                    }
                    @media (min-width: 768px) {
                    .embeddedAdContainer .embeddedAdImgContainer .slick-prev,
                    .embeddedAdContainer .embeddedAdImgContainer .slick-next {
                    width: 24px;
                    height: 24px;
                    }
                    .embeddedAdContainer .embeddedAdImgContainer .slick-slide,
                    .embeddedAdContainer .embeddedAdImgContainer .slick-slider .slick-track,
                    .embeddedAdContainer .embeddedAdImgContainer .slick-slider .slick-list {
                    -webkit-transform: translate3d(0, 0, 0);
                    transform: translate3d(0, 0, 0);
                    -webkit-transform: translateZ(0);
                    transform: translateZ(0);
                    -webkit-perspective: 1000;
                    -ms-perspective: 1000;
                    perspective: 1000;
                    -webkit-backface-visibility: hidden;
                    backface-visibility: hidden;
                    }
                    .embeddedAdContainer .embeddedAdImgContainer .slick-prev:before,
                    .embeddedAdContainer .embeddedAdImgContainer .slick-prev {
                    top: 45%;
                    left: -32px;
                    }
                    .embeddedAdContainer .embeddedAdImgContainer .slick-next:before,
                    .embeddedAdContainer .embeddedAdImgContainer .slick-next {
                    top: 45%;
                    right: -32px;
                    }
                    }
                    .embeddedAdContainer .embeddedAdImgContainer .slick-slider {
                    position: relative;
                    display: block;
                    box-sizing: border-box;
                    touch-action: auto;
                    -ms-touch-action: auto;
                    }
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem {
                    cursor: pointer;
                    display: -ms-flexbox;
                    display: flex;
                    -ms-flex-direction: column;
                    flex-direction: column;
                    width: 100%;
                    -ms-flex-pack: center;
                    justify-content: center;
                    -ms-flex-align: center;
                    align-items: center;
                    row-gap: 12px;
                    padding: 0 2px;
                    }
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItem__img {
                    position: relative;
                    width: 100%;
                    }
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItem__img .embeddedItem__img--tag {
                    position: absolute;
                    top: 4px;
                    left: 4px;
                    display: -ms-flexbox;
                    display: flex;
                    -ms-flex-pack: center;
                    justify-content: center;
                    -ms-flex-align: center;
                    align-items: center;
                    gap: 10px;
                    }
                    @media (min-width: 768px) {
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItem__img .embeddedItem__img--tag {
                    top: 8px;
                    left: 8px;
                    }
                    }
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItem__img .embeddedItem__img--tag div {
                    z-index: 1;
                    padding: 3px 4px;
                    border-radius: 100px;
                    background: rgba(59, 59, 50, 0.14);
                    -webkit-backdrop-filter: blur(3.5px);
                    backdrop-filter: blur(3.5px);
                    -webkit-background-filter: blur(3.5px);
                    color: #F3F3EF;
                    text-align: center;
                    font-family: "Noto Sans TC", "Figtree", sans-serif;
                    //font-family: "Chocolate Classical Sans", "Figtree", sans-serif;
                    font-size: var(--inf-embedded-ad-font-8);
                    line-height: 11px;
                    font-style: normal;
                    font-weight: 400;
                    }
                    @media (min-width: 768px) {
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItem__img .embeddedItem__img--tag div {
                    padding: 5px 8px;
                    font-size: var(--inf-embedded-ad-font-14);
                    line-height: 17px;
                    }
                    }
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItem__img .embeddedItem__imgBox {
                    width: 100%;
                    padding-top: 100%;
                    position: relative;
                    overflow: hidden;
                    }
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItem__img img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    -o-object-fit: cover;
                    object-fit: cover;
                    border-radius: var(--inf-embedded-ad-radius-8);
                    -webkit-border-radius: var(--inf-embedded-ad-radius-8);
                    -moz-border-radius: var(--inf-embedded-ad-radius-8);
                    -ms-border-radius: var(--inf-embedded-ad-radius-8);
                    -o-border-radius: var(--inf-embedded-ad-radius-8);
                    }
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo {
                    // padding-top: 8px;
                    width: 100%;
                    display: -ms-flexbox;
                    display: flex;
                    -ms-flex-direction: column;
                    flex-direction: column;
                    width: 100%;
                    gap: 3px 0;
                    }
                    @media (min-width: 768px) {
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo {
                    // padding-top: 12px;
                    gap: 6px 0;
                    }
                    }
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo .embeddedItemInfo__title {
                    color: var(--inf-embedded-ad-dark-gray);
                    text-align: center;
                    font-family: "Noto Sans TC", "Figtree", sans-serif;
                    font-size: var(--inf-embedded-ad-font-13);
                    font-style: normal;
                    font-weight: 500;
                    line-height: 18px;
                    letter-spacing: 0.26px;
                    overflow: hidden;
                    display: -webkit-box;
                    display: box;
                    -webkit-line-clamp: 1;
                    line-clamp: 1;
                    -webkit-box-orient: vertical;
                    box-orient: vertical;
                    }
                    @media (min-width: 768px) {
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo .embeddedItemInfo__title {
                    // font-family: "Chocolate Classical Sans", "Figtree", sans-serif;
                    // font-size: var(--inf-embedded-ad-font-18);
                    font-family: "Noto Sans TC", "Figtree", sans-serif;
                    font-size: var(--inf-embedded-ad-font-custom);
                    font-style: normal;
                    line-height: 23px;
                    /* 127.778% */
                    letter-spacing: 0.36px;
                    }
                    }
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo .embeddedItemInfo__price--original {
                    color: var(--inf-embedded-ad-dark-red);
                    text-align: center;
                    font-family: "Noto Sans TC", "Figtree", sans-serif;
                    //font-family: "Figtree", sans-serif;
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 17px;
                    }
                    @media (min-width: 768px) {
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo .embeddedItemInfo__price--original {
                    color: var(--inf-embedded-ad-dark-red);
                    text-align: center;
                    font-family: "Noto Sans TC", "Figtree", sans-serif;
                    //font-family: "Figtree", sans-serif;
                    // font-size: var(--inf-embedded-ad-font-18);
                    font-size: var(--inf-embedded-ad-font-custom);
                    font-style: normal;
                    font-weight: 500;
                    line-height: 23px;
                    }
                    }
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo .embeddedItemInfo__content {
                    display: -ms-flexbox;
                    display: flex;
                    -ms-flex-pack: center;
                    justify-content: center;
                    -ms-flex-align: baseline;
                    align-items: baseline;
                    gap:4px;
                    }
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo .embeddedItemInfo__content .embeddedItemInfo__discount {
                        color: #eb7454;
                        background: white;
                        border:1px solid #eb7454;
                        padding: 0 6px;
                        line-height:20px;
                        border-radius: 5px;
                        font-size: 12px;
                        opacity: 1;
                        transform:scale(0.8)
                        }
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo .embeddedItemInfo__sptext {
                            color: #333;
                            background: white;
                            padding: 0 4px;
                            border-radius: 5px;
                            font-size: 12px;
                            opacity: 1;
                            text-align:center;
                        }
                    
                    
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo .embeddedItemInfo__content .embeddedItemInfo__price {
                    margin-right: 8px;
                    color: var(--inf-embedded-ad-dark-red);
                    font-family: "Noto Sans TC", "Figtree", sans-serif;
                    //font-family: "Figtree", sans-serif;
                    font-size: var(--inf-embedded-ad-font-12);
                    font-style: normal;
                    font-weight: 500;
                    line-height: 17px;
                    /* 141.667% */
                    }
                    @media (min-width: 768px) {
                    
                        // .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo .embeddedItemInfo__content .embeddedItemInfo__discount {
                        //     transform:scale(1)
                        // }
                    
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo .embeddedItemInfo__content .embeddedItemInfo__price {
                        // font-size: var(--inf-embedded-ad-font-18);
                        font-size: var(--inf-embedded-ad-font-custom);
                        line-height: 23px;
                        /* 127.778% */
                        }
                    }
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo .embeddedItemInfo__content .embeddedItemInfo__price--original {
                    color: var(--inf-embedded-ad-light-gray);
                    font-family: "Noto Sans TC", "Figtree", sans-serif;
                    //font-family: "Figtree", sans-serif;
                    font-size: var(--inf-embedded-ad-font-9);
                    font-weight: 500;
                    line-height: 14px;
                    }
                    @media (min-width: 768px) {
                    .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo .embeddedItemInfo__content .embeddedItemInfo__price--original {
                    font-size: var(--inf-embedded-ad-font-12);
                    line-height: 17px;
                    }
                    }
                    .embeddedAdContainer .swiper-slide{
                    -webkit-backface-visibility: hide;
                    -webkit-transform：translate3d(0,0,0)；
                    }
                    .embeddedAdContainer .swiper-wrapper{
                    -webkit-transform-style:preserve-3d;
                    }
                    .swiper-slide {
                    will-change: transform;
                    }
                    
                    body {
                    background-color: #fff;
                    font-family: Futura,'Noto Sans TC',"微軟正黑體",sans-serif;
                    -webkit-font-smoothing: auto
                    }
                    .ProductDetail-gallery ul{
                        padding-left:0 !important;
                    }
                    `, document.head.appendChild(e), $(function() {
                    var e = function() {
                            var e = "",
                                t = "";
                            e = function() {
                                let e = "";
                                return document.documentElement.innerHTML.includes('"currentUser\\":null') || (e = document.documentElement.innerHTML.split('href="/users/')[1].split('",')[0].split('/edit"')[0]), e
                            }(), lgvid_exist = !1;
                            try {
                                lgvid_exist = void 0 !== localStorage.LGVID
                            } catch (e) {
                                lgvid_exist = !1
                            }
                            lgvid_exist ? t = localStorage.LGVID : (t = function(e) {
                                for (var t = "", i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = i.length, o = 0; o < e; o++) t += i.charAt(Math.floor(Math.random() * n));
                                return t
                            }(20), localStorage.setItem("LGVID", t));
                            return {
                                member_id: e,
                                lgiven_id: t,
                                skuContent: r
                            }
                        }(),
                        t = `
    <div class="embeddedAdContainer" id="embedded-ad-container" style="margin-bottom:2em" >
    <h3 class="embeddedAdContainer__title">您可能也會喜歡</h3>
    <div
    class="embeddedAdImgContainer carouselContainer swiper swiper-basic"
    style="overflow: hidden"
    >
    <div class="swiper-wrapper" id="swiper-wrapper-basic">
    <!-- ad 內容將由 JavaScript 動態生成 -->
    </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-next a-right">
    <img
    src="https://raw.githubusercontent.com/infFITSDevelopment/pop-ad/refs/heads/main/slide-arrow-right.svg"
    />
    </div>
    <div class="swiper-prev a-left">
    <img
    src="https://raw.githubusercontent.com/infFITSDevelopment/pop-ad/refs/heads/main/slide-arrow-left.svg"
    />
    </div>
    </div>
    `,
                        i = `
    <div class="embeddedAdContainer" id="embedded-ad-container-corr" style="margin-bottom:2em">
    <h3 class="embeddedAdContainer__title">推薦您一起搭配</h3>
    <div
    class="embeddedAdImgContainer carouselContainer swiper swiper-corr"
    style="overflow: hidden"
    >
    <div class="swiper-wrapper" id="swiper-wrapper-corr">
    <!-- ad 內容將由 JavaScript 動態生成 -->
    </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-next-corr a-right">
    <img
    src="https://raw.githubusercontent.com/infFITSDevelopment/pop-ad/refs/heads/main/slide-arrow-right.svg"
    />
    </div>
    <div class="swiper-prev-corr a-left">
    <img
    src="https://raw.githubusercontent.com/infFITSDevelopment/pop-ad/refs/heads/main/slide-arrow-left.svg"
    />
    </div>
    </div>
    `;
                    var n = Date.now() % 2;
                    0 == n ? void 0 !== $(d)[0] ? $(d).after(i) : void 0 !== $(s)[0] && $(s).after(i) : 1 == n && (void 0 !== $(d)[0] ? $(d).after(t) : void 0 !== $(s)[0] && $(s).after(t)),
                        function(e) {
                            e = {
                                Brand: a,
                                LGVID: e.lgiven_id,
                                MRID: e.member_id,
                                PID: e.skuContent,
                                recom_num: "12",
                                SP_PID: "xx",
                                SELFSP_PID: e.skuContent
                            }, e = {
                                method: "POST",
                                headers: {
                                    accept: "application/json",
                                    "content-type": "application/json"
                                },
                                body: JSON.stringify(e)
                            };

                            function i(e, t) {
                                const i = e.slice().sort(() => .5 - Math.random());
                                return i.slice(0, Math.min(t, e.length))
                            }
                            fetch("https://api.inffits.com/HTTP_inf_bhv_cdp_product_recommendation/extension/recom_product", e).then(e => e.json()).then(e => {
                                var t = i(e.sp_trans, 12).map(e => {
                                    let t = Object.assign({}, e);
                                    return t.sale_price = e.sale_price ? parseInt(e.sale_price.replace(/\D/g, "")).toLocaleString() : "", t.price = parseInt(e.price.replace(/\D/g, "")).toLocaleString(), t
                                });
                                992 < window.innerWidth ? 6 <= t.length && ($(".embeddedAdContainer").show(), o(t)) : 4 <= t.length && ($(".embeddedAdContainer").show(), o(t));
                                e = i(e.sp_trans, 12).map(e => {
                                    let t = Object.assign({}, e);
                                    return t.sale_price = e.sale_price ? parseInt(e.sale_price.replace(/\D/g, "")).toLocaleString() : "", t.price = parseInt(e.price.replace(/\D/g, "")).toLocaleString(), t
                                });
                                992 < window.innerWidth ? 6 <= e.length && ($(".embeddedAdContainer").show(), o(e, !0)) : 4 <= e.length && ($(".embeddedAdContainer").show(), o(e, !0))
                            }).catch(e => {
                                console.error(e)
                            })
                        }(e)
                }), $(document).on("click", ".embeddedItem", function() {
                    var e = $(this).data("title"),
                        t = $(this).data("link");
                    gtag("event", "click_embedded_item" + i, {
                        send_to: GA4Key,
                        event_category: "embedded",
                        event_label: e,
                        event_value: t
                    })
                }), $(document).on("click", ".a-left", function() {
                    gtag("event", "click_embedded_item" + i, {
                        send_to: GA4Key,
                        event_category: "embedded",
                        event_label: "arrow-left",
                        event_value: "left"
                    })
                }), $(document).on("click", ".a-right", function() {
                    gtag("event", "click_embedded_item" + i, {
                        send_to: GA4Key,
                        event_category: "embedded",
                        event_label: "arrow-right",
                        event_value: "right"
                    })
                }), $(document).on("click", "#swiper-wrapper-corr .embeddedItem", function() {
                    var e = $(this).data("title"),
                        t = $(this).data("link");
                    gtag("event", "corr_click_embedded_item" + i, {
                        send_to: GA4Key,
                        event_category: "swiper-wrapper-corr-embedded",
                        event_label: "Title: " + e,
                        value: t.length
                    })
                }), $(document).on("click", "#swiper-wrapper-corr .a-left", function() {
                    gtag("event", "corr_click_embedded_item" + i, {
                        send_to: GA4Key,
                        event_category: "swiper-wrapper-corr-embedded",
                        event_label: "arrow-left",
                        value: 10
                    })
                }), $(document).on("click", "#swiper-wrapper-corr .a-right", function() {
                    gtag("event", "corr_click_embedded_item" + i, {
                        send_to: GA4Key,
                        event_category: "swiper-wrapper-corr-embedded",
                        event_label: "arrow-right",
                        value: 10
                    })
                }), $(document).on("click", "#swiper-wrapper-basic .embeddedItem", function() {
                    var e = $(this).data("title"),
                        t = $(this).data("link");
                    gtag("event", "bhv_click_embedded_item" + i, {
                        send_to: GA4Key,
                        event_category: "swiper-wrapper-basic-embedded",
                        event_label: "Title: " + e,
                        value: t.length
                    })
                }), $(document).on("click", "#swiper-wrapper-basic .a-left", function() {
                    gtag("event", "bhv_click_embedded_item" + i, {
                        send_to: GA4Key,
                        event_category: "swiper-wrapper-basic-embedded",
                        event_label: "arrow-left",
                        value: 10
                    })
                }), $(document).on("click", "#swiper-wrapper-basic .a-right", function() {
                    gtag("event", "bhv_click_embedded_item" + i, {
                        send_to: GA4Key,
                        event_category: "swiper-wrapper-basic-embedded",
                        event_label: "arrow-right",
                        value: 10
                    })
                })
            }(jQuery)
        }, e.onerror = function() {
            console.error("Error loading swiper script")
        }, document.head.appendChild(e)
    }, "undefined" == typeof jQuery ? ((t = document.createElement("script")).src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js", t.type = "text/javascript", t.onload = function() {
        e()
    }, t.onerror = function() {
        console.error("載入 jQuery 時出錯")
    }, document.head.appendChild(t)) : e())
}

function magic_addon() {
    gtag("event", "SP-Minibar-inf" + test, {
        send_to: GA4Key,
        event_category: "GAinf",
        event_label: "Track/All",
        value: 50
    }), is55Match && isGroupA && gtag("event", "reg-SP-Minibar-inf" + test, {
        send_to: GA4Key,
        event_category: "GAinf",
        event_label: "Track/All",
        value: 50
    });
    var e, t = "medium";

    function i() {
        var e = document.documentElement.innerHTML.split('"sku":"')[1].split('"')[0].split(":")[0],
            t = "",
            i = "";
        if ("undefined" != typeof dataLayer)
            for (let e = 0; e < dataLayer.length; e++) {
                if ("Product-Detail" === dataLayer[e].Action) {
                    t = "" !== dataLayer[e].Uid ? dataLayer[e].Uid : "";
                    break
                }
                t = ""
            }
        lgvid_exist = !1;
        try {
            lgvid_exist = void 0 !== localStorage.LGVID
        } catch (e) {
            lgvid_exist = !1
        }
        return lgvid_exist ? i = localStorage.LGVID : (i = function(e) {
            for (var t = "", i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = i.length, o = 0; o < e; o++) t += i.charAt(Math.floor(Math.random() * n));
            return t
        }(20), localStorage.setItem("LGVID", i)), {
            member_id: t,
            lgiven_id: i,
            product_id: e
        }
    }
    document.documentElement.style.setProperty("--desktop-top", "80px"), document.documentElement.style.setProperty("--desktop-bottom", "16px"), document.documentElement.style.setProperty("--desktop-right", "16px"), document.documentElement.style.setProperty("--desktop-left", "16px"), document.documentElement.style.setProperty("--mobile-bottom", "90px"), decodeURI(document.location.href).includes("") && (document.querySelector("body").insertAdjacentHTML("afterbegin", `<div id="infFITS_banner_small1" class="infScenario desktop-left-bottom" style="font-weight:600;font-family:Noto Sans TC,sans-serif;cursor:pointer;display:none;position:fixed;padding:10px 0;letter-spacing:.1rem;opacity:0;-webkit-animation:slideFadeIn .5s ease;animation:slideFadeIn .5s ease forwards;width:360px;left:16px;bottom:8px;z-index:100000"><div class="inf_popup_close ${t}"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQflBB0KLijuiy0TAAABU0lEQVRo3sWZQZKCMBBFX825gtt4ZPEgbrQKV1wA9nHhFFUOxEmgO19XQtV/Tw2Q7gYI9ExM9HS0eHULLwAEbqTf953ojo/cF96NAP3yMZF4cnbFn3l+8HqYPw74KvzFJ+a1gJ/CGp+Y4bo66KOwhU9c4cSjgcI2/sEpf9JS4V+Cr0JRup9CcbKPQlWqvUJ1oq3CrjQ7hd1JNgqHUo4rHE44FmDyG+4PMVtFuaDvW5ZoeR3VK5ji6xXM8XUKLvhyBTd8mYIr/hsgFpx1VRiIRAZ/fF5hZGyDzys0w5cqOOJLFJzxb4Uhix8aFLdA3Fx4iXEP/qeFsfX3l/4F4kUovgzFNyLxrVj8MBI/jsUbEvGWTLwpFW/LxYWJuDQTF6fi8lzcoBC3aMRNKnGbTtyoFLdqxc1qcbtePLCQj2zkQyv52E4+uJSPbjv18BoCF8n4/kKAFws8B+VnA9YUAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA0LTI5VDEwOjQ2OjAzKzAwOjAw6rtp5wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNC0yOVQxMDo0NjowMyswMDowMJvm0VsAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC" style="position:absolute;top:0;bottom:0;right:0;left:0;width:8px;margin:auto;filter:invert(1)"></div><div id="infFITS_sizefast_wrapper" style="background:rgba(255,255,255,1);border-radius:24px"><div class="wrapper-flex" style="margin:auto;flex-direction:column"><div class="logo-img-container" style="text-align:center;margin-bottom:8px;margin-top:8px"><div class="logo-img" style="background-image:url(&quot;https://shoplineimg.com/614d51f4e46907003ed5765f/641957ce5698970017a912fb/2000x.jpg?&quot;)"></div></div><div class="inf_sf-container" style="justify-content:space-between;display:block"><div class="inf_sf-maintext" style="font-weight:700;margin-bottom:4px;text-align:center;overflow:hidden;text-overflow:ellipsis"></div><div class="inf_sf-maintext" style="text-align:center">其他人也這樣搭配購買，熱門推薦不容錯過！</div><div id="loader-section" style="display:none"><div id="loader" style="display:none"><img src="" height="15px"><div class="cssload-speeding-wheel"></div></div></div></div><a style="width:100%;display:flex;justify-content:center"><div class="inf_sf-main black" style="display:flex;background:#000;margin-top:8px;margin-bottom:8px;padding:2px"><div class="inf_sf-section" style="width:100%"><div class="inf_sf-section-block_noaction" style="display:flex">&nbsp;<span class="front_per active" id="front_top_per_noaction" style="color:#fff;font-weight:700;white-space:nowrap">前往商品</span><img src="https://inffits.com/webDesign/HTML/img/002-checked-symbol.png" width="8px" height="8px" style="position:fixed;right:2px;top:2px;display:none"></div></div></div></a></div></div></div>`), document.querySelector("body").insertAdjacentHTML("afterbegin", `<a><div id="infFITS_banner_mini2" class="infScenario desktop-right-bottom" style="/* width: 100%; font-size:14px;*/font-weight: 600;font-family: Noto Sans TC,sans-serif;cursor: pointer;display: none;position: fixed;padding: 10px 0;letter-spacing: .1rem;/* margin-bottom:24px; */opacity: 0;-webkit-animation: slideFadeInX 0.5s ease; animation: slideFadeInX 0.5s ease forwards;width: 360px;z-index: 1000000000000000;"><div class="inf_popup_close ${t}" onclick="event.preventDefault();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQflBB0KLijuiy0TAAABU0lEQVRo3sWZQZKCMBBFX825gtt4ZPEgbrQKV1wA9nHhFFUOxEmgO19XQtV/Tw2Q7gYI9ExM9HS0eHULLwAEbqTf953ojo/cF96NAP3yMZF4cnbFn3l+8HqYPw74KvzFJ+a1gJ/CGp+Y4bo66KOwhU9c4cSjgcI2/sEpf9JS4V+Cr0JRup9CcbKPQlWqvUJ1oq3CrjQ7hd1JNgqHUo4rHE44FmDyG+4PMVtFuaDvW5ZoeR3VK5ji6xXM8XUKLvhyBTd8mYIr/hsgFpx1VRiIRAZ/fF5hZGyDzys0w5cqOOJLFJzxb4Uhix8aFLdA3Fx4iXEP/qeFsfX3l/4F4kUovgzFNyLxrVj8MBI/jsUbEvGWTLwpFW/LxYWJuDQTF6fi8lzcoBC3aMRNKnGbTtyoFLdqxc1qcbtePLCQj2zkQyv52E4+uJSPbjv18BoCF8n4/kKAFws8B+VnA9YUAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA0LTI5VDEwOjQ2OjAzKzAwOjAw6rtp5wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNC0yOVQxMDo0NjowMyswMDowMJvm0VsAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC" style="position:absolute;top:0;bottom:0;right:0;left:0;width:8px;margin:auto;filter: indata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQflBB0KLijuiy0TAAABU0lEQVRo3sWZQZKCMBBFX825gtt4ZPEgbrQKV1wA9nHhFFUOxEmgO19XQtV/Tw2Q7gYI9ExM9HS0eHULLwAEbqTf953ojo/cF96NAP3yMZF4cnbFn3l+8HqYPw74KvzFJ+a1gJ/CGp+Y4bo66KOwhU9c4cSjgcI2/sEpf9JS4V+Cr0JRup9CcbKPQlWqvUJ1oq3CrjQ7hd1JNgqHUo4rHE44FmDyG+4PMVtFuaDvW5ZoeR3VK5ji6xXM8XUKLvhyBTd8mYIr/hsgFpx1VRiIRAZ/fF5hZGyDzys0w5cqOOJLFJzxb4Uhix8aFLdA3Fx4iXEP/qeFsfX3l/4F4kUovgzFNyLxrVj8MBI/jsUbEvGWTLwpFW/LxYWJuDQTF6fi8lzcoBC3aMRNKnGbTtyoFLdqxc1qcbtePLCQj2zkQyv52E4+uJSPbjv18BoCF8n4/kKAFws8B+VnA9YUAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA0LTI5VDEwOjQ2OjAzKzAwOjAw6rtp5wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNC0yOVQxMDo0NjowMyswMDowMJvm0VsAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCCvert(1);"></div><div id="infFITS_sizefast_wrapper" style="background:rgba(255,255,255,1);border-radius:10px;padding: 12px"><div class="wrapper-flex"><div class="countdown-timer"><div class="progress-circle"></div><div class="countdown-text" id="countdown-text">5</div></div><div class="inf_sf-container " style="justify-content: space-between; display: block; margin-left:8px"><div class="inf_sf-maintext" style="font-weight: 700;margin-bottom: 4px;overflow: hidden;text-overflow: ellipsis"></div><div class="inf_sf-maintext">熱銷組合推薦，大家都這樣買！</div><div id="loader-section" style="display: none;"><div id="loader" style="display: none;"><img src="" height="15px"><div class="cssload-speeding-wheel"></div></div></div></div><div class="logo-img-container"><div class="logo-img" style="border-radius:5px"></div></div></div></div></div></div></a>`), document.querySelector("body").insertAdjacentHTML("afterbegin", `<a><div id="infFITS_banner_mini3" class="infScenario desktop-right-bottom" style="/* width: 100%; font-size:14px;*/font-weight: 600;font-family: Noto Sans TC,sans-serif;cursor: pointer;display: none;position: fixed;padding: 10px 0;letter-spacing: .1rem;/* margin-bottom:24px; */opacity: 0;-webkit-animation: slideFadeInX 0.5s ease; animation: slideFadeInX 0.5s ease forwards;width: 360px;z-index: 1000000000000000;"><div class="inf_popup_close ${t}" onclick="event.preventDefault();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQflBB0KLijuiy0TAAABU0lEQVRo3sWZQZKCMBBFX825gtt4ZPEgbrQKV1wA9nHhFFUOxEmgO19XQtV/Tw2Q7gYI9ExM9HS0eHULLwAEbqTf953ojo/cF96NAP3yMZF4cnbFn3l+8HqYPw74KvzFJ+a1gJ/CGp+Y4bo66KOwhU9c4cSjgcI2/sEpf9JS4V+Cr0JRup9CcbKPQlWqvUJ1oq3CrjQ7hd1JNgqHUo4rHE44FmDyG+4PMVtFuaDvW5ZoeR3VK5ji6xXM8XUKLvhyBTd8mYIr/hsgFpx1VRiIRAZ/fF5hZGyDzys0w5cqOOJLFJzxb4Uhix8aFLdA3Fx4iXEP/qeFsfX3l/4F4kUovgzFNyLxrVj8MBI/jsUbEvGWTLwpFW/LxYWJuDQTF6fi8lzcoBC3aMRNKnGbTtyoFLdqxc1qcbtePLCQj2zkQyv52E4+uJSPbjv18BoCF8n4/kKAFws8B+VnA9YUAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA0LTI5VDEwOjQ2OjAzKzAwOjAw6rtp5wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNC0yOVQxMDo0NjowMyswMDowMJvm0VsAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC" style="position:absolute;top:0;bottom:0;right:0;left:0;width:8px;margin:auto;filter: invert(1);"></div><div id="infFITS_sizefast_wrapper" style="background:rgba(255,255,255,1);border-radius:10px;padding: 12px"><div class="wrapper-flex"><div class="countdown-timer"><div class="progress-circle"></div><div class="countdown-text" id="countdown-text">5</div></div><div class="inf_sf-container " style="justify-content: space-between; display: block; margin-left:8px"><div class="inf_sf-maintext" style="font-weight: 700;margin-bottom: 4px;overflow: hidden;text-overflow: ellipsis"></div><div class="inf_sf-maintext">熱銷組合推薦，大家都這樣買！</div><div id="loader-section" style="display: none;"><div id="loader" style="display: none;"><img src="" height="15px"><div class="cssload-speeding-wheel"></div></div></div></div><div class="logo-img-container"><div class="logo-img" style="border-radius:5px"></div></div></div></div></div></div></a>`), document.querySelector("body").insertAdjacentHTML("afterbegin", `<a><div id="infFITS_banner_mini4" class="infScenario desktop-right-bottom" style="/* width: 100%; font-size:14px;*/font-weight: 600;font-family: Noto Sans TC,sans-serif;cursor: pointer;display: none;position: fixed;padding: 10px 0;letter-spacing: .1rem;/* margin-bottom:24px; */opacity: 0;-webkit-animation: slideFadeInX 0.5s ease; animation: slideFadeInX 0.5s ease forwards;width: 360px;z-index: 1000000000000000;"><div class="inf_popup_close ${t}" onclick="event.preventDefault();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQflBB0KLijuiy0TAAABU0lEQVRo3sWZQZKCMBBFX825gtt4ZPEgbrQKV1wA9nHhFFUOxEmgO19XQtV/Tw2Q7gYI9ExM9HS0eHULLwAEbqTf953ojo/cF96NAP3yMZF4cnbFn3l+8HqYPw74KvzFJ+a1gJ/CGp+Y4bo66KOwhU9c4cSjgcI2/sEpf9JS4V+Cr0JRup9CcbKPQlWqvUJ1oq3CrjQ7hd1JNgqHUo4rHE44FmDyG+4PMVtFuaDvW5ZoeR3VK5ji6xXM8XUKLvhyBTd8mYIr/hsgFpx1VRiIRAZ/fF5hZGyDzys0w5cqOOJLFJzxb4Uhix8aFLdA3Fx4iXEP/qeFsfX3l/4F4kUovgzFNyLxrVj8MBI/jsUbEvGWTLwpFW/LxYWJuDQTF6fi8lzcoBC3aMRNKnGbTtyoFLdqxc1qcbtePLCQj2zkQyv52E4+uJSPbjv18BoCF8n4/kKAFws8B+VnA9YUAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA0LTI5VDEwOjQ2OjAzKzAwOjAw6rtp5wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNC0yOVQxMDo0NjowMyswMDowMJvm0VsAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC" style="position:absolute;top:0;bottom:0;right:0;left:0;width:8px;margin:auto;filter: invert(1);"></div><div id="infFITS_sizefast_wrapper" style="background:rgba(255,255,255,1);border-radius:10px;padding: 12px"><div class="wrapper-flex"><div class="countdown-timer"><div class="progress-circle"></div><div class="countdown-text" id="countdown-text">5</div></div><div class="inf_sf-container " style="justify-content: space-between; display: block; margin-left:8px"><div class="inf_sf-maintext" style="font-weight: 700;margin-bottom: 4px;overflow: hidden;text-overflow: ellipsis"></div><div class="inf_sf-maintext">熱銷組合推薦，大家都這樣買！</div><div id="loader-section" style="display: none;"><div id="loader" style="display: none;"><img src="" height="15px"><div class="cssload-speeding-wheel"></div></div></div><div class='mini_price_wrapper' data-banner="1"><p class="mini_price_sale" data-banner="1"></p><p class="mini_price" data-banner="1"></p></div></div><div class="logo-img-container"><div class="logo-img" style="border-radius:5px"></div></div></div></div></div></div></a>`), document.querySelector("body").insertAdjacentHTML("afterbegin", `<a><div id="infFITS_banner_mini5" class="infScenario desktop-left-bottom" style="/* width: 100%; font-size:14px;*/font-weight: 600;font-family: Noto Sans TC,sans-serif;cursor: pointer;display: none;position: fixed;padding: 10px 0;letter-spacing: .1rem;/* margin-bottom:24px; */opacity: 0;-webkit-animation: slideFadeInmX 0.5s ease; animation: slideFadeInmX 0.5s ease forwards;width: 360px;z-index: 1000000000000000;"><div class="inf_popup_close ${t}" onclick="event.preventDefault();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQflBB0KLijuiy0TAAABU0lEQVRo3sWZQZKCMBBFX825gtt4ZPEgbrQKV1wA9nHhFFUOxEmgO19XQtV/Tw2Q7gYI9ExM9HS0eHULLwAEbqTf953ojo/cF96NAP3yMZF4cnbFn3l+8HqYPw74KvzFJ+a1gJ/CGp+Y4bo66KOwhU9c4cSjgcI2/sEpf9JS4V+Cr0JRup9CcbKPQlWqvUJ1oq3CrjQ7hd1JNgqHUo4rHE44FmDyG+4PMVtFuaDvW5ZoeR3VK5ji6xXM8XUKLvhyBTd8mYIr/hsgFpx1VRiIRAZ/fF5hZGyDzys0w5cqOOJLFJzxb4Uhix8aFLdA3Fx4iXEP/qeFsfX3l/4F4kUovgzFNyLxrVj8MBI/jsUbEvGWTLwpFW/LxYWJuDQTF6fi8lzcoBC3aMRNKnGbTtyoFLdqxc1qcbtePLCQj2zkQyv52E4+uJSPbjv18BoCF8n4/kKAFws8B+VnA9YUAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA0LTI5VDEwOjQ2OjAzKzAwOjAw6rtp5wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNC0yOVQxMDo0NjowMyswMDowMJvm0VsAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC" style="position:absolute;top:0;bottom:0;right:0;left:0;width:8px;margin:auto;filter: invert(1);"></div><div id="infFITS_sizefast_wrapper" style="background:rgba(255,255,255,1);border-radius:10px;padding: 12px"><div class="wrapper-flex"><div class="countdown-timer"><div class="progress-circle"></div><div class="countdown-text" id="countdown-text">5</div></div><div class="inf_sf-container " style="justify-content: space-between; display: block; margin-left:8px"><div class="inf_sf-maintext" style="font-weight: 700;margin-bottom: 4px;overflow: hidden;text-overflow: ellipsis"></div><div class="inf_sf-maintext">熱銷組合推薦，大家都這樣買！</div><div id="loader-section" style="display: none;"><div id="loader" style="display: none;"><img src="" height="15px"><div class="cssload-speeding-wheel"></div></div></div><div class='mini_price_wrapper' data-banner="2"><p class="mini_price_sale" data-banner="2"></p><p class="mini_price" data-banner="2"></p></div></div><div class="logo-img-container"><div class="logo-img" style="border-radius:5px"></div></div></div></div></div></div></a>`), document.querySelector("body").insertAdjacentHTML("afterbegin", `<a><div id="infFITS_banner_mini6" class="infScenario desktop-left-bottom" style="/* width: 100%; font-size:14px;*/font-weight: 600;font-family: Noto Sans TC,sans-serif;cursor: pointer;display: none;position: fixed;padding: 10px 0;letter-spacing: .1rem;/* margin-bottom:24px; */opacity: 0;-webkit-animation: slideFadeInmX 0.5s ease; animation: slideFadeInmX 0.5s ease forwards;width: 360px;z-index: 1000000000000000;"><div class="inf_popup_close ${t}" onclick="event.preventDefault();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQflBB0KLijuiy0TAAABU0lEQVRo3sWZQZKCMBBFX825gtt4ZPEgbrQKV1wA9nHhFFUOxEmgO19XQtV/Tw2Q7gYI9ExM9HS0eHULLwAEbqTf953ojo/cF96NAP3yMZF4cnbFn3l+8HqYPw74KvzFJ+a1gJ/CGp+Y4bo66KOwhU9c4cSjgcI2/sEpf9JS4V+Cr0JRup9CcbKPQlWqvUJ1oq3CrjQ7hd1JNgqHUo4rHE44FmDyG+4PMVtFuaDvW5ZoeR3VK5ji6xXM8XUKLvhyBTd8mYIr/hsgFpx1VRiIRAZ/fF5hZGyDzys0w5cqOOJLFJzxb4Uhix8aFLdA3Fx4iXEP/qeFsfX3l/4F4kUovgzFNyLxrVj8MBI/jsUbEvGWTLwpFW/LxYWJuDQTF6fi8lzcoBC3aMRNKnGbTtyoFLdqxc1qcbtePLCQj2zkQyv52E4+uJSPbjv18BoCF8n4/kKAFws8B+VnA9YUAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA0LTI5VDEwOjQ2OjAzKzAwOjAw6rtp5wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNC0yOVQxMDo0NjowMyswMDowMJvm0VsAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC" style="position:absolute;top:0;bottom:0;right:0;left:0;width:8px;margin:auto;filter: invert(1);"></div><div id="infFITS_sizefast_wrapper" style="background:rgba(255,255,255,1);border-radius:10px;padding: 8px"><div class="wrapper-flex"><div class="countdown-timer"><div class="progress-circle"></div><div class="countdown-text" id="countdown-text">5</div></div><div class="inf_sf-container " style="justify-content: space-between; display: block; margin-left:8px"><div class="inf_sf-maintext" style="font-weight: 700;margin-bottom: 4px;overflow: hidden;text-overflow: ellipsis"></div><div class="inf_sf-maintext"></div><div id="loader-section" style="display: none;"><div id="loader" style="display: none;"><img src="" height="15px"><div class="cssload-speeding-wheel"></div></div></div><div class='mini_price_wrapper' data-banner="3"><p class="mini_price_sale" data-banner="3"></p><p class="mini_price" data-banner="3"></p></div></div><div class="logo-img-container"><div class="logo-img" style="border-radius:5px"></div></div></div></div></div></div></a>`), e = function() {
        let e, t = !1;
        clearTimeout(e), clearTimeout(void 0), t, e = setTimeout(() => {
            t || "" !== document.querySelector("#infFITS_banner_mini6 .inf_sf-maintext").innerText && (null == document.getElementById("infFITS_banner_discount") || null !== document.getElementById("infFITS_banner_discount") && "block" !== document.getElementById("infFITS_banner_discount").style.display) && (document.getElementById("infFITS_banner_mini6").style.display = "block", t = !0)
        }, 1e4);
        const n = ["infFITS_banner_small1", "infFITS_banner_mini2", "infFITS_banner_mini3", "infFITS_banner_mini4", "infFITS_banner_mini5", "infFITS_banner_mini6"];
        document.addEventListener("click", function(i) {
            n.forEach(e => {
                const t = document.getElementById(e);
                t && !t.contains(i.target) && (t.style.display = "none")
            })
        }), document.getElementById("infFITS_banner_mini6").addEventListener("click", function(e) {
            this.style.display = "none", gtag("event", "SP-Minibar-inf-click" + test, {
                send_to: GA4Key,
                event_category: "GAinf",
                event_label: "Track/All",
                value: 50
            })
        })
    }, "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", e) : e(), n = {
        Brand: "VER",
        LGVID: (n = i()).lgiven_id,
        MRID: n.member_id,
        PID: n.product_id,
        recom_num: "12",
        SP_PID: "xx",
        SELFSP_PID: n.product_id
    }, n = {
        method: "POST",
        headers: {
            accept: "application/json",
            "content-type": "application/json"
        },
        body: JSON.stringify(n)
    }, fetch("https://eclm50mys1.execute-api.ap-northeast-1.amazonaws.com/v0/extension/recom_product", n).then(e => e.json()).then(e => {
        var t = e.sp_atc.map(e => {
                let t = Object.assign({}, e);
                return t.sale_price = e.sale_price ? parseInt(e.sale_price.replace(/\D/g, "")).toLocaleString() : "", t.price = parseInt(e.price.replace(/\D/g, "")).toLocaleString(), t
            }),
            i = e.sp_trans.map(e => {
                let t = Object.assign({}, e);
                return t.sale_price = e.sale_price ? parseInt(e.sale_price.replace(/\D/g, "")).toLocaleString() : "", t.price = parseInt(e.price.replace(/\D/g, "")).toLocaleString(), t
            });
        let n;
        n = 0 < e.selfsp_trans.length ? e.selfsp_trans.map(e => {
            let t = Object.assign({}, e.recom_dat);
            return t.sale_price = e.recom_dat.sale_price ? parseInt(e.recom_dat.sale_price.replace(/\D/g, "")).toLocaleString() : "", t.price = parseInt(e.recom_dat.price.replace(/\D/g, "")).toLocaleString(), t.record_cnt = e.record_cnt, t
        }) : [];
        let o;
        o = 0 < e.selfsp_trans.length ? e.selfsp_trans.map(e => {
            let t = Object.assign({}, e.recom_dat);
            return t.sale_price = e.recom_dat.sale_price ? parseInt(e.recom_dat.sale_price.replace(/\D/g, "")).toLocaleString() : "", t.price = parseInt(e.recom_dat.price.replace(/\D/g, "")).toLocaleString(), t.record_cnt = e.record_cnt, t
        }) : [];
        e = Math.floor(12 * Math.random());
        document.getElementById("infFITS_banner_small1").querySelector(".logo-img").style.backgroundImage = 'url("' + t[e].image_link + '")', document.getElementById("infFITS_banner_small1").querySelector(".inf_sf-maintext").innerText = t[e].title, document.getElementById("infFITS_banner_small1").querySelector(".inf_sf-main").parentNode.setAttribute("href", t[e].link), document.getElementById("infFITS_banner_small1").querySelector(".inf_sf-main").parentNode.setAttribute("target", "blank");
        e = Math.floor(12 * Math.random());
        document.getElementById("infFITS_banner_mini2").parentNode.setAttribute("href", i[e].link), document.getElementById("infFITS_banner_mini2").parentNode.setAttribute("target", "blank"), document.getElementById("infFITS_banner_mini2").querySelector(".logo-img").style.backgroundImage = 'url("' + i[e].image_link + '")', document.getElementById("infFITS_banner_mini2").querySelector(".inf_sf-maintext").innerText = i[e].title;
        var a, r, e = Math.floor(12 * Math.random());

        function d(e) {
            document.getElementById(e).classList.add("mobile-abs-center"), document.getElementById(e).classList.remove("desktop-left-bottom")
        }
        document.getElementById("infFITS_banner_mini3").parentNode.setAttribute("href", i[e].link), document.getElementById("infFITS_banner_mini3").parentNode.setAttribute("target", "blank"), document.getElementById("infFITS_banner_mini3").querySelector(".logo-img").style.backgroundImage = 'url("' + i[e].image_link + '")', document.getElementById("infFITS_banner_mini3").querySelector(".inf_sf-maintext").innerText = i[e].title, 0 < n.length && 0 < o.length && ((e, t, i, n) => {
            const o = document.getElementById(e),
                a = n[t];
            o.parentNode.setAttribute("href", a.link), o.parentNode.setAttribute("target", "blank"), o.querySelector(".logo-img").style.backgroundImage = `url("${a.image_link}")`, o.querySelector(".inf_sf-maintext").innerText = a.title;
            const r = document.querySelector(`.mini_price_sale[data-banner="${i}"]`),
                d = document.querySelector(`.mini_price[data-banner="${i}"]`);
            "sale_price" in a && "" !== a.sale_price ? (r.innerText = `NT$ ${a.sale_price}`, setTimeout(() => {
                ! function(e, t, i) {
                    const n = document.querySelector('.mini_price_wrapper[data-banner="' + i + '"]');
                    n.innerHTML = `
                        <span class="mini_price_sale" data-banner="${i}">${parseInt(100-100*parseInt(e.replace(",",""))/parseInt(t.replace(",","")))}% off<span style='color:black'>NT$ ${e}</span></span>
                        <span class="mini_price" data-banner="${i}">NT$ ${t}</span>
                        `;
                    const o = document.querySelector('.mini_price_sale[data-banner="' + i + '"]'),
                        a = document.querySelector('.mini_price[data-banner="' + i + '"]');
                    o.style.animation = "none", a.style.animation = "none", requestAnimationFrame(() => {
                        o.style.animation = "", a.style.animation = ""
                    })
                }(a.sale_price, a.price, i)
            }, 3e3)) : (r.style.display = "none", Object.assign(d.style, {
                color: "#EB7454",
                transform: "scale(1)",
                textDecoration: "none",
                animation: "none"
            })), "price" in a && (d.innerText = `NT$ ${a.price}`), "3" == i && (o.parentNode.removeAttribute("target"), $("#" + e + " .inf_sf-maintext")[1].innerHTML = '近期超過 <span style="color:rgb(235, 116, 84);font-weight:600">' + a.record_cnt + "</span> 位顧客購買這款商品", "unicolor" == a.stock_top_color ? $("#" + e + " .inf_sf-container")[0].insertAdjacentHTML("beforeend", '<div class="inf_sf-maintext stock_color" style="margin-top:4px">推薦您參考！</div>') : $("#" + e + " .inf_sf-container")[0].insertAdjacentHTML("beforeend", '<div class="inf_sf-maintext stock_color" style="margin-top:4px;display:none">推薦您參考 <span style="color:rgb(235, 116, 84);font-weight:600">' + a.stock_top_color + "</span> 色</div>"), $("#" + e + " .mini_price_wrapper").hide(), o.parentNode.setAttribute("href", "javascript:void(0)"))
        })("infFITS_banner_mini6", 0, "3", (a = n, r = o, (r = [a, r])[Math.floor(Math.random() * r.length)])), window.innerWidth <= 768 && (d("infFITS_banner_small1"), d("infFITS_banner_mini2"), d("infFITS_banner_mini3"), d("infFITS_banner_mini4"), d("infFITS_banner_mini5"), d("infFITS_banner_mini6"))
    }).catch(e => console.error(e)), document.querySelectorAll(".inf_popup_close").forEach(function(e) {
        e.addEventListener("click", function() {
            e.parentNode.style.display = "none", gtag("event", "Minibar-inf-close" + test, {
                send_to: GA4Key,
                event_category: "GAinf",
                event_label: "Track/All",
                value: 50
            })
        })
    }));
    var n = document.createElement("style");
    n.innerText = `

        .infScenario .inf_popup_close.small{
            position:absolute;top:-16px;z-index:10000009;right:0;padding:5px;height:12.5px;width:12.5px;border-radius:50%;box-shadow:rgb(54 62 81 / 15%) 0 .0625rem .125rem .0625rem;background:rgba(0,0,0,.3);opacity:1
        }
        .infScenario .inf_popup_close.medium{
            position:absolute;top:-16px;z-index:10000009;right:0;padding:5px;height:20px;width:20px;border-radius:50%;box-shadow:rgb(54 62 81 / 15%) 0 .0625rem .125rem .0625rem;background:rgba(0,0,0,.3);opacity:1
        }

        .infScenario #infFITS_sizefast_wrapper{
        padding: 6px;font-family: "Noto Sans TC",sans-serif;text-align: left;box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;letter-spacing: 0.05rem;
        }
        .infScenario .wrapper-flex{
            display: flex;justify-content: space-between;flex-direction: row-reverse;align-items: center;
        }
        .infScenario .logo-img-container{
            position: relative;width: 45px;height: 45px;border-radius: 50%;
        }
        .infScenario .logo-img{
            margin: auto;top: 0;right: 0;left: 0; bottom: 0;position: absolute;height: 42px;width: 42px;border-radius: 50%;background-repeat: no-repeat;background-size: cover;box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
        }
        .infScenario .inf_sf-container{
            display: flex;justify-content: center;font-weight: initial;font-size: 12px;width: 80%;color: gray;justify-content: space-between;align-items: center;
        }
        .infScenario .inf_sf-maintext{
            color: #333;font-size: 12px;white-space: nowrap;text-align: center;font-weight:300;overflow:inherit;text-align: left;line-height: 14px
        }
        .infScenario .inf_sf-main{
            position: relative;display: flex;width: 85%;padding: 6px;border-radius: 10px;align-items: center;display:none;
        }
        .infScenario .inf_sf-main.black{
            background:black !important;
            pointer-events:none !important;
            display:block !important;
        }
        .infScenario #loader-section{
            position: relative;display: flex;width: 85%;padding: 6px;border-radius: 10px;align-items: center;display:none;
        }
        .infScenario .inf_sf-section{
            width: 50%;border-radius: 5px;height: 36px;position:relative
        }
        .infScenario .inf_sf-section-block{
            justify-content: center;width: 100%;height: 100%;border-radius: 5px;text-align: center;display: none;display: flex;align-items: center;color:darkgray
        }

        .infScenario .inf_sf-section-block.active{
        background: white;
        color:black;
        max-width:75px !important;
        }
        .infScenario .inf_sf-section-block .front_size{
            font-size: 18px;
            font-weight: 600;
        }
        .infScenario .inf_sf-section-block .front_per{
            font-size: 12px;font-weight: 300
        }

        .infScenario #loader{
            position: absolute;
            width: 100%;
            height: 100%;
            text-align: center;
            transform : scale(0.5);
            z-index:10000;
        }
        .infScenario #loader img{
            position: absolute;
            right: 0;
            left: 0;
            top: 0;
            bottom: 0;
            margin: auto;
        }

        .infScenario .cssload-speeding-wheel {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    margin: auto;
                }
        .infScenario .cssload-speeding-wheel {
                    width: 31px;
                    height: 31px;
                    border: 2px solid rgba(97,100,193,0.98);
                    border-radius: 50%;
                    border-left-color: transparent;
                    border-right-color: transparent;
                    animation: cssload-spin 625ms infinite linear;
                    -o-animation: cssload-spin 625ms infinite linear;
                    -ms-animation: cssload-spin 625ms infinite linear;
                    -webkit-animation: cssload-spin 625ms infinite linear;
                }
        @keyframes cssload-spin {
                100%{ transform: rotate(360deg); transform: rotate(360deg); }
                }

        @-o-keyframes cssload-spin {
                100%{ -o-transform: rotate(360deg); transform: rotate(360deg); }
                }

        @-ms-keyframes cssload-spin {
                100%{ -ms-transform: rotate(360deg); transform: rotate(360deg); }
                }

        @-webkit-keyframes cssload-spin {
                100%{ -webkit-transform: rotate(360deg); transform: rotate(360deg); }
                }

        @-moz-keyframes cssload-spin {
                100%{ -moz-transform: rotate(360deg); transform: rotate(360deg); }
                }
        .infScenario .inf_sf-container {
            -ms-overflow-style: none;  /* Internet Explorer 10+ */
            scrollbar-width: none;  /* Firefox */
        }
        .infScenario .inf_sf-container::-webkit-scrollbar { 
            display: none;  /* Safari and Chrome */
        }
        /* 計時器的容器樣式 */
        .countdown-timer {
            width: 20px;
            height: 20px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            display:none;
        }

        /* 圓形進度條 */
        .progress-circle {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: conic-gradient(
            #4CAF50 0%,       /* 開始顏色 */
            #4CAF50 100%      /* 結束顏色 */
            );
            animation: countdown 5s linear forwards;
        }

        /* 倒數文字 */
        .countdown-text {
            position: absolute;
            font-size: 10px;
            font-weight: bold;
            color: #FFFFFF;
            display:none;
        }

        /* 動畫效果 */
        @keyframes countdown {
            0% { background: conic-gradient(#4CAF50 0%, #4CAF50 100%); }
            100% { background: conic-gradient(#4CAF50 0%, transparent 100%); }
        }

        @keyframes slideFadeIn {
            0% {
                opacity: 0;
                transform: translateY(100%);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
            }
            @keyframes slideFadeInX {
                0% {
                    opacity: 0;
                    transform: translateX(100%);
                }
                100% {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            @keyframes slideFadeInmX {
                0% {
                    opacity: 0;
                    transform: translateX(-100%);
                }
                100% {
                    opacity: 1;
                    transform: translateX(0);
                }
            }

        .infScenario.desktop-right-top{
                top: var(--desktop-top);
                right: var(--desktop-right);
            }
        .infScenario.desktop-right-bottom{
                bottom: var(--desktop-bottom);
                right: var(--desktop-right);
            }
        .infScenario.desktop-left-bottom{
                bottom: var(--desktop-bottom);
                left: var(--desktop-left);
            }

        .infScenario.mobile-abs-center{
                left: 0 !important;
                right: 0 !important;
                margin: auto !important;
                bottom: var(--mobile-bottom) !important;
        }
        .mini_price_wrapper {display: flex;gap: 8px;margin: 2px}
        .mini_price_sale { display:flex; gap:8px;color: #EB7454;margin: 0;font-weight: bold;animation: scaleUp3 2.5s ease-in-out forwards;}
        .mini_price { margin: 0;animation: fadeOut3 2.5s ease-in-out forwards;}

        /* 動畫效果 */
        @keyframes scaleUp1 {
            0% {
                opacity: 0;
                transform: translateX(-5px);
            }
            100% {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes fadeOut1 {
            0% {
                opacity: 1;
                color: black;
            }
            100% {
                opacity: 0.5;
                color: darkgray;
                transform: scale(0.9);
                text-decoration-line: line-through;
            }
        }
        
        @keyframes scaleUp2 {
            0% {
                opacity: 0;
                transform: translateX(-130px);
            }
            100% {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes fadeOut2 {
            0% {
                opacity: 1;
                color: black;
                transform: translateX(-130px);
            }
            100% {
                opacity: 0.5;
                color: darkgray;
                transform: scale(0.9) translateX(0);
                text-decoration-line: line-through;
            }
        }
        
        @keyframes scaleUp3 {
            0% {
                opacity: 0;
                transform: translateX(-130px);
            }
            50% {
                opacity: 0;
                transform: translateX(-130px);
            }
            100% {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes fadeOut3 {
            0% {
                opacity: 1;
                color: black;
                transform: translateX(-130px);
            }
            50% {
                opacity: 1;
                color: black;
                transform: translateX(-130px);
            }
            100% {
                opacity: 0.5;
                color: darkgray;
                transform: scale(0.9) translateX(0);
                text-decoration-line: line-through;
            }
        }
        
        `, document.head.appendChild(n)
}

function discount() {
    gtag("event", "Discount-Minibar-inf" + test, {
        send_to: GA4Key,
        event_category: "GAinf",
        event_label: "Track/All",
        value: 50
    }), document.documentElement.style.setProperty("--desktop-top", "80px"), document.documentElement.style.setProperty("--desktop-bottom", "16px"), document.documentElement.style.setProperty("--desktop-right", "16px"), document.documentElement.style.setProperty("--desktop-left", "16px"), document.documentElement.style.setProperty("--mobile-bottom", "80px");
    var e;
    window.copyDiscountCode = function(e) {
        e.preventDefault(), e.stopPropagation();
        const i = document.querySelector(".discount-code").textContent;

        function t() {
            const e = document.createElement("textarea");
            e.value = i, e.style.position = "fixed", e.style.opacity = "0", document.body.appendChild(e), e.focus(), e.select();
            try {
                if (document.execCommand("copy")) {
                    const t = document.querySelector(".copy-btn");
                    t.textContent = "已複製", t.classList.add("copied"), setTimeout(() => {
                        t.textContent = "複製", t.classList.remove("copied")
                    }, 2e3)
                }
            } catch (e) {
                console.error("備用複製失敗: ", e)
            }
            document.body.removeChild(e)
        }
        navigator.clipboard && navigator.clipboard.writeText ? navigator.clipboard.writeText(i).then(() => {
            const e = document.querySelector(".copy-btn");
            e.textContent = "已複製", e.classList.add("copied"), setTimeout(() => {
                e.textContent = "複製折扣碼", e.classList.remove("copied")
            }, 2e3)
        }).catch(e => {
            console.error("複製失敗: ", e), t()
        }) : t()
    }, document.querySelector("body").insertAdjacentHTML("afterbegin", `
    <div id="infFITS_banner_discount" class="infScenario desktop-left-bottom" style="font-weight: 600;font-family: Noto Sans TC,sans-serif;cursor: pointer;display: none;position: fixed;padding: 10px 0;letter-spacing: .1rem;opacity: 0;-webkit-animation: slideFadeInmX 0.5s ease; animation: slideFadeInmX 0.5s ease forwards;width: 360px;z-index: 1000000000000000;">
        <div class="inf_popup_close medium" onclick="event.preventDefault();event.stopPropagation();this.parentNode.style.display='none';"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQflBB0KLijuiy0TAAABU0lEQVRo3sWZQZKCMBBFX825gtt4ZPEgbrQKV1wA9nHhFFUOxEmgO19XQtV/Tw2Q7gYI9ExM9HS0eHULLwAEbqTf953ojo/cF96NAP3yMZF4cnbFn3l+8HqYPw74KvzFJ+a1gJ/CGp+Y4bo66KOwhU9c4cSjgcI2/sEpf9JS4V+Cr0JRup9CcbKPQlWqvUJ1oq3CrjQ7hd1JNgqHUo4rHE44FmDyG+4PMVtFuaDvW5ZoeR3VK5ji6xXM8XUKLvhyBTd8mYIr/hsgFpx1VRiIRAZ/fF5hZGyDzys0w5cqOOJLFJzxb4Uhix8aFLdA3Fx4iXEP/qeFsfX3l/4F4kUovgzFNyLxrVj8MBI/jsUbEvGWTLwpFW/LxYWJuDQTF6fi8lzcoBC3aMRNKnGbTtyoFLdqxc1qcbtePLCQj2zkQyv52E4+uJSPbjv18BoCF8n4/kKAFws8B+VnA9YUAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA0LTI5VDEwOjQ2OjAzKzAwOjAw6rtp5wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNC0yOVQxMDo0NjowMyswMDowMJvm0VsAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC" style="position:absolute;top:0;bottom:0;right:0;left:0;width:8px;margin:auto;filter: invert(1);"></div>
        <div id="infFITS_discount_wrapper" style="background:rgba(255,255,255,1);border-radius:10px;padding: 12px;box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;">
            <div class="wrapper-flex">
                <div class="inf_sf-container" style="justify-content: space-between; display: block; margin-left:8px;width:100%">
                    <div class="inf_sf-maintext" style="font-weight: 700;margin-bottom: 4px;overflow: hidden;text-overflow: ellipsis">女裝限時優惠</div>
                    <div class="inf_sf-maintext">運動內衣一件折<span style='font-weight:bold;color:#EB7454'>$200</span>(優惠可累計,買越多省越多)</div>
                    <div class="discount-code-container">
                        <div class="discount-code">bra200</div>
                        <button class="copy-btn" onclick="copyDiscountCode(event)">複製折扣碼</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `), window.innerWidth <= 768 && (e = "infFITS_banner_discount", document.getElementById(e).classList.add("mobile-abs-center"), document.getElementById(e).classList.remove("desktop-left-bottom"));
    var t = document.createElement("style");
    t.innerText = `
    /* 折扣碼容器樣式 */
    .discount-code-container {
        display: flex;
        align-items: center;
        margin-top: 8px;
        background: #f5f5f5;
        border-radius: 4px;
        padding: 4px;
        border: 1px dashed #ccc;
    }
    
    .discount-code {
        flex-grow: 1;
        padding: 4px 8px;
        font-family: monospace;
        font-weight: bold;
        color: #333;
        letter-spacing: 1px;
    }
    
    .copy-btn {
        background: #EB7454;
        color: white;
        border: none;
        border-radius: 4px;
        padding: 4px 12px;
        cursor: pointer;
        font-size: 12px;
        transition: all 0.2s ease;
    }
    
    .copy-btn:hover {
        background: #d86545;
    }
    
    .copy-btn.copied {
        background: #4CAF50;
    }
    `, document.head.appendChild(t);
    (t = document.createElement("style")).innerText = `

.infScenario .inf_popup_close.small{
    position:absolute;top:-16px;z-index:10000009;right:0;padding:5px;height:12.5px;width:12.5px;border-radius:50%;box-shadow:rgb(54 62 81 / 15%) 0 .0625rem .125rem .0625rem;background:rgba(0,0,0,.3);opacity:1
}
.infScenario .inf_popup_close.medium{
    position:absolute;top:-16px;z-index:10000009;right:0;padding:5px;height:20px;width:20px;border-radius:50%;box-shadow:rgb(54 62 81 / 15%) 0 .0625rem .125rem .0625rem;background:rgba(0,0,0,.3);opacity:1
}

.infScenario #infFITS_sizefast_wrapper{
padding: 6px;font-family: "Noto Sans TC",sans-serif;text-align: left;box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;letter-spacing: 0.05rem;
}
.infScenario .wrapper-flex{
    display: flex;justify-content: space-between;flex-direction: row-reverse;align-items: center;
}
.infScenario .logo-img-container{
    position: relative;width: 45px;height: 45px;border-radius: 50%;
}
.infScenario .logo-img{
    margin: auto;top: 0;right: 0;left: 0; bottom: 0;position: absolute;height: 42px;width: 42px;border-radius: 50%;background-repeat: no-repeat;background-size: cover;box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}
.infScenario .inf_sf-container{
    display: flex;justify-content: center;font-weight: initial;font-size: 12px;width: 80%;color: gray;justify-content: space-between;align-items: center;
}
.infScenario .inf_sf-maintext{
    color: #333;font-size: 12px;white-space: nowrap;text-align: center;font-weight:300;overflow:inherit;text-align: left;line-height: 14px
}
.infScenario .inf_sf-main{
    position: relative;display: flex;width: 85%;padding: 6px;border-radius: 10px;align-items: center;display:none;
}
.infScenario .inf_sf-main.black{
    background:black !important;
    pointer-events:none !important;
    display:block !important;
}
.infScenario #loader-section{
    position: relative;display: flex;width: 85%;padding: 6px;border-radius: 10px;align-items: center;display:none;
}
.infScenario .inf_sf-section{
    width: 50%;border-radius: 5px;height: 36px;position:relative
}
.infScenario .inf_sf-section-block{
    justify-content: center;width: 100%;height: 100%;border-radius: 5px;text-align: center;display: none;display: flex;align-items: center;color:darkgray
}

.infScenario .inf_sf-section-block.active{
background: white;
color:black;
max-width:75px !important;
}
.infScenario .inf_sf-section-block .front_size{
    font-size: 18px;
    font-weight: 600;
}
.infScenario .inf_sf-section-block .front_per{
    font-size: 12px;font-weight: 300
}

.infScenario #loader{
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    transform : scale(0.5);
    z-index:10000;
}
.infScenario #loader img{
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
}

.infScenario .cssload-speeding-wheel {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
        }
.infScenario .cssload-speeding-wheel {
            width: 31px;
            height: 31px;
            border: 2px solid rgba(97,100,193,0.98);
            border-radius: 50%;
            border-left-color: transparent;
            border-right-color: transparent;
            animation: cssload-spin 625ms infinite linear;
            -o-animation: cssload-spin 625ms infinite linear;
            -ms-animation: cssload-spin 625ms infinite linear;
            -webkit-animation: cssload-spin 625ms infinite linear;
        }
@keyframes cssload-spin {
        100%{ transform: rotate(360deg); transform: rotate(360deg); }
        }

@-o-keyframes cssload-spin {
        100%{ -o-transform: rotate(360deg); transform: rotate(360deg); }
        }

@-ms-keyframes cssload-spin {
        100%{ -ms-transform: rotate(360deg); transform: rotate(360deg); }
        }

@-webkit-keyframes cssload-spin {
        100%{ -webkit-transform: rotate(360deg); transform: rotate(360deg); }
        }

@-moz-keyframes cssload-spin {
        100%{ -moz-transform: rotate(360deg); transform: rotate(360deg); }
        }
.infScenario .inf_sf-container {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
}
.infScenario .inf_sf-container::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}
/* 計時器的容器樣式 */
.countdown-timer {
    width: 20px;
    height: 20px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    display:none;
}

/* 圓形進度條 */
.progress-circle {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: conic-gradient(
    #4CAF50 0%,       /* 開始顏色 */
    #4CAF50 100%      /* 結束顏色 */
    );
    animation: countdown 5s linear forwards;
}

/* 倒數文字 */
.countdown-text {
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    color: #FFFFFF;
    display:none;
}

/* 動畫效果 */
@keyframes countdown {
    0% { background: conic-gradient(#4CAF50 0%, #4CAF50 100%); }
    100% { background: conic-gradient(#4CAF50 0%, transparent 100%); }
}

@keyframes slideFadeIn {
    0% {
        opacity: 0;
        transform: translateY(100%);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
    }
    @keyframes slideFadeInX {
        0% {
            opacity: 0;
            transform: translateX(100%);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
    @keyframes slideFadeInmX {
        0% {
            opacity: 0;
            transform: translateX(-100%);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

.infScenario.desktop-right-top{
        top: var(--desktop-top);
        right: var(--desktop-right);
    }
.infScenario.desktop-right-bottom{
        bottom: var(--desktop-bottom);
        right: var(--desktop-right);
    }
.infScenario.desktop-left-bottom{
        bottom: var(--desktop-bottom);
        left: var(--desktop-left);
    }

.infScenario.mobile-abs-center{
        left: 0 !important;
        right: 0 !important;
        margin: auto !important;
        bottom: var(--mobile-bottom) !important;
}
.mini_price_wrapper {display: flex;gap: 8px;margin: 2px}
.mini_price_sale { display:flex; gap:8px;color: #EB7454;margin: 0;font-weight: bold;animation: scaleUp3 2.5s ease-in-out forwards;}
.mini_price { margin: 0;animation: fadeOut3 2.5s ease-in-out forwards;}

/* 動畫效果 */
@keyframes scaleUp1 {
    0% {
        opacity: 0;
        transform: translateX(-5px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeOut1 {
    0% {
        opacity: 1;
        color: black;
    }
    100% {
        opacity: 0.5;
        color: darkgray;
        transform: scale(0.9);
        text-decoration-line: line-through;
    }
}

@keyframes scaleUp2 {
    0% {
        opacity: 0;
        transform: translateX(-130px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeOut2 {
    0% {
        opacity: 1;
        color: black;
        transform: translateX(-130px);
    }
    100% {
        opacity: 0.5;
        color: darkgray;
        transform: scale(0.9) translateX(0);
        text-decoration-line: line-through;
    }
}

@keyframes scaleUp3 {
    0% {
        opacity: 0;
        transform: translateX(-130px);
    }
    50% {
        opacity: 0;
        transform: translateX(-130px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeOut3 {
    0% {
        opacity: 1;
        color: black;
        transform: translateX(-130px);
    }
    50% {
        opacity: 1;
        color: black;
        transform: translateX(-130px);
    }
    100% {
        opacity: 0.5;
        color: darkgray;
        transform: scale(0.9) translateX(0);
        text-decoration-line: line-through;
    }
}

`, document.head.appendChild(t),
        function() {
            var e = document.getElementById("infFITS_banner_discount");
            e && (e.style.display = "block");
            const t = ["infFITS_banner_discount"];
            document.addEventListener("click", function(e) {
                t.forEach(e => {
                    gtag("event", "discount-inf-click" + test, {
                        send_to: GA4Key,
                        event_category: "GAinf",
                        event_label: "Track/All",
                        value: 50
                    })
                })
            }), document.getElementById("infFITS_banner_discount").querySelectorAll(".inf_popup_close").forEach(function(e) {
                e.addEventListener("click", function() {
                    e.parentNode.style.display = "none", gtag("event", "discount-inf-close" + test, {
                        send_to: GA4Key,
                        event_category: "GAinf",
                        event_label: "Track/All",
                        value: 50
                    })
                })
            })
        }()
}
Condition_Loaded();