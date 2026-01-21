// ==UserScript==
// @name         New Time Parking System
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Parking system enhancements: Auto-refresh, Dark mode, Shortcuts
// @author       User
// @match        https://pms.parkingplusai.com/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/CheaterMer/PMS/refs/heads/main/PMS%20Helper.js
// @downloadURL  https://raw.githubusercontent.com/CheaterMer/PMS/refs/heads/main/PMS%20Helper.js
// ==/UserScript==

(function(){
  if(window.__tm_darkmode_inited)return;
  window.__tm_darkmode_inited=true;

  var KEY='tm_dark_mode_enabled';

  function addStyle(css){
    var st=document.createElement('style');
    st.type='text/css';
    st.textContent=css;
    document.head.appendChild(st);
  }

  function loadEnabled(){
    try{
      return localStorage.getItem(KEY)==='1';
    }catch(e){
      return false;
    }
  }

  function saveEnabled(v){
    try{
      localStorage.setItem(KEY,v?'1':'0');
    }catch(e){}
  }

  function applyDark(v){
    var root=document.documentElement;
    if(!root)return;
    if(v)root.classList.add('tm-dark');
    else root.classList.remove('tm-dark');
  }

  if(!window.__tmDark)window.__tmDark={};
  window.__tmDark.load=loadEnabled;
  window.__tmDark.save=saveEnabled;
  window.__tmDark.apply=applyDark;

  addStyle(
    'html.tm-dark,html.tm-dark body{background:#252526!important;color:#e5e5e5!important;}' +
    '#wrap{background:inherit;}' +
    'html.tm-dark #wrap{background:#252526!important;}' +
    'html.tm-dark .nav_header{background:#202738!important;border-bottom:1px solid #151a24!important;}' +
    'html.tm-dark .nav_header h1,html.tm-dark .nav_header .comp_sel{color:#e5e5e5!important;}' +
    'html.tm-dark .header{background:#232a3b!important;border-bottom:1px solid #151a24!important;color:#e5e5e5!important;}' +
    'html.tm-dark .header .nav_gnb>li>a{color:#e5e5e5!important;}' +
    'html.tm-dark .header .nav_gnb>li>a:hover{background:#333843!important;color:#ffffff!important;}' +
    'html.tm-dark .sidebar,html.tm-dark #sidebar{background:#1f1f22!important;border-right:1px solid #2e2e32!important;color:#e5e5e5!important;}' +
    'html.tm-dark .disk_area{background:#2a2a2e!important;border-bottom:1px solid #333!important;color:#e5e5e5!important;}' +
    'html.tm-dark .disk_area ul{background:transparent!important;}' +
    'html.tm-dark .disk_area li{background:#2b2d31!important;color:#e5e5e5!important;}' +
    'html.tm-dark .disk_area p{color:#e5e5e5!important;}' +
    'html.tm-dark .nav_lnb ul li a{color:#e5e5e5!important;}' +
    'html.tm-dark .nav_lnb ul li.active>a,html.tm-dark .nav_lnb ul li a:hover{background:#333843!important;color:#ffffff!important;}' +
    'html.tm-dark .lnb_ico i{color:#90caf9!important;}' +
    'html.tm-dark .lnb_txt{color:#e5e5e5!important;}' +
    'html.tm-dark .content,html.tm-dark #content{background:#252526!important;color:#e5e5e5!important;}' +
    'html.tm-dark .content h2{color:#ffffff!important;}' +
    'html.tm-dark .section{background:#2b2d31!important;border:1px solid #3c3c3c!important;}' +
    'html.tm-dark .group_srch,html.tm-dark .group_srch_plot{background:transparent!important;}' +
    'html.tm-dark .group_srch li,html.tm-dark .group_srch_plot .tit{color:#e5e5e5!important;}' +
    'html.tm-dark .keyword_area{background:transparent!important;}' +
    'html.tm-dark .tit{color:#e0e0e0!important;}' +
    'html.tm-dark table,html.tm-dark .tb_lst,html.tm-dark .tb_lst2,html.tm-dark .tb_lst2_v2,html.tm-dark .tb_view{background:#2a2c32!important;color:#e5e5e5!important;}' +
    'html.tm-dark th{background:#2a2c32!important;color:#e5e5e5!important;border-color:#3c3c3c!important;}' +
    'html.tm-dark td{background:transparent!important;color:#e5e5e5!important;border-color:#3c3c3c!important;}' +
    'html.tm-dark table tbody tr{background-color:#2a2c32;}' +
    'html.tm-dark .table-striped>tbody>tr:nth-of-type(odd){background-color:#2a2c32;}' +
    'html.tm-dark .table-striped>tbody>tr:nth-of-type(even){background-color:#31333a;}' +
    'html.tm-dark .table-hover>tbody>tr:hover{background-color:#3e3e42;}' +
    'html.tm-dark input,html.tm-dark select,html.tm-dark textarea{background:#303238!important;color:#e5e5e5!important;border-color:#4b4b4b!important;}' +
    'html.tm-dark .form-control{background:#303238!important;color:#e5e5e5!important;border-color:#4b4b4b!important;}' +
    'html.tm-dark .btn-default,html.tm-dark .btn-secondary{background:#3a3a3d!important;color:#e5e5e5!important;border-color:#4b4b4b!important;}' +
    'html.tm-dark .btn-primary{background:#2979ff!important;border-color:#2979ff!important;color:#ffffff!important;}' +
    'html.tm-dark .btn-info{background:#00acc1!important;border-color:#00acc1!important;color:#ffffff!important;}' +
    'html.tm-dark .btn-danger{background:#e53935!important;border-color:#e53935!important;color:#ffffff!important;}' +
    'html.tm-dark .btn-darkgray{background:#3a3a3d!important;border-color:#4b4b4b!important;color:#e5e5e5!important;}' +
    'html.tm-dark .btn_srch{background:#2979ff!important;border-color:#2979ff!important;color:#ffffff!important;}' +
    'html.tm-dark .pagination>li>a,html.tm-dark .pagination>li>span{background:#252526!important;color:#e5e5e5!important;border-color:#3c3c3c!important;}' +
    'html.tm-dark .pagination>.active>a,html.tm-dark .pagination>.active>span{background:#2979ff!important;border-color:#2979ff!important;color:#ffffff!important;}' +
    'html.tm-dark .label,html.tm-dark .badge{background:#3a3a3d!important;color:#e5e5e5!important;}' +
    'html.tm-dark .alert{background:#252526!important;border-color:#3c3c3c!important;color:#e5e5e5!important;}' +
    'html.tm-dark .alert-info{background:#1565c0!important;border-color:#1565c0!important;color:#e3f2fd!important;}' +
    'html.tm-dark .alert-danger{background:#c62828!important;border-color:#c62828!important;color:#ffebee!important;}' +
    'html.tm-dark .modal-content{background:#252526!important;color:#e5e5e5!important;border-color:#3c3c3c!important;}' +
    'html.tm-dark .modal-header{background:#252526!important;border-bottom-color:#3c3c3c!important;color:#e5e5e5!important;}' +
    'html.tm-dark .modal-backdrop{background:#000!important;}' +
    'html.tm-dark .modal-backdrop.in{opacity:0.5!important;}' +
    'html.tm-dark .dropdown-menu{background:#252526!important;border-color:#3c3c3c!important;}' +
    'html.tm-dark .dropdown-menu>li>a{color:#e5e5e5!important;}' +
    'html.tm-dark .dropdown-menu>li>a:hover{background:#2f2f33!important;color:#ffffff!important;}' +
    'html.tm-dark .tm-near-panel{background:#252526!important;color:#e5e5e5!important;border-color:#3c3c3c!important;}' +
    'html.tm-dark .tm-near-panel .tm-header{background:#2d2d30!important;border-bottom-color:#3c3c3c!important;}' +
    'html.tm-dark .tm-near-panel button{background:#3a3a3d!important;color:#e5e5e5!important;border-color:#4b4b4b!important;}' +
    'html.tm-dark .group_alarm .dropdown-menu,html.tm-dark .dropdown-menu[aria-labelledby="dropdownAlarm"]{background:#252526!important;border-color:#3c3c3c!important;color:#e5e5e5!important;}' +
    'html.tm-dark .group_alarm .alarm_header,html.tm-dark .alarm_header{background:#2b2d31!important;border-bottom:1px solid #3c3c3c!important;color:#e5e5e5!important;}' +
    'html.tm-dark .group_alarm .alarm_body,html.tm-dark .alarm_body{background:#252526!important;color:#e5e5e5!important;}' +
    'html.tm-dark .group_alarm .alarm_footer,html.tm-dark .alarm_footer{background:#252526!important;border-top:1px solid #3c3c3c!important;}' +
    'html.tm-dark #alarmTabContent,html.tm-dark #alarmTabContent .tab-pane{background:#252526!important;color:#e5e5e5!important;}' +
    'html.tm-dark .alarm_lst{background:#252526!important;}' +
    'html.tm-dark .alarm_lst li{background:#252526!important;color:#e5e5e5!important;border-bottom:1px solid #333!important;}' +
    'html.tm-dark .alarm_lst li.item_new{background:#303238!important;}' +
    'html.tm-dark .alarm_lst .item_lft,html.tm-dark .alarm_lst .item_rgt{background:transparent!important;color:#e5e5e5!important;}' +
    'html.tm-dark .alarm_lst .time{color:#ffffff!important;}' +
    'html.tm-dark .alarm_lst .btn_del{background:#3a3a3d!important;color:#e5e5e5!important;border:1px solid #4b4b4b!important;}' +
    'html.tm-dark .nav.nav-tabs{border-bottom:1px solid #3c3c3c!important;}' +
    'html.tm-dark .nav.nav-tabs>li>a{background:#2b2d31!important;color:#e5e5e5!important;border:1px solid #3c3c3c!important;border-bottom-color:#3c3c3c!important;}' +
    'html.tm-dark .nav.nav-pills{background:#000!important;padding:4px;border-radius:4px;}' +
    'html.tm-dark .nav.nav-pills>li>a{background:#2b2d31!important;color:#e5e5e5!important;border:1px solid #3c3c3c!important;}' +
    'html.tm-dark .nav.nav-tabs>li.active>a,html.tm-dark .nav.nav-tabs>li.active>a:focus,html.tm-dark .nav.nav-tabs>li.active>a:hover{background:#252526!important;color:#ffffff!important;border-color:#3c3c3c #3c3c3c transparent!important;}' +
    'html.tm-dark .nav.nav-tabs.nav-tabs2>li>a{background:#2b2d31!important;color:#e5e5e5!important;border:1px solid #3c3c3c!important;border-bottom-color:#3c3c3c!important;}' +
    'html.tm-dark .nav.nav-tabs.nav-tabs2>li.active>a,html.tm-dark .nav.nav-tabs.nav-tabs2>li.active>a:focus,html.tm-dark .nav.nav-tabs.nav-tabs2>li.active>a:hover{background:#252526!important;color:#ffffff!important;border-color:#3c3c3c #3c3c3c transparent!important;}' +
    'html.tm-dark .nav.nav-pills>li.active>a,html.tm-dark .nav.nav-pills>li.active>a:focus,html.tm-dark .nav.nav-pills>li.active>a:hover{background:#2979ff!important;color:#ffffff!important;}' +
    'html.tm-dark .footer{background:#1e1e1e!important;border-top:1px solid #333!important;color:#9e9e9e!important;}'
  );
  addStyle('html.tm-dark table.tb.tb_lst{border-collapse:separate!important;border-spacing:0 3px!important;}html.tm-dark table.tb.tb_lst tbody tr>td{padding-top:4px!important;padding-bottom:4px!important;}');

  function ensureBody(cb){
    if(document.body)cb();
    else document.addEventListener('DOMContentLoaded',cb);
  }

  ensureBody(function(){
    var enabled=loadEnabled();
    applyDark(enabled);
  });
})();

(function(){
  var settingsKey='unpaid_time_settings';
  var defaultSettings={enable:true,autoScroll:true,desktopNotify:true,soundNotify:true,nearPairNotify:false,interval:30000,timeWindowMin:3,neighborDepth:3,panelScale:1,panelCollapsed:false,showPairPanel:true,statusHighlight:true,imagePopupEnabled:true,plateEditEnabled:true,entryPreviewEnabled:true,sidebarToggleEnabled:true,show10MinButton:true,customAlarmEnabled:true,unpaidModeEnabled:false,rowClickFeePageEnabled:true,autoAlarm:false,autoAlarmInterval:10000};
  var s=localStorage.getItem(settingsKey);var S;try{S=s?JSON.parse(s):{};}catch(e){S={};}for(var k in defaultSettings){if(!Object.prototype.hasOwnProperty.call(S,k))S[k]=defaultSettings[k];}
  function save(){localStorage.setItem(settingsKey,JSON.stringify(S))}
  var _autoAlarmTimer=null;
  function startAutoAlarmInterval(){
    if(_autoAlarmTimer){clearInterval(_autoAlarmTimer);_autoAlarmTimer=null}
    if(S.autoAlarm){
      var interval=parseInt(S.autoAlarmInterval)||10000;
      _autoAlarmTimer=setInterval(function(){
        if(typeof window.refreshAlarmContents==='function'){
          window.refreshAlarmContents();
        }
      },interval);
    }
  }
  function addStyle(css){var st=document.createElement('style');st.textContent=css;document.head.appendChild(st)}
  addStyle('.tm-near-highlight{background:#ffe9e9!important;transition:background .6s}.tm-near-pair{outline:2px solid #ff7675}.tm-near-panel{position:fixed;left:10px;bottom:10px;z-index:99999;background:#fff;border:1px solid #ddd;padding:6px 8px;border-radius:6px;font-size:12px;box-shadow:0 2px 8px rgba(0,0,0,.1)}.tm-near-panel label{margin-right:8px}.tm-near-panel button{margin-left:6px}.tm-reviewed{background:#fff6cc!important;outline:2px solid #f1c40f}.tm-review-panel{position:fixed;left:10px;bottom:70px;z-index:99999;background:#fff;border:1px solid #ddd;padding:6px 8px;border-radius:6px;font-size:12px;box-shadow:0 2px 8px rgba(0,0,0,.1)}.btn-review{margin-left:6px}'+
           'html.tm-dark .tm-near-panel,html.tm-dark .tm-review-panel,html.tm-dark .tm-master-panel{background:#2b2d31!important;border-color:#3c3c3c!important;color:#e5e5e5!important;box-shadow:0 2px 8px rgba(0,0,0,.6)!important}html.tm-dark .tm-master-panel label{color:#e5e5e5!important}html.tm-dark .tm-master-btn{background:#424242!important;color:#e5e5e5!important;border-color:#616161!important}html.tm-dark .tm-sidebar-btn{background:#424242!important;color:#e5e5e5!important;border-color:#616161!important}');
  addStyle('.tm-near-panel .tm-header{display:flex;align-items:center;gap:6px}.tm-near-panel .tm-body{margin-top:6px}.tm-near-panel.collapsed .tm-body{display:none}');
  addStyle('.tm-toast{position:fixed;right:12px;bottom:12px;z-index:999999;max-width:320px;background:#333;color:#fff;padding:10px 12px;border-radius:6px;box-shadow:0 2px 10px rgba(0,0,0,.2);font-size:13px;line-height:1.4}.tm-toast strong{display:block;margin-bottom:6px;font-size:14px}');
  addStyle('.tm-alarm-target{background:transparent!important;outline:2px solid #ffee58;box-shadow:0 0 0 2px rgba(255,238,88,.9),0 0 8px rgba(255,238,88,.9)}.tm-alarm-clicked{background:transparent!important;outline:2px solid #69f0ae;box-shadow:0 0 0 2px rgba(105,240,174,.9),0 0 8px rgba(105,240,174,.9)}');
  addStyle('.tm-status-paid{background:#e3f2fd!important;outline:2px solid #2196f3}.tm-status-before{background:#fff3e0!important;outline:2px solid #ff9800}.tm-status-free{background:#e8f5e9!important;outline:2px solid #2ecc71}.tm-status-unpaid{background:#ffcdd2!important;outline:2px solid #c62828}.tm-status-partial{background:#fff3e0!important;outline:2px solid #ff9800}.tm-status-undefined{background:#ffebee!important;outline:2px solid #f44336}.tm-status-system-out{background:#eceff1!important;outline:2px solid #607d8b}.tm-status-after-hours{background:#f3e5f5!important;outline:2px solid #8e24aa}'+
  'html.tm-dark .tm-status-paid{background:transparent!important;outline:1px solid rgba(66,165,245,.9);box-shadow:0 0 6px rgba(66,165,245,.45)}'+
  'html.tm-dark .tm-status-before{background:transparent!important;outline:1px solid rgba(255,152,0,.9);box-shadow:0 0 6px rgba(255,152,0,.45)}'+
  'html.tm-dark .tm-status-free{background:transparent!important;outline:1px solid rgba(46,204,113,.9);box-shadow:0 0 6px rgba(46,204,113,.45)}'+
  'html.tm-dark .tm-status-unpaid{background:transparent!important;outline:1px solid rgba(198,40,40,.9);box-shadow:0 0 6px rgba(198,40,40,.45)}'+
  'html.tm-dark .tm-status-partial{background:transparent!important;outline:1px solid rgba(255,152,0,.9);box-shadow:0 0 6px rgba(255,152,0,.45)}'+
  'html.tm-dark .tm-status-undefined{background:transparent!important;outline:1px solid rgba(244,67,54,.9);box-shadow:0 0 6px rgba(244,67,54,.45)}'+
  'html.tm-dark .tm-status-system-out{background:transparent!important;outline:1px solid rgba(96,125,139,.9);box-shadow:0 0 6px rgba(96,125,139,.45)}'+
  'html.tm-dark .tm-status-after-hours{background:transparent!important;outline:1px solid rgba(142,36,170,.9);box-shadow:0 0 6px rgba(142,36,170,.45)}');
  addStyle('.tm-plate-undefined{background:#fffde7!important;outline:2px solid #ffeb3b;box-shadow:0 0 0 2px rgba(255,235,59,.9),0 0 10px rgba(255,235,59,.9)}html.tm-dark .tm-plate-undefined{background:transparent!important;outline:1px solid rgba(255,235,59,.95);box-shadow:0 0 6px rgba(255,235,59,.55)}');
  addStyle('html.tm-dark .time{color:#b0bec5!important;}');
  addStyle('html.tm-dark .alarm_lst .item_rgt.tm-time-recent{background:transparent!important;}');
  addStyle('html.tm-dark .alarm_lst .item_rgt.tm-time-recent .time{background:#2b2d31!important;color:#ffffff!important;padding:2px 8px;border-radius:10px;display:inline-block;}');
  addStyle('html.tm-dark .alarm_lst .btn_del{color:#ffffff!important;background:#3a3a3d!important;border:1px solid #4b4b4b!important;}');
  addStyle('.tm-zoom-overlay{position:fixed;left:0;top:0;right:0;bottom:0;background:rgba(0,0,0,.6);z-index:999998}');
  addStyle('.tm-img-zoomed{position:fixed!important;left:50%!important;top:50%!important;transform:translate(-50%,-50%)!important;max-width:80vw!important;max-height:80vh!important;z-index:999999;border-radius:6px;box-shadow:0 4px 16px rgba(0,0,0,.4)}');
  addStyle('html.tm-dark.tm-unpaid-mode table.tb.tb_lst tbody tr td:nth-child(2),html.tm-dark.tm-unpaid-mode table.tb.tb_lst tbody tr td:nth-child(3),html.tm-dark.tm-unpaid-mode table.tb.tb_lst tbody tr td:nth-child(4),html.tm-dark.tm-unpaid-mode table.tb.tb_lst tbody tr td:nth-child(5){width:160px!important}');
  addStyle('.tm-img-overlay{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:1000000;background:#fff;border:1px solid #ddd;border-radius:8px;box-shadow:0 6px 20px rgba(0,0,0,.35);padding:10px;min-width:320px;max-width:90vw;max-height:85vh;overflow:auto}');
  addStyle('html.tm-dark .tm-img-overlay{background:#2b2d31!important;border-color:#3c3c3c!important;color:#e5e5e5!important}');
  addStyle('.tm-img-overlay .tm-overlay-header{display:flex;align-items:center;gap:8px;margin-bottom:8px}');
  addStyle('.tm-img-overlay .tm-overlay-body{display:flex;gap:8px;flex-wrap:wrap;align-items:flex-start}');
  addStyle('.tm-img-overlay .tm-overlay-body img{max-width:45vw;max-height:70vh;object-fit:contain;border-radius:4px;box-shadow:0 2px 8px rgba(0,0,0,.2)}');
  addStyle('.tm-btn-overlay-10{padding:4px 8px;border-radius:4px;border:1px solid #ccc;background:#f0f0f0;cursor:pointer;font-size:12px}');
  addStyle('html.tm-dark .tm-btn-overlay-10{border-color:#3c3c3c;background:#3a3a3d;color:#e5e5e5}');
  addStyle('.tm-fee-overlay{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:1000000;background:#fff;border:1px solid #ddd;border-radius:10px;box-shadow:0 10px 24px rgba(0,0,0,.35);min-width:720px;max-width:95vw;max-height:90vh;overflow:auto}');
  addStyle('html.tm-dark .tm-fee-overlay{background:#2b2d31!important;border-color:#3c3c3c!important;color:#e5e5e5!important}');
  addStyle('.tm-fee-overlay .tm-fee-header{display:flex;align-items:center;gap:8px;padding:12px;border-bottom:1px solid #eee}');
  addStyle('html.tm-dark .tm-fee-overlay .tm-fee-header{border-bottom-color:#3c3c3c!important}');
  addStyle('.tm-fee-overlay .tm-fee-body{display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:12px}');
  addStyle('.tm-fee-overlay .tm-fee-imgs img{width:100%;height:auto;max-height:60vh;object-fit:contain;border-radius:6px;box-shadow:0 2px 10px rgba(0,0,0,.25)}');
  addStyle('.tm-fee-overlay .tm-fee-actions{display:flex;gap:8px;margin-left:auto}');
  addStyle('.tm-fee-overlay .tm-fee-info{font-size:13px;line-height:1.6}');
  addStyle('.tm-fee-overlay .tm-fee-close{padding:6px 10px;border:1px solid #ccc;background:#f5f5f5;border-radius:6px;cursor:pointer}');
  addStyle('html.tm-dark .tm-fee-overlay .tm-fee-close{border-color:#3c3c3c;background:#3a3a3d;color:#e5e5e5}');
  addStyle('html.tm-dark #custom-entry-image-box{background:#2b2d31!important;border-color:#3c3c3c!important;color:#e5e5e5!important;}');
  addStyle('html.tm-dark .modal-body,html.tm-dark .tab-content,html.tm-dark .tab-pane{background:#1e1f22!important;color:#e5e5e5!important;}');
  addStyle('html.tm-dark .section_pane,html.tm-dark .section_fee_info,html.tm-dark .section_pkg_info{background:#1e1f22!important;}');
  addStyle('html.tm-dark .payment-table{background:#1e1f22!important;}');
  addStyle('html.tm-dark .tb_action{background:transparent!important;color:#e5e5e5!important;}');
  addStyle('html.tm-dark #custom-entry-image-box>div{color:#e5e5e5!important;}');
  addStyle('html.tm-dark .tm-tab-btn{background:#2b2d31!important;color:#e5e5e5!important;border-color:#3c3c3c!important}html.tm-dark .tm-tab-btn.active{background:#252526!important;color:#ffffff!important;border-color:#3c3c3c!important}');
  function qs(sel,root){return (root||document).querySelector(sel)}
  function qsa(sel,root){return Array.prototype.slice.call((root||document).querySelectorAll(sel))}
  var DEBUG=false;function log(){if(!DEBUG)return;console.log.apply(console,arguments)}
  function isBeforePayStatus(txt){return /(결제\s*전|결제전)/i.test(txt||'')}
  function isPaidStatus(txt){return /결제완료|영수증/i.test(txt||'')}
  function debounce(fn,delay){var t;return function(){clearTimeout(t);var args=arguments;t=setTimeout(function(){fn.apply(null,args)},delay)}}
  function pickBestByTime(cand,info){if(!info.alarmTime||!cand.length)return null;var best=null,bestDiff=Infinity;for(var i=0;i<cand.length;i++){var r=cand[i];var times=[];if(info.eventType==='entry')times=[r.start];else if(info.eventType==='exit')times=[r.end];else if(info.eventType==='pay')times=[r.pay];else times=[r.start,r.pay,r.end,r.compareTime];if(times.every(function(t){return t==null}))times=[r.start,r.pay,r.end,r.compareTime];for(var j=0;j<times.length;j++){var ts=times[j];if(ts==null)continue;var diff=Math.abs(ts-info.alarmTime);if(diff<bestDiff){bestDiff=diff;best=r}}}return best}
  var __tm_cache={data:null,timestamp:0};function getRowsCached(){if(__tm_cache.data&&Date.now()-__tm_cache.timestamp<1000){return __tm_cache.data}var data=collectRows();__tm_cache.data=data;__tm_cache.timestamp=Date.now();return data}
  function beep(){try{var ctx=window.__alarmAudioCtx||(window.__alarmAudioCtx=new (window.AudioContext||window.webkitAudioContext)());var o=ctx.createOscillator();var g=ctx.createGain();o.type='sine';o.frequency.value=1000;g.gain.value=0.6;o.connect(g);g.connect(ctx.destination);o.start();setTimeout(function(){try{o.stop()}catch(e){}},250)}catch(e){}}
  function requestNotifyPermission(){
    console.log('[TM-ALARM] requestNotifyPermission start', {hasNotification: 'Notification'in window, permission: (window.Notification&&Notification.permission)});
    if(!('Notification'in window))return;
    if(Notification.permission==='default'){
      try{
        Notification.requestPermission().then(function(p){
          console.log('[TM-ALARM] requestNotifyPermission result', {permission: p});
        }).catch(function(e){
          console.log('[TM-ALARM] requestNotifyPermission error', e);
        });
      }catch(e){
        console.log('[TM-ALARM] requestNotifyPermission throw', e);
      }
    }else{
      console.log('[TM-ALARM] requestNotifyPermission skipped', {permission: Notification.permission});
    }
  }
  function notify(title,body,url){
    var shown=false;
    console.log('[TM-ALARM] notify start', {title: title, body: body, desktopNotify: S.desktopNotify, permission: (window.Notification&&Notification.permission)});
    if(S.desktopNotify&&'Notification'in window){
      if(Notification.permission==='granted'){
        try{
          var n=new Notification(title,{body:body});
          if(url){
             n.onclick=function(e){
                e.preventDefault();
                window.focus();
                location.href=url;
             };
          }else{
             n.onclick=function(e){
                e.preventDefault();
                window.focus();
             };
          }
          shown=true;console.log('[TM-ALARM] notify shown (native)')
        }catch(e){console.log('[TM-ALARM] notify error (native)', e)}
      }else if(Notification.permission!=='denied'){
        try{
          Notification.requestPermission().then(function(p){
            console.log('[TM-ALARM] notify permission result', {permission: p});
            if(p==='granted'){
              try{
                 var n=new Notification(title,{body:body});
                 if(url){
                    n.onclick=function(e){
                       e.preventDefault();
                       window.focus();
                       location.href=url;
                    };
                 }else{
                    n.onclick=function(e){
                       e.preventDefault();
                       window.focus();
                    };
                 }
                 console.log('[TM-ALARM] notify shown (native after permission)')
              }catch(e){console.log('[TM-ALARM] notify error (native after permission)', e)}
            }else{
              var t=document.createElement('div');t.className='tm-toast';t.innerHTML='<strong>'+String(title||'')+'</strong>'+String(body||'');document.body.appendChild(t);setTimeout(function(){t.remove()},3500);
              console.log('[TM-ALARM] notify shown (toast after permission)');
            }
          });
          shown=true;
        }catch(e){console.log('[TM-ALARM] notify error (permission request)', e)}
      }
    }
    if(!shown){
      var t=document.createElement('div');t.className='tm-toast';t.innerHTML='<strong>'+String(title||'')+'</strong>'+String(body||'');document.body.appendChild(t);setTimeout(function(){t.remove()},3500);
      console.log('[TM-ALARM] notify shown (toast fallback)');
    }
    if(S.soundNotify)beep()
  }
  var __origAlert=window.alert;
  window.alert=function(msg){
    try{
      notify('알림',String(msg));
    }catch(e){
      if(typeof __origAlert==='function')__origAlert(msg);
    }
  };
  function parseDateTime(t){if(!t)return null;t=t.trim();var m=t.match(/^(\d{4})[.\-](\d{2})[.\-](\d{2})\s+(\d{2}):(\d{2})$/);if(m){return new Date(+m[1],+m[2]-1,+m[3],+m[4],+m[5]).getTime()}var hm=t.match(/^(\d{2}):(\d{2})$/);if(hm){var now=new Date();return new Date(now.getFullYear(),now.getMonth(),now.getDate(),+hm[1],+hm[2]).getTime()}return null}
  function normalizeArea(txt){var m=(txt||'').trim().match(/(\d+)\s*면(?:\([^)]+\))?/);return m?m[0]:null}
  function parseRow(tr){var tds=qsa('td',tr);if(tds.length<12)return null;var lot=(tds[4].textContent||'').trim();var area=normalizeArea(tds[5].textContent||'');var pa=tds[6].querySelector('a');var plate=pa?(pa.textContent||'').trim():(tds[6].textContent||'').trim();var statusTxt=(tds[11].textContent||'').trim();var start=parseDateTime((tds[1].textContent||'').trim());var pay=parseDateTime((tds[2].textContent||'').trim());var end=parseDateTime((tds[3].textContent||'').trim());var isUnpaid=/미납/i.test(statusTxt);var compareTime=isUnpaid?end:(pay||end);var id=tr.getAttribute('data-id')||(pa?pa.getAttribute('data-id'):null);if(!lot||!area||!compareTime)return null;var isUndefinedPlate=/Undefined|미인식|번호없음/i.test(plate||'');var isBeforePay=/(결제\s*전|결제전)/i.test(statusTxt||'');if(isUndefinedPlate&&isBeforePay)tr.classList.add('tm-plate-undefined');return{tr:tr,lot:lot,area:area,plate:plate,statusTxt:statusTxt,isUnpaid:isUnpaid,start:start,pay:pay,end:end,compareTime:compareTime,id:id,isUndefinedPlate:isUndefinedPlate}}
  function findTable(){return qs('table.tb.tb_lst')}
  function RisRecordPage(){return /pms\.parkingplusai\.com\/parking\/parkingRecordList/.test(location.href)}
  function collectRows(){var table=findTable();if(!table)return{table:null,rows:[]};var tbody=table.querySelector('#tbody_list')||table.querySelector('tbody')||table;var trs=qsa('tr',tbody);var out=[];for(var i=0;i<trs.length;i++){var r=parseRow(trs[i]);if(r)out.push(r)}return{table:table,rows:out}}
  function minutesDiff(a,b){if(a==null||b==null)return Infinity;return Math.abs(a-b)/60000}
  function findNearPairs(rows){var pairs=[];for(let i=0;i<rows.length;i++){const r=rows[i];if(!r.isUnpaid)continue;let found=null;for(let d=1;d<=S.neighborDepth;d++){const j1=i-d;const j2=i+d;for(let k=0;k<2;k++){const j=k===0?j1:j2;if(j<0||j>=rows.length)continue;const nRow=rows[j];const samePlace=(nRow.lot===r.lot&&nRow.area===r.area);const timeDiff=minutesDiff(nRow.compareTime,r.compareTime);const close=timeDiff<=S.timeWindowMin;const isPaid=/결제완료|영수증/i.test(nRow.statusTxt||'');if(samePlace&&close&&isPaid){found=nRow;break}}if(found)break}if(!found){for(let j=0;j<rows.length;j++){if(j===i)continue;const nRow=rows[j];const samePlace=(nRow.lot===r.lot&&nRow.area===r.area);const timeDiff=minutesDiff(nRow.compareTime,r.compareTime);const close=timeDiff<=S.timeWindowMin;const isPaid=/결제완료|영수증/i.test(nRow.statusTxt||'');if(samePlace&&close&&isPaid){found=nRow;break}}}if(found){pairs.push({unpaid:r,paid:found})}}return dedupPairs(pairs)}
  function dedupPairs(pairs){var seen=new Set(),out=[];for(var i=0;i<pairs.length;i++){var p=pairs[i];var key=p.unpaid.lot+'|'+p.unpaid.area+'|'+p.unpaid.compareTime+'|'+p.paid.compareTime;if(seen.has(key))continue;seen.add(key);out.push(p)}return out}
  function clearMarks(){qsa('.tm-near-highlight').forEach(function(el){el.classList.remove('tm-near-highlight','tm-near-pair')})}
  function markPairs(pairs){clearMarks();pairs.forEach(function(p){p.unpaid.tr.classList.add('tm-near-highlight','tm-near-pair');p.paid.tr.classList.add('tm-near-highlight','tm-near-pair')})}
  function nearPanel(pairs){
    var el;
    if(S.showPairPanel===false){
        el=qs('.tm-near-panel');
        if(el) el.remove();
        return;
    }
    el=qs('.tm-near-panel');var collapsed=(S.panelCollapsed?' collapsed':'');var html='<div class="tm-near-panel'+collapsed+'"><div class="tm-header"><strong>자동탐지</strong><span>유사 페어: '+pairs.length+'개</span><button id="tm_collapse">'+(S.panelCollapsed?'확대':'축소')+'</button><label style="margin-left:6px">크기 <select id="tm_scale"><option value="0.8">80%</option><option value="1">100%</option><option value="1.2">120%</option><option value="1.5">150%</option></select></label><button id="tm_close_panel" title="패널 숨기기(TM설정에서 복구가능)" style="margin-left:auto;margin-right:0;border:1px solid #ccc;background:#fff;cursor:pointer;padding:0 5px;border-radius:3px">X</button></div><div class="tm-body"><label><input type="checkbox" id="tm_enable"> 자동탐지</label><label><input type="checkbox" id="tm_scroll"> 자동스크롤</label><label><input type="checkbox" id="tm_desk"> 데스크탑알림</label><label><input type="checkbox" id="tm_sound"> 사운드</label><label style="margin-left:6px">오차 <select id="tm_window"><option value="2">2분</option><option value="3">3분</option><option value="5">5분</option><option value="10">10분</option><option value="15">15분</option><option value="20">20분</option><option value="30">30분</option></select></label><button id="tm_set_10min" style="margin-left:2px;padding:0 4px;cursor:pointer;font-size:11px;background:#f0f0f0;border:1px solid #ccc;border-radius:3px" title="오차 10분 설정 및 즉시 탐지">10분</button><label style="margin-left:6px">인접범위 <select id="tm_depth"><option value="1">±1행</option><option value="2">±2행</option><option value="3">±3행</option></select></label><select id="tm_interval" style="margin-left:6px"><option value="10000">10초</option><option value="30000">30초</option><option value="60000">60초</option></select><button id="tm_now">지금탐지</button></div></div>';if(el)el.outerHTML=html;else document.body.insertAdjacentHTML('beforeend',html);el=qs('.tm-near-panel');el.style.transform='scale('+(S.panelScale||1)+')';el.style.transformOrigin='bottom left';var cp=qs('#tm_collapse');if(cp){cp.addEventListener('click',function(){S.panelCollapsed=!S.panelCollapsed;save();nearPanel(pairs)})}var scaleSel=qs('#tm_scale');if(scaleSel){scaleSel.value=String(S.panelScale||1);scaleSel.addEventListener('change',function(e){S.panelScale=Number(e.target.value)||1;save();nearPanel(pairs)})}var closeBtn=qs('#tm_close_panel');if(closeBtn){closeBtn.addEventListener('click',function(){S.showPairPanel=false;save();nearPanel(pairs)})}var en=qs('#tm_enable');if(en){en.checked=!!S.enable;en.addEventListener('change',function(e){S.enable=e.target.checked;save();if(S.enable)runOnce(true)})}var sc=qs('#tm_scroll');if(sc){sc.checked=!!S.autoScroll;sc.addEventListener('change',function(e){S.autoScroll=e.target.checked;save()})}var dk=qs('#tm_desk');if(dk){dk.checked=!!S.desktopNotify;dk.addEventListener('change',function(e){S.desktopNotify=e.target.checked;save();if(e.target.checked)requestNotifyPermission()})}var snd=qs('#tm_sound');if(snd){snd.checked=!!S.soundNotify;snd.addEventListener('change',function(e){S.soundNotify=e.target.checked;save()})}var winSel=qs('#tm_window');if(winSel){winSel.value=String(S.timeWindowMin||3);winSel.addEventListener('change',function(e){S.timeWindowMin=Number(e.target.value)||3;save();runOnce(true)})}var depthSel=qs('#tm_depth');if(depthSel){depthSel.value=String(S.neighborDepth||3);depthSel.addEventListener('change',function(e){S.neighborDepth=Number(e.target.value)||3;save();runOnce(true)})}var intSel=qs('#tm_interval');if(intSel){intSel.value=String(S.interval||30000);intSel.addEventListener('change',function(e){S.interval=Number(e.target.value)||30000;save();restart()})}var nowBtn=qs('#tm_now');if(nowBtn){nowBtn.addEventListener('click',function(){runOnce(true)})}var tenBtn=qs('#tm_set_10min');if(tenBtn){tenBtn.addEventListener('click',function(){S.timeWindowMin=10;save();runOnce(true);var winSel2=qs('#tm_window');if(winSel2)winSel2.value='10'})}}
  function panel(pairs){var el=qs('.tm-near-panel');var html='<div class="tm-near-panel"><label><input type="checkbox" id="tm_enable"> 자동탐지</label><label><input type="checkbox" id="tm_scroll"> 자동스크롤</label><label><input type="checkbox" id="tm_desk"> 데스크탑알림</label><label><input type="checkbox" id="tm_sound"> 사운드</label><label style="margin-left:6px">오차 <select id="tm_window"><option value="2">2분</option><option value="3">3분</option><option value="5">5분</option><option value="10">10분</option><option value="15">15분</option><option value="20">20분</option><option value="30">30분</option></select></label><label style="margin-left:6px">인접범위 <select id="tm_depth"><option value="1">±1행</option><option value="2">±2행</option><option value="3">±3행</option></select></label><select id="tm_interval" style="margin-left:6px"><option value="10000">10초</option><option value="30000">30초</option><option value="60000">60초</option></select><button id="tm_now">지금탐지</button><div style="margin-top:4px">유사 페어: '+pairs.length+'개</div></div>';if(el)el.outerHTML=html;else document.body.insertAdjacentHTML('beforeend',html);el=qs('.tm-near-panel');qs('#tm_enable').checked=!!S.enable;qs('#tm_scroll').checked=!!S.autoScroll;qs('#tm_desk').checked=!!S.desktopNotify;qs('#tm_sound').checked=!!S.soundNotify;qs('#tm_window').value=String(S.timeWindowMin||3);qs('#tm_depth').value=String(S.neighborDepth||3);qs('#tm_interval').value=String(S.interval||30000);qs('#tm_enable').addEventListener('change',function(e){S.enable=e.target.checked;save()});qs('#tm_scroll').addEventListener('change',function(e){S.autoScroll=e.target.checked;save()});qs('#tm_desk').addEventListener('change',function(e){S.desktopNotify=e.target.checked;save();if(e.target.checked)requestNotifyPermission()});qs('#tm_sound').addEventListener('change',function(e){S.soundNotify=e.target.checked;save()});qs('#tm_window').addEventListener('change',function(e){S.timeWindowMin=Number(e.target.value);save();runOnce(true)});qs('#tm_depth').addEventListener('change',function(e){S.neighborDepth=Number(e.target.value);save();runOnce(true)});qs('#tm_interval').addEventListener('change',function(e){S.interval=Number(e.target.value);save();restart()});qs('#tm_now').addEventListener('click',function(){runOnce(true)})}
  var lastPairKeys=new Set();
  var lastFoundPairs=[];
  function runOnce(userTriggered){if(!S.enable&&!userTriggered&&!RisRecordPage())return;var data=collectRows();var rows=data.rows;var pairs=findNearPairs(rows);lastFoundPairs=pairs;markPairs(pairs);nearPanel(pairs);var keys=new Set(pairs.map(function(p){return p.unpaid.lot+'|'+p.unpaid.area+'|'+p.unpaid.compareTime+'|'+p.paid.compareTime}));var newKeys=[].concat(keys).filter(function(k){return !lastPairKeys.has(k)});lastPairKeys=keys;if(newKeys.length){if(S.nearPairNotify)notify('미납 근접 페어 발견',newKeys.length+'개 페어');if(S.autoScroll){var p=pairs.find(function(px){var kk=px.unpaid.lot+'|'+px.unpaid.area+'|'+px.unpaid.compareTime+'|'+px.paid.compareTime;return newKeys.indexOf(kk)!==-1});if(p){p.unpaid.tr.scrollIntoView({behavior:'smooth',block:'center'})}}}}
  var timer=null;
  function restart(){if(timer)clearInterval(timer);timer=setInterval(function(){runOnce(false)},S.interval||30000)}
  function observeTable(){var table=findTable();if(!table)return;var target=table.querySelector('#tbody_list')||table.querySelector('tbody')||table;var debouncedRun=debounce(function(){__tm_cache.data=null;runOnce(false);clearStatusHighlight();applyStatusHighlightTable()},200);var obs=new MutationObserver(function(){debouncedRun()});obs.observe(target,{childList:true,subtree:true})}
  var __tm_unpaid_applied=false;
  function UobserveUnpaidMode(){
    var table=findTable();if(!table)return;
    var target=table.querySelector('#tbody_list')||table.querySelector('tbody')||table;
    var applyDebounced=debounce(function(){
      try{
        if(S.unpaidModeEnabled)UapplyUnpaidMode();
      }catch(_){}
    },200);
    var obs=new MutationObserver(function(){applyDebounced()});
    obs.observe(target,{childList:true,subtree:true});
    applyDebounced();
  }
  function FextractRowInfo(tr){
    var tds=qsa('td',tr);
    var info={};
    info.id=tr.id||tr.getAttribute('data-id')||'';
    info.compId=tr.getAttribute('data-lotid')||'';
    info.slotId=tr.getAttribute('data-slotid')||'';
    info.no=(tds[0]&&tds[0].textContent||'').trim();
    info.start=(tds[1]&&tds[1].textContent||'').trim();
    info.pay=(tds[2]&&tds[2].textContent||'').trim();
    info.end=(tds[3]&&tds[3].textContent||'').trim();
    info.lot=(tds[4]&&tds[4].textContent||'').trim();
    info.area=(tds[5]&&tds[5].textContent||'').trim();
    info.plate=(tds[6]&&tds[6].textContent||'').trim();
    info.time=(tds[7]&&tds[7].textContent||'').trim();
    info.amount=(tds[10]&&tds[10].textContent||'').trim();
    info.status=(tds[11]&&tds[11].textContent||'').trim();
    return info;
  }
  function FopenFeeOverlay(tr){
    if(!isRowUnpaid(tr))return;
    var info=FextractRowInfo(tr);
    var ov=document.createElement('div');ov.className='tm-zoom-overlay';document.body.appendChild(ov);
    var panel=document.createElement('div');panel.className='tm-fee-overlay';
    var header=document.createElement('div');header.className='tm-fee-header';
    var title=document.createElement('strong');title.textContent='주차요금 • '+(info.plate||'');
    var actions=document.createElement('div');actions.className='tm-fee-actions';
    var btn10=document.createElement('button');btn10.className='tm-btn-overlay-10';btn10.textContent='10분 처리';
    var delBtn=document.createElement('button');delBtn.className='tm-btn-overlay-10';delBtn.textContent='삭제';
    var closeBtn=document.createElement('button');closeBtn.className='tm-fee-close';closeBtn.textContent='닫기';
    actions.appendChild(btn10);actions.appendChild(delBtn);actions.appendChild(closeBtn);
    header.appendChild(title);header.appendChild(actions);
    var body=document.createElement('div');body.className='tm-fee-body';
    var imgs=document.createElement('div');imgs.className='tm-fee-imgs';
    var infoBox=document.createElement('div');infoBox.className='tm-fee-info';
    infoBox.innerHTML='<div>입차일시: '+(info.start||'-')+'</div><div>결제일시: '+(info.pay||'-')+'</div><div>출차일시: '+(info.end||'-')+'</div><div>주차장: '+(info.lot||'-')+'</div><div>주차면: '+(info.area||'-')+'</div><div>주차시간: '+(info.time||'-')+'</div><div>결제요금: '+(info.amount||'-')+'</div><div>결제상태: '+(info.status||'-')+'</div>';
    body.appendChild(imgs);body.appendChild(infoBox);
    panel.appendChild(header);panel.appendChild(body);
    document.body.appendChild(panel);
    var clean=function(){try{ov.remove();panel.remove()}catch(_){}};
    ov.addEventListener('click',function(){clean()});
    closeBtn.addEventListener('click',function(){clean()});
    btn10.addEventListener('click',function(e){
      e.preventDefault();
      try{
        if(typeof MinjectFeeModalButton==='function')MinjectFeeModalButton();
        var adj=document.querySelector('.tm-adjust-btn');
        if(adj){adj.click();return;}
      }catch(_){}
      S.timeWindowMin=10;save();
      notify('설정','오차 10분으로 설정되었습니다');
    });
    delBtn.addEventListener('click',function(e){
      e.preventDefault();
      try{
        if(typeof window.deleteParkingRecord==='function'&&info.id&&info.compId&&info.plate){
          window.deleteParkingRecord(Number(info.id),Number(info.compId),String(info.plate||''));
        }
      }catch(_){}
      clean();
    });
    var fill=function(list){
      imgs.innerHTML='';
      if(!list||!list.length){imgs.innerHTML='<div>이미지를 찾을 수 없습니다.</div>';return;}
      list.forEach(function(src){var im=document.createElement('img');im.src=src;imgs.appendChild(im)});
    };
    var gather=function(){
      var sel='.modal img, .popup img, .layer img';
      var found=qsa(sel);
      if(found.length===0)found=qsa('img');
      var uniq=new Set();
      for(var i=0;i<found.length;i++){
        var s=(found[i].src||'').trim();
        if(!s)continue;
        if(/ico|icon|sort|btn_|\\.svg$/i.test(s))continue;
        uniq.add(s);
      }
      var arr=[].concat(uniq);
      try{
        qsa('.modal, .popup, .layer').forEach(function(x){x.style.display='none'});
        qsa('.modal-backdrop').forEach(function(x){x.remove()});
      }catch(_){}
      fill(arr);
    };
    try{
      var anchor=tr.querySelector('a[onclick*="getParkingRecordOne"]');
      if(anchor){
        try{anchor.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true}))}catch(_){anchor.click()}
        setTimeout(gather,500);
        var mo=new MutationObserver(function(){gather()});
        mo.observe(document.body,{childList:true,subtree:true});
        setTimeout(function(){try{mo.disconnect()}catch(_){}},5000);
      }else{
        gather();
      }
    }catch(_){
      gather();
    }
  }
  function FopenFeePage(tr){
    var anchor=null;
    try{
      anchor=tr.querySelector('a[onclick*="getParkingRecordOne"]');
    }catch(_){}
    if(anchor){
      try{
        anchor.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true}));
      }catch(_){
        anchor.click();
      }
      return;
    }
    try{
      if(typeof getParkingRecordOne==='function'){
        var info=FextractRowInfo(tr);
        if(info&&info.id){
          var lotId=info.compId||tr.getAttribute('data-lotid')||'';
          var slotId=info.slotId||tr.getAttribute('data-slotid')||'';
          getParkingRecordOne(info.id,lotId,slotId);
        }
      }
    }catch(_){}
  }
  function FobserveRowClicks(){
    var table=findTable();if(!table)return;
    var target=table.querySelector('#tbody_list')||table.querySelector('tbody')||table;
    if(target.__tm_fee_click)return;
    target.__tm_fee_click=true;
    target.addEventListener('click',function(e){
      var btn=e.target.closest('button,a');
      if(btn)return;
      var tr=e.target.closest('tr');
      if(!tr)return;
      
      // 설정 확인 (OFF이면 기본 동작 수행)
      if(S.rowClickFeePageEnabled===false) return;

      // 행 전체 클릭 시 요금 페이지(상세) 열기
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      FopenFeePage(tr);
    },true);
  }
  function SinitSidebar(){
    var key='tm_sidebar_collapsed';
    var isCollapsed=localStorage.getItem(key)==='true';
    var css='.tm-sidebar-btn{position:fixed;right:315px;top:10px;z-index:9999999;padding:4px 6px;font-size:12px;cursor:pointer;background:#333;color:#fff;border:none;border-radius:4px;opacity:0.8;box-shadow:0 1px 3px rgba(0,0,0,0.3)}.tm-sidebar-btn:hover{opacity:1}'+
            'body.tm-sb-hidden #sidebar, body.tm-sb-hidden .nav_header{transform:translateX(-100%)!important;width:0!important;margin-left:0!important;overflow:hidden!important}'+
            'body.tm-sb-hidden #content, body.tm-sb-hidden #header{margin-left:0!important;width:100%!important}'+
            '#sidebar, .nav_header, #content, #header{transition:all 0.3s ease}';
    addStyle(css);
    function apply(){
      if(isCollapsed&&S.sidebarToggleEnabled!==false)document.body.classList.add('tm-sb-hidden');
      else document.body.classList.remove('tm-sb-hidden');
    }
    if(!window.__tmSidebar){
      window.__tmSidebar={
        toggle:function(){
          isCollapsed=!isCollapsed;
          try{localStorage.setItem(key,String(isCollapsed))}catch(_){}
          apply();
        },
        apply:function(){
          apply();
        }
      };
    }
    apply();
  }
  function clearStatusHighlight(){
    var rows=qsa('table.tb.tb_lst tbody tr');
    for(var i=0;i<rows.length;i++){
      rows[i].classList.remove('tm-status-paid','tm-status-free','tm-status-before','tm-status-unpaid','tm-status-undefined','tm-status-system-out','tm-status-after-hours');
    }
  }
  function applyStatusHighlightTable(){
    if(S.statusHighlight===false)return;
    var table=findTable();
    if(!table)return;
    var tbody=table.querySelector('#tbody_list')||table.querySelector('tbody')||table;
    
    var statusIdx=-1;
    var thead=table.querySelector('thead');
    if(thead){
      var ths=qsa('th',thead);
      for(var i=0;i<ths.length;i++){
        if((ths[i].textContent||'').indexOf('결제상태')>=0){statusIdx=i;break}
      }
    }

    var trs=qsa('tr',tbody);
    for(var i=0;i<trs.length;i++){
      var tds=qsa('td',trs[i]);
      if(!tds.length)continue;
      var statusCell;
      if(statusIdx>=0&&tds[statusIdx])statusCell=tds[statusIdx];
      else statusCell=tds[11]||tds[tds.length-1];
      var txt=(statusCell&&statusCell.textContent||'').trim();
      var cls=AstatusClass(txt);
      if(cls)trs[i].classList.add(cls);
    }
  }
  function HshowEntryImage(){
    if(S.entryPreviewEnabled===false)return;
    var pictureInBtn=document.getElementById('pictureIn');
    if(!pictureInBtn){
        var oldBox = document.getElementById('custom-entry-image-box');
        if(oldBox) oldBox.remove();
        return;
    }
    var imgUrl=pictureInBtn.getAttribute('data-img')||(pictureInBtn.dataset&&pictureInBtn.dataset.img)||pictureInBtn.getAttribute('data-src');
    if(!imgUrl)return;
    var historyContainer=document.getElementById('parking-history-container');
    if(!historyContainer)return;
    
    // 중복 실행 방지: 이미 같은 이미지 URL로 그려진 박스가 있으면 리턴 (무한루프 방지)
    var oldBox = document.getElementById('custom-entry-image-box');
    if(oldBox && oldBox.getAttribute('data-current-url') === imgUrl) return;

    if(oldBox) oldBox.remove();

    var imgBox=document.createElement('div');
    imgBox.id='custom-entry-image-box';
    imgBox.setAttribute('data-current-url', imgUrl);
    imgBox.style.marginTop='20px';
    imgBox.style.padding='15px';
    imgBox.style.backgroundColor='#f8f9fa';
    imgBox.style.border='1px solid #ddd';
    imgBox.style.borderRadius='8px';
    
    var title=document.createElement('div');
    title.textContent='입차 사진 미리보기';
    title.style.fontWeight='bold';
    title.style.marginBottom='10px';
    title.style.textAlign='left';
    title.style.color='#555';
    imgBox.appendChild(title);

    var contentWrapper = document.createElement('div');
    var isSplit = S.entryPreviewSplitEnabled !== false;

    var imgWrapper = document.createElement('div');
    
    // Brightness Control
    var controls = document.createElement('div');
    controls.style.marginBottom = '8px';
    controls.style.textAlign = 'center';
    
    var slider = document.createElement('input');
    slider.type = 'range';
    slider.min = '10';
    slider.max = '250';
    slider.value = '100';
    slider.style.width = '60%';
    slider.style.verticalAlign = 'middle';
    slider.style.marginRight = '8px';
    slider.title = '이미지 밝기 조절';
    
    var label = document.createElement('span');
    label.textContent = '100%';
    label.style.fontSize = '12px';
    label.style.fontWeight = 'bold';
    label.style.verticalAlign = 'middle';
    label.style.color = '#555';
    
    var img=document.createElement('img'); // Define img early for closure
    
    slider.oninput = function(){
        var v = this.value;
        label.textContent = v + '%';
        img.style.filter = 'brightness(' + v + '%)';
    };
    
    controls.appendChild(slider);
    controls.appendChild(label);
    imgWrapper.appendChild(controls);

    img.src=imgUrl;
    img.style.maxWidth='100%';
    img.style.maxHeight='400px';
    img.style.objectFit='contain';
    img.style.borderRadius='4px';
    img.style.boxShadow='0 2px 8px rgba(0,0,0,0.1)';
    img.style.cursor='zoom-in';
    img.title='클릭하여 확대';
    img.onclick=function(){
        var overlay=document.createElement('div');
        overlay.style.cssText='position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);z-index:99999999;display:flex;align-items:center;justify-content:center;cursor:zoom-out;opacity:0;transition:opacity 0.2s ease';
        
        var bigImg=document.createElement('img');
         bigImg.src=imgUrl;
         bigImg.style.cssText='max-width:98vw;max-height:98vh;object-fit:contain;transform:scale(0.9);transition:transform 0.2s ease;box-shadow:0 0 20px rgba(0,0,0,0.5);border-radius:4px';
         bigImg.style.filter = img.style.filter;
        
        overlay.appendChild(bigImg);
        document.body.appendChild(overlay);
        
        // Animation in
        requestAnimationFrame(function(){
            overlay.style.opacity='1';
            bigImg.style.transform='scale(1)';
        });
        
        overlay.onclick=function(){
            overlay.style.opacity='0';
            bigImg.style.transform='scale(0.9)';
            setTimeout(function(){
                overlay.remove();
            },200);
        };
    };
    imgWrapper.appendChild(img);

    if(isSplit){
        contentWrapper.style.display = 'flex';
        contentWrapper.style.gap = '15px';
        
        imgWrapper.style.flex = '1';
        imgWrapper.style.textAlign = 'center';
        
        var historyWrapper = document.createElement('div');
        historyWrapper.style.flex = '1';
        historyWrapper.style.textAlign = 'left';
        
        var lot, spot;
        var pin = document.getElementById('pictureIn');
        if(pin){
            lot = pin.getAttribute('data-lotid');
            spot = pin.getAttribute('data-slotid');
        }
        if((lot==null || spot==null) && window.__tm_last_record_args){
            lot=window.__tm_last_record_args.lotId;
            spot=window.__tm_last_record_args.slotId;
        }
        
        if(lot!=null && spot!=null){
            var history=TM_PlateHistory.get(lot,spot);
            if(history.length > 0){
                 var hHtml='<div style="font-weight:bold;margin-bottom:4px;font-size:12px">최근 변경 이력 (클릭하여 적용)</div><div style="display:flex;flex-wrap:wrap;gap:4px">';
                 history.forEach(function(h){
                    hHtml+='<button type="button" class="btn btn-xs btn-default tm-preview-history-btn" data-plate="'+h.plate+'" style="margin-right:4px;margin-bottom:4px">'+h.plate+'</button>';
                 });
                 hHtml+='</div>';
                 historyWrapper.innerHTML = hHtml;
                 
                 setTimeout(function(){
                     var btns = historyWrapper.querySelectorAll('.tm-preview-history-btn');
                     for(var i=0; i<btns.length; i++){
                         btns[i].addEventListener('click', function(e){
                             e.preventDefault();
                             var p = this.getAttribute('data-plate');
                             var carInfo=qs('#car-information-container');
                             if(carInfo){
                                var input=qs('#carplate .edit-input',carInfo);
                                var save=qs('#carplate button[data-action="save-carplate"]',carInfo);
                                var edit=qs('#carplate button[data-action="edit-carplate"]',carInfo);
                                if(input&&save){
                                    if(edit && getComputedStyle(input).display==='none'){
                                        edit.click();
                                    }
                                    setTimeout(function(){
                                         input.value=p;
                                         input.dispatchEvent(new Event('input', {bubbles:true}));
                                         input.dispatchEvent(new Event('change', {bubbles:true}));
                                         setTimeout(function(){
                                             save.click();
                                             if(typeof notify==='function')notify('번호판 변경',p);
                                         }, 200);
                                    },100);
                                } else {
                                    alert('차량 정보 패널(사이드바)을 찾을 수 없습니다.');
                                }
                             } else {
                                alert('차량 정보 패널(사이드바)이 없습니다.');
                             }
                         });
                     }
                 }, 0);
            } else {
                historyWrapper.innerHTML = '<div style="color:#999;font-size:12px;padding:4px">변경 이력이 없습니다.</div>';
            }
        } else {
            historyWrapper.innerHTML = '<div style="color:#999;font-size:12px;padding:4px">차량 정보를 불러올 수 없습니다.</div>';
        }
        
        contentWrapper.appendChild(imgWrapper);
        contentWrapper.appendChild(historyWrapper);
    } else {
        imgBox.style.textAlign='center';
        contentWrapper.appendChild(imgWrapper);
    }
    
    imgBox.appendChild(contentWrapper);
    historyContainer.appendChild(imgBox);
  }
  function HinitEntryImagePreview(){
    if(document.__tm_entry_img_init)return;
    document.__tm_entry_img_init=true;
    var timer;
    var obs=new MutationObserver(function(){
        if(timer) clearTimeout(timer);
        timer = setTimeout(function(){ HshowEntryImage() }, 100);
    });
    obs.observe(document.body,{childList:true,subtree:true});
    HshowEntryImage();
  }
  function AwrapGetParkingRecordOne(){
    if(window.__tm_wrapped_getRecord)return;
    var orig=window.getParkingRecordOne;
    if(typeof orig!=='function')return;
    window.__tm_wrapped_getRecord=true;
    window.getParkingRecordOne=function(id,lotId,slotId){
        window.__tm_last_record_args={id:id,lotId:lotId,slotId:slotId};
        return orig.apply(this,arguments);
    };
  }
  function Ainit(){AwrapGetParkingRecordOne();runOnce(false);observeTable();restart();SinitSidebar();AinitAlarmNotify();AinitAlarmNavigate();AapplyAlarmNavigationOnLoad();applyStatusHighlightTable();HinitEntryImagePreview();CobserveCarInfo();UobserveUnpaidMode();FobserveRowClicks()}
  function ready(){if(document.readyState==='complete'||document.readyState==='interactive'){Ainit()}else{document.addEventListener('DOMContentLoaded',Ainit)}};TMmasterUI()
  function TMmasterUI(){
    if(document.querySelector('.tm-master-btn'))return;
    var btn=document.createElement('button');
    btn.className='tm-master-btn';
    btn.textContent='TM설정';
    btn.style.cssText='position:fixed;right:250px;top:10px;z-index:9999999;padding:4px 8px;font-size:12px;cursor:pointer;background:#333;color:#fff;border:none;border-radius:4px;opacity:0.8;box-shadow:0 1px 3px rgba(0,0,0,0.3)';
    btn.onmouseover=function(){this.style.opacity='1'};
    btn.onmouseout=function(){this.style.opacity='0.8'};
    document.body.appendChild(btn);
    if(S.sidebarToggleEnabled!==false){
      var sb=document.createElement('button');
      sb.className='tm-sidebar-btn';
      sb.textContent='사이드바';
      sb.title='좌측 사이드바 숨김/표시';
      sb.onclick=function(e){
        e.preventDefault();
        if(window.__tmSidebar&&typeof window.__tmSidebar.toggle==='function')window.__tmSidebar.toggle();
      };
      document.body.appendChild(sb);
    }

    btn.onclick=function(e){
      e.preventDefault();
      var exist=qs('.tm-master-panel');
      if(exist){exist.remove();return;}
      
      var rect=btn.getBoundingClientRect();
      var top=rect.bottom + 5;
      var left=rect.left;
      
      if(left + 260 > window.innerWidth) left = window.innerWidth - 270;

      var html='<div class="tm-master-panel" style="position:fixed;left:'+left+'px;top:'+top+'px;background:#fff;border:1px solid #ddd;padding:10px;border-radius:6px;box-shadow:0 2px 8px rgba(0,0,0,.2);z-index:9999999;min-width:260px;font-size:12px;color:#333">'+
               '<div style="font-weight:bold;margin-bottom:8px;border-bottom:1px solid #eee;padding-bottom:4px">TM 기능 설정</div>'+
               '<div style="margin-bottom:8px;display:flex;gap:4px">'+
                 '<button type="button" class="tm-tab-btn tm-tab-ui active" data-tab="ui" style="flex:1;border:1px solid #ccc;background:#f5f5f5;cursor:pointer;padding:4px 0;font-size:12px;border-radius:4px">UI 설정</button>'+
                 '<button type="button" class="tm-tab-btn tm-tab-conv" data-tab="conv" style="flex:1;border:1px solid #ccc;background:#fff;cursor:pointer;padding:4px 0;font-size:12px;border-radius:4px">편의성 설정</button>'+
               '</div>'+
               '<div class="tm-tab-panel tm-tab-panel-ui">'+
                 '<label style="display:block;margin-bottom:6px;cursor:pointer"><input type="checkbox" id="tm_dark_mode" style="vertical-align:middle"> 다크모드 사용</label>'+
                 '<label style="display:block;margin-bottom:6px;cursor:pointer"><input type="checkbox" id="tm_status_highlight" style="vertical-align:middle"> 주차 결제상태 컬러 하이라이트</label>'+
                 '<label style="display:block;margin-bottom:4px;cursor:pointer"><input type="checkbox" id="tm_entry_preview" style="vertical-align:middle"> 입차 사진 미리보기</label>'+
                 '<label style="display:block;margin-bottom:4px;cursor:pointer;padding-left:16px"><input type="checkbox" id="tm_entry_preview_split" style="vertical-align:middle"> └ 미리보기+이력 분할</label>'+
                 '<label style="display:block;margin-top:4px;cursor:pointer"><input type="checkbox" id="tm_sidebar_toggle" style="vertical-align:middle"> 좌측 사이드바/헤더 숨김 버튼 사용</label>'+
                 '<label style="display:block;margin-top:4px;cursor:pointer"><input type="checkbox" id="tm_row_click_fee" style="vertical-align:middle"> 행 클릭 시 요금페이지 열기</label>'+
               '</div>'+
               '<div class="tm-tab-panel tm-tab-panel-conv" style="display:none;margin-top:4px">'+
                 '<label style="display:block;margin-bottom:6px;cursor:pointer"><input type="checkbox" id="tm_show_pair" style="vertical-align:middle"> 페어 탐지 패널 표시</label>'+
                 '<label style="display:block;margin-bottom:4px;cursor:pointer"><input type="checkbox" id="tm_img_popup" style="vertical-align:middle"> 이미지 팝업 사용</label>'+
                 '<label style="display:block;margin-bottom:4px;cursor:pointer"><input type="checkbox" id="tm_plate_edit" style="vertical-align:middle"> 번호판 수정 사용</label>'+
                 '<label style="display:block;margin-bottom:4px;cursor:pointer"><input type="checkbox" id="tm_10min_btn" style="vertical-align:middle"> 10분 처리 버튼 표시</label>'+
                '<label style="display:block;margin-bottom:4px;cursor:pointer"><input type="checkbox" id="tm_unpaid_mode" style="vertical-align:middle"> 미납 처리 모드</label>'+
                '<label style="display:block;margin-bottom:4px;cursor:pointer"><input type="checkbox" id="tm_auto_alarm" style="vertical-align:middle"> 알람 자동 새로고침</label>'+
                '<label style="display:block;margin-bottom:4px;padding-left:16px">간격: <select id="tm_auto_alarm_int"><option value="3000">3초</option><option value="5000">5초</option><option value="10000">10초</option><option value="30000">30초</option><option value="60000">60초</option></select></label>'+
                '<label style="display:block;margin-bottom:4px;cursor:pointer;margin-top:8px;border-top:1px solid #ddd;padding-top:4px"><input type="checkbox" id="tm_desk_notify" style="vertical-align:middle"> 윈도우(시스템) 알림 사용</label>'+
                '<div style="margin-top:6px"><button type="button" id="tm_notify_perm" class="btn btn-xs btn-default">알림 권한 요청</button> <button type="button" id="tm_notify_test" class="btn btn-xs btn-info" style="margin-left:5px">테스트 알림</button></div>'+
               '</div>';
      
      document.body.insertAdjacentHTML('beforeend',html);
      
      var p=qs('.tm-master-panel');
      var cb1=qs('#tm_show_pair',p);
      var cbDark=qs('#tm_dark_mode',p);
      var cbStatus=qs('#tm_status_highlight',p);
      var cbImg=qs('#tm_img_popup',p);
      var cbPlate=qs('#tm_plate_edit',p);
      var cb10Min=qs('#tm_10min_btn',p);
      var cbCustomAlarm=qs('#tm_custom_alarm',p);
      var cbUnpaidMode=qs('#tm_unpaid_mode',p);
      var cbAutoAlarm=qs('#tm_auto_alarm',p);
      var selAutoAlarmInt=qs('#tm_auto_alarm_int',p);
      var cbDeskNotify=qs('#tm_desk_notify',p);
      var btnNotifyPerm=qs('#tm_notify_perm',p);
      var btnNotifyTest=qs('#tm_notify_test',p);
      var cbEntry=qs('#tm_entry_preview',p);
      var cbEntrySplit=qs('#tm_entry_preview_split',p);
      var cbSidebar=qs('#tm_sidebar_toggle',p);
      var cbRowClick=qs('#tm_row_click_fee',p);
      var darkApi=window.__tmDark||null;
      var tabBtns=qsa('.tm-tab-btn',p);
      var uiPanel=qs('.tm-tab-panel-ui',p);
      var convPanel=qs('.tm-tab-panel-conv',p);
      if(tabBtns&&tabBtns.length&&uiPanel&&convPanel){
        tabBtns.forEach(function(b){
          b.addEventListener('click',function(){
            var t=b.getAttribute('data-tab');
            tabBtns.forEach(function(x){x.classList.remove('active')});
            b.classList.add('active');
            if(t==='ui'){
              uiPanel.style.display='block';
              convPanel.style.display='none';
            }else{
              uiPanel.style.display='none';
              convPanel.style.display='block';
            }
          });
        });
      }
      
      if(cb1){
        cb1.checked=S.showPairPanel!==false;
        cb1.addEventListener('change',function(e){
           S.showPairPanel=e.target.checked;
           save();
           nearPanel(lastFoundPairs);
        });
      }
      if(cbDark){
        var curDark=false;
        if(darkApi&&typeof darkApi.load==='function'){
          try{curDark=!!darkApi.load()}catch(e){curDark=false}
        }else{
          try{curDark=localStorage.getItem('tm_dark_mode_enabled')==='1'}catch(e){}
        }
        cbDark.checked=curDark;
        cbDark.addEventListener('change',function(e){
          var on=e.target.checked;
          if(darkApi&&typeof darkApi.apply==='function')darkApi.apply(on);
          if(darkApi&&typeof darkApi.save==='function'){
            darkApi.save(on);
          }else{
            try{localStorage.setItem('tm_dark_mode_enabled',on?'1':'0')}catch(_){}
            var root=document.documentElement;
            if(root){
              if(on)root.classList.add('tm-dark');
              else root.classList.remove('tm-dark');
            }
          }
        });
      }
      if(cbStatus){
        cbStatus.checked=S.statusHighlight!==false;
        cbStatus.addEventListener('change',function(e){
          S.statusHighlight=e.target.checked;
          save();
          clearStatusHighlight();
          if(S.statusHighlight){
            applyStatusHighlightTable();
          }
        });
      }
      if(cbImg){
        cbImg.checked=S.imagePopupEnabled!==false;
        cbImg.addEventListener('change',function(e){
          S.imagePopupEnabled=e.target.checked;
          save();
          if(S.imagePopupEnabled)Uobserve();
          else Udisable();
        });
      }
      if(cbPlate){
        cbPlate.checked=S.plateEditEnabled!==false;
        cbPlate.addEventListener('change',function(e){
          S.plateEditEnabled=e.target.checked;
          save();
          Uobserve();
        });
      }
      if(cb10Min){
        cb10Min.checked=S.show10MinButton!==false;
        cb10Min.addEventListener('change',function(e){
          S.show10MinButton=e.target.checked;
          save();
          var btn=document.querySelector('.tm-adjust-btn');
          if(!S.show10MinButton&&btn)btn.remove();
          if(S.show10MinButton)MinjectFeeModalButton();
          else MrestoreOutToOriginal();
        });
      }
      function isUnpaidFiltered(){
        try{var u=new URL(location.href);var v=u.searchParams.get('chk_paidStatus');if(v==='2')return true;}catch(_){}
        return false;
      }
      function isRowUnpaid(tr){
        if(!tr)return false;
        if(tr.classList && tr.classList.contains('nonpay'))return true;
        var tds=qsa('td',tr);
        for(var i=0;i<tds.length;i++){var txt=(tds[i].textContent||'').trim();if(/미납/i.test(txt))return true;}
        return false;
      }
      function UapplyUnpaidMode(){
        var root=document.documentElement;
        if(!root)return;
        if(S.unpaidModeEnabled||isUnpaidFiltered())root.classList.add('tm-unpaid-mode');
        else root.classList.remove('tm-unpaid-mode');
      }
      if(cbUnpaidMode){
        cbUnpaidMode.checked=S.unpaidModeEnabled===true;
        cbUnpaidMode.addEventListener('change',function(e){
          S.unpaidModeEnabled=e.target.checked;
          save();
          UapplyUnpaidMode();
        });
      }
      if(cbCustomAlarm){
        cbCustomAlarm.checked=S.customAlarmEnabled!==false;
        cbCustomAlarm.addEventListener('change',function(e){
          S.customAlarmEnabled=e.target.checked;
          save();
        });
      }
      if(btnNotifyPerm){
        btnNotifyPerm.addEventListener('click',function(){
          requestNotifyPermission();
        });
      }
      if(btnNotifyTest){
        btnNotifyTest.addEventListener('click',function(){
          if(!('Notification'in window)){
            alert('이 브라우저는 알림 기능을 지원하지 않습니다.');
            return;
          }
          if(Notification.permission==='denied'){
            alert('알림 권한이 차단되어 있습니다. 브라우저 설정(주소창 자물쇠 아이콘 등)에서 알림을 허용해주세요.');
            return;
          }
          notify('테스트 알림', '이것은 테스트 알림입니다. 윈도우 팝업이 뜨는지 확인하세요.');
        });
      }
      if(cbEntry){
        cbEntry.checked=S.entryPreviewEnabled!==false;
        cbEntry.addEventListener('change',function(e){
          S.entryPreviewEnabled=e.target.checked;
          save();
          var box=document.getElementById('custom-entry-image-box');
          if(!S.entryPreviewEnabled&&box)box.remove();
          if(S.entryPreviewEnabled)HshowEntryImage();
        });
      }
      if(cbEntrySplit){
        cbEntrySplit.checked=S.entryPreviewSplitEnabled!==false;
        cbEntrySplit.addEventListener('change',function(e){
          S.entryPreviewSplitEnabled=e.target.checked;
          save();
          var box=document.getElementById('custom-entry-image-box');
          if(box)box.remove();
          if(S.entryPreviewEnabled)HshowEntryImage();
        });
      }
      if(cbSidebar){
        cbSidebar.checked=S.sidebarToggleEnabled!==false;
        cbSidebar.addEventListener('change',function(e){
          S.sidebarToggleEnabled=e.target.checked;
          save();
          var sb=document.querySelector('.tm-sidebar-btn');
          if(sb)sb.style.display=S.sidebarToggleEnabled!==false?'inline-block':'none';
          if(window.__tmSidebar&&typeof window.__tmSidebar.apply==='function')window.__tmSidebar.apply();
        });
      }
      if(cbRowClick){
        cbRowClick.checked=S.rowClickFeePageEnabled!==false;
        cbRowClick.addEventListener('change',function(e){
          S.rowClickFeePageEnabled=e.target.checked;
          save();
        });
      }
      if(cbAutoAlarm){
        cbAutoAlarm.checked=S.autoAlarm!==false;
        cbAutoAlarm.addEventListener('change',function(e){
          S.autoAlarm=e.target.checked;
          save();
          startAutoAlarmInterval();
        });
      }
      if(selAutoAlarmInt){
        selAutoAlarmInt.value=S.autoAlarmInterval||10000;
        selAutoAlarmInt.addEventListener('change',function(e){
          S.autoAlarmInterval=parseInt(e.target.value);
          save();
          startAutoAlarmInterval();
        });
      }
      if(cbDeskNotify){
        cbDeskNotify.checked=S.desktopNotify!==false;
        cbDeskNotify.addEventListener('change',function(e){
          S.desktopNotify=e.target.checked;
          save();
          if(e.target.checked) requestNotifyPermission();
        });
      }
    };
  }
  function AinitAlarmNavigate(){
    if(document.__tm_alarm_nav)return;
    document.__tm_alarm_nav=true;
    function text(el){return (el&&el.textContent||'').trim()}
    function extractInfo(root){
      var lot=null,plate=null,alarmTime=null,id=null,eventType=null,isRecent=false,isPlateAbnormal=false;
      
      var idLink = root.querySelector('a[data-id]');
      if(idLink) id = idLink.getAttribute('data-id');

      var fullText = (root.textContent||'').trim();
      
      if(/차량번호이상|차량 번호 이상/i.test(fullText)) isPlateAbnormal=true;

      if(/입차/.test(fullText)) eventType = 'entry';
      else if(/출차/.test(fullText)) eventType = 'exit';
      else if(/정산|결제/.test(fullText)) eventType = 'pay';
      else if(/미납/.test(fullText)) eventType = 'unpaid';

      if(root.tagName==='TR'){
        var tds=qsa('td',root);
        if(tds.length>10){
           var dt=text(tds[4]);
           var dm=dt.match(/^(\d{4})[.-](\d{2})[.-](\d{2})\s+(\d{2}):(\d{2})/);
           if(dm) {
             alarmTime=new Date(+dm[1],+dm[2]-1,+dm[3],+dm[4],+dm[5]).getTime();
           }

           var l=text(tds[10]);
           if(l) lot=l;

           var cell12=tds[12];
           if(cell12){
         var aLink=cell12.querySelector('a');
         var pt=aLink?text(aLink):text(cell12);
         pt=pt.trim();
         if(/Undefined|미인식|번호없음/i.test(pt)) plate='Undefined';
         else if(/^\d{2,}[가-힣]\d{4}$/.test(pt)) plate=pt;
         else{
            var pm=pt.match(/(\d{2,}[가-힣]\d{4})/);
            if(pm) plate=pm[1];
         }
      }
        }
      }

      var subtit=root.querySelector('.subtit');
      if(subtit){
        var t=text(subtit);
        var m=t.match(/([^\s]+주차장)/);
        if(m) lot=m[1];
      }
      
      if(!plate){
         var strong = root.querySelector('strong');
         if(strong) {
             var st = text(strong);
             if(/Undefined|미인식|번호없음/i.test(st)) plate='Undefined';
             else plate = st;
         }
      }

      if(!lot){
        tds=qsa('td',root);
        for(var i=0;i<tds.length;i++){
          var tx=text(tds[i]);
          if(!lot&&/주차장/.test(tx)) lot=tx;
          if(!plate&&(tx==='Undefined'||/^\d{2,}[가-힣]\d{4}$/.test(tx))) plate=tx;
        }
      }
      var timeEl=root.querySelector('.time');
      if(timeEl){
        var tt=text(timeEl);
        var now=Date.now();
        var mMin=tt.match(/(\d+)\s*분\s*전/);
        var mHour=tt.match(/(\d+)\s*시간\s*전/);
        var mDay=tt.match(/(\d+)\s*일\s*전/);
        if(/방금/.test(tt)) {
            alarmTime=now;
            isRecent=true;
        }
        else if(mMin) alarmTime=now-Number(mMin[1])*60000;
        else if(mHour) alarmTime=now-Number(mHour[1])*3600000;
        else if(mDay) alarmTime=now-Number(mDay[1])*86400000;
      }
      return {lot:lot,plate:plate,alarmTime:alarmTime,id:id,eventType:eventType,isRecent:isRecent,isPlateAbnormal:isPlateAbnormal};
    }
    function goto(info,isClick){
      var data=getRowsCached();
      var rows=data.rows;
      var cand=[];
      
      if(info.id){
         var byId = rows.find(function(r){ return String(r.id) === String(info.id) });
         if(byId) {
             cand = [byId];
         }
      }
      
      if(cand.length === 0){
          cand=rows.filter(function(r){return info.lot?((r.lot||'').indexOf(info.lot)>=0):false});
          if(info.plate==='Undefined'){
            cand=cand.filter(function(r){return !!r.isUndefinedPlate});
          }
          if(info.plate){
            cand=cand.filter(function(r){return (r.plate||'').indexOf(info.plate)>=0});
          }
          if(cand.length>1){
            var beforeRows=cand.filter(function(r){return isBeforePayStatus(r.statusTxt)});
            if(beforeRows.length)cand=beforeRows;
          }

          if(info.isRecent && cand.length > 0){
             cand = [cand[0]];
          }
          else if(info.alarmTime && cand.length > 0){
            var best=pickBestByTime(cand,info);
            if(best){cand=[best]}
          }
      }

      var target=cand[0]||rows.find(function(r){return (r.lot||'').indexOf(info.lot)>=0});
      if(target&&target.tr){
        target.tr.classList.add('tm-alarm-target');
        setTimeout(function(){try{target.tr.classList.remove('tm-alarm-target')}catch(e){}},3000);
        if(isClick){
          var prev=window.__tm_lastAlarmClicked;
          if(prev&&prev!==target.tr){try{prev.classList.remove('tm-alarm-clicked')}catch(e){}}
          target.tr.classList.add('tm-alarm-clicked');
          window.__tm_lastAlarmClicked=target.tr;
        }
        target.tr.scrollIntoView({behavior:'smooth',block:'center'});
        var menu=qs('.dropdown-menu[aria-labelledby="dropdownAlarm"]');
        if(menu) menu.style.display='none';
      }
    }
    document.addEventListener('click',function(e){
      var a=e.target.closest('.alarm_lst a.tit, .alarm_lst a[data-id], .dropdown-menu[aria-labelledby=\"dropdownAlarm\"] a.tit, table.tb_lst a[data-id]');
      if(!a)return;
      var item=a.closest('li, tr');
      if(!item)return;
      var info=extractInfo(item);
      
      try{
        sessionStorage.setItem('tm_last_alarm',JSON.stringify(info));
        sessionStorage.setItem('tm_last_alarm_secure',JSON.stringify(info));
      }catch(_){}
    },true);
  }
  function AstatusClass(txt){
    var t=(txt||'').trim();
    if(/결제완료|영수증/i.test(t))return 'tm-status-paid';
    if(/회차무료|무료/i.test(t))return 'tm-status-free';
    if(/(결제\s*전|결제전)/i.test(t))return 'tm-status-before';
    if(/미납/i.test(t))return 'tm-status-unpaid';
    if(/Undefined/i.test(t))return 'tm-status-undefined';
    if(/시스템출차/i.test(t))return 'tm-status-system-out';
    if(/영업시간외/i.test(t))return 'tm-status-after-hours';
    return null;
  }
  function AapplyAlarmNavigationOnLoad(){
    var raw=null;try{raw=sessionStorage.getItem('tm_last_alarm')}catch(_){}
    if(!raw)return;
    var info;try{info=JSON.parse(raw)}catch(_){info=null}
    if(!info||!info.lot)return;
    try{sessionStorage.removeItem('tm_last_alarm')}catch(_){}
    var data=getRowsCached();
    var rows=data.rows;
    var cand=rows.filter(function(r){return (r.lot||'').indexOf(info.lot)>=0});
    if(info.plate&&info.plate!=='Undefined'){
      cand=cand.filter(function(r){return (r.plate||'').indexOf(info.plate)>=0});
    }
    if(info.plate==='Undefined'){
      cand=cand.filter(function(r){return !!r.isUndefinedPlate});
    }
    if(cand.length>1){
      var beforeRows=cand.filter(function(r){return isBeforePayStatus(r.statusTxt)});
      if(beforeRows.length)cand=beforeRows;
    }
    if(info.isRecent && cand.length > 0){
        cand=[cand[0]];
    }
    else if(info.alarmTime){
      var best=pickBestByTime(cand,info);
      if(best)cand=[best];
    }
    var target=cand[0]||rows.find(function(r){return (r.lot||'').indexOf(info.lot)>=0});
    if(target&&target.tr){
      target.tr.scrollIntoView({behavior:'smooth',block:'center'});
      if(/(결제\s*전|결제전)/i.test(target.statusTxt||'')||info.isPlateAbnormal){
        if(/(결제\s*전|결제전)/i.test(target.statusTxt||''))target.tr.classList.add('tm-status-before');
        target.tr.classList.add('tm-alarm-clicked');
        window.__tm_lastAlarmClicked=target.tr;
        setTimeout(function(){
          try{target.tr.classList.remove('tm-alarm-target')}catch(_){}
        },3000);
      }
    }
  }
  var REVIEW_STORAGE_KEY='cctv_review_marks_v1';var REVIEW_SETTINGS_KEY='cctv_review_settings_v1';var Rdefault={autoMark:true,imgCompareEnable:false,imgCompareThreshold:10};var Rs=(function(){try{var s=localStorage.getItem(REVIEW_SETTINGS_KEY);return s?JSON.parse(s):Rdefault}catch(e){return Rdefault}})();function Rsave(){try{localStorage.setItem(REVIEW_SETTINGS_KEY,JSON.stringify(Rs))}catch(e){}}
  function RisPage(){return /pms\.parkingplusai\.com\/parking\/parkingList/.test(location.href)}
  var Rmarks=(function(){try{var s=localStorage.getItem(REVIEW_STORAGE_KEY);return s?new Set(JSON.parse(s)):new Set()}catch(e){return new Set()}})();function RsaveMarks(){try{localStorage.setItem(REVIEW_STORAGE_KEY,JSON.stringify(Array.from(Rmarks)))}catch(e){}}
  function RgetRowKey(tr){var k=tr.id||[tr.getAttribute('data-lotid')||'',tr.getAttribute('data-slotid')||''].join('|');if(k&&k!=='|')return k;var r=parseRow(tr);if(!r)return '';return [r.lot||'',r.area||'',String(r.compareTime||''),r.plate||''].join('|')}
  function RapplyMark(tr,mark){var key=RgetRowKey(tr);if(!key)return;if(mark){Rmarks.add(key);tr.classList.add('tm-reviewed')}else{Rmarks.delete(key);tr.classList.remove('tm-reviewed')}RsaveMarks();Rpanel()}
  function RgetEntryImageUrl(tr){var img=tr.querySelector('img');if(img&&img.src)return img.src;var cand=tr.querySelector('a[href$=".jpg"],a[href$=".png"],a[href*=".jpg?"],a[href*=".png?"]');if(cand&&cand.href)return cand.href;return null}
  function Rhamming(a,b){if(!a||!b||a.length!==b.length)return null;var d=0;for(var i=0;i<a.length;i++){if(a[i]!==b[i])d++}return d}
  function RaHashFromUrl(url){return new Promise(function(resolve){try{fetch(url,{cache:'no-store'}).then(function(resp){if(!resp.ok){resolve(null);return}return resp.blob()}).then(function(blob){if(!blob){resolve(null);return}var create=function(b){var canvas=document.createElement('canvas');canvas.width=8;canvas.height=8;var ctx=canvas.getContext('2d');ctx.drawImage(b,0,0,8,8);try{var d=ctx.getImageData(0,0,8,8).data;var gs=[];for(var i=0;i<64;i++){var j=i*4;gs.push((d[j]+d[j+1]+d[j+2])/3)}var sum=0;for(var k=0;k<64;k++){sum+=gs[k]}var avg=sum/64;var bits='';for(var m=0;m<64;m++){bits+=gs[m]>avg?'1':'0'}resolve(bits)}catch(e){resolve(null)}};if('createImageBitmap'in window){createImageBitmap(blob).then(function(bmp){create(bmp)}).catch(function(){resolve(null)})}else{var urlObj=URL.createObjectURL(blob);var im=new Image();im.onload=function(){create(im);URL.revokeObjectURL(urlObj)};im.onerror=function(){resolve(null)};im.src=urlObj}}).catch(function(){resolve(null)})}catch(e){resolve(null)}})}
  function RfindNearestPaidRow(r,rows){let found=null;const i=rows.indexOf(r);for(let d=1;d<=S.neighborDepth;d++){const j1=i-d;const j2=i+d;for(let k=0;k<2;k++){const j=k===0?j1:j2;if(j<0||j>=rows.length)continue;const cand=rows[j];const samePlaceA=(cand.lot===r.lot&&cand.area===r.area);const diffA=minutesDiff(cand.compareTime,r.compareTime);const closeA=diffA<=S.timeWindowMin;const paidA=/결제완료|영수증/i.test(cand.statusTxt||'');if(samePlaceA&&closeA&&paidA){found=cand;break}}if(found)break}if(!found){for(let t=0;t<rows.length;t++){const cand2=rows[t];if(cand2===r)continue;const samePlaceB=(cand2.lot===r.lot&&cand2.area===r.area);const diffB=minutesDiff(cand2.compareTime,r.compareTime);const closeB=diffB<=S.timeWindowMin;const paidB=/결제완료|영수증/i.test(cand2.statusTxt||'');if(samePlaceB&&closeB&&paidB){found=cand2;break}}}return found}
  function RinitButtons(){
    if(!RisPage())return;
    var tbody=(findTable()||document).querySelector('#tbody_list')||(findTable()||document).querySelector('tbody');
    if(!tbody)return;
    var rows=qsa('tr',tbody);
    function handleCctvClick(e){
      var tr=e.currentTarget.closest('tr');
      if(!tr)return;
      if(Rs.autoMark)RapplyMark(tr,true);
    }
    function handleRowDblClick(e){
      e.preventDefault();
      var tr=e.currentTarget;
      var k=RgetRowKey(tr);
      if(!k)return;
      var isMarked=Rmarks.has(k);
      RapplyMark(tr,!isMarked);
    }
    for(var i=0;i<rows.length;i++){
      var tr=rows[i];
      var lastTd=tr.lastElementChild;
      if(!lastTd)continue;
      var cctvBtn=lastTd.querySelector('.btn_cctv');
      if(cctvBtn&&!cctvBtn.__tm_hooked){
        cctvBtn.__tm_hooked=true;
        cctvBtn.addEventListener('click',handleCctvClick);
      }
      if(!tr.__tm_dblclick_hooked){
        tr.__tm_dblclick_hooked=true;
        tr.addEventListener('dblclick',handleRowDblClick);
      }
      var key=RgetRowKey(tr);
      if(key&&Rmarks.has(key))tr.classList.add('tm-reviewed');
    }
  }
  function MinjectFeeModalButton(){
    if(S.show10MinButton===false)return;
    var modal=qs('#modal_fee_info');
    if(!modal||getComputedStyle(modal).display==='none')return;
    var endDateTd=qs('#end_date',modal);
    if(!endDateTd)return;
    if(endDateTd.querySelector('.tm-adjust-btn'))return;
    
    var btn=document.createElement('button');
    btn.className='btn btn-xs btn-success tm-adjust-btn';
    btn.style.marginLeft='6px';
    btn.textContent='10분 처리';
    btn.type='button';
    btn.onclick=function(){
      var outTimeInput=qs('#beforeUpdateOutTime',modal)||qs('#beforeUpdateOutTime');
      if(!outTimeInput)return;
      var outTimeStr=outTimeInput.value;
      if(!outTimeStr)return;
      
      var dt=parseDateTime(outTimeStr);
      if(!dt){alert('입차시간 파싱 실패');return;}
      
      var targetTime=dt + 10*60*1000;
      var targetDate=new Date(targetTime);
      
      var yyyy=targetDate.getFullYear();
      var mm=String(targetDate.getMonth()+1).padStart(2,'0');
      var dd=String(targetDate.getDate()).padStart(2,'0');
      var HH=String(targetDate.getHours()).padStart(2,'0');
      var MM=String(targetDate.getMinutes()).padStart(2,'0');
      
      var dateStr=yyyy+'.'+mm+'.'+dd;
      var timeStr=HH+':'+MM;

      function pickVisibleInput(sel){
        var all=qsa(sel,endDateTd);
        var visible=null;
        for(var i=0;i<all.length;i++){
          var el=all[i];
          if(el.classList.contains('hidden'))continue;
          if(el.offsetParent===null)continue;
          visible=el;break;
        }
        return visible||all[0]||null;
      }

      function isEditMode(){
        var dInput=pickVisibleInput('.datepicker_d');
        var tInput=pickVisibleInput('.datepicker_time');
        var ok=!!(dInput&&tInput&&!qsa('.display-text.hidden',endDateTd).length);
        return ok;
      }
      
      function doApply(){
        var dInput=pickVisibleInput('.datepicker_d');
        var tInput=pickVisibleInput('.datepicker_time');
        if(dInput){dInput.value=dateStr;dInput.dispatchEvent(new Event('change'));}
        if(tInput){tInput.value=timeStr;tInput.dispatchEvent(new Event('change'));}
        setTimeout(function(){
          var saveBtn=qs('button[data-action="save-out-time"]',endDateTd);
          if(saveBtn) saveBtn.click();
        },150);
      }

      var editBtn=qs('button[data-action="edit-out-time"]',endDateTd);

      if(isEditMode()){
        doApply();
      }else if(editBtn){
        editBtn.click();
        var attempts=0;
        var timer=setInterval(function(){
          attempts++;
          if(isEditMode()){
            clearInterval(timer);
            doApply();
          }else if(attempts>40){
            clearInterval(timer);
          }
        },50);
      }else{
        doApply();
      }
    };
    
    endDateTd.appendChild(btn);
  }
  function MrestoreOutToOriginal(){
    var modal=qs('#modal_fee_info')||document;
    var endDateTd=qs('#end_date',modal);
    if(!endDateTd)return;
    var outTimeInput=qs('#beforeUpdateOutTime',modal)||qs('#beforeUpdateOutTime');
    if(!outTimeInput)return;
    var outTimeStr=outTimeInput.value;
    if(!outTimeStr)return;
    var dt=parseDateTime(outTimeStr);
    if(!dt)return;
    var d=new Date(dt);
    var yyyy=d.getFullYear();
    var mm=String(d.getMonth()+1).padStart(2,'0');
    var dd=String(d.getDate()).padStart(2,'0');
    var HH=String(d.getHours()).padStart(2,'0');
    var MM=String(d.getMinutes()).padStart(2,'0');
    var dateStr=yyyy+'.'+mm+'.'+dd;
    var timeStr=HH+':'+MM;
    function pickVisibleInput(sel){
      var all=qsa(sel,endDateTd);
      var visible=null;
      for(var i=0;i<all.length;i++){
        var el=all[i];
        if(el.classList.contains('hidden'))continue;
        if(el.offsetParent===null)continue;
        visible=el;break;
      }
      return visible||all[0]||null;
    }
    function isEditMode(){
      var dInput=pickVisibleInput('.datepicker_d');
      var tInput=pickVisibleInput('.datepicker_time');
      var ok=!!(dInput&&tInput&&!qsa('.display-text.hidden',endDateTd).length);
      return ok;
    }
    function applyRestore(){
      var dInput=pickVisibleInput('.datepicker_d');
      var tInput=pickVisibleInput('.datepicker_time');
      if(dInput){dInput.value=dateStr;dInput.dispatchEvent(new Event('change'));}
      if(tInput){tInput.value=timeStr;tInput.dispatchEvent(new Event('change'));}
      setTimeout(function(){
        var saveBtn=qs('button[data-action="save-out-time"]',endDateTd);
        if(saveBtn) saveBtn.click();
      },150);
    }
    var editBtn=qs('button[data-action="edit-out-time"]',endDateTd);
    if(isEditMode()){
      applyRestore();
    }else if(editBtn){
      editBtn.click();
      var attempts=0;
      var timer=setInterval(function(){
        attempts++;
        if(isEditMode()){
          clearInterval(timer);
          applyRestore();
        }else if(attempts>40){
          clearInterval(timer);
        }
      },50);
    }
  }

  function MobserveModal(){
    var obs=new MutationObserver(function(){MinjectFeeModalButton()});
    obs.observe(document.body,{childList:true,subtree:true});
  }
  MobserveModal();

  function Rpanel(){if(!RisPage())return;var el=qs('.tm-review-panel');var html='<div class="tm-review-panel"><label><input type="checkbox" id="tm_auto_mark"> CCTV 클릭시 자동 검토표시</label><label style="margin-left:6px"><input type="checkbox" id="tm_img_enable"> 이미지 비교 사용</label><label style="margin-left:6px">임계 <select id="tm_img_thres"><option value="6">6</option><option value="10">10</option><option value="16">16</option></select></label><button id="tm_next" class="btn btn-xs btn-warning">다음검토</button><button id="tm_clear" class="btn btn-xs btn-gray">초기화</button><span style="margin-left:8px">검토표시: '+Rmarks.size+'개</span></div>';if(el)el.outerHTML=html;else document.body.insertAdjacentHTML('beforeend',html);el=qs('.tm-review-panel');var cb=qs('#tm_auto_mark');if(cb){cb.checked=!!Rs.autoMark;cb.addEventListener('change',function(e){Rs.autoMark=e.target.checked;Rsave()})}var ie=qs('#tm_img_enable');if(ie){ie.checked=!!Rs.imgCompareEnable;ie.addEventListener('change',function(e){Rs.imgCompareEnable=e.target.checked;Rsave()})}var th=qs('#tm_img_thres');if(th){th.value=String(Rs.imgCompareThreshold||10);th.addEventListener('change',function(e){Rs.imgCompareThreshold=Number(e.target.value);Rsave()})}var nxt=qs('#tm_next');if(nxt){nxt.addEventListener('click',function(){Rnext()})}var clr=qs('#tm_clear');if(clr){clr.addEventListener('click',function(){Rmarks=new Set();RsaveMarks();Rrefresh()})}}
  function Rnext(){if(!RisPage())return;var table=findTable();if(!table)return;var tbody=table.querySelector('#tbody_list')||table.querySelector('tbody')||table;var trs=qsa('tr',tbody);for(var i=0;i<trs.length;i++){var tr=trs[i];var key=RgetRowKey(tr);if(!key)continue;var marked=Rmarks.has(key);if(!marked){RapplyMark(tr,true);tr.scrollIntoView({behavior:'smooth',block:'center'});if(Rs.imgCompareEnable){var data=collectRows();var rows=data.rows;var r=parseRow(tr);if(r&&r.isUnpaid){var paid=RfindNearestPaidRow(r,rows);var u1=RgetEntryImageUrl(tr);var u2=paid?RgetEntryImageUrl(paid.tr):null;if(u1&&u2){Promise.all([RaHashFromUrl(u1),RaHashFromUrl(u2)]).then(function(xs){var h1=xs[0],h2=xs[1];var d=Rhamming(h1,h2);if(d!=null){var ok=d<=Rs.imgCompareThreshold;notify(ok?'이미지 일치':'이미지 불일치','해밍거리 '+d+'/64')}})}}}return}}notify('검토 완료','모든 행이 검토되었습니다')}
  function Rrefresh(){if(!RisPage())return;RinitButtons();Rpanel()}
  function Robserve(){if(!RisPage())return;var table=findTable();var target=table?table.querySelector('#tbody_list')||table.querySelector('tbody'):null;if(!target)return;var debouncedR=debounce(function(){Rrefresh()},200);var obs=new MutationObserver(function(){debouncedR()});obs.observe(target,{childList:true,subtree:true})}
  Rrefresh();Robserve()
  function RinitShortcuts(){if(!RisPage())return;if(document.__tm_review_shortcuts)return;document.__tm_review_shortcuts=true;document.addEventListener('keydown',function(e){if(!e.altKey)return;var tg=(e.target&&e.target.tagName)||'';if(/input|textarea|select/i.test(tg))return;var k=e.key;if(k==='n'||k==='N'){e.preventDefault();var btn=qs('#tm_next');if(btn)btn.click();else Rnext()}else if(k==='r'||k==='R'){e.preventDefault();var clr=qs('#tm_clear');if(clr)clr.click()}else if(k==='m'||k==='M'){e.preventDefault();var cb=qs('#tm_auto_mark');if(cb){cb.checked=!cb.checked;var evt=new Event('change');cb.dispatchEvent(evt)}}else if(k==='i'||k==='I'){e.preventDefault();var ie=qs('#tm_img_enable');if(ie){ie.checked=!ie.checked;var evt2=new Event('change');ie.dispatchEvent(evt2)}}else if(k==='1'){e.preventDefault();var th1=qs('#tm_img_thres');if(th1){th1.value='6';var evt3=new Event('change');th1.dispatchEvent(evt3)}}else if(k==='2'){e.preventDefault();var th2=qs('#tm_img_thres');if(th2){th2.value='10';var evt4=new Event('change');th2.dispatchEvent(evt4)}}else if(k==='3'){e.preventDefault();var th3=qs('#tm_img_thres');if(th3){th3.value='16';var evt5=new Event('change');th3.dispatchEvent(evt5)}}})}
  RinitShortcuts()
  function TMcheckURLAction(){if(!RisPage())return;var h=location.hash||'';if(!h||h.indexOf('#tm-')!==0)return;var a=h.replace('#tm-','');if(a==='next'){Rnext()}else if(a==='clear'){var clr=qs('#tm_clear');if(clr)clr.click()}else if(a==='auto-on'){var cb=qs('#tm_auto_mark');if(cb){cb.checked=true;var e=new Event('change');cb.dispatchEvent(e)}}else if(a==='auto-off'){var cb2=qs('#tm_auto_mark');if(cb2){cb2.checked=false;var e2=new Event('change');cb2.dispatchEvent(e2)}}else if(a==='img-on'){var ie=qs('#tm_img_enable');if(ie){ie.checked=true;var e3=new Event('change');ie.dispatchEvent(e3)}}else if(a==='img-off'){var ie2=qs('#tm_img_enable');if(ie2){ie2.checked=false;var e4=new Event('change');ie2.dispatchEvent(e4)}}else if(a==='thres-6'){var th=qs('#tm_img_thres');if(th){th.value='6';var e5=new Event('change');th.dispatchEvent(e5)}}else if(a==='thres-10'){var th2=qs('#tm_img_thres');if(th2){th2.value='10';var e6=new Event('change');th2.dispatchEvent(e6)}}else if(a==='thres-16'){var th3=qs('#tm_img_thres');if(th3){th3.value='16';var e7=new Event('change');th3.dispatchEvent(e7)}}history.replaceState(null,'',location.pathname+location.search)}
  window.addEventListener('hashchange',TMcheckURLAction)
  TMcheckURLAction()
  addStyle('.tm-modal{position:fixed;left:0;top:0;right:0;bottom:0;background:rgba(0,0,0,.4);z-index:100000;display:flex;align-items:center;justify-content:center}.tm-modal .tm-box{background:#fff;min-width:320px;max-width:90vw;max-height:90vh;overflow:auto;border-radius:8px;box-shadow:0 2px 12px rgba(0,0,0,.2)}.tm-modal .tm-box .tm-head{display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-bottom:1px solid #eee}.tm-modal .tm-box .tm-body{padding:12px}.tm-modal .tm-box img{max-width:70vw;max-height:60vh;display:block;margin-bottom:8px}.tm-modal .tm-box .tm-actions{display:flex;gap:8px;justify-content:flex-end;padding:8px 12px;border-top:1px solid #eee}')
  var PLATE_EDIT_KEY='plate_edits_v1';
  var Uedits=(function(){try{var s=localStorage.getItem(PLATE_EDIT_KEY);return s?JSON.parse(s):{}}catch(e){return {}}})();
  function UsaveEdits(){try{localStorage.setItem(PLATE_EDIT_KEY,JSON.stringify(Uedits))}catch(e){}}
  
  var TM_PlateHistory={
    key:'tm_plate_history_v1',
    limit:10,
    load:function(){try{return JSON.parse(localStorage.getItem(this.key)||'{}')}catch(e){return {}}},
    save:function(d){try{localStorage.setItem(this.key,JSON.stringify(d))}catch(e){}},
    norm:function(s){
      if(s==null)return '';
      return String(s).replace(/\(.*\)/g,'').replace(/면/g,'').trim();
    },
    add:function(lot,spot,plate){
      if(lot==null||spot==null||!plate)return;
      var d=this.load();
      var k=lot+'|'+this.norm(spot);
      var list=d[k]||[];
      list=list.filter(function(x){return x.plate!==plate});
      list.unshift({plate:plate,time:Date.now()});
      if(list.length>this.limit)list=list.slice(0,this.limit);
      d[k]=list;
      this.save(d);
    },
    get:function(lot,spot){
      if(lot==null||spot==null)return [];
      var d=this.load();
      return d[lot+'|'+this.norm(spot)]||[];
    }
  };

  function UrowKey(tr){var k=RgetRowKey(tr);return k||''}
  function UplateCell(tr){var tds=qsa('td',tr);return tds[6]||null}
  function UsetPlateText(cell,txt){if(!cell)return;var a=cell.querySelector('a');if(a)a.textContent=txt;else cell.textContent=txt}
  var Uqueue=[];var Ucur=-1;
  addStyle('.tm-modal .tm-imgs{display:flex;gap:12px;align-items:flex-start}.tm-modal .tm-imgs>div{display:flex;flex-direction:column;gap:6px}')
  function UimgFromCell(cell){if(!cell)return null;var a=cell.querySelector('a[href$=".jpg"],a[href$=".png"],a[href*=".jpg?"],a[href*=".png?"]');if(a&&a.href)return a.href;var im=cell.querySelector('img');if(im&&im.src)return im.src;return null}
  function UgetInOutUrls(tr){
    var inUrl=null;
    var outUrl=null;
    var pin=qs('#pictureIn');
    var pout=qs('#pictureOut');
    if(pin){
      var di=pin.getAttribute('data-img')||(pin.dataset&&pin.dataset.img)||pin.getAttribute('data-src');
      if(di)inUrl=di;
    }
    if(pout){
      var d2=pout.getAttribute('data-img')||(pout.dataset&&pout.dataset.img)||pout.getAttribute('data-src');
      if(d2)outUrl=d2;
    }
    var tds=qsa('td',tr);
    if(!inUrl)inUrl=UimgFromCell(tds[1]);
    if(!outUrl)outUrl=UimgFromCell(tds[3]);
    if(!inUrl||!outUrl){
      var links=Array.prototype.slice.call(tr.querySelectorAll('a[href$=".jpg"],a[href$=".png"],a[href*=".jpg?"],a[href*=".png?"]'));
      var imgs=Array.prototype.slice.call(tr.querySelectorAll('img'));
      var urls=[];
      for(var i=0;i<links.length;i++){if(links[i].href)urls.push(links[i].href)}
      for(var j=0;j<imgs.length;j++){if(imgs[j].src)urls.push(imgs[j].src)}
      urls=Array.from(new Set(urls));
      if(!inUrl)inUrl=urls[0]||null;
      if(!outUrl)outUrl=urls[1]||null;
    }
    return {in:inUrl,out:outUrl};
  }
  function UcollectUndefinedRows(){var table=findTable();if(!table)return [];var tbody=table.querySelector('#tbody_list')||table.querySelector('tbody')||table;var trs=qsa('tr',tbody);var out=[];for(let i=0;i<trs.length;i++){const tr=trs[i];const r=parseRow(tr);if(!r)continue;const txt=(r.plate||'').trim();const isUndefined=!txt||/Undefined/i.test(txt);if(isUndefined)out.push(tr)}return out}
  function UrenderModalByIndex(idx){
    var ex=qs('.tm-modal');if(ex)ex.remove();
    Uqueue=UcollectUndefinedRows();
    if(idx<0||idx>=Uqueue.length)return;
    Ucur=idx;
    var tr=Uqueue[idx];
    var r=parseRow(tr);if(!r)return;
    var io=UgetInOutUrls(tr);
    var plate=r.plate||'';
    var lid=tr.getAttribute('data-lotid');
    var sid=tr.getAttribute('data-slotid');
    var suggestedPlate='';
    if(lid&&sid){
      var h=TM_PlateHistory.get(lid,sid);
      if(h&&h.length>0)suggestedPlate=h[0].plate;
    }
    var inputValue=plate;
    var isUndefined=!inputValue||/Undefined|미인식|번호없음/i.test(inputValue);
    if(isUndefined&&suggestedPlate){
      inputValue=suggestedPlate;
    }

    var imgsHtml='<div class="tm-imgs">'+(io.in?('<div><div>입차</div><img id="tm_img_in" src="'+io.in+'"></div>'):'')+(io.out?('<div><div>출차</div><img id="tm_img_out" src="'+io.out+'"></div>'):'')+'</div>';
    var bodyHtml=imgsHtml;
    if(S.plateEditEnabled){
      bodyHtml+= '<div style="margin-top:8px"><label>번호판 <input type="text" id="tm_plate_input" class="w-lg" value="'+inputValue+'"></label>';
      if(isUndefined&&suggestedPlate){
        bodyHtml+=' <span style="color:blue;font-size:12px">(최근 입력값 자동완성)</span>';
      }
      bodyHtml+='</div>';
    }
    var actionsHtml='';
    if(S.plateEditEnabled){
      actionsHtml='<div class="tm-actions"><button id="tm_save" class="btn btn-xs btn-primary">저장</button></div>';
    }
    var html='<div class="tm-modal"><div class="tm-box"><div class="tm-head"><strong>이미지/번호판</strong><div><button id="tm_prev" class="btn btn-xs btn-gray">이전</button><button id="tm_next_btn" class="btn btn-xs btn-gray">다음</button><button id="tm_close" class="btn btn-xs btn-gray">닫기</button></div></div><div class="tm-body">'+bodyHtml+'</div>'+actionsHtml+'</div></div>';
    document.body.insertAdjacentHTML('beforeend',html);
    var modal=qs('.tm-modal');
    var prev=qs('#tm_prev');
    if(prev){
      prev.addEventListener('click',function(){
        if(modal)modal.remove();
        var ni=(Ucur-1+Uqueue.length)%Uqueue.length;
        UrenderModalByIndex(ni);
      });
    }
    var next=qs('#tm_next_btn');
    if(next){
      next.addEventListener('click',function(){
        if(modal)modal.remove();
        var ni=(Ucur+1)%Uqueue.length;
        UrenderModalByIndex(ni);
      });
    }
    var closeBtn=qs('#tm_close');
    if(closeBtn){
      closeBtn.addEventListener('click',function(){
        if(modal)modal.remove();
      });
    }
    var saveBtn=qs('#tm_save');
    if(saveBtn&&S.plateEditEnabled){
      function doSave(){
        var input=qs('#tm_plate_input');
        if(!input)return;
        var v=(input.value||'').trim();
        var cell=UplateCell(tr);
        UsetPlateText(cell,v);
        var key=UrowKey(tr);
        if(key)Uedits[key]=v;
        UsaveEdits();
        var lid=tr.getAttribute('data-lotid');
        var sid=tr.getAttribute('data-slotid');
        if(lid&&sid)TM_PlateHistory.add(lid,sid,v);
        tr.classList.add('tm-reviewed');
        if(modal)modal.remove();
      }
      saveBtn.addEventListener('click',function(){
        doSave();
      });
      var plateInput=qs('#tm_plate_input');
      if(plateInput){
        plateInput.addEventListener('keydown',function(e){
          if(e.key==='Enter'){
            e.preventDefault();
            doSave();
          }
        });
        plateInput.focus();
        plateInput.select();
      }
    }
    setTimeout(function(){
      var pin2=qs('#pictureIn');
      var pout2=qs('#pictureOut');
      var changed=false;
      if(pin2){
        var di2=pin2.getAttribute('data-img')||(pin2.dataset&&pin2.dataset.img)||pin2.getAttribute('data-src');
        if(di2){
          var imIn=qs('#tm_img_in');
          if(imIn&&imIn.src!==di2){imIn.src=di2;changed=true;}
        }
      }
      if(pout2){
        var d22=pout2.getAttribute('data-img')||(pout2.dataset&&pout2.dataset.img)||pout2.getAttribute('data-src');
        if(d22){
          var imOut=qs('#tm_img_out');
          if(imOut&&imOut.src!==d22){imOut.src=d22;changed=true;}
        }
      }
    },400);
  }
