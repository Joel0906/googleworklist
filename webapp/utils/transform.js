sap.ui.define([], 

function(){
	return {
		dateFormat : function(inp){
			debugger;
			console.log("date format hit");
			
			var arr = inp.match(/(\d{4})(\d{2})(\d{2})/);
			var date = arr[3]+ '/' +arr[2]+ '/' +arr[1];
			return date;
			
		}	
		
	};
})