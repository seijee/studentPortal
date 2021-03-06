/*
 *  Document   : main.js
 *  Author     : pixelcave
 */
var webApp=function(){
	var a=$("body"),e=$("header"),i=function(){
		var i=$("#year-copy"),t=new Date;
		i.html(2013===t.getFullYear()?"2013":"2013-"+t.getFullYear().toString().substr(2,2));
		var o=$("#page-content");
		o.css("min-height",$(window).height()-(e.outerHeight()+$("#pre-page-content").outerHeight()+$("footer").outerHeight())+"px"),$(window).resize(function(){
			o.css("min-height",$(window).height()-(e.outerHeight()+$("#pre-page-content").outerHeight()+$("footer").outerHeight())+"px")
			}),$("#page-sidebar").hasClass("sticky")&&n("create"),$("#toggle-side-content").click(function(){
			a.toggleClass("hide-side-content")
			}),$("thead input:checkbox").click(function(){
			var a=$(this).prop("checked"),e=$(this).closest("table");
			$("tbody input:checkbox",e).each(function(){
				$(this).prop("checked",a)
				})
			}),$('[data-toggle="tabs"] a').click(function(a){
			a.preventDefault(),$(this).tab("show")
			}),$('[data-toggle="lightbox-gallery"]').magnificPopup({
			delegate:"a.gallery-link",
			type:"image",
			gallery:{
				enabled:!0,
				navigateByImgClick:!0,
				arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
				tPrev:"Previous",
				tNext:"Next",
				tCounter:'<span class="mfp-counter">%curr% of %total%</span>'
			}
		}),$('[data-toggle="block-collapse"]').click(function(){
		$(this).hasClass("active")?($(this).parents(".block").find(".block-content").slideDown(250),$(this).removeClass("active").html('<i class="fa fa-arrow-up"></i>')):($(this).parents(".block").find(".block-content").slideUp(250),$(this).addClass("active").html('<i class="fa fa-arrow-down"></i>'))
		}),$('[data-toggle="lightbox-image"]').magnificPopup({
		type:"image"
	}),$('[data-toggle="tooltip"], .enable-tooltip').tooltip({
		container:"body",
		animation:!1
		}),$('[data-toggle="popover"]').popover({
		container:"body",
		animation:!1
		}),$(".select-chosen").chosen(),$("textarea.textarea-elastic").elastic(),$("textarea.textarea-editor").wysihtml5(),$(".input-colorpicker").colorpicker(),$(".input-timepicker").timepicker(),$(".input-datepicker").datepicker(),$(".input-datepicker-close").datepicker().on("changeDate",function(){
		$(this).datepicker("hide")
		}),$(".input-daterangepicker").daterangepicker(),$(".input-themed").iCheck({
		checkboxClass:"icheckbox_square-grey",
		radioClass:"iradio_square-grey"
	}),$(".slider").slider(),$("input, textarea").placeholder()
	},t=function(){
	$(".loading-on").click(function(){
		var a=$("#loading");
		$("header .navbar-brand").hide(),a.fadeIn(250),$("header li > a > .badge").fadeOut(250),setTimeout(function(){
			a.fadeOut(250,function(){
				$(".navbar-brand").fadeIn()
				}),$(".dropdown-messages > a > .badge").fadeIn(250).html("3")
			},1500)
		});
	var a=["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Côte d'Ivoire","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Cook Islands","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Democratic Republic of the Congo","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Faeroe Islands","Falkland Islands","Fiji","Finland","Former Yugoslav Republic of Macedonia","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","North Korea","Northern Marianas","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn Islands","Poland","Portugal","Puerto Rico","Qatar","Réunion","Romania","Russia","Rwanda","São Tomé and Príncipe","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Saudi Arabia","Senegal","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Korea","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","The Bahamas","The Gambia","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","US Virgin Islands","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Wallis and Futuna","Western Sahara","Yemen","Yugoslavia","Zambia","Zimbabwe"];
	$(".example-typeahead").typeahead({
		items:5,
		source:a
	});
	var e=$("#example-advanced-daterangepicker"),i=$("#example-advanced-daterangepicker span");
	e.daterangepicker({
		ranges:{
			Today:["today","today"],
			Yesterday:["yesterday","yesterday"],
			"Last 7 Days":[Date.today().add({
				days:-6
			}),"today"],
			"Last 30 Days":[Date.today().add({
				days:-29
			}),"today"],
			"This Month":[Date.today().moveToFirstDayOfMonth(),Date.today().moveToLastDayOfMonth()],
			"Last Month":[Date.today().moveToFirstDayOfMonth().add({
				months:-1
			}),Date.today().moveToFirstDayOfMonth().add({
				days:-1
			})]
			}
		},function(a,e){
		i.html(a.toString("MMMM d, yy")+" - "+e.toString("MMMM d, yy"))
		}),i.html(Date.today().toString("MMMM d, yy")+" - "+Date.today().toString("MMMM d, yy"))
},n=function(e){
	var i=$("#page-sidebar .slimScrollDiv"),t=$(".side-scrollable"),r=380;
	if("create"==e)t.length&&(r=n("resize"),t.slimScroll({
		height:r,
		color:"#fff",
		size:"3px",
		touchScrollStep:100
	}),$(window).scroll(o),$(window).resize(o)),$(window).scroll(s);
	else{
		if("resize"==e)return $(window).width()>979&&(r=a.hasClass("header-fixed-top")||a.hasClass("header-fixed-bottom")||$(this).scrollTop()<41?$(window).height()-41:$(window).height()),i&&i.css("height",r),t.css("height",r),r;
		"destroy"==e&&(t.parent().replaceWith(t),$(".side-scrollable").removeAttr("style"),$(window).off("scroll",s),$(window).off("scroll",o),$(window).off("resize",o))
		}
	},o=function(){
	n("resize")
	},s=function(){
	a.hasClass("header-fixed-bottom")||a.hasClass("header-fixed-top")?$(window).width()>979&&$("#page-sidebar").removeAttr("style"):$(this).scrollTop()<41?$("#page-sidebar").css("top","41px"):$(this).scrollTop()>41&&$("#page-sidebar").css("top","0")
	},r=function(){
	var a=250,e=300,i=$(".menu-link"),t=$(".submenu-link");
	i.each(function(a,e){
		$(e).append("<span>"+$(e).next("ul").find("a").not(".submenu-link").length+"</span>")
		}),t.each(function(a,e){
		$(e).append("<span>"+$(e).next("ul").children().length+"</span>")
		}),i.click(function(){
		var i=$(this);
		return i.parent().hasClass("active")!==!0&&(i.hasClass("open")?i.removeClass("open").next().slideUp(a):($(".menu-link.open").removeClass("open").next().slideUp(a),i.addClass("open").next().slideDown(e))),!1
		}),t.click(function(){
		var i=$(this);
		return i.parent().hasClass("active")!==!0&&(i.hasClass("open")?i.removeClass("open").next().slideUp(a):(i.closest("ul").find(".submenu-link.open").removeClass("open").next().slideUp(a),i.addClass("open").next().slideDown(e))),!1
		})
	},l=function(){
	var a=$("#to-top");
	$(window).scroll(function(){
		$(this).scrollTop()>150?a.fadeIn(100):a.fadeOut(100)
		}),a.click(function(){
		return $("html, body").animate({
			scrollTop:0
		},150),!1
		})
	},d=function(){
	var a,i=$(".theme-colors"),t=$("#theme-link");
	t.length&&(a=t.attr("href"),$("li",i).removeClass("active"),$('a[data-theme="'+a+'"]',i).parent("li").addClass("active")),$("a",i).mouseenter(function(){
		a=$(this).data("theme"),$("li",i).removeClass("active"),$(this).parent("li").addClass("active"),"default"===a?t.length&&(t.remove(),t=$("#theme-link")):t.length?t.attr("href",a):($('link[href="css/themes-1.5.css"]').before('<link id="theme-link" rel="stylesheet" href="'+a+'">'),t=$("#theme-link"))
		});
	var o=$("#page-sidebar"),s=$("#theme-sidebar-sticky");
	o.hasClass("sticky")&&s.iCheck("check"),s.on("ifChecked",function(){
		o.addClass("sticky"),n("create")
		}),s.on("ifUnchecked",function(){
		o.removeClass("sticky"),n("destroy")
		});
	var r=$("#theme-header-top"),l=$("#theme-header-bottom");
	e.hasClass("navbar-fixed-top")?(r.iCheck("check"),c("top")):e.hasClass("navbar-fixed-bottom")&&(l.iCheck("check"),c("bottom")),r.on("ifChecked",function(){
		l.iCheck("uncheck"),c("top")
		}),r.on("ifUnchecked",function(){
		c("static")
		}),l.on("ifChecked",function(){
		r.iCheck("uncheck"),c("bottom")
		}),l.on("ifUnchecked",function(){
		c("static")
		});
	var d=$("#page-container"),h=$("#theme-page-full");
	d.hasClass("full-width")&&h.iCheck("check"),h.on("ifChecked",function(){
		d.addClass("full-width")
		}),h.on("ifUnchecked",function(){
		d.removeClass("full-width")
		})
	},c=function(i){
	"top"===i?(a.removeClass("header-fixed-bottom").addClass("header-fixed-top"),e.removeClass("navbar-fixed-bottom").addClass("navbar-fixed-top")):"bottom"===i?(a.removeClass("header-fixed-top").addClass("header-fixed-bottom"),e.removeClass("navbar-fixed-top").addClass("navbar-fixed-bottom")):"static"===i&&(a.removeClass("header-fixed-top").removeClass("header-fixed-bottom"),e.removeClass("navbar-fixed-top").removeClass("navbar-fixed-bottom"))
	},h=function(){
	$.extend(!0,$.fn.dataTable.defaults,{
		sDom:"<'row'<'col-sm-6 col-xs-5'l><'col-sm-6 col-xs-7'f>r>t<'row'<'col-sm-5 hidden-xs'i><'col-sm-7 col-xs-12 clearfix'p>>",
		sPaginationType:"bootstrap",
		oLanguage:{
			sLengthMenu:"_MENU_",
			sSearch:'<div class="input-group"><span class="input-group-addon"><i class="fa fa-search"></i></span>_INPUT_</div>',
			sInfo:"<strong>_START_</strong>-<strong>_END_</strong> of <strong>_TOTAL_</strong>",
			oPaginate:{
				sPrevious:"",
				sNext:""
			}
		}
	}),$.extend($.fn.dataTableExt.oStdClasses,{
	sWrapper:"dataTables_wrapper form-inline"
}),$.fn.dataTableExt.oApi.fnPagingInfo=function(a){
	return{
		iStart:a._iDisplayStart,
		iEnd:a.fnDisplayEnd(),
		iLength:a._iDisplayLength,
		iTotal:a.fnRecordsTotal(),
		iFilteredTotal:a.fnRecordsDisplay(),
		iPage:Math.ceil(a._iDisplayStart/a._iDisplayLength),
		iTotalPages:Math.ceil(a.fnRecordsDisplay()/a._iDisplayLength)
		}
	},$.extend($.fn.dataTableExt.oPagination,{
	bootstrap:{
		fnInit:function(a,e,i){
			var t=a.oLanguage.oPaginate,n=function(e){
				e.preventDefault(),a.oApi._fnPageChange(a,e.data.action)&&i(a)
				};
				
			$(e).append('<ul class="pagination pagination-sm remove-margin"><li class="prev disabled"><a href="javascript:void(0)"><i class="fa fa-chevron-left"></i> '+t.sPrevious+'</a></li><li class="next disabled"><a href="javascript:void(0)">'+t.sNext+' <i class="fa fa-chevron-right"></i></a></li></ul>');
			var o=$("a",e);
			$(o[0]).bind("click.DT",{
				action:"previous"
			},n),$(o[1]).bind("click.DT",{
				action:"next"
			},n)
			},
		fnUpdate:function(a,e){
			var i,t,n,o,s,r=5,l=a.oInstance.fnPagingInfo(),d=a.aanFeatures.p,c=Math.floor(r/2);
			for(l.iTotalPages<r?(o=1,s=l.iTotalPages):l.iPage<=c?(o=1,s=r):l.iPage>=l.iTotalPages-c?(o=l.iTotalPages-r+1,s=l.iTotalPages):(o=l.iPage-c+1,s=o+r-1),i=0,iLen=d.length;iLen>i;i++){
				for($("li:gt(0)",d[i]).filter(":not(:last)").remove(),t=o;s>=t;t++)n=t===l.iPage+1?'class="active"':"",$("<li "+n+'><a href="javascript:void(0)">'+t+"</a></li>").insertBefore($("li:last",d[i])[0]).bind("click",function(i){
					i.preventDefault(),a._iDisplayStart=(parseInt($("a",this).text(),10)-1)*l.iLength,e(a)
					});
				0===l.iPage?$("li:first",d[i]).addClass("disabled"):$("li:first",d[i]).removeClass("disabled"),l.iPage===l.iTotalPages-1||0===l.iTotalPages?$("li:last",d[i]).addClass("disabled"):$("li:last",d[i]).removeClass("disabled")
				}
			}
		}
})
};

return{
	init:function(){
		i(),r(),l(),d(),h(),t()
		}
	}
}();
$(function(){
	webApp.init()
	});