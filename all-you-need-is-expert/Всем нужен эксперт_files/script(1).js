function ForumPopupMenu()
{
	this.oDiv = false;
	this.oControl = false;
	this.oControlPos = false;
	this.bRemoveElement = true;
	var _this = this;
}

ForumPopupMenu.prototype.InitFromArray = function(id, data)
{
	var ii = 0, _data = null;
	if (oObjectForum[id] && typeof(oObjectForum[id]) == "object")
		return oObjectForum[id];
	oObjectForum[id] = {};
	for (ii in data)
	{
		if (!data[ii]["CONTENT"])
			continue;
		oObjectForum[id][ii] = {
			"TITLE" : data[ii]["TITLE"], 
			"CLASS" : data[ii]["CLASS"], 
			"ONCLICK" : data[ii]["ONCLICK"], 
			"CONTENT" : (typeof(data[ii]["CONTENT"]) != "object" ? [data[ii]["CONTENT"]] : data[ii]["CONTENT"])};
	}
	return oObjectForum[id];
}

ForumPopupMenu.prototype.CreateMenu = function(id, data)
{
	var oDiv = false, ii = false, jj = false, _text = '', _table = '';
	if (!(data && typeof(data) == "object"))
		return false;
		
	oDiv = document.body.appendChild(document.createElement("DIV"));
	oDiv.id = id + '_div'; oDiv.className = "forum-popup";
	oDiv.style.position = 'absolute'; oDiv.style.visibility = 'hidden';
	for (ii in data)
	{
		_text = '<table border="0" cellpadding="0" cellspacing="0" class="forum-popup-item"><tr>';
		for (jj in data[ii]['CONTENT'])
		{
			_text += '<td>' + data[ii]['CONTENT'][jj] + '</td>';
		}
		_text += '</tr></table>';
		
		_table += '<tr class="forum-popup' + (data[ii]['CLASS'] ? (" " + data[ii]['CLASS']) : "") + '" '
			+ 'onmouseover="this.className=\'forum-popup-over\'" onmouseout="this.className=\'forum-popup\'" ' + '>'
			+ '<td class="forum-popup-item ' + (data[ii]['CLASS'] ? (" " + data[ii]['CLASS']) : "") + '" ' 
			+ ((data[ii]['ONCLICK']) ? ('onclick="' + data[ii]['ONCLICK'] + '"') : "")+ '>'
			+ _text
			+'</td></tr>';
	}
	_table = '<form style="padding:0px; margin:0px;"><table cellpadding="0" cellspacing="0" border="0" class="forum-popup forum-menu-popup-table">'
		+ _table + '</table></form>';
	oDiv.innerHTML = _table;
	return oDiv;
}

ForumPopupMenu.prototype.PopupShow = function(pos, div, controlpos)
{
	if (!this.oDiv && !div || (typeof(this.oDiv) != "object" && typeof(div) != "object"))
		return false;
	if (div)
	{
		if (controlpos)
			this.ControlPos = controlpos;
		this.bRemoveElement = false;
		this.oDiv = div;
	}
	else
	{
		this.bRemoveElement = true;
	}

	var w = this.oDiv.offsetWidth; var h = this.oDiv.offsetHeight;
	if (h > 250)
	{
		this.oDiv.style.height = "250px";
		this.oDiv.style.overflow = "auto";
		w += 15;
		this.oDiv.className = "forum-popup-oveflow";
		h = 250;
	}
	if (!pos || pos == null)
	{
		pos = jsUtils.AlignToPos(pos, w, h);
	}
	
	for (var ii in pos)
	{
		if (isNaN(pos[ii]) || !pos[ii])
			pos[ii] = 0;
	}
	this.oDiv.style.width = w + 'px'; 
	this.oDiv.style.visibility = 'visible';
//	this.oDiv.style.display = 'block';
	this.oDiv.style.MozUserSelect = 'none';
	jsFloatDiv.Show(this.oDiv, parseInt(pos["left"]), parseInt(pos["top"]), false, false, false);
	if (this.oControl != null && this.oControl.className)
	{
		this.oControl.className += ' forum-popup-control-active';
	}
	var _this = this;
	jsUtils.addEvent(document, "click", function(e){_this.CheckClick(e)});
	jsUtils.addEvent(document, "keypress", function(e){_this.OnKeyPress(e)});
}

ForumPopupMenu.prototype.PopupHide = function()
{ 
	var _this = this;
	jsUtils.removeEvent(document, "click", function(e){_this.CheckClick(e);});
	jsUtils.removeEvent(document, "keypress", function(e){_this.OnKeyPress(e)});

	if (!this.oDiv)
		return false;
	jsFloatDiv.Close(this.oDiv);
	if (this.oControl != null && this.oControl.className)
	{
		this.oControl.className = this.oControl.className.replace(" forum-popup-control-active", "");
	}
	if (this.bRemoveElement)
	{
		try
		{
			this.oDiv.parentNode.removeChild(this.oDiv);
			this.ControlPos = false;
		}
		catch(e)
		{}
	}
	this.oDiv.style.visibility = 'hidden';
//	this.oDiv.style.display = 'none';
}

ForumPopupMenu.prototype.OnKeyPress = function(e)
{
	if(!e) e = window.event
	if(!e) return;
	if(e.keyCode == 27)
		this.PopupHide();
}

