function rebind_favor_btn() {
	$('.favor_btn[data-toggle="tooltip"]').data("tooltip", !1), $('.favor_btn[data-toggle="tooltip"]').tooltip()
}

function ctrl_view_fix_btm_aa() {
	if (is_enabled_aa_bar) {
		100 * $(window).scrollTop() / ($(document).height() - $(window).height()) > 30 && (is_init_aa_bar || ($(".bnextmeida-banner-pre.view_btm_fix_aa").removeClass("bnextmeida-banner-pre").addClass("bnextmeida-banner"), BNEXTMEDIA.parse(), is_init_aa_bar = !0), $(".view_btm_fix_aa").addClass("show"))
	}
}

function enable_aa_bar() {
	is_enabled_aa_bar = !0
}

function get_fb_count() {
	$(".fb_count").each(function() {
		var e = $(this).data("url").replace("t.bnext.com.tw", "www.bnext.com.tw"),
			t = $(this);
		void 0 !== e && e.length > 0 && FB.api("/", "GET", {
			id: e,
			fields: ["share"]
		}, function(e) {
			if (void 0 !== e.share.share_count) {
				var a = e.share.share_count;
				t.html(a)
			}
		})
	})
}

function defer2show_sty01() {
	$(".defer2show_sty01").each(function() {
		var e = $(this).html(),
			t = e.replace("\x3c!--bnext_comment", "").replace("bnext_comment--\x3e", "");
		$(this).html(t)
	})
}

function show_full_screen_ad(e) {}

function click_full_screan_ad(e, t) {
	close_full_screen_ad(e), ga_full_screan_ad(t, "click")
}

function is_mobile() {
	var e = !1;
	return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (e = !0), e
}

function ga_full_screan_ad(e, t) {
	var a = is_mobile(),
		n = "";
	if (1 == a) n = "��见蝱-mobile";
	else {
		if (0 != a) return;
		n = "��见蝱-web"
	}
	var i = "";
	if ("close" == t) i = "impressions";
	else {
		if ("click" != t) return;
		i = "clicks"
	}
	var e = e || "",
		o = {
			hitType: "event",
			eventCategory: n,
			eventAction: i,
			eventLabel: e,
			nonInteraction: 1
		};
	dataLayer.push({
		event: "sent_ga_event",
		ga_send_args: o
	})
}

function redirect_and_send_ga_event(e, t, a, n, i) {
	return i = i || !1, send_ga_event(t, a, n), i ? window.open(e) : window.location.href = e, !1
}

function send_ga_event(e, t, a) {
	var n = {
		hitType: "event",
		eventCategory: e,
		eventAction: t,
		eventLabel: a,
		nonInteraction: 1
	};
	dataLayer.push({
		event: "sent_ga_event",
		ga_send_args: n
	})
}

function send_ga_event_and_open_window(e, t, a, n, i, o) {
	return send_ga_event(e, t, a), window.open(n, i, o), !1
}

function close_full_screen_ad(e) {
	$(e).modal("hide")
}

function init_sticky_menu() {
	var e = !1,
		t = $(window).width(),
		a = sm_header_h;
	$("#topic_view_body").length > 0 && (a = sm_header_h_topic), t >= mobile_w && (e = !0), e && !is_sticky && "function" == typeof $(".sticky_elem").stick_in_parent ? ($(".sticky_elem").after('<div class="sticky-content-spacer"/>'), $(".sticky_elem").stick_in_parent({
		parent: ".sticky_elem_box",
		spacer: ".sticky-content-spacer",
		offset_top: a
	}), is_sticky = !0) : !e && is_sticky && ($(".sticky_elem").trigger("sticky_kit:detach"), is_sticky = !1)
}

function adj_topic_view_nav() {
	if (isTopicView) {
		var e = $(window).scrollTop(),
			t = e + $(window).height();
		$(".topic_article_block").offset().top <= (e + t) / 2 ? ($("#topic_prev_btn").show(), $("#topic_next_btn").show()) : ($("#topic_prev_btn").hide(), $("#topic_next_btn").hide())
	}
}

