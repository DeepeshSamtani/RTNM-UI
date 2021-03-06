<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, shrink-to-fit=no, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="">
  <!-- <base href="./" /> -->
  <title>NPM(Network Performance Monitoring)</title>
  <!-- <link rel="icon" type="image/x-icon" href="./favicon.ico" /> -->
  <!-- Bootstrap Core CSS -->
  <link href="./assets/css/bootstrap.min.css" rel="stylesheet">
  <link href="./assets/css/font-awesome.css" rel="stylesheet">
  <!-- Custom CSS -->
  <link href="./assets/css/login.css" rel="stylesheet">
  <link href="./assets/css/simple-sidebar.css" rel="stylesheet">
  <link href="./assets/css/toastr.min.css" rel="stylesheet">
  <link href="./assets/css/style.css" rel="stylesheet">
  <link href="./assets/css/bootstrap-tagsinput.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,400i,500,700,900" rel="stylesheet">
  <link href="./assets/css/custom-controls.css" rel="stylesheet">
  <link rel="stylesheet" href="./assets/css/jquery-ui.css">
  <link rel="stylesheet" href="./assets/css/jquery.mCustomScrollbar.css">
  <script src="./assets/js/jquery.js"></script>
  <script src="./assets/js/bootstrap.min.js"></script>
  <!-- <script src="//code.jquery.com/jquery-1.12.4.js"></script> -->
  <script src="./assets/js/jquery-ui.js"></script>
   <script src="./assets/js/jquery-ui-timepicker-addon.js"></script>
  <script src="./assets/js/jquery-ui-sliderAccess.js"></script>
    <script src="./assets/js/query-builder.min.js"></script>
     <script src="./assets/js/jquery.mCustomScrollbar.concat.min.js"></script>
  <link rel="stylesheet" href="./assets/css/jquery-ui-timepicker-addon.css">
</head>
<body>
<%	String groupName=request.getHeader("GroupName");
	String UserName = request.getHeader("SM_USER");%>
  <app-root>Loading...</app-root>

 <script> window.eenpm ={};
 window.eenpm.SM_USER = '<%= UserName %>';
  window.eenpm.groupName ='<%= groupName %>';
  </script>
  
<script type="text/javascript" src="inline.bundle.js"></script><script type="text/javascript" src="polyfills.bundle.js"></script><script type="text/javascript" src="styles.bundle.js"></script><script type="text/javascript" src="vendor.bundle.js"></script><script type="text/javascript" src="main.bundle.js"></script></body>

</html>