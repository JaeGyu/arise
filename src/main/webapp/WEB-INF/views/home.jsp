<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=8"/>
    <meta charset="UTF-8"/>
    <title>샘플</title> 
    <link rel="stylesheet" type="text/css" href="resources/js/extjs/resources/css/ext-all.css">
    <script type="text/javascript" src="resources/js/extjs/ext-debug.js"></script>
    <script type="text/javascript" src="resources/js/extjs/locale/ext-lang-ko.js"></script>
    <script type="text/javascript" >    
    Ext.onReady(function() {
        var panel = new Ext.create('Ext.panel.Panel',{
            title : '시작해 볼까',
            html : '<P>  The time on the server is ${serverTime}. </P>',
            renderTo : Ext.getBody()
        });
         
    });
    </script>
</head>
<body>
</body>
</html>