function adj_header() {
	var e = $(window).scrollTop(),
		t = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
	$("#progress_bar div").css("width", t + "%"), e > dist_h ? $("#nav_block").addClass("scrolled") : $("#nav_block.scrolled").removeClass("scrolled")
}

function load_more(e, t) {
	show_loading_mask(!0);
	var a = t || ".more_btn",
		n = $("meta[name='csrf-token']").attr("content"),
		i = $(a).attr("rel1"),
		o = $(a).attr("rel2"),
		s = $(a).data(),
		_ = "",
		r = $(a).attr("data-type");
	"" != r && void 0 !== r && (_ = r);
	var l = ".tg_list",
		c = $(a).attr("data-tg-block");
	"" != c && void 0 !== c && (l = c);
	var d = "page_" + o + "_" + _;
	last_block_sel = "#" + d, 0 == $(last_block_sel).length && $(l).append('<div id="' + d + '"></div>'), s = $.extend({
		ac: "get_page",
		offset: i,
		_token: n,
		get_page_num: o,
		page_sel: "#" + d,
		type: _,
		btn_sel: a
	}, s), ajax_xml_post(e, "", "", s)
}

function goto_last_block() {
	$("html,body").animate({
		scrollTop: $(last_block_sel).offset().top
	}, "slow")
}

function goto_top() {
	$("html,body").animate({
		scrollTop: 0
	}, "slow")
}

function goto_block(e) {
	var t = $("#nav_block").height();
	t < 0 && (t = 0), $("html,body").animate({
		scrollTop: $(e).offset().top - t
	}, "slow")
}

function disable_more_btn(e) {
	var t = ".more_btn";
	void 0 !== e && "" != e && (t = e), $(t).hide()
}

function ajax_set_next_page_info(e, t, a) {
	var n = ".more_btn";
	void 0 !== a && "" != a && (n = a), $(n).attr("rel1", e), $(n).attr("rel2", t)
}

function gsearch(e, t) {
	var a = $.trim($(e).val());
	"" !== a && (location.href = t + a)
}

function gsearch_input(e, t, a) {
	13 === e.keyCode && gsearch(t, a)
}

function show_loading_mask(e) {
	e ? $("body").addClass("waitMe_body") : $("body").removeClass("waitMe_body")
}

function magazine_change_year(e, t) {
	show_loading_mask(!0);
	var a = t.value,
		n = $("meta[name='csrf-token']").attr("content");
	ajax_xml_post(e, "", "", {
		ac: "get_page",
		offset: 0,
		_token: n,
		get_page_num: 1,
		page_sel: "",
		year: a,
		btn_sel: ".more_btn",
		type: "change_year"
	})
}

function isScrolledIntoView(e) {
	var t = $(window).scrollTop(),
		a = t + $(window).height(),
		n = $(e).offset().top,
		i = n + $(e).height(),
		o = !0,
		s = 0;
	return i < t || n > a ? o = !1 : i <= a && t <= n ? s = i - n : n <= t && a <= i ? s = a - t : i <= a ? s = i - t : t <= n && (s = a - n), {
		isShow: o,
		dist: s,
		is_up: t <= i,
		is_btm: n <= a
	}
}

function gsearch(e, t) {
	var a = $.trim($(e).val());
	"" !== a && (location.href = t + a)
}

function gsearch_input(e, t, a) {
	13 === e.keyCode && gsearch(t, a)
}

function close_all_modal() {
	$(".modal").modal("hide")
}

function init_article_inner_ad() {
	$(".htmlview .al-block.al-ads").each(function(e) {
		var t = '<div class="ad_box full inner ad-view-article-inner-table"><div id="ad-view-article-inner-table-' + e + '" class="ad_space visible-xs-block init" data-pos="ad-view-article-inner-table" ><div></div></div></div>';
		$(this).html(t)
	})
}

