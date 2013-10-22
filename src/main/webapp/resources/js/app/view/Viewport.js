Ext.define('Arise.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout : 'border'
});

Ext.onReady(function(){ 
    Ext.define('gridstore', { 
       extend    : 'Ext.data.Store' 

      ,fields    : [ 
        {name: 'company'} 
         ,{name: 'price', type: 'float'} 
         ,{name: 'change', type: 'float'} 
         ,{name: 'lastChange', type: 'date', dateFormat: 'n/j h:ia'} 
         ,{name: 'industry'} 
      ] 

      ,data: [ 
         { company: '3m Co',                    price: 71.72,  change: 0.12,  lastChange: '4/2 12:00am',  industry: 'Manufacturing'  } 
        ,{ company: 'Alcoa Inc',                  price: 29.01,  change: 0.42,  lastChange: '4/1 12:00am',  industry: 'Manufacturing'  } 
        ,{ company: 'Altria Group Inc',                price: 83.81,  change: 0.28,  lastChange: '4/3 12:00am',  industry: 'Manufacturing'  } 
        ,{ company: 'American Express Company',            price: 52.55,  change: 0.01,  lastChange: '4/8 12:00am',  industry: 'Finance'      } 
        ,{ company: 'American International Group, Inc.',      price: 64.13,  change: 0.31,  lastChange: '4/1 12:00am',  industry: 'Services'    } 
        ,{ company: 'AT&amp;T Inc.',                price: 31.61,  change: -0.48,  lastChange: '4/8 12:00am',  industry: 'Services'    } 
        ,{ company: 'Boeing Co.',                  price: 75.43,  change: 0.53,  lastChange: '4/8 12:00am',  industry: 'Manufacturing'  } 
        ,{ company: 'Caterpillar Inc.',                price: 67.27,  change: 0.92,  lastChange: '4/1 12:00am',  industry: 'Services'    } 
        ,{ company: 'Citigroup, Inc.',                price: 49.37,  change: 0.02,  lastChange: '4/4 12:00am',  industry: 'Finance'      } 
        ,{ company: 'E.I. du Pont de Nemours and Company',      price: 40.48,  change: 0.51,  lastChange: '4/1 12:00am',  industry: 'Manufacturing'  } 
        ,{ company: 'Exxon Mobil Corp',                price: 68.1,  change: -0.43,  lastChange: '4/3 12:00am',  industry: 'Manufacturing'  } 
        ,{ company: 'General Electric Company',            price: 34.14,  change: -0.08,  lastChange: '4/3 12:00am',  industry: 'Manufacturing'  } 
        ,{ company: 'The Procter &amp; Gamble Company',        price: 61.91,  change: 0.01,  lastChange: '4/1 12:00am',  industry: 'Manufacturing'  } 
        ,{ company: 'United Technologies Corporation',        price: 63.26,  change: 0.55,  lastChange: '4/1 12:00am',  industry: 'Computer'    } 
      ], 
    }); 


    var store = Ext.create('gridstore'); 
     
    store.sort('industry', 'ASC'); 

    var celledit  = Ext.create('Ext.grid.plugin.CellEditing', { 
      clicksToEdit: 1 
    }); 

    var grid  = Ext.create('Ext.grid.Panel', { 
       renderTo  : Ext.getBody() 
      ,store    : store 
       
      ,plugins: [ celledit ] 
      ,viewConfig  : { 
         stripeRows  : false  
      } 

      ,columnLines  : true 

      ,columns  : [ 
        { 
           header    : "Industry" 
          ,width    : 200 
          ,sortable  : true 
          ,dataIndex  : 'industry' 
          ,editor    : { xtype: 'textfield' } 
          ,renderer  : function (value, meta, record, rowIndex, colIndex, store) { 
            var first = !rowIndex || value !== store.getAt(rowIndex - 1).get('industry'), 
              last = rowIndex >= store.getCount() - 1 || value !== store.getAt(rowIndex + 1).get('industry'); 

            if (first) { 
              var i = rowIndex + 1, span = 1; 
              while (i < store.getCount() && value === store.getAt(i).get('industry')) { 
                i++; 
                span++; 
              } 
              var rowHeight = 20, padding = 6, 
                height = (rowHeight * (i - rowIndex) - padding) + 'px'; 
              meta.style = 'height:' + height + ';line-height:' + height + ';'; 
              meta.tdAttr = 'rowspan = ' + span; 
            } 
            else{ 
              meta.tdAttr='style="display:none;"'; 
            } 
            return first ? value : ''; 
          } 
        } 
        ,{ 
           header    : "Company" 
          ,width    : 300 
          ,sortable  : true 
          ,dataIndex  : 'company' 
          ,editor    : { xtype: 'textfield' } 
        } 
        ,{ 
           header    : "Price" 
          ,width    : 100 
          ,sortable  : true 
          ,renderer  : Ext.util.Format.usMoney 
          ,dataIndex  : 'price' 
        } 
        ,{ 
           header    : "Change" 
          ,width    : 100 
          ,sortable  : true 
          ,dataIndex  : 'change' 
          ,renderer  : Ext.util.Format.usMoney 
          ,editor    : { xtype: 'numberfield' } 
        } 
        ,{ 
           header    : "Last Updated" 
          ,width    : 100 
          ,sortable  : true 
          ,renderer  : Ext.util.Format.dateRenderer('m/d/Y') 
          ,dataIndex  : 'lastChange' 
          ,editor    : { xtype: 'datefield' } 
        } 
      ] 
    }); 
  });