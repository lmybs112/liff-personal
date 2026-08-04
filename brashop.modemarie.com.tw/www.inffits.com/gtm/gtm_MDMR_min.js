window.infInvokeHTTP = function(e, t, n) {
    try {
        fetch("https://api.inffits.com/HTTP_" + e, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: t
        }).then(function(e) {
            return e.text().then(function(t) {
                var i = t;
                try {
                    JSON.parse(t)
                } catch (e) {
                    i = JSON.stringify(null == t ? "" : t)
                }
                try {
                    n && n(null, {
                        Payload: i,
                        StatusCode: e.status
                    })
                } catch (e) {}
            })
        }).catch(function(e) {
            try {
                n && n(e, null)
            } catch (e) {}
        })
    } catch (e) {
        try {
            n && n(e, null)
        } catch (e) {}
    }
};
var time_count = 0;
var INFFITS_BODY_SYNC_GTM_SRC = window.INFFITS_BODY_SYNC_GTM_SRC || "https://liff-personal.vercel.app/inffits-body-sync-gtm.js";

function Condition_Loaded() {
    var e;
    function startTrigger() {
        "undefined" != typeof jQuery ? Trigger_infFITS() : (time_count <= 20 && ((e = document.createElement("script")).type = "text/javascript", "undefined" == typeof $ || "undefined" == typeof jQuery ? e.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" : e.src = "https://s3.ap-northeast-1.amazonaws.com/inffits.com/webDesign/HTML/js/iframe/json/dummy.js", document.head.appendChild(e), setTimeout(Condition_Loaded, 500)), time_count += .5)
    }
    if (window.InfFITSBodySync) {
        startTrigger();
        return;
    }
    if (window.__INFFITS_BODY_SYNC_GTM_LOADING__) {
        setTimeout(Condition_Loaded, 100);
        return;
    }
    window.__INFFITS_BODY_SYNC_GTM_LOADING__ = true;
    var s = document.createElement("script");
    s.src = INFFITS_BODY_SYNC_GTM_SRC;
    s.async = true;
    s.onload = function () {
        window.__INFFITS_BODY_SYNC_GTM_LOADING__ = false;
        startTrigger();
    };
    s.onerror = function () {
        window.__INFFITS_BODY_SYNC_GTM_LOADING__ = false;
        startTrigger();
    };
    document.head.appendChild(s);
}

function Trigger_infFITS() {
    var a, _, v, s, g, c, o, e, y = "G-H9V8PTN2X4",
        i = !1;

    // 身材同步：請先載入 inffits-body-sync-gtm.js（或由 Condition_Loaded 動態載入）
    var BodySync = window.InfFITSBodySync;
    if (BodySync) BodySync.init();
    function pushBodyToIframe() {
        if (BodySync) BodySync.pushToIframe();
    }
    function bodySyncHashSuffix() {
        return BodySync ? BodySync.hashSuffix() : "";
    }

    function b(e) {
        if (e) try {
            var t = new URL(e);
            return -1 !== ["inffits.com", "www.inffits.com", "brashop.modemarie.tw", "brashop.modemarie.com.tw", "liff-personal.vercel.app"].indexOf(t.hostname)
        } catch (e) {
            return
        }
    }

    function A() {
        dataLayer.push(arguments)
    }

    function r() {
        document.querySelectorAll(".sku-ul").forEach(function(e, t) {
            if (e.previousSibling.previousSibling.innerText.includes("尺寸") && 0 < e.children.length)
                for (var i = e.children.length, n = 0; n < i; n++) e.children[n].querySelector(".sku-link").innerText.replaceAll(" ", "").split("(")[0] == a.replaceAll(" ", "") && e.children[n].querySelector(".sku-link").click()
        })
    }

    function h(e) {
        var t;
        if (null !== document.querySelector(".salepage-price") && (t = document.querySelector(".salepage-price").innerText), null !== document.querySelector(".sku-ul"))
            for (var i, n = document.querySelector(".sku-ul").children.length, a = 0; a < n; a++) document.querySelector(".sku-ul").children[a].querySelector(".sku-link").classList.contains("cms-primaryBtnTextColor") && (i = document.querySelector(".sku-ul").children[a].querySelector(".sku-link").innerText);
        var o = document.querySelector(".salepage-title").innerText,
            r = [],
            d = document.location.href.split("/SalePage/Index/")[1];
        return e && document.getElementById("inffits_ctryon_window").contentWindow.postMessage({
            MsgHeader: "AddToCart_click",
            Size: i,
            Color: o,
            Price: t,
            ProductID: d,
            OutofStock: r
        }, "*"), [t, i, o, r]
    }
    if (window.addEventListener("message", function(e) {
            var t;
            b(e.origin) && "https://inffits.com" === e.origin && "GA4Event" === e.data.header && (t = y, "GA4Event" === (e = e).data.header && (A("event", e.data.event_action, {
                send_to: t,
                event_category: e.data.event_category,
                event_label: e.data.event_label,
                value: e.data.value
            }), "FindmySize" == e.data.event_action.slice(0, -1) && (A("set", "user_properties", {
                inffits_source_by_event: "inffits_used"
            }), jQuery(".inf_sf-container").css("justify-content", "space-between"), i ? A("event", "used_by_click_INF", {
                send_to: y,
                event_category: "GAinf_Size",
                event_label: "Track/Enter",
                value: 90
            }) : i = !0)))
        }), window.addEventListener("message", function(e) {
            b(e.origin) && ("POPUP_adjustment" == e.data.MsgHeader && (jQuery("#inffits_ctryon_window").css("box-shadow", "none"), jQuery("#inf_close").css("top", "16%"), jQuery("#inf_close").css("right", "-10px")), "POPUP_adjustment_LMD" == e.data.MsgHeader && (1 == e.data["data-type"] ? (jQuery("#inf_close").hide(), jQuery("#inf_close").css("top", "-5px"), setTimeout(function() {
                jQuery("#inf_close").fadeIn()
            }, 350)) : 0 == e.data["data-type"] && (jQuery("#inf_close").hide(), jQuery("#inf_close").css("top", "16%"), setTimeout(function() {
                jQuery("#inf_close").fadeIn()
            }, 350))), "SizeAI_Fast" == e.data.MsgHeader && null !== document.getElementById("inffits_ctryon_window") && (jQuery(".inf_sf-main").hide(), jQuery("#loader-section").hide(), "4_2" == e.data.DP_CODE && !document.querySelector(".salepage-title").innerText.includes("內衣") || "-1" == e.data.DP_CODE || "-1min" == e.data.DP_CODE || [e.data.Top_Per, e.data.Sec_Per].every(e => "不建議" === e) && !document.querySelector(".salepage-title").innerText.includes("內衣") ? jQuery(".inf_sf-main").hide() : (jQuery("#front_top_size").parent().fadeIn(), jQuery("#front_top_size").parent()[0].style.display = "flex", jQuery("#front_sec_size").parent().fadeIn(), jQuery("#front_sec_size").parent()[0].style.display = "flex", "4_2" == e.data.DP_CODE && document.querySelector(".salepage-title").innerText.includes("內衣") ? (jQuery("#front_top_per").hide(), jQuery("#front_sec_per").hide()) : (jQuery("#front_top_per").show(), jQuery("#front_sec_per").show()), jQuery("#front_top_per").html(e.data.Top_Per), jQuery("#front_sec_per").html(e.data.Sec_Per), jQuery("#front_top_size").text(e.data.Top_Size), jQuery("#front_sec_size").text(e.data.Sec_Size), a = e.data.Top_Size, r(), jQuery(".inf_sf-section-block")[0].click(), jQuery(".inf_sf-main").css("background", "#eee"), jQuery(".inf_sf-main").css("display", "flex")), window.innerWidth < 440 ? (jQuery(".logo-img").css("background-image", 'url("' + jQuery(".media-carousel-img")[0].src + '")'), document.getElementById("inffits_ctryon_window").contentWindow.postMessage({
                MsgHeader: "ImageUpdate",
                src: jQuery(".media-carousel-img")[0].src
            }, "*")) : (jQuery(".logo-img").css("background-image", 'url("' + jQuery(".small-image")[0].src + '")'), document.getElementById("inffits_ctryon_window").contentWindow.postMessage({
                MsgHeader: "ImageUpdate",
                src: jQuery(".small-image")[0].src
            }, "*")), 1 == e.data.sarr.length && (jQuery(".inf_sf-section-block")[1].style.display = "none"), e.data.Auto && (79488e5 < (new Date).getTime() - e.data.TID ? A("set", "user_properties", {
                inffits_source_by_event: "null"
            }) : A("set", "user_properties", {
                inffits_source_by_event: "inffits_used"
            }))), "SizeAI_Fast_pass" == e.data.MsgHeader && null !== document.getElementById("inffits_ctryon_window") && (window.innerWidth < 440 ? (jQuery(".logo-img").css("background-image", 'url("' + jQuery(".media-carousel-img")[0].src + '")'), document.getElementById("inffits_ctryon_window").contentWindow.postMessage({
                MsgHeader: "ImageUpdate",
                src: jQuery(".media-carousel-img")[0].src
            }, "*")) : (jQuery(".logo-img").css("background-image", 'url("' + jQuery(".small-image")[0].src + '")'), document.getElementById("inffits_ctryon_window").contentWindow.postMessage({
                MsgHeader: "ImageUpdate",
                src: jQuery(".small-image")[0].src
            }, "*")), jQuery("#loader-section").hide(), jQuery(".inf_sf-main").hide()), "SizeAI_fast_off" == e.data.MsgHeader && (s = !1))
        }), window.location.href.includes("Pay/Finish")) {
        function n(A) {
            function h(e) {
                for (var t = "", i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = i.length, a = 0; a < e; a++) t += i.charAt(Math.floor(Math.random() * n));
                return t
            }
            window.addEventListener("message", function(e) {
                if (b(e.origin))
                    if ("BODYID_MSG" == e.data.MsgHeader) {
                        bodyid_from_ls = e.data.BODYID;
                        try {
                            var t = window.nineyi.ServerData.payProcessData.TradesOrderGroup.TradesOrderList[0].TradesOrder_Code
                        } catch (e) {
                            t = "orderid_error"
                        }
                        try {
                            var i = window.nineyi.ServerData.payProcessData.TradesOrderGroup.TradesOrderList[0].TradesOrder_Code
                        } catch (e) {
                            i = "orderid_error"
                        }
                        try {
                            var n = A.actionField.id
                        } catch (e) {
                            n = "TGCode error"
                        }
                        try {
                            var a = window.nineyi.ServerData.payProcessData.TradesOrderGroup.TradesOrderList[0].TradesOrderSlaveList.map(e => e.TradesOrderSlave_Code)
                        } catch (e) {
                            a = "TSCode error"
                        }
                        var o = document.documentElement.innerHTML,
                            r = [];
                        try {
                            r = A.products.map(e => e.id)
                        } catch (e) {
                            r = "product_id_error"
                        }
                        var d = [];
                        try {
                            d = A.products.map(e => e.skuId)
                        } catch (e) {
                            d = "sku_id_error"
                        }
                        o.split('cart-promotion-lables">'), o.split("data-variation-id=").length;
                        var s = [];
                        try {
                            s = A.products.map(e => e.name)
                        } catch (e) {
                            s = "name error"
                        }
                        var c = [],
                            l = [],
                            u = [];
                        try {
                            c = A.products.map(e => e.skuName)
                        } catch (e) {
                            c = "dvitem_id_list error"
                        }
                        try {
                            l = A.products.map(e => e.price)
                        } catch (e) {
                            l = "priceitem_list error"
                        }
                        try {
                            u = A.products.map(e => e.quantity)
                        } catch (e) {
                            u = "dvitem_id_list error"
                        }
                        "undefined" == typeof bodyid_from_ls && (bodyid_from_ls = "nobodyid");
                        var p = "",
                            m = "",
                            f = "";
                        try {
                            var g = document.getElementById("cookie-matching-pixel-ad2iction_tw");
                            if (!g || (y = g.getAttribute("src").match(/uid=([^&]+)/)) && (p = y[1]), void 0 === (p = "" == p ? window.dataJson && window.dataJson.ecInfo && window.dataJson.ecInfo.memberID : p) && "undefined" != typeof dataLayer)
                                for (let e = 0; e < dataLayer.length; e++) {
                                    if ("91app.Pageview" == dataLayer[e].event) {
                                        view_item_memberid = dataLayer[e]["91app_PageView"].memberId, p = view_item_memberid;
                                        break
                                    }
                                    view_item_memberid = "not FOUND in dataLayer"
                                }
                        } catch (e) {
                            p = ""
                        }
                        for (let e = 0; e < dataLayer.length; e++)
                            if ("UserID" === dataLayer[e].event) {
                                p = dataLayer[e].userId;
                                break
                            }
                        gvid_exist = !1;
                        try {
                            gvid_exist = void 0 !== localStorage.GVID
                        } catch (e) {
                            gvid_exist = !1
                        }
                        gvid_exist ? m = localStorage.GVID : (m = h(20), localStorage.setItem("GVID", m)), lgvid_exist = !1;
                        try {
                            lgvid_exist = void 0 !== localStorage.LGVID
                        } catch (e) {
                            lgvid_exist = !1
                        }
                        lgvid_exist ? f = localStorage.LGVID : (f = h(20), localStorage.setItem("LGVID", f));
                        var e = r,
                            o = s,
                            g = c,
                            y = u,
                            u = l,
                            t = '{"PRODUCT_ID": "' + r.toString() + '","SKU_ID": "' + d.toString() + '","NAME": "' + s.toString() + '","TSCode": "' + a.toString() + '","TGCode": "' + n.toString() + '","Size": "' + c.toString() + '","PRICE": "' + l.toString() + '","COUNT": "' + y.toString() + '","PRODUCT_ID_QUERY": "' + e.toString() + '","NAME_QUERY": "' + o.toString() + '","Size_QUERY": "' + g.toString() + '","PRICE_QUERY": "' + u.toString() + '","COUNT_QUERY": "' + y.toString() + '","GVID":"' + m + '","LGVID":"' + f + '","MRID":"' + p + '","CLOTHLIST": "' + bodyid_from_ls.toString() + '","Brand": "MDMR","ORDERID_INNER": "' + i + '","ORDERID": "' + t + '"}';
                        infInvokeHTTP("TransactionRecordByID_Brand", t, function(e, t) {
                            e || (pullResults = JSON.parse(t.Payload));
                            try {
                                localStorage.removeItem("GVID")
                            } catch (e) {}
                        })
                    }
            }, !1);
            var e = document.createElement("script");
            e.type = "text/javascript", e.src = "https://sdk.amazonaws.com/js/aws-sdk-2.243.1.min.js", document.head.appendChild(e), e.addEventListener("load", function() {
                LINK_SRC = "https://inffits.com/";
                var e = document.createElement("div");
                e.innerHTML = '<div id="LS_include_div" style="position:absolute; top:0px; text-align:left; display:none; border:none; outline:none;  z-index:19; touch-action:none"><iframe id="inffits_LS_window" style=" width:100%; height:100%; display:none; position:relative; border:none; outline:none;  z-index:19" src="https://inffits.com/webDesign/HTML/DB/LS/LS_include_Size.html"></iframe></div>', document.body.appendChild(e)
            })
        }
        let t = setInterval(function() {
            if ("undefined" != typeof dataLayer)
                for (let e = 0; e < dataLayer.length; e++)
                    if ("gtm.gaEnhance.purchase" === dataLayer[e].event) {
                        clearInterval(t), n(dataLayer[e].ecommerce.purchase);
                        break
                    }
        }, 100)
    }

    function d() {
        var e = h(!1),
            t = e[0],
            i = e[1],
            n = e[2],
            a = e[3],
            o = document.location.href.split("/SalePage/Index/")[1],
            r = document.querySelector(".salepage-title").innerText,
            d = document.documentElement.querySelector(".qty-number").querySelector("input").value.toString(),
            s = "",
            c = "",
            e = "";
        try {
            var l, u = document.getElementById("cookie-matching-pixel-ad2iction_tw");
            if (!u || (l = u.getAttribute("src").match(/uid=([^&]+)/)) && (s = l[1]), void 0 === (s = "" == s ? window.dataJson && window.dataJson.ecInfo && window.dataJson.ecInfo.memberID : s) && "undefined" != typeof dataLayer)
                for (let e = 0; e < dataLayer.length; e++) {
                    if ("91app.Pageview" == dataLayer[e].event) {
                        view_item_memberid = dataLayer[e]["91app_PageView"].memberId, s = view_item_memberid;
                        break
                    }
                    view_item_memberid = "not FOUND in dataLayer"
                }
        } catch (e) {
            s = ""
        }
        gvid_exist = !1;
        try {
            gvid_exist = void 0 !== localStorage.GVID
        } catch (e) {
            gvid_exist = !1
        }
        gvid_exist ? c = localStorage.GVID : (c = _(20), localStorage.setItem("GVID", c)), lgvid_exist = !1;
        try {
            lgvid_exist = void 0 !== localStorage.LGVID
        } catch (e) {
            lgvid_exist = !1
        }
        lgvid_exist ? e = localStorage.LGVID : (e = _(20), localStorage.setItem("LGVID", e));
        e = '{"PRODUCT_ID": "' + o + '","NAME": "' + r + '","Size": "' + i + '","COLOR": "' + n + '","PRICE": "' + t + '","OutofStock": "' + a.toString() + '","COUNT": "' + d + '","GVID":"' + c + '","LGVID":"' + e + '","MRID":"' + s + '","Brand": "' + v + '"}';
        infInvokeHTTP("AddtoCartRecordByID", e, function(e, t) {
            e ? logging("error : addtocart record ") : pullResults = JSON.parse(t.Payload)
        })
    }

    function t() {
        var e = document.querySelectorAll(".add-to-cart-btn"),
            t = document.querySelectorAll(".immediately-buy-btn"),
            i = document.querySelectorAll(".btn-buy-now");
        0 < e.length && e.forEach(function(e) {
            e.addEventListener("click", function() {
                d()
            })
        }), 0 < t.length && t.forEach(function(e) {
            e.addEventListener("click", function() {
                d()
            })
        }), 0 < i.length && i.forEach(function(e) {
            e.addEventListener("click", function() {
                d()
            })
        })
    }
    window.location.href.includes("/apply_return") && (v = "MDMR", _ = function(e) {
        for (var t = "", i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = i.length, a = 0; a < e; a++) t += i.charAt(Math.floor(Math.random() * n));
        return t
    }, window.addEventListener("message", function(h) {
        if (b(h.origin)) {
            for (var e = 0; e < document.querySelectorAll(".return-item-checkbox").length; e++) document.querySelectorAll(".return-item-row > div > .select-cart-form")[e].addEventListener("change", t), document.querySelectorAll(".return-item-checkbox")[e].addEventListener("change", t);
            document.querySelector(".btn-success").addEventListener("click", t)
        }

        function t() {
            if ("BODYID_MSG" == h.data.MsgHeader) {
                bodyid_from_ls = h.data.BODYID;
                var e = document.querySelectorAll(".return-items-section > .section-header > p > a")[0].getAttribute("href").split("/").slice(-1)[0],
                    t = document.querySelectorAll(".return-items-section > .section-header > p > a")[0].innerText;
                document.documentElement.innerHTML;
                "undefined" == typeof bodyid_from_ls && (bodyid_from_ls = "nobodyid");
                var i = "",
                    n = "",
                    a = "";
                document.documentElement.innerHTML.includes('"currentUser\\":null') || (i = document.documentElement.innerHTML.split('href="/users/')[1].split('",')[0].split('/edit"')[0]), gvid_exist = !1;
                try {
                    gvid_exist = void 0 !== localStorage.GVID
                } catch (e) {
                    gvid_exist = !1
                }
                gvid_exist ? n = localStorage.GVID : (n = _(20), localStorage.setItem("GVID", n)), lgvid_exist = !1;
                try {
                    lgvid_exist = void 0 !== localStorage.LGVID
                } catch (e) {
                    lgvid_exist = !1
                }
                lgvid_exist ? a = localStorage.LGVID : (a = _(20), localStorage.setItem("LGVID", a));
                var o = document.querySelectorAll(".product-image"),
                    r = o.length,
                    d = [],
                    s = [],
                    c = [],
                    l = [],
                    u = [],
                    p = [],
                    m = [],
                    f = [];
                try {
                    for (var g, y = 0; y < r; y++) d.push(o[y].getAttribute("href").split("/").slice(-1)[0]), s.push(document.querySelectorAll(".item-information > .description > div")[y].innerText.trim()), obj = document.querySelectorAll(".return-item-row")[y].querySelectorAll("div"), g = document.querySelectorAll(".return-item-checkbox")[y].checked ? 1 : 0, l.push(obj[Object.keys(obj)[Object.keys(obj).length - 6 - g]].innerText.match(/[0-9]+/g)[0]), u.push(obj[Object.keys(obj)[Object.keys(obj).length - 5 - g]].innerText.match(/[0-9]+/g)[0]), 0 == document.querySelectorAll(".return-item-row")[y].querySelectorAll(".input-item_quantity ").length ? p.push(obj[Object.keys(obj)[Object.keys(obj).length - 3 - g]].innerText.match(/[0-9]+/g)[0]) : p.push(document.querySelectorAll(".return-item-row")[y].querySelectorAll(".input-item_quantity")[0].value), m.push(document.querySelectorAll(".return-item-row > div > .select-cart-form")[y].querySelectorAll("select")[0].value), f.push(document.querySelectorAll(".return-item-checkbox")[y].checked)
                } catch (e) {
                    d = "product_id_query error", s = "name_query error", l = "count_query error", u = "price_query error", p = "return_quantity_query error", m = "return_reason_query error", f = "return_if_query error"
                }
                try {
                    for (y = 0; y < r; y++) {
                        size_query_ptr = document.querySelectorAll(".item-information > .description")[y].querySelectorAll("span"), size_query_val = "";
                        for (var A = 0; A < size_query_ptr.length; A++) size_query_val += size_query_ptr[A].innerText + "_";
                        c.push(size_query_val)
                    }
                } catch (e) {
                    c = "size_query error"
                }
                e = '{"PRODUCT_ID_QUERY": "' + d.toString() + '","NAME_QUERY": "' + s.toString() + '","Size_QUERY": "' + c.toString() + '","PRICE_QUERY": "' + u.toString() + '","COUNT_QUERY": "' + l.toString() + '","RETURN_QUANTITY_QUERY": "' + p.toString() + '","RETURN_REASON_QUERY": "' + m.toString() + '","RETURN_IF_QUERY": "' + f.toString() + '","GVID":"' + n + '","LGVID":"' + a + '","MRID":"' + i + '","CLOTHLIST": "' + bodyid_from_ls.toString() + '","Brand": "' + v + '","ORDERID_INNER": "' + t + '","ORDERID": "' + e + '"}';
                infInvokeHTTP("ReturnRecordByID_Brand", e, function(e, t) {
                    e ? (e = "error" + e.errorMessage.toString().replace(/"|'/g, "").replace(/\n|\r/g, ""), infInvokeHTTP("Logging", '{"action": "' + e + '"}', function(e, t) {})) : pullResults = JSON.parse(t.Payload);
                    try {
                        localStorage.removeItem("GVID")
                    } catch (e) {}
                })
            }
        }
    }, !1), (e = document.createElement("script")).type = "text/javascript", e.src = "https://sdk.amazonaws.com/js/aws-sdk-2.243.1.min.js", document.head.appendChild(e), e.addEventListener("load", function() {
        LINK_SRC = "https://inffits.com/";
        var e = document.createElement("div");
        e.innerHTML = '<div id="LS_include_div" style="position:absolute; top:0px; text-align:left; display:none; border:none; outline:none;  z-index:19; touch-action:none"><iframe id="inffits_LS_window" style=" width:100%; height:100%; display:none; position:relative; border:none; outline:none;  z-index:19" src="https://inffits.com/webDesign/HTML/DB/LS/LS_include_Size.html"></iframe></div>', document.body.appendChild(e)
    })), window.location.href.toLowerCase().includes("/salepage/") && (v = "MDMR", "undefined" == typeof AWS ? ((e = document.createElement("script")).type = "text/javascript", e.src = "https://sdk.amazonaws.com/js/aws-sdk-2.243.1.min.js", document.head.appendChild(e), e.addEventListener("load", function() {
        t()
    })) : t()); {
        function _(e) {
            for (var t = "", i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = i.length, a = 0; a < e; a++) t += i.charAt(Math.floor(Math.random() * n));
            return t
        }
        window.location.href.toLowerCase().includes("/salepage/") && ((e = document.createElement("style")).innerText = `
        @media screen and (min-height:721px){
            .inffits_cblock{position:fixed;right:0;bottom:0;height: 720px; width: 480px !important; }
            .ctryon { margin: auto; height: 720px; width: 480px !important; left:0px;}
        }
        @media screen and (min-width: 441px) and (max-height:720px){
            .inffits_cblock {position:fixed;right:0;bottom:0;height: 700px; width: 440px !important; }
            .ctryon { margin: auto; height: 700px; width: 440px !important; left:0px;}
        }
        @media screen and (min-width: 441px) and (max-height:700px){
            .inffits_cblock { position:fixed;right:0;bottom:0;height: 640px; width: 400px !important; }
            .ctryon { margin: auto; height: 640px; width: 400px !important; left:0px;}
        }
        @media screen and (min-width: 401px) and (max-width: 440px){
            .inffits_cblock {position:fixed;right:0;bottom:0;height: 640px; width: 400px !important; }
            .ctryon { margin: auto; height: 640px; width: 400px !important; left:0px;}
        }
        @media screen and (min-width: 361px) and (max-width: 400px){
            .inffits_cblock {position:fixed;right:0;bottom:0;height: 600px; width: 360px !important; }
            .ctryon { margin: auto; height: 600px; width: 360px !important; left:0px;}
        }
        @media screen and (max-width: 360px){
            .inffits_cblock{position:fixed;right:0;bottom:0;height: 580px; width: 320px !important; }
            .ctryon { margin: auto; height: 580px; width: 320px !important; left:0px;}
        }
        #infFITS_size{font-family:"Microsoft JhengHei"} 
        .inffits_cblock{font-family:"Microsoft JhengHei"; animation:fadeInscale .8s}
        #infFITS_tryon_btn{font-family:"Microsoft JhengHei"; animation-delay:.1s;animation:fadeInscale .8s;transition:all .5s}
        #inf_close{position: absolute;z-index: 2;width: 30px;height: 30px;opacity: 0.75;cursor: pointer;border-radius: 50%;}
        #inf_close:active{background-color:rgba(0,0,0,0.1)}
        @keyframes fadeInscale{from{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}
        @keyframes fadeOutscale{from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(0)}}
        @keyframes fadeIn_wrapper {0% {opacity: 0;}100%{opacity: 1;}}
`, document.head.appendChild(e), window.addEventListener("message", function(e) {
            var t;
            if (b(e.origin) && ("IDRxReady" == e.data.MsgHeader && null !== document.getElementById("inffits_ctryon_window"))) {
                var i = "",
                    n = "",
                    a = "",
                    o = document.getElementById("inffits_ctryon_window").contentWindow;
                try {
                    var r, d = document.getElementById("cookie-matching-pixel-ad2iction_tw");
                    if (!d || (r = d.getAttribute("src").match(/uid=([^&]+)/)) && (i = r[1]), void 0 === (i = "" == i ? window.dataJson && window.dataJson.ecInfo && window.dataJson.ecInfo.memberID : i) && "undefined" != typeof dataLayer)
                        for (let e = 0; e < dataLayer.length; e++) {
                            if ("91app.Pageview" == dataLayer[e].event) {
                                view_item_memberid = dataLayer[e]["91app_PageView"].memberId, i = view_item_memberid;
                                break
                            }
                            view_item_memberid = "not FOUND in dataLayer"
                        }
                } catch (e) {
                    i = ""
                }
                gvid_exist = !1;
                try {
                    gvid_exist = void 0 !== localStorage.GVID
                } catch (e) {
                    gvid_exist = !1
                }
                gvid_exist ? n = localStorage.GVID : (n = _(20), localStorage.setItem("GVID", n)), lgvid_exist = !1;
                try {
                    lgvid_exist = void 0 !== localStorage.LGVID
                } catch (e) {
                    lgvid_exist = !1
                }
                lgvid_exist ? a = localStorage.LGVID : (a = _(20), localStorage.setItem("LGVID", a)), 9e3 == (new Date).getTime() % 10 ? (g = "B", document.getElementById("SizeAItag").style.display = "none", document.getElementById("infFITS_sizefast").style.display = "none", document.getElementById("infFITS_findSize").style.display = "none") : (g = "A", document.getElementById("SizeAItag").style.display = "block", document.getElementById("infFITS_sizefast").style.display = "block"), jQuery(".inf_sf-main").hide(), jQuery("#loader-section").css("display", "flex"), jQuery(".inf_sf-section-block").removeClass("active"), t = i, e = n, d = o, r = a, n = g, o = s, a = "undefined" != typeof ga ? ga.getAll()[0].get("clientId") : "notfoundgaid", d.postMessage({
                    MsgHeader: "IDRxGet",
                    MRID: t,
                    GVID: e,
                    LGVID: r,
                    ga_id: a,
                    TESTING: n,
                    SizeAIFast_switch: o
                }, "*"), document.getElementById("inffits_ctryon_window").contentWindow.postMessage({
                    MsgHeader: "RemoveWaistFlow"
                }, "*"), document.getElementById("inffits_ctryon_window").contentWindow.postMessage({
                    MsgHeader: "Display",
                    FitText: c.FitText,
                    SizeOpt: c.SizeOpt,
                    FontWeightBold: c.FontWeightBold
                }, "*")
            }
        }, !1), e = {
            Brand: "MDMR",
            url: decodeURI(document.location.href.split("?")[0]),
            CONFIG: "on",
            "91APP": "on",
            DB: "on",
            hostname: document.location.hostname
        }, jQuery.ajax({
            url: "https://api.inffits.com/httpgpi/model",
            method: "POST",
            dataType: "text",
            contentType: "application/json",
            data: JSON.stringify(e),
            async: !0,
            success: e => {
                var t = "null" !== e && JSON.parse(e).pOnline;
                "null" !== e && t && (o = JSON.parse(e).Gender_ClothID, i = JSON.parse(e), s = !0, c = i.Settings.Display, document.body.insertAdjacentHTML("beforeend", '<div class="" id="SizeAItag" style="position: fixed;right: 0px;top:calc(50vh - 62px);width: 15px;background: black;text-align: center;color: white;letter-spacing: .1rem;border-radius: 3px 0 0 3px;font-size: 12px;font-weight: 300;box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;font-family: Noto Sans TC, sans-serif; padding:10px;z-index: 1000000000;cursor:pointer;transition: 0.5s all;opacity:0.1;pointer-events: none;font-weight:400"><span style="font-family: inherit">AI<br>找<br>尺<br>寸</span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" class="eva eva-arrow-forward-outline" fill="#FFD6D6" style="position: relative;top: 8px;left:0px;color: white;transform: rotate(90deg);display:block ;background: white;border-radius: 100%;margin-bottom: 10px "><g data-name="Layer 2"><g data-name="arrow-forward"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"></rect><path d="M5 13h11.86l-3.63 4.36a1 1 0 0 0 1.54 1.28l5-6a1.19 1.19 0 0 0 .09-.15c0-.05.05-.08.07-.13A1 1 0 0 0 20 12a1 1 0 0 0-.07-.36c0-.05-.05-.08-.07-.13a1.19 1.19 0 0 0-.09-.15l-5-6A1 1 0 0 0 14 5a1 1 0 0 0-.64.23 1 1 0 0 0-.13 1.41L16.86 11H5a1 1 0 0 0 0 2z"></path></g></g></svg></div>'), "left" == i.Settings.SizeAITag.position ? (document.getElementById("SizeAItag").style.left = 0, document.getElementById("SizeAItag").style.right = "auto", document.getElementById("SizeAItag").style.borderRadius = "0px 3px 3px 0px") : "right" == i.Settings.SizeAITag.position && (document.getElementById("SizeAItag").style.right = 0, document.getElementById("SizeAItag").style.left = "auto", document.getElementById("SizeAItag").style.borderRadius = "3px 0px 0px 3px"), document.getElementById("SizeAItag").style.background = "#FFD6D6", document.getElementById("SizeAItag").style.color = "#5A5857", document.getElementById("SizeAItag").querySelector("span").innerHTML = i.Settings.SizeAITag.tagtext, i.Settings.SizeAITag.tagtextheight, document.getElementById("SizeAItag").style.lineHeight = "normal", 1 == i.Settings.SizeAITag.tagarrow ? document.getElementById("SizeAItag").querySelector("svg").style.display = "block" : document.getElementById("SizeAItag").querySelector("svg").style.display = "none", document.getElementById("SizeAItag").style.top = "calc(50vh - " + document.getElementById("SizeAItag").clientHeight / 2 + "px)", jQuery(function() {
                    function t() {
                        document.querySelector(".sku-wrapper") ? i = document.querySelector(".sku-wrapper") : document.querySelector(".product-sku") ? i = document.querySelector(".product-sku") : document.querySelector(".qty-wrapper") && (i = document.querySelector(".qty-wrapper")), null !== i && (i.insertAdjacentHTML("beforeend", '<div id="infFITS_sizefast" style="margin-top:120px;text-align:center;font-weight: 600;font-family: Noto Sans TC,sans-serif;cursor: pointer;display: block;position: relative;padding: 10px 0;letter-spacing: .1rem;margin-bottom:0px;opacity: 0;-webkit-animation: fadeIn_wrapper 1s 0.4s ease forwards; animation: fadeIn_wrapper 1s 0.4s ease forwards;"><div style="position: absolute;right: -6px;border: 0;opacity: 0.5;bottom:-24px"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPUAAABuCAQAAABVGZ1uAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflBB0KLijuiy0TAAAI9UlEQVR42u2ceXBVZxXAf/e9lxCWBBIiSYGyFCiUJRCmAu0MU6ColC50EKUKYqntjEq102m1lVFqRx3Brlpb7JSpQpGBhqWVgtiELRRwYysIRRgKgUgIWR6Q7WV5zz9yc+e++/a75L0w5/f+ufdbzz3nW8/3JSAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIKYySbAESIo088ulFK9VcxptscboWXcfUucxmDuPJJR0/dZxnDxs5jF9L4aY/aSZKrqNSe86jZ1BcE5cJhI1JDD8VNIUJz2IwwxhCPll0A3x4qaCMz7lIjb0K7BqmVriPpUzBbQivZDWvUqG+5VHEMNoSLNvDBzypNhg3K3mAVl3cfhbRCLh5iwd1MYnKX88CDgWFpTGRB5nOCLLxGNK3co0LHKKE/ZR3op6TjpsfUEMgwu9jblfT9edsxFTRfu/jUkvwsMUQV0oPVYZNpsru+NVxd9A33cl7VMfM1cJJfsXoLtIhbWAxdVEVUky+aur/mjLDBp2pNxvi9mqm3mjJ1Dd0pk5nCeUJ5L3AI3ao0WUhb3+mMZtCujtq6An8PMYsOZNnLX1H55LOUl6hfwI5BtjzdWYL8fAExWxnCyWsYZRjinHzJIMMYYGQVIuZ4pgEdvMdnqdbQjmOU2JHxR6T+R7iVXoBkMM8MvkGtY4oZiSzg96P8hfO0IupPECWGuangeEcMF1HfM3dWs/qyD0uoqHbaEPBHaaeD3U7BAuYM7WHR1RDt3MPE9lphzghTFbn4XaKeIaLAKxiHm/Qh/McoISDlIXNfYWymEsaN2fikuR/nA9Z3QdIY4BBhzXUhKmzXt1qPRYyRsFZ9nGUchpwkcUARlHA7fRWYyv5wB5VmjN1epABIE0TzG5G6dRWxjLV0NDKetpQOEi5bmdtpIilcfTGligldNDGMn4dEupnKJsMuniXl8No1U81MID7DOGNvMmbXDBMSn24gy8zhwLc7OY/9qjSnKmbOMdU3buXz+0RJ4Rs3fMZzgfFFcXM7eOGbZKEd2hkhPT061yJWMZoBhtC3uEnYXbrXg5ykJXcz6Osp8WeDzA3A/l5N2hrv44T9ogTVb7mhN0jzu9HQ/UXrc6hZAS9e1kbxS1TyR+Zww67RDW7LCtlEU9TQDpX2MTv7Wp5MejqroQ+hvd6qmPk8NpXuVlTwy4OcAtp1FDlkGJuPoxrgr4Ucq6zKjdvamhybIa+WakgEDQyZfAitewO4ylwALOmdtFTN0/5dKc2Gbp9Yyv1auq+5JGFizoquZrAcK/vB4FOmiac4zTXDIP4GDawkY0cjTmUW8asqQfwNv3U1uhmFW9pMY/zmLp8crOHZ+jODOZyJ/l0R8FHNcfYzDauRyz7VgrUp0DQirUfD9GCAiicjnM3nFp8xjHuMYTl8l2+xWn+xT/4lPPUdE4fj58RVOgc8vod52904R8xgSIaQhz4zWxjfMSyF9NCs/pr0+Xy60J/FiZf6HHHSwl+VeTjjkgM45Ihx7Ko6R+lJeKxhp8ajvAnljDJCT+F+blav/EJRHgeyZ8ZHSZvGrMZxCKOhC3ZHUEqRXfxwE08TOWXUVftCtv5xLQGzFDETBZElCabbCbwbbx8xk62coRm+6q2siyLzfAocWNZwfywnnP7BrDJTI6RoraTTV3Pc/Tk4Rip+jCFKXyfj1nJvjh8eXGRzMO/e5mbxNrbsUmNCVDOE6yI6zJRNvPZzC9CduMm6QxTN7KfP/AyazlrqPvrYWfCeGTqOufToVSxlIdZG9d5VQ5LeYMcO6p1dgAHOMNP2cF1QGEoL7JQF1fAYE6F5CjTOQPHMlB7vsphdXB3cdpxuZ3Ezz4OMpZZfImx5MZouAup5DnT99o0nDZ1FUsoVp8DnONHjOSLWmwOt4UxdTG7tRxvs1gLP8xXtZ11ot7wSCTP1drKUY7yO26jkEkUMpzciIvNx9nGLqsVOm3qTYYbFBVs1pnaeBjajl+37mwzhNvtREn2HraBE5zgPTK5lbHcxd2MDroJ0E4W32SP1XWFs6ZuZnuIMo/RTLr21iNGCUqUt9j8jXVRB0eFfzr6/fFzg5Oc5H36MJEFzNNu2HRwF1+IcjgaF86a+kYYL7kXn87Uzi6vjrPG0fLtx8su9lLM6+QFheeTb9XUzqraR2NIWGsnbnC65jq9jfW8YwjrRmZqKyOQ9Lkw9RjOLXGkOmTbwlMj1dp98GzsDtpRtt0EDSeD5WxmTsy780MMq/EG65cUnN9Xx0tP7mA6OSznmhY2kom6FNXW95ZJZxIz6c06illDacRLHWN0W8x2LnHZatWpYOpMxjOdGRSQQ4AMVlABKIzmpaBDzONdvle7WEhvoAdzmMVJdlLKSSpp0IbrDPK5l6cYZ8j5ifXz7FQw9XRWa35ehaeYxj5qGMw0huhS1VCabEEtM4b7teduFFLID6mkjHKqaEShNwMZwaAQV0otG6xXngqmPsxFnUtfYQITwqTawbFkC2qZ+SF/q5XOQJ3rNxJr+Lv1ylNhWXaJV/DFTPOanWe3SWEgXzOVr4QVdqzHU8HUsJ6VUefhOl7g38kW0jJ1Ua9ZRaKY71lfkkGqmNrHC/w2Ys++yrOsTraINuDlx8xjSwLm9vI6iwxHv6YxP1frc7oiPIcrXQn6fyUdqa/zPEd4mgJD4/Oxl+XaSVeiX5N4Q3bHeLdWZyvF7GMSc5nB8Bh760pKWEWpfa4Us6auYyt9tdPj47qYT/lQdX0qVKmXg/XUsEU75FB09z59rKGEWXyFMeTgwccVDvMRe+LuBU38lf66icCd8ELOz370p2kujsdQdT1bydXV6Yr5x3RNlFJKHuOYTCHD6Ecm3fCgqBcl67jCKQ6wm1P2nuOZP6/Vt/eAzq/tCiozVFFKULv3h8zRHrLJxkMTtXgT3Ekb+2AgYX+7y6CR2CUY6/QnILOHLHLpSzY9SaONRrxUUUmt/W5RQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQUhx/g97pR3z75t9qgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNC0yOVQxMDo0NjowNCswMDowMC8cV2kAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDQtMjlUMTA6NDY6MDQrMDA6MDBeQe/VAAAAAElFTkSuQmCC" height="30px"></div><div id="infFITS_sizefast_wrapper"><div class="wrapper-flex"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.19 15.56" style="fill:none;stroke:#000000;stroke-width:2px;height: 10px;position:relative;right:3px;"><path d="m.71.71l7.07,7.07L.71,14.85"></path></svg></div><div class="inf_sf-container"><div class="inf_sf-maintext"><div style="font-weight: bold;">AI</div><div>找尺寸</div></div><div class="inf_sf-main"><div class="inf_sf-section"><div class="inf_sf-section-block"><span id="front_top_size" class="front_size"></span>&nbsp;<span class="front_per active" id="front_top_per"></span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACBQAAAgUAWFwnqMAAAAHdElNRQfpBgQOLjND9MctAAADZ0lEQVRo3sWZPUwUQRTHf4AREwPCxSPYSAzFYUKDlQJ+RVpa/G6MFYSEXH+tyTXKFYZcbGiEjsJCkouJFIaYwMXEWABixATIwZ3RQgHNHWOxt3hwM7sz+8HN63Zm5/ffna8379VhVqLE6KGbGOeIcJqTwF9+84NNlvnEB5bJm3RYZ4C+zAC9XKCFBkWbEj/5yjxveG8mw610kWCRXYSm7ZIlQVcw8BhJ1rTRlbZGkpg/eCtxVj3BbVslTqtXfB8ZSr7wAkGJDL3m8EZG2PANt22dYRpN8BFS7AWGFwj2GCeii29nOlC4bdO06+FnQsELBDPuEiJMhYa3/oLjQDTyLFS8QJBymo7DAU89+XQcUeF7WQ8dLxBs0CfDt5I5FrxAkJHtjvEAdj1dKxE/io/53PNNbdU+purLAh7RqbtPBVI6eVzpi3R5PHCd7Q8fyfJLUfuNi/8FJELAFxiljQhDfFG0SNj4KNkQ8A8PPu8mn6VtskStBoMGzpae5XlwaMRvsCJptcugVZ0KGQ9wnSVJy5Q1AAsB4+9L5/0Auaq2C0Shn8Ix4KGOSclM6a+nh5bAVneBMV4q6gTfq5610HOCbuU1AwRvecUphrikgc8zxpSyto0rVc8a6IY55e/c5wVnAehk1vXnb3PPQVwTE+xL3pqDZSU+zZmDDjpcJGxz1wHfzHPFUbcCeWlFiYkKvCXhdeB4QR52pF8/QXNVRyoJW9zxiBfsQFHyeJ42aWfnJRL84AVFuYCnyg6PStjitg+8oCgfgkmHuEGlBL94wY58EuYYcOjYlpDzjRfkVctwiauOEmbJMeQbL1hWb0TOEjq45jBMunjBHKSVlc4S/H+9QJCGUek68C7BBF9k1O04NpVgghcU6Hd3SEwkmOHLDom7S6YrwRRfdsl0nFIdCeb4A6c0yqJrYzcJ5njBou2W611MnCR4wVdcTHSvZioJ3vBrh0O5Sa2XZBK84QXJw93oXs+PSvCKX62OIusGKColNHnESwIUJiGaJW6VV8+Ex6hKRh7A1g9SbZLmCe+kjra7KYJUUPMwHTQyHrqAlHPcPBJSoNq2afeYeY2D1ZaEmobrrYEYDzxhkdJPWFjTcTjAyPEGI2YpG6v0Bpa06jOHW6XGaTur1DRxaZcQU7c1T17rC7BlBJy+/wfqq7Fr7G6HRQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNS0wNi0wNFQxNDo0NjoyMSswMDowMArbUkoAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMTAtMDJUMjE6NTE6MjQrMDA6MDBEpyZsAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI1LTA2LTA0VDE0OjQ2OjUxKzAwOjAwJlbCMAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=" width="8px" height="8px" style="position: absolute;right: 2px;top: 2px;display: none;"></div></div><div class="inf_sf-section"><div class="inf_sf-section-block"><span class="front_size" id="front_sec_size"></span> &nbsp;<span class="front_per" id="front_sec_per"></span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACBQAAAgUAWFwnqMAAAAHdElNRQfpBgQOLjND9MctAAADZ0lEQVRo3sWZPUwUQRTHf4AREwPCxSPYSAzFYUKDlQJ+RVpa/G6MFYSEXH+tyTXKFYZcbGiEjsJCkouJFIaYwMXEWABixATIwZ3RQgHNHWOxt3hwM7sz+8HN63Zm5/ffna8379VhVqLE6KGbGOeIcJqTwF9+84NNlvnEB5bJm3RYZ4C+zAC9XKCFBkWbEj/5yjxveG8mw610kWCRXYSm7ZIlQVcw8BhJ1rTRlbZGkpg/eCtxVj3BbVslTqtXfB8ZSr7wAkGJDL3m8EZG2PANt22dYRpN8BFS7AWGFwj2GCeii29nOlC4bdO06+FnQsELBDPuEiJMhYa3/oLjQDTyLFS8QJBymo7DAU89+XQcUeF7WQ8dLxBs0CfDt5I5FrxAkJHtjvEAdj1dKxE/io/53PNNbdU+purLAh7RqbtPBVI6eVzpi3R5PHCd7Q8fyfJLUfuNi/8FJELAFxiljQhDfFG0SNj4KNkQ8A8PPu8mn6VtskStBoMGzpae5XlwaMRvsCJptcugVZ0KGQ9wnSVJy5Q1AAsB4+9L5/0Auaq2C0Shn8Ix4KGOSclM6a+nh5bAVneBMV4q6gTfq5610HOCbuU1AwRvecUphrikgc8zxpSyto0rVc8a6IY55e/c5wVnAehk1vXnb3PPQVwTE+xL3pqDZSU+zZmDDjpcJGxz1wHfzHPFUbcCeWlFiYkKvCXhdeB4QR52pF8/QXNVRyoJW9zxiBfsQFHyeJ42aWfnJRL84AVFuYCnyg6PStjitg+8oCgfgkmHuEGlBL94wY58EuYYcOjYlpDzjRfkVctwiauOEmbJMeQbL1hWb0TOEjq45jBMunjBHKSVlc4S/H+9QJCGUek68C7BBF9k1O04NpVgghcU6Hd3SEwkmOHLDom7S6YrwRRfdsl0nFIdCeb4A6c0yqJrYzcJ5njBou2W611MnCR4wVdcTHSvZioJ3vBrh0O5Sa2XZBK84QXJw93oXs+PSvCKX62OIusGKColNHnESwIUJiGaJW6VV8+Ex6hKRh7A1g9SbZLmCe+kjra7KYJUUPMwHTQyHrqAlHPcPBJSoNq2afeYeY2D1ZaEmobrrYEYDzxhkdJPWFjTcTjAyPEGI2YpG6v0Bpa06jOHW6XGaTur1DRxaZcQU7c1T17rC7BlBJy+/wfqq7Fr7G6HRQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNS0wNi0wNFQxNDo0NjoyMSswMDowMArbUkoAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMTAtMDJUMjE6NTE6MjQrMDA6MDBEpyZsAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI1LTA2LTA0VDE0OjQ2OjUxKzAwOjAwJlbCMAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=" width="8px" height="8px" style="position: absolute; right: 2px; top: 2px; display: none;"></div></div></div><div id="loader-section"><div id="loader"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAFxIAABcSAWef0lIAAAAHdElNRQfpBgwKLSwnbBkoAAAA5ElEQVQoz2XRPUoDURSG4Sc/2qUQxMYFSNSAYjOoCFqqWYQILiroGkylYDYQQxQUFyBEHCSSYoQUyuRaGOJc8p3iwvnee344xCo50ZHJpa7UzencUJjFg/3YbngT5J7cGghy19UIOLCKGxc+bWt69BwDS+Beip4elCNgAvJiqjJ9l51qOLSBkYp1H8ZFMJEVpg8yyZ9RnRUfK1uwiG8/xtN2M9UkEi1B0JJI1OIKX7o4Aq+6/z/jLSrzuao1W3a09a3YA6O4e9tE8K7jRS4Y2IyBXf3CekNn8xesu5TKZe4cK8XmL0olT2O8a5VXAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI1LTA2LTEyVDEwOjQ0OjU0KzAwOjAwQl1s+AAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNS0wNi0xMlQxMDo0NDo1NCswMDowMDMA1EQAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjUtMDYtMTJUMTA6NDU6NDQrMDA6MDBHfZ47AAAAAElFTkSuQmCC" height="15px"><div class="cssload-speeding-wheel"></div></div></div></div><div class="logo-img-container"><div class="logo-img"></div></div></div></div></div></div>'), window.innerWidth < 440 && (jQuery("#infFITS_sizefast").css("margin-top", "8px"), jQuery("#infFITS_sizefast").css("margin-bottom", "16px"))), null !== document.getElementById("inffits_cblock") && document.getElementById("inffits_cblock").remove(), (t = document.querySelector("body")).insertAdjacentHTML("beforebegin", '<div style="display:none;position: fixed;width: 100%;height: 100%;top: 0;left: 0;z-index: 1000000000000;background: rgba(0,0,0,0.5);transform:translate(100%)"><div id="infFITS_findSize" class="inffits_cblock" style="display:block;right:0;bottom:0;top:0;left:0 ;position:absolute; z-index:1;margin:auto"><div class="ctryon" style="position:absolute; width:100%; height:100%;top:0px; text-align:left; visibility:visible;  border:none; outline:none;  z-index:1; touch-action:none;"><iframe id="inffits_ctryon_window" style=" width:100%; height:100%; visibility:visible; position:relative; border:none;outline:none;  z-index:14;border-radius:10px;box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;" src="https://inffits.com/webDesign/HTML/js/iframe/indexwebiframe_CAX_tw_mdmr.html?' + o + bodySyncHashSuffix() + '"></iframe></div><div id="inf_close" style="position:absolute;top: -5px;z-index: 10000009;right: -10px;padding: 5px;height: 20px;width: 20px;border-radius: 50%;box-shadow: rgb(54 62 81 / 15%) 0px 0.0625rem 0.125rem 0.0625rem;background: white; opacity:1"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQflBB0KLijuiy0TAAABU0lEQVRo3sWZQZKCMBBFX825gtt4ZPEgbrQKV1wA9nHhFFUOxEmgO19XQtV/Tw2Q7gYI9ExM9HS0eHULLwAEbqTf953ojo/cF96NAP3yMZF4cnbFn3l+8HqYPw74KvzFJ+a1gJ/CGp+Y4bo66KOwhU9c4cSjgcI2/sEpf9JS4V+Cr0JRup9CcbKPQlWqvUJ1oq3CrjQ7hd1JNgqHUo4rHE44FmDyG+4PMVtFuaDvW5ZoeR3VK5ji6xXM8XUKLvhyBTd8mYIr/hsgFpx1VRiIRAZ/fF5hZGyDzys0w5cqOOJLFJzxb4Uhix8aFLdA3Fx4iXEP/qeFsfX3l/4F4kUovgzFNyLxrVj8MBI/jsUbEvGWTLwpFW/LxYWJuDQTF6fi8lzcoBC3aMRNKnGbTtyoFLdqxc1qcbtePLCQj2zkQyv52E4+uJSPbjv18BoCF8n4/kKAFws8B+VnA9YUAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA0LTI5VDEwOjQ2OjAzKzAwOjAw6rtp5wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNC0yOVQxMDo0NjowMyswMDowMJvm0VsAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC" style="position:absolute;top:0;bottom:0;right:0;left:0;width:10px;margin:auto;"></div></div></div>'), BodySync&&BodySync.bindIframeLoad(), document.getElementById("SizeAItag").addEventListener("click", function() {
                            pushBodyToIframe(), jQuery("#infFITS_findSize").parent().fadeIn(), document.getElementById("inffits_ctryon_window").contentWindow.postMessage({
                                MsgHeader: "FindinfFITS_SizeAItag"
                            }, "*")
                        }), document.getElementById("infFITS_sizefast").addEventListener("click", function() {
                            pushBodyToIframe();
                            var e = document.getElementById("inffits_ctryon_window").contentWindow;
                            e.postMessage({
                                MsgHeader: "FindinfFITS_toggle"
                            }, "*");
                            e.postMessage({
                                MsgHeader: "APPHeader",
                                CASE: "Scase"
                            }, "*"), jQuery("#infFITS_findSize").parent().fadeIn()
                        }), jQuery(".inf_sf-section-block").on("touchend click", function(e) {
                            e.stopPropagation(), e.preventDefault(), jQuery(".inf_sf-section-block").removeClass("active"), jQuery(this).addClass("active"), jQuery(".inf_sf-section-block").find("img").hide(), jQuery(this).find("img").show(), a = jQuery(".inf_sf-section-block.active").text().replace(/[^a-z0-9-]/gi, ""), r()
                        });
                        var e = null === window.ontouchstart ? "touchend" : "click";
                        document.getElementById("inf_close").addEventListener(e, function() {
                            jQuery("#infFITS_findSize").parent().fadeOut()
                        });
                        var t = document.querySelectorAll(".add-to-cart-btn"),
                            i = document.querySelectorAll(".immediately-buy-btn"),
                            e = document.querySelectorAll(".btn-buy-now");

                        function n() {
                            h(!0)
                        }
                        0 < t.length && t.forEach(function(e) {
                                e.addEventListener("click", function() {
                                    n()
                                })
                            }), 0 < i.length && i.forEach(function(e) {
                                e.addEventListener("click", function() {
                                    n()
                                })
                            }), 0 < e.length && e.forEach(function(e) {
                                e.addEventListener("click", function() {
                                    n()
                                })
                            }),
                            function(m) {
                                {
                                    function n() {
                                        var e = h(!1),
                                            t = e[0],
                                            i = e[1],
                                            n = e[2],
                                            a = e[3],
                                            o = document.location.href.split("/SalePage/Index/")[1],
                                            r = document.querySelector(".salepage-title").innerText,
                                            d = document.documentElement.querySelector(".qty-number").querySelector("input").value.toString(),
                                            s = "",
                                            c = "",
                                            e = "";
                                        try {
                                            var l, u = document.getElementById("cookie-matching-pixel-ad2iction_tw");
                                            if (!u || (l = u.getAttribute("src").match(/uid=([^&]+)/)) && (s = l[1]), void 0 === (s = "" == s ? window.dataJson && window.dataJson.ecInfo && window.dataJson.ecInfo.memberID : s) && "undefined" != typeof dataLayer)
                                                for (let e = 0; e < dataLayer.length; e++) {
                                                    if ("91app.Pageview" == dataLayer[e].event) {
                                                        view_item_memberid = dataLayer[e]["91app_PageView"].memberId, s = view_item_memberid;
                                                        break
                                                    }
                                                    view_item_memberid = "not FOUND in dataLayer"
                                                }
                                        } catch (e) {
                                            s = ""
                                        }
                                        gvid_exist = !1;
                                        try {
                                            gvid_exist = void 0 !== localStorage.GVID
                                        } catch (e) {
                                            gvid_exist = !1
                                        }
                                        gvid_exist ? c = localStorage.GVID : (c = _(20), localStorage.setItem("GVID", c)), lgvid_exist = !1;
                                        try {
                                            lgvid_exist = void 0 !== localStorage.LGVID
                                        } catch (e) {
                                            lgvid_exist = !1
                                        }
                                        lgvid_exist ? e = localStorage.LGVID : (e = _(20), localStorage.setItem("LGVID", e));
                                        e = '{"PRODUCT_ID": "' + o + '","NAME": "' + r + '","Size": "' + i + '","COLOR": "' + n + '","PRICE": "' + t + '","OutofStock": "' + a.toString() + '","COUNT": "' + d + '","GVID":"' + c + '","LGVID":"' + e + '","MRID":"' + s + '","Brand": "' + m + '"}';
                                        infInvokeHTTP("AddtoCartRecordByID", e, function(e, t) {
                                            e ? logging("error : addtocart record ") : pullResults = JSON.parse(t.Payload)
                                        })
                                    }

                                    function e() {
                                        var e = document.querySelectorAll(".add-to-cart-btn"),
                                            t = document.querySelectorAll(".immediately-buy-btn"),
                                            i = document.querySelectorAll(".btn-buy-now");
                                        0 < e.length && e.forEach(function(e) {
                                            e.addEventListener("click", function() {
                                                n()
                                            })
                                        }), 0 < t.length && t.forEach(function(e) {
                                            e.addEventListener("click", function() {
                                                n()
                                            })
                                        }), 0 < i.length && i.forEach(function(e) {
                                            e.addEventListener("click", function() {
                                                n()
                                            })
                                        })
                                    }

                                    function u(p) {
                                        setTimeout(function() {
                                            var e = h(!1),
                                                t = e[0],
                                                i = e[1],
                                                n = e[2],
                                                a = e[3],
                                                o = document.location.href.split("/SalePage/Index/")[1],
                                                r = document.querySelector(".salepage-title").innerText,
                                                d = document.documentElement.querySelector(".qty-number").querySelector("input").value.toString(),
                                                s = "",
                                                c = "",
                                                e = "";
                                            try {
                                                var l, u = document.getElementById("cookie-matching-pixel-ad2iction_tw");
                                                if (!u || (l = u.getAttribute("src").match(/uid=([^&]+)/)) && (s = l[1]), void 0 === (s = "" == s ? window.dataJson && window.dataJson.ecInfo && window.dataJson.ecInfo.memberID : s) && "undefined" != typeof dataLayer)
                                                    for (let e = 0; e < dataLayer.length; e++) {
                                                        if ("91app.Pageview" == dataLayer[e].event) {
                                                            view_item_memberid = dataLayer[e]["91app_PageView"].memberId, s = view_item_memberid;
                                                            break
                                                        }
                                                        view_item_memberid = "not FOUND in dataLayer"
                                                    }
                                            } catch (e) {
                                                s = ""
                                            }
                                            gvid_exist = !1;
                                            try {
                                                gvid_exist = void 0 !== localStorage.GVID
                                            } catch (e) {
                                                gvid_exist = !1
                                            }
                                            gvid_exist ? c = localStorage.GVID : (c = _(20), localStorage.setItem("GVID", c)), lgvid_exist = !1;
                                            try {
                                                lgvid_exist = void 0 !== localStorage.LGVID
                                            } catch (e) {
                                                lgvid_exist = !1
                                            }
                                            lgvid_exist ? e = localStorage.LGVID : (e = _(20), localStorage.setItem("LGVID", e));
                                            e = '{"Link":"' + window.location.href + '","element":"' + p.split("_")[0] + '","TYPE": "' + p.split("_")[1] + "_" + p.split("_")[2] + '","PRODUCT_ID": "' + o.split("?")[0].split("#")[0] + '","NAME": "' + r + '","Size": "' + i + '","COLOR": "' + n + '","PRICE": "' + t + '","OutofStock": "' + a.toString() + '","COUNT": "' + d + '","GVID":"' + c + '","LGVID":"' + e + '","MRID":"' + s + '","Brand": "' + m + '","Testing": "' + g + '"}';
                                            infInvokeHTTP("user_engagement_tracking", e, function(e, t) {
                                                e ? logging("error : addtocart record ") : pullResults = JSON.parse(t.Payload)
                                            })
                                        }, 1e3)
                                    }

                                    function t() {
                                        var e = document.querySelectorAll(".flex-space-between.sku-link");
                                        document.querySelectorAll(".sku-ul").forEach(e => {
                                            const t = e.previousElementSibling;
                                            if (t && t.classList.contains("sku-level-title")) {
                                                const i = t.textContent.trim();
                                                i.includes("尺寸") ? e.classList.add("sizebox") : i.includes("顏色") && e.classList.add("colorbox")
                                            }
                                        });
                                        var t = document.querySelectorAll(".colorbox .sku-li"),
                                            i = document.querySelectorAll(".sizebox .sku-li"),
                                            n = document.querySelectorAll(".add-to-cart-btn"),
                                            a = document.querySelectorAll(".large-image"),
                                            o = document.querySelectorAll(".media-carousel-img"),
                                            r = document.querySelectorAll(".ico-chevron-right"),
                                            d = document.querySelectorAll(".ico-chevron-left"),
                                            s = document.querySelectorAll(".qty-number"),
                                            c = document.querySelectorAll(".immediately-buy-btn"),
                                            l = document.querySelectorAll(".ico-heart");
                                        setTimeout(function() {
                                            0 < e.length && e.forEach(function(e) {
                                                e.addEventListener("click", function(e) {
                                                    if (!p) {
                                                        if (u("spec-button_purchase-attempt_sizechart"), "undefined" != typeof dataLayer)
                                                            for (let e = 0; e < dataLayer.length; e++) {
                                                                if ("91app.ProductDetail" == dataLayer[e].event) {
                                                                    f = dataLayer[e]["91app_productDetail"];
                                                                    break
                                                                }
                                                                f = "not FOUND in dataLayer"
                                                            }
                                                        "isTrusted" in e && e.isTrusted && (p = !0, A("event", "purchase_variant_attempt" + g, {
                                                            send_to: y,
                                                            event_category: "purchase_variant_attempt",
                                                            event_label: "spec-button_purchase_variant_attempt_sizechart",
                                                            items: f
                                                        }), A("event", "purchase-attempt" + g, {
                                                            send_to: y,
                                                            event_category: "purchase-attempt",
                                                            event_label: "spec-button_purchase-attempt_sizechart",
                                                            items: f
                                                        }))
                                                    }
                                                })
                                            }), 0 < i.length && i.forEach(function(e) {
                                                e.addEventListener("click", function(e) {
                                                    if (!p) {
                                                        if (u("item-btn_purchase-attempt_selectsize"), "undefined" != typeof dataLayer)
                                                            for (let e = 0; e < dataLayer.length; e++) {
                                                                if ("91app.ProductDetail" == dataLayer[e].event) {
                                                                    f = dataLayer[e]["91app_productDetail"];
                                                                    break
                                                                }
                                                                f = "not FOUND in dataLayer"
                                                            }
                                                        "isTrusted" in e && e.isTrusted && (p = !0, A("event", "purchase_variant_attempt" + g, {
                                                            send_to: y,
                                                            event_category: "purchase_variant_attempt",
                                                            event_label: "item-btn_purchase_variant_attempt_selectsize",
                                                            items: f
                                                        }), A("event", "purchase-attempt" + g, {
                                                            send_to: y,
                                                            event_category: "purchase-attempt",
                                                            event_label: "item-btn_purchase-attempt_selectsize",
                                                            items: f
                                                        }))
                                                    }
                                                })
                                            }), 0 < t.length && t.forEach(function(e) {
                                                e.addEventListener("click", function(e) {
                                                    if (!p) {
                                                        if (u("item-btn_purchase-attempt_selectcolor"), "undefined" != typeof dataLayer)
                                                            for (let e = 0; e < dataLayer.length; e++) {
                                                                if ("91app.ProductDetail" == dataLayer[e].event) {
                                                                    f = dataLayer[e]["91app_productDetail"];
                                                                    break
                                                                }
                                                                f = "not FOUND in dataLayer"
                                                            }
                                                        "isTrusted" in e && e.isTrusted && (p = !0, A("event", "purchase_variant_attempt" + g, {
                                                            send_to: y,
                                                            event_category: "purchase_variant_attempt",
                                                            event_label: "item-btn_purchase_variant_attempt_selectcolor",
                                                            items: f
                                                        }), A("event", "purchase-attempt" + g, {
                                                            send_to: y,
                                                            event_category: "purchase-attempt",
                                                            event_label: "item-btn_purchase-attempt_selectcolor",
                                                            items: f
                                                        }))
                                                    }
                                                })
                                            }), 0 < n.length && n.forEach(function(e) {
                                                e.addEventListener("click", function(e) {
                                                    if (!p) {
                                                        if (u("stoke-button_purchase-attempt_findstock"), "undefined" != typeof dataLayer)
                                                            for (let e = 0; e < dataLayer.length; e++) {
                                                                if ("91app.ProductDetail" == dataLayer[e].event) {
                                                                    f = dataLayer[e]["91app_productDetail"];
                                                                    break
                                                                }
                                                                f = "not FOUND in dataLayer"
                                                            }
                                                        "isTrusted" in e && e.isTrusted && (p = !0, A("event", "purchase_variant_attempt" + g, {
                                                            send_to: y,
                                                            event_category: "purchase_variant_attempt",
                                                            event_label: "stoke-button_purchase_variant_attempt_findstock",
                                                            items: f
                                                        }), A("event", "purchase-attempt" + g, {
                                                            send_to: y,
                                                            event_category: "purchase-attempt",
                                                            event_label: "stoke-button_purchase-attempt_findstock",
                                                            items: f
                                                        }))
                                                    }
                                                })
                                            }), 0 < a.length && a.forEach(function(e) {
                                                e.addEventListener("click", function(e) {
                                                    if (!p) {
                                                        if (u("img-btn_purchase-attempt_picbox-img"), "undefined" != typeof dataLayer)
                                                            for (let e = 0; e < dataLayer.length; e++) {
                                                                if ("91app.ProductDetail" == dataLayer[e].event) {
                                                                    f = dataLayer[e]["91app_productDetail"];
                                                                    break
                                                                }
                                                                f = "not FOUND in dataLayer"
                                                            }
                                                        "isTrusted" in e && e.isTrusted && (p = !0, A("event", "purchase-attempt" + g, {
                                                            send_to: y,
                                                            event_category: "purchase-attempt",
                                                            event_label: "img-btn_purchase-attempt_picbox-img",
                                                            items: f
                                                        }))
                                                    }
                                                })
                                            }), 0 < o.length && o.forEach(function(e) {
                                                e.addEventListener("touchend", function(e) {
                                                    if (!p) {
                                                        if (u("img-btn_purchase-attempt_picbox-img"), "undefined" != typeof dataLayer)
                                                            for (let e = 0; e < dataLayer.length; e++) {
                                                                if ("91app.ProductDetail" == dataLayer[e].event) {
                                                                    f = dataLayer[e]["91app_productDetail"];
                                                                    break
                                                                }
                                                                f = "not FOUND in dataLayer"
                                                            }
                                                        "isTrusted" in e && e.isTrusted && (p = !0, A("event", "purchase-attempt" + g, {
                                                            send_to: y,
                                                            event_category: "purchase-attempt",
                                                            event_label: "img-btn_purchase-attempt_picbox-img",
                                                            items: f
                                                        }))
                                                    }
                                                })
                                            }), 0 < r.length && r.forEach(function(e) {
                                                e.addEventListener("click", function(e) {
                                                    if (!p) {
                                                        if (u("img-btn_purchase-attempt_owl-next"), "undefined" != typeof dataLayer)
                                                            for (let e = 0; e < dataLayer.length; e++) {
                                                                if ("91app.ProductDetail" == dataLayer[e].event) {
                                                                    f = dataLayer[e]["91app_productDetail"];
                                                                    break
                                                                }
                                                                f = "not FOUND in dataLayer"
                                                            }
                                                        "isTrusted" in e && e.isTrusted && (p = !0, A("event", "purchase-attempt" + g, {
                                                            send_to: y,
                                                            event_category: "purchase-attempt",
                                                            event_label: "img-btn_purchase-attempt_imgnext",
                                                            items: f
                                                        }))
                                                    }
                                                })
                                            }), 0 < d.length && d.forEach(function(e) {
                                                e.addEventListener("click", function(e) {
                                                    if (!p) {
                                                        if (u("img-btn_purchase-attempt_owl-prev"), "undefined" != typeof dataLayer)
                                                            for (let e = 0; e < dataLayer.length; e++) {
                                                                if ("91app.ProductDetail" == dataLayer[e].event) {
                                                                    f = dataLayer[e]["91app_productDetail"];
                                                                    break
                                                                }
                                                                f = "not FOUND in dataLayer"
                                                            }
                                                        "isTrusted" in e && e.isTrusted && (p = !0, A("event", "purchase-attempt" + g, {
                                                            send_to: y,
                                                            event_category: "purchase-attempt",
                                                            event_label: "img-btn_purchase-attempt_img-prev",
                                                            items: f
                                                        }))
                                                    }
                                                })
                                            }), 0 < s.length && s.forEach(function(e) {
                                                e.addEventListener("click", function(e) {
                                                    if (!p) {
                                                        if (u("img-btn_purchase-attempt_count_wrapper"), "undefined" != typeof dataLayer)
                                                            for (let e = 0; e < dataLayer.length; e++) {
                                                                if ("91app.ProductDetail" == dataLayer[e].event) {
                                                                    f = dataLayer[e]["91app_productDetail"];
                                                                    break
                                                                }
                                                                f = "not FOUND in dataLayer"
                                                            }
                                                        "isTrusted" in e && e.isTrusted && (p = !0, A("event", "purchase_variant_attempt" + g, {
                                                            send_to: y,
                                                            event_category: "purchase_variant_attempt",
                                                            event_label: "img-btn_purchase_variant_attempt_count_wrapper",
                                                            items: f
                                                        }), A("event", "purchase-attempt" + g, {
                                                            send_to: y,
                                                            event_category: "purchase-attempt",
                                                            event_label: "img-btn_purchase-attempt_count_wrapper",
                                                            items: f
                                                        }))
                                                    }
                                                })
                                            }), 0 < c.length && c.forEach(function(e) {
                                                e.addEventListener("click", function(e) {
                                                    if (!p) {
                                                        if (u("img-btn_purchase-attempt_buy_btn"), "undefined" != typeof dataLayer)
                                                            for (let e = 0; e < dataLayer.length; e++) {
                                                                if ("91app.ProductDetail" == dataLayer[e].event) {
                                                                    f = dataLayer[e]["91app_productDetail"];
                                                                    break
                                                                }
                                                                f = "not FOUND in dataLayer"
                                                            }
                                                        "isTrusted" in e && e.isTrusted && (p = !0, A("event", "purchase_variant_attempt" + g, {
                                                            send_to: y,
                                                            event_category: "purchase_variant_attempt",
                                                            event_label: "img-btn_purchase_variant_attempt_buy_btn",
                                                            items: f
                                                        }), A("event", "purchase-attempt" + g, {
                                                            send_to: y,
                                                            event_category: "purchase-attempt",
                                                            event_label: "img-btn_purchase-attempt_buy_btn",
                                                            items: f
                                                        }))
                                                    }
                                                })
                                            }), 0 < l.length && l.forEach(function(e) {
                                                e.addEventListener("click", function(e) {
                                                    if (!p) {
                                                        if (u("img-btn_purchase-attempt_wishbutton"), "undefined" != typeof dataLayer)
                                                            for (let e = 0; e < dataLayer.length; e++) {
                                                                if ("91app.ProductDetail" == dataLayer[e].event) {
                                                                    f = dataLayer[e]["91app_productDetail"];
                                                                    break
                                                                }
                                                                f = "not FOUND in dataLayer"
                                                            }
                                                        "isTrusted" in e && e.isTrusted && (p = !0, A("event", "purchase_variant_attempt" + g, {
                                                            send_to: y,
                                                            event_category: "purchase_variant_attempt",
                                                            event_label: "img-btn_purchase_variant_attempt_wishbutton",
                                                            items: f
                                                        }), A("event", "purchase-attempt" + g, {
                                                            send_to: y,
                                                            event_category: "purchase-attempt",
                                                            event_label: "img-btn_purchase-attempt_wishbutton",
                                                            items: f
                                                        }))
                                                    }
                                                })
                                            })
                                        }, 1e3)
                                    }
                                    var p, f, i;
                                    window.location.href.toLowerCase().includes("/salepage/") && (p = !1, "undefined" == typeof AWS ? ((i = document.createElement("script")).type = "text/javascript", i.src = "https://sdk.amazonaws.com/js/aws-sdk-2.243.1.min.js", i.async = !0, i.onload = function() {
                                        e(), t()
                                    }, i.onerror = function() {
                                        console.error("AWS SDK 加載失敗")
                                    }, document.head.appendChild(i)) : (e(), t()))
                                }
                            }(v)
                    }! function e() {
                        null === document.querySelector(".salepage-container") || 440 < window.innerWidth && null === document.querySelector(".sku-wrapper") ? setTimeout(e, 500) : t()
                    }()
                }), window.addEventListener("message", function(e) {
                    if (b(e.origin))
                        if ("INFready" == e.data.MsgHeader) setTimeout(function() {}, 500);
                        else if ("inf_exit_close" == e.data.MsgHeader) document.getElementById("inf_close").style.display = "none";
                    else if ("inf_exit_open" == e.data.MsgHeader) document.getElementById("inf_close").style.display = "block";
                    else if ("AddtoCart" == e.data.MsgHeader) {
                        a = e.data.Size, r(), jQuery("#infFITS_findSize").parent().hide();
                        for (var t = 0; t < jQuery(".inf_sf-section-block").length; t++) a == document.querySelectorAll(".inf_sf-section-block")[t].querySelector("span").innerText && document.querySelectorAll(".inf_sf-section-block")[t].click();
                        document.querySelectorAll(".inf_sf-section-block")[0].querySelector("span").innerText == document.querySelectorAll(".inf_sf-section-block")[1].querySelector("span").innerText && document.querySelectorAll(".inf_sf-section-block")[0].click()
                    } else "POPUP_adjustment_Finish" != e.data.MsgHeader && "ToggleReady" != e.data.MsgHeader || (document.getElementById("SizeAItag").style.pointerEvents = "auto", document.getElementById("SizeAItag").style.opacity = 1, document.getElementById("infFITS_findSize").parentNode.style.transform = "none", null !== document.getElementById("inffits_cblock") && document.getElementById("inffits_cblock").remove(), "A" == g ? (document.getElementById("SizeAItag").style.display = "block", document.getElementById("infFITS_sizefast").style.display = "block") : "B" == g && (document.getElementById("SizeAItag").style.display = "none", document.getElementById("infFITS_sizefast").style.display = "none"))
                }, !1));
                var i = document.createElement("style");
                i.innerText = `

                    #infFITS_sizefast_wrapper{
                        background: rgb(255, 255, 255);color: black;margin: auto;border-radius: 50px;display: inline-block;width: 100%;padding: 6px;position: relative;font-family: "Noto Sans TC",sans-serif;text-align: left;box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;letter-spacing: 0.05rem; margin-top:0px;width:97%;
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
                        display: flex;font-weight: initial;font-size: 12px;width: 80%;color: gray;justify-content: space-between;align-items: center;
                    }
                    .inf_sf-maintext{
                        color: #333;font-size: 12px;white-space: nowrap;text-align: center;font-weight:400;overflow:inherit;text-align: left;line-height: 14px;transform:scale(0.9);
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

        `, document.head.appendChild(i)
            },
            error: e => {}
        }))
    }
}
void 0 === String.prototype.replaceAll && (String.prototype.replaceAll = function(e, t) {
    e = e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), e = new RegExp(e, "g");
    return this.replace(e, t)
}), Condition_Loaded();