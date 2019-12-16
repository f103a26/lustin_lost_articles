
; /* Start:/bitrix/templates/.default/js/highlight1c.js*/
///////////////////////////////////////////////////////////////////////
var highlight1c_inited = false;
function highlight1c(prm_id){


var reg_words_1C_77=/^(Если|If|Тогда|Then|ИначеЕсли|ElsIf|Иначе|Else|КонецЕсли|EndIf|Цикл|Do|Для|For|По|To|Пока|While|КонецЦикла|EndDo|Процедура|Procedure|КонецПроцедуры|EndProcedure|Функция|Function|КонецФункции|EndFunction|Перем|Var|Экспорт|Export|Перейти|Goto|И|And|Или|Or|Не|Not|Знач|Val|Прервать|Break|Продолжить|Continue|Возврат|Return|Контекст|Context|Далее|Forward|Попытка|Try|Исключение|Except|КонецПопытки|EndTry|ВызватьИсключение|Raise|ОписаниеОшибки|GetErrorDescription|ТекущаяИБКод|CurrentIBCode|ТекущаяИБНаименование|CurrentIBDescr|ТекущаяИБСтатус|CurrentIBStatus|ТекущаяИБЦентральная|IsCurrentIBCenter|ИБСозданияОбъекта|BirthIBOfObject|ЦентральнаяИБКод|CentralIBCode|ТекущаяИБТолькоПолучатель|IsCurrentIBRecepientOnly|ФС|FS|ЗагрузитьВнешнююКомпоненту|LoadAddIn|ПодключитьВнешнююКомпоненту|AttachAddIn|СоздатьОбъект|CreateObject|СтатусВозврата|ReturnStatus|РазделительСтраниц|PageBreak|РазделительСтрок|LineBreak|СимволТабуляции|TabSymbol|Перечисление|Enum|Константа|Const|ПланыСчетов|ChartsOfAccounts|ВидыСубконто|SubcontoKinds|ВидРасчета|CalculationKind|ГруппаРасчетов|CalculationGroup|Регистр|Register|Окр|Round|Цел|Int|Мин|Min|Макс|Max|Лог10|Log10|Лог|Ln|СтрДлина|StrLen|ПустаяСтрока|IsBlankString|СокрЛ|TrimL|СокрП|TrimR|СокрЛП|TrimAll|Лев|Left|Прав|Right|Сред|Mid|Найти|Find|СтрЗаменить|StrReplace|СтрЧислоВхождений|StrCountOccur|СтрКоличествоСтрок|StrLineCount|СтрПолучитьСтроку|StrGetLine|Врег|Upper|Нрег|Lower|OemToAnsi|AnsiToOem|Симв|Chr|КодСимв|Asc|РабочаяДата|WorkingDate|ТекущаяДата|CurDate|ДобавитьМесяц|AddMonth|НачМесяца|BegOfMonth|КонМесяца|EndOfMonth|НачКвартала|BegOfQuart|КонКвартала|EndOfQuart|НачГода|BegOfYear|КонГода|EndOfYear|НачНедели|BegOfWeek|КонНедели|EndOfWeek|ДатаГод|GetYear|ДатаМесяц|GetMonth|ДатаЧисло|GetDay|НомерНеделиГода|GetWeekOfYear|НомерДняГода|GetDayOfYear|НомерДняНедели|GetDayOfWeek|ПериодСтр|PeriodStr|НачалоСтандартногоИнтервала|BegOfStandardRange|КонецСтандартногоИнтервала|EndOfStandardRange|ТекущееВремя|CurrentTime|СформироватьПозициюДокумента|MakeDocPosition|РазобратьПозициюДокумента|SplitDocPosition|Дата|Date|Строка|String|Число|Number|Пропись|Spelling|Формат|Format|Шаблон|Template|ФиксШаблон|FixTemplate|ВвестиЗначение|InputValue|ВвестиЧисло|InputNumeric|ВвестиСтроку|InputString|ВвестиДату|InputDate|ВвестиПериод|InputPeriod|ВвестиПеречисление|InputEnum|Вопрос|DoQueryBox|Предупреждение|DoMessageBox|Сообщить|Message|ОчиститьОкноСообщений|ClearMessageWindow|Состояние|Status|Сигнал|Beep|Разм|Dim|ЗаголовокСистемы|SystemCaption|ИмяКомпьютера|ComputerName|ИмяПользователя|UserName|ПолноеИмяПользователя|UserFullName|НазваниеНабораПрав|RightName|ПравоДоступа|AccessRight|НазваниеИнтерфейса|UserInterfaceName|КаталогПользователя|UserDir|КаталогИБ|IBDir|КаталогПрограммы|BinDir|КаталогВременныхФайлов|TempFilesDir|КаталогБазыДанных|DBDir|МонопольныйРежим|ExclusiveMode|ОсновнойЯзык|GeneralLanguage|НачатьТранзакцию|BeginTransaction|ЗафиксироватьТранзакцию|CommitTransaсtion|ОтменитьТранзакцию|RollBackTransaction|ЗначениеВСтрокуВнутр|ValueToStringInternal|ЗначениеИзСтрокиВнутр|ValueFromStringInternal|ЗначениеВСтроку|ValueToString|ЗначениеИзСтроки|ValueFromString|ЗначениеВФайл|ValueToFile|ЗначениеИзФайла|ValueFromFile|СохранитьЗначение|SaveValue|ВосстановитьЗначение|RestoreValue|ПолучитьТА|GetAP|ПолучитьДатуТА|GetDateOfAP|ПолучитьВремяТА|GetTimeOfAP|ПолучитьДокументТА|GetDocOfAP|ПолучитьПозициюТА|GetAPPosition|УстановитьТАна|SetAPToBeg|УстановитьТАпо|SetAPToEnd|РассчитатьРегистрыНа|CalcRegsOnBeg|РассчитатьРегистрыПо|CalcRegsOnEnd|ВыбранныйПланСчетов|DefaultChartOfAccounts|ОсновнойПланСчетов|MainChartOfAccounts|СчетПоКоду|AccountByCode|НачалоПериодаБИ|BeginOfPeriodBT|КонецПериодаБИ|EndOfPeriodBT|КонецРассчитанногоПериодаБИ|EndOfCalculatedPeriodBT|МаксимальноеКоличествоСубконто|MaxSubcontoCount|НазначитьСчет|SetAccount|ВвестиПланСчетов|InputChartOfAccounts|ВвестиВидСубконто|InputSubcontoKind|ОсновнойЖурналРасчетов|BasicCalcJournal|ТипЗначения|ValueType|ТипЗначенияСтр|ValueTypeStr|ПустоеЗначение|EmptyValue|ПолучитьПустоеЗначение|GetEmptyValue|НазначитьВид|SetKind|ПрефиксАвтоНумерации|AutoNumPrefix|ПолучитьЗначенияОтбора|GetSelectionValues|ЗаписьЖурналаРегистрации|LogMessageWrite|КомандаСистемы|System|ЗапуститьПриложение|RunApp|ЗавершитьРаботуСистемы|ExitSystem|НайтиПомеченныеНаУдаление|FindMarkedForDelete|НайтиСсылки|FindReferences|УдалитьОбъекты|DeleteObjects|ОбработкаОжидания|IdleProcessing|ОткрытьФорму|OpenForm|ОткрытьФормуМодально|OpenFormModal|_IdToStr|_StrToID|_GetPerformanceCounter|Календари|Calendars|Метаданные|Metadata|Последовательность|Sequence|ПравилоПерерасчета|RecalculationRule)$/i


var reg_words_1C_v8=/^(Если|If|Тогда|Then|ИначеЕсли|ElsIf|Иначе|Else|КонецЕсли|EndIf|Цикл|Do|Для|For|По|To|Пока|While|КонецЦикла|EndDo|Процедура|Procedure|КонецПроцедуры|EndProcedure|Функция|Function|КонецФункции|EndFunction|Перем|Var|Экспорт|Export|Перейти|Goto|И|And|Или|Or|Не|Not|Знач|Val|Прервать|Break|Продолжить|Continue|Возврат|Return|Попытка|Try|Исключение|Except|КонецПопытки|EndTry|ВызватьИсключение|Raise|Из|In|Каждого|Each|Истина|True|Ложь|False|Null|Неопределено|Undefined|Новый|New)$/i

var reg_words_1C_v8_amp_dc=/^(НаКлиенте|НаСервере|НаСервереБезКонтекста|НаКлиентеНаСервере|НаКлиентеНаСервереБезКонтекста)(\s+)?$/i

var reg_words_1C_v8_amp_pre=/^(Если|Иначе|ИначеЕсли|КонецЕсли)/i

///////////////////////////////////////////////////////////////////////
//Окрашивает слово 1С
function colorWord(s, version){
	var kw=0;
    if(version==7){
		kw=reg_words_1C_77.test(s);
	}else if(version==8){
		kw=reg_words_1C_v8.test(s);
	}

	if(kw){
		//alert('colorWords1: '+s);
		return '<font color=red>'+s+'</font>';
	}else{
		//alert('colorWords2: '+s);
		return '<font color=blue>'+s+'</font>';
	}
}

///////////////////////////////////////////////////////////////////////
//Окрашивает код 1С, который не является словами
function colorNoWords(s){
	//alert('colorNoWords: '+s);
	s=''+s;
   	s=s.replace( /([\.\;\/\+\-\*\/\%\=\(\)\?\[\]\,]+)/g, "<font color=red>$1</font>");

	//alert('colorNoWords_: '+s);
	return s;
}

///////////////////////////////////////////////////////////////////////
//Окрашивает код 1С, который не включает комментарии, текстовые строки, даты, символы вида &gt;
function colorCode1C(s, version){
	//alert('colorCode1C: '+s);
	if(s.search(/[А-Яа-яA-Za-z_][А-Яа-яA-Za-z_0-9]*/)==-1){
		return colorNoWords(s);
	}

	var reg=/[А-Яа-яA-Za-z_][А-Яа-яA-Za-z_0-9]*/g
	var res='';
	s=' '+s+' ';
	var arr_w=s.match(reg);//Все слова 1С
	var arr_n=s.split(reg); //Все последовательности, отличные от слов

	for(var i=0; i<arr_w.length; i++){
		var n=arr_n[i];
		var w=arr_w[i];
		if(i==0) n=n.substr(1, n.length-1);//Убираем левый пробел
		res+=colorNoWords(n)+colorWord(w, version);
	}
	n=arr_n[arr_w.length];
	//alert('lastn='+n);
	n=n.substr(0, n.length-1);//Убираем правый пробел
	//alert('lastn_='+n);
	res+=colorNoWords(n);

	//alert('colorCode1C_: '+res);
	return res;
}

///////////////////////////////////////////////////////////////////////
//Окрашивает строку кода 1С
function colorString1C(s, version){
	var res='';
	var el='';
	var c='';
	var ok=0;

	if(s==''){
	//Вырожденный случай - пустая строка
		return '';
	}

	//window.status=s;
	//if(s.search(/Процедура/)!=-1){
	//   alert(s);
	//}

	s=s.replace(/\t/g, "    ");

	for(var i=0; i<s.length; i++){
		c=s.charAt(i);
		if(c>" "){
			ok=1;
			break;
		}else{
			el=el+c;
		}
	}
	res+=el;
	if(ok==0){
	//Вырожденный случай - в строке только пробелы
		return res;
	}

	s=s.replace(/\&quot\;/gi, '"');
	s=s.replace(/\&apos\;/gi, "'");
	s=s.replace(/\>\;/g, "&gt;");
	s=s.replace(/\<\;/g, "&lt;");

	if(c=="|"){
		//Строковый литерал, который начинается символом | ("труба") в начале строки
		p=s.indexOf('"', i+1);
		if(p==-1){
			//Строковый литерал, который начинается символом "труба" и не заканчивается в этой строке
			res+=s.substr(i);
			return res;
		} else {
			//Нашли закрывающую кавычку - теперь найденный строковый литерал надо поместить в массив
			res+=s.substr(i, p-i+1);
			i=p+1;
		}
	}else if(c=="#"){
		//Директива препроцессора
		var dpre = reg_words_1C_v8_amp_pre.test(s.substr(i+1));
		if (dpre) {
			res += '<font color=brown>'+s.substr(i)+'</font>';
		} else {
			res+=s.substr(i);
		}
		return res;
	}else if(c=="&"){
		var reg_words_amp = /^\&amp\;/i
		var marp = 1;

		if (reg_words_amp.test(s.substr(i))) {
			marp = 5;
		}

		var dc = reg_words_1C_v8_amp_dc.test(s.substr(i+marp));

		if (dc !== false) {
			res += '<font color=brown>'+s.substr(i)+'</font>';
			return res;
		}
	}

	while(i<s.length){

	//Теперь i указывает на позицию, которая заведомо не является строковым литералом или директивой
		var pstr=s.indexOf('"', i);
		var pcom=s.indexOf('//', i);
		var pdat=s.indexOf("'", i);
		var pspec=s.indexOf("&", i); //последовательности наподобие &lt; &gt; &amp; и т.д.

		//Выявляем наименьшее неотрицательное значение, остальным присваиваем -1

		if(pcom!=-1 && pdat!=-1){
			if(pcom<pdat){pdat=-1} else {pcom=-1};
		}
		if(pcom!=-1 && pstr!=-1){
			if(pcom<pstr){pstr=-1} else {pcom=-1};
		}
		if(pcom!=-1 && pspec!=-1){
			if(pcom<pspec){pspec=-1} else {pcom=-1};
		}

		if(pdat!=-1 && pstr!=-1){
			if(pdat<pstr){pstr=-1} else {pdat=-1};
		}
		if(pdat!=-1 && pspec!=-1){
			if(pdat<pspec){pspec=-1} else {pdat=-1};
		}

		if(pstr!=-1 && pspec!=-1){
			if(pstr<pspec){pspec=-1} else {pstr=-1};
		}

		if(pcom!=-1){
			//Обнаружен комментарий
			//строка, предш. комментарию
			res+=colorCode1C(s.substr(i, pcom-i), version);
			//сам комментарий
			res+='<font color=green>'+s.substr(pcom)+'</font>';
			return res;
		} else if(pstr!=-1){
			//Найден строковый литерал
			//строка, предш. литералу
			res+=colorCode1C(s.substr(i, pstr-i), version);
			var p=s.indexOf('"', pstr+1);
			if(p==-1){
				//Строковый литерал, который не заканчивается в этой строке
				res+=s.substr(pstr);
				return res;
			} else {
				//Нашли закрывающую кавычку
				el=s.substr(pstr, p-pstr+1);
				//alert(el);
				res+=el;
				i=p+1;
			}
		} else if(pdat!=-1){
			//Найден литерал даты, например, '01.01.2008'
			res+=colorCode1C(s.substr(i, pdat-i), version);//строка, предш. литералу
			var p=s.indexOf("'", pdat+1);
			if(p==-1){
				//Ошибочный литерал даты, который не завершается на этой строке
				res+=s.substr(pdat);
				return res;
			} else {
				//Нашли закрывающую кавычку
				res+=s.substr(pdat, p-pdat+1);
				i=p+1;
			}
		} else if(pspec!=-1){
			res+=colorCode1C(s.substr(i, pspec-i), version);//строка, предш. литералу

			var p=s.indexOf(";", pspec+1);

			//Отследим ошибочные случаи
			var p1=s.indexOf(" ", pspec+1);
			if(p1!=-1){
				if(p1<p) p=p1;
			}
			var p1=s.indexOf("\t", pspec+1);
			if(p1!=-1){
				if(p1<p) p=p1;
			}

			if(p==-1){
				//Ошибочный литерал
				el=s.substr(i);
				arr.push(el);
				return arr;
			} else {
				//Нашли закрывающий ; или (при ошибке) пробел
				el=s.substr(pspec, p-pspec+1);
				if(el=='&gt;' || el=='&lt;'){
					res+='<font color=red>'+el+'</font>';
				}else{
					res+=el;
				}
				i=p+1;
			}
		} else {
			//Не найден ни строковый литерал, ни комментарий, ни дата, ни спецсимвол
			res+=colorCode1C(s.substr(i), version);
			return res;
		}

    }
	return res;
}

///////////////////////////////////////////////////////////////////////
function colorAllCode1C(s, version){


	var arr1=s.split("\n");
	var res='';
	for (var i=0; i<arr1.length; i++){
		var s1=arr1[i];
		//alert(s1);
		res+=colorString1C(s1, version)+"\n";
	}
	return res;
}

///////////////////////////////////////////////////////////////////////
function colorObj(obj){
	if(!obj) return;
	var attr=obj.getAttribute("LANG");
    if($(obj).hasClass("hightlight-1c")){
        $(obj).find("br").remove();
    }
	if(attr=="1Cv77"){

		var s=obj.innerHTML;
		obj.innerHTML="<PRE>"+colorAllCode1C(s,7)+"</PRE>";

	}else if(attr=="1Cv8" || $(obj).hasClass("hightlight-1c")){
		var s=obj.innerHTML;
		obj.innerHTML="<PRE>"+colorAllCode1C(s,8)+"</PRE>";
	}
}


///////////////////////////////////////////////////////////////////////
//Основной код функции окраски кода 1С

	if (highlight1c_inited === false) {
		if(prm_id==""){
			var arr = document.getElementsByTagName('PRE');
			for(var i=0; i<arr.length; i++){
				var obj=arr[i];
				colorObj(obj);
			}
		} else {
			var obj=document.getElementById(prm_id);
			colorObj(obj);
		}
		highlight1c_inited = true;
	}
}

/* End */
;
; /* Start:/bitrix/templates/.default/components/infostart/public.detail.new/adaptive/script.js*/
$(document).ready(function () {
	$('.detail-public-wrap').on('click', '.AddToBlock', function (){
		var bid = $(this).attr('data-bid');
		$.ajax({
			url: '/bitrix/ajax/kurs_blocks.php?ACTION=ADD_TO_FREE_BLOCK',
			type: 'get',
			data: {BLOCK_ID: bid, sessid: BX.bitrix_sessid()},
			success: function(arResult){
				if(arResult.ERROR){
					$.smallBox({
						title : "Ошибка!",
						content : arResult.ERROR,
						color : "#C46A69",
						icon : "fa fa-warning shake animated",
						timeout : 10000
					});
				}else{
					$.smallBox({
						title : "Спасибо!",
						content : "Вы успешно зпаписаны.",
						color : "#659265",
						icon : "fa fa-check fadeInRight animated",
						timeout : 4000
					});
				}
			}
		});
		return false;
	});
	window.partform_sended = false;
	$(document).on("click", "#btn-submit-partform", function() {
		if (window.partform_sended)
			return false;
		window.partform_sended = true;
		$('#form-request-wrap-iwp').submit();
		return false;
	});
    $("#form-request-wrap-iwp").submit(function(){
        $("#form-request-wrap-iwp input, #form-request-wrap-iwp textarea").css('border-color','');
        formData = new FormData($("#form-request-wrap-iwp").get(0));
        $.ajax({
            url: '/ajax/send_landing_form.php?ACTION=SEND_FORM&RESPONS=IWP-REQUEST',
            type: 'post',
            contentType: false,
            processData: false,
            data: formData,
            dataType: 'json',
            success: function(arResult){
                if(arResult.ERROR){
                    $("#form-request-wrap-iwp input[name="+arResult.FIELD+"], #form-request-wrap-iwp textarea[name="+arResult.FIELD+"]").css('border-color','#e4aeae');
                }else{
                    $(".send-request-body .form-wrap").hide();
                    $(".send-request-body .success-message").show().find('p.message-success').append('Ваше обращение зарегистрировано и ему присвоен номер <b>'+arResult.OK+'</b>. Дальнейшие инструкции отправлены на ваш email адрес.');
                }
			},
			complete: function () {
				window.partform_sended = false;
			}
        });
        return false;
    });
    $(".scroll-to").click(function() {
        $('html, body').animate({
            scrollTop: $("#tbl-prods").offset().top
        }, 1000);
        return;
    });
    $(".open-modal-feedback").click(function () {
        $("#form-request-wrap-iwp [name=PRODUCT_NAME]").val($("h1.main-title").text());
        $("#form-request-wrap-iwp [name=PUB_ID]").val($("#id").val());
        $("#form-request-wrap-iwp textarea").val($("#form-request-wrap-iwp textarea").val()+($("#form-request-wrap-iwp textarea").val().length>1?'\r':'')+$(this).parents('tr').children("td.name").children(".posts_txt").text());
        $("[data-target='.send-request-form']").click();
        return false;
    });


	window.fileform_sended = false;
	$(document).on("click", "#btn-submit-fileform", function() {
		if (window.fileform_sended)
			return false;
		window.fileform_sended = true;
		$('#form-request-wrap-file').submit();
		return false;
	});
	$("#form-request-wrap-file").submit(function(){
		$("#form-request-wrap-file input, #form-request-wrap-file textarea").css('border-color','');
		formData = new FormData($("#form-request-wrap-file").get(0));
		$.ajax({
			url: '/ajax/send_landing_form.php?ACTION=SEND_FORM&DETAIL_PAGE=Y&RESPONS=landing-gifts',
			type: 'post',
			contentType: false,
			processData: false,
			data: formData,
			dataType: 'json',
			success: function(arResult){
				if(arResult.ERROR){
					$(".send-request-form-file input[name="+arResult.FIELD+"], #form-request-wrap-file textarea[name="+arResult.FIELD+"]").css('border-color','#e4aeae');
				}else{
					$(".send-request-form-file .send-request-body .form-wrap").hide();
					$(".send-request-form-file .send-request-body .success-message").show().find('p.message-success').append('Ваше обращение зарегистрировано и ему присвоен номер <b>'+arResult.OK+'</b>. Дальнейшие инструкции отправлены на ваш email адрес.');
				}
			},
			complete: function () {
				window.fileform_sended = false;
			}
		});
		return false;
	});

	$(".open-modal-feedback-file").on("click", function () {
		var NewName = $(this).parents('tr').find("td.name .posts_txt").text();
		if(NewName.length > 0)
			$("#form-request-wrap-file [name=PRODUCT_NAME]").val(NewName);

		var addText = $("#form-request-wrap-file textarea").val();
		if ($("#form-request-wrap-file textarea").val().length>1)
			addText = addText + '\r';
		$("#form-request-wrap-file textarea").val(addText + NewName);
		$(".send-request-form-file").modal();
		return false;
	});
});