function init_ad_space(e) {
	e = e || ".init";
	for (var t = $(window).outerWidth(), a = 0; a < ad_lv.length; a++) {
		if (t >= ad_lv[a]) break
	}
	var n = ad_class[a];
	$(".ad_space." + n + e + ", .ad_space.visible-all-block" + e).each(function() {
		var e = $(this).data("pos"),
			t = $(this).attr("id");
		$(this).removeClass("init"), dataLayer.push({
			event: "AdsShow",
			ads_space_id: e,
			ads_space_sel: "#" + t + " div"
		})
	})
}

function getUrlParameter(e) {
	var t, a, n = decodeURIComponent(window.location.search.substring(1)),
		i = n.split("&");
	for (a = 0; a < i.length; a++)
		if (t = i[a].split("="), t[0] === e) return void 0 === t[1] || t[1]
}

function topic_view_scrollto_article(e, t) {
	var t = t || !1,
		e = e || 0;
	if (t) $("html, body").stop().animate({
		scrollTop: 200
	}, 500, "swing", function() {
		topic_view_scrollto_article(0, !0)
	});
	else {
		if (0 == e) {
			e = $(".topic_article_block").offset().top - 150 - 10
		}
		$("html, body").stop().animate({
			scrollTop: e
		}, 1e3, "swing", function() {})
	}
}

function init_outside_link() {
	var e = /(v2\.bnext\.com\.tw|www\.bnext\.com\.tw|127\.0\.0\.1|media\.bnext\.info)/i;
	$(".content.htmlview .main_content a").each(function(t, a) {
		var n = $(this).attr("href");
		void 0 !== n && (e.test(n) || $(this).attr("target", "blank"))
	})
}

function load_ajax_block() {
	$(".ajax-obj").each(function(e, t) {
		var a = $(this).data("ac"),
			n = $(this).data("sel"),
			i = $(this).data("site"),
			e = $("meta[name='csrf-token']").attr("content");
		arg = {
			ac: "article_recommendation",
			_token: e,
			sel: n
		}, url = i + "/api/" + a, ajax_xml_post(url, "", "", arg)
	})
}

function show_idle_ad() {
	if (is_idle_allow && !is_idle_ad_show) {
		is_idle_ad_show = !0, $(".delay_full_cover_ad").modal("show").on("shown.bs.modal", function(e) {
			init_ad_space(".init2")
		}).on("hidden.bs.modal", function(e) {
			is_idle_ad_show = !1, reset_idle_ad_timer()
		});
		var e = $(window).height() - 30;
		$(".delay_full_cover_ad .modal-dialog .modal-content").css("margin-top", (e - 590) / 2 + "px")
	}
}

function start_idle_ad_timer() {
	idle_ad_timer = setInterval(function() {
		show_idle_ad()
	}, 18e4)
}

function reset_idle_ad_timer() {
	clearInterval(idle_ad_timer), start_idle_ad_timer()
}

function mem_send_history(e, t) {
	arg = {
		item_id: e,
		_token: csrf
	}, ajax_xml_post(t, "", "", arg)
}

function mem_save_favor(e, t, a, n, i) {
	arg = {
		item_id: e,
		_token: csrf,
		class_id: a,
		placement: n
	}, ajax_xml_post(t, "", "", arg), send_ga_event("member", "click_�𤣰��𤩺�厰��", $(i).parents(".favor_article_block").data("pos"))
}

function mem_cancel_favor(e, t, a, n, i) {
	arg = {
		item_id: e,
		_token: csrf,
		class_id: a,
		placement: n
	}, ajax_xml_post(t, "", "", arg), send_ga_event("member", "click_��𡝗��𤣰��𤩺�厰��", $(i).parents(".favor_article_block").data("pos"))
}

function follow_cate(e, t) {
	arg = {
		item_id: e,
		_token: csrf
	}, ajax_xml_post(t, "", "", arg)
}

function unfollow_cate(e, t) {
	arg = {
		item_id: e,
		_token: csrf
	}, ajax_xml_post(t, "", "", arg)
}

function follow_cate_simple(e, t, a, n, i) {
	arg = {
		item_id: t,
		_token: csrf,
		class_id: n,
		category: i
	}, ajax_xml_post(a, "", "", arg);
	var o = $(e).parents(".category_subscription_block").data("menutype");
	void 0 !== o && void 0 !== i && send_ga_event("member", "click_��㰘��鰐", o + "_menu_閮��鰐_" + i)
}

