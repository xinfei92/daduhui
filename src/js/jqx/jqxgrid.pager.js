/*
 jQWidgets v4.5.0 (2017-Jan)
 Copyright (c) 2011-2017 jQWidgets.
 License: http://jqwidgets.com/license/
 */
!
    function (a) {
        a.extend(a.jqx._jqxGrid.prototype, {
            _initpager: function () {
                var b = this.that,
                    c = this.gridlocalization.pagergotopagestring,
                    d = (this.gridlocalization.pagerrangestring, this.gridlocalization.pagershowrowsstring),
                    e = (this.pagerheight - 20) / 2;
                if (this.pagerdiv = this.pagerdiv || a('<div style="line-height: 20px; float:right; height: 100%; position: relative;"></div>'), !this.pageable) return this.pagerdiv.remove(),
                    void this.vScrollBar.jqxScrollBar({
                        thumbSize: 0
                    });
                if (this.pagerrenderer) {
                    this.pagerdiv.children().remove();
                    var f = this.pagerrenderer();
                    null != f && this.pagerdiv.append(a(f)),
                        this.pager.append(this.pagerdiv)
                } else {
                    //				if(this.pagerdiv.css("top", e), this.pager.append(this.pagerdiv), this.pagergotoinput = this.pagergotoinput || a('<div style="margin-right: 12px; width: 27px; height: 20px; float: right;"><input style="margin-top: 0px; text-align: right; height:20px; width: 27px;" type="text"/></div>'), this.pagergoto = this.pagergoto || a('<div style="float: right; margin-right: 7px;"></div>'), this.pagerrightbutton = this.pagerrightbutton || a('<div type="button" style="padding: 0px; margin-top: 0px; margin-right: 3px; height:20px; width: 27px; float: right;"></div>'), this.pagerleftbutton = this.pagerleftbutton || a('<div type="button" style="padding: 0px; margin-top: 0px; margin-right: 3px; height:20px; width: 27px; float: right;"></div>'), this.pagerdetails = this.pagerdetails || a('<div style="margin-right: 7px; float: right;"></div>'), this.pagershowrows = this.pagershowrows || a('<div style="margin-right: 7px; float: right;"></div>'), this.pagerbuttons = a('<div style="margin-right: 3px; float: right;"></div>'), this.pagershowrowscombo && this.pagershowrowscombo.jqxDropDownList && (this.pagershowrowscombo.remove(), this.pagershowrowscombo = null), this.pagergotoinput.attr("disabled", this.disabled), this.pagerfirstbutton = a('<div type="button" style="padding: 0px; margin-top: 0px; margin-left: 3px; margin-right: 3px; width: 27px; float: right;"></div>'), this.pagerlastbutton = a('<div type="button" style="padding: 0px; margin-top: 0px; margin-right: 3px; width: 27px; float: right;"></div>'), this.pagershowrowscombo = this.pagershowrowscombo || a('<div id="gridpagerlist" style="margin-top: 0px; margin-right: 7px; float: right;"></div>'), this.pagerdiv.children().remove(), this.pagershowrowscombo[0].id = "gridpagerlist" + this.element.id, this.removeHandler(this.pagerrightbutton, "mousedown"), this.removeHandler(this.pagerrightbutton, "mouseup"), this.removeHandler(this.pagerrightbutton, "click"), this.removeHandler(this.pagerleftbutton, "mousedown"), this.removeHandler(this.pagerleftbutton, "mouseup"), this.removeHandler(this.pagerleftbutton, "click"), this.removeHandler(this.pagerfirstbutton, "mousedown"), this.removeHandler(this.pagerfirstbutton, "mouseup"), this.removeHandler(this.pagerfirstbutton, "click"), this.removeHandler(this.pagerlastbutton, "mousedown"), this.removeHandler(this.pagerlastbutton, "mouseup"), this.removeHandler(this.pagerlastbutton, "click"), this.pagerleftbutton.attr("title", this.gridlocalization.pagerpreviousbuttonstring), this.pagerrightbutton.attr("title", this.gridlocalization.pagernextbuttonstring), "simple" == this.pagermode) {
                    if (this.pagerdiv.css("top", e), this.pager.append(this.pagerdiv), this.pagergotoinput = this.pagergotoinput || a('<div style="margin-right: 12px; width: 27px; height: 20px; float: right;"><input style="margin-top: 0px; text-align: right; height:20px; width: 27px;" type="text"/></div>'), this.pagergoto = this.pagergoto || a('<div style="float: right; margin-right: 7px;"></div>'), this.pagerrightbutton = this.pagerrightbutton || a('<div type="button" style="padding: 0px; margin-top: 0px; margin-right: 3px; height:20px; width: 27px; float: right;"></div>'), this.pagerleftbutton = this.pagerleftbutton || a('<div type="button" style="padding: 0px; margin-top: 0px; margin-right: 3px; height:20px; width: 27px; float: right;"></div>'), this.pagerdetails = this.pagerdetails || a('<div style="margin-right: 7px; float: right;"></div>'), this.pagershowrows = this.pagershowrows || a('<div style="margin-right: 7px; float: right;"></div>'), this.pagerbuttons = a('<div style="margin-right: 3px; float: right;"></div>'), this.pagershowrowscombo && this.pagershowrowscombo.jqxDropDownList && (this.pagershowrowscombo.remove(), this.pagershowrowscombo = null), this.pagergotoinput.attr("disabled", this.disabled), this.pagerfirstbutton = a('<div type="button" style="padding: 0px; margin-top: 0px; margin-left: 3px; margin-right: 3px; width: 27px; float: right;"></div>'), this.pagerlastbutton = a('<div type="button" style="padding: 0px; margin-top: 0px; margin-right: 3px; width: 27px; float: right;"></div>'), this.pagershowrowscombo = this.pagershowrowscombo || a('<div id="gridpagerlist" style="margin-top: 0px; margin-right: 7px; float: right;"></div>'), this.pagerdiv.children().remove(), this.pagershowrowscombo[0].id = "gridpagerlist" + this.element.id, this.removeHandler(this.pagerrightbutton, "mousedown"), this.removeHandler(this.pagerrightbutton, "mouseup"), this.removeHandler(this.pagerrightbutton, "click"), this.removeHandler(this.pagerleftbutton, "mousedown"), this.removeHandler(this.pagerleftbutton, "mouseup"), this.removeHandler(this.pagerleftbutton, "click"), this.removeHandler(this.pagerfirstbutton, "mousedown"), this.removeHandler(this.pagerfirstbutton, "mouseup"), this.removeHandler(this.pagerfirstbutton, "click"), this.removeHandler(this.pagerlastbutton, "mousedown"), this.removeHandler(this.pagerlastbutton, "mouseup"), this.removeHandler(this.pagerlastbutton, "click"), this.pagerleftbutton.attr("title", ""), this.pagerrightbutton.attr("title", ""), "simple" == this.pagermode) {
                        a.jqx.browser.msie && a.jqx.browser.version < 8 && (this.pagerbuttons.css("overflow", "visible"), this.pagerbuttons.css("padding", "3px")),
                            //						this.pagerfirstbutton.attr("title", this.gridlocalization.pagerfirstbuttonstring),
                            //						this.pagerlastbutton.attr("title", this.gridlocalization.pagerlastbuttonstring);
                            this.pagerfirstbutton.attr("title", ""),
                            this.pagerlastbutton.attr("title", "");
                        var g = a("<div style='margin-left: 6px; width: 15px; height: 20px;'></div>");
                        g.addClass(this.toThemeProperty("jqx-icon-page-first")),
                            this.pagerfirstbutton.wrapInner(g);
                        var h = a("<div style='margin-left: 6px; width: 15px; height: 20px;'></div>");
                        h.addClass(this.toThemeProperty("jqx-icon-page-last")),
                            this.pagerlastbutton.wrapInner(h),
                            this.rtl ? (this.pagerdiv.append(this.pagerlastbutton), this.pagerdiv.append(this.pagerrightbutton), this.pagerdiv.append(this.pagerbuttons), this.pagerdiv.append(this.pagerleftbutton), this.pagerdiv.append(this.pagerfirstbutton)) : (this.pagerdiv.append(this.pagerfirstbutton), this.pagerdiv.append(this.pagerleftbutton), this.pagerdiv.append(this.pagerbuttons), this.pagerdiv.append(this.pagerrightbutton), this.pagerdiv.append(this.pagerlastbutton)),
                            this.pagerlastbutton.jqxButton({
                                cursor: "pointer",
                                disabled: this.disabled,
                                theme: this.theme
                            }),
                            this.pagerfirstbutton.jqxButton({
                                cursor: "pointer",
                                disabled: this.disabled,
                                theme: this.theme
                            });
                        var i = this.rtl ? "right" : "left";
                        this.pagerbuttons.css("float", i),
                            this.pagerlastbutton.css("float", i),
                            this.pagerfirstbutton.css("float", i),
                            this.pagerrightbutton.css("float", i),
                            this.pagerleftbutton.css("float", i),
                            this.pagerdetails.css("float", this.rtl ? "left" : "right"),
                            this.rtl ? (this.pagerdetails.css("margin-left", "7px"), this.pagerdetails.css("margin-right", "0px")) : (this.pagerdetails.css("margin-left", "0px"), this.pagerdetails.css("margin-right", "7px")),
                            this.pagergotoinput.hide(),
                            this.pagershowrowscombo.hide(),
                            this.pagergoto.hide(),
                            this.pagershowrows.hide()
                    } else this.pagergotoinput.show(),
                        this.pagershowrowscombo.show(),
                        this.pagergoto.show(),
                        this.pagershowrows.show(),
                    this.rtl || (this.pagerdiv.append(this.pagerrightbutton), this.pagerdiv.append(this.pagerleftbutton));
                    this.pagerrightbutton.jqxButton({
                        cursor: "pointer",
                        disabled: this.disabled,
                        theme: this.theme
                    }),
                        this.pagerleftbutton.jqxButton({
                            cursor: "pointer",
                            disabled: this.disabled,
                            theme: this.theme
                        }),
                        this.pagerleftbutton.find(".jqx-icon-page-left").remove(),
                        this.pagerrightbutton.find(".jqx-icon-page-right").remove();
                    var j = a("<div style='margin-left: 6px; width: 15px; height: 20px;'></div>");
                    j.addClass(this.toThemeProperty("jqx-icon-page-left")),
                        this.pagerleftbutton.wrapInner(j);
                    var k = a("<div style='margin-left: 6px; width: 15px; height: 20px;'></div>");
                    k.addClass(this.toThemeProperty("jqx-icon-page-right")),
                        this.pagerrightbutton.wrapInner(k),
                        this.pagerdiv.append(this.pagerdetails),
                    "simple" != this.pagermode && (this.rtl ? (this.pagerdiv.append(this.pagergoto), this.pagerdiv.append(this.pagergotoinput), this.pagerdiv.append(this.pagershowrows), this.pagerdiv.append(this.pagershowrowscombo), this.pagerdiv.append(this.pagerdetails), this.pagerdiv.append(this.pagerrightbutton), this.pagerdiv.append(this.pagerleftbutton)) : (this.pagerdiv.append(this.pagershowrowscombo), this.pagerdiv.append(this.pagershowrows), this.pagerdiv.append(this.pagergotoinput), this.pagerdiv.append(this.pagergoto)));
                    var l = this.pagesizeoptions;
                    if (!this.pagershowrowscombo.jqxDropDownList) throw new Error("jqxGrid: jqxdropdownlist.js is not loaded.");
                    this.pagershowrowscombo.jqxDropDownList({
                        rtl: this.rtl,
                        disabled: this.disabled,
                        source: l,
                        enableBrowserBoundsDetection: !0,
                        keyboardSelection: !1,
                        autoDropDownHeight: !0,
                        width: "auto",
                        height: 20,
                        theme: this.theme
                    });
                    for (var m = 0,
                             n = 0; n < l.length; n++) this.pagesize >= l[n] && (m = n);
                    this.pagershowrows[0].innerHTML = d,
                        this.pagergoto[0].innerHTML = c,
                        this.updatepagerdetails(),
                        this.pagershowrowscombo.jqxDropDownList({
                            selectedIndex: m
                        }),
                        this.pagerpageinput = this.pagergotoinput.find("input"),
                        this.pagerpageinput.addClass(this.toThemeProperty("jqx-input")),
                        this.pagerpageinput.addClass(this.toThemeProperty("jqx-widget-content")),
                    this.rtl && this.pagerpageinput.css("direction", "rtl");
                    var b = this.that;
                    this.removeHandler(this.pagershowrowscombo, "select"),
                        this.addHandler(this.pagershowrowscombo, "select",
                            function (a) {
                                if (a.args) {
                                    b.vScrollInstance && b.vScrollInstance.setPosition(0),
                                    null != b.editcell && b.endcelledit && b.endcelledit(b.editcell.row, b.editcell.column, !0, !1);
                                    var c = a.args.index,
                                        d = b.dataview.pagenum * b.dataview.pagesize,
                                        e = l[c],
                                        f = b.pagesize;
                                    b.pagesize = parseInt(e),
                                    isNaN(b.pagesize) && (b.pagesize = 10),
                                        e >= 100 ? b.pagershowrowscombo.jqxDropDownList({
                                            width: "auto"
                                        }) : b.pagershowrowscombo.jqxDropDownList({
                                            width: 44
                                        }),
                                        b.dataview.pagesize = b.pagesize;
                                    var g = Math.floor(d / b.dataview.pagesize);
                                    b.prerenderrequired = !0,
                                        b._requiresupdate = !0,
                                        b._raiseEvent(10, {
                                            pagenum: g,
                                            oldpagesize: f,
                                            pagesize: b.dataview.pagesize
                                        }),
                                        b.gotopage(g),
                                    b.autoheight && b._updatesizeonwindowresize && (b._updatesize(!0), setTimeout(function () {
                                            b._updatesize(!0)
                                        },
                                        500))
                                }
                            });
                    var o = this.pagergotoinput.find("input");
                    o.addClass(this.toThemeProperty("jqx-grid-pager-input")),
                        o.addClass(this.toThemeProperty("jqx-rc-all")),
                        this.removeHandler(o, "keydown"),
                        this.removeHandler(o, "change"),
                        this.addHandler(o, "keydown",
                            function (a) {
                                if (a.keyCode >= 65 && a.keyCode <= 90) return !1;
                                if ("13" == a.keyCode) {
                                    var c = o.val();
                                    return c = parseInt(c),
                                    isNaN(c) || b.gotopage(c - 1), !1
                                }
                            }),
                        this.addHandler(o, "change",
                            function () {
                                var a = o.val();
                                a = parseInt(a),
                                isNaN(a) || b.gotopage(a - 1)
                            }),
                        this.addHandler(this.pagerrightbutton, "mouseenter",
                            function () {
                                k.addClass(b.toThemeProperty("jqx-icon-page-right-hover"))
                            }),
                        this.addHandler(this.pagerleftbutton, "mouseenter",
                            function () {
                                j.addClass(b.toThemeProperty("jqx-icon-page-left-hover"))
                            }),
                        this.addHandler(this.pagerrightbutton, "mouseleave",
                            function () {
                                k.removeClass(b.toThemeProperty("jqx-icon-page-right-hover"))
                            }),
                        this.addHandler(this.pagerleftbutton, "mouseleave",
                            function () {
                                j.removeClass(b.toThemeProperty("jqx-icon-page-left-hover"))
                            }),
                        this.addHandler(this.pagerrightbutton, "mousedown",
                            function () {
                                k.addClass(b.toThemeProperty("jqx-icon-page-right-selected"))
                            }),
                        this.addHandler(this.pagerrightbutton, "mouseup",
                            function () {
                                k.removeClass(b.toThemeProperty("jqx-icon-page-right-selected"))
                            }),
                        this.addHandler(this.pagerleftbutton, "mousedown",
                            function () {
                                j.addClass(b.toThemeProperty("jqx-icon-page-left-selected"))
                            }),
                        this.addHandler(this.pagerleftbutton, "mouseup",
                            function () {
                                j.removeClass(b.toThemeProperty("jqx-icon-page-left-selected"))
                            }),
                        this.addHandler(a(document), "mouseup.pagerbuttons" + this.element.id,
                            function () {
                                k.removeClass(b.toThemeProperty("jqx-icon-page-right-selected")),
                                    j.removeClass(b.toThemeProperty("jqx-icon-page-left-selected"))
                            }),
                        this.addHandler(this.pagerrightbutton, "click",
                            function () {
                                b.pagerrightbutton.jqxButton("disabled") || (b.rtl ? b.gotoprevpage() : b.gotonextpage())
                            }),
                        this.addHandler(this.pagerleftbutton, "click",
                            function () {
                                b.pagerleftbutton.jqxButton("disabled") || (b.rtl ? b.gotonextpage() : b.gotoprevpage())
                            });
                    var p = this;
                    if ("simple" === this.pagermode) {
                        var q = this.pagerfirstbutton,
                            r = this.pagerlastbutton;
                        this.addHandler(r, "mouseenter",
                            function () {
                                h.addClass(p.toThemeProperty("jqx-icon-page-last-hover"))
                            }),
                            this.addHandler(q, "mouseenter",
                                function () {
                                    g.addClass(p.toThemeProperty("jqx-icon-page-first-hover"))
                                }),
                            this.addHandler(r, "mouseleave",
                                function () {
                                    h.removeClass(p.toThemeProperty("jqx-icon-page-last-hover"))
                                }),
                            this.addHandler(q, "mouseleave",
                                function () {
                                    g.removeClass(p.toThemeProperty("jqx-icon-page-first-hover"))
                                }),
                            this.addHandler(r, "mousedown",
                                function () {
                                    h.addClass(p.toThemeProperty("jqx-icon-page-last-selected"))
                                }),
                            this.addHandler(q, "mousedown",
                                function () {
                                    g.addClass(p.toThemeProperty("jqx-icon-page-first-selected"))
                                }),
                            this.addHandler(r, "mouseup",
                                function () {
                                    h.removeClass(p.toThemeProperty("jqx-icon-page-last-selected"))
                                }),
                            this.addHandler(q, "mouseup",
                                function () {
                                    g.removeClass(p.toThemeProperty("jqx-icon-page-first-selected"))
                                }),
                            this.addHandler(a(document), "mouseup.pagerbuttons" + name + this.element.id,
                                function () {
                                    k.removeClass(p.toThemeProperty("jqx-icon-page-right-selected")),
                                        j.removeClass(p.toThemeProperty("jqx-icon-page-left-selected")),
                                    h && (h.removeClass(p.toThemeProperty("jqx-icon-page-last-selected")), g.removeClass(p.toThemeProperty("jqx-icon-page-first-selected")))
                                }),
                            this.addHandler(q, "click",
                                function () {
                                    if (!q.jqxButton("disabled"))
                                        if (p.rtl) {
                                            var a = p.dataview.totalrecords,
                                                b = Math.ceil(a / p.pagesize);
                                            p.gotopage(b - 1)
                                        } else p.gotopage(0)
                                }),
                            this.addHandler(r, "click",
                                function () {
                                    if (!r.jqxButton("disabled"))
                                        if (p.rtl) p.gotopage(0);
                                        else {
                                            var a = p.dataview.totalrecords,
                                                b = Math.ceil(a / p.pagesize);
                                            p.gotopage(b - 1)
                                        }
                                })
                    }
                }
                this.vScrollBar.jqxScrollBar("refresh"),
                    this._arrange()
            },
            _updatepagertheme: function () {
                if (null != this.pagershowrowscombo) {
                    this.pagershowrowscombo.jqxDropDownList({
                        theme: this.theme
                    }),
                        this.pagerrightbutton.jqxButton({
                            theme: this.theme
                        }),
                        this.pagerleftbutton.jqxButton({
                            theme: this.theme
                        }),
                        this.pagerpageinput.removeClass();
                    var b = this.pagergotoinput.find("input");
                    b.removeClass(),
                        b.addClass(this.toThemeProperty("jqx-grid-pager-input")),
                        b.addClass(this.toThemeProperty("jqx-rc-all")),
                        this.pagerpageinput.addClass(this.toThemeProperty("jqx-input")),
                        this.pagerpageinput.addClass(this.toThemeProperty("jqx-widget-content")),
                        this.pagerleftbutton.find(".jqx-icon-page-left").remove(),
                        this.pagerrightbutton.find(".jqx-icon-page-right").remove();
                    var c = a("<div style='margin-left: 6px; width: 15px; height: 15px;'></div>");
                    c.addClass(this.toThemeProperty("jqx-icon-page-left")),
                        this.pagerleftbutton.wrapInner(c);
                    var d = a("<div style='margin-left: 6px; width: 15px; height: 15px;'></div>");
                    if (d.addClass(this.toThemeProperty("jqx-icon-page-right")), this.pagerrightbutton.wrapInner(d), "simple" == this.pagermode) {
                        a.jqx.browser.msie && a.jqx.browser.version < 8 && (this.pagerbuttons.css("overflow", "visible"), this.pagerbuttons.css("padding", "3px")),
                            //						this.pagerfirstbutton.attr("title", this.gridlocalization.pagerfirstbuttonstring),
                            //						this.pagerlastbutton.attr("title", this.gridlocalization.pagerlastbuttonstring);
                            this.pagerfirstbutton.attr("title", ""),
                            this.pagerlastbutton.attr("title", "");
                        var e = a("<div style='margin-left: 6px; width: 15px; height: 15px;'></div>");
                        e.addClass(this.toThemeProperty("jqx-icon-arrow-first")),
                            this.pagerfirstbutton.wrapInner(e);
                        var f = a("<div style='margin-left: 6px; width: 15px; height: 15px;'></div>");
                        f.addClass(this.toThemeProperty("jqx-icon-arrow-last")),
                            this.pagerlastbutton.wrapInner(f),
                            this.pagerdiv.append(this.pagerfirstbutton),
                            this.pagerdiv.append(this.pagerleftbutton),
                            this.pagerdiv.append(this.pagerbuttons),
                            this.pagerdiv.append(this.pagerrightbutton),
                            this.pagerdiv.append(this.pagerlastbutton),
                            this.pagerlastbutton.jqxButton({
                                cursor: "pointer",
                                disabled: this.disabled,
                                theme: this.theme
                            }),
                            this.pagerfirstbutton.jqxButton({
                                cursor: "pointer",
                                disabled: this.disabled,
                                theme: this.theme
                            }),
                            this.pagerbuttons.css("float", "left"),
                            this.pagerlastbutton.css("float", "left"),
                            this.pagerfirstbutton.css("float", "left"),
                            this.pagerrightbutton.css("float", "left"),
                            this.pagerleftbutton.css("float", "left"),
                            this.pagergotoinput.hide(),
                            this.pagershowrowscombo.hide(),
                            this.pagergoto.hide(),
                            this.pagershowrows.hide()
                    } else this.pagergotoinput.show(),
                        this.pagershowrowscombo.show(),
                        this.pagergoto.show(),
                        this.pagershowrows.show();
                    var g = function (a, b) {
                        a.removeHandler(b, "mouseenter"),
                            a.removeHandler(b, "mouseleave"),
                            a.removeHandler(b, "mousedown"),
                            a.removeHandler(b, "mouseup")
                    };
                    g(this, this.pagerrightbutton),
                        g(this, this.pagerleftbutton);
                    var h = this.that;
                    this.addHandler(this.pagerrightbutton, "mouseenter",
                        function () {
                            d.addClass(h.toThemeProperty("jqx-icon-page-right-hover"))
                        }),
                        this.addHandler(this.pagerleftbutton, "mouseenter",
                            function () {
                                c.addClass(h.toThemeProperty("jqx-icon-page-left-hover"))
                            }),
                        this.addHandler(this.pagerrightbutton, "mouseleave",
                            function () {
                                d.removeClass(h.toThemeProperty("jqx-icon-page-right-hover"))
                            }),
                        this.addHandler(this.pagerleftbutton, "mouseleave",
                            function () {
                                c.removeClass(h.toThemeProperty("jqx-icon-page-left-hover"))
                            }),
                        this.addHandler(this.pagerrightbutton, "mousedown",
                            function () {
                                d.addClass(h.toThemeProperty("jqx-icon-page-right-selected"))
                            }),
                        this.addHandler(this.pagerrightbutton, "mouseup",
                            function () {
                                d.removeClass(h.toThemeProperty("jqx-icon-page-right-selected"))
                            }),
                        this.addHandler(this.pagerleftbutton, "mousedown",
                            function () {
                                c.addClass(h.toThemeProperty("jqx-icon-page-left-selected"))
                            }),
                        this.addHandler(this.pagerleftbutton, "mouseup",
                            function () {
                                c.removeClass(h.toThemeProperty("jqx-icon-page-left-selected"))
                            })
                }
            },
            gotopage: function (a) {
                if (null != a && void 0 != a || (a = 0), a == -1 && (a = 0), !(a < 0)) {
                    var b = this.dataview.totalrecords;
                    this.summaryrows && (b += this.summaryrows.length);
                    var c = this.pagenum;
                    this._raiseEvent(25, {
                        oldpagenum: this.dataview.pagenum,
                        pagenum: a,
                        pagesize: this.dataview.pagesize
                    });
                    var d = Math.ceil(b / this.pagesize);
                    if (a >= d && (0 == this.dataview.totalrecords && (this.dataview.pagenum = 0, this.updatepagerdetails()), a > 0 && (a = d - 1), a < 0 && (a = 0)), (this.dataview.pagenum != a || this._requiresupdate) && this.pageable) {
                        if (this.source.pager && this.source.pager(a, this.dataview.pagesize, this.dataview.pagenum), this.dataview.pagenum = a, this.virtualmode) {
                            if (this.hiddens = new Array, this.expandedgroups = new Array, this.rendergridrows) {
                                var e = a * this.dataview.pagesize,
                                    f = e + this.dataview.pagesize;
                                if (null != e && null != f) return this.pagerrightbutton && (this.pagerrightbutton.jqxButton({
                                    disabled: !0
                                }), this.pagerleftbutton.jqxButton({
                                    disabled: !0
                                }), this.pagershowrowscombo.jqxDropDownList({
                                    disabled: !0
                                })),
                                this.pagerfirstbutton && (this.pagerfirstbutton.jqxButton({
                                    disabled: !0
                                }), this.pagerlastbutton.jqxButton({
                                    disabled: !0
                                })),
                                    this.updatebounddata("pagechanged"),
                                    this._raiseEvent(9, {
                                        pagenum: a,
                                        oldpagenum: c,
                                        pagesize: this.dataview.pagesize
                                    }),
                                    this.updatepagerdetails(),
                                    void(this.autosavestate && this.savestate && this.savestate())
                            }
                        } else this.dataview.updateview();
                        if (this._loadrows(), this._updatepageviews(), this.tableheight = null, this._updatecolumnwidths(), this._updatecellwidths(), this._renderrows(this.virtualsizeinfo), this.updatepagerdetails(), this.autoheight || this.autorowheight) {
                            var g = this.host.height() - this._gettableheight();
                            height = g + this._pageviews[0].height,
                            height != this.host.height() && (this._arrange(), this._updatepageviews(), this.autorowheight && this._renderrows(this.virtualsizeinfo))
                        }
                        null != this.editcell && this.endcelledit && this.endcelledit(this.editcell.row, this.editcell.column, !1, !1),
                            this.focus(),
                            this._raiseEvent(9, {
                                pagenum: a,
                                oldpagenum: c,
                                pagesize: this.dataview.pagesize
                            }),
                        this.autosavestate && this.savestate && this.savestate()
                    }
                }
            },
            gotoprevpage: function () {
                if (this.dataview.pagenum > 0) this.gotopage(this.dataview.pagenum - 1);
                else if ("simple" != this.pagermode) {
                    var a = this.dataview.totalrecords;
                    this.summaryrows && (a += this.summaryrows.length);
                    var b = Math.ceil(a / this.pagesize);
                    this.gotopage(b - 1)
                }
            },
            gotonextpage: function () {
                var a = this.dataview.totalrecords;
                this.summaryrows && (a += this.summaryrows.length);
                var b = Math.ceil(a / this.pagesize);
                this.dataview.pagenum < b - 1 ? this.gotopage(this.dataview.pagenum + 1) : "simple" != this.pagermode && this.gotopage(0)
            },
            updatepagerdetails: function () {
                if (null != this.pagerdetails && this.pagerdetails.length > 0) {
                    var b = this.dataview.pagenum * this.pagesize,
                        c = (this.dataview.pagenum + 1) * this.pagesize;
                    c >= this.dataview.totalrecords && (c = this.dataview.totalrecords);
                    var d = this.dataview.totalrecords;
                    this.summaryrows && (d += this.summaryrows.length, (this.dataview.pagenum + 1) * this.pagesize > this.dataview.totalrecords && (c = d)),
                        b++;
                    var e = Math.ceil(d / this.dataview.pagesize);
                    if (e >= 1 && e--, e++, "simple" !== this.pagermode) {
                        var f = this.pagergotoinput.find("input");
                        f.val(this.dataview.pagenum + 1)
                    } else {
                        var g = "",
                            h = this.pagerbuttonscount;
                        0 != h && h || (h = 5);
                        var i = 0;
                        for (this.rtl && (i = h - 1); this.rtl && i >= 0 || !this.rtl && i < h;) {
                            var j = 1 + i,
                                k = this.dataview.pagenum / h,
                                l = Math.floor(k);
                            j += l * h;
                            var m = this.toTP("jqx-grid-pager-number");
                            if (m += " " + this.toTP("jqx-rc-all"), j > e) break;
                            if (this.rtl || 0 == i && j > h && (g += "<a class='" + m + "' tabindex=-1 href='javascript:;' data-page='" + (-1 + j) + "'>...</a>"), this.dataview.pagenum === j - 1 && (m += " " + this.toTP("jqx-fill-state-pressed")), this.rtl) {
                                if (i === h - 1) {
                                    var m = this.toTP("jqx-grid-pager-number");
                                    m += " " + this.toTP("jqx-rc-all"),
                                    e >= 1 + j && (g += "<a class='" + m + "' tabindex=-1 href='javascript:;' data-page='" + (1 + j) + "'>...</a>")
                                }
                                this.dataview.pagenum === j - 1 && (m += " " + this.toTP("jqx-fill-state-pressed")),
                                    g += "<a class='" + m + "' tabindex=-1 href='javascript:;' data-page='" + j + "'>" + j + "</a>"
                            } else if (g += "<a class='" + m + "' tabindex=-1 href='javascript:;' data-page='" + j + "'>" + j + "</a>", i === h - 1) {
                                var m = this.toTP("jqx-grid-pager-number");
                                m += " " + this.toTP("jqx-rc-all"),
                                e >= 1 + j && (g += "<a class='" + m + "' tabindex=-1 href='javascript:;' data-page='" + (1 + j) + "'>...</a>")
                            }
                            if (this.rtl) {
                                var m = this.toTP("jqx-grid-pager-number");
                                m += " " + this.toTP("jqx-rc-all"),
                                0 == i && j > h && (g += "<a class='" + m + "' tabindex=-1 href='javascript:;' data-page='" + (-1 + j) + "'>...</a>")
                            }
                            this.rtl ? i-- : i++
                        }
                        var n = this.pagerbuttons.find("a");
                        this.removeHandler(n, "click"),
                            this.removeHandler(n, "mouseenter"),
                            this.removeHandler(n, "mouseleave"),
                            this.pagerbuttons[0].innerHTML = g;
                        var o = this,
                            p = function () {
                                o.addHandler(n, "click",
                                    function (b) {
                                        var c = a(b.target).attr("data-page");
                                        return o.gotopage(parseInt(c) - 1), !1
                                    }),
                                    o.addHandler(n, "mouseenter",
                                        function (b) {
                                            a(b.target).addClass(o.toTP("jqx-fill-state-hover"))
                                        }),
                                    o.addHandler(n, "mouseleave",
                                        function (b) {
                                            a(b.target).removeClass(o.toTP("jqx-fill-state-hover"))
                                        })
                            },
                            n = this.pagerbuttons.find("a");
                        p(n)
                    }
                    //				this.pagergotoinput.attr("title", "1 - " + e),
                    this.pagergotoinput.attr("title", ""),
                    0 == c && c < b && (b = 0),
                        //					this.rtl ? this.pagerdetails[0].innerHTML = d + this.gridlocalization.pagerrangestring + c + "-" + b : this.pagerdetails[0].innerHTML = b + "-" + c + this.gridlocalization.pagerrangestring + d,
                        //					this.rtl ? this.pagerdetails[0].innerHTML = "共" + d + "条",
                        this.pagerdetails[0].innerHTML = "共" + d + "条",
                    b > c && this.gotoprevpage()
                }
            },
            _updatepagedview: function (a, b, c) {
                var d = this.that;
                this.dataview.rows.length != this.dataview.pagesize && this.dataview.updateview();
                for (var e = this.dataview.rows.length,
                         f = 0; f < e; f++) {
                    var g = this.dataview.rows[f].visibleindex,
                        h = {
                            index: g,
                            height: this.heights[g],
                            hidden: this.hiddens[g],
                            details: this.details[g]
                        };
                    if (void 0 == this.heights[g] && (this.heights[g] = this.rowsheight, h.height = this.rowsheight), void 0 == this.hiddens[g] && (this.hiddens[g] = !1, h.hidden = !1), void 0 == this.details[g] && (this.details[g] = null), h.height != d.rowsheight && (b -= d.rowsheight, b += h.height), h.hidden) b -= h.height;
                    else {
                        c += h.height;
                        var i = 0;
                        this.rowdetails && h.details && h.details.rowdetails && !h.details.rowdetailshidden && (i = h.details.rowdetailsheight, c += i, b += i)
                    }
                }
                return this._pageviews[0] = {
                    top: 0,
                    height: c
                },
                    b
            }
        })
    }(jqxBaseFramework);