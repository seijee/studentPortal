<%@page import="java.util.Set"%>
<%@page import="objectClasses.Group"%>
<%@page import="objectClasses.Person"%>
<%@page import="java.util.List"%>
<!doctype html>
<html lang="en">
<% 
List<Person> people = controllers.ConPerson.getPeople();
%>
<head>
	<meta http-equiv="content-type" content="text/html; charset=iso-8859-1"/>
	<title>jQuery UI Selectable - Serialize</title>
	<link rel="stylesheet" href="./themes/base/jquery.ui.all.css"/>
	<script src="../jq/jquery-1.9.1.js"></script>
	<script src="../jq/ui/jquery.ui.core.js"></script>
	<script src="../jq/ui/jquery.ui.widget.js"></script>
	<script src="../jq/ui/jquery.ui.mouse.js"></script>
	<script src="../jq/ui/jquery.ui.selectable.js"></script>
	<script src="../jq/ui/jquery.ui.effect.js"></script>
	<script src="../jq/ui/jquery.ui.effect-blind.js"></script>
	<script src="../jq/ui/jquery.ui.effect-bounce.js"></script>
	<script src="../jq/ui/jquery.ui.effect-clip.js"></script>
	<script src="../jq/ui/jquery.ui.effect-drop.js"></script>
	<script src="../jq/ui/jquery.ui.effect-explode.js"></script>
	<script src="../jq/ui/jquery.ui.effect-fold.js"></script>
	<script src="../jq/ui/jquery.ui.effect-highlight.js"></script>
	<script src="../jq/ui/jquery.ui.effect-pulsate.js"></script>
	<script src="../jq/ui/jquery.ui.effect-scale.js"></script>
	<script src="../jq/ui/jquery.ui.effect-shake.js"></script>
	<script src="../jq/ui/jquery.ui.effect-slide.js"></script>
	
	<link rel="stylesheet" href="./demos/demos.css"/>

	<style>
	#addTable{
			max-height:  0px;
			margin: 0px;
			padding: 0px;
			overflow: hidden;
		}
	#feedback { font-size: 1.4em; }
	#selectable .ui-selecting { background: #FECA40; }
	#selectable .ui-selected { background: #F39814; color: white; }
	#selectable { list-style-type: none; margin: 0; padding: 0; width: 80%; cursor: default;}
	#selectable li { margin: 3px; padding: 0.4em; font-size: 1.4em; height: 18px; float: left; width: 23%; }
	::selection{
		color:#000000;
	}
	::-moz-selection{
		color:#000000;
	}
	</style>
	<script>
	var people = [<% for (Person p : people){%>"<%=p.getId() %>",<% } %>];
		
	$(function() {
		$( "#selectable" ).selectable({
			stop: function() {
				var addArray = [];
				var result = $( "#select-result" ).empty();
				$( ".ui-selected", this ).each(function() {
					var index = $( "#selectable li" ).index(this);
					result.append( " #" + ( people[index] ) );
					addArray.push(people[index]);
				});
				$st = document.getElementById("addTable");
				$st.innerHTML="";
				for (var i=0;i<addArray.length; i++ ){
					$count = $st.rows.length;
					
					$row = $st.insertRow($count);
					$check = $row.insertCell(0);
					$st.innerHTML += "<td><input type='text' name='student_ids' value='"+addArray[i]+"' hidden=hidden /></td>";
				}
			}
		});
		var selectedEffect = "highlight";
		for (var i=0; i<people.length; i++){
			$("#"+people[i]).delay(i*10).show( selectedEffect,400 );	
		}
	});
	
	

		

		//$( "#selectable li" ).hide();

	</script>
</head>
<body>
	<div hidden="hidden" style="width:50px; height: 50px; background: red;" id="effect" >
	</div>

<form action=".AddMembers" method="POST">
	<select name="gid">
<%
	Set<Group> groups = controllers.Group_DRL.getThemAll();
	for (Group g : groups){
		%>
							<option value="<%= g.getGroup_id() %>"><%= g.getGroup_id() %></option>
		<%
	}
%>
							<option value="new">New Group</option>
						</select><input type="submit" value="Add" />
						
						
						
						
<ol id="selectable">
	<% for (Person p : people){ %>
	<li class="ui-state-default" id="<%= p.getId() %>" hidden="hidden" >
		<%= p.getName() %> [<%= p.getId() %>]
	</li>
	<% } %>
</ol>






<p id="feedback">
<span>You've selected:</span> <span id="select-result">none</span>.
</p>
<div class="demo-description">
<p>Write a function that fires on the <code>stop</code> event to collect the index values of selected items.  Present values as feedback, or pass as a data string.</p>
</div>
<div style="position: fixed; height: 0px; margin: 0px;bottom: 0px; overflow: hidden">
	<table id="addTable">	
	</table>
</div>
</form>
</body>
</html>