ForumPopupMenu.prototype.ShowMenu = function(control, data, switcher)
{
	var id = "_id", pos = {"top" : 20, "left" : 20};
	var _data = false, _div = false;
	
	this.PopupHide();
	if (typeof(control) == "object")
	{
		id = control.id;
		pos = jsUtils.GetRealPos(control);
		this.ControlPos = pos;
		this.oControl = control;
		if (typeof(switcher) == "object" && switcher != null)
			pos = jsUtils.GetRealPos(switcher);
	}
	
	var _data = this.InitFromArray(id, data);
	this.oDiv = this.CreateMenu(id, _data);
	if (this.oDiv)
	{
		this.PopupShow(pos);
	}
}

ForumPopupMenu.prototype.CheckClick = function(e)
{
	if(!this.oDiv || this.oDiv.style.visibility != 'visible')
		return;

	var windowSize = jsUtils.GetWindowSize();
	var x = e.clientX + windowSize.scrollLeft;
	var y = e.clientY + windowSize.scrollTop;

	/*menu region*/
	pos = jsUtils.GetRealPos(this.oDiv);
	var posLeft = parseInt(pos["left"]);
	var posTop = parseInt(pos["top"])
	var posRight = posLeft + this.oDiv.offsetWidth;
	var posBottom = posTop + this.oDiv.offsetHeight;
	if(x >= posLeft && x <= posRight && y >= posTop && y <= posBottom)
		return;

	if(this.ControlPos)
	{
		var pos = this.ControlPos;
		if(x >= pos['left'] && x <= pos['right'] && y >= pos['top'] && y <= pos['bottom'])
			return;
	}
	this.PopupHide();
}

window.fMenu = new ForumPopupMenu();


function initFJCFloatDiv()
{
	if (!window["JCFloatDiv"]) {
		setTimeout(initFJCFloatDiv, 50);
		return false;
	}

	window["FJCFloatDiv"] = new JCFloatDiv();
	window["FJCFloatDiv"].Show = function(div, left, top, dxShadow, bSubstrate, restrictDrag)
	{
		var zIndex = parseInt(div.style.zIndex);
		zIndex = (zIndex <= 0 || isNaN(zIndex) ? 100 : zIndex);
		left = (parseInt(left) < 0 ? 0 : parseInt(left));
		top = (parseInt(top) < 0 ? 0 : parseInt(top));
		dxShadow = parseInt(isNaN(dxShadow) ? 5 : dxShadow);
		bSubstrate = (bSubstrate == false ? false : true);

		div.style.zIndex = zIndex;
		div.style.left = left + "px";
		div.style.top = top + "px";

		if(dxShadow > 0)
		{
			var img = document.getElementById(div.id+'_shadow');
			if(!img)
			{
				if(jsUtils.IsIE())
				{
					img = document.createElement("DIV");
					img.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+phpVars.templatePath+"images/shadow.png',sizingMethod='scale')";
				}
				else
				{
					img = document.createElement("IMG");
					img.src = phpVars.templatePath + 'images/shadow.png';
				}
				img.id = div.id+'_shadow';
				img.style.position = 'absolute';
				img.style.zIndex = zIndex-2;
				document.body.appendChild(img);
			}
			img.style.width = div.offsetWidth+'px';
			img.style.height = div.offsetHeight+'px';
			img.style.left = parseInt(div.style.left)+dxShadow+'px';
			img.style.top = parseInt(div.style.top)+dxShadow+'px';
			img.style.visibility = 'visible';
		}
		div.restrictDrag = restrictDrag || false;
		if (bSubstrate == true)
		{
			var substrate = document.getElementById(div.id + '_substrate');
			if(!substrate)
			{
				substrate = document.createElement("DIV");
				substrate.id = div.id + '_substrate';
				substrate.style.zIndex = zIndex-3;
				substrate.style.position = 	'absolute';
				substrate.style.display = 'none';
				substrate.style.background = 'white';
				substrate.style.opacity = '0.5';
				if (substrate.style.MozOpacity)
					substrate.style.MozOpacity = '0.5';
				else if (substrate.style.KhtmlOpacity)
					substrate.style.KhtmlOpacity = '0.5';
				if (jsUtils.IsIE())
				{
					substrate.style.filter += "progid:DXImageTransform.Microsoft.Alpha(opacity=50)";
				}
				document.body.appendChild(substrate);
			}
			substrate.style.display = 'block';
			substrate.style.left = 0;
			substrate.style.top = 0;
			var WindowSize = jsUtils.GetWindowSize();
			substrate.style.width = WindowSize["scrollWidth"] + "px";
			substrate.style.height = WindowSize["scrollHeight"] + "px";
		}
		div.style.display = 'block';
		div.style.visibility = 'visible';
		return false;
	}
	window["FJCFloatDiv"].Close = function(div)
	{
		if (!div)
			return false;
		if (document.getElementById(div.id + "_shadow"))
		{
			document.getElementById(div.id + "_shadow").style.visibility = 'hidden';
		}
		if (document.getElementById(div.id + "_substrate"))
		{
			document.getElementById(div.id + "_substrate").style.display = 'none';
		}
//	div.style.display = 'none';
		div.style.visibility = 'hidden';
		return false;
	}
}
initFJCFloatDiv();
/*
     FILE ARCHIVED ON 20:45:26 Jul 08, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:44:23 Sep 10, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.138
  captures_list: 165.065
  exclusion.robots: 0.148
  RedisCDXSource: 21.882
  PetaboxLoader3.resolve: 238.517 (3)
  PetaboxLoader3.datanode: 85.254 (5)
  load_resource: 304.929
  esindex: 0.085
  CDXLines.iter: 13.758 (3)
  LoadShardBlock: 124.672 (3)
*/