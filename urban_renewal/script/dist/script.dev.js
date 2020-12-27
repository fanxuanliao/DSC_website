"use strict";

///////////////////動畫/////////////////////
function set_body_height() {
  // set body height = window height
  $('body').height($(window).height());
}

function TriggerExcavator() {
  $(".excavator").toggleClass('hidden');
}

$(document).ready(function () {
  $(".mapael .map").hide();
  $("nav").hide(); // $(".container").hide();

  $(window).bind('resize', set_body_height);
  set_body_height();
  var clicktimes = 0;
  var cnv = document.getElementById('cnv'),
      //canvas
  ctx = cnv.getContext('2d'); //canvas 2d 可使用的attr, method

  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  var bgImg = new Image();
  bgImg.src = './material/ground0.png';

  bgImg.onload = function () {
    ctx.drawImage(bgImg, 0, 0, cnv.width, cnv.height); // drawImage(img, x, y ,w ,h)
  };

  $("canvas").click(function () {
    if (clicktimes <= 5) {
      if (clicktimes % 2 == 1) {
        bgImg.src = "./material/ground" + (clicktimes + 1) / 2 + ".png";
        $("img").attr("left", "(80%, 0)");
        console.log($("img").attr("left"));
      } else {
        $("img").attr("left", "(40%,0)");
      }

      TriggerExcavator();
      clicktimes++;
    } else {
      $("img").css('display', 'none');
      $("canvas").css('display', 'none'); // $("img").hide();
      // $("canvas").hide();

      $(".mapael .map").show();
      $("nav").show(); // $(".container").show();
    }
  });
}); ///////////////////地圖/////////////////////
// $(document).ready(function() {
// var caseintro = $("#caseintro-main");
//        var caseintro = document.getElementById("caseintro-main");
//         var closeintro = document.getElementById("close");
//         var testbtn = document.getElementById("testbtn");
//         var casecontent = testbtn = document.getElementById("caseintro-content");
//         var intro_reveal = function(){
//             caseintro.style.display = "block";
//             $("#caseintro-content").load("case1"+".html");
//         };
//         var intro_close = function(){
//             caseintro.style.display = "none";
//         };
//         closeintro.onclick = intro_close;
//         let k = document.getElementsByTagName('data-id')[0];
//         console.log(k);
//         //-----------------------------
//         console.log($.browser);
//         console.log($.browser.name);
//         //-----------------------------
//         //mapeal
//         var loading = {"areas": {}, "legends": {}, "plots":{}};
//         var pathjson = ["./dataset/dataset_area1.json", "./dataset/dataset_legend1.json", "./dataset/dataset_plot1.json"];
//         var loading2 = ["areas", "legends", "plots"];
//         // var loading3 = [mapealdata.areas, mapealdata.legends, mapealdata.plots];
//         console.log("The pathjson has", pathjson, Object.keys(pathjson).length);
//         console.log("The loading2 has", loading2);
//         function process() {
//             if ($.browser.name == "msie") {
//                 // WHY YOU STILL USE IE???
//                 // for those old explorer
//                 console.log("IS THIS A IE????");        
//                 for (var i=0; i<Object.keys(pathjson).length; i++) {
//                     (function (i) {
//                         $.getJSON(pathjson[i], function(obj) {
//                             console.log("start loading...");
//                             loading[loading2[i]] = obj;
//                             console.log(obj);
//                             console.log(i, loading[loading2[i]]);
//                             console.log(loading2[i] + " is loading from " + pathjson[i] + " ...");
//                         })
//                         .done(function() {
//                             console.log(loading2[i] + " loaded successfully\n" + "##########");
//                             loading3[i] = true;
//                         })
//                         .fail(function() {
//                             console.log(loading2[i] + " has error occur\n" + "!!!!!!!!!!");
//                         });
//                     })(i);
//                 }
//             } else {
//                 for (let i=0; i<Object.keys(pathjson).length; i++) {
//                     $.ajax({
//                         type: 'GET',
//                         url: pathjson[i],
//                         dataType: 'json',
//                         success: function (obj) {
//                             console.log("start loading...");
//                             loading[loading2[i]] = obj;
//                             //loading3[i] = obj;
//                             console.log(obj);
//                             console.log(i, loading[loading2[i]]);
//                             console.log(loading2[i] + " is loading from " + pathjson[i] + " ...");
//                             console.log(loading2[i] + " loaded successfully\n" + "##########");
//                         },
//                         error: function() {
//                         console.log(loading2[i] + " has error occur\n" + "!!!!!!!!!!");
//                         }
//                     });
//                 };
//             }
//         }
//         process();
//         //hint: getJSON has a problem in for-loop which, 
//         //please use "let" instead of "var".
//         //Due to "let" make var. locally exist in current block and will recreate in each iteration,
//         //and "var" make var. exist globally exist and will corrupt each iteration,
//         //this made var. directly become the value of end of loop
//         //getJSON will only get the such latest value of var.,
//         //and there is an unwanted output.
//         var selectcontent = [];
//         console.log("width: ", window.innerWidth);
//         console.log("height: ", window.innerHeight);
//         //set the data of mapeal
//         var mapealdata = {
//             map: {
//                 name: "twmapdot1_mapeal", 
//                 defaultArea: {
//                     attrs: {
//                         fill: "#7c7c7c",
//                         stroke: "#fff", "stroke-width": 1.0,
//                         cursor: "pointer"
//                     }, attrsHover: {
//                         fill: "#B7B7B7",
//                         stroke: "#fff", "stroke-width": 2.0
//                     }, eventHandlers: {
//                         click: function (e, id) {
//                             //when you click, do following setting
//                             $(".twmap").trigger('zoom', {
//                                 area: id,
//                                 areaMargin: 50
//                             });
//                         }
//                     }
//                 }, defaultPlot: {
//                     attrs: {
//                         fill: "#ffa000",
//                         stroke: "#fff", "stroke-width": 1.0,
//                         cursor: "pointer"
//                     }, attrsHover: {
//                         fill: "#ffa000",
//                         stroke: "#fff", "stroke-width": 2.0
//                     }, text: {
//                         attrs: {
//                             fill: "#b4b4b4",
//                             "font-weight": "normal",
//                             "font-size": "20px"
//                         }, attrsHover: {
//                             fill: "#fff",
//                             "font-weight": "bold"
//                         }
//                     }, eventHandlers:{
//                         click: function (e) {
//                             caseintro.style.display = "block";
//                             // caseintro.attr("display","block");
//                             //console.log(e);
//                             //console.log(id);
//                             console.log(e.currentTarget.dataset["id"]); //外傘頂洲
//                             $(function() {$("#caseintro-content").load([e.currentTarget.dataset["id"]]+".html");})
//                         }
//                     }
//                 }, zoom: {
//                     enabled: true,
//                     step: 0.25,
//                     maxLevel: 20
//                 }
//             },
//             legend: {},
//             areas: {},
//             plots: {
//                 "外傘頂洲": {
//                     "id": "outunbrralla",
//                     "latitude": 23.5, //緯度
//                     "longitude": 120, //經度
//                     "text": {
//                         "position": "left",
//                         "content": "外傘頂洲, 23.5, 120"
//                     },
//                     "tooltip":{
//                         "content": "<span style=\"font-weight:bold\">tooltip test</span><br>這裡是23.5, 120</br>"
//                     }
//                 }
//             }
//         }
//         setTimeout(() => $(function () {
//             //loading check
//             console.log("Ground control to mapeal");
//             //Loading the json data into specific var. on mapeal 
//             mapealdata.areas = loading["areas"];
//             mapealdata.legend = loading["legends"];
//             mapealdata.plots = loading["plots"];
//             //data loading check
//             console.log("This is mapeal to ground control");
//             console.log("areas:", mapealdata.areas);
//             console.log("legend:", mapealdata.legend);
//             console.log("plots:", mapealdata.plots);
//             // Mapael initialisation
//             $(".twmap").mapael(mapealdata);
//         }, 200));
//     });