
$('#id_datatable').dataTable({
	      "ajax": {
	          "url": "url_request",
	          "dataSrc": ""
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
