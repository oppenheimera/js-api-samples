(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function y(){const{Map3DElement:l,Marker3DElement:o}=await google.maps.importLibrary("maps3d"),{PinElement:r}=await google.maps.importLibrary("marker"),n=new l({center:{lat:37.4176,lng:-122.02,altitude:0},tilt:67.5,range:7e3,mode:"HYBRID"});n.mode="SATELLITE";const e=new r({borderColor:"#FFFFFF"}),t=new o({position:{lat:37.415,lng:-122.035}});t.append(e);const i=new o({position:{lat:37.419,lng:-122.03},label:"Simple label"}),u=new r({scale:1.5}),p=new o({position:{lat:37.419,lng:-122.02}});p.append(u);const m=new r({glyphColor:"white"}),a=new o({position:{lat:37.415,lng:-122.025}});a.append(m);const g=new r({background:"#F0F6FC",glyph:"E",glyphColor:"red",borderColor:"#0000FF"}),s=new o({position:{lat:37.415,lng:-122.015,altitude:50},extruded:!0,altitudeMode:"RELATIVE_TO_GROUND"});s.append(g);const f=new r({glyph:""}),c=new o({position:{lat:37.415,lng:-122.005}});c.append(f);const h=new r({background:"#FBBC04"}),d=new o({position:{lat:37.419,lng:-122.01}});d.append(h),n.append(i),n.append(p),n.append(d),n.append(t),n.append(a),n.append(s),n.append(c),document.body.append(n)}y();