var ActiveDwonloadButton = false;
function CheckDownloadResult(data){
    if(data.search(/\<iframe/) > -1){
        $("#DownloadFileModal, .modal-backdrop").remove();
        $('body').append(data);
        $(ActiveDwonloadButton).removeClass("btn-default btn-default btn-default btn-default").addClass("btn-default disabled").attr('href','javascript:void(0);').find(".button-text").html("Отправлено на email");
        $('body').removeClass("modal-open");
        return true;
    }

    return false;
}
$(document).ready(function(){
    $(document).ready(function () {
        $(".download-ajax").click(function () {
            ActiveDwonloadButton = $(this);
            $("#DownloadFileModal").remove();
            var href = $(this).attr('href').replace('/public/download.php',"/bitrix/ajax/download_page.php");
            $.get(href,function(data){
                $(data).modal();
                CheckDownloadResult(data);
            });
            return false;
        });
    });
    $(document).on('click','#DownloadFileModal a',function(e){
        if(!$(this).attr("data-noajax")) {
            var href = $(this).attr('href');
            $.get(href, function (data) {
                $("#DownloadFileModal .modal-content").html($(data).find(".modal-content"));
                CheckDownloadResult(data);

            });
            return false;
        }

    });
    $(document).on('submit','#DownloadFileModal form',function(e){
        var FormData = $("#DownloadFileModal form").serialize()
        var href = $("#DownloadFileModal #CurrentPage").val()+'&'+FormData;
        $.get(href,function(data){
            $("#DownloadFileModal .modal-content").html($(data).find(".modal-content"));
            CheckDownloadResult(data);
        });
        return false;
    });


    $(".rate-need-auth").click(function(){
        var backurl = $(this).attr("data-backurl");
        $.smallBox({
            title : "Ошибка!",
            content : "Необходимо авторизоваться для использования данного функционала. Хотите сделать это прямо сейчас?<p class='text-align-right'><a href='/auth/?backurl="+backurl+"' class='btn btn-default btn-sm'>Да</a> <a href='javascript:void(0);' class='btn btn-default btn-sm'>Нет</a></p>",
            color : "#C46A69",
            icon : "fa fa-warning shake animated",
            timeout : 10000
        });

        e.preventDefault();
        return false;
    });
    $(".rate-personal-public").click(function(){
        var backurl = $(this).attr("data-backurl");
        $.smallBox({
            title : "Ошибка!",
            content : "Вы не можете проголосовать за свою публикацию.",
            color : "#C46A69",
            icon : "fa fa-warning shake animated",
            timeout : 10000
        });

        e.preventDefault();
        return false;
    });

	$(".price-size").hover(function(){
		$(this).next(".cont_none").show();
	},function(){
		$(this).next(".cont_none").hide();
		
	});
	$('#button-copy-link').click(function(event) {
        $('#copy-link-block').toggle();
		$('#copylink').select().focus();
    });
	$('#copylink').click(function() {
		$(this).select();
    });
	$('#copylinkhtml').click(function() {
		$(this).select();
    });	
    $(document).click(function (event) {
        if ($(event.target).closest('#copy-link-block').length == 0 && $(event.target).attr('id') != 'button-copy-link') {
            $('#copy-link-block').hide();
        }
    });

    $(".show-all-props").click(function(){
        $(".properties.hidden2").slideToggle();
        var NewVal = $(this).html();
        var OldVal = $(this).attr("data-text");
        $(this).html(OldVal).attr("data-text",NewVal);
    });
    $(".other-public-pagen > a.show").click(function(){
        $(".other-public-wrap > a.hidden2").css('display', 'inline-block').hide().slice(0, 3).slideDown("fast").removeClass("hidden2");
        if($(".other-public-wrap > a.hidden2").length <= 0){
            $(this).parent().hide();
        }
    });

    $(".screen-additional li").click(function(){
        $(".screen-wrap .sreen-main").css("background-image","url('"+$(this).attr("data-bigurl")+"')");
        $(".screen-wrap .screen-main-zoom").attr({"data-nn":$(this).attr("data-nn")});
    });
    $(".screen-main-zoom").click(function(){
        var screens  = new Array();
        $(".gallery-image").each(function(){
            href = $(this).attr("href");
            title = $(this).attr("title");
            screens.push({'href': href, 'title': title})
        });
        var Count = $(this).attr("data-nn");
        $.fancybox(screens,{
            index		: Count,
            prevEffect 	: 'elastic',
            nextEffect 	: 'elastic',
            nextClick 	: true,
            padding		: 0,
            closeBtn  	: true,
            helpers 	: {
                thumbs : {
                    width  : 100,
                    height : 100
                }
            }
        });
    });

    $(".open-demo").click(function(){
        $.fancybox({type: 'iframe',href:$(this).attr("data-url"),padding:0,width:'90%',height: '90%', minWidth:1000, minHeight: 600,});
    });

    //$("#requisition-demo-btn").modal();

    $(".open-edit-box").click(function(){
        $(".edit-props-wrap").hide();
        $(this).prev(".edit-props-wrap").fadeToggle();
        $(this).hide();
    });

    $(".save-props-pub").click(function(){
        var name = $(this).prev("select").attr("name");
        var stringToWrap = '';
        var stringToEdit = '';
        $(this).prev("select").children("option:selected").each(function(){
            switch (name){
                case 'SECTION_ID':
                    stringToWrap += '<a href="/public/?rubric='+$(this).attr("value")+'">'+$(this).html().replace(/ \. /g,'')+'</a>,<br/> ';
                    break
                case 'checked':
                    stringToWrap += '<a>'+$(this).html()+'</a>';
                    break
                default:
                    stringToWrap += '<a href="/public/?'+ name +'['+$(this).attr("value")+']='+$(this).attr("value")+'">'+$(this).html()+'</a>,<br/> ';
            }
            stringToEdit += $(this).attr("value")+',';
        });
        $.get("/ajax/edit_prop.php?id="+$("#id").val()+"&sessid="+$("#ssid").val()+"&code="+name+"&val="+stringToEdit+"&type=pub",function(){});
        $(this).parent().prev(".props-list-wrap").html(stringToWrap);
        $(this).parent(".edit-props-wrap").next(".open-edit-box").show();
        $(this).parent(".edit-props-wrap").fadeOut();
    });

    $('#class_not_mater').click(function(){
        var newVal = {};
        $.each($('.edit-props-wrap option[data-code=no]'), function(){
            if (!$(this).parent().val()) {
                $(this).parent().val($(this).val());
                name = $(this).parent().attr('name');
                if(name == "CONFIG"){
                    stringToWrap = '<a href="/public/?class_'+ name +'['+$(this).val()+']='+$(this).val()+'">'+$(this).html()+'</a>';
                }else{
                    stringToWrap = '<a href="/public/?'+ name +'['+$(this).val()+']='+$(this).val()+'">'+$(this).html()+'</a>';
                }
                $(this).parent().parent().prev(".props-list-wrap").html(stringToWrap);
                newVal[name] = $(this).val();
            }
        });
        $.get('/ajax/edit_prop.php', {
            id: $("#id").val(),
            sessid: $("#ssid").val(),
            codeAr: newVal
        });
        $(this).parent("li").remove();
        return false;
    });

    $(".slide-to-comment").click(function(){
        $('html, body').animate({scrollTop: $(".comments-title").offset().top - 48}, 500);
		return false;
    });
    $(".down-to-comment").click(function(){
        $('html, body').animate({scrollTop: $("#com0").offset().top - 48}, 500);
        return false;
    });
    $(".down-public-link").click(function(){
        $('html, body').animate({scrollTop: $("#REPLIER").offset().top - 48}, 500);
		return false;
    });

    var ButtLock = false;
    $(".soc-butt-infostart.auth").click(function(){
        if(!ButtLock){
            if($(this).hasClass("rated")){
                $.get("/ajax/pub_rate.php?id="+$("#id").val()+"&sessid="+$("#ssid").val()+"&type=m",function(answer){
                    $(".soc-butt-infostart").removeClass("rated");
                    if(answer == "ok"){
                        $(".open-rating-table").html(parseInt($(".open-rating-table").html(),10)-1);
						$.smallBox({
                                title : "Спасибо!",
                                content : "Ваш голос отменен.",
                                color : "#659265",
                                icon : "fa fa-check fadeInRight animated",
                                timeout : 4000
                            });
                    } else {
					
						$.smallBox({
							title : "Ошибка!",
							content : answer,
							color : "#C46A69",
							icon : "fa fa-warning fadeInRight animated",
							timeout : 4000
						});
					
					
					}
                    ButtLock = false;
                });
            }else{
                $.get("/ajax/pub_rate.php?id="+$("#id").val()+"&sessid="+$("#ssid").val()+"&type=p",function(answer){
                    if(answer == "ok"){
                        if(!$(".soc-butt-infostart").hasClass("rated")){
                            $(".open-rating-table").html(parseInt($(".open-rating-table").html(),10)+1);
							$.smallBox({
                                title : "Спасибо!",
                                content : "Ваш голос принят.",
                                color : "#659265",
                                icon : "fa fa-check fadeInRight animated",
                                timeout : 4000
                            });
                        }
                        $(".soc-butt-infostart").addClass("rated");
                    } else {
					
						$.smallBox({
							title : "Ошибка!",
							content : answer,
							color : "#C46A69",
							icon : "fa fa-warning fadeInRight animated",
							timeout : 4000
						});
					}
                    ButtLock = false;
                });
            }
        }
        ButtLock = true;
    });

    $(".soc-btn-unrate.auth").click(function(){
        if(!ButtLock){
            $.get("/ajax/pub_rate.php?id="+$("#id").val()+"&sessid="+$("#ssid").val()+"&type=m",function(answer){
                    
                    if(answer == "ok"){
                        $(".open-rating-table").html(parseInt($(".open-rating-table").html(),10)-1);
						$(".soc-butt-infostart").removeClass("rated");
						$.smallBox({
                            title : "Спасибо!",
                            content : "Ваш отрицательный голос принят.",
                            color : "#659265",
                            icon : "fa fa-check fadeInRight animated",
                            timeout : 4000
                        });
						
					} else {
					
						$.smallBox({
							title : "Ошибка!",
							content : answer,
							color : "#C46A69",
							icon : "fa fa-warning fadeInRight animated",
							timeout : 4000
						});
					
					}
					
                    ButtLock = false;
            });
        }
        ButtLock = true;
    });	
	
	
	
	
    $(".open-share").click(function(){
        var w = 640;
        var h = 480;
        var left = Number((screen.width/2)-(w/2));
        var tops = Number((screen.height/2)-(h/2));
        window.open(this.href, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+tops+', left='+left);
        return false;
    });

    $(".send-message").click(function(){
        if (BX.IM){
            BXIM.openMessenger(parseInt($(this).attr("data-uid"),10));
        }
        return false;
    });
    $(".open-showed-table").click(function(){
        $.fancybox({type: 'iframe',href:'/ajax/public_tables.php?id='+$("#id").val()+"&sessid="+$("#ssid").val()+"&action=showed",padding:0});
        return false;
    });
    $(".open-downloads-table").click(function(){
        $.fancybox({type: 'iframe',href:'/ajax/public_tables.php?id='+$("#id").val()+"&sessid="+$("#ssid").val()+"&fid="+$(this).attr("data-fid")+"&action=downloads",padding:0});
        return false;
    });
    $(".open-rating-table").click(function(){
        $.fancybox({type: 'iframe',href:'/ajax/public_tables.php?id='+$("#id").val()+"&sessid="+$("#ssid").val()+"&action=rating",padding:0});
        return false;
    });
    /*--Menu Handlers--*/
    $(document).on("click", "a.invite-to-friends", function() {
        $.get("/ajax/friends.php?id="+$(this).attr("data-uid")+"&sessid="+$("#ssid").val()+"&type=a");
        $(this).html("Запрос дружбы").removeClass("invite-to-friends").addClass("delete-from-friends");
        return false;
    });

    $(document).on("click", "a.delete-from-friends", function() {
        $.get("/ajax/friends.php?id="+$(this).attr("data-uid")+"&sessid="+$("#ssid").val()+"&type=d");
        $(this).html("+ Добавить в друзья").removeClass("delete-from-friends").addClass("invite-to-friends");
        return false;
    });

    $(document).on("click", "a.add-expert-choose", function() {
        $.get("/ajax/edit_public.php?id="+$("#id").val()+"&sessid="+$("#ssid").val()+"&action=add_expert_choose");
        $(this).html("Убрать выбор экспертов").removeClass("add-expert-choose").addClass("del-expert-choose");
    });

    $(document).on("click", "a.del-expert-choose", function() {
        $.get("/ajax/edit_public.php?id="+$("#id").val()+"&sessid="+$("#ssid").val()+"&action=del_expert_choose");
        $(this).html("Выставить выбор экспертов").removeClass("del-expert-choose").addClass("add-expert-choose");
    });

    $(document).on("click", "a.set-public-m", function() {
        $.get("/ajax/edit_public.php?id="+$("#id").val()+"&sessid="+$("#ssid").val()+"&action=set_public_m");
        $(this).html("Опубликовать").removeClass("set-public-m").addClass("set-public-y");
    });

    $(document).on("click", "a.set-public-y", function() {
        $.get("/ajax/edit_public.php?id="+$("#id").val()+"&sessid="+$("#ssid").val()+"&action=set_public_y");
        $(this).html("Отправить на модерирование").removeClass("set-public-y").addClass("set-public-m");
    });

    $(document).on("click", "a.send-to-m", function() {
        $.get("/ajax/edit_public.php?id="+$("#id").val()+"&sessid="+$("#ssid").val()+"&action=send_to_m");
        $(this).html("Отправлено на модерацию").removeClass("send-to-m").removeAttr("href");
    });

    $(document).on("click", "a.send-to-h", function() {
        $.get("/ajax/edit_public.php?id="+$("#id").val()+"&sessid="+$("#ssid").val()+"&action=send_to_h");
        $(this).html("Переведено в черновик").removeClass("send-to-h").removeAttr("href");
    });
    $(document).on("click", "a.send-to-d", function() {
        $.SmartMessageBox({
            title : "Внимание!",
            content : "Публикация будет удалена, Вы хотите продолжить?",
            buttons : '[Нет][Да]'
        }, function(ButtonPressed) {
            if (ButtonPressed === "Да") {
                $.get("/ajax/edit_public.php?id="+$("#id").val()+"&sessid="+$("#ssid").val()+"&action=send_to_d",function(){
                    location.reload();
                });
            }
            if (ButtonPressed === "Нет") {

            }

        });
        return false;



    });

    // s11 2016.05.10
    var ButtLock = false;
    $(document).on("click", "a.up-to-sm", function() {
        if (!ButtLock) {
            $.SmartMessageBox({
                title: "Внимание!",
                content: "С вашего счета будет списано 10Sm, Вы хотите продолжить?",
                buttons: '[Нет][Да]'
            }, function (ButtonPressed) {
                if (ButtonPressed === "Да") {
                    if (!ButtLock) {
                        ButtLock = true;
                        $.get("/ajax/edit_public.php?id=" + $("#id").val() + "&sessid=" + $("#ssid").val() + "&action=up_to_sm", function (data) {
                            if (data.length >= 2) {
                                $.smallBox({
                                    title: "Спасибо!",
                                    content: " <i>Публикация успешно поднята.</i>",
                                    color: "#659265",
                                    icon: "fa fa-check fadeInRight animated",
                                    timeout: 4000
                                });
                                setTimeout(function () {
                                    ButtLock = false;
                                }, 4000)
                            } else {
                                $.smallBox({
                                    title: "Ошибка!",
                                    content: "<i class='fa fa-clock-o'></i> <i>На вашем счету недостаточно $m для поднятия.</i>",
                                    color: "#C46A69",
                                    icon: "fa fa-minus-circle fadeInRight animated",
                                    timeout: 4000
                                })
                                setTimeout(function () {
                                    ButtLock = false;
                                }, 4000)
                            }
                        });
                    }
                }
                if (ButtonPressed === "Нет") {

                }
            });
        }
        return false;
    });

    $(document).on("click", "a.color-public", function() {
        if (!ButtLock) {
            $.SmartMessageBox({
                title: "Внимание!",
                content: "Публикация будет выделена в списках в течении 7 дней и с вашего счета будет списано 10Sm. Вы хотите продолжить?",
                buttons: '[Нет][Да]'
            }, function (ButtonPressed) {
                if (ButtonPressed === "Да") {
                    if (!ButtLock) {
                        ButtLock = true;
                        $.get("/ajax/edit_public.php?id=" + $("#id").val() + "&sessid=" + $("#ssid").val() + "&action=color", function (data) {
                            if (data.length >= 2) {
                                $.smallBox({
                                    title: "Спасибо!",
                                    content: " <i>Публикация успешно выделена.</i>",
                                    color: "#659265",
                                    icon: "fa fa-check fadeInRight animated",
                                    timeout: 4000
                                });
                                setTimeout(function () {
                                    ButtLock = false;
                                }, 4000)
                            } else {
                                $.smallBox({
                                    title: "Ошибка!",
                                    content: "<i class='fa fa-clock-o'></i> <i>На вашем счету недостаточно $m.</i>",
                                    color: "#C46A69",
                                    icon: "fa fa-minus-circle fadeInRight animated",
                                    timeout: 4000
                                });
                                setTimeout(function () {
                                    ButtLock = false;
                                }, 4000)
                            }
                        });

                    }
                }
                if (ButtonPressed === "Нет") {

                }
            });
        }
        return false;
    });

	window.demoform_sended = false;
	$(document).on("click", "#btn-submit-demoform", function() {
		if (window.demoform_sended)
			return false;
		window.demoform_sended = true;
		$('#form-request-wrap').submit();
		return false;
	});
    $("#form-request-wrap").submit(function(){
        $("#form-request-wrap input, #form-request-wrap textarea").css('border-color','');
        $("#form-request-wrap input, #form-request-wrap textarea").css('border-width','1');
        formData = new FormData($("#form-request-wrap").get(0));
        $.ajax({
            url: '/ajax/send_landing_form.php?ACTION=SEND_FORM&RESPONS=requisition_demo',
            type: 'post',
            contentType: false,
            processData: false,
            data: formData,
            dataType: 'json',
            success: function(arResult){
                if(arResult.ERROR){
                    $("#form-request-wrap input[name="+arResult.FIELD+"], #form-request-wrap textarea[name="+arResult.FIELD+"]").css('border-color','#e4aeae');
                    $("#form-request-wrap input[name="+arResult.FIELD+"], #form-request-wrap textarea[name="+arResult.FIELD+"]").css('border-width','3');
                }else{
                    $(".send-request-body .form-wrap").hide();
                    $(".send-request-body .success-message").show().find('p.message-success').append('Ваше обращение зарегистрировано и ему присвоен номер <b>'+arResult.OK+'</b>. Дальнейшие инструкции отправлены на ваш email адрес.');
                }
            },
			complete: function () {
				window.demoform_sended = false;
			}
        });
        return false;
    });

    highlight1c('');


    // s11 2016.06.15
    $(window).load(function() {
        var hash = window.location.hash.substr(1);
        var target = $("[name='"+hash+"']");
        if (target.length === 0){
            target = $("#"+hash);
        }
        if (target.length !== 0) {
            $(document).scrollTop(target.offset().top - 48);
        }
    });
    $('.main-wrap a[href^="#"][data-toggle!="collapse"]').on( "click", function() {
        if ($(this).attr('href').length > 1) {
            /*console.log('onclick anchor');*/
            window.location.hash = $(this).attr('href');
            var hash = $(this).attr('href').substr(1);
            var target = $("[name='" + hash + "']");
            if (target.length === 0) {
                target = $("#" + hash);
            }
            if (target.length !== 0) {
                $(document).scrollTop(target.offset().top - 48);
            }
            return false;
        }
    });

});

/*--Init carousel screens--*/
$.fn.cycle.defaults.autoSelector = '.screen-carousel';
$.fn.cycle.defaults.maxZ = 32;


$(document).on("change", "#AUTO_UP select", function() {
    var LIMIT = $(this).val();
    $.get("/ajax/edit_public.php?id=" + $("#id").val() + "&sessid=" + $("#ssid").val() + "&action=auto_up&period="+LIMIT, function (data) {
        if (data.length >= 2) {
            $.smallBox({
                title: "Спасибо!",
                content: " <i>Период автоподнятия успешно изменен.</i>",
                color: "#659265",
                icon: "fa fa-check fadeInRight animated",
                timeout: 4000
            });
        } else {
            $.smallBox({
                title: "Ошибка!",
                content: "<i class='fa fa-clock-o'></i> <i>Произошла ошибка при изменении периода автоподнятия, обновите страницу и повторите попытку снова.</i>",
                color: "#C46A69",
                icon: "fa fa-minus-circle fadeInRight animated",
                timeout: 4000
            });

        }
    });
});

$(function(){
    var topPos = $('.banner-vertical').offset().top;
    var topPosButt = $('.left-side .soc-butt-wrap').offset().top;
    $(window).scroll(function() {
        var top = $(document).scrollTop()+50,
            pip = $('#EndSroll').offset().top,
            height = $('.banner-vertical').outerHeight(),
            heightButt = $('.left-side .soc-butt-wrap').outerHeight();
        if (top > topPos && top < pip - height) {$('.banner-vertical').addClass('fixed').removeAttr("style");}
        else if (top > pip - height) {$('.banner-vertical').removeClass('fixed').css({'position':'absolute','bottom':'0'});}
        else {$('.banner-vertical').removeClass('fixed');}

        if (top > topPosButt && top < pip - heightButt) {$('.left-side .soc-butt-wrap').addClass('fixed').removeAttr("style");}
        else if (top > pip - heightButt) {$('.left-side .soc-butt-wrap').removeClass('fixed').css({'position':'absolute','bottom':'0'});}
        else {$('.left-side .soc-butt-wrap').removeClass('fixed');}
    });
});

