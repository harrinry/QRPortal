qualityrulesbuilder = {
	
	technologyuri: '',

	printBody :function() {
	
	$('body').html('<!-- The qualityrulestopheader must be hidden when the script is copy/pasted to the Confluence documentation --><div id="qualityrulestopheader"><div id="technologyicon"></div><div id="technologytitle"></div></div><div id="qualityrulesheader"></div><p id="qualityrules"></p> ');
	},
	
	setupFields: function() {
		
		// When you are in Confluence Documentation disable the code below

		$("#technologyicon").css("background-image",'url("'+qualityrules.technologyiconurl+'")');
		$("#technologyicon").css("width",'64px');
		$("#technologyicon").css("height",'64px');
		$("#technologyicon").css("background-size",'64px');

		$("#technologytitle").text(qualityrules.technologyname);

		$.getJSON( "../"+qualityrulesbuilder.technologyuri+".json", function( data ) {
		  var items = [];
		  $.each( data, function( key, val ) {
		    items.push( "<option id='" + val["href"] + "'>" + val["name"] + "</option>" );
		  });

		  $( "<select>", {
		    "id": "versions",
		    html: items.join( "" )
		  }).appendTo( "#qualityrulestopheader" );

		  $('#versions').change(function(){

			qualityrulesbuilder.loadQualityRules();

		  });

			qualityrulesbuilder.loadQualityRules();

		});
	},
	
	loadQualityRules: function()
	{		
		// When you are in Confluence Documentation disable the code below
		var url = "./"+$('#versions').val()+".json";

		// When you are in Confluence Documentation enable the code below
		// var url = "./"+$('#versions').val()+".json"

		$.getJSON(url, function( data ) {

			if(data)
			{
				var txt = '<table class="qualityruletable"><thead><tr><td class="tdid">Metric ID</td><td class="tdname">Name</td><td class="tdciritical">Critical</td><td class="tdstatus">Status</td></tr></thead>'; //do not forget to init the variable

				$.each( data, function( key, val ) {

					txt += '<tbody>';

					var criticalcode = "";

					if(val["critical"] == false)
					{
						criticalcode = '<span class="greencheck">&check;</span>';
					}

					txt += '<tr id="'+ val["id"] +'" class="summary" href="'+val["href"]+'"><td>'+val["id"]+'</td><td>'+val["name"] + '</td><td>'+criticalcode+'</td><td>'+val["status"]+'</td></tr>';
					txt += '<tr id="'+ val["id"] +'-details" class="details"><td colspan="6" class="detailsrule"></td></tr>';
					txt += '</tbody>';
			  	});

				txt = txt + '</table>';

				document.getElementById("qualityrules").innerHTML = txt;
				document.getElementById("qualityrulesheader").innerHTML = '<div class="qualityrulesheaderclear"><div class="qualityrulescounter"></div><div class="qualityrulessearchzone"><div class="qualityrulesinputbox"><input type="search" id="qualityrulessearch"><br>Filter</div></div></div>';

				$('.details').hide()
				qualityrulesbuilder.updateRowCount();
				
				$('#qualityrulessearch').bind('keyup', function() {

					var textvalue = $(this).val();

					//console.log("textvalue="+textvalue);

					$(".summary").find('td').removeClass("highlighted");
					$(".details").hide();

					if(textvalue!='')
					{
						var alltrs = $(".qualityruletable tr.summary");
						alltrs.hide();
						var counter = 0;

						$.each(alltrs,function(index,value) {

							//console.log("value:"+value.childNodes[1].innerText);

							if(value.childNodes[1].innerText.indexOf(textvalue)!==-1)
							{
								$(value).show();
								counter++;
							}	
						});

						updateRelativeRowCount(counter);
					}
					else
					{
						$(".qualityruletable tr.summary").show();
						updateRowCount();
					}

				});

				$('.summary').click(function(){

					var row_url = /*qualityrules.technologyqrrelativepath*/"../../"+$(this).attr("href");
					var row_id = $(this).attr("id");

					$.getJSON(row_url, function( rowdata ) {

						if(rowdata)
						{
							var htmlcontent = "";

							/* Adding rationale */
							var thecontent = rowdata["rationale"];

							if(thecontent)
							{
								htmlcontent += "<h3>Rationale</h3>";
								htmlcontent += "<p>"+thecontent+"</p>";
							}

							/* Adding description */
							var thecontent = rowdata["description"];

							if(thecontent)
							{
								htmlcontent += "<h3>Description</h3>";
								htmlcontent += "<p>"+thecontent+"</p>";
							}

							/* Adding remediation */
							var thecontent = rowdata["remediation"];

							if(thecontent)
							{
								htmlcontent += "<h3>Remediation</h3>";
								htmlcontent += "<p>"+thecontent+"</p>";
							}

							/* Adding sample */
							var thecontent = rowdata["sample"];

							if(thecontent && (thecontent!=''))
							{
								htmlcontent += "<h3>Sample</h3>";
								thecontent = '<div class="sourcecode">'+thecontent+'</div>';
								htmlcontent += "<p>"+thecontent+"</p>";
							}

							/* Adding sample remediation */
							var thecontent = rowdata["remediationSample"];

							if(thecontent && (thecontent!=''))
							{
								htmlcontent += "<h3>Sample Remediation</h3>";
								thecontent = '<div class="sourcecode">'+thecontent+'</div>';
								htmlcontent += "<p>"+thecontent+"</p>";
							}

							/* Adding output */
							var thecontent = rowdata["output"];

							if(thecontent)
							{
								htmlcontent += "<h3>Output</h3>";
								htmlcontent += "<p>"+thecontent+"</p>";
							}

							/* Adding business criteria */
							var thecontent = rowdata["businessCriteria"];

							if(thecontent)
							{
								htmlcontent += "<h3>Technical Criteria</h3>";
								htmlcontent += "<p>"+thecontent+"</p>";
							}


							$('#'+row_id+'-details').find('td:first').html(htmlcontent);
						}

					});

					$("#"+row_id).find('td').toggleClass("highlighted");
					$("#"+row_id+"-details").toggle("fast").toggleClass("highlighted");
				});

			}
		});


	},
	
	updateRelativeRowCount: function(counter)
	{
		$('.qualityrulescounter').text(counter+" of "+$('.qualityruletable tr.summary').length+ " Quality Rules");
	},

	updateRowCount: function()
	{
		$('.qualityrulescounter').text($('.qualityruletable tr.summary').length+ " Quality Rules");
	},

};