function unfollow_cate_simple(e, t, a, n, i) {
	arg = {
		item_id: t,
		_token: csrf,
		class_id: n,
		category: i
	}, ajax_xml_post(a, "", "", arg);
	var o = $(e).parents(".category_subscription_block").data("menutype");
	void 0 !== o && void 0 !== i && send_ga_event("member", "click_��閮��鰐", o + "_menu_��𡝗����鰐_" + i)
}

function subscribe_cate(e, t, a, n) {
	show_loading_mask(!0), arg = {
		_token: $("meta[name='csrf-token']").attr("content"),
		ac: t,
		item_id: a,
		page_sel: n
	}, ajax_xml_post(e, "", "", arg)
}

function show_subscribe_mask(e) {
	$("body").append('<div id="subscribe-mask" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(256,256,256,.5); display: flex; justify-content: center; align-items: center;z-index: 70005;"><div style="display:none; padding: 8px 16px; border-radius: 6px; background: #fff; font-size: 18px; font-weight: 700; box-shadow: 0 0 15px rgba(0,0,0,.5); transition: transform 0.5s;">' + e + "</div></div>"), $("#subscribe-mask>div").fadeIn(300), setTimeout(function() {
		$("#subscribe-mask>div").css("transform", "translateY(-15px)").fadeOut(300, function() {
			$("#subscribe-mask").remove()
		})
	}, 1e3)
}

function form_next(e) {
	if (next = e.target.getAttribute("data-next"), current = e.target.getAttribute("data-current"), !next || !current || !(current = parseInt(current))) return !1;
	if (1 === current) {
		if (!($("[name='q1']:checked", $("#tab-pane-1")).length > 0)) return $(".i-invalid-feedback", $("#tab-pane-1")).fadeIn(100), !1;
		$(".i-invalid-feedback", $("#tab-pane-1")).fadeOut(100)
	} else if (2 === current) {
		if (ans = $("[name='q2']").val(), 0 == ans || !questions_cats.q2[ans]) return $(".i-invalid-feedback", $("#tab-pane-2")).fadeIn(100), !1;
		$(".i-invalid-feedback", $("#tab-pane-2")).fadeOut(100)
	}
	if ("submit" === next) window.open($("#survey-form").attr("action"), "_self");
	else if (next = parseInt(next)) {
		if (4 === next) {
			show_loading_mask(!0), $(".i-form-footer", $("#survey-form")).addClass("justify-content-between"), $(".more_cats", $("#survey-form")).fadeIn(300), $(".btn-next").text("摰峕��");
			for (var t = {
					q1: [],
					q2: {
						value: $("[name='q2']").val(),
						text: question_options.q2[$("[name='q2']").val()]
					},
					q3: $("[name='subscribe']:checked", $("#tab-pane-3")).length > 0
				}, a = questions_cats.q1[$("[name='q1']:checked", $("#tab-pane-1")).val()], n = $("[name='q1']:checked", $("#tab-pane-1")), a = [], i = 0; i < n.length; i++) t.q1.push({
				value: n[i].value,
				text: question_options.q1[parseInt(n[i].value) - 1]
			}), a = a.concat(questions_cats.q1[n[i].value]);
			var o = questions_cats.q2[$("[name='q2']").val()];
			recommand_cats = a.concat(o), survey_subscribe_cate(null, "get_cats", null, "list_sty10_row", recommand_cats, t)
		}
		$("#tab-pane-" + current).fadeOut(300, function() {
			$("#tab-pane-" + next).fadeIn(300)
		}), e.target.setAttribute("data-current", next), e.target.setAttribute("data-next", $("#tab-pane-" + next).attr("data-next"))
	}
}
var small_screen_w = 1280,
	mobile_w = 992,
	num_menu_act = 0,
	set_h_count = 0,
	set_h_timer, isTopicView = !1,
	sm_header_h = 70,
	sm_header_h_topic = 160,
	idle_ad_timer, is_idle_ad_show = !1,
	is_idle_allow = !1;
