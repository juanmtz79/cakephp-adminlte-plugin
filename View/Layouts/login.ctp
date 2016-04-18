<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title><?php echo AdminLTE_Header; ?></title>
<!-- Tell the browser to be responsive to screen width -->
<meta
	content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
	name="viewport">
<!-- Bootstrap 3.3.5 -->
  <?php echo $this->Html->css('AdminLTE.bootstrap'); ?>
  <!-- Font Awesome -->
  <?php echo $this->Html->css('AdminLTE.font-awesome'); ?>
  <!-- Ionicons -->
  <?php echo $this->Html->css('AdminLTE.ionicons'); ?>
  <!-- Msg -->
  <?php echo $this->Html->css('AdminLTE.msg'); ?>
  <!-- Theme style -->
  <?php echo $this->Html->css('AdminLTE.AdminLTE'); ?>
  <!-- AdminLTE Skins. Choose a skin from the css/skins
       folder instead of downloading all of them to reduce the load. -->
  <?php echo $this->Html->css('AdminLTE.skins/'.AdminLTE_Skin); ?>
  <?php echo $this->fetch('css'); ?>
  <!--[if lt IE 9]>
  <?php echo $this->Html->script('AdminLTE.html5shiv/html5shiv-3.7.3', array('inline' => true)); ?>
  <?php echo $this->Html->script('AdminLTE.respond/respond-1.4.2', array('inline' => true)); ?>
  <![endif]-->
</head>
<body class="hold-transition login-page">
<?php echo $this->fetch('content'); ?>
<?php echo $this->Html->script('AdminLTE.jQuery/jQuery-2.2.1', array('inline' => true)); ?>
<!-- Bootstrap 3.3.5 -->
<?php echo $this->Html->script('AdminLTE.bootstrap/bootstrap-3.3.6', array('inline' => true)); ?>
<!-- Bootbox 4.4.0 -->
<?php echo $this->Html->script('AdminLTE.bootbox/bootbox-4.4.0', array('inline' => true)); ?>
<!-- Noty 2.3.8 -->
<?php echo $this->Html->script('AdminLTE.noty/noty-2.3.8', array('inline' => true)); ?>
<!-- Center 1.1.1 -->
<?php echo $this->Html->script('AdminLTE.center/center-1.1.1', array('inline' => true)); ?>
<!-- Msg 1.0.7 -->
<?php echo $this->Html->script('AdminLTE.msg/msg-1.0.7', array('inline' => true)); ?>
<!--  Application Script -->
<?php echo $this->Html->script('AdminLTE.adminlte/app', array('inline' => true)); ?>
<?php echo $this->fetch('script'); ?>
 <script>
 	$(this).addTemplateSetup(function(){<?php echo $this->fetch('scriptAddTemplate'); ?>});
 	<?php echo $this->fetch('scriptBody'); ?>
 	$(function(){$(document).ready(function(){$(document.body).applyTemplateSetup();});});
 </script>
</body>
</html>