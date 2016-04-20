// JavaScript Document

var dir = "mp3/";
var playlist = ["sample", "sample2", "sample3"];
var playlist_index = 0;
var ext = ".mp3";
var audio = new Audio();
audio.src = dir + playlist[0] + ext;
audio.loop = false;
audio.autoplay = false;
audio.play();

var canvas, ctx, source, context, analyser, fbc_array, bars, bar_x, bar_width, bar_height;




