$(document).ready(function() {
	is_home && show_full_screen_ad(".full_screen_ad_sty01"), $(".nav_menu .dropdown-menu a.dropdown-toggle").on("click", function(e) {
		var t = $(this),
			a = $(this).offsetParent(".dropdown-menu");
		return $(this).next().hasClass("show") || $(this).parents(".dropdown-menu").first().find(".show").removeClass("show"), $(this).next(".dropdown-menu").toggleClass("show"), $(this).parent("li").toggleClass("show"), $(this).parent("li").toggleClass("nav_nested_ddmenu"), a.parent().hasClass("nav_menu") || t.next().css({
			top: t[0].offsetTop,
			left: a.outerWidth() - 4
		}), !1
	}), $(".nav_menu .item_box .item_btn").on("click", function(e) {
		$(this).next(".dropdown-menu").find(".nav_nested_ddmenu.show").removeClass("nav_nested_ddmenu").removeClass("show"), $(this).next(".dropdown-menu").find(".dropdown-menu.show").removeClass("show")
	}), $("#topic_view_body").length > 0 && (isTopicView = !0), window.onscroll = function() {
		adj_header(), reset_idle_ad_timer(), ctrl_view_fix_btm_aa()
	}, adj_header(), $(".slider_sty02").on("slide.bs.carousel", function(e) {
		var t = ($(this).find(".active").index(), $(e.relatedTarget).index()),
			a = $(this).parent().find(".slider_nav_box");
		a.find(".item.active").removeClass("active"), a.find(".item").eq(t).addClass("active")
	}), init_article_inner_ad(), init_ad_space(), init_outside_link(), getUrlParameter("goto"), init_sticky_menu(), load_ajax_block(), "function" == typeof lazyload && lazyload(), $(window).width() >= 1e3 && ("undefined" != typeof is_ads && is_ads || (is_idle_allow = !0, start_idle_ad_timer())), jQuery('.favor_btn[data-toggle="tooltip"]').tooltip(), jQuery('.favor_btn[data-toggle="tooltip"]').on("shown.bs.tooltip", function() {
		send_ga_event("member", "click_�𤣰��䒠opup", "popup_showup")
	});
	var e = 0,
		t = !1;
	$(window).scroll(function(a) {
		if (!t) {
			t = !0;
			var n = $(this).scrollTop();
			n > e ? ($("body").removeClass("body_scroll_down"), $("body").addClass("body_scroll_up")) : ($("body").removeClass("body_scroll_up"), $("body").addClass("body_scroll_down")), n < 900 ? $("body").addClass("scrollLs900") : $("body").removeClass("scrollLs900"), Math.abs(n - e) > 10 && $(".favor_login_btn").length > 0 ? void 0 !== jQuery(".favor_login_btn").tooltip && jQuery(".favor_login_btn").tooltip("hide") : n - e > 0 && $(".fix_favor_block .favor_login_btn").length > 0 && void 0 !== jQuery(".fix_favor_block .favor_login_btn").tooltip && jQuery(".fix_favor_block .favor_login_btn").tooltip("hide"), e = n, t = !1
		}
	}), $(".mem_header_menu").on("shown.bs.dropdown", function() {
		send_ga_event("header", "click_header", "member_after_login")
	}), $("#mobile_menu_pop_box_v2").on("shown.bs.modal", function(e) {
		send_ga_event("header", "click_header", "menu")
	}), $("#search_pop_box").on("shown.bs.modal", function(e) {
		send_ga_event("header", "click_header", "search")
	})
});
var is_enabled_aa_bar = !1,
	is_init_aa_bar = !1,
	isMobile = !1;
$(window).resize(function() {
	init_ad_space(), init_sticky_menu()
});
var is_sticky = !1,
	dist_h = 50,
	last_block_sel = "",
	ad_lv = [1200, 992, 768, 0],
	ad_class = ["visible-lg-block", "visible-md-block", "visible-sm-block", "visible-xs-block"];