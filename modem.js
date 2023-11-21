
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
<meta http-equiv="X-UA-Compatible" content="IE=edge;chrome=1"/>
<link href="Cuscss/index.css?2023061923395347-2068654386" rel="stylesheet" type="text/css" />
<script src="../resource/common/jquery.min.js?2023061923395347-2068654386" type="text/javascript"></script>
<script src="../resource/common/util.js?2023061923395347-2068654386" type="text/javascript"></script>
<script language="JavaScript" src="frame.asp"></script>
<script language="JavaScript" src="../../resource/spanish/ampdes.html?2023061923395347-2068654386"></script>
<script language="JavaScript" src="../../resource/spanish/ssmpdes.js?2023061923395347-2068654386"></script>
<script language="JavaScript" src="../../resource/spanish/bbspdes.html?2023061923395347-2068654386"></script>
<script language="JavaScript" type="text/javascript">
var CfgMode ='TELMEX5GV5';
var countNum = 0;

var DoubleFreqFlag = '1';
var BaseInstFacKeyChgF = '0,0,0';
var BaseInstFacKeyChgF2g = BaseInstFacKeyChgF.split(',')[0];
var BaseInstFacKeyChgF5g = BaseInstFacKeyChgF.split(',')[1];
var isFirstCheckWlanPwd = BaseInstFacKeyChgF.split(',')[2];

function FirstCheckWlanPwd()
{
  if (DoubleFreqFlag == 1) {
    if ((BaseInstFacKeyChgF2g == 0) && (BaseInstFacKeyChgF5g == 0)) {
      AlertEx(cfg_wlancfgbasic_language['amp_wlan_pwd_need_change']);
    }
    else if ((BaseInstFacKeyChgF2g == 0) && (BaseInstFacKeyChgF5g == 1)) {
      AlertEx(cfg_wlancfgbasic_language['amp_wlan_pwd_need_change_2G']);
    }
    else if ((BaseInstFacKeyChgF2g == 1) && (BaseInstFacKeyChgF5g == 0)) {
      AlertEx(cfg_wlancfgbasic_language['amp_wlan_pwd_need_change_5G']);
    }
  }
  else {
    if (BaseInstFacKeyChgF2g == 0) {
      AlertEx(cfg_wlancfgbasic_language['amp_wlan_pwd_need_change']);
    }
  }
}

function LoadFrame()
{
  if ((CfgMode.toUpperCase() == "TELMEX5GV5") && (isFirstCheckWlanPwd == "1")) {
      FirstCheckWlanPwd();
  }

  top.countNum = 0;
}
</script>
<title>HUAWEI</title>
</head>
<body onLoad="LoadFrame();"> 
<div id="main"> 
  <div id="header"> 
<script language="JavaScript" type="text/javascript">
    if ((CfgMode.toUpperCase() != 'TELMEXVULA') &&
        (CfgMode.toUpperCase() != 'TELMEXACCESS') &&
        (CfgMode.toUpperCase() != 'TELMEXACCESSNV') &&
        (CfgMode.toUpperCase() != 'TELMEXRESALE')) {
var htmlhead = '<div id="headerLogoImg"><div id="ImageTelmex"><span id="ImageTelmexText">';
htmlhead += '<a href="http://www.telmex.com" target="_blank"><img src="/images/logo_telmex.gif" width="125" border="0" /></a></span></div></div>';
document.write(htmlhead);
} else {
var htmlhead = '<div id="headerLogoImg" style="background: url(../images/banner_logodf.gif) repeat-x center; height: 70px; width: 144px;"></div>';
document.write(htmlhead);
}
</script>
     
    <div id="headerContent"> 
      <div id="headerInfo"> 
        <div id="headerTitle"></div> 
        <div id="HerfTelmex"><span id="HerfTelmexText"></span></div>
<div id="headerLogout"><span id="headerLogoutText"></span> </div> 
      </div> 
      <div id="headerTab"> 
        <ul> </ul> 
      </div> 
    </div> 
    <div id="headerSpace">&nbsp;</div> 
  </div> 
  <div id="center"> 
    <div id="nav"> 
      <ul> </ul> 
    </div> 
    <div id="content"> 
      <div id="topNav"> <span id="topNavMainMenu"></span>&nbsp;&gt;&nbsp;<span id="topNavSubMenu"></span> </div> 
      <div id="frameWarpContent">
        <iframe id="frameContent" frameborder="0" height="100%" marginheight="0" marginwidth="0" scrolling="no" width="100%"></iframe> 
      </div> 
    </div> 
  </div> 
  <div id="footer"> 
    <table border="0" cellpadding="0" cellspacing="0"> 
      <tr> 
        <td id="footerLogo"></td> 
        <td id="footerText"></td> 
      </tr> 
    </table> 
  </div> 
  <div id="fresh"> 
    <iframe frameborder="0" height="100%" marginheight="0" marginwidth="0" scrolling="no" src="refresh.asp" width="100%"></iframe> 
  </div> 
</div> 
</body>
</html>
