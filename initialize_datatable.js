
$('#id_datatable').dataTable({
	      "ajax": {
	          "url": "url_request",
	          "data": {parameter:parameter},
	          "type": "post",
	          "dataType": "text",
	          "dataSrc": function(json){

	          	return json;
	          }
	      },
	
	      "columns": [
	
	          { data: "column",
	        	  data: "column",
	        	  render: function(data, type, row){

	        		  return "whateveryouwant(not money)";
	        		  
	        	  }
	          },
	          { 
	            data: "column"
	          },
	          { data: "column",
	        	  render: function(data, type, row){
	        		  
	        		  return "";
	        		  
	        	  }
	          }
	
	      ],
	
		  "order": [[1, 'desc']]
	});