/* End */
;
; /* Start:/bitrix/templates/.default/js/elementQuery.js*/
/*! elementQuery | Author: Tyson Matanich (http://matanich.com), 2013 | License: MIT */
(function (window, document, undefined) {
    // Enable strict mode
    "use strict";

    // Use Sizzle standalone or from jQuery
    var sizzle = window.Sizzle || jQuery.find;

    // Set the number of sizzle selectors to cache (default is 50)
    //sizzle.selectors.cacheLength = 50;

    var queryData = {};

    var cssRules = null;

    var setCssRules = function () {
        if (document.styleSheets[0]) {
            cssRules = (document.styleSheets[0].cssRules !== undefined) ? "cssRules" : "rules";
        }
    }

    var addQueryDataValue = function (selector, type, pair, number, value) {

        selector = trim(selector);

        if (selector != "") {
            var parts;
            if (!number && !value) {
                parts = /^([0-9]*.?[0-9]+)(px|em)$/.exec(pair)
                if (parts != null) {
                    number = Number(parts[1]);
                    if (number + "" != "NaN") {
                        value = parts[2];
                    }
                }
            }

            if (value) {
                // Compile the sizzle selector
                if (sizzle.compile) {
                    sizzle.compile(selector);
                }

                // Update the queryData object
                if (queryData[selector] === undefined) {
                    queryData[selector] = {};
                }
                if (queryData[selector][type] === undefined) {
                    queryData[selector][type] = {};
                }
                queryData[selector][type][pair] = [number, value];
            }
        }
    };

    var updateQueryData = function (data, doUpdate) {

        var i, j, k;
        for (i in data) {
            for (j in data[i]) {
                if (typeof data[i][j] == "string") {
                    addQueryDataValue(i, j, data[i][j]);
                }
                else if (typeof data[i][j] == "object") {
                    for (k = 0; k < data[i][j].length; k++) {
                        addQueryDataValue(i, j, data[i][j][k]);
                    }
                }
            }
        }

        if (doUpdate == true) {
            refresh();
        }
    };

    var processSelector = function (selectorText) {

        if (selectorText) {

            var regex = /(\[(min\-width|max\-width|min\-height|max\-height)\~\=(\'|\")([0-9]*.?[0-9]+)(px|em)(\'|\")\])(\[(min\-width|max\-width|min\-height|max\-height)\~\=(\'|\")([0-9]*.?[0-9]+)(px|em)(\'|\")\])?/gi;

            // Split out the full selectors separated by a comma ','
            var selectors = selectorText.split(",");
            var i, selector, result, number, prevIndex, k, tail, t;
            for (i = 0; i < selectors.length; i++) {

                selector = null;
                prevIndex = 0;
                k = 0;
                while (k == 0 || result != null) {
                    result = regex.exec(selectors[i]);
                    if (result != null) {

                        // result[2] = min-width|max-width|min-height|max-height
                        // result[4] = number
                        // result[5] = px|em
                        // result[7] = has another

                        // Ensure that it contains a valid numeric value to compare against
                        number = Number(result[4]);
                        if (number + "" != "NaN") {

                            if (selector == null) {
                                // New set: update the current selector
                                selector = selectors[i].substring(prevIndex, result.index);

                                // Append second half of the selector
                                tail = selectors[i].substring(result.index + result[1].length);
                                if (tail.length > 0) {
                                    
                                    t = tail.indexOf(" ");
                                    if (t != 0) {
                                        if (t > 0) {
                                            // Take only the current part
                                            tail = tail.substring(0, t);
                                        }

                                        // Remove any sibling element queries
                                        tail = tail.replace(/(\[(min\-width|max\-width|min\-height|max\-height)\~\=(\'|\")([0-9]*.?[0-9]+)(px|em)(\'|\")\])/gi, "");
                                        selector += tail;
                                    }
                                }
                            }

                            // Update the queryData object
                            addQueryDataValue(selector, result[2], result[4] + result[5], number, result[5]);
                        }

                        if (result[7] === undefined || result[7] == "") {
                            // Reached the end of the set
                            prevIndex = result.index + result[1].length;
                            selector = null;
                        }
                        else {
                            // Update result index to process next item in the set
                            regex.lastIndex = result.index + result[1].length;
                        }
                    }
                    k++;
                }
            }
        }
    };

    var processStyleSheet = function (styleSheet, force) {
        
        if (cssRules == null) {
            setCssRules();
        }
        if (styleSheet[cssRules] && styleSheet[cssRules].length > 0) {

            var ownerNode = styleSheet.ownerNode || styleSheet.owningElement;
            if (force || (ownerNode.getAttribute("data-elementquery-bypass") === null && ownerNode.getAttribute("data-elementquery-processed") === null)) {

                var i, j, rule;

                for (i = 0; i < styleSheet[cssRules].length; i++) {
                    rule = styleSheet[cssRules][i];

                    // Check nested rules in media queries etc
                    if (rule[cssRules] && rule[cssRules].length > 0) {
                        for (j = 0; j < rule[cssRules].length; j++) {
                            processSelector(rule[cssRules][j].selectorText);
                        }
                    }
                    else {
                        processSelector(rule.selectorText);
                    }
                }

                // Flag the style sheet as processed
                ownerNode.setAttribute("data-elementquery-processed", "");
            }
        }
    };

    // Refactor from jQuery.trim()
    var trim = function (text) {
        if (text == null) {
            return "";
        }
        else {
            var core_trim = "".trim;
            if (core_trim && !core_trim.call("\uFEFF\xA0")) {
                return core_trim.call(text);
            }
            else {
                return (text + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
            }
        }
    };

    // Refactor from jquery().addClass() and jquery().removeClass()
    var clean = function (element, attr) {
        // This expression is here for better compressibility
        var val = element.getAttribute(attr);
        return val ? (" " + val + " ").replace(/[\t\r\n]/g, " ") : " ";
    };

    // Refactor from jquery().addClass()
    var addTo = function (element, attr, value) {

        if (element.nodeType === 1) {
            var val = trim(value);
            if (val != "") {
                var cur = clean(element, attr);
                
                if (cur.indexOf(" " + val + " ") < 0) {
                    // Add the value if its not already there
                    element.setAttribute(attr, trim(cur + val));
                }
            }
        }
    };

    // Refactor from jquery().removeClass()
    var removeFrom = function (element, attr, value) {

        if (element.nodeType === 1) {
            var val = trim(value);
            if (val != "") {
                var cur = clean(element, attr);
                var updated = false;
                while (cur.indexOf(" " + val + " ") >= 0) {
                    // Remove the value
                    cur = cur.replace(" " + val + " ", " ");
                    updated = true;
                }
                if (updated) {
                    // Update the attribute
                    element.setAttribute(attr, trim(cur));
                }
            }
        }
    };

    var init = function () {

        // Process the style sheets
        var i;
        for (i = 0; i < document.styleSheets.length; i++) {
            processStyleSheet(document.styleSheets[i]);
        }

        refresh();
    }

    var refresh = function () {

        var i, ei, j, k, elements, element, val;

        // For each selector
        for (i in queryData) {

            // Get the items matching the selector
            elements = sizzle(i);

            if (elements.length > 0) {

                // For each matching element
                for (ei = 0; ei < elements.length; ei++) {
                    element = elements[ei];

                    // For each min|max-width|height string
                    for (j in queryData[i]) {

                        // For each number px|em value pair
                        for (k in queryData[i][j]) {

                            val = queryData[i][j][k][0];

                            if (queryData[i][j][k][1] == "em") {
                                // Convert EMs to pixels
                                val = val * (window.getEmPixels ? getEmPixels(element) : 16); // NOTE: Using getEmPixels() has a small performance impact
                            }

                            /* NOTE: Using offsetWidth/Height so an element can be adjusted when it reaches a specific size.
                            /* For Nested queries scrollWidth/Height or clientWidth/Height may sometime be desired but are not supported. */

                            if ((j == "min-width" && element.offsetWidth >= val) ||
                                (j == "max-width" && element.offsetWidth <= val) ||
                                (j == "min-height" && element.offsetHeight >= val) ||
                                (j == "max-height" && element.offsetHeight <= val)) {
                                // Add matching attr value
                                addTo(element, j, k);
                            }
                            else {
                                // Remove non-matching attr value
                                removeFrom(element, j, k);
                            }
                        }
                    }
                }
            }
        }

        if (!window.addEventListener && window.attachEvent) {
            // Force a repaint in IE7 and IE8
            var className = document.documentElement.className;
            document.documentElement.className = " " + className;
            document.documentElement.className = className;
        }
    }

    // Expose some public functions
    window.elementQuery = function (arg1, arg2) {

        if (arg1 && typeof arg1 == "object") {
            if (arg1.cssRules || arg1.rules) {
                // Process a new style sheet
                processStyleSheet(arg1, true);

                if (arg2 == true) {
                    refresh();
                }
            } else {
                // Add new selector queries
                updateQueryData(arg1, arg2);
            }
        }
        else if (!arg1 && !arg2) {
            refresh();
        }
    };

    //NOTE: For development purposes only!
    window.elementQuery.selectors = function () {

        var data = {};
        var i, j, k;

        // For each selector
        for (i in queryData) {

            // For each min|max-width|height string
            for (j in queryData[i]) {

                // For each number px|em value pair
                for (k in queryData[i][j]) {

                    if (data[i] === undefined) {
                        data[i] = {};
                    }
                    if (data[i][j] === undefined) {
                        data[i][j] = [];
                    }
                    data[i][j][data[i][j].length] = k;
                }
            }
        }
        return data;
    };

    if (window.addEventListener) {
        window.addEventListener("resize", refresh, false);
        window.addEventListener("DOMContentLoaded", init, false);
        window.addEventListener("load", init, false);
    }
    else if (window.attachEvent) {
        window.attachEvent("onresize", refresh);
        window.attachEvent("onload", init);
    }
}(this, document, undefined));

/*! getEmPixels  | Author: Tyson Matanich (http://matanich.com), 2013 | License: MIT */
(function (document, documentElement) {
    // Enable strict mode
    "use strict";

    // Form the style on the fly to result in smaller minified file
    var important = "!important;";
    var style = "position:absolute" + important + "visibility:hidden" + important + "width:1em" + important + "font-size:1em" + important + "padding:0" + important;

    window.getEmPixels = function (element) {

        var extraBody;

        if (!element) {
            // Emulate the documentElement to get rem value (documentElement does not work in IE6-7)
            element = extraBody = document.createElement("body");
            extraBody.style.cssText = "font-size:1em" + important;
            documentElement.insertBefore(extraBody, document.body);
        }

        // Create and style a test element
        var testElement = document.createElement("i");
        testElement.style.cssText = style;
        element.appendChild(testElement);

        // Get the client width of the test element
        var value = testElement.clientWidth;

        if (extraBody) {
            // Remove the extra body element
            documentElement.removeChild(extraBody);
        }
        else {
            // Remove the test element
            element.removeChild(testElement);
        }

        // Return the em value in pixels
        return value;
    };
}(document, document.documentElement));
/* End */
;
; /* Start:/bitrix/templates/.default/js/spoiler.js*/
$(function() {
	$('div.spoiler-title').click(function() {
		$(this)
			.children()
			.first()
			.toggleClass('show-icon')
			.toggleClass('hide-icon');
		$(this)
			.parent().children().last().toggle();
	});
});
/* End */
;
; /* Start:/bitrix/templates/adaptive/js/ck_editor/plugins/codesnippet/lib/highlight/highlight.pack.js*/
// %LEAVE_UNMINIFIED% %REMOVE_LINE%
var hljs = new function () {
    function k(v) {
        return v.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;")
    }

    function t(v) {
        return v.nodeName.toLowerCase()
    }

    function i(w, x) {
        var v = w && w.exec(x);
        return v && v.index == 0
    }

    function d(v) {
        return Array.prototype.map.call(v.childNodes, function (w) {
            if (w.nodeType == 3) {
                return b.useBR ? w.nodeValue.replace(/\n/g, "") : w.nodeValue
            }
            if (t(w) == "br") {
                return "\n"
            }
            return d(w)
        }).join("")
    }

    function r(w) {
        var v = (w.className + " " + (w.parentNode ? w.parentNode.className : "")).split(/\s+/);
        v = v.map(function (x) {
            return x.replace(/^language-/, "")
        });
        return v.filter(function (x) {
            return j(x) || x == "no-highlight"
        })[0]
    }

    function o(x, y) {
        var v = {};
        for (var w in x) {
            v[w] = x[w]
        }
        if (y) {
            for (var w in y) {
                v[w] = y[w]
            }
        }
        return v
    }

    function u(x) {
        var v = [];
        (function w(y, z) {
            for (var A = y.firstChild; A; A = A.nextSibling) {
                if (A.nodeType == 3) {
                    z += A.nodeValue.length
                } else {
                    if (t(A) == "br") {
                        z += 1
                    } else {
                        if (A.nodeType == 1) {
                            v.push({event: "start", offset: z, node: A});
                            z = w(A, z);
                            v.push({event: "stop", offset: z, node: A})
                        }
                    }
                }
            }
            return z
        })(x, 0);
        return v
    }

    function q(w, y, C) {
        var x = 0;
        var F = "";
        var z = [];

        function B() {
            if (!w.length || !y.length) {
                return w.length ? w : y
            }
            if (w[0].offset != y[0].offset) {
                return (w[0].offset < y[0].offset) ? w : y
            }
            return y[0].event == "start" ? w : y
        }

        function A(H) {
            function G(I) {
                return " " + I.nodeName + '="' + k(I.value) + '"'
            }

            F += "<" + t(H) + Array.prototype.map.call(H.attributes, G).join("") + ">"
        }

        function E(G) {
            F += "</" + t(G) + ">"
        }

        function v(G) {
            (G.event == "start" ? A : E)(G.node)
        }

        while (w.length || y.length) {
            var D = B();
            F += k(C.substr(x, D[0].offset - x));
            x = D[0].offset;
            if (D == w) {
                z.reverse().forEach(E);
                do {
                    v(D.splice(0, 1)[0]);
                    D = B()
                } while (D == w && D.length && D[0].offset == x);
                z.reverse().forEach(A)
            } else {
                if (D[0].event == "start") {
                    z.push(D[0].node)
                } else {
                    z.pop()
                }
                v(D.splice(0, 1)[0])
            }
        }
        return F + k(C.substr(x))
    }

    function m(y) {
        function v(z) {
            return (z && z.source) || z
        }

        function w(A, z) {
            return RegExp(v(A), "m" + (y.cI ? "i" : "") + (z ? "g" : ""))
        }

        function x(D, C) {
            if (D.compiled) {
                return
            }
            D.compiled = true;
            D.k = D.k || D.bK;
            if (D.k) {
                var z = {};

                function E(G, F) {
                    if (y.cI) {
                        F = F.toLowerCase()
                    }
                    F.split(" ").forEach(function (H) {
                        var I = H.split("|");
                        z[I[0]] = [G, I[1] ? Number(I[1]) : 1]
                    })
                }

                if (typeof D.k == "string") {
                    E("keyword", D.k)
                } else {
                    Object.keys(D.k).forEach(function (F) {
                        E(F, D.k[F])
                    })
                }
                D.k = z
            }
            D.lR = w(D.l || /\b[A-Za-z0-9_]+\b/, true);
            if (C) {
                if (D.bK) {
                    D.b = D.bK.split(" ").join("|")
                }
                if (!D.b) {
                    D.b = /\B|\b/
                }
                D.bR = w(D.b);
                if (!D.e && !D.eW) {
                    D.e = /\B|\b/
                }
                if (D.e) {
                    D.eR = w(D.e)
                }
                D.tE = v(D.e) || "";
                if (D.eW && C.tE) {
                    D.tE += (D.e ? "|" : "") + C.tE
                }
            }
            if (D.i) {
                D.iR = w(D.i)
            }
            if (D.r === undefined) {
                D.r = 1
            }
            if (!D.c) {
                D.c = []
            }
            var B = [];
            D.c.forEach(function (F) {
                if (F.v) {
                    F.v.forEach(function (G) {
                        B.push(o(F, G))
                    })
                } else {
                    B.push(F == "self" ? D : F)
                }
            });
            D.c = B;
            D.c.forEach(function (F) {
                x(F, D)
            });
            if (D.starts) {
                x(D.starts, C)
            }
            var A = D.c.map(function (F) {
                return F.bK ? "\\.?\\b(" + F.b + ")\\b\\.?" : F.b
            }).concat([D.tE]).concat([D.i]).map(v).filter(Boolean);
            D.t = A.length ? w(A.join("|"), true) : {
                exec: function (F) {
                    return null
                }
            };
            D.continuation = {}
        }

        x(y)
    }

    function c(S, L, J, R) {
        function v(U, V) {
            for (var T = 0; T < V.c.length; T++) {
                if (i(V.c[T].bR, U)) {
                    return V.c[T]
                }
            }
        }

        function z(U, T) {
            if (i(U.eR, T)) {
                return U
            }
            if (U.eW) {
                return z(U.parent, T)
            }
        }

        function A(T, U) {
            return !J && i(U.iR, T)
        }

        function E(V, T) {
            var U = M.cI ? T[0].toLowerCase() : T[0];
            return V.k.hasOwnProperty(U) && V.k[U]
        }

        function w(Z, X, W, V) {
            var T = V ? "" : b.classPrefix, U = '<span class="' + T, Y = W ? "" : "</span>";
            U += Z + '">';
            return U + X + Y
        }

        function N() {
            var U = k(C);
            if (!I.k) {
                return U
            }
            var T = "";
            var X = 0;
            I.lR.lastIndex = 0;
            var V = I.lR.exec(U);
            while (V) {
                T += U.substr(X, V.index - X);
                var W = E(I, V);
                if (W) {
                    H += W[1];
                    T += w(W[0], V[0])
                } else {
                    T += V[0]
                }
                X = I.lR.lastIndex;
                V = I.lR.exec(U)
            }
            return T + U.substr(X)
        }

        function F() {
            if (I.sL && !f[I.sL]) {
                return k(C)
            }
            var T = I.sL ? c(I.sL, C, true, I.continuation.top) : g(C);
            if (I.r > 0) {
                H += T.r
            }
            if (I.subLanguageMode == "continuous") {
                I.continuation.top = T.top
            }
            return w(T.language, T.value, false, true)
        }

        function Q() {
            return I.sL !== undefined ? F() : N()
        }

        function P(V, U) {
            var T = V.cN ? w(V.cN, "", true) : "";
            if (V.rB) {
                D += T;
                C = ""
            } else {
                if (V.eB) {
                    D += k(U) + T;
                    C = ""
                } else {
                    D += T;
                    C = U
                }
            }
            I = Object.create(V, {parent: {value: I}})
        }

        function G(T, X) {
            C += T;
            if (X === undefined) {
                D += Q();
                return 0
            }
            var V = v(X, I);
            if (V) {
                D += Q();
                P(V, X);
                return V.rB ? 0 : X.length
            }
            var W = z(I, X);
            if (W) {
                var U = I;
                if (!(U.rE || U.eE)) {
                    C += X
                }
                D += Q();
                do {
                    if (I.cN) {
                        D += "</span>"
                    }
                    H += I.r;
                    I = I.parent
                } while (I != W.parent);
                if (U.eE) {
                    D += k(X)
                }
                C = "";
                if (W.starts) {
                    P(W.starts, "")
                }
                return U.rE ? 0 : X.length
            }
            if (A(X, I)) {
                throw new Error('Illegal lexeme "' + X + '" for mode "' + (I.cN || "<unnamed>") + '"')
            }
            C += X;
            return X.length || 1
        }

        var M = j(S);
        if (!M) {
            throw new Error('Unknown language: "' + S + '"')
        }
        m(M);
        var I = R || M;
        var D = "";
        for (var K = I; K != M; K = K.parent) {
            if (K.cN) {
                D = w(K.cN, D, true)
            }
        }
        var C = "";
        var H = 0;
        try {
            var B, y, x = 0;
            while (true) {
                I.t.lastIndex = x;
                B = I.t.exec(L);
                if (!B) {
                    break
                }
                y = G(L.substr(x, B.index - x), B[0]);
                x = B.index + y
            }
            G(L.substr(x));
            for (var K = I; K.parent; K = K.parent) {
                if (K.cN) {
                    D += "</span>"
                }
            }
            return {r: H, value: D, language: S, top: I}
        } catch (O) {
            if (O.message.indexOf("Illegal") != -1) {
                return {r: 0, value: k(L)}
            } else {
                throw O
            }
        }
    }

    function g(y, x) {
        x = x || b.languages || Object.keys(f);
        var v = {r: 0, value: k(y)};
        var w = v;
        x.forEach(function (z) {
            if (!j(z)) {
                return
            }
            var A = c(z, y, false);
            A.language = z;
            if (A.r > w.r) {
                w = A
            }
            if (A.r > v.r) {
                w = v;
                v = A
            }
        });
        if (w.language) {
            v.second_best = w
        }
        return v
    }

    function h(v) {
        if (b.tabReplace) {
            v = v.replace(/^((<[^>]+>|\t)+)/gm, function (w, z, y, x) {
                return z.replace(/\t/g, b.tabReplace)
            })
        }
        if (b.useBR) {
            v = v.replace(/\n/g, "<br>")
        }
        return v
    }

    function p(z) {
        var y = d(z);
        var A = r(z);
        if (A == "no-highlight") {
            return
        }
        var v = A ? c(A, y, true) : g(y);
        var w = u(z);
        if (w.length) {
            var x = document.createElementNS("http://www.w3.org/1999/xhtml", "pre");
            x.innerHTML = v.value;
            v.value = q(w, u(x), y)
        }
        v.value = h(v.value);
        z.innerHTML = v.value;
        z.className += " hljs " + (!A && v.language || "");
        z.result = {language: v.language, re: v.r};
        if (v.second_best) {
            z.second_best = {language: v.second_best.language, re: v.second_best.r}
        }
    }

    var b = {classPrefix: "hljs-", tabReplace: null, useBR: false, languages: undefined};

    function s(v) {
        b = o(b, v)
    }

    function l() {
        if (l.called) {
            return
        }
        l.called = true;
        var v = document.querySelectorAll("pre code");
        Array.prototype.forEach.call(v, p)
    }

    function a() {
        addEventListener("DOMContentLoaded", l, false);
        addEventListener("load", l, false)
    }

    var f = {};
    var n = {};

    function e(v, x) {
        var w = f[v] = x(this);
        if (w.aliases) {
            w.aliases.forEach(function (y) {
                n[y] = v
            })
        }
    }

    function j(v) {
        return f[v] || f[n[v]]
    }

    this.highlight = c;
    this.highlightAuto = g;
    this.fixMarkup = h;
    this.highlightBlock = p;
    this.configure = s;
    this.initHighlighting = l;
    this.initHighlightingOnLoad = a;
    this.registerLanguage = e;
    this.getLanguage = j;
    this.inherit = o;
    this.IR = "[a-zA-Z][a-zA-Z0-9_]*";
    this.UIR = "[a-zA-Z_][a-zA-Z0-9_]*";
    this.NR = "\\b\\d+(\\.\\d+)?";
    this.CNR = "(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
    this.BNR = "\\b(0b[01]+)";
    this.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
    this.BE = {b: "\\\\[\\s\\S]", r: 0};
    this.ASM = {cN: "string", b: "'", e: "'", i: "\\n", c: [this.BE]};
    this.QSM = {cN: "string", b: '"', e: '"', i: "\\n", c: [this.BE]};
    this.CLCM = {cN: "comment", b: "//", e: "$"};
    this.CBLCLM = {cN: "comment", b: "/\\*", e: "\\*/"};
    this.HCM = {cN: "comment", b: "#", e: "$"};
    this.NM = {cN: "number", b: this.NR, r: 0};
    this.CNM = {cN: "number", b: this.CNR, r: 0};
    this.BNM = {cN: "number", b: this.BNR, r: 0};
    this.REGEXP_MODE = {
        cN: "regexp",
        b: /\//,
        e: /\/[gim]*/,
        i: /\n/,
        c: [this.BE, {b: /\[/, e: /\]/, r: 0, c: [this.BE]}]
    };
    this.TM = {cN: "title", b: this.IR, r: 0};
    this.UTM = {cN: "title", b: this.UIR, r: 0}
}();
hljs.registerLanguage("onec7", function (c) {
    var e = "[a-zA-Zа-яА-Я][a-zA-Z0-9_а-яА-Я]*",
        n = "Если If Тогда Then ИначеЕсли ElsIf Иначе Else КонецЕсли EndIf Цикл Do Для For По To Пока While КонецЦикла EndDo Процедура Procedure КонецПроцедуры EndProcedure Функция Function КонецФункции EndFunction Перем Var Экспорт Export Перейти Goto И And Или Or Не Not Знач Val Прервать Break Продолжить Continue Возврат Return Контекст Context Далее Forward Попытка Try Исключение Except КонецПопытки EndTry ВызватьИсключение Raise ОписаниеОшибки GetErrorDescription ТекущаяИБКод CurrentIBCode ТекущаяИБНаименование CurrentIBDescr ТекущаяИБСтатус CurrentIBStatus ТекущаяИБЦентральная IsCurrentIBCenter ИБСозданияОбъекта BirthIBOfObject ЦентральнаяИБКод CentralIBCode ТекущаяИБТолькоПолучатель IsCurrentIBRecepientOnly ФС FS ЗагрузитьВнешнююКомпоненту LoadAddIn ПодключитьВнешнююКомпоненту AttachAddIn СоздатьОбъект CreateObject СтатусВозврата ReturnStatus РазделительСтраниц PageBreak РазделительСтрок LineBreak СимволТабуляции TabSymbol Перечисление Enum Константа Const ПланыСчетов ChartsOfAccounts ВидыСубконто SubcontoKinds ВидРасчета CalculationKind ГруппаРасчетов CalculationGroup Регистр Register Окр Round Цел Int Мин Min Макс Max Лог10 Log10 Лог Ln СтрДлина StrLen ПустаяСтрока IsBlankString СокрЛ TrimL СокрП TrimR СокрЛП TrimAll Лев Left Прав Right Сред Mid Найти Find СтрЗаменить StrReplace СтрЧислоВхождений StrCountOccur СтрКоличествоСтрок StrLineCount СтрПолучитьСтроку StrGetLine Врег Upper Нрег Lower OemToAnsi AnsiToOem Симв Chr КодСимв Asc РабочаяДата WorkingDate ТекущаяДата CurDate ДобавитьМесяц AddMonth НачМесяца BegOfMonth КонМесяца EndOfMonth НачКвартала BegOfQuart КонКвартала EndOfQuart НачГода BegOfYear КонГода EndOfYear НачНедели BegOfWeek КонНедели EndOfWeek ДатаГод GetYear ДатаМесяц GetMonth ДатаЧисло GetDay НомерНеделиГода GetWeekOfYear НомерДняГода GetDayOfYear НомерДняНедели GetDayOfWeek ПериодСтр PeriodStr НачалоСтандартногоИнтервала BegOfStandardRange КонецСтандартногоИнтервала EndOfStandardRange ТекущееВремя CurrentTime СформироватьПозициюДокумента MakeDocPosition РазобратьПозициюДокумента SplitDocPosition Дата Date Строка String Число Number Пропись Spelling Формат Format Шаблон Template ФиксШаблон FixTemplate ВвестиЗначение InputValue ВвестиЧисло InputNumeric ВвестиСтроку InputString ВвестиДату InputDate ВвестиПериод InputPeriod ВвестиПеречисление InputEnum Вопрос DoQueryBox Предупреждение DoMessageBox Сообщить Message ОчиститьОкноСообщений ClearMessageWindow Состояние Status Сигнал Beep Разм Dim ЗаголовокСистемы SystemCaption ИмяКомпьютера ComputerName ИмяПользователя UserName ПолноеИмяПользователя UserFullName НазваниеНабораПрав RightName ПравоДоступа AccessRight НазваниеИнтерфейса UserInterfaceName КаталогПользователя UserDir КаталогИБ IBDir КаталогПрограммы BinDir КаталогВременныхФайлов TempFilesDir КаталогБазыДанных DBDir МонопольныйРежим ExclusiveMode ОсновнойЯзык GeneralLanguage НачатьТранзакцию BeginTransaction ЗафиксироватьТранзакцию CommitTransaсtion ОтменитьТранзакцию RollBackTransaction ЗначениеВСтрокуВнутр ValueToStringInternal ЗначениеИзСтрокиВнутр ValueFromStringInternal ЗначениеВСтроку ValueToString ЗначениеИзСтроки ValueFromString ЗначениеВФайл ValueToFile ЗначениеИзФайла ValueFromFile СохранитьЗначение SaveValue ВосстановитьЗначение RestoreValue ПолучитьТА GetAP ПолучитьДатуТА GetDateOfAP ПолучитьВремяТА GetTimeOfAP ПолучитьДокументТА GetDocOfAP ПолучитьПозициюТА GetAPPosition УстановитьТАна SetAPToBeg УстановитьТАпо SetAPToEnd РассчитатьРегистрыНа CalcRegsOnBeg РассчитатьРегистрыПо CalcRegsOnEnd ВыбранныйПланСчетов DefaultChartOfAccounts ОсновнойПланСчетов MainChartOfAccounts СчетПоКоду AccountByCode НачалоПериодаБИ BeginOfPeriodBT КонецПериодаБИ EndOfPeriodBT КонецРассчитанногоПериодаБИ EndOfCalculatedPeriodBT МаксимальноеКоличествоСубконто MaxSubcontoCount НазначитьСчет SetAccount ВвестиПланСчетов InputChartOfAccounts ВвестиВидСубконто InputSubcontoKind ОсновнойЖурналРасчетов BasicCalcJournal ТипЗначения ValueType ТипЗначенияСтр ValueTypeStr ПустоеЗначение EmptyValue ПолучитьПустоеЗначение GetEmptyValue НазначитьВид SetKind ПрефиксАвтоНумерации AutoNumPrefix ПолучитьЗначенияОтбора GetSelectionValues ЗаписьЖурналаРегистрации LogMessageWrite КомандаСистемы System ЗапуститьПриложение RunApp ЗавершитьРаботуСистемы ExitSystem НайтиПомеченныеНаУдаление FindMarkedForDelete НайтиСсылки FindReferences УдалитьОбъекты DeleteObjects ОбработкаОжидания IdleProcessing ОткрытьФорму OpenForm ОткрытьФормуМодально OpenFormModal _IdToStr _StrToID _GetPerformanceCounter Календари Calendars Метаданные Metadata Последовательность Sequence ПравилоПерерасчета RecalculationRule",
        b = "",
        i = {b: '""'},
        r = {cN: "string", b: '"', e: '"|$',  c: [i]},
        t = {cN: "string", b: "\\|", e: '"|$', c: [i]};
    return {
        cI: !0,
        l: e,
        k: n,
        c: [c.CLCM, c.NM, r, t, {
            cN: "function",
            b: "(процедура|функция)",
            e: "$",
            l: e,
            k: "процедура функция",
            c: [{b: "экспорт", eW: !0, l: e, k: "экспорт", c: [c.CLCM]}, {
                cN: "params",
                b: "\\(",
                e: "\\)",
                l: e,
                k: "знач",
                c: [r, t]
            }, c.CLCM, c.inherit(c.TM, {b: e})]
        }, {cN: "meta", b: "#", e: "$"}, {cN: "number", b: "\\d{2}\\.\\d{2}\\.(\\d{2}|\\d{4})"},{cN: "special_symbols", b: "\\(|\\)|=|,|;|\\*|\\/|\\>|\\<|\\-|\\?|\\+"}]
    }
});
hljs.registerLanguage("onec8", function (c) {
    var e = "[a-zA-Zа-яА-Я][a-zA-Z0-9_а-яА-Я]*",
        n = "Если If Тогда Then ИначеЕсли ElsIf Иначе Else КонецЕсли EndIf Цикл Do Для For По To Пока While КонецЦикла EndDo Процедура Procedure КонецПроцедуры EndProcedure Функция Function КонецФункции EndFunction Перем Var Экспорт Export Перейти Goto И And Или Or Не Not Знач Val Прервать Break Продолжить Continue Возврат Return Попытка Try Исключение Except КонецПопытки EndTry ВызватьИсключение Raise Из In Каждого Each Истина True Ложь False Null Неопределено Undefined Новый New НаКлиенте НаСервере НаСервереБезКонтекста НаКлиентеНаСервере НаКлиентеНаСервереБезКонтекста",
        b = "ЕСЛИ НаКлиенте НаСервере НаСервереБезКонтекста НаКлиентеНаСервере НаКлиентеНаСервереБезКонтекста",
        i = {b: '""'},
        r = {cN: "string", b: '"', e: '"|$', c: [i]},
        t = {cN: "string", b: "\\|", e: '"|$', c: [i]};
    return {
        cI: !0,
        l: e,
        k: n,
        c: [c.CLCM, c.NM, r, t, {cN: "meta", b: "#", e: "$"}, {cN: "number", b: "\\d{2}\\.\\d{2}\\.(\\d{2}|\\d{4})"},{cN: "preprocessor", b: "&", e: "$"},{cN: "special_symbols", b: "\\(|\\)|=|,|;|\\*|\\/|\\>|\\<|\\-|\\?|\\+"}]
    }
});

//c: [c.CLCM, c.NM, r, t, {
//    cN: "function",
//    b: "(процедура|функция)",
//    e: "$",
//    l: e,
//    k: "процедура функция",
//    c: [{b: "экспорт", eW: !0, l: e, k: "экспорт", c: [c.CLCM]}, {
//        cN: "params",
//        b: "\\(",
//        e: "\\)",
//        l: e,
//        k: "знач",
//        c: [r, t]
//    }, c.CLCM, c.inherit(c.TM, {b: e})]
//}, {cN: "meta", b: "#", e: "$"}, {cN: "number", b: "'\\d{2}\\.\\d{2}\\.(\\d{2}|\\d{4})'"},{cN: "preprocessor", b: "&", e: "$"},{cN: "special_symbols", b: "\\(|\\)|=|,"}]

hljs.registerLanguage("bash", function (b) {
    var a = {cN: "variable", v: [{b: /\$[\w\d#@][\w\d_]*/}, {b: /\$\{(.*?)\}/}]};
    var d = {cN: "string", b: /"/, e: /"/, c: [b.BE, a, {cN: "variable", b: /\$\(/, e: /\)/, c: [b.BE]}]};
    var c = {cN: "string", b: /'/, e: /'/};
    return {
        l: /-?[a-z\.]+/,
        k: {
            keyword: "if then else elif fi for break continue while in do done exit return set declare case esac export exec",
            literal: "true false",
            built_in: "printf echo read cd pwd pushd popd dirs let eval unset typeset readonly getopts source shopt caller type hash bind help sudo",
            operator: "-ne -eq -lt -gt -f -d -e -s -l -a"
        },
        c: [{cN: "shebang", b: /^#![^\n]+sh\s*$/, r: 10}, {
            cN: "function",
            b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
            rB: true,
            c: [b.inherit(b.TM, {b: /\w[\w\d_]*/})],
            r: 0
        }, b.HCM, b.NM, d, c, a]
    }
});
hljs.registerLanguage("cs", function (b) {
    var a = "abstract as base bool break byte case catch char checked const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long new null object operator out override params private protected public readonly ref return sbyte sealed short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async await ascending descending from get group into join let orderby partial select set value var where yield";
    return {
        k: a,
        c: [{
            cN: "comment",
            b: "///",
            e: "$",
            rB: true,
            c: [{cN: "xmlDocTag", b: "///|<!--|-->"}, {cN: "xmlDocTag", b: "</?", e: ">"}]
        }, b.CLCM, b.CBLCLM, {
            cN: "preprocessor",
            b: "#",
            e: "$",
            k: "if else elif endif define undef warning error line region endregion pragma checksum"
        }, {
            cN: "string",
            b: '@"',
            e: '"',
            c: [{b: '""'}]
        }, b.ASM, b.QSM, b.CNM, {
            bK: "protected public private internal",
            e: /[{;=]/,
            k: a,
            c: [{bK: "class namespace interface", starts: {c: [b.TM]}}, {b: b.IR + "\\s*\\(", rB: true, c: [b.TM]}]
        }]
    }
});
hljs.registerLanguage("ruby", function (e) {
    var h = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?";
    var g = "and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor";
    var a = {cN: "yardoctag", b: "@[A-Za-z]+"};
    var i = {
        cN: "comment",
        v: [{b: "#", e: "$", c: [a]}, {b: "^\\=begin", e: "^\\=end", c: [a], r: 10}, {b: "^__END__", e: "\\n$"}]
    };
    var c = {cN: "subst", b: "#\\{", e: "}", k: g};
    var d = {
        cN: "string",
        c: [e.BE, c],
        v: [{b: /'/, e: /'/}, {b: /"/, e: /"/}, {b: "%[qw]?\\(", e: "\\)"}, {b: "%[qw]?\\[", e: "\\]"}, {
            b: "%[qw]?{",
            e: "}"
        }, {b: "%[qw]?<", e: ">", r: 10}, {b: "%[qw]?/", e: "/", r: 10}, {b: "%[qw]?%", e: "%", r: 10}, {
            b: "%[qw]?-",
            e: "-",
            r: 10
        }, {b: "%[qw]?\\|", e: "\\|", r: 10}, {b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/}]
    };
    var b = {cN: "params", b: "\\(", e: "\\)", k: g};
    var f = [d, i, {
        cN: "class",
        bK: "class module",
        e: "$|;",
        i: /=/,
        c: [e.inherit(e.TM, {b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"}), {
            cN: "inheritance",
            b: "<\\s*",
            c: [{cN: "parent", b: "(" + e.IR + "::)?" + e.IR}]
        }, i]
    }, {cN: "function", bK: "def", e: " |$|;", r: 0, c: [e.inherit(e.TM, {b: h}), b, i]}, {
        cN: "constant",
        b: "(::)?(\\b[A-Z]\\w*(::)?)+",
        r: 0
    }, {cN: "symbol", b: ":", c: [d, {b: h}], r: 0}, {cN: "symbol", b: e.UIR + "(\\!|\\?)?:", r: 0}, {
        cN: "number",
        b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        r: 0
    }, {cN: "variable", b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"}, {
        b: "(" + e.RSR + ")\\s*",
        c: [i, {
            cN: "regexp",
            c: [e.BE, c],
            i: /\n/,
            v: [{b: "/", e: "/[a-z]*"}, {b: "%r{", e: "}[a-z]*"}, {b: "%r\\(", e: "\\)[a-z]*"}, {
                b: "%r!",
                e: "![a-z]*"
            }, {b: "%r\\[", e: "\\][a-z]*"}]
        }],
        r: 0
    }];
    c.c = f;
    b.c = f;
    return {k: g, c: f}
});
hljs.registerLanguage("diff", function (a) {
    return {
        c: [{
            cN: "chunk",
            r: 10,
            v: [{b: /^\@\@ +\-\d+,\d+ +\+\d+,\d+ +\@\@$/}, {b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/}, {b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/}]
        }, {
            cN: "header",
            v: [{b: /Index: /, e: /$/}, {b: /=====/, e: /=====$/}, {b: /^\-\-\-/, e: /$/}, {
                b: /^\*{3} /,
                e: /$/
            }, {b: /^\+\+\+/, e: /$/}, {b: /\*{5}/, e: /\*{5}$/}]
        }, {cN: "addition", b: "^\\+", e: "$"}, {cN: "deletion", b: "^\\-", e: "$"}, {cN: "change", b: "^\\!", e: "$"}]
    }
});
hljs.registerLanguage("javascript", function (a) {
    return {
        aliases: ["js"],
        k: {
            keyword: "in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class",
            literal: "true false null undefined NaN Infinity",
            built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require"
        },
        c: [{
            cN: "pi",
            b: /^\s*('|")use strict('|")/,
            r: 10
        }, a.ASM, a.QSM, a.CLCM, a.CBLCLM, a.CNM, {
            b: "(" + a.RSR + "|\\b(case|return|throw)\\b)\\s*",
            k: "return throw case",
            c: [a.CLCM, a.CBLCLM, a.REGEXP_MODE, {b: /</, e: />;/, r: 0, sL: "xml"}],
            r: 0
        }, {
            cN: "function",
            bK: "function",
            e: /\{/,
            c: [a.inherit(a.TM, {b: /[A-Za-z$_][0-9A-Za-z$_]*/}), {
                cN: "params",
                b: /\(/,
                e: /\)/,
                c: [a.CLCM, a.CBLCLM],
                i: /["'\(]/
            }],
            i: /\[|%/
        }, {b: /\$[(.]/}, {b: "\\." + a.IR, r: 0}]
    }
});
hljs.registerLanguage("xml", function (a) {
    var c = "[A-Za-z0-9\\._:-]+";
    var d = {b: /<\?(php)?(?!\w)/, e: /\?>/, sL: "php", subLanguageMode: "continuous"};
    var b = {
        eW: true,
        i: /</,
        r: 0,
        c: [d, {cN: "attribute", b: c, r: 0}, {
            b: "=",
            r: 0,
            c: [{cN: "value", v: [{b: /"/, e: /"/}, {b: /'/, e: /'/}, {b: /[^\s\/>]+/}]}]
        }]
    };
    return {
        aliases: ["html"],
        cI: true,
        c: [{cN: "doctype", b: "<!DOCTYPE", e: ">", r: 10, c: [{b: "\\[", e: "\\]"}]}, {
            cN: "comment",
            b: "<!--",
            e: "-->",
            r: 10
        }, {cN: "cdata", b: "<\\!\\[CDATA\\[", e: "\\]\\]>", r: 10}, {
            cN: "tag",
            b: "<style(?=\\s|>|$)",
            e: ">",
            k: {title: "style"},
            c: [b],
            starts: {e: "</style>", rE: true, sL: "css"}
        }, {
            cN: "tag",
            b: "<script(?=\\s|>|$)",
            e: ">",
            k: {title: "script"},
            c: [b],
            starts: {e: "<\/script>", rE: true, sL: "javascript"}
        }, {b: "<%", e: "%>", sL: "vbscript"}, d, {cN: "pi", b: /<\?\w+/, e: /\?>/, r: 10}, {
            cN: "tag",
            b: "</?",
            e: "/?>",
            c: [{cN: "title", b: "[^ /><]+", r: 0}, b]
        }]
    }
});
hljs.registerLanguage("markdown", function (a) {
    return {
        c: [{cN: "header", v: [{b: "^#{1,6}", e: "$"}, {b: "^.+?\\n[=-]{2,}$"}]}, {
            b: "<",
            e: ">",
            sL: "xml",
            r: 0
        }, {cN: "bullet", b: "^([*+-]|(\\d+\\.))\\s+"}, {cN: "strong", b: "[*_]{2}.+?[*_]{2}"}, {
            cN: "emphasis",
            v: [{b: "\\*.+?\\*"}, {b: "_.+?_", r: 0}]
        }, {cN: "blockquote", b: "^>\\s+", e: "$"}, {
            cN: "code",
            v: [{b: "`.+?`"}, {b: "^( {4}|\t)", e: "$", r: 0}]
        }, {cN: "horizontal_rule", b: "^[-\\*]{3,}", e: "$"}, {
            b: "\\[.+?\\][\\(\\[].+?[\\)\\]]",
            rB: true,
            c: [{cN: "link_label", b: "\\[", e: "\\]", eB: true, rE: true, r: 0}, {
                cN: "link_url",
                b: "\\]\\(",
                e: "\\)",
                eB: true,
                eE: true
            }, {cN: "link_reference", b: "\\]\\[", e: "\\]", eB: true, eE: true,}],
            r: 10
        }, {
            b: "^\\[.+\\]:",
            e: "$",
            rB: true,
            c: [{cN: "link_reference", b: "\\[", e: "\\]", eB: true, eE: true}, {cN: "link_url", b: "\\s", e: "$"}]
        }]
    }
});
hljs.registerLanguage("css", function (a) {
    var b = "[a-zA-Z-][a-zA-Z0-9_-]*";
    var c = {cN: "function", b: b + "\\(", e: "\\)", c: ["self", a.NM, a.ASM, a.QSM]};
    return {
        cI: true,
        i: "[=/|']",
        c: [a.CBLCLM, {cN: "id", b: "\\#[A-Za-z0-9_-]+"}, {
            cN: "class",
            b: "\\.[A-Za-z0-9_-]+",
            r: 0
        }, {cN: "attr_selector", b: "\\[", e: "\\]", i: "$"}, {
            cN: "pseudo",
            b: ":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"
        }, {cN: "at_rule", b: "@(font-face|page)", l: "[a-z-]+", k: "font-face page"}, {
            cN: "at_rule",
            b: "@",
            e: "[{;]",
            c: [{cN: "keyword", b: /\S+/}, {b: /\s/, eW: true, eE: true, r: 0, c: [c, a.ASM, a.QSM, a.NM]}]
        }, {cN: "tag", b: b, r: 0}, {
            cN: "rules",
            b: "{",
            e: "}",
            i: "[^\\s]",
            r: 0,
            c: [a.CBLCLM, {
                cN: "rule",
                b: "[^\\s]",
                rB: true,
                e: ";",
                eW: true,
                c: [{
                    cN: "attribute",
                    b: "[A-Z\\_\\.\\-]+",
                    e: ":",
                    eE: true,
                    i: "[^\\s]",
                    starts: {
                        cN: "value",
                        eW: true,
                        eE: true,
                        c: [c, a.NM, a.QSM, a.ASM, a.CBLCLM, {cN: "hexcolor", b: "#[0-9A-Fa-f]+"}, {
                            cN: "important",
                            b: "!important"
                        }]
                    }
                }]
            }]
        }]
    }
});
hljs.registerLanguage("http", function (a) {
    return {
        i: "\\S",
        c: [{cN: "status", b: "^HTTP/[0-9\\.]+", e: "$", c: [{cN: "number", b: "\\b\\d{3}\\b"}]}, {
            cN: "request",
            b: "^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",
            rB: true,
            e: "$",
            c: [{cN: "string", b: " ", e: " ", eB: true, eE: true}]
        }, {
            cN: "attribute",
            b: "^\\w",
            e: ": ",
            eE: true,
            i: "\\n|\\s|=",
            starts: {cN: "string", e: "$"}
        }, {b: "\\n\\n", starts: {sL: "", eW: true}}]
    }
});
hljs.registerLanguage("java", function (b) {
    var a = "false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws";
    return {
        k: a,
        i: /<\//,
        c: [{
            cN: "javadoc",
            b: "/\\*\\*",
            e: "\\*/",
            c: [{cN: "javadoctag", b: "(^|\\s)@[A-Za-z]+"}],
            r: 10
        }, b.CLCM, b.CBLCLM, b.ASM, b.QSM, {
            bK: "protected public private",
            e: /[{;=]/,
            k: a,
            c: [{
                cN: "class",
                bK: "class interface",
                eW: true,
                i: /[:"<>]/,
                c: [{bK: "extends implements", r: 10}, b.UTM]
            }, {b: b.UIR + "\\s*\\(", rB: true, c: [b.UTM]}]
        }, b.CNM, {cN: "annotation", b: "@[A-Za-z]+"}]
    }
});
hljs.registerLanguage("php", function (b) {
    var e = {cN: "variable", b: "\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*"};
    var a = {cN: "preprocessor", b: /<\?(php)?|\?>/};
    var c = {
        cN: "string",
        c: [b.BE, a],
        v: [{b: 'b"', e: '"'}, {b: "b'", e: "'"}, b.inherit(b.ASM, {i: null}), b.inherit(b.QSM, {i: null})]
    };
    var d = {v: [b.BNM, b.CNM]};
    return {
        cI: true,
        k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
        c: [b.CLCM, b.HCM, {
            cN: "comment",
            b: "/\\*",
            e: "\\*/",
            c: [{cN: "phpdoc", b: "\\s@[A-Za-z]+"}, a]
        }, {cN: "comment", b: "__halt_compiler.+?;", eW: true, k: "__halt_compiler", l: b.UIR}, {
            cN: "string",
            b: "<<<['\"]?\\w+['\"]?$",
            e: "^\\w+;",
            c: [b.BE]
        }, a, e, {
            cN: "function",
            bK: "function",
            e: /[;{]/,
            i: "\\$|\\[|%",
            c: [b.UTM, {cN: "params", b: "\\(", e: "\\)", c: ["self", e, b.CBLCLM, c, d]}]
        }, {
            cN: "class",
            bK: "class interface",
            e: "{",
            i: /[:\(\$"]/,
            c: [{bK: "extends implements", r: 10}, b.UTM]
        }, {bK: "namespace", e: ";", i: /[\.']/, c: [b.UTM]}, {bK: "use", e: ";", c: [b.UTM]}, {b: "=>"}, c, d]
    }
});
hljs.registerLanguage("python", function (a) {
    var f = {cN: "prompt", b: /^(>>>|\.\.\.) /};
    var b = {
        cN: "string",
        c: [a.BE],
        v: [{b: /(u|b)?r?'''/, e: /'''/, c: [f], r: 10}, {b: /(u|b)?r?"""/, e: /"""/, c: [f], r: 10}, {
            b: /(u|r|ur)'/,
            e: /'/,
            r: 10
        }, {b: /(u|r|ur)"/, e: /"/, r: 10}, {b: /(b|br)'/, e: /'/,}, {b: /(b|br)"/, e: /"/,}, a.ASM, a.QSM]
    };
    var d = {cN: "number", r: 0, v: [{b: a.BNR + "[lLjJ]?"}, {b: "\\b(0o[0-7]+)[lLjJ]?"}, {b: a.CNR + "[lLjJ]?"}]};
    var e = {cN: "params", b: /\(/, e: /\)/, c: ["self", f, d, b]};
    var c = {e: /:/, i: /[${=;\n]/, c: [a.UTM, e]};
    return {
        k: {
            keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False",
            built_in: "Ellipsis NotImplemented"
        },
        i: /(<\/|->|\?)/,
        c: [f, d, b, a.HCM, a.inherit(c, {cN: "function", bK: "def", r: 10}), a.inherit(c, {
            cN: "class",
            bK: "class"
        }), {cN: "decorator", b: /@/, e: /$/}, {b: /\b(print|exec)\(/}]
    }
});
hljs.registerLanguage("sql", function (a) {
    return {
        cI: true,
        i: /[<>]/,
        c: [{
            cN: "operator",
            b: "\\b(begin|end|start|commit|rollback|savepoint|lock|alter|create|drop|rename|call|delete|do|handler|insert|load|replace|select|truncate|update|set|show|pragma|grant|merge)\\b(?!:)",
            e: ";",
            eW: true,
            k: {
                keyword: "all partial global month current_timestamp using go revoke smallint indicator end-exec disconnect zone with character assertion to add current_user usage input local alter match collate real then rollback get read timestamp session_user not integer bit unique day minute desc insert execute like ilike|2 level decimal drop continue isolation found where constraints domain right national some module transaction relative second connect escape close system_user for deferred section cast current sqlstate allocate intersect deallocate numeric public preserve full goto initially asc no key output collation group by union session both last language constraint column of space foreign deferrable prior connection unknown action commit view or first into float year primary cascaded except restrict set references names table outer open select size are rows from prepare distinct leading create only next inner authorization schema corresponding option declare precision immediate else timezone_minute external varying translation true case exception join hour default double scroll value cursor descriptor values dec fetch procedure delete and false int is describe char as at in varchar null trailing any absolute current_time end grant privileges when cross check write current_date pad begin temporary exec time update catalog user sql date on identity timezone_hour natural whenever interval work order cascade diagnostics nchar having left call do handler load replace truncate start lock show pragma exists number trigger if before after each row merge matched database",
                aggregate: "count sum min max avg"
            },
            c: [{cN: "string", b: "'", e: "'", c: [a.BE, {b: "''"}]}, {
                cN: "string",
                b: '"',
                e: '"',
                c: [a.BE, {b: '""'}]
            }, {cN: "string", b: "`", e: "`", c: [a.BE]}, a.CNM]
        }, a.CBLCLM, {cN: "comment", b: "--", e: "$"}]
    }
});
hljs.registerLanguage("ini", function (a) {
    return {
        cI: true,
        i: /\S/,
        c: [{cN: "comment", b: ";", e: "$"}, {cN: "title", b: "^\\[", e: "\\]"}, {
            cN: "setting",
            b: "^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",
            e: "$",
            c: [{cN: "value", eW: true, k: "on off true false yes no", c: [a.QSM, a.NM], r: 0}]
        }]
    }
});
hljs.registerLanguage("perl", function (c) {
    var d = "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when";
    var f = {cN: "subst", b: "[$@]\\{", e: "\\}", k: d};
    var g = {b: "->{", e: "}"};
    var a = {
        cN: "variable",
        v: [{b: /\$\d/}, {b: /[\$\%\@\*](\^\w\b|#\w+(\:\:\w+)*|{\w+}|\w+(\:\:\w*)*)/}, {b: /[\$\%\@\*][^\s\w{]/, r: 0}]
    };
    var e = {cN: "comment", b: "^(__END__|__DATA__)", e: "\\n$", r: 5};
    var h = [c.BE, f, a];
    var b = [a, c.HCM, e, {cN: "comment", b: "^\\=\\w", e: "\\=cut", eW: true}, g, {
        cN: "string",
        c: h,
        v: [{b: "q[qwxr]?\\s*\\(", e: "\\)", r: 5}, {b: "q[qwxr]?\\s*\\[", e: "\\]", r: 5}, {
            b: "q[qwxr]?\\s*\\{",
            e: "\\}",
            r: 5
        }, {b: "q[qwxr]?\\s*\\|", e: "\\|", r: 5}, {b: "q[qwxr]?\\s*\\<", e: "\\>", r: 5}, {
            b: "qw\\s+q",
            e: "q",
            r: 5
        }, {b: "'", e: "'", c: [c.BE]}, {b: '"', e: '"'}, {b: "`", e: "`", c: [c.BE]}, {
            b: "{\\w+}",
            c: [],
            r: 0
        }, {b: "-?\\w+\\s*\\=\\>", c: [], r: 0}]
    }, {
        cN: "number",
        b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        r: 0
    }, {
        b: "(\\/\\/|" + c.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
        k: "split return print reverse grep",
        r: 0,
        c: [c.HCM, e, {cN: "regexp", b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*", r: 10}, {
            cN: "regexp",
            b: "(m|qr)?/",
            e: "/[a-z]*",
            c: [c.BE],
            r: 0
        }]
    }, {cN: "sub", bK: "sub", e: "(\\s*\\(.*?\\))?[;{]", r: 5}, {cN: "operator", b: "-\\w\\b", r: 0}];
    f.c = b;
    g.c = b;
    return {k: d, c: b}
});
hljs.registerLanguage("objectivec", function (a) {
    var d = {
        keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign self synchronized id nonatomic super unichar IBOutlet IBAction strong weak @private @protected @public @try @property @end @throw @catch @finally @synthesize @dynamic @selector @optional @required",
        literal: "false true FALSE TRUE nil YES NO NULL",
        built_in: "NSString NSDictionary CGRect CGPoint UIButton UILabel UITextView UIWebView MKMapView UISegmentedControl NSObject UITableViewDelegate UITableViewDataSource NSThread UIActivityIndicator UITabbar UIToolBar UIBarButtonItem UIImageView NSAutoreleasePool UITableView BOOL NSInteger CGFloat NSException NSLog NSMutableString NSMutableArray NSMutableDictionary NSURL NSIndexPath CGSize UITableViewCell UIView UIViewController UINavigationBar UINavigationController UITabBarController UIPopoverController UIPopoverControllerDelegate UIImage NSNumber UISearchBar NSFetchedResultsController NSFetchedResultsChangeType UIScrollView UIScrollViewDelegate UIEdgeInsets UIColor UIFont UIApplication NSNotFound NSNotificationCenter NSNotification UILocalNotification NSBundle NSFileManager NSTimeInterval NSDate NSCalendar NSUserDefaults UIWindow NSRange NSArray NSError NSURLRequest NSURLConnection UIInterfaceOrientation MPMoviePlayerController dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
    };
    var c = /[a-zA-Z@][a-zA-Z0-9_]*/;
    var b = "@interface @class @protocol @implementation";
    return {
        k: d,
        l: c,
        i: "</",
        c: [a.CLCM, a.CBLCLM, a.CNM, a.QSM, {
            cN: "string",
            b: "'",
            e: "[^\\\\]'",
            i: "[^\\\\][^']"
        }, {
            cN: "preprocessor",
            b: "#import",
            e: "$",
            c: [{cN: "title", b: '"', e: '"'}, {cN: "title", b: "<", e: ">"}]
        }, {cN: "preprocessor", b: "#", e: "$"}, {
            cN: "class",
            b: "(" + b.split(" ").join("|") + ")\\b",
            e: "({|$)",
            k: b,
            l: c,
            c: [a.UTM]
        }, {cN: "variable", b: "\\." + a.UIR, r: 0}]
    }
});
hljs.registerLanguage("coffeescript", function (c) {
    var b = {
        keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",
        literal: "true false null undefined yes no on off",
        reserved: "case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf",
        built_in: "npm require console print module exports global window document"
    };
    var a = "[A-Za-z$_][0-9A-Za-z$_]*";
    var f = c.inherit(c.TM, {b: a});
    var e = {cN: "subst", b: /#\{/, e: /}/, k: b};
    var d = [c.BNM, c.inherit(c.CNM, {starts: {e: "(\\s*/)?", r: 0}}), {
        cN: "string",
        v: [{b: /'''/, e: /'''/, c: [c.BE]}, {b: /'/, e: /'/, c: [c.BE]}, {b: /"""/, e: /"""/, c: [c.BE, e]}, {
            b: /"/,
            e: /"/,
            c: [c.BE, e]
        }]
    }, {
        cN: "regexp",
        v: [{b: "///", e: "///", c: [e, c.HCM]}, {b: "//[gim]*", r: 0}, {b: "/\\S(\\\\.|[^\\n])*?/[gim]*(?=\\s|\\W|$)"}]
    }, {cN: "property", b: "@" + a}, {b: "`", e: "`", eB: true, eE: true, sL: "javascript"}];
    e.c = d;
    return {
        k: b,
        c: d.concat([{cN: "comment", b: "###", e: "###"}, c.HCM, {
            cN: "function",
            b: "(" + a + "\\s*=\\s*)?(\\(.*\\))?\\s*\\B[-=]>",
            e: "[-=]>",
            rB: true,
            c: [f, {cN: "params", b: "\\(", rB: true, c: [{b: /\(/, e: /\)/, k: b, c: ["self"].concat(d)}]}]
        }, {
            cN: "class",
            bK: "class",
            e: "$",
            i: /[:="\[\]]/,
            c: [{bK: "extends", eW: true, i: /[:="\[\]]/, c: [f]}, f]
        }, {cN: "attribute", b: a + ":", e: ":", rB: true, eE: true, r: 0}])
    }
});
hljs.registerLanguage("nginx", function (c) {
    var b = {cN: "variable", v: [{b: /\$\d+/}, {b: /\$\{/, e: /}/}, {b: "[\\$\\@]" + c.UIR}]};
    var a = {
        eW: true,
        l: "[a-z/_]+",
        k: {built_in: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"},
        r: 0,
        i: "=>",
        c: [c.HCM, {cN: "string", c: [c.BE, b], v: [{b: /"/, e: /"/}, {b: /'/, e: /'/}]}, {
            cN: "url",
            b: "([a-z]+):/",
            e: "\\s",
            eW: true,
            eE: true
        }, {
            cN: "regexp",
            c: [c.BE, b],
            v: [{b: "\\s\\^", e: "\\s|{|;", rE: true}, {
                b: "~\\*?\\s+",
                e: "\\s|{|;",
                rE: true
            }, {b: "\\*(\\.[a-z\\-]+)+"}, {b: "([a-z\\-]+\\.)+\\*"}]
        }, {cN: "number", b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"}, {
            cN: "number",
            b: "\\b\\d+[kKmMgGdshdwy]*\\b",
            r: 0
        }, b]
    };
    return {
        c: [c.HCM, {b: c.UIR + "\\s", e: ";|{", rB: true, c: [c.inherit(c.UTM, {starts: a})], r: 0}],
        i: "[^\\s\\}]"
    }
});
hljs.registerLanguage("json", function (a) {
    var e = {literal: "true false null"};
    var d = [a.QSM, a.CNM];
    var c = {cN: "value", e: ",", eW: true, eE: true, c: d, k: e};
    var b = {
        b: "{",
        e: "}",
        c: [{cN: "attribute", b: '\\s*"', e: '"\\s*:\\s*', eB: true, eE: true, c: [a.BE], i: "\\n", starts: c}],
        i: "\\S"
    };
    var f = {b: "\\[", e: "\\]", c: [a.inherit(c, {cN: null})], i: "\\S"};
    d.splice(d.length, 0, b, f);
    return {c: d, k: e, i: "\\S"}
});
hljs.registerLanguage("apache", function (a) {
    var b = {cN: "number", b: "[\\$%]\\d+"};
    return {
        cI: true,
        c: [a.HCM, {cN: "tag", b: "</?", e: ">"}, {
            cN: "keyword",
            b: /\w+/,
            r: 0,
            k: {common: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"},
            starts: {
                e: /$/,
                r: 0,
                k: {literal: "on off all"},
                c: [{cN: "sqbracket", b: "\\s\\[", e: "\\]$"}, {
                    cN: "cbracket",
                    b: "[\\$%]\\{",
                    e: "\\}",
                    c: ["self", b]
                }, b, a.QSM]
            }
        }],
        i: /\S/
    }
});
hljs.registerLanguage("cpp", function (a) {
    var b = {
        keyword: "false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long throw volatile static protected bool template mutable if public friend do return goto auto void enum else break new extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex _Complex _Imaginary",
        built_in: "std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf"
    };
    return {
        aliases: ["c"],
        k: b,
        i: "</",
        c: [a.CLCM, a.CBLCLM, a.QSM, {cN: "string", b: "'\\\\?.", e: "'", i: "."}, {
            cN: "number",
            b: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"
        }, a.CNM, {
            cN: "preprocessor",
            b: "#",
            e: "$",
            c: [{b: "include\\s*<", e: ">", i: "\\n"}, a.CLCM]
        }, {
            cN: "stl_container",
            b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
            e: ">",
            k: b,
            r: 10,
            c: ["self"]
        }]
    }
});
hljs.registerLanguage("makefile", function (a) {
    var b = {cN: "variable", b: /\$\(/, e: /\)/, c: [a.BE]};
    return {
        c: [a.HCM, {
            b: /^\w+\s*\W*=/,
            rB: true,
            r: 0,
            starts: {cN: "constant", e: /\s*\W*=/, eE: true, starts: {e: /$/, r: 0, c: [b],}}
        }, {cN: "title", b: /^[\w]+:\s*$/}, {cN: "phony", b: /^\.PHONY:/, e: /$/, k: ".PHONY", l: /[\.\w]+/}, {
            b: /^\t+/,
            e: /$/,
            c: [a.QSM, b]
        }]
    }
});
/* End */
;
; /* Start:/bitrix/components/infostart/asd.forum.mess.list/templates/redesign_adpt/script.js*/
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Clipboard=e()}}(function(){var e,t,n;return function e(t,n,i){function o(a,c){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!c&&l)return l(a,!0);if(r)return r(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var u=n[a]={exports:{}};t[a][0].call(u.exports,function(e){var n=t[a][1][e];return o(n?n:e)},u,u.exports,e,t,n,i)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<i.length;a++)o(i[a]);return o}({1:[function(e,t,n){function i(e,t){for(;e&&e!==document;){if(e.matches(t))return e;e=e.parentNode}}if(Element&&!Element.prototype.matches){var o=Element.prototype;o.matches=o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector}t.exports=i},{}],2:[function(e,t,n){function i(e,t,n,i,r){var a=o.apply(this,arguments);return e.addEventListener(n,a,r),{destroy:function(){e.removeEventListener(n,a,r)}}}function o(e,t,n,i){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&i.call(e,n)}}var r=e("./closest");t.exports=i},{"./closest":1}],3:[function(e,t,n){n.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},n.nodeList=function(e){var t=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===t||"[object HTMLCollection]"===t)&&"length"in e&&(0===e.length||n.node(e[0]))},n.string=function(e){return"string"==typeof e||e instanceof String},n.fn=function(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t}},{}],4:[function(e,t,n){function i(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!c.string(t))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(e))return o(e,t,n);if(c.nodeList(e))return r(e,t,n);if(c.string(e))return a(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function o(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function r(e,t,n){return Array.prototype.forEach.call(e,function(e){e.addEventListener(t,n)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,n)})}}}function a(e,t,n){return l(document.body,e,t,n)}var c=e("./is"),l=e("delegate");t.exports=i},{"./is":3,delegate:2}],5:[function(e,t,n){function i(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName)e.focus(),e.setSelectionRange(0,e.value.length),t=e.value;else{e.hasAttribute("contenteditable")&&e.focus();var n=window.getSelection(),i=document.createRange();i.selectNodeContents(e),n.removeAllRanges(),n.addRange(i),t=n.toString()}return t}t.exports=i},{}],6:[function(e,t,n){function i(){}i.prototype={on:function(e,t,n){var i=this.e||(this.e={});return(i[e]||(i[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){function i(){o.off(e,i),t.apply(n,arguments)}var o=this;return i._=t,this.on(e,i,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),i=0,o=n.length;for(i;i<o;i++)n[i].fn.apply(n[i].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),i=n[e],o=[];if(i&&t)for(var r=0,a=i.length;r<a;r++)i[r].fn!==t&&i[r].fn._!==t&&o.push(i[r]);return o.length?n[e]=o:delete n[e],this}},t.exports=i},{}],7:[function(t,n,i){!function(o,r){if("function"==typeof e&&e.amd)e(["module","select"],r);else if("undefined"!=typeof i)r(n,t("select"));else{var a={exports:{}};r(a,o.select),o.clipboardAction=a.exports}}(this,function(e,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=n(t),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),c=function(){function e(t){i(this,e),this.resolveOptions(t),this.initSelection()}return a(e,[{key:"resolveOptions",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function e(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function e(){var t=this,n="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=document.body.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[n?"right":"left"]="-9999px";var i=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.addEventListener("focus",window.scrollTo(0,i)),this.fakeElem.style.top=i+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=(0,o.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function e(){this.fakeHandler&&(document.body.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function e(){this.selectedText=(0,o.default)(this.target),this.copyText()}},{key:"copyText",value:function e(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function e(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function e(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function e(){this.removeFake()}},{key:"action",set:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function e(){return this._action}},{key:"target",set:function e(t){if(void 0!==t){if(!t||"object"!==("undefined"==typeof t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function e(){return this._target}}]),e}();e.exports=c})},{select:5}],8:[function(t,n,i){!function(o,r){if("function"==typeof e&&e.amd)e(["module","./clipboard-action","tiny-emitter","good-listener"],r);else if("undefined"!=typeof i)r(n,t("./clipboard-action"),t("tiny-emitter"),t("good-listener"));else{var a={exports:{}};r(a,o.clipboardAction,o.tinyEmitter,o.goodListener),o.clipboard=a.exports}}(this,function(e,t,n,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}var s=o(t),u=o(n),f=o(i),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),h=function(e){function t(e,n){r(this,t);var i=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return i.resolveOptions(n),i.listenClick(e),i}return c(t,e),d(t,[{key:"resolveOptions",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText}},{key:"listenClick",value:function e(t){var n=this;this.listener=(0,f.default)(t,"click",function(e){return n.onClick(e)})}},{key:"onClick",value:function e(t){var n=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s.default({action:this.action(n),target:this.target(n),text:this.text(n),trigger:n,emitter:this})}},{key:"defaultAction",value:function e(t){return l("action",t)}},{key:"defaultTarget",value:function e(t){var n=l("target",t);if(n)return document.querySelector(n)}},{key:"defaultText",value:function e(t){return l("text",t)}},{key:"destroy",value:function e(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}]),t}(u.default);e.exports=h})},{"./clipboard-action":7,"good-listener":4,"tiny-emitter":6}]},{},[8])(8)});
function reply2comment(number) {
	$(".post-form-wrap").parent();
	$(window).scrollTop($("textarea[name=POST_MESSAGE]").offset().top-130);
	if ($("textarea[name=POST_MESSAGE]").length > 0)
	{
		$("textarea[name=POST_MESSAGE]").val($("textarea[name=POST_MESSAGE]").val()+'('+number+')' + ' ') ;
	}

	return false;
}
$(document).on("click",".noauth",function () {
	$.smallBox({
		title : "Ошибка!",
		content : "Для продолжения необходимо авторизоваться.",
		color : "#C46A69",
		icon : "fa fa-warning shake animated",
		timeout : 10000
	});
	return false;
});
$(document).on("change",".input-multi-items", function () {
	if ($(".input-multi-items:checked").length > 0) {
		$(".btn-multi-action").attr('disabled', false);
	} else {
		$(".btn-multi-action").attr('disabled', true);
	}
});
$(document).on("click",".ddmenu-item-onclick", function () {
	var path = '?ACTION=' + $(this).data('action') + '&sessid=' + BX.bitrix_sessid() + '&' + $('.input-multi-items').serialize();
	location = $(this).data('href') + path;
});
$(document).on("click",".fm-open-answer:not(.opened)",function () {
	var Btn = $(this);
	var CurrMess = $(this).parents(".show-hide-props");
    Btn.addClass("opened");
	$(this).html('<i class="fa fa-refresh fa-spin fa-fw margin-bottom"></i>');
	if($(this).attr("data-aid").length > 0) {
		$.post("?ACTION=GET_LAST_MESSAGE&MIDs="+$(this).attr("data-aid"),function (data) {
			var messData = $(data);
			CurrMess.after("<div class='fm-answers-wrap'></div>");
			CurrMess.next().html(messData);
			$(messData).css({"background-color": "#ebf4eb"}).animate({"background-color": ""}, 1500,function () {
				$(this).css("background-color","");
			});
			Btn.parents(".well").css({"border-bottom":"none","box-shadow":"none"});
			Btn.remove();
			$('.comment-ref').cluetip({
				activation: 'click',
				width: 350,
				attribute: 'href',
				closeText: '<i class="fa fa-times"></i>',
				closePosition: 'title',
				sticky: true,
				ajaxCache: false,
			});
		});
	}
	return false;
});
$(document).ready(function () {
	new Clipboard(".fm-mess-lnk");
	ReplaceLinkToImg();
});
$(document).on("click",".fm-mess-lnk",function () {
	return false;
});
function infostart_rate_comment(comm_id, vote) {

	$.get("/bitrix/ajax/ajax_rate.php", {CID:comm_id, TYPE:vote}, function(answer) {
		var numPlus = (isNaN(parseInt($(".counter-plus[data-id=" + comm_id + "]:first").text()))) ? 0 : parseInt($(".counter-plus[data-id=" + comm_id + "]:first").text());
		var numMinus = (isNaN(parseInt($(".counter-minus[data-id=" + comm_id + "]:first").text()))) ? 0 : parseInt($(".counter-minus[data-id=" + comm_id + "]:first").text());
		if(answer == "Спасибо. Ваш голос принят.") {
			if (vote === 1) {
				$(".counter-plus[data-id=" + comm_id + "]").html(numPlus + 1);
				$(".counter-plus[data-id=" + comm_id + "]").parent().addClass('color');
			} else {
				$(".counter-minus[data-id=" + comm_id + "]").html(numMinus + 1);
				$(".counter-minus[data-id=" + comm_id + "]").parent().addClass('color');
			}

		}else if (answer == "Ваш голос отменен."){
			if (vote === 1) {
				$(".counter-minus[data-id=" + comm_id + "]").html((numMinus - 1)==0?'':(numMinus - 1));
				if((numMinus - 1)==0)
					$(".counter-minus[data-id=" + comm_id + "]").parent().removeClass('color');
			} else {
				$(".counter-plus[data-id=" + comm_id + "]").html((numPlus - 1)==0?'':(numPlus - 1));
				if((numPlus - 1)==0)
					$(".counter-plus[data-id=" + comm_id + "]").parent().removeClass('color');
			}
		}else {
			$.smallBox({
				title: answer,
				content: '<br/>',
				color: "#5384AF",
				icon: "fa fa-info bounce animated",
				timeout: 4000
			});
		}
		var numPlus = (isNaN(parseInt($(".counter-plus[data-id=" + comm_id + "]:first").text()))) ? 0 : parseInt($(".counter-plus[data-id=" + comm_id + "]:first").text());
		var numMinus = (isNaN(parseInt($(".counter-minus[data-id=" + comm_id + "]:first").text()))) ? 0 : parseInt($(".counter-minus[data-id=" + comm_id + "]:first").text());
		if((numPlus - numMinus)<0)
			$(".counter-plus[data-id=" + comm_id + "]").parents(".show-hide-props").addClass("unrated");
		else
			$(".counter-plus[data-id=" + comm_id + "]").parents(".show-hide-props").removeClass("unrated");

	});
}
function reply2author(name) {
    name = name.replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, "\"");
	if ($("textarea[name=POST_MESSAGE]").length > 0)
	{
		$("textarea[name=POST_MESSAGE]").val($("textarea[name=POST_MESSAGE]").val() + name + " \n");
	}
	return false;
}
$(document).ready(function(){
        $("body").on('click','.spoilerCaption',function () {
			$(this).parent().children('.low-height').height('auto');
               $(this).parent().children(".spoilerCaption").hide();
               $(this).parent().children(".spoilerCaptionSlide").show();
               $(this).blur();
               return false;
       });
		$("body").on('click','.spoilerCaptionSlide',function () {
			$(this).parent().children('.low-height').height('');
			$(this).parent().children(".spoilerCaption").show();
			$(this).parent().children(".spoilerCaptionSlide").hide();
			$(this).blur();
			return false;
		});
		$("body").on('click','.do_hide_forum_message',function () {
			$(this).parent().children('.hide_forum_message').toggle('normal');
			$(this).blur();
			return false;
		});
		$("body").on('click','#subscribe_button li a',function () {
			var ACTION = $(this).attr("data-action");

			$.get("./",
				{
					ACTION: ACTION,
					change_subscribe: "Y",
					sessid: BX.bitrix_sessid(),
				},
				'text'
			).done(function( data ) {
					$("#subscribe_button").before(data).remove();
				});
			return false;
		});
		$(".moderate-btn a.text-danger").click(function () {
			var HREF = $(this).attr("href");
			$.SmartMessageBox({
				title : "Внимание! Операция не имеет обратного действия.",
				content : "Вы уверены, что хотите продолжить?",
				buttons : "[Отмена][Да]",
			}, function(ButtonPress, Value) {
				if(ButtonPress == 'Да'){
					location = HREF;
				}else{
					return false;
				}



			});
			return false;
		});
	if ($(".donat-wrap").length > 0) {
		var maxHeightDW = $(".donate-pay-wrap").css("max-height");
		if ($(".donate-pay-wrap>section").height > maxHeightDW) {
			$(".btn-toggle-height-wrap").addClass("vp-shown");
		}
		$("body").on("click", ".btn-toggle-height", function () {
			$(".block-pay-wrap").toggleClass("vp-toggled");
			$(this).children('i').toggleClass('fa-arrow-up fa-arrow-down');
		});
	}
	$(document).on('click',".SendMoney",function () {
		var Uname = $(this).attr("data-name");
		var MaxSumm = $(this).attr("data-summ");
		var MID = $(this).attr("data-mid");
		var UID = $(this).attr("data-uid");
		$.SmartMessageBox({
			title : "Указанная сумма будет переведена пользователю "+Uname,
			content : "Укажите сумму $m для перевода, или переведите все средства.",
			buttons : "[Отмена][Отправить все][Отправить]",
			input : "text",
			inputValue: '',
			placeholder : "Максимум: "+MaxSumm+' $m'
		}, function(ButtonPress, Value) {
			if(ButtonPress == 'Отправить все'){
				$.get('?SESSID='+BX.bitrix_sessid()+'&UID='+UID+'&MID='+MID+"&ACTION=AWARD_PAY_ALL",function (data) {
					var arResult = $.parseJSON(data);
					if(arResult.ERROR){
						$.smallBox({
							title : "Ошибка!",
							content : arResult.ERROR,
							color : "#C46A69",
							icon : "fa fa-warning shake animated",
							timeout : 10000
						});
					}else{
						$.smallBox({
							title: "Спасибо!",
							content: arResult.OK,
							color: "#659265",
							icon: "fa fa-check fadeInRight animated",
							timeout: 4000
						});
					}
				});
			}else if (ButtonPress == "Отправить"){
				$.get('?SESSID='+BX.bitrix_sessid()+'&SUMM='+Value+'&UID='+UID+'&MID='+MID+"&ACTION=AWARD_PAY_PART",function (data) {
					var arResult = $.parseJSON(data);
					if(arResult.ERROR){
						$.smallBox({
							title : "Ошибка!",
							content : arResult.ERROR,
							color : "#C46A69",
							icon : "fa fa-warning shake animated",
							timeout : 10000
						});
					}else{
						$.smallBox({
							title: "Спасибо!",
							content: arResult.OK,
							color: "#659265",
							icon: "fa fa-check fadeInRight animated",
							timeout: 4000
						});
					}
				});
			}



		});
		return false;
	});
	$(document).on('click',"#payed_topic_link",function () {
		var MaxSumm = $(this).attr("data-summ");
		$.SmartMessageBox({
			title : "Добавить вознаграждение в тему",
			content : "Укажите количество $m <small>(будет списано с вашего счета)</small>",
			buttons : "[Отмена][Добавить]",
			input : "text",
			inputValue: '',
			placeholder : "Максимум: "+MaxSumm+' $m'
		}, function(ButtonPress, Value) {
			if (ButtonPress == "Добавить"){
				$.get('?SESSID='+BX.bitrix_sessid()+'&SUMM='+Value+'&ACTION=ADD_PAY_FOR_DECISION',function (data) {
					var arResult = $.parseJSON(data);
					if(arResult.ERROR){
						$.smallBox({
							title : "Ошибка!",
							content : arResult.ERROR,
							color : "#C46A69",
							icon : "fa fa-warning shake animated",
							timeout : 10000
						});
					}else{
						$.smallBox({
							title: "Спасибо!",
							content: arResult.OK,
							color: "#659265",
							icon: "fa fa-check fadeInRight animated",
							timeout: 4000
						});
					}
				});
			}

		});
		return false;
	});
	$(document).on('click',".BestAnswer",function () {
		var MID = $(this).attr("data-mid");
		var BEST = $(this).attr("data-best");
		$.get('?SESSID='+BX.bitrix_sessid()+'&MID='+MID+'&BEST_ANSWER='+BEST+'&ACTION=BEST_ANSWER',function (data) {
			var arResult = $.parseJSON(data);
			if(arResult.ERROR){
				$.smallBox({
					title : "Ошибка!",
					content : arResult.ERROR,
					color : "#C46A69",
					icon : "fa fa-warning shake animated",
					timeout : 10000
				});
			}else{
				$.smallBox({
					title: "Спасибо!",
					content: arResult.OK,
					color: "#659265",
					icon: "fa fa-check fadeInRight animated",
					timeout: 4000
				});
			}
		});
		return false;
	});
	/*$('#payed_topic_link').click(function(){
		$('#payed_topic_block').show();
		$(this).hide();
		return false;
	});*/
	$('#payed_topic_cancel').click(function(){
		$('#payed_topic_block').hide();
		$('.main-donat-footer').show();
		$('#payed_topic_link').show();
		$('#pay_for_decision').val('');
		return false;
	});
	$('#payed_topic_submit').click(function(){
		$(this).attr('disabled', 'disabled');
		$('#payed_topic_form').submit();
	});
	$('#payed_topic_link_return').click(function(){
		$('#return_payed_topic_block').show();
		$('#payed_topic_link').show();
		$('#payed_topic_link_return').slideUp();
		return false;
	});
	$('#return_payed_topic_cancel').click(function(){
		$('#return_payed_topic_block').hide();
		$('#payed_topic_link_return').show();
		$('#return_pay_for_decision').val('');
		return false;
	});
	$('#return_payed_topic_max').click(function(){
		$('#return_pay_for_decision').val($('span', this).html());
		return false;
	});
	$('#return_payed_topic_submit').click(function(){
		$(this).attr('disabled', 'disabled');
		$('#payed_topic_link_return').submit();
	});
});
$(document).on("click",".ConfirmDel",function () {
	var BTN = $(this);
	var HREF = $(this).attr("href");
	$.SmartMessageBox({
		title : "Сообщение будет безвозвратно удалено.",
		content : "Вы уверены, что хотите продолжить?",
		buttons : "[Отмена][Да]",
	}, function(ButtonPress, Value) {
		if(ButtonPress == 'Да'){
			if(BTN.hasClass("fm-del-message")){
				$.get(HREF);
				BTN.parents(".show-hide-props").fadeOut(400,function(){
					BTN.parents(".show-hide-props").remove();
				});
			}else
				location = HREF;
		}else{
			return false;
		}
	});
	return false;
});
$(document).on("click",".forum-message-wrap [data-bx-viewer=image]", function(){
	var IconArr = [];
	var MessID = $(this).parents(".show-hide-props").attr("data-id");
	$(".show-hide-props[data-id="+MessID+"] [data-bx-viewer=image]").each(function($k,$v){
		IconArr[$k] = {href:$(this).attr("src")}
	});
	$.fancybox.open(IconArr,{
		padding:0,
		type : "image",
		helpers:  {
			thumbs : {
				width: 50,
				height: 50,
			}
		}
	});
	return false;
});
$(document).on("mouseup",".forum-message-wrap .forum-message-text",function (e) {
	var select = false;
	if (window.getSelection) {
		select = window.getSelection().toString();
	} else if (document.getSelection) {
		select = document.getSelection();
	} else if (document.selection) {
		select = document.selection.createRange().text;
	}

	if (select && select.length > 3) {
		$(".fm-reply-btn .fa-quote-right").remove();
		$("#fm-quote").remove();
		$(this).parents(".show-hide-props").find(".fm-reply-btn").append('<i class="fa fa-quote-right"></i>');

		$("body").append('<div id="fm-quote" style="display:none;">'+select.replace(/(<([^>]+)>)/ig,"")+'</div>');

	}
});
$(document).on("click",".fm-reply-btn",function () {
	var Quote = '';
    $("#IS_COUNTER_MESS").remove();
	if($("textarea[name=POST_MESSAGE]").length > 0) {
		if($("#fm-quote").length > 0 && $(this).children(".fa-quote-right").length > 0){
			Quote = ' [QUOTE]'+$("#fm-quote").text()+'[/QUOTE]';
			$(this).children(".fa-quote-right").remove();
			$("#fm-quote").remove();
		}


		if($("textarea[name=POST_MESSAGE]").val().length > 0){
			$("textarea[name=POST_MESSAGE]").val($("textarea[name=POST_MESSAGE]").val()+'\r\n');
		}
		$("textarea[name=POST_MESSAGE]").val($("textarea[name=POST_MESSAGE]").val()+'('+$(this).attr("data-cnt")+')' + Quote) ;

        $("#REPLIER").append('<input type="hidden" id="IS_COUNTER_MESS" name="IS_COUNTER_MESS" value="'+$(this).attr("data-cnt")+'"/>');
		var CurBtn = $(this);
		var prevTop = $(".post-form-wrap").parent().offset().top;
		CurBtn.parents(".show-hide-props").after($(".post-form-wrap").parent());
	}
	return false;
});

$(document).on("click",".fm-select-menu",function(){
	return false;
});
$(document).on("click",".fm-select-btn",function(){
	$(this).attr("href",$(this).attr("href")+"&PERIOD="+$(this).children("select").val());
});
function ReplaceLinkToImg() {
	$(".forum-message-text a").each(function(){
		var MessID = $(this).parents(".show-hide-props").attr("data-id");
		var URL = null;
		var pattern = /^https?:\/\/.*\.(?:jpe?g|gif|png)$/i;
		URL = pattern.exec($(this).text());
		if(URL !== null){
			$(this).after("<div><img rel='m"+MessID+"' data-bx-viewer='image' data-bx-src='"+URL+"' src='"+URL+"' /></div>");
		}
	});
}

BX.ready(function(){
	BX.addCustomEvent("onPullEvent", function(module_id,command,params) {
		if(module_id == 'forum'){
			if(command == 'new-message' && window.TID == params.TID && window.UID != params.UID) {
				if($("#postjectior-board .show-hide-props:last").length > 0)
					var MID = $("#postjectior-board .show-hide-props:last").attr("data-id");
				else
					var MID = $(".well .show-hide-props:last").attr("data-id");
				if(isNaN(parseInt(MID,10)))
					MID = 1;

				$.post("?ACTION=GET_LAST_MESSAGE&MID="+MID,function (data) {
					var messData = $(data);
					$("#postjectior-board").append(messData).find(".alert").remove();


					$(messData).css({"background-color": "#ebf4eb"}).animate({"background-color": ""}, 1500,function () {
						$(this).css("background-color","");
					});
					$(".show-hide-props[data-id]").each(function () {
						if($(".show-hide-props[data-id="+$(this).attr("data-id")+"]").length > 1){
							$(".show-hide-props[data-id="+$(this).attr("data-id")+"]:last").remove();
						}
					});
					$(document).ready(function(){
						$('.comment-ref').cluetip({
							activation: 'click',
							width: 350,
							attribute: 'href',
							closeText: '<i class="fa fa-times"></i>',
							closePosition: 'title',
							sticky: true,
							ajaxCache: false,
						});

					});
				});
			}
		}
	});
});



$(document).on("click",".ft-save-sort",function () {
    var date = new Date(new Date().getTime() + 365*24*60*60* 1000);
    document.cookie = "smesslist="+$(this).attr('data-param')+"; path=/; expires=" + date.toUTCString();
});

/* End */
;
; /* Start:/bitrix/templates/.default/components/infostart/forum_main.post_form/adaptive/script.js*/
if (typeof oForumForm != "object")
	var oForumForm = {};
var MessageMax = 64000;

function quoteMessageEx(author, mid)
{
	if (typeof document.forms["REPLIER"] != "object" || document.forms["REPLIER"] == null)
		return false;
	init_form(document.forms["REPLIER"]);
	oForumForm[document.forms["REPLIER"].id].quote(author, mid);
}

function CreatePalette()
{
	if (oForumForm['PALETTE'])
		return oForumForm['PALETTE'];
	var color_range = {0 : "00", 1 : "33", 2 : "66", 3 : "99", 4 : "BB", 5 : "FF"};
	var rgb = {'R' : 0, 'G' : 0, 'B' : 0, 'color' : ''};
	var oDiv = document.body.appendChild(document.createElement("DIV"));
	oDiv.id = 'palette';
	oDiv.className = 'palette';
	oDiv.style.position = 'absolute';
	oDiv.style.width = '199px';
	oDiv.style.height = '133px';
	oDiv.style.border = 'none';
	oDiv.style.visibility = 'hidden';
	var table = document.createElement("TABLE");
	table.className = 'palette';
	var tbody = table.appendChild(document.createElement('TBODY'));
	for (var ii = 0; ii < 216; ii++)
	{
		if (ii%18 == 0)
			var row = tbody.appendChild(document.createElement('TR'));
		rgb['R'] = ii%6; rgb['G'] = Math.round(ii/36)%6; rgb['B'] = Math.round(ii/6)%6;
		rgb['color'] = '' + color_range[rgb['R']] + '' + color_range[rgb['G']] + '' + color_range[rgb['B']];
		var cell = row.appendChild(document.createElement('TD'));
		var img = cell.appendChild(document.createElement('IMG'));
		img.src = '/bitrix/components/bitrix/forum.post_form/templates/.default/images/bbcode/empty_for_ie.gif';
		cell.id = 'color_' + rgb['color'];
		cell.style.backgroundColor = '#' + rgb['color'];
		cell.onmousedown = function(e){
				e = (jsUtils.IsIE() || !e ? window.event : e);
				jsUtils.PreventDefault(e);
				window.color_palette = '#' + this.id.replace('color_', '');}
	}
	oDiv.appendChild(table);
	oForumForm['PALETTE'] = oDiv;
	return oForumForm['PALETTE'];
}

/* Form functions */
function init_form(form)
{
	if (typeof(form) != "object")
		return false;
	if (!oForumForm[form.id] || typeof(oForumForm[form.id]) != "object")
	{
		oForumForm[form.id] = new PostForm(form);
		oForumForm[form.id].Init(form);
		oForumForm[form.id].onkeydown = function(e){};
		oForumForm[form.id].onmouseover = function(e){};
	}
	return;
}

function PostForm()
{
	this.real_tags = {};
	this.form = false;
	this.stack = [];
	this.tags =  {
		"SPOILER" : "tag_spoiler",
		"B" : "simple_tag",
		"I" : "simple_tag",
		"U" : "simple_tag",
		"S" : "simple_tag",
		"CODE" : "simple_tag",
		"QUOTE" : "simple_tag",
		"COLOR" : "simple_tag",
		"FONT" : "simple_tag",
		"SIZE" : "simple_tag",
		"PALETTE" : "show_palette",
		"URL" : "tag_url",
		"IMG" : "tag_image",
		"LIST" : "tag_list",
		"VIDEO" : "tag_video",
		"TRANSLIT" : "translit",
		"SMILES_DINAMIC" : "show_smiles_dinamic",
		"SMILES_STATIC" : "show_smiles_static"};
	this.template = '<form class="forum-form" id="forum_#ID#_form" name="forum_#ID#_form" onsubmit="return false;">' +
		'<table class="forum-popup" cellpadding="0" cellspacing="0" border="0"><thead><tr><td>' +
			'<div class="close" onmousedown="oForumForm[\'#FORM_ID#\'].check_submit(event, \'C\', \'#ID#\');" return false;">' +
				'<img src="/bitrix/components/bitrix/forum.post_form/templates/.default/images/bbcode/empty_for_ie.gif" /></div>' +
			'#TITLE#</td></tr></thead>' +
		'<tbody><tr><td>#BODY#</td></tr></tbody>' +
		'<tfoot><tr><td>' +
			'<button type="button" name="ok" onclick="oForumForm[\'#FORM_ID#\'].check_submit(event, \'OK\', \'#ID#\');">' +
				oText['BUTTON_OK'] + '</button>' +
			'<button type="button" name="cancel" onclick="oForumForm[\'#FORM_ID#\'].check_submit(event, \'C\', \'#ID#\');">' +
				oText['BUTTON_CANCEL'] + '</button>' +
/*			'<div class="button ok" onmouseover="this.className+=\' over\'" onmouseout="this.className=\'button ok\'" ' +
				' onclick="this.className+=\' click\'; ">' +
				'<img src="/bitrix/components/bitrix/forum.post_form/templates/.default/images/bbcode/empty_for_ie.gif" /></div>' +
			'<div class="button cancel" onmouseover="this.className+=\' over\'" onmouseout="this.className=\'button cancel\'" ' +
				' onclick="this.className+=\' click\'; oForumForm[\'#FORM_ID#\'].check_submit(event, \'C\', \'#ID#\');">' +
				'<img src="/bitrix/components/bitrix/forum.post_form/templates/.default/images/bbcode/empty_for_ie.gif" /></div>' + */
		'</td></tr></tfoot></table></form>';
	this.item_template = '<div class="forum-field"><span class="title">#TITLE#</span>#BODY#</div>';


	this.additional_params = {"translit" : 0};
	this.oCursor = {"text" : "", "start" : 0, "end" : 0};
	this.nav = 'none';
	var t = this;
	this.popupMenu = false;
	this.bTranslited = false;
	this.active = null;

	this.Init = function(form)
	{
		if (this.form)
			return true;
		if (typeof(form) != "object" || typeof(form["POST_MESSAGE"]) != "object")
			return false;
		this.form = form;
		/* Simple tags */
		var oDivs = this.form.getElementsByTagName('A');
		if (oDivs && oDivs.length > 0)
		{
			for (var ii = 0; ii < oDivs.length; ii++)
			{
				if (!(oDivs[ii] && oDivs[ii].id && oDivs[ii].id.substring(0, 5) == "form_"))
					continue;
				oDiv = oDivs[ii];
				if (!oDiv.id || oDiv.name == "smiles")
					continue;
				id = oDiv.id.substring(5).toUpperCase();

				oDiv.onclick = oDiv.onmousedown = function(e){
					e = (jsUtils.IsIE() || !e ? window.event : e);
					jsUtils.PreventDefault(e);
					if (e.type == 'mousedown' && jsUtils.IsOpera())
					{
						t.saveSelection = t.GetSelection();
					}
					if (e.type == 'click')
					{
						t.format_text(this, e);
						t.saveSelection = false;
					}
				}
				oDiv.onmouseover = function(){this.className += ' marked';};
				oDiv.onmouseout = function(){this.className = this.className.replace(/marked/, '').replace('  ', ' ');};

				if (jsUtils.IsOpera() && oDiv.title)
					oDiv.title = oDiv.title.replace(/\(alt+([^)])+\)/gi, '');
				this.real_tags[id] = oDiv;
			}
		}
		if (this.form['FONT'])
		{
			this.form['FONT'].onmousedown = function(e){t.saveSelection = t.GetSelection();};
			this.form['FONT'].onchange = function(e){t.format_text(this, e)};
			this.form['FONT'].onmouseover = function(){this.className += ' marked';};
			this.form['FONT'].onmouseout = function(){this.className = this.className.replace(/marked/, '').replace('  ', ' ');};
		}
		// Smiles
		var image = this.form.getElementsByTagName("img");
		if (image && image.length > 0)
		{
			for (var ii = 0; ii < image.length; ii++ )
			{
				if (image[ii].className == "smiles" || image[ii].className == "smiles-list")
				{
					image[ii].onclick = image[ii].onmousedown = function(e){
						e = (jsUtils.IsIE() || !e ? window.event : e);
						jsUtils.PreventDefault(e);
						if (e.type == 'click')
						{
							t.emoticon(this);
						}
					}
//					this.real_tags["SMILES"] = true;
				}
			}
		}
		this.form["POST_MESSAGE"].onkeyup = t.check_keyup;
		this.form["POST_MESSAGE"].onkeypress = t.check_ctrl_enter;
		this.form["POST_MESSAGE"].onfocus = function(e){this.hasfocus = true};
		this.form["POST_MESSAGE"].onblur = function(e){this.hasfocus = false;};
		this.template = this.template.replace(/\#FORM_ID\#/g, this.form.id);
		return true;
	},
	this.check_submit = function(e, action, id)
	{
		e = (jsUtils.IsIE() || !e ? window.event : e);
		if (e)
			jsUtils.PreventDefault(e);
		id = (id == false ? t.active : id);
		var close = true;
		if (action == 'OK')
		{
			close = t["tag_" + id]('format_text');
		}
		if (close)
			t.Hide();
	},
	this.check_keypress = function(e)
	{
		if(!e) e = window.event
		if(!e) return false;
		if(e.keyCode == 27)
			t.check_submit(false, 'C', false);
		return;
	},
	this.check_keyup = function(e)
	{
		if(!e) e = window.event
		if(!e) return;
		if(!e.altKey) return;
		if(e.keyCode == 73)
			t.format_text({'id' : 'form_i', 'value' : ''}, e);
		else if(e.keyCode == 85)
			t.format_text({'id' : 'form_u', 'value' : ''}, e);
		else if(e.keyCode == 66)
			t.format_text({'id' : 'form_b', 'value' : ''}, e);
		else if(e.keyCode == 81)
			t.format_text({'id' : 'form_quote', 'value' : ''}, e);
		else if(e.keyCode == 80)
			t.format_text({'id' : 'form_code', 'value' : ''}, e);
		else if(e.keyCode == 71)
			t.tag_image();
		else if(e.keyCode == 72)
			t.tag_url(true);
		else if(e.keyCode == 76)
			t.tag_list();
	},

	this.check_ctrl_enter = function(e)
	{
		if(!e)
			e = window.event;
		if((e.keyCode == 13 || e.keyCode == 10) && e.ctrlKey){
			$("#REPLIER [type=submit]").click();
		}
			//t.form.submit();
		//return;
	},

	this.GetSelection = function()
	{
		if (this.form["POST_MESSAGE"].hasfocus == true && typeof(this.form["POST_MESSAGE"].selectionStart) != 'undefined')
		{
			return this.form["POST_MESSAGE"].value.substr(this.form["POST_MESSAGE"].selectionStart,
				this.form["POST_MESSAGE"].selectionEnd - this.form["POST_MESSAGE"].selectionStart);
		}
		else if (this.saveSelection)
		{
			return this.saveSelection;
		}
		else if (document.selection && document.selection.createRange)
		{
			return document.selection.createRange().text;
		}
		else if (window.getSelection)
		{
			return window.getSelection() + '';
		}
		else
		{
			return false;
		}
	},

	this.Show = function(id, data)
	{
		if (!data)
			return false;
		var oDiv = document.getElementById('forum_popup_' + this.form.id + '_post_form');
		if (!oDiv)
		{
			oDiv = document.body.appendChild(document.createElement("DIV"));
			oDiv.id = 'forum_popup_' + this.form.id + '_post_form';
		}
		oDiv.style.visible = 'hidden';
		oDiv.className = "forum-popup-postform";
		oDiv.style.position = 'absolute';
		oDiv.innerHTML = data;

		jsUtils.addEvent(document, "keypress", t.check_keypress);
		var res = jsUtils.GetWindowSize();
		var pos = {};
		if (t.active != id)
		{
			this.Hide();
			t.active = id;
			pos['top'] = parseInt(res["scrollTop"] + res["innerHeight"]/2 - oDiv.offsetHeight/2);
			pos['left'] = parseInt(res["scrollLeft"] + res["innerWidth"]/2 - oDiv.offsetWidth/2);
			FJCFloatDiv.Show(oDiv, pos["left"], pos["top"], false, true, true);
		}

		return false;
	},
	this.Hide = function()
	{
		if (t.active == null)
			return false;
		t.active = null;
		var oDiv = document.getElementById('forum_popup_' + t.form.id + '_post_form');
		FJCFloatDiv.Close(oDiv);
		jsUtils.removeEvent(document, "keypress", t.check_keypress);
		return false;
	},

	this.Insert = function (ibTag, ibClsTag, postText)
	{
		ibTag = (ibTag && ibTag.length > 0 ? ibTag : "");
		ibClsTag = (ibClsTag && ibClsTag.length > 0 ? ibClsTag : "");
		postText = (postText && postText.length > 0 ? postText : "");
		if (ibTag.length <= 0 && ibClsTag.length <= 0 && postText.length <= 0)
			return true;
		var bReplaceText = (!postText ? false : true);
		var sSelectionText = this.GetSelection();

		if (!this.form["POST_MESSAGE"].hasfocus)
		{
			this.form["POST_MESSAGE"].focus();
		}

		var isSelect = (sSelectionText ? 'select' : bReplaceText ? 'after' : 'in');
		if (bReplaceText)
			postText = ibTag + postText + ibClsTag;
		else if (sSelectionText)
			postText = ibTag + sSelectionText + ibClsTag;
		else
			postText = ibTag + ibClsTag;

		if (typeof(this.form["POST_MESSAGE"].selectionStart) != 'undefined')
		{
			var currentScroll = this.form["POST_MESSAGE"].scrollTop;
			var selection = {
				"start" : this.form["POST_MESSAGE"].selectionStart,
				"end" : this.form["POST_MESSAGE"].selectionEnd};

			this.form["POST_MESSAGE"].value = this.form["POST_MESSAGE"].value.substr(0, selection["start"]) +
				postText + this.form["POST_MESSAGE"].value.substr(selection["end"]);

			if (isSelect == 'select')
			{
				this.form["POST_MESSAGE"].selectionStart = selection["start"];
				this.form["POST_MESSAGE"].selectionEnd = selection["start"] + postText.length;
			}
			else if (isSelect == 'in')
			{
				this.form["POST_MESSAGE"].selectionStart = selection["start"] + ibTag.length;
				this.form["POST_MESSAGE"].selectionEnd = selection["start"] + ibTag.length;
			}
			else
			{
				this.form["POST_MESSAGE"].selectionStart = selection["start"] + postText.length;
				this.form["POST_MESSAGE"].selectionEnd = selection["start"] + postText.length;
			}
			this.form["POST_MESSAGE"].scrollTop = currentScroll;
		}
		else if (document.selection && document.selection.createRange)
		{
			var sel = document.selection.createRange();
			var selection_copy = sel.duplicate();
			postText = postText.replace(/\r?\n/g, '\r\n');
			sel.text = postText;
			sel.setEndPoint('StartToStart', selection_copy);
			sel.setEndPoint('EndToEnd', selection_copy);
			if (isSelect == 'select')
			{
				sel.collapse(true);
				postText = postText.replace(/\r\n/g, '1');
				sel.moveEnd('character', postText.length);

			}
			else if (isSelect == 'in')
			{
				sel.collapse(false);
				sel.moveEnd('character', ibTag.length);
				sel.collapse(false);
			}
			else
			{
				sel.collapse(false);
				sel.moveEnd('character', postText.length);
				sel.collapse(false);
			}
			sel.select();
		}
		else
		{
			// failed - just stuff it at the end of the message
			this.form["POST_MESSAGE"].value += text;
		}
		return true;
	},

	this.format_text = function(oObj, e)
	{
		e = (jsUtils.IsIE() || !e ? window.event : e);
		jsUtils.PreventDefault(e);
		if (!oObj || !oObj.id)
			return false;
		var id = oObj.id.substring(5).toUpperCase();

		if (this.tags[id] == 'simple_tag')
		{
			var tag_start = tag_name = id;
			if (tag_name == 'FONT' || tag_name == 'COLOR')
				tag_start += "=" + oObj.value;

			if ((!jsUtils.in_array(tag_name, this.stack) || this.GetSelection()) &&
				 !(tag_name == 'FONT' && oObj.value == 'none'))
			{
				if (!this.Insert("[" + tag_start + "]", "[/" + tag_name + "]"))
				{
					this.stack.push(tag_name);
					if (this.real_tags[id])
						this.real_tags[id].className += ' opened';
				}
			}
			else
			{
				var res = false;
				while (res = this.stack.pop())
				{
					this.Insert("[/" + res + "]", "");
					if (this.real_tags[res])
						this.real_tags[res].className = this.real_tags[res].className.replace(/opened/, '').replace('  ', ' ');
					if (res == tag_name)
						break;
				}
			}
		}
		else if (this.tags[id] == 'show_palette')
		{
			this.show_palette(oObj);
		}
		else if (this.tags[id] == 'show_smiles_dinamic')
		{
			this.show_smiles_dinamic(oObj);
		}
		else if (this.tags[id] == 'show_smiles_static')
		{
			this.show_smiles_static(oObj);
		}
		else if (this.tags[id] == 'translit')
		{
			res = this.translit();
			if (this.real_tags[id])
			{
				if (res)
					this.real_tags[id].className += ' opened translited';
				else
					this.real_tags[id].className = this.real_tags[id].className.replace(/opened/, '').replace(/translited/, '').replace('  ', ' ');
			}
		}
		else if (this.tags[id])
		{
			this[this.tags[id]](true);
		}
	},

	this.emoticon = function(element)
	{
		this.Insert(" ", " ", element.alt);
	},

	this.tag_image = function()
	{
		var FoundErrors = '';
		var need_loop = true;
		var oFields = {
			"URL" : {
				"text" : oText['enter_image'],
				"default" : "http://",
				"error" : oErrors['no_url'],
				"value" : ""}};
		var selection = t.GetSelection();
		if (selection != false && selection.search(/^(http|https|news|ftp|aim|mailto)\:\/\//gi) > -1)
		{
			oFields["URL"]["default"] = selection;
		}
		else
		{
			selection = false;
		}

		for (var ii in oFields)
		{
			need_loop = true;
			do
			{
				var res = prompt(oFields[ii]["text"], oFields[ii]["default"]);
				if (res == null)
				{
					need_loop = false;
					return false;
				}
				else if (res.length <= 0)
				{
				}
				else
				{
					oFields[ii]["value"] = res;
					need_loop = false;
				}
			}
			while(need_loop);
		}
		this.Insert("[IMG]", "[/IMG]", oFields["URL"]["value"]);
	},

	this.tag_video = function(action)
	{
		action = (action == 'format_text' ? 'format_text' : 'show_data');
		var sError = "";
		var path = "";
		var selection = t.GetSelection();
		if (selection != false && selection.search(/^(http|https|news|ftp|aim|mailto)\:\/\//gi) > -1)
			path = selection.replace(/[\<\>]/gi, "");
		var sBody = "";
		if (action == 'format_text')
		{
			var form = false;
			for(var ii in document.forms)
			{
				if (document.forms[ii].name == 'forum_video_form')
					form = document.forms[ii];
			}
			if (!form)
				return true;
			var width = parseInt(form["width"].value);
			var height = parseInt(form["height"].value);
			var path = form["path"].value;
			var preview = form["preview"].value;
			if (path.length <= 0)
			{
				action = 'show_data';
				sBody = "<div class='forum-error'>" + oErrors['no_path'] + "</div>";
			}
		}
		if (action == 'show_data')
		{
			sBody = sBody +
				this.item_template.replace(/\#TITLE\#/g, oText["path"]).replace(/\#BODY\#/g, '<input type="text" name="path" value="' + path + '">') +
				this.item_template.replace(/\#TITLE\#/g, oText["preview"]).replace(/\#BODY\#/g, '<input type="text" name="preview" value="">') +
				this.item_template.replace(/\#TITLE\#/g, oText["width"]).replace(/\#BODY\#/g, '<input type="text" name="width" value="400">') +
				this.item_template.replace(/\#TITLE\#/g, oText["height"]).replace(/\#BODY\#/g, '<input type="text" name="height" value="300">');
			var sData = this.template.replace(/\#ID\#/g, "video").replace(/\#TITLE\#/g, oText["video"]).replace(/\#BODY\#/g, sBody);
			this.Show('video', sData);
			return false;
		}
		this.Insert("[VIDEO WIDTH=" + width + " HEIGHT=" + height +
			(preview.length > 0 ? ' PREVIEW="' + preview + '"' : '') + "]", "[/VIDEO]", path);
		return true;
	},

	this.tag_list = function()
	{
		var thelist = "";
		var need_loop = true;
		do
		{
			var res = prompt(oText['list_prompt'], "");
			if (res == null)
			{
				need_loop = false;
			}
			else if (res.replace(/^\s\s*/, '').replace(/\s\s*$/, '').length <= 0)
			{
				need_loop = false;
			}
			else
			{
				thelist = thelist + "[*]" + res + "\n";
			}
		}
		while(need_loop);
		this.Insert("[LIST]\n", "[/LIST]\n", thelist);
	},

	this.closeall = function()
	{
		var res = false;
		while(res = this.stack.pop())
		{
			this.Insert("[/" + res + "]", "");
			if (this.real_tags[res])
				this.real_tags[res].className = this.real_tags[res].className.replace(/opened/, '').replace('  ', ' ');
		}
	},

	this.tag_url = function()
	{
		var FoundErrors = '';
		var need_loop = true;
		var oFields = {
			"URL" : {
				"text" : oText['enter_url'],
				"default" : "http://",
				"error" : oErrors['no_url'],
				"value" : ""},
			"TITLE" : {
				"text" : oText['enter_url_name'],
				"default" : "My Webpage",
				"error" : oErrors['no_title'],
				"value" : ""}};
		var selection = t.GetSelection();
		if (selection != false)
		{
			if (selection.search(/^(http|https|news|ftp|aim|mailto)\:\/\//gi) > -1)
			{
				oFields["URL"]["default"] = selection;
			}
			else
			{
				oFields["TITLE"]["default"] = selection;
			}
		}

		for (var ii in oFields)
		{
			need_loop = true;
			do
			{
				var res = prompt(oFields[ii]["text"], oFields[ii]["default"]);
				if (res == null)
				{
					need_loop = false;
					return false;
				}
				else if (res.length <= 0)
				{
				}
				else
				{
					oFields[ii]["value"] = res;
					need_loop = false;
				}
			}
			while(need_loop);
		}
		this.Insert("[URL=" + oFields["URL"]["value"] + "]", "[/URL]", oFields["TITLE"]["value"]);
		return false;
	},

	this.tag_spoiler = function()
	{
		var FoundErrors = '';
		var need_loop = true;
		var oFields = {
			"URL" : {
				"text" : 'Введите подпись к спойлеру',
				"default" : "Скрытый текст",
				"error" : 'Укажите текст',
				"value" : ""},
			"TITLE" : {
				"text" : 'Введите скрытый текст',
				"default" : "Скрытый текст",
				"error" : 'Укажите текст',
				"value" : ""}};
		var selection = t.GetSelection();
		if (selection != false)
		{

			oFields["TITLE"]["default"] = selection;

		}

		for (var ii in oFields)
		{
			need_loop = true;
			do
			{
				if(ii == 'TITLE')
					var res = oFields["TITLE"]["default"];
				else
					var res = prompt(oFields[ii]["text"], oFields[ii]["default"]);

				if (res == null)
				{
					need_loop = false;
					return false;
				}
				else if (res.length <= 0)
				{
					alert("Error! " + oFields[ii]["error"]);
				}
				else
				{
					oFields[ii]["value"] = res;
					need_loop = false;
				}
			}
			while(need_loop);
		}
		this.Insert("[spoiler=" + oFields["URL"]["value"] + "]", "[/spoiler]", oFields["TITLE"]["value"]);
		return false;
	},

	this.translit = function()
	{
		var i = 0;
		var textbody = this.form['POST_MESSAGE'].value;
		var selection = this.GetSelection();
		if (selection != false)
		{
			textbody = selection;
		}

		if (this.bTranslited == false)
		{
			for (i=0; i<capitEngLettersReg.length; i++) textbody = textbody.replace(capitEngLettersReg[i], capitRusLetters[i]);
			for (i=0; i<smallEngLettersReg.length; i++) textbody = textbody.replace(smallEngLettersReg[i], smallRusLetters[i]);
			this.bTranslited = true;
		}
		else
		{
			for (i=0; i<capitRusLetters.length; i++) textbody = textbody.replace(capitRusLettersReg[i], capitEngLetters[i]);
			for (i=0; i<smallRusLetters.length; i++) textbody = textbody.replace(smallRusLettersReg[i], smallEngLetters[i]);
			this.bTranslited = false;
		}

		if (selection != false)
		{
			this.Insert("", "", textbody);
		}
		else
		{
			this.form['POST_MESSAGE'].value = textbody;
		}
		return this.bTranslited;
	},

	this.quote = function (author, mid)
	{
		var selection = "";
		var message_id = 0;
		selection = this.GetSelection();
		if (document.getSelection)
		{
			selection = selection.replace(/\r\n\r\n/gi, "_newstringhere_").replace(/\r\n/gi, " ");
			selection = selection.replace(/  /gi, "").replace(/_newstringhere_/gi, "\r\n\r\n");
		}
		if (selection == "" && mid)
		{
			message_id = parseInt(mid.replace(/message_text_/gi, ""));
			if (message_id > 0)
			{
				var message = document.getElementById(mid);
				if (typeof(message) == "object" && message)
				{
					selection = message.innerHTML;
					selection = selection.replace(/\<br(\s)*(\/)*\>/gi, "\n").replace(/\<script[^\>]*>/gi, '\001').replace(/\<\/script[^\>]*>/gi, '\002');
					selection = selection.replace(/\<noscript[^\>]*>/gi, '\003').replace(/\<\/noscript[^\>]*>/gi, '\004');
					selection = selection.replace(/\001([^\002]*)\002/gi, " ").replace(/\003([^\004]*)\004/gi, " ");
					// Quote & Code
					selection = selection.replace(/\<table class\=\"forum-quote\"\>\<thead\>\<tr\>\<th\>([^<]+)\<\/th\>\<\/tr\>\<\/thead\>\<tbody\>\<tr\>\<td\>/gi, "\001").replace(/\<table class\=\"forum-code\"\>\<thead\>\<tr\>\<th\>([^<]+)\<\/th\>\<\/tr\>\<\/thead\>\<tbody\>\<tr\>\<td\>/gi, "\002").replace(/\<\/td\>\<\/tr\>\<\/tbody\>\<\/table\>/gi, "\003");
					var ii = 0;
					while(ii < 50 && (selection.search(/\002([^\002\003]*)\003/gi) >= 0 || selection.search(/\001([^\001\003]*)\003/gi) >= 0))
					{
						ii++;
						selection = selection.replace(/\002([^\002\003]*)\003/gi, "[CODE]$1[/CODE]").replace(/\001([^\001\003]*)\003/gi, "[QUOTE]$1[/QUOTE]");
					}
					selection = selection.replace(/[\001\002]/gi, "");
					// Cut
					selection = selection.replace(/\<table class=(\'|\")forum-spoiler(\'|\")\>\<thead([^>]+)\>\<tr\>\<th\>\<div\>/gi, "\001").replace(/\<\/div\>\<\/th\>\<\/tr\>\<\/thead\>\<tbody([^>]+)class=(\'|\")forum-spoiler(\'|\")([^>]*)\>\<tr\>\<td\>/gi, "\002");
					var patt1 = /\001([^\002]+)\002([^\001\O02\003]+)\003/g;
					var patt2 = /\001\002([^\001\O02\003]+)\003/g;
					var counter = 1;

					while (patt1.test(selection) == true || patt2.test(selection) == true)
					{
						if (patt1.test(selection) == true)
						{
							selection = selection.replace(patt1, "[CUT=$1]$2[/CUT]");
						}
						if (patt2.test(selection) == true)
						{
							selection = selection.replace(patt2, "[CUT]$1[/CUT]");
						}
						counter++;
						if (counter >= 10)
							break;
					}
					selection = selection.replace(/[\001\002\003]/gi, "");
					// Smiles
					if (this.real_tags["SMILES"])
						selection = selection.replace(/\<img[^>]+alt=\"smile([^\"]+)\"[^>]+\>/gi, "$1");
					// Hrefs
					if (this.real_tags["URL"])
					{
						selection = selection.replace(/\<a[^>]+href=[\"]([^\"]+)\"[^>]+\>([^<]+)\<\/a\>/gi, "[URL=$1]$2[/URL]");
						selection = selection.replace(/\<a[^>]+href=[\']([^\']+)\'[^>]+\>([^<]+)\<\/a\>/gi, "[URL=$1]$2[/URL]");
					}
					selection = selection.replace(/\<[^\>]+\>/gi, " ").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, "\"");
				}
			}
			else if (mid.length > 0)
			{
				selection = mid;
			}
		}
		if (selection != "")
		{
			selection = selection.replace(/\&shy;/gi, "");
			if (author != null && author)
            {
                author = author.replace(/\<[^\>]+\>/gi, " ").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, "\"");
				selection = author + oText['author'] + selection;
            }
			this.Insert("[QUOTE]", "[/QUOTE]", selection);
			return true;
		}
		return false;
	},

	this.show_palette = function(oObj)
	{
		if (!oObj){return false};
		var oPalette = CreatePalette();
		if (!this.popupMenu)
		{
			window.ForumPopupMenu.prototype.ShowMenu = function(control, div)
			{
				var pos = {"top" : 20, "left" : 20};
				this.PopupHide();
				if (typeof(control) == "object")
				{
					id = control.id;
					pos = jsUtils.GetRealPos(control);
					this.ControlPos = pos;
					this.oControl = control;
				}

				this.oDiv = div;
				if (this.oDiv)
				{
					pos["top"] = pos["bottom"];
					this.PopupShow(pos, this.oDiv);
				}
			}
			window.ForumPopupMenu.prototype.CheckClick = function(e)
			{
				if(!this.oDiv){return;}
				if (this.oDiv.style.visibility != 'visible' || this.oDiv.style.display == 'none')
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
				{
					if (window.color_palette)
					{
						t.format_text({'id' : 'form_color', 'value' : window.color_palette, 'className' : ''}, e);
						this.PopupHide();
					}
				}

				if(this.ControlPos)
				{
					var pos = this.ControlPos;
					if(x >= pos['left'] && x <= pos['right'] && y >= pos['top'] && y <= pos['bottom'])
						return;
				}
				this.PopupHide();
			}

			this.popupMenu = new ForumPopupMenu();
		}
		this.popupMenu.ShowMenu(oObj, oPalette);
	},

	this.show_smiles_dinamic = function(oObj, status, send_data)
	{
		if (!oObj || !this.form){return false};
		status = (status == 'hide' ? 'hide' : 'show');
		send_data = (send_data == "N" ? "N" : "Y");
		var index = this.form.name.replace("REPLIER", "");
		if (!this.oDivSmiles)
		{
			this.oDivSmiles = document.getElementById('forum_smiles_line' + index);
			this.real_tags['SMILES_DINAMIC'].style.visibility = 'hidden';
			this.real_tags['SMILES_DINAMIC'].style.display = '';
			this.params_smiles = {'passive':{'width' : (this.form.POST_MESSAGE.offsetWidth - this.real_tags['SMILES_DINAMIC'].offsetWidth)},
				'active' : {'width' : this.form.POST_MESSAGE.offsetWidth}};
			this.real_tags['SMILES_DINAMIC'].style.display = 'none';
			this.real_tags['SMILES_DINAMIC'].style.visibility = 'visible';

			var res = this.real_tags['SMILES_DINAMIC'].cloneNode(true);
			res.innerHTML = oText['smile_hide'];
			res.id = res.id + '_hide';
			res.onclick = function(){t.show_smiles_dinamic(this, 'hide'); return false;}
			res.style.display = 'block';

			var res1 = document.createElement('DIV');
			res1.className = "forum-reply-field forum-reply-field-hidesmiles";
			res1.appendChild(res);
			this.oDivSmiles.appendChild(res1);
		}
		if (status == 'show')
		{
			this.oDivSmiles.className = this.oDivSmiles.className.replace(/forum\-smiles\-corrected/gi, "");
			this.oDivSmiles.style.width = this.params_smiles['active']['width'] + 'px';
			this.real_tags['SMILES_DINAMIC'].style.display = 'none';
		}
		else
		{
			this.oDivSmiles.className += " forum-smiles-corrected";
			this.oDivSmiles.style.width = this.params_smiles['passive']['width'] + 'px';
			this.real_tags['SMILES_DINAMIC'].style.display = '';
		}
		if (phpVars['isAuthorized'] == "Y" && send_data == "Y")
		{
			var TID = CPHttpRequest.InitThread();
			CPHttpRequest.SetAction(TID, function(){});
			CPHttpRequest.Send(TID, '/bitrix/components/bitrix/forum/templates/.default/user_settings.php',
			{"save":'smiles_position', "value":status, "sessid":t.form.sessid.value});
		}
		return false;
	},

	this.show_smiles_static = function(oObj, send_data)
	{
		if (!oObj || !this.form){return false};
		send_data = (send_data == "N" ? "N" : "Y");

		var index = this.form.name.replace("REPLIER", "");
		if (oObj.name == 'smile_hide')
		{
			oObj.parentNode.parentNode.previousSibling.style.display = 'block';
			oObj.parentNode.parentNode.style.display = 'none';
		}
		else
		{
			oObj.parentNode.parentNode.style.display = 'none';
			oObj.parentNode.parentNode.nextSibling.style.display = 'block';
		}
		if (phpVars['isAuthorized'] == "Y" && send_data == "Y")
		{
			var TID = CPHttpRequest.InitThread();
			CPHttpRequest.SetAction(TID, function(){});
			CPHttpRequest.Send(TID, '/bitrix/components/bitrix/forum/templates/.default/user_settings.php',
			{"save":'smiles_position', "value":(oObj.name == 'smile_hide' ? 'hide' : 'show'), "sessid":t.form.sessid.value});
		}
		return false;
	}
}
var ValidateFormACTIVE = false;
$(document).ready(function () {
	$("#REPLIER").submit(function () {

		$("#REPLIER [required]:visible").each(function() {
			$(this).valid();
		});

		if (document.formnoauthuser) {
			return false;
		}

		$("#selectr_newtopic").parents('td').find(".state-success,.state-error").removeClass("state-success state-error").next('em').remove();
		if($("#selectr_newtopic").length > 0 && $("#selectr_newtopic").val() < 1) {
			$("#selectr_newtopic").parent('label').addClass("state-error");
			$("#selectr_newtopic").parents('.state-error').after('<em style="display: block" class="invalids">Выберите раздел</em>');
		}

		$("[name='TAGS[]']").parents('td').find(".state-success,.state-error").removeClass("state-success state-error").next('em').remove();
		if($("[name='TAGS[]']").length > 0 && (/*$("[name='TAGS[]']").val() == null ||*/ $("[name='TAGS[]']").val() != null && $("[name='TAGS[]']").val().length > 5)){
			$("[name='TAGS[]']").parents('label').addClass("state-error");
			/*if($("[name='TAGS[]']").val() == null){
				$("[name='TAGS[]']").parents('.state-error:first').after('<em style="display: block" class="invalids">Выберите теги</em>')
			}else{*/
				$("[name='TAGS[]']").parents('.state-error:first').after('<em style="display: block" class="invalids">Можно указать максимум 5 тегов</em>')
			/*}*/
		}

		if($("#REPLIER .invalid:visible:first, #REPLIER .select2-error:visible:first, #REPLIER .state-error:visible").length > 0){
			return false;
		}else{
			$("#REPLIER").validate().settings.ignore = "*";
		}
	});
});
function ValidateForm(form, ajax_type)
{
	if (ValidateFormACTIVE)return false;


	if($("#REPLIER .invalid:visible:first, #REPLIER .select2-error:visible:first, #REPLIER .state-error:visible").length > 0){
		$('html,body').animate({
			scrollTop: (parseInt($('#REPLIER .invalid:visible, #REPLIER .select2-error:visible, #REPLIER .state-error:visible').first().offset().top-100, 10))
		}, 400);
	}


	if (typeof form != "object" || typeof form.POST_MESSAGE != "object")
		return false;
	MessageMax = 64000;

	var errors = "";
	var MessageLength = form.POST_MESSAGE.value.length;

	if (form.TITLE && (form.TITLE.value.length < 2))
		errors += oErrors['no_topic_name'];

	if (MessageLength < 2)
		errors += oErrors['no_message'];
    else if ((MessageMax != 0) && (MessageLength > MessageMax))
		errors += oErrors['max_len'].replace(/\#MAX_LENGTH\#/gi, MessageMax).replace(/\#LENGTH\#/gi, MessageLength);

	if (errors != "")
	{
		return false;
	}

	var arr = form.getElementsByTagName("submit");
	for (var butt in arr)
		butt.disabled = true;

	ValidateFormACTIVE = true;

	if (ajax_type == 'Y' && window['ForumPostMessage'])
	{
		ForumPostMessage(form);
	}

	return true;
}
function ShowLastEditReason(checked, div)
{
	if (div)
	{
		if (checked)
			div.style.display = 'block';
		else
			div.style.display = 'none';
	}
}
function ShowVote(oObj)
{
	if (oObj)
	{
		if (oObj.name == 'from_tag')
		{
			oObj.parentNode.removeChild(oObj);
			document.getElementById('vote_switcher').parentNode.removeChild(document.getElementById('vote_switcher'));
		}
		else
		{
			oObj.parentNode.parentNode.removeChild(oObj.parentNode);
		}
		document.getElementById('vote_params').style.display = '';
	}
	return false;
}

function vote_remove_answer(anchor, iQuestion, permanent)
{
	if (typeof anchor != "object" || anchor == null)
		return false;
	else if (!confirm(oText['vote_drop_answer_confirm']))
		return false;
	$(anchor).parents('li').remove();
	return false;
}

function vote_add_answer(oLi, iQuestion, iAnswer)
{
	iQuestion = parseInt(iQuestion);
	iAnswer = parseInt(iAnswer);
	vote_init_question(iQuestion);

	iAnswer = (arVoteParams[iQuestion]['max_a'] > iAnswer ? arVoteParams[iQuestion]['max_a'] : iAnswer);
	iAnswer++;
	arVoteParams[iQuestion]['max_a'] = iAnswer;
	arVoteParams[iQuestion]['count_a']++;

	var answer = document.createElement('LI');

	answer.innerHTML = arVoteParams['template_answer'].replace(/\#Q\#/g, iQuestion).replace(/\#A\#/g, iAnswer);
	oLi.parentNode.insertBefore(answer, oLi);

	if (arVoteParams[iQuestion]['count_a'] >= arVoteParams['count_max_a'])
	{
		oLi.style.display = 'none';
	}
	return false;
}
function vote_init_question(iQuestion, oData)
{
	if (typeof arVoteParams[iQuestion] == "object" && arVoteParams[iQuestion] != null) {
		return true; }
	else if (typeof oData == "object" && oData != null) {
		arVoteParams[iQuestion] = oData;
		return true;}
	arVoteParams[iQuestion] = {'count_a' : 0, 'max_a' : 0};
	try
	{
		arVoteParams[iQuestion]['count_a'] = document.getElementById('MULTI_' + iQuestion).parentNode.nextSibling.getElementsByTagName('li').length;
		arVoteParams[iQuestion]['count_a']--;
	}
	catch(e){}
	return true;
}
function vote_remove_question(anchor, permanent)
{
	if (typeof anchor != "object" || anchor == null)
		return false;
	else if (!confirm(oText['vote_drop_question_confirm']))
		return false;

	$(anchor).parents(".forum-reply-field-vote-question").remove();
	$(".forum-reply-header-main").remove();
	return false;
}
function vote_add_question(iQuestion, oObj)
{
	iQuestion = parseInt(iQuestion);
	iQuestion = (arVoteParams['max_q'] > iQuestion ? arVoteParams['max_q'] : iQuestion);
	iQuestion++;
	arVoteParams['max_q'] = iQuestion;
	var question = jsUtils.CreateElement("DIV", {"class": "forum-reply-field-vote-question"});
	question.innerHTML = arVoteParams['template_question'].replace(/\#Q\#/g, iQuestion);
	oObj.parentNode.insertBefore(question, oObj);
	arVoteParams['count_q']++;
	if (arVoteParams['count_q'] >= arVoteParams['coun_max_q'])
	{
		document.getElementById("vote_question_add").style.display = 'none';
	}
	return false;
}
$(document).on("submit","form#REPLIER",function () {
	$("#REPLIER").css({"opacity":".4"});
	$("#REPLIER [type=submit]").attr("disabled","disabled").html("Загрузка...");
});
$(document).on("click",".fm-cancel-post-form",function () {
	if($(".main-wrap-postform .post-form-wrap").length < 1) {
		$(".main-wrap-postform").html($(".post-form-wrap").parent());
	}

	return false;
});
$(document).ready(function(){
	$('#poster_selector input').click(function(){
		$('.special-blocks').hide('medium');
		if ($(this).val() == 'G') {
			$('#anon_block').show('medium');
		} else if ($(this).val() == 'E') {
			$('#signature_block').show('medium');
		}
	});
	$('#selectr_newtopic').change(function(){
		if ($(this).val().substr(0, 3) == 'GID')
			$(this).val(iCurrentFID);
		else
			iCurrentFID = $(this).val();
	});
	$('#payed_topic_link a').click(function(){
		$('#payed_topic_block').show();
		$('#payed_topic_link').hide();
		return false;
	});
	$('#payed_topic_cancel').click(function(){
		$('#payed_topic_block').hide();
		$('#payed_topic_link').show();
		$('#pay_for_decision').val('');
		return false;
	});
	$('#payed_topic_max').click(function(){
		if(confirm("С вашего счета будут списаны все Sm, продолжить?")){
			$('#pay_for_decision').val($('span', this).html());
		}
		return false;
	});
	$('.forum_avatar_change a').click(function(){
		$(this).remove();
		$('#forum_avatar_load').show();
		if (!$.browser.msie) {
			$('#forum_avatar_load').click();
		}
		return false;
	});
});





$(document).ready(function(){

	if(typeof $("#REPLIER").validate != 'undefined') {
       $("#REPLIER").validate({
            rules: {
                NEW_EMAIL: {
                    required: true,
					email: true
                },
				TITLE: {
					required: true
				},
                USER_PASSWORD: {
					/*required: true,*/
                    minlength: 3,
                    maxlength: 20
                },
                POST_MESSAGE: {
                    required: true
                }
            },
            messages: {
				NEW_EMAIL: {
                    required: 'Введите E-mail',
					email: 'Укажите корректный E-mail'
                },
                USER_PASSWORD: {
                    required: 'Введите пароль'
                },
                POST_MESSAGE: {
                    required: 'Небходимо заполнить поле "Сообщение"'
                }
            },
            errorPlacement: function (error, element) {
                error.insertAfter(element.parent());
            }
        });
    }
	$.validator.messages.required   = 'Поле обязательно для заполнения';
	$( "textarea[name=POST_MESSAGE]" ).focusin(function() {
		$('.forum_bbcode_line').show();
	});
	$( "textarea[name=POST_MESSAGE]" ).focusout(function() {
		$('.forum_bbcode_line').hide();
	});

	if(supports_html5_storage() && $("textarea[name=POST_MESSAGE]").length > 0){
		var ID = (isNaN(parseInt($("textarea[name=POST_MESSAGE]").attr("data-id"),10))?0:parseInt($("textarea[name=POST_MESSAGE]").attr("data-id"),10));
		if (ID < 1) {
			var POST_MESSAGE = localStorage.getItem('POST_MESSAGE' + ID);
			if (POST_MESSAGE && POST_MESSAGE.length > 0)
				$("textarea[name=POST_MESSAGE]").val(POST_MESSAGE);
		}
	}

});
$(document).on("keyup","textarea[name=POST_MESSAGE]",function(){
	if(supports_html5_storage()){
		var ID = (isNaN(parseInt($(this).attr("data-id"),10))?0:parseInt($(this).attr("data-id"),10));
		localStorage.setItem('POST_MESSAGE'+ID, $(this).val());
	}
})
function supports_html5_storage() {try{return 'localStorage' in window && window['localStorage'] !== null;} catch (e) {return false;}}

//проверка нового email
$(document).on("change","#NEW_EMAIL",function(){
	var SESSID = BX.bitrix_sessid();
	var EMAIL = $("#NEW_EMAIL");
	var NEW_EMAIL  = EMAIL.val();

	$(".new-email-result, .wrap-for-auth, .wrap_use_code, .wrap_use_captcha").hide();
	$(".new-email-result").html('');

	$("#PASSWORD").val('');
	$("#action-rez").html('').removeClass("text-danger text-success");

	if(EMAIL.valid()) {
		$.post("?ACTION=NEW_EMAIL&SESSID=" + SESSID + "&NEW_EMAIL=" + NEW_EMAIL, function (strResult) {
			var arResult = $.parseJSON(strResult);
			if (arResult.ERROR) {
				$(".new-email-result").fadeIn();
				$(".new-email-result").html(arResult.ERROR);
				if (arResult.ACTION) {
					switch (arResult.ACTION) {
						case "SHOW_AUTH":
							$(".wrap-for-auth, .wrap_use_captcha").show();
							if (arResult.ACTION_DOP == 'show_use_code') {
								$(".wrap_use_code").show();
								$(".wrap-for-auth-pass").hide();
							} else {
								$(".wrap-for-auth-pass").show();
								$(".wrap_use_code").hide();
							}
							break;
					}
				}
			} else {
				$(".new-email-result").hide().html('');
				if (arResult.MESSAGE) {
					$(".new-email-result").html(arResult.MESSAGE).fadeIn();
				}
				if (arResult.SETINPUT) {
					$('<input type="hidden" name="CHFORREG" value="pub" />').insertAfter('#NEW_EMAIL');
				}
				if (arResult.RELOAD) {
					window.location.href = window.location.href + '#postform';
					window.location.reload();
				}
			}
			document.formnoauthuser = false;
		});
	}
});

//проверка капчи
$(document).on("change",".captcha-check input",function(){
	var SESSID = BX.bitrix_sessid();
	var CAPTCHA_WORD  = $(this).val();
	var CAPTCHA_SID  = $(".captcha-check input[type=hidden]").val();
	$(".captcha-check i.stat-check").hide();
	$("#action-rez").html('').removeClass("text-danger text-success");

	$.post("?ACTION=CHECK_CAPTCHA&SESSID="+SESSID+"&CAPTCHA_WORD="+CAPTCHA_WORD+'&CAPTCHA_SID='+CAPTCHA_SID, function (strResult) {
		var arResult = $.parseJSON(strResult);
		if(arResult.ERROR){
			$(".captcha-check i.text-danger").fadeIn();
			$("#action-rez").addClass('text-danger').html(arResult.ERROR);
			if(arResult.CAPTCHA_SID && arResult.SRC){
				$(".captcha-check img").attr("src",arResult.SRC);
				$(".captcha-check input[type=hidden]").val(arResult.CAPTCHA_SID);
			}
		}else{
			$(".captcha-check i.text-success").fadeIn();
			$(".captcha-check input").css('border-color','');
		}

	});
});

/* End */
;
; /* Start:/bitrix/php_interface/include/js/modal_form_selection.js*/
$(document).ready(function () {
	/*REQUEST SELECTION*/
	window.fs_sended = false;
	$("body").on("click.eSelection", "#btn-submit-fs", function() {
		if (window.fs_sended)
			return false;
		window.fs_sended = true;
		$('#form-request-wrap-selection').submit();
		return false;
	});
	$("#form-request-wrap-selection").submit(function() {
		$("#form-request-wrap-selection input, #form-request-wrap-selection textarea").css('border-color', '');
		formData = new FormData($("#form-request-wrap-selection").get(0));
		$.ajax({
			url: '/ajax/send_landing_form.php?ACTION=SEND_FORM&RESPONS=request-selection&LPAGE=' + escape(window.location),
			type: 'post',
			contentType: false,
			processData: false,
			data: formData,
			dataType: 'json',
			success: function (arResult) {
				if (arResult.ERROR) {
					$(".send-request-form-selection input[name=" + arResult.FIELD + "], #form-request-wrap-selection textarea[name=" + arResult.FIELD + "]").css('border-color', '#e4aeae');
				} else {
					$(".send-request-form-selection .send-request-body .form-wrap").hide();
					$(".send-request-form-selection .send-request-body .success-message").show().find('p.message-success').append('Ваше обращение зарегистрировано и ему присвоен номер <b>' + arResult.OK + '</b>');
					setTimeout(function () {
						$('.send-request-form-selection').modal('hide');
					}, 2000);
				}
			},
			complete: function () {
				window.fs_sended = false;
			}
		});
		return false;
	});
	$("body").on("click", ".open-modal-form-selection", function () {
		$(".send-request-form-selection").modal();
		return false;
	});
	$('.send-request-form-selection').on('shown.bs.modal', function () {
		$(".focus-it").focus();
	});
	/*END REQUEST SELECTION*/
});
/* End */
;
; /* Start:/bitrix/templates/.default/components/infostart/adv.infostart.banner/right_print/script.js*/
var $source,$len,$now=0,$interval=2000,$delaytext=300,$sep=" ",$intervalN=100,$step,$css;function banner_play(){switch($step){case 0:case 4:$step=5;setTimeout("$step=1",$interval);break;case 1:$step=2;$source.html("");$(".in_banner_image_text").attr("style","");$soursewrap.css("display","block");showtext();break;case 2:break;case 3:$step=4;$source.html("");$soursewrap.css("display","none");$(".in_banner_image_text").attr("style",$css);break;}}function showtext(){if($step==2){$source.append($words[$now]+$sep);$now++;$height=parseInt($(".in_banner_text").height(),10);if($height<=170){$(".in_banner_text").css("bottom","-"+($height/2)+"px");}if($now<$len){setTimeout("showtext()",$delaytext);}else{setTimeout("$now=0;$step = 3;",$interval);}}}$(document).ready(function(){$source=$(".in_banner_text");$soursewrap=$(".in_banner_text_wrap");if($source.html()!=null){$words=$source.html().split($sep);$len=$words.length;$css=$(".in_banner_image_text").attr("style");$step=0;if($len>1){setInterval("banner_play()",$intervalN);}}});$(document).ready(function(){var floatBlockClass="";if($(".banner3").length){floatBlockClass=".scroll-sidebar";}if($(floatBlockClass).size()){show_float_block(floatBlockClass);}});function show_float_block(selector){/*$.browser.isMobileDevice=/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLowerCase());*/if(/*$.browser.isMobileDevice||*/$(window).width()<1024||$(window).height()<500||screen.width<1024){return;}if($(".row-for-scroll").outerHeight()<$(".is-sidebar").outerHeight()){return false;}var float_block=$(selector);if(!float_block.size()){return;}var float_block_width=float_block.width();var sidebar=$(".is-sidebar");if(!sidebar.size()){return;}var show_float_block=false;var content_left=$(".row-for-scroll");$(window).bind("scroll resize",function(){if(show_float_block==false){var last_sidebar_item_bottom=sidebar.offset().top+sidebar.outerHeight();}else{var last_sidebar_item_bottom=sidebar.offset().top+sidebar.outerHeight()+float_block.outerHeight()+20;}if($(window).width()<1024||$(window).height()<500||screen.width<1024){return;}if(float_block.outerHeight()+this.pageYOffset>content_left.offset().top+content_left.outerHeight()){if(show_float_block==true){float_block.removeClass("float_block").css("width","auto");}show_float_block=false;}else{if(this.pageYOffset>last_sidebar_item_bottom){if(show_float_block==false){float_block.addClass("float_block");float_block.animate({opacity:0},0,function(){float_block.animate({opacity:1},500);});}show_float_block=true;}else{if(show_float_block==true){float_block.removeClass("float_block").css("width","auto");}show_float_block=false;}}});}

/* End */
;; /* /bitrix/templates/.default/js/highlight1c.js*/
; /* /bitrix/templates/.default/components/infostart/public.detail.new/adaptive/script.js*/
; /* /bitrix/templates/.default/js/elementQuery.js*/
; /* /bitrix/templates/.default/js/spoiler.js*/
; /* /bitrix/templates/adaptive/js/ck_editor/plugins/codesnippet/lib/highlight/highlight.pack.js*/
; /* /bitrix/components/infostart/asd.forum.mess.list/templates/redesign_adpt/script.js*/
; /* /bitrix/templates/.default/components/infostart/forum_main.post_form/adaptive/script.js*/
; /* /bitrix/php_interface/include/js/modal_form_selection.js*/
; /* /bitrix/templates/.default/components/infostart/adv.infostart.banner/right_print/script.js*/

/*
     FILE ARCHIVED ON 17:30:50 Aug 20, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:44:30 Sep 10, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  esindex: 0.019
  exclusion.robots: 0.28
  LoadShardBlock: 184.331 (3)
  CDXLines.iter: 20.891 (3)
  PetaboxLoader3.datanode: 75.725 (4)
  PetaboxLoader3.resolve: 150.754 (4)
  RedisCDXSource: 3.165
  exclusion.robots.policy: 0.26
  load_resource: 57.349
  captures_list: 213.096
*/