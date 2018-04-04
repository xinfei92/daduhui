/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function (a) {
    a.extend(a.jqx._jqxGrid.prototype, {
        getcolumnindex: function (a) {
            var b = this.getcolumn(a), c = this.columns.records.indexOf(b);
            return c
        }, setcolumnindex: function (b, c, d) {
            var e = this.getcolumn(b);
            if (!(e.pinned || e.hidden || e.checkboxcolumn || e.grouped)) {
                var f = this.columns.records.indexOf(e);
                this.columns.records.splice(f, 1), this.columns.records.splice(c, 0, e);
                var g = 0, h = this.headerZIndex;
                this.columnsrow.children().detach();
                var i = this.toThemeProperty("jqx-grid-cell");
                i += " " + this.toThemeProperty("jqx-grid-cell-pinned"), this.filterrow && (a(this.filterrow.children()[0]).children().detach(), this.filterrow[0].cells = []);
                var j = this, k = null;
                if (void 0 != j.filterrow) var k = a(j.filterrow.children()[0]);
                this.columnsrow[0].cells = [];
                var l = !1;
                if (a.each(this.columns.records, function (b, c) {
                        var d = this.uielement;
                        j.columnsrow.append(d), j.rtl ? d.css("z-index", h++) : d.css("z-index", h--);
                        var e = this.width;
                        if (d.css("left", g), j.columnsrow[0].cells[j.columnsrow[0].cells.length] = d[0], j.filterrow) {
                            var f = a('<div style="overflow: hidden; position: absolute; height: 100%;" class="' + i + '"></div>');
                            k.append(f), f.css("left", g), f.css("z-index", h + 1), f.width(this.width), f[0].left = g, f.append(this._filterwidget), j.filterrow[0].cells[j.filterrow[0].cells.length] = f[0]
                        }
                        this.hidden && (l = !0), this.hidden && this.hideable || (g += e)
                    }), this.groupable) {
                    var m = this.groups.length;
                    m > 0 && f - m >= 0 && (f -= m, c -= m)
                }
                this.rowdetails && f - 1 >= 0 && (f--, c--), "checkbox" == this.selectionmode && f - 1 >= 0 && (f--, c--);
                var e = this._columns[f];
                this._columns.splice(f, 1), this._columns.splice(c, 0, e), this._raiseEvent(24, {
                    columntext: e.text,
                    datafield: e.datafield,
                    oldindex: f,
                    newindex: c
                }), 0 != d && (l || "checkbox" == e.columntype ? (this.prerenderrequired = !0, this.rendergridcontent(!0, !1), this._updatecolumnwidths(), this._updatecellwidths()) : (this._updatecolumnwidths(), this._updatecellwidths()), this._updatefilterrowui && this.filterable && this.showfilterrow && this._updatefilterrowui(), this.showeverpresentrow && this._updateaddnewrowui(), this._rendercolumngroups(), this._renderrows(this.virtualsizeinfo))
            }
        }, _pinnedColumnsLength: function () {
            var b = 0;
            return a.each(this.columns.records, function () {
                this.pinned && b++, this.grouped && b++
            }), "checkbox" == this.selectionmode && b++, b
        }, _handlecolumnsreorder: function () {
            var b = this, c = -1, d = !1;
            if (b.columnsreorder) {
                var e = "mousemove.reorder" + this.element.id, f = "mousedown.reorder" + this.element.id,
                    g = "mouseup.reorder" + this.element.id, h = !1;
                this.isTouchDevice() && this.touchmode !== !0 && (h = !0, e = a.jqx.mobile.getTouchEventName("touchmove") + ".reorder" + this.element.id, f = a.jqx.mobile.getTouchEventName("touchstart") + ".reorder" + this.element.id, g = a.jqx.mobile.getTouchEventName("touchend") + ".reorder" + this.element.id), this.removeHandler(a(document), e), this.addHandler(a(document), e, function (a) {
                    if (b.resizing) return !0;
                    if (null != b.reordercolumn) {
                        var e = parseInt(a.pageX), f = parseInt(a.pageY);
                        if (h) {
                            var g = b.getTouches(a), i = g[0];
                            void 0 != i && (e = parseInt(i.pageX), f = parseInt(i.pageY))
                        }
                        var j = b.host.coord(), k = parseInt(j.left), l = parseInt(j.top);
                        void 0 != b.dragmousedownoffset && null != b.dragmousedownoffset || (b.dragmousedownoffset = {
                            left: 0,
                            top: 0
                        });
                        var m = parseInt(e) - parseInt(b.dragmousedownoffset.left),
                            n = parseInt(f) - parseInt(b.dragmousedownoffset.top);
                        if (b.reordercolumn.css({
                                left: m + "px",
                                top: n + "px"
                            }), d = !1, e >= k && e <= k + b.host.width() && f >= l && f <= l + b.host.height() && (d = !0), c = -1, d) {
                            b.reordercolumnicon.removeClass(b.toThemeProperty("jqx-grid-dragcancel-icon")), b.reordercolumnicon.addClass(b.toThemeProperty("jqx-grid-drag-icon"));
                            var o = b.columnsheader.coord(), p = o.top + b.columnsheader.height();
                            null != b.columnsdropline && (f >= o.top && f <= p ? c = b._handlereordercolumnsdroplines(e) : b.columnsdropline.fadeOut("slow"))
                        } else null != b.columnsdropline && b.columnsdropline.fadeOut("slow"), b.reordercolumnicon.removeClass(b.toThemeProperty("jqx-grid-drag-icon")), b.reordercolumnicon.addClass(b.toThemeProperty("jqx-grid-dragcancel-icon"));
                        if (h) return a.preventDefault(), a.stopPropagation(), !1
                    }
                }), this.columnsbounds = new Array, this.removeHandler(a(document), f), this.addHandler(a(document), f, function (c) {
                    if (b.resizing) return !0;
                    b.columnsbounds = new Array;
                    var d = b.host.coord().left, e = b.host.coord().top;
                    b.showtoolbar && (e += b.toolbarheight), b.groupable && b.showgroupsheader && (e += b.groupsheaderheight);
                    var f = 0;
                    a.each(b.columns.records, function (c) {
                        var g = this;
                        if (g.hidden) return b.columnsbounds[b.columnsbounds.length] = {
                            top: e,
                            column: g,
                            left: d,
                            width: 0,
                            height: 2 + b.rowsheight
                        }, !0;
                        0 == f && (d = b.rtl ? "hidden" != b.hScrollBar.css("visibility") ? parseInt(b.host.coord().left) - b.hScrollInstance.max + b.hScrollInstance.value : parseInt(b.host.coord().left) + b.hScrollInstance.value : parseInt(b.host.coord().left) - b.hScrollInstance.value), f++;
                        var h = 2 + b.columnsheight;
                        b.columnshierarchy && (e = a(g.uielement).coord().top, h = a(g.uielement).height()), b.columnsbounds[b.columnsbounds.length] = {
                            top: e,
                            column: g,
                            left: d,
                            width: g.width,
                            height: h
                        }, d += g.width
                    })
                }), this.removeHandler(a(document), g), this.addHandler(a(document), g, function (e) {
                    if (b.resizing) return !0;
                    b.__drag = !1, a(document.body).removeClass("jqx-disableselect");
                    var f = parseInt(e.pageX), g = parseInt(e.pageY);
                    if (h) {
                        var i = b.getTouches(e), j = i[0];
                        f = parseInt(j.pageX), g = parseInt(j.pageY)
                    }
                    var k = b.host.coord(), l = (parseInt(k.left), parseInt(k.top));
                    b.groupsheader.height();
                    if (b.showtoolbar && (l += b.toolbarheight), b.columndragstarted = !1, b.dragmousedown = null, null != b.reordercolumn) {
                        var m = a.data(b.reordercolumn[0], "reorderrecord"),
                            n = b.columns.records.indexOf(b.getcolumn(m));
                        b.reordercolumn.remove(), b.reordercolumn = null;
                        var o = 0;
                        if (o += b._pinnedColumnsLength(), null != m) {
                            if (d && c != -1) {
                                var p = c.index;
                                if (p >= o) {
                                    var q = b.columns.records[p];
                                    if (void 0 != q) {
                                        var r = b.columns.records.indexOf(b.getcolumn(q.datafield));
                                        if (null == q.datafield) var r = b.columns.records.indexOf(b.getcolumnbytext(q.text));
                                        if (b.columngroups) {
                                            var s = q;
                                            if (n < r && "before" == c.position && (s = b.columns.records[r - 1]), s.columngroup != b.getcolumn(m).columngroup) return void(null != b.columnsdropline && (b.columnsdropline.remove(), b.columnsdropline = null))
                                        }
                                        n < r ? "before" == c.position ? b.setcolumnindex(m, r - 1) : b.setcolumnindex(m, r) : n > r && b.setcolumnindex(m, r), b.autosavestate && b.savestate && b.savestate()
                                    }
                                }
                            }
                            null != b.columnsdropline && (b.columnsdropline.remove(), b.columnsdropline = null)
                        }
                    }
                })
            }
        }, getcolumnbytext: function (b) {
            var c = null;
            return this.columns.records && a.each(this.columns.records, function () {
                if (this.text == b) return c = this, !1
            }), c
        }, _handlereordercolumnsdroplines: function (b) {
            var c = this, d = -1, e = c._pinnedColumnsLength(), f = parseInt(c.host.coord().left),
                g = f + c.host.width(), h = "hidden" != c.vScrollBar.css("visibility") ? 19 : 0;
            return c.rtl || (h = 0), a.each(c.columnsbounds, function (a) {
                if (a >= e) {
                    if (0 == this.width) return !0;
                    if (b <= this.left + this.width / 2) return b > g ? (c.columnsdropline.fadeOut(), !1) : (c.columnsdropline.css("left", h + parseInt(this.left) + "px"), c.columnsdropline.css("top", parseInt(this.top) + "px"), c.columnsdropline.height(this.height), c.columnsdropline.fadeIn("slow"), d = {
                        index: a,
                        position: "before"
                    }, !1);
                    if (b >= this.left + this.width / 2) {
                        if (this.left + this.width > g) return c.columnsdropline.fadeOut(), !1;
                        c.columnsdropline.css("left", h + 1 + this.left + this.width), c.columnsdropline.css("top", this.top), c.columnsdropline.height(this.height), c.columnsdropline.fadeIn("slow"), d = {
                            index: a,
                            position: "after"
                        }
                    }
                }
            }), d
        }, _createreordercolumn: function (b, c, d) {
            var e = this, f = c;
            e.reordercolumn && e.reordercolumn.remove(), e.columnsdropline && e.columnsdropline.remove(), e.reordercolumn = a("<div></div>");
            var g = b.clone();
            e.reordercolumn.css("z-index", 999999), g.css("border-width", "1px"), g.css("opacity", "0.4");
            var h = a(g.find("." + e.toThemeProperty("jqx-grid-column-menubutton")));
            h.length > 0 && h.css("display", "none");
            var i = a(g.find(".jqx-icon-close"));
            i.length > 0 && i.css("display", "none"), e.reordercolumnicon = a('<div style="z-index: 9999; position: absolute; left: 100%; top: 50%; margin-left: -18px; margin-top: -7px;"></div>'), e.reordercolumnicon.addClass(e.toThemeProperty("jqx-grid-drag-icon")), e.reordercolumn.css("float", "left"), e.reordercolumn.css("position", "absolute");
            e.host.coord();
            g.width(b.width() + 16), e.reordercolumn.append(g), e.reordercolumn.height(b.height()), e.reordercolumn.width(g.width()), e.reordercolumn.append(e.reordercolumnicon), a(document.body).append(e.reordercolumn), g.css("margin-left", 0), g.css("left", 0), g.css("top", 0), e.reordercolumn.css("left", f.left + e.dragmousedown.left), e.reordercolumn.css("top", f.top + e.dragmousedown.top), void 0 != d && d && (e.columnsdropline = a('<div style="z-index: 9999; display: none; position: absolute;"></div>'), e.columnsdropline.width(2), e.columnsdropline.addClass(e.toThemeProperty("jqx-grid-group-drag-line")), a(document.body).append(e.columnsdropline))
        }, _handlecolumnsdragreorder: function (b, c) {
            this.reordercolumn && this.reordercolumn.remove(), this.columnsdropline && this.columnsdropline.remove(), this.dragmousedown = null, this.dragmousedownoffset = null, this.columndragstarted = !1, this.reordercolumn = null;
            var d, e = this, f = !1;
            this.isTouchDevice() && this.touchmode !== !0 && (f = !0);
            var g = "mousedown.drag", d = "mousemove.drag";
            f ? (g = a.jqx.mobile.getTouchEventName("touchstart") + ".drag", d = a.jqx.mobile.getTouchEventName("touchmove") + ".drag") : this.addHandler(c, "dragstart", function (a) {
                return !1
            }), this.addHandler(c, g, function (c) {
                if (0 == b.draggable) return !0;
                if (e.resizing) return !0;
                e.__drag = !0;
                var d = c.pageX, g = c.pageY;
                if (f) {
                    var h = e.getTouches(c), i = h[0];
                    d = i.pageX, g = i.pageY
                }
                e.dragmousedown = {left: d, top: g};
                var j = a(c.target).coord();
                return e.dragmousedownoffset = {left: parseInt(d) - parseInt(j.left), top: parseInt(g - j.top)}, !0
            }), this.addHandler(c, d, function (g) {
                if (!b.draggable) return !0;
                if (void 0 == b.datafield) return !0;
                if (b.pinned) return !0;
                if (e.resizing) return !0;
                if (e.dragmousedown) {
                    var h = g.pageX, i = g.pageY;
                    if (f) {
                        var j = e.getTouches(g), k = j[0];
                        void 0 != k && (h = k.pageX, i = k.pageY)
                    }
                    if (d = {left: h, top: i}, !e.columndragstarted && null == e.reordercolumn) {
                        var l = Math.abs(d.left - e.dragmousedown.left), m = Math.abs(d.top - e.dragmousedown.top);
                        (l > 3 || m > 3) && (e._createreordercolumn(c, d, !0), a(document.body).addClass("jqx-disableselect"), a.data(e.reordercolumn[0], "reorderrecord", b.datafield))
                    }
                }
            })
        }
    })
}(jqxBaseFramework);