function UopenModal(tr){
  Uqueue=UcollectUndefinedRows();
  var idx=Uqueue.indexOf(tr);if(idx<0)idx=0;
  var id=tr&&tr.id;
  var lotId=tr&&tr.getAttribute('data-lotid');
  var slotId=tr&&tr.getAttribute('data-slotid');
  var delay=0;
  if(typeof getParkingRecordOne==='function'&&id){
    try{
      getParkingRecordOne(id,lotId,slotId);
      delay=500;
    }catch(e){}
  }
  setTimeout(function(){UrenderModalByIndex(idx)},delay);
}
function UinitUndefined(){
  if(!(RisPage()||RisRecordPage()))return;
  if(!S.imagePopupEnabled&&S.plateEditEnabled===false)return;
  var table=findTable();if(!table)return;
  var tbody=table.querySelector('#tbody_list')||table.querySelector('tbody')||table;
  var oldBtns=qsa('.btn-plate');for(var bi=0;bi<oldBtns.length;bi++){oldBtns[bi].remove()}
  var trs=qsa('tr',tbody);
  for(var i=0;i<trs.length;i++){
    var tr=trs[i];
    var r=parseRow(tr);if(!r)continue;
    var cell=UplateCell(tr);if(!cell)continue;
    var key=UrowKey(tr);
    if(key&&Uedits[key]){UsetPlateText(cell,Uedits[key]);tr.classList.add('tm-reviewed')}
    var txt=(r.plate||'').trim();
    var isUndefined=!txt||/Undefined/i.test(txt);
    var anchor=cell.querySelector('a');
    if(isUndefined&&anchor&&!anchor.__tm_plate_click){
      anchor.__tm_plate_click=true;
      /*
      anchor.addEventListener('click',(function(t){return function(e){
        if(!S.plateEditEnabled)return;
        e.preventDefault();
        UopenModal(t);
      }})(tr));
      anchor.addEventListener('dblclick',(function(t){return function(e){
        if(!S.plateEditEnabled)return;
        e.preventDefault();
        UopenModal(t);
      }})(tr));
      */
    }
  }
}
  var Uobs=null;
  function Udisable(){if(Uobs){Uobs.disconnect();Uobs=null}var modal=qs('.tm-modal');if(modal)modal.remove();var btns=qsa('.btn-plate');for(var i=0;i<btns.length;i++){btns[i].remove()}}
  function Uobserve(){if(Uobs){Uobs.disconnect();Uobs=null}if(!S.imagePopupEnabled&&S.plateEditEnabled===false){Udisable();return}UinitUndefined();Uobs=new MutationObserver(function(){UinitUndefined()});Uobs.observe(document.body,{childList:true,subtree:true})}
  Uobserve()
  function CapplyCarplateHandlers(){
    var container=qs('#car-information-container')||document;
    var td=qs('#carplate',container);
    if(!td)return;
    var display=td.querySelector('.display-text');
    var input=td.querySelector('.edit-input');
    var editBtn=td.querySelector('button[data-action="edit-carplate"]');
    var saveBtn=td.querySelector('button[data-action="save-carplate"]');
    if(!display||!input||!editBtn||!saveBtn)return;

    if(S.plateEditEnabled===false)return;

    if(saveBtn&&!saveBtn.__tm_history_hook){
      saveBtn.__tm_history_hook=true;
      saveBtn.addEventListener('click',function(){
        var v=(input.value||'').trim();
        if(!v)return;
        var lot,spot;
        if(window.__tm_last_record_args){
           lot=window.__tm_last_record_args.lotId;
           spot=window.__tm_last_record_args.slotId;
        }
        if(lot!=null&&spot!=null){
           TM_PlateHistory.add(lot,spot,v);
        }
      });
    }

    if(!input.__tm_enter_hook){
      input.__tm_enter_hook=true;
      input.addEventListener('keydown',function(e){
        if(e.key==='Enter'){
          e.preventDefault();
          saveBtn.click();
        }
      });
    }

    if(!display.__tm_click_hook){
      display.__tm_click_hook=true;
      display.style.cursor='pointer';
      display.title='클릭하여 수정';
      display.addEventListener('click',function(e){
        e.preventDefault();
        editBtn.click();
      });
    }
  }
  function CobserveCarInfo(){
    CapplyCarplateHandlers();
    var obs=new MutationObserver(function(){CapplyCarplateHandlers()});
    obs.observe(document.body,{childList:true,subtree:true});
  }
  CobserveCarInfo()
  function PcollectLinks(){if(!RisPage())return[];var as=qsa('a[href*="/parking/parkingList"]');var seen=new Set();var out=[];for(var i=0;i<as.length;i++){var href=as[i].href||'';if(!href)continue;var u;try{u=new URL(href)}catch(e){continue}var lid=u.searchParams.get('lotId')||href;var key=u.origin+u.pathname+'?lotId='+lid;if(seen.has(key))continue;seen.add(key);out.push(href)}return out}
  function PcurrentIndex(links){var href=location.href;var idx=links.findIndex(function(h){return h===href});return idx<0?0:idx}
  function PgotoIndex(links,idx){if(!links.length)return;var n=((idx%links.length)+links.length)%links.length;location.href=links[n]}
  function PinitShortcuts(){if(!RisPage())return;if(document.__tm_shortcuts_added)return;document.__tm_shortcuts_added=true;var links=PcollectLinks();var cur=PcurrentIndex(links);document.addEventListener('keydown',function(e){if(!e.altKey)return;var tag=(e.target&&e.target.tagName)||'';if(/input|textarea|select/i.test(tag))return;if(e.key==='ArrowRight'){e.preventDefault();PgotoIndex(links,cur+1)}else if(e.key==='ArrowLeft'){e.preventDefault();PgotoIndex(links,cur-1)}else if(e.key==='1'){e.preventDefault();PgotoIndex(links,0)}else if(e.key==='2'){e.preventDefault();PgotoIndex(links,1)}else if(e.key==='3'){e.preventDefault();PgotoIndex(links,2)}})}
  PinitShortcuts()
  function AinitAlarmNotify(){
    if(document.__tm_alarm_notify)return;
    document.__tm_alarm_notify=true;
    
    // 세션 스토리지 사용: 페이지 새로고침해도 이미 본 알람 기억
    var seenKey='tm_alarm_seen_v2';
    var seen;
    try{
        var s=sessionStorage.getItem(seenKey);
        seen=s?new Set(JSON.parse(s)):new Set();
    }catch(e){seen=new Set()}

    function saveSeen(){
        try{
            // 너무 커지면 정리 (최신 100개만 유지)
            if(seen.size>100){
                var arr=Array.from(seen).slice(-100);
                seen=new Set(arr);
            }
            sessionStorage.setItem(seenKey,JSON.stringify(Array.from(seen)));
        }catch(e){}
    }

    function findMenu(){
      return qs('.dropdown-menu[aria-labelledby="dropdownAlarm"]')||qs('#alarmTabContent')?.closest('.dropdown-menu')||null;
    }
    function clearAlarmHighlight(){
      var menu=findMenu();
      if(!menu)return;
      var items=qsa('.alarm_lst li',menu);
      for(var i=0;i<items.length;i++){
        items[i].classList.remove('tm-status-paid','tm-status-free','tm-status-before','tm-status-unpaid','tm-status-undefined');
      }
    }
    function scan(){
      var menu=findMenu();
      console.log('[TM-ALARM] scan start', {hasMenu: !!menu});
      if(!menu)return;
      clearAlarmHighlight();
      var items=qsa('.alarm_lst li',menu);
      console.log('[TM-ALARM] scan items', {count: items.length});
      var newCount=0;
      for(var i=0;i<items.length;i++){
        var tit=qs('.tit',items[i]);
        var txt=(tit&&tit.textContent||'').trim();
        var tmEl=qs('.time',items[i]);
        var tm=(tmEl&&tmEl.textContent||'').trim();
        var rgt=qs('.item_rgt',items[i]);
        if(rgt){
          if(/방금/.test(tm))rgt.classList.add('tm-time-recent');
          else rgt.classList.remove('tm-time-recent');
        }
        
        // 키 생성 시 '시간' 제외하고 '텍스트+ID' 조합 사용 (중복 방지 강화)
        // ID가 없으면 텍스트만 사용하되, 너무 짧으면 무시
        var id=items[i].id||'';
        var key=(txt||'')+'|'+id; 
        
        if(!txt)continue;
        if(/미납/i.test(txt))continue;
        
        if(!seen.has(key)){
          seen.add(key);
          newCount++;
          console.log('[TM-ALARM] scan new alarm', {text: txt, time: tm, key: key});
          
          // 클릭 시 이동할 URL 찾기
          var link=items[i].querySelector('a');
          var url=link?link.href:null;
          
          notify('알람',txt+(tm?' • '+tm:''), url);
        }
      }
      if(newCount>0) saveSeen();
      console.log('[TM-ALARM] scan end', {seenCount: seen.size, newCount: newCount});
    }
    var obs=new MutationObserver(function(){scan()});
    obs.observe(document.body,{childList:true,subtree:true});
    var bell=qs('#dropdownAlarm');
    if(bell&&!bell.__tm_notify_hook){bell.__tm_notify_hook=true;bell.addEventListener('click',function(){setTimeout(scan,50)})}
    var orig=window.refreshAlarmContents;
    if(typeof orig==='function'&&!orig.__tm_wrap){
      var w=function(){var r=orig.apply(this,arguments);setTimeout(scan,80);return r};
      w.__tm_wrap=true;
      window.refreshAlarmContents=w;
    }
    setInterval(scan,5000);
    scan();
  }

  startAutoAlarmInterval();
  ready();
})();
