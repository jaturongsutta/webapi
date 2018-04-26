/** 
 * @module CMSLib
 */
/** @class 
 * Main Object for CMSLib
 * 
 * */
var CMSLib = {};

CMSLib.window = window;

CMSLib.$ = $;

if ( !window.console )
	window.console = { log: function(){} };

if ( !window.console.time ) {
	window.console.time = function(){};
	window.console.timeEnd = function(){};
}
(function($, undefined) {
	
	CMSLib.filter = {
		_masks: {
			numeric:	"[0-9]",
			numericWildcard: "[0-9*]",
			numericComma: "[0-9,]",
			numericUnderScoreWildcard: "[0-9_*]",
			decimal: "[0-9.]",
			decimalComma: "[0-9.,]",
			date: "[0-9/]",
			alpha: "[a-zA-Z]",
			alphaNumeric: "[0-9a-zA-Z]",
			alphaNumericWithDash: "[0-9a-zA-Z-]",
			alphaWildcard: "[a-zA-Z*]",
			alphaNumericWildcard: "[0-9a-zA-Z*]",
			alphaNumericUnderScore: "[0-9a-zA-Z_]",
			alphaNumericUnderScoreWildcard: "[0-9a-zA-Z_*]",
			alphaSpace: "[a-zA-Z ]",
			alphaNumericSpace: "[0-9a-zA-Z ]",
			alphaSpaceWildcard: "[a-zA-Z *]",
			alphaNumericSpaceWildcard: "[0-9a-zA-Z *]",
			alphaNumericWithDashSlashSpace: "[0-9a-zA-Z-/ ]",
			alphaNumericWithDashSlashSpaceWildcard: "[0-9a-zA-Z-/ *]",
			alphaNumericWithDashSlashSpaceUnderscore: "[0-9a-zA-Z-/ _]",
			alphaNumericWithDashSlash: "[0-9a-zA-Z-/]",
			excludeForbiddenSpecialChar: "[^~%\\\\;?]",
			all: ".",
			description: "[0-9a-zA-Z.,& -]"
		},
		/** @public */
		init: function() {
			if ( ! $.fn.filter_input ) return;
			$( 'form' ).filter_input({
				selector: 'input[type=text][filter],input[type=password][filter],textarea[filter]',
				masks: this._masks,
				live:true
			});
		},
		/** @public */
		addFormat: function( format, strRegex ){
			this._masks[ format ] = strRegex;
		}
		
	};
	
    /** @class */
	CMSLib.dataTable = {
		_scrollBarWidth: 0,
		/*
		 * Hook Data Table 
		 */
		/** @private */
		initHookeDataTable: function(){
			//this._scrollBarWidth = this.getScrollbarWidth();
			$.fn.__dataTable = $.fn.dataTable;
			$.fn.DataTable = function (options) {
			    //if (options === undefined) {
			    //    options = {};
			    //    return this.__dataTable(options);
			    //}
			    if (options) {
			        options.fnDrawCallback = function () {
			            var objId = $(this).attr("id");
			            var headerWidth = $("#" + objId).parent().parent().find(".dataTables_scrollHeadInner table").width();
			            var bodyWidth = $("#" + objId).width();
			            if (headerWidth != bodyWidth) {
			                $("#" + objId).width(headerWidth);
			            }
			            //dataTables_scrollBody
			            if ($("#" + objId).parent().css("max-height") !== "none") {
			                $("#" + objId).parent().css("overflow", "scroll");
			            }
			            
			        };
			        options.oLanguage = {
			            sSearch: _dtLanguage['Search']
				     , sEmptyTable: _dtLanguage['EmptyTable']
                     , sProcessing: _dtLanguage['Processing']
				     , oPaginate: {
				        sFirst: _dtLanguage['First']
                        , sLast: _dtLanguage['Last']
                        , sNext: _dtLanguage['Next']
                        , sPrevious: _dtLanguage['Previous']
				    }
				    , sLengthMenu: _dtLanguage['LengthMenu']
                    , sInfo: _dtLanguage['Info']
                    , sInfoFiltered: _dtLanguage['InfoFiltered']
			        };
			        options.oScroll = { bCollapse: true };
			        options.bLengthChange = false;
			        options.bFilter = false;
			        options.ordering = false;

			        options.fnRecordsTotal = function (iMax) {
			            if (iMax) {
			                return iMax;
			            } else {
			                return _fnDataSource(this) == 'ssp' ?
				                    this._iRecordsTotal * 1 :
				                    this.aiDisplayMaster.length;
			            }
			        };

			        return this.__dataTable(options);
			    //}			    
				//if (options) {
				//    var st = this.__dataTable(options);//.fnSettings();
				//	return st;
				}else
					return this.__dataTable(options);
			};
		}
	};

	$.fn.serializeObject = function () {

	    var self = this,
            json = {},
            push_counters = {},
            patterns = {
                "validate": /^[a-zA-Z][a-zA-Z0-9_]*(?:\[(?:\d*|[a-zA-Z0-9_]+)\])*$/,
                "key": /[a-zA-Z0-9_]+|(?=\[\])/g,
                "push": /^$/,
                "fixed": /^\d+$/,
                "named": /^[a-zA-Z0-9_]+$/
            };


	    this.build = function (base, key, value) {
	        base[key] = value;
	        return base;
	    };

	    this.push_counter = function (key) {
	        if (push_counters[key] === undefined) {
	            push_counters[key] = 0;
	        }
	        return push_counters[key]++;
	    };

	    $.each($(this).serializeArray(), function () {

	        // skip invalid keys
	        if (!patterns.validate.test(this.name)) {
	            //return;
	        }

	        var k,
                keys = this.name.match(patterns.key),
                merge = this.value,
                reverse_key = this.name;

	        while ((k = keys.pop()) !== undefined) {

	            // adjust reverse_key
	            reverse_key = reverse_key.replace(new RegExp("\\[" + k + "\\]$"), '');

	            // push
	            if (k.match(patterns.push)) {
	                merge = self.build([], self.push_counter(reverse_key), merge);
	            }

	                // fixed
	            else if (k.match(patterns.fixed)) {
	                merge = self.build([], k, merge);
	            }

	                // named
	            else if (k.match(patterns.named)) {
	                merge = self.build({}, k, merge);
	            }
	        }

	        json = $.extend(true, json, merge);
	    });

	    return json;
	};
})(jQuery);


(function ($, undefined) {
    $(function () {
        CMSLib.dataTable.initHookeDataTable();
    });

})(jQuery);
