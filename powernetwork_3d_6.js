function getValue(){
    // method 1
    var radio = document.getElementsByName("time");
    for (i=0; i<radio.length; i++) {
        if (radio[i].checked) {
            //alert(radio[i].value)
            update(radio[i].value)
        }
    }
}


let svg1 = d3.select("#powernetwork").append("svg")
    .attr("id","threednetwork")
    .attr("width",function(){
        //console.log("are we here")
        return 1960
    })
    .attr("height",1000);

var buscolor = [];
var waternodecolor = [];
var busnamevalue = [];
var waternamevalue = [];
var flowend = [];
var flowdirection = [];
var arrowlist = [];
var substationcolor = [];
var subnamevalue = [];

var calpha;
var cbeta;

var powernodesdata = [
    {x:-1,y:-1.5,z:-1},
    {x:-1,y:(-1.5+0.24*1),z:-1},
    {x:-1,y:(-1.5+0.24*3),z:-1},
    {x:-1,y:(-1.5+0.24*4),z:-1},
    {x:-1,y:(-1.5+0.24*5),z:-1},
    {x:-1,y:(-1.5+0.24*6),z:-1},
    {x:-1,y:(-1.5+0.24*7),z:-1},
    {x:-1,y:(-1.5+0.24*8),z:-1},
    {x:-1,y:(-1.5+0.24*9),z:-1},
    {x:-1,y:(-1.5+0.24*10),z:-1},
    {x:-1,y:(-1.5+0.24*11),z:-1},
    {x:-1,y:(-1.5+0.24*12),z:-1},
    {x:-1,y:(-1.5+0.24*13),z:-1},
    {x:-1,y:(-1.5+0.24*14),z:-1},
    {x:-1,y:(-1.5+0.24*15),z:-1},
    {x:-1,y:(-1.5+0.24*16),z:-1},
    {x:-1,y:(-1.5+0.24*17),z:-1},
    {x:-1,y:(-1.5+0.24*18),z:-1},
    {x:-2.5,y:(-1.5+0.24*7.5),z:-1},
    {x:-2.5,y:(-1.5+0.24*8.5),z:-1},
    {x:-2.5,y:(-1.5+0.24*9.5),z:-1},
    {x:-2.5,y:(-1.5+0.24*10.5),z:-1},
    {x:2.5,y:(-1.5+0.24*5),z:-1},
    {x:2.5,y:(-1.5+0.24*6),z:-1},
    {x:2.5,y:(-1.5+0.24*7),z:-1},
    {x:2,y:(-1.5+0.24*11),z:-1},
    {x:2,y:(-1.5+0.24*12),z:-1},
    {x:2,y:(-1.5+0.24*13),z:-1},
    {x:2,y:(-1.5+0.24*14),z:-1},
    {x:2,y:(-1.5+0.24*15),z:-1},
    {x:2,y:(-1.5+0.24*16),z:-1},
    {x:2,y:(-1.5+0.24*17),z:-1},
    {x:2,y:(-1.5+0.24*18),z:-1}

];

var powerlinedata = [
    [{x:-1,y:-1.9,z:-1},{x:-1,y:(-1.5+0.24*18),z:-1}],
    [{x:-1,y:(-1.5+0.24*1),z:-1},{x:-2.5,y:(-1.5+0.24*7.5),z:-1}],
    [{x:-2.5,y:(-1.5+0.24*7.5),z:-1},{x:-2.5,y:(-1.5+0.24*10.5),z:-1}],
    [{x:-1,y:(-1.5+0.24*3),z:-1},{x:2.5,y:(-1.5+0.24*5),z:-1}],
    [{x:2.5,y:(-1.5+0.24*5),z:-1},{x:2.5,y:(-1.5+0.24*7),z:-1}],
    [{x:-1,y:(-1.5+0.24*6),z:-1},{x:2,y:(-1.5+0.24*11),z:-1}],
    [{x:2,y:(-1.5+0.24*11),z:-1},{x:2,y:(-1.5+0.24*18),z:-1}],
    [{x:-2.5,y:(-1.5+0.24*10.5),z:-1},{x:-1.8,y:(-1.5+0.24*10.5),z:-1}],
    [{x:-1,y:(-1.5+0.24*18),z:-1},{x:-0.2,y:(-1.5+0.24*18),z:-1}],
    [{x:-0.2,y:(-1.5+0.24*18),z:-1},{x:-0.2,y:(-1.5+0.24*16.5),z:-1}],
    [{x:2,y:(-1.5+0.24*18),z:-1},{x:2.75,y:(-1.5+0.24*18),z:-1}],
    [{x:2.75,y:(-1.5+0.24*18),z:-1},{x:2.75,y:(-1.5+0.24*16.5),z:-1}]



];

var waternodesdata = [
    {x:2.5,y:(-1.5+0.24*18),z:-4},
    {x:1.5,y:(-1.5+0.24*18),z:-4},
    {x:0.5,y:(-1.5+0.24*18),z:-4},
    {x:-0.5,y:(-1.5+0.24*18),z:-4},
    {x:-2.5,y:(-1.5+0.24*18),z:-4},
    {x:-2.5,y:(-1.5+0.24*15),z:-4},
    {x:-2.5,y:(-1.5+0.24*12),z:-4},
    {x:-2.5,y:(-1.5+0.24*9),z:-4},
    {x:-2.5,y:(-1.5+0.24*6),z:-4},
    {x:-2.5,y:(-1.5+0.24*(3)),z:-4},
    {x:-2.5,y:(-1.5+0.24*0),z:-4},
    {x:-0.5,y:(-1.5+0.24*15),z:-4},
    {x:0.5,y:(-1.5+0.24*15),z:-4},
    {x:1.5,y:(-1.5+0.24*15),z:-4},
    {x:2.5,y:(-1.5+0.24*15),z:-4},

];

var waterloadposition = [
    //{x:2.5,y:(-1.5+0.24*18),z:-4},
    //{x:1.5,y:(-1.5+0.24*18),z:-4},
    {x:0.5,y:(-1.5+0.24*18),z:-4},
    //{x:-0.5,y:(-1.5+0.24*18),z:-4},
    //{x:-2.5,y:(-1.5+0.24*18),z:-4},
    //{x:-2.5,y:(-1.5+0.24*15),z:-4},
    //{x:-2.5,y:(-1.5+0.24*12),z:-4},
    //{x:-2.5,y:(-1.5+0.24*9),z:-4},
    //{x:-2.5,y:(-1.5+0.24*6),z:-4},
    //{x:-2.5,y:(-1.5+0.24*(3)),z:-4},
    {x:-2.5,y:(-1.5+0.24*0),z:-4},
    //{x:-0.5,y:(-1.5+0.24*15),z:-4},
    //{x:0.5,y:(-1.5+0.24*15),z:-4},
    //{x:1.5,y:(-1.5+0.24*15),z:-4},
    {x:2.5,y:(-1.5+0.24*15),z:-4},

];




var waterlinedata = [
    [{x:2.5,y:(-1.5+0.24*18),z:-4},{x:-2.5,y:(-1.5+0.24*18),z:-4}],
    [{x:-2.5,y:(-1.5+0.24*18),z:-4}, {x:-2.5,y:(-1.5+0.24*0),z:-4}],
    [{x:-2.5,y:(-1.5+0.24*15),z:-4},{x:2.5,y:(-1.5+0.24*15),z:-4}]
];

var pumpdata = [
    {x:-1,y:(-1.5+0.24*18),z:-4},
    {x:-2.5,y:(-1.5+0.24*10.5),z:-4},
    {x:2,y:(-1.5+0.24*18),z:-4}
];

var pumptext = [
    'Pump1','Pump2','Pump3'
];
var twolayerdata = [
    //[{x:0,y:-1,z: 0},{x:-1,y:1,z: 0},{x:1,y:1,z: 0}],
    [{x:-3,y:-2.2,z:-1},{x:-3,y:3,z:-1},{x:3,y:3,z:-1},{x:3,y:-2.2,z:-1}],
    //[{x:0,y:-1,z:-2},{x:-1,y:1,z:-2},{x:1,y:1,z:-2}],
    //[{x:0,y:-1,z:-3},{x:-1,y:1,z:-3},{x:1,y:1,z:-3}],
    [{x:-3,y:-2.2,z:-4},{x:-3,y:3,z:-4},{x:3,y:3,z:-4},{x:3,y:-2.2,z:-4}]
];

var DSRposition = [
    {x:-1.75,y:(-1.5+0.24*10.5),z:-1},
    {x:2.75,y:(-1.5+0.24*16.5),z:-1},
    {x:-0.2,y:(-1.5+0.24*16.5),z:-1}
];
var DSRtext = [
    'DSR1','DSR2','DSR3'
];
var substationtext = ['Substation'];

var tanktext = [
    'Water Tank','Water Tank'
];

var reservoirtext = [
    'Water Reservoir'
];

var tankposition = [
    {x:-2.5-0.2,y:(-1.5+0.24*(3)+0.2),z:-4},
    {x:0.5-0.2,y:(-1.5+0.24*15+0.2),z:-4}
    ];

var reservoirposition = [

    {x:2.5+0.2,y:(-1.5+0.24*18+0.2),z:-4}

];







var data2 = [
    [{x:0.5,y:-0.5,z:-1},{x:-0.5,y:-0.4,z:-1}],//left down
    //[{x:0,y:-1,z:-2},{x:-1,y:1,z:-2},{x:1,y:1,z:-2}],
    //[{x:0,y:-1,z:-3},{x:-1,y:1,z:-3},{x:1,y:1,z:-3}],
    [{x:-0.9,y:0.5,z:-4},{x:-0.5,y:-0.2,z:-4}]//right up
];
var data3 = [
    [{x:-1,y:(-1.5+0.24*18),z:-1},{x:-1,y:(-1.5+0.24*18),z:-4}],
    //[{x:0,y:-1,z:-2},{x:-1,y:1,z:-2},{x:1,y:1,z:-2}],
    //[{x:0,y:-1,z:-3},{x:-1,y:1,z:-3},{x:1,y:1,z:-3}],
    [{x:-2.5,y:(-1.5+0.24*10.5),z:-1},{x:-2.5,y:(-1.5+0.24*10.5),z:-4}],
    [{x:2,y:(-1.5+0.24*18),z:-1},{x:2,y:(-1.5+0.24*18),z:-4}]

];
var data_rec = [
    [{x:-0.46,y:-0.48,z:-1},{x:-0.54,y:-0.48,z:-1},{x:-0.54,y:-0.52,z:-1},{x:-0.46,y:-0.52,z:-1}],
    [{x:-0.46,y:-0.48,z:-4},{x:-0.54,y:-0.48,z:-4},{x:-0.54,y:-0.52,z:-4},{x:-0.46,y:-0.52,z:-4}]
];
var data_arrow = [

    [{x:0,y:0,z:-1},{x:0.1,y:-0.1,z:-1},{x:0,y:0.1,z:-1},{x:-0.1,y:-0.1,z:-1}],
    [{x:0,y:0,z:-1},{x:0.1,y:-0.1,z:-1},{x:0,y:0.1,z:-1},{x:-0.1,y:-0.1,z:-1}]
];

var data_point1 = [
    {x:-0.25,y:-0.25,z:-1},{x:0.25,y:0.25,z:-1},{x:0.25,y:-0.8,z:-4},{x:0.5,y:-0.25,z:-4}
];



var substationpoint = [
    {x:-1,y:-2,z:-1}
];

var substationtext = ['Substation'];

var pumpchartposition = [[1100,650],[1300,650],[1500,650]];

var reservoirchartposition = [[1450,500]];

var solarchartposition = [[1100,300],[1300,300],[1500,300]];




function point2recdata (data,a,b){
    let result = [];
    for (i = 0;i<data.length;i++){
        temp = [];
        temp.push({x:(data[i].x - a),y:(data[i].y -b),z:(data[i].z)});
        temp.push({x:(data[i].x + a),y:(data[i].y -b),z:(data[i].z)});
        temp.push({x:(data[i].x + a),y:(data[i].y +b),z:(data[i].z)});
        temp.push({x:(data[i].x - a),y:(data[i].y +b),z:(data[i].z)});
        result.push(temp);
    }

    return result;
}


function point2circle(data,r,dtype){
    let result = [];
    var temp = [];
    if (dtype =="waternode"){
        for (i=0;i<data.length;i++){
            temp = [];
            if (i ==0){
                temp.push({x:(data[i].x - 3*r),y:(data[i].y -r),z:(data[i].z)});
                temp.push({x:(data[i].x + 3*r),y:(data[i].y -r),z:(data[i].z)});
                temp.push({x:(data[i].x + 2*r),y:(data[i].y +r),z:(data[i].z)});
                temp.push({x:(data[i].x - 2*r),y:(data[i].y +r),z:(data[i].z)});

            }else if((i==9)||(i==12)){
                temp.push({x:(data[i].x - r),y:(data[i].y -1.5*r),z:(data[i].z)});
                temp.push({x:(data[i].x + r),y:(data[i].y -1.5*r),z:(data[i].z)});
                temp.push({x:(data[i].x + r),y:(data[i].y +1.5*r),z:(data[i].z)});
                temp.push({x:(data[i].x - r),y:(data[i].y +1.5*r),z:(data[i].z)});

            }
            else{
                for (j = 0;j<2*3.1415926;j=j+3.1415926/10){
                    var cur_x = data[i].x + r*Math.cos(j);
                    var cur_y = data[i].y + r*Math.sin(j);
                    temp.push({x:cur_x,y:cur_y,z:data[i].z});

                }

            }

            result.push(temp)

        }

    }
    else{
        for (i=0;i<data.length;i++){
            temp = [];


            for (j = 0;j<2*3.1415926;j=j+3.1415926/10){
                var cur_x = data[i].x + r*Math.cos(j);
                var cur_y = data[i].y + r*Math.sin(j);
                temp.push({x:cur_x,y:cur_y,z:data[i].z});

            }



            result.push(temp)

        }
    }

    return result;
}

function point2pump(data,r){
    let result = [];
    var temp = [];
    for (i=0;i<data.length;i++){
        temp = [];
        for (j = 0;j<2*3.1415926;j=j+3.1415926/10){
            var cur_x = data[i].x + 1.5*r*Math.cos(j);
            var cur_y = data[i].y + 1.5*r*Math.sin(j);
            temp.push({x:cur_x,y:cur_y,z:data[i].z});

        }
        result.push(temp);
        temp = [];
        for (j = 0;j<2*3.1415926;j=j+3.1415926/10){
            var cur_x = data[i].x + r*Math.cos(j);
            var cur_y = data[i].y + r*Math.sin(j);
            temp.push({x:cur_x,y:cur_y,z:data[i].z});

        }
        result.push(temp);
        temp = [];
        for (j = 0;j<2*3.1415926;j=j+3.1415926/10){
            var cur_x = data[i].x + 0.5*r*Math.cos(j);
            var cur_y = data[i].y + 0.5*r*Math.sin(j);
            temp.push({x:cur_x,y:cur_y,z:data[i].z});

        }
        result.push(temp);

    }
    return result;

}





//point2arrow is a function to generate a arrow data for a line(two points).
//for the two points, the arrow points from the first one to the second one
















function point2loadarrow(data,r){
    let result = [];
    var temp = [];

    for (i=0;i<data.length;i++){
        temp = [];
        var centerx = data[i].x;
        var centery = data[i].y;
        var centerz = data[i].z-0.15;

        var centertz = data[i].z-0.3;

        temp.push({x:centerx-0.02, y:centery, z:centerz+0.15});
        temp.push({x:centerx+0.02, y:centery, z:centerz+0.15});
        temp.push({x:centerx+0.02, y:centery, z:centerz-0.15});
        temp.push({x:centerx+0.04, y:centery, z:centerz-0.15});

        temp.push({x:centerx, y:centery, z:centerz-0.2});
        temp.push({x:centerx-0.04, y:centery, z:centerz-0.15});
        temp.push({x:centerx-0.02, y:centery, z:centerz-0.15});



        result.push(temp);

    }
    return result;
}






















function points2arrow(data,r){
    let result = [];
    var temp = [];
    for (i=0;i<data.length;i++){
        var mx = (data[i][0].x + data[i][1].x)/2;
        var my = (data[i][0].y + data[i][1].y)/2;
        var mz = data[i][0].z;
        if (data[i][1].y>=data[i][0].y) {
            temp = [];
            if (data[i][0].x == data[i][1].x) {//point down
                temp.push({x: (mx + 0.866 * r), y: (my), z: mz});
                temp.push({x: mx, y: (1.5 * r + my), z: mz});
                temp.push({x: (mx - 0.866 * r), y: (my), z: mz});
            } else if (data[i][0].y == data[i][1].y) {
                //point right
                if (data[i][1].x > data[i][0].x){
                    temp.push({x: mx, y: (my + 0.866 * r), z: mz});
                    temp.push({x: (1.5 * r + mx), y: my, z: mz});
                    temp.push({x: mx, y: (my - 0.866 * r), z: mz});
                }else{
                    //point left
                    temp.push({x: mx, y: (my + 0.866 * r), z: mz});
                    temp.push({x: (-1.5 * r + mx), y: my, z: mz});
                    temp.push({x: mx, y: (my - 0.866 * r), z: mz});

                }

            } else {
                var x1 = data[i][0].x;
                var y1 = data[i][0].y;
                var x2 = data[i][1].x;
                var y2 = data[i][1].y;
                var a = (y1 - y2) / (x1 - x2);
                var b = (x1 * y2 - y1 * x2) / (x1 - x2);
                var c = (y1 + y2) / 2 + ((x1 + x2) / 2) * (x1 - x2) / (y1 - y2);
                var aa = -1/a
                var dx = Math.sqrt(r*r/(1+aa*aa));
                var dy = Math.sqrt(aa*aa*r*r/(1+aa*aa));
                //console.log(a);

                if ((1 / a) < 0) {
                    //console.log(a)
                    temp.push({x: (mx + dx), y: (my + dy), z: mz});
                    temp.push({x: (mx - dx), y: (my - dy), z: mz});
                    temp.push({
                        x: (mx - Math.sqrt(4*r*r/(1+a*a))),
                        y: (my + Math.sqrt(4*r*r*a*a/(1+a*a))),
                        z: mz
                    });
                    // point right down
                } else {
                    temp.push({x: (mx - dx), y: (my + dy), z: mz});
                    temp.push({x: (mx + dx), y: (my - dy), z: mz});
                    temp.push({
                        x: (mx + Math.sqrt(4*r*r/(1+a*a))),
                        y: (my + Math.sqrt(4*r*r*a*a/((1+(a*a))))),
                        z: mz
                    });
                    // point left down
                }
            }
        }else{
            temp = [];
            if (data[i][0].x == data[i][1].x) {//point up
                temp.push({x: (mx + 0.866 * r), y: (my), z: mz});
                temp.push({x: mx, y: (-1.5 * r + my), z: mz});
                temp.push({x: (mx - 0.866 * r), y: (my), z: mz});

            } else {
                var x1 = data[i][0].x;
                var y1 = data[i][0].y;
                var x2 = data[i][1].x;
                var y2 = data[i][1].y;
                var a = (y1 - y2) / (x1 - x2);
                var b = (x1 * y2 - y1 * x2) / (x1 - x2);
                var c = (y1 + y2) / 2 + ((x1 + x2) / 2) * (x1 - x2) / (y1 - y2);
                var aa = -1/a
                var dx = Math.sqrt(r*r/(1+aa*aa));
                var dy = Math.sqrt(aa*aa*r*r/(1+aa*aa));
                //console.log(a);

                if ((1 / a) < 0) {
                    //console.log(a)
                    temp.push({x: (mx + dx), y: (my + dy), z: mz});
                    temp.push({x: (mx - dx), y: (my - dy), z: mz});
                    temp.push({
                        x: (mx + Math.sqrt(4*r*r/(1+a*a))),
                        y: (my - Math.sqrt(4*r*r*a*a/(1+a*a))),
                        z: mz
                    });
                    // point right up
                } else {
                    temp.push({x: (mx - dx), y: (my + dy), z: mz});
                    temp.push({x: (mx + dx), y: (my - dy), z: mz});
                    temp.push({
                        x: (mx - Math.sqrt(4*r*r/(1+a*a))),
                        y: (my - Math.sqrt(4*r*r*a*a/((1+(a*a))))),
                        z: mz
                    });
                    // point left up
                }
            }


        }
        result.push(temp);

    }
    return result;
}

var powernodesrect = point2recdata(powernodesdata,0.2,0.02);
var testarrowdata = points2arrow(data2,0.05);
var waternodescircle = point2circle(waternodesdata,0.05,"waternode");
var pump=point2circle(pumpdata,0.22,"pump");
var testtextdata = data_point1;
var DSRcircle = point2circle(DSRposition,0.18,"DSR");
var substationdata = point2recdata(substationpoint,0.5,0.1);
var waterloadarrow = point2loadarrow(waterloadposition,0.1)

//console.log(testarrowdata);





var origin  = [480, 250], alpha = 0, beta = 0;
var svg     = d3.select("#threednetwork").call(d3.drag().on('drag', dragged).on('start', dragStart).on('end', dragEnd));
var color   = [d3.color('crimson'), d3.color('teal'), d3.color('limegreen'), d3.color('purple'), d3.color('tomato')];
var mx, my, mouseX, mouseY;

var _3d = d3._3d()
    .scale(100)
    .x(function(d){ return d.x; })
    .y(function(d){ return d.y; })
    .z(function(d){ return d.z; })
    .origin(origin)
    .rotateCenter([0,0,-2])
    .shape('POLYGON');

var _3dtext = d3._3d()
    .scale(100)
    .x(function(d){ return d.x; })
    .y(function(d){ return d.y; })
    .z(function(d){ return d.z; })
    .origin(origin)
    .rotateCenter([0,0,-2])
//.shape('POLYGON');

var data3D_twolayer = _3d(twolayerdata);
var data3D_2 = _3d(data2);
var data3D_3 = _3d(data3);
var data3D_rec = _3d(data_rec);
var data3D_arrow = _3d(data_arrow);
var data3D_powernodesrect = _3d(powernodesrect);
var data3D_testarrow = _3d(testarrowdata);
var data3D_waternodescircle = _3d(waternodescircle);
//var data3D_testtext = _3dtext(testtextdata);
var data3D_waterline = _3d(waterlinedata);
var data3D_powerline = _3d(powerlinedata);
var data3D_pump = _3d(pump);
var data3D_pumpposition = _3dtext(pumpdata);
var data3D_DSR= _3d(DSRcircle);
var data3D_DSRposition= _3dtext(DSRposition);
//var data3D_waterloadposition = _3d(waterloadposition);
var data3D_waterloadarrow=_3d(waterloadarrow);
//console.log(data3D_testrect);

/*
function dragStart(){
    mx = d3.event.x;
    my = d3.event.y;
}

function dragged(){
    mouseX = mouseX || 0;
    mouseY = mouseY || 0;
    beta   = (d3.event.x - mx + mouseX) * Math.PI / 360;
    alpha  = (d3.event.y - my + mouseY) * Math.PI / 720 * (-1);
    processData_layer(_3d.rotateY(beta).rotateX(alpha)(twolayerdata),'layerid');
    processData_waterline(_3d.rotateY(beta).rotateX(alpha)(waterlinedata),'lineid');
    processData_powerline(_3d.rotateY(beta).rotateX(alpha)(powerlinedata),'powerlineid');
    processData(_3d.rotateY(beta).rotateX(alpha)(data3),'betweenlineid','orange');
    //processData_rec(_3d.rotateY(beta).rotateX(alpha)(data_rec),'rec');
    //processData_rec(_3d.rotateY(beta).rotateX(alpha)(data_arrow),'arrow');
    processData_rec(_3d.rotateY(beta).rotateX(alpha)(powernodesrect),'testrect');
    processData_rec(_3d.rotateY(beta).rotateX(alpha)(testarrowdata),'testarrow');
    processData_rec(_3d.rotateY(beta).rotateX(alpha)(waternodescircle),'testcircle');

    processData(_3d.rotateY(beta).rotateX(alpha)(pump),'pumpcircle','green');
    processData_text(_3dtext.rotateY(beta).rotateX(alpha)(pumpdata),'testtext',pumptext);
    processData_DSR(_3d.rotateY(beta).rotateX(alpha)(DSRcircle),'dsrcircle');
    processData_text(_3dtext.rotateY(beta).rotateX(alpha)(DSRposition),'dsrtext',DSRtext);


    //processData_line(_3d.rotateY(beta).rotateX(alpha)(data2));
}

function dragEnd(){
    mouseX = d3.event.x - mx + mouseX;
    mouseY = d3.event.y - my + mouseY;
}



*/


function dragStart(){
    mx = d3.event.x;
    my = d3.event.y;
}

function dragged(){
    mouseX = mouseX || 0;
    mouseY = mouseY || 0;
    beta   = (d3.event.x - mx + mouseX) * Math.PI / 360;
    alpha  = (d3.event.y - my + mouseY) * Math.PI / 720 * (-1);

    calpha = alpha;
    cbeta = beta;
    processData_layer(_3d.rotateY(beta).rotateX(alpha)(twolayerdata),'layerid');
    processData_waterline(_3d.rotateY(beta).rotateX(alpha)(waterlinedata),'lineid');
    processData_powerline(_3d.rotateY(beta).rotateX(alpha)(powerlinedata),'powerlineid');
    processData(_3d.rotateY(beta).rotateX(alpha)(data3),'betweenlineid','orange');
    //processData_rec(_3d.rotateY(beta).rotateX(alpha)(data_rec),'rec');
    //processData_rec(_3d.rotateY(beta).rotateX(alpha)(data_arrow),'arrow');
    //processData_rec(_3d.rotateY(beta).rotateX(alpha)(powernodesrect),'testrect');
    processData_rec(_3d.rotateY(beta).rotateX(alpha)(arrowlist),'testarrow');
    //processData_rec(_3d.rotateY(beta).rotateX(alpha)(waternodescircle),'testcircle');
    processData_nodes(_3d.rotateY(beta).rotateX(alpha)(powernodesrect),'testrect',buscolor,busnamevalue);
    processData_nodes(_3d.rotateY(beta).rotateX(alpha)(waternodescircle),'testcircle',waternodecolor,waternamevalue);



    processData(_3d.rotateY(beta).rotateX(alpha)(pump),'pumpcircle','green');
    processData_text(_3dtext.rotateY(beta).rotateX(alpha)(pumpdata),'testtext',pumptext);
    processData_DSR(_3d.rotateY(beta).rotateX(alpha)(DSRcircle),'dsrcircle');
    processData_text(_3dtext.rotateY(beta).rotateX(alpha)(DSRposition),'dsrtext',DSRtext);



    //processData(_3d.rotateY(beta).rotateX(alpha)(substationdata),'substation','red');
    processData_substation(_3d.rotateY(beta).rotateX(alpha)(substationdata),'substation',["red"],["Substation"]);
    processData_text(_3dtext.rotateY(beta).rotateX(alpha)(substationpoint),'substationtext',substationtext);
    //processData_text(_3dtext.rotateY(beta).rotateX(alpha)(substationpoint),'substationtext',substationtext);
    processData_text(_3dtext.rotateY(beta).rotateX(alpha)(tankposition),'tanktext',tanktext);
    processData_text(_3dtext.rotateY(beta).rotateX(alpha)(reservoirposition),'reservoirtext',reservoirtext);

    processData_load(_3d.rotateY(beta).rotateX(alpha)(waterloadarrow),'waterloadarrow','cyan');

    //processData_line(_3d.rotateY(beta).rotateX(alpha)(data2));
}

function dragEnd(){
    mouseX = d3.event.x - mx + mouseX;
    mouseY = d3.event.y - my + mouseY;
}


function processData(data,cur_id,color){

    svg.select('#'+cur_id).remove();

    var triangles = svg.append("g").attr("id",cur_id).selectAll('path').data(data);

    triangles
        .enter()
        .append('path')
        .merge(triangles)
        .attr('stroke', color)
        .attr('fill', 'white')
        .attr('fill-opacity', 0.8)
        .sort(_3d.sort)
        .attr('d', _3d.draw);

    triangles.exit().remove();

}

function processData_load(data,cur_id,color){

    svg.select('#'+cur_id).remove();

    var triangles = svg.append("g").attr("id",cur_id).selectAll('path').data(data);

    triangles
        .enter()
        .append('path')
        .merge(triangles)
        .attr('stroke', 'red')
        .attr('fill', color)
        .attr('fill-opacity', 0.8)
        .sort(_3d.sort)
        .attr('d', _3d.draw);

    triangles.exit().remove();

}


function processData_layer(data,cur_id){

    svg.select('#'+cur_id).remove();

    var triangles = svg.append("g").attr("id",cur_id).selectAll('path').data(data);

    triangles
        .enter()
        .append('path')
        .merge(triangles)
        .attr('fill', function(d, i){
            if (i==0){
                return 'red'
            }else {
                return 'cyan'
            }
        })
        .attr('fill-opacity', 0.1)
        .sort(_3d.sort)
        .attr('d', _3d.draw);

    triangles.exit().remove();

}


function processData_waterline(data,cur_id){

    svg.select('#'+cur_id).remove();

    var triangles = svg.append("g").attr("id",cur_id).selectAll('path').data(data);

    triangles
        .enter()
        .append('path')
        .merge(triangles)
        .attr('stroke', function(d, i){
            return 'blue';
        })
        .attr('fill', function(d, i){
            return 'blue';
        })
        .attr('fill-opacity', 0.1)
        .style("stroke-width",3)
        .sort(_3d.sort)
        .attr('d', _3d.draw);

    triangles.exit().remove();

}

function processData_powerline(data,cur_id){

    svg.select('#'+cur_id).remove();

    var triangles = svg.append("g").attr("id",cur_id).selectAll('path').data(data);

    triangles
        .enter()
        .append('path')
        .merge(triangles)
        .attr('stroke', function(d, i){
            return 'red';
        })
        .attr('fill', function(d, i){
            return 'red';
        })
        .attr('fill-opacity', 0.1)
        .style("stroke-width",1.5)
        .sort(_3d.sort)
        .attr('d', _3d.draw);

    triangles.exit().remove();

}


function processData_rec(data,cur_id){

    svg.select('#'+cur_id).remove();

    var recs = svg.append("g").attr("id",cur_id).selectAll('path').data(data);
    var tooltip = d3.select("body").append("div").attr("class", "toolTip");

    recs
        .enter()
        .append('path')
        .merge(recs)
        .attr('stroke', 'red')
        .attr('fill', 'red')
        .attr('fill-opacity', 0.9)
        .sort(_3d.sort)
        .attr('d', _3d.draw);

    recs.exit().remove();

}



function processData_nodes(data,cur_id,color,textvalue){

    svg.select('#'+cur_id).remove();

    var nodes = svg.append("g").attr("id",cur_id).selectAll('path').data(data);
    var tooltip = d3.select("body").append("div").attr("class", "toolTip");

    nodes
        .enter()
        .append('path')
        .merge(nodes)
        .attr('stroke', function(d,i){return color[i]})
        .attr('fill', function(d,i){return color[i]})
        .attr('fill-opacity', 0.9)
        //.sort(_3d.sort)
        .attr('d', _3d.draw)
        .on("mousemove", function(d,i){
            console.log(i)
            var j = i;
            tooltip
                .style("left", d3.event.pageX - 50 + "px")
                .style("top", d3.event.pageY - 70 + "px")
                .style("display", "inline-block")
                .html(textvalue[i])
        })
        .on("mouseout", function(d){ tooltip.style("display", "none");})

    nodes.exit().remove();

}

function processData_substation(data,cur_id,color,textvalue){

    svg.select('#'+cur_id).remove();

    var nodes = svg.append("g").attr("id",cur_id).selectAll('path').data(data);
    var tooltip = d3.select("body").append("div").attr("class", "toolTip");

    nodes
        .enter()
        .append('path')
        .merge(nodes)
        .attr('stroke', 'red')
        .attr('fill', 'white')
        .attr('fill-opacity', 0.9)
        //.sort(_3d.sort)
        .attr('d', _3d.draw)
        .on("mousemove", function(d,i){
            console.log(i)
            var j = i;
            tooltip
                .style("left", d3.event.pageX - 50 + "px")
                .style("top", d3.event.pageY - 70 + "px")
                .style("display", "inline-block")
                .html(textvalue[i])
        })
        .on("mouseout", function(d){ tooltip.style("display", "none");})

    nodes.exit().remove();

}





function processData_DSR(data,cur_id){

    svg.select('#'+cur_id).remove();

    var circles = svg.append("g").attr("id",cur_id).selectAll('path').data(data);

    circles
        .enter()
        .append('path')
        .merge(circles)
        .attr('stroke', 'red')
        .attr('fill', 'white')
        .attr('fill-opacity', 0.9)
        .sort(_3d.sort)
        .attr('d', _3d.draw);

    circles.exit().remove();

}

function processData_text(data,cur_id,textdata){

    svg.select('#'+cur_id).remove();

    var recs = svg.append("g").attr("id",cur_id).selectAll('text').data(data);

    recs
        .enter()
        .append('text')
        .merge(recs)
        .attr('x', function(d){ return origin[0] + 100 * d.centroid.x })
        .attr('y', function(d){ return origin[1] + 100 * (d.centroid.y+0.03) })
        .classed('_3d',true)
        .text(function(d,i){return textdata[i]})
        .style("font-size", "13px")
        .style("font-weight","bold")
        .style("text-anchor","middle")

    recs.exit().remove();

}




function drawlinechart(direction,inputx,inputy,inputdata,inputw, inputh,inputname,inputtime){
    let x_cor = inputx-inputw
    let y_cor = inputy-inputh-5
    if (direction == "right"){
        x_cor = inputx+60
    }

    let svg = d3.select("#powernetwork").selectAll("svg")
    let height = parseInt(inputh)
    let width = parseInt(inputw)
    var y_axis = d3.scaleLinear().range([height, 0]);
    var y = d3.scaleLinear().range([0,height]);
    var x = d3.scaleLinear().range([0,width])
    x.domain([0,24])
    y.domain([0, 35]);
    y_axis.domain([0, 35]);
    //x.domain()
    var LineFunction = d3.line()
        .x(function(d) { return x(d.time); })
        .y(function(d) { return y(d.kw); });

    var energyplot = svg.append("g").append("path")
        .attr("transform", "translate("+x_cor+"," + (inputy-5) + ")"+" scale(1,-1)")
        .data([inputdata])
        .attr("d", LineFunction)
        .style("stroke","lime")
        .style("stroke-width",1)
        .style("fill","none");

    svg.append("g")
        .attr("id",inputname)
        .append("circle")
        .attr("transform", "translate("+x_cor+"," + (inputy-5) + ")"+" scale(1,-1)")
        .attr("cx",x(inputtime))
        .attr("cy",y(inputdata[inputtime-1].kw))
        .attr("r","4")
        .attr("fill","green")
    svg.append("g")
        .attr("id",inputname+"x")
        .attr("transform", "translate("+x_cor+"," + (inputy-5)+ ")")
        .call(d3.axisBottom(x));

    svg.append("g")
        .attr("id",inputname+"y")
        .attr("transform","translate("+x_cor+"," +y_cor +")","scale(1,-1)")
        .call(d3.axisLeft(y_axis));
}





function drawwaterlinechart(direction,inputx,inputy,inputdata,inputw, inputh,inputname,inputtime){
    let x_cor = inputx-inputw
    let y_cor = inputy-inputh-5
    if (direction == "right"){
        x_cor = inputx+20
        y_cor = inputy+60
    }

    let svg = d3.select("#powernetwork").selectAll("svg")
    let height = parseInt(inputh)
    let width = parseInt(inputw)
    var y_axis = d3.scaleLinear().range([height, 0]);
    var y = d3.scaleLinear().range([0,height]);
    var x = d3.scaleLinear().range([0,width])
    x.domain([0,24])
    y.domain([-0.3, 0.3]);
    y_axis.domain([-0.3, 0.3]);
    //x.domain()
    var LineFunction = d3.line()
        .x(function(d) { return x(d.time); })
        .y(function(d) { return y(d.km3); });

    var energyplot = svg.append("g").append("path")
        .attr("transform", "translate("+x_cor+"," + (inputy-5) + ")"+" scale(1,-1)")
        .data([inputdata])
        .attr("d", LineFunction)
        .style("stroke","blue")
        .style("stroke-width",1)
        .style("fill","none");

    svg.append("g")
        .attr("id",inputname)
        .append("circle")
        .attr("transform", "translate("+x_cor+"," + (inputy-5) + ")"+" scale(1,-1)")
        .attr("cx",x(inputtime))
        .attr("cy",y(inputdata[inputtime-1].km3))
        .attr("r","4")
        .attr("fill","blue")
        .attr("stroke","cyan")
    svg.append("g")
        .attr("id",inputname+"x")
        .attr("transform", "translate("+x_cor+"," + (inputy-5-height/2)+ ")")
        .call(d3.axisBottom(x).ticks(0));

    svg.append("g")
        .attr("id",inputname+"y")
        .attr("transform","translate("+x_cor+"," +(inputy-5-height) +")","scale(1,-1)")
        .call(d3.axisLeft(y_axis).ticks(6));
}



function drawrectchart(inputchoice,inputx,inputy,inputdata,inputw, inputh,inputname,inputtime){

    let hp = parseInt(inputtime.slice(1,));
    let x_cor = parseInt(inputx);
    let y_cor = parseInt(inputy);

    let color = "red";

    let ylabel = "w";


    if (inputchoice == "water"){
        color = "SteelBlue"
        ylabel = "m\u00B3"+"/hour"
    }

    let svg = d3.select("#powernetwork").selectAll("svg")
    let height = parseInt(inputh)
    let width = parseInt(inputw)
    var y_axis = d3.scaleLinear().range([height, 0]);
    var y = d3.scaleLinear().range([0,height]);
    var x = d3.scaleBand()
        .range([0, width])
        .padding(0.1);

    var y = d3.scaleLinear()
        .range([height, 0]);
    //console.log("I am here hahahaha")
    d3.csv(inputdata, function(error, data){
        if (error) throw error;
        data.forEach(function(d) {
            d.energy = +d.energy;
        });

        x.domain(data.map(function(d) { return d.time; }));
        y.domain([0, d3.max(data, function(d) { return d.energy; })]);





        svg.append("g")
            .attr("transform","translate("+x_cor+","+y_cor+")")
            .selectAll(".bar")
            .data(data)
            .enter()
            .append("rect")
            //.attr("class","bar")
            .attr("fill",function(d){
                if (d.time == hp){
                    return "orange"
                }
                else{
                    return color
                }
            })
            .attr("x",function(d){
                return x(d.time)

            })
            .attr("width",x.bandwidth())
            .attr("y",function(d){
                return y(d.energy)
            })
            .attr("height",function(d){
                return height-y(d.energy)
            })


        svg.append("g")
            .attr("transform","translate("+x_cor+","+(y_cor+height)+")")
            .call(d3.axisBottom(x).tickValues(d3.range(0, 26, 2)));

        svg.append("g")
            .attr("transform","translate("+x_cor+","+y_cor+")")
            .call(d3.axisLeft(y));

        svg.append("g")
            .append("text")
            .attr("x",x_cor)
            .attr("y",y_cor)
            .style("font-size","15px")
            .text(ylabel)

    })
}


function drawsolorlinechart(direction,inputx,inputy,inputdata,inputw, inputh,inputname,inputtime){
    let x_cor = inputx-inputw;
    let y_cor = inputy-inputh-5;


    let svg = d3.select("#powernetwork").selectAll("svg")
    let height = parseInt(inputh)
    let width = parseInt(inputw)
    var y_axis = d3.scaleLinear().range([height, 0]);
    var y = d3.scaleLinear().range([0,height]);
    var x = d3.scaleLinear().range([0,width])
    x.domain([0,24])
    y.domain([0, 600]);
    y_axis.domain([0, 600]);
    //x.domain()
    var LineFunction = d3.line()
        .x(function(d) { return x(d.time); })
        .y(function(d) { return y(d.kw); });

    var energyplot = svg.append("g").append("path")
        .attr("transform", "translate("+x_cor+"," + (inputy-5) + ")"+" scale(1,-1)")
        .data([inputdata])
        .attr("d", LineFunction)
        .style("stroke","red")
        .style("stroke-width",1)
        .style("fill","none");

    svg.append("g")
        .attr("id",inputname)
        .append("circle")
        .attr("transform", "translate("+x_cor+"," + (inputy-5) + ")"+" scale(1,-1)")
        .attr("cx",x(inputtime))
        .attr("cy",y(inputdata[inputtime-1].kw))
        .attr("r","4")
        .attr("fill","yellow")
        .attr("stroke","red")
    svg.append("g")
        .attr("id",inputname+"x")
        .attr("transform", "translate("+x_cor+"," + (inputy-5)+ ")")
        .call(d3.axisBottom(x));

    svg.append("g")
        .attr("id",inputname+"y")
        .attr("transform","translate("+x_cor+"," +y_cor +")","scale(1,-1)")
        .call(d3.axisLeft(y_axis).ticks(3));
}







let domain = [0.90,1.1];

let range = ["#ffcccc","#ff9999","#ff6666","#ff3333","#ff0000","#cc0000","#990000","#660000","#330000","#000000"]

let colorScale = d3.scaleQuantize()
    .domain(domain)
    .range(range);




//let pressure_domain = [0,200];
let pressure_domain = [50,200];//we do not consider the first position, because it is a reservior

let pressure_range = ["#e6e6ff","#b3b3ff","#8080ff","#4d4dff","#1a1aff","#0000e6","#0000b3","#000080","#00004d","#00001a"]

let pressure_colorScale = d3.scaleQuantize()
    .domain(pressure_domain)
    .range(pressure_range);



let legendQuantile = d3.legendColor()
    .labelFormat(d3.format(".2f"))
    .title("Voltage (p.u.)")
    .shapeWidth(15)
    .cells(10)
    .orient('vertical')
    .scale(colorScale);

let pressure_legendQuantile = d3.legendColor()
    .title("Pressure (m)")
    .shapeWidth(15)
    .cells(10)
    .orient('vertical')
    .scale(pressure_colorScale)

svg1.append("g")
    .attr("id","voltage_legend")
    .attr("transform", "translate(5,50)");

svg1.select("#voltage_legend")
    .call(legendQuantile);


svg1.append("g")
    .attr("id","pressure_legend")
    .attr("transform", "translate(5,350)");

svg1.select("#pressure_legend")
    .call(pressure_legendQuantile);

function update(num){

    svg1.selectAll("g").remove();




    svg1.append("g")
        .attr("id","voltage_legend")
        .attr("transform", "translate(5,50)");

    svg1.select("#voltage_legend")
        .call(legendQuantile);


    svg1.append("g")
        .attr("id","pressure_legend")
        .attr("transform", "translate(5,350)");

    svg1.select("#pressure_legend")
        .call(pressure_legendQuantile);




    d3.csv("nodedata.csv",function(error,data){
            buscolor = [];
            waternodecolor = [];
            substationcolor = [];
            subnamevalue = [];
            busnamevalue = [];
            waternamevalue = [];
            flowend = [];
            flowdirection = [];
            arrowlist = [];
            calpha = calpha || 0.6;
            cbeta = cbeta || 0.6;
            var arrowlistdata = [];
            let datalength = data.length;
            for (i = 1;i<datalength;i++){
                if (data[i]["type"] == "bus"){
                    var temp = colorScale(data[i][num]);
                    buscolor.push(temp);
                    busnamevalue.push(data[i]["name1"] + ": "+ data[i][num] + " p.u.");
                    //console.log()
                }else if (data[i]["type"] == "i"){
                    var temp = pressure_colorScale(data[i][num]);
                    waternodecolor.push(temp);
                    waternamevalue.push(data[i]["name1"] + ": "+ data[i][num] + " m");
                }else if (data[i]["type"] == "reservoir"){
                    //var temp = pressure_colorScale(data[i][num]);
                    var temp = pressure_colorScale(100);
                    waternodecolor.push(temp);
                    waternamevalue.push(data[i]["name1"] + ": "+ data[i][num] + " m");
                }
                else if (data[i]["type"]=="substation") {
                    var temp = colorScale(data[i][num]);
                    substationcolor.push(temp);
                    subnamevalue.push(data[i]["name1"] + ": "+ data[i][num] + " p.u.");


                }else{
                    if (data[i][num][0]=="-"){
                        var temp = [Number(data[i]["name1"].slice(3,)),Number(data[i]["name2"].slice(3,))];
                        flowend.push(temp);
                    }else{
                        var temp = [Number(data[i]["name2"].slice(3,)),Number(data[i]["name1"].slice(3,))];
                        flowend.push(temp);

                    }

                }
            }

            for (i=0;i<flowend.length;i++){
                //console.log(powernodesdata[flowend[i][0]-1])
                var temp = [powernodesdata[flowend[i][0]-1],powernodesdata[flowend[i][1]-1]];
                arrowlistdata.push(temp)
            }


            arrowlist = points2arrow(arrowlistdata,0.05);




            //console.log(powernodesdata);

            //console.log(busnamevalue)
            processData_layer(_3d.rotateY(cbeta).rotateX(calpha)(twolayerdata),'layerid');
            processData_waterline(_3d.rotateY(cbeta).rotateX(calpha)(waterlinedata),'lineid');
            processData_powerline(_3d.rotateY(cbeta).rotateX(calpha)(powerlinedata),'powerlineid');
            processData(_3d.rotateY(cbeta).rotateX(calpha)(data3),'betweenlineid','orange');

            //processData_rec(_3d.rotateY(0.6).rotateX(0.6)(powernodesrect),'testrect');
            processData_rec(_3d.rotateY(cbeta).rotateX(calpha)(arrowlist),'testarrow');
            //processData_rec(_3d.rotateY(0.6).rotateX(0.6)(waternodescircle),'testcircle');
            processData_nodes(_3d.rotateY(cbeta).rotateX(calpha)(powernodesrect),'testrect',buscolor,busnamevalue);
            processData_nodes(_3d.rotateY(cbeta).rotateX(calpha)(waternodescircle),'testcircle',waternodecolor,waternamevalue);

            processData(_3d.rotateY(cbeta).rotateX(calpha)(pump),'pumpcircle','green');
            processData_text(_3dtext.rotateY(cbeta).rotateX(calpha)(pumpdata),'testtext',pumptext);
            processData_DSR(_3d.rotateY(cbeta).rotateX(calpha)(DSRcircle),'dsrcircle');
            processData_text(_3dtext.rotateY(cbeta).rotateX(calpha)(DSRposition),'dsrtext',DSRtext);
            processData_substation(_3d.rotateY(cbeta).rotateX(calpha)(substationdata),'substation',["red"],["Substation"]);
            processData_text(_3dtext.rotateY(beta).rotateX(alpha)(substationpoint),'substationtext',substationtext);
            //processData_text(_3dtext.rotateY(cbeta).rotateX(calpha)(substationpoint),'substationtext',substationtext);
            processData_text(_3dtext.rotateY(beta).rotateX(alpha)(tankposition),'tanktext',tanktext);
            processData_text(_3dtext.rotateY(beta).rotateX(alpha)(reservoirposition),'reservoirtext',reservoirtext);


            processData_load(_3d.rotateY(beta).rotateX(alpha)(waterloadarrow),'waterloadarrow','cyan');



        }
    )


    d3.csv("pumpdata.csv",function(error,data){


        let datalength = data.length;
        for(let i = 0;i<datalength;i++){
            d3.select("#powernetwork").select("svg").append("g")
                .append("text")
                .attr("x", pumpchartposition[i][0]-140)
                .attr("y", pumpchartposition[i][1]-85)
                .text("kw")

            d3.select("#powernetwork").select("svg").append("g")
                .append("text")
                .attr("x", pumpchartposition[i][0]-90)
                .attr("y", pumpchartposition[i][1]-100)
                .text("Pump "+(i+1))

            let linechartx = pumpchartposition[i][0];
            let linecharty = pumpchartposition[i][1];

            //console.log("are we here")

            //console.log(linecharty)

            let cur_data = []
            for (let j=1;j<25;j++){
                let timepoint = "t"+j
                let temp = {}
                temp["kw"]=parseFloat(data[i][timepoint])
                temp["time"]=j
                cur_data.push(temp)


            }

            var direction = "left"
            //if (i>0){
            //    direction = "right"
            //}

            let hp = parseInt(num.slice(1,))


            drawlinechart(direction,linechartx,linecharty,cur_data,120,70,i,hp)



        }
    })

    d3.csv("waterchange.csv",function(error,data){


        let datalength = data.length;
        //console.log(datalength)
        let label1 = "km"
        let label2 = "3"
        let label3 = label2.sup()
        //let label = "km\u00B3"
        let label = "m\u00B3"+"/hour"
        //console.log(label)

        for(let i = 0;i<datalength;i++){

            if (i > 0){
                d3.select("#powernetwork").select("svg").append("g").append("text")
                    .attr("x", Number(data[i].x)+30)
                    .attr("y", data[i].y-100)
                    .text(label)

            }else{
                d3.select("#powernetwork").select("svg").append("g").append("text")
                    .attr("x", reservoirchartposition[i][0]-145)
                    .attr("y", reservoirchartposition[i][1]-85)
                    .text(label)
            }

            d3.select("#powernetwork").select("svg").append("g").append("text")
                .attr("x", reservoirchartposition[i][0]-100)
                .attr("y", reservoirchartposition[i][1]-105)
                .text("I10 Tank")

            let linechartx = reservoirchartposition[i][0]-135;
            let linecharty = reservoirchartposition[i][1];


            let cur_data = []
            for (let j=1;j<25;j++){
                let timepoint = "t"+j
                let temp = {}
                temp["km3"]=parseFloat(data[i][timepoint])
                temp["time"]=j
                cur_data.push(temp)

            }

            var direction = "right"
            if (i>0){
                direction = "left"
            }

            let hp = parseInt(num.slice(1,))


            drawwaterlinechart(direction,linechartx,linecharty,cur_data,120,70,i,hp)



        }
    })

    drawrectchart("power",1050,20,"powertotal.csv",210,130,"testpowertotal",num);
    drawrectchart("water",1050,370,"watertotal.csv",210,130,"testwatertotal",num);

    d3.csv("solar data.csv",function(error,data){


        let datalength = data.length;
        for(let i = 0;i<datalength;i++){

            if (i > 0){
                d3.select("#powernetwork").select("svg").append("g").append("text")
                    .attr("x", solarchartposition[i][0]-145)
                    .attr("y", solarchartposition[i][1]-85)
                    .text("kw")

            }else{
                d3.select("#powernetwork").select("svg").append("g").append("text")
                    .attr("x", solarchartposition[i][0]-145)
                    .attr("y", solarchartposition[i][1]-85)
                    .text("kw")
            }

            d3.select("#powernetwork").select("svg").append("g")
                .append("text")
                .attr("x", solarchartposition[i][0]-70)
                .attr("y", solarchartposition[i][1]-100)
                .text("DSR "+(i+1))

            let linechartx = solarchartposition[i][0];
            let linecharty = solarchartposition[i][1]


            let cur_data = []
            for (let j=1;j<25;j++){
                let timepoint = "t"+j
                let temp = {}
                temp["kw"]=parseFloat(data[i][timepoint])
                temp["time"]=j
                cur_data.push(temp)

            }

            var direction = "left"
            if (i>0){
                direction = "right"
            }

            let hp = parseInt(num.slice(1,));


            drawsolorlinechart(direction,linechartx,linecharty,cur_data,120,70,i,hp)



        }
    })


}


//update("t10");
//updatetime();

d3.csv("nodedata.csv",function(error,data){
        buscolor = [];
        waternodecolor = [];
        substationcolor = [];
        busnamevalue = [];
        waternamevalue = [];
        subnamevalue = [];
        flowend = [];
        flowdirection = [];
        arrowlist = [];
        var arrowlistdata = [];
        let datalength = data.length;
        for (i = 1;i<datalength;i++){
            if (data[i]["type"] == "bus"){
                var temp = colorScale(data[i]["t10"]);
                buscolor.push(temp);
                busnamevalue.push(data[i]["name1"] + ": "+ data[i]["t10"] + " p.u.");
                //console.log()
            }else if (data[i]["type"] == "i"){
                var temp = pressure_colorScale(data[i]["t10"]);
                waternodecolor.push(temp);
                waternamevalue.push(data[i]["name1"] + ": "+ data[i]["t10"] + " m");
            }
            else if (data[i]["type"] == "reservoir"){
                //var temp = pressure_colorScale(data[i][num]);
                console.log("100")
                var temp = pressure_colorScale("100");
                waternodecolor.push(temp);
                waternamevalue.push(data[i]["name1"] + ": "+ data[i]["t10"] + " m");
            }else if (data[i]["type"]=="substation") {
                var temp = colorScale(data[i]["t10"]);
                substationcolor.push(temp);
                subnamevalue.push(data[i]["name1"] + ": "+ data[i]["t10"] + " p.u.");


            }else{
                if (data[i]["t10"][0]=="-"){
                    var temp = [Number(data[i]["name1"].slice(3,)),Number(data[i]["name2"].slice(3,))];
                    flowend.push(temp);
                }else{
                    var temp = [Number(data[i]["name2"].slice(3,)),Number(data[i]["name1"].slice(3,))];
                    flowend.push(temp);

                }

            }
        }

        for (i=0;i<flowend.length;i++){
            //console.log(powernodesdata[flowend[i][0]-1])
            var temp = [powernodesdata[flowend[i][0]-1],powernodesdata[flowend[i][1]-1]];
            arrowlistdata.push(temp)
        }


        arrowlist = points2arrow(arrowlistdata,0.05);




        //console.log(powernodesdata);

        //console.log(busnamevalue)
        processData_layer(_3d.rotateY(0.6).rotateX(0.6)(twolayerdata),'layerid');
        processData_waterline(_3d.rotateY(0.6).rotateX(0.6)(waterlinedata),'lineid');
        processData_powerline(_3d.rotateY(0.6).rotateX(0.6)(powerlinedata),'powerlineid');
        processData(_3d.rotateY(0.6).rotateX(0.6)(data3),'betweenlineid','orange');

        //processData_rec(_3d.rotateY(0.6).rotateX(0.6)(powernodesrect),'testrect');
        processData_rec(_3d.rotateY(0.6).rotateX(0.6)(arrowlist),'testarrow');
        //processData_rec(_3d.rotateY(0.6).rotateX(0.6)(waternodescircle),'testcircle');
        processData_nodes(_3d.rotateY(0.6).rotateX(0.6)(powernodesrect),'testrect',buscolor,busnamevalue);
        processData_nodes(_3d.rotateY(0.6).rotateX(0.6)(waternodescircle),'testcircle',waternodecolor,waternamevalue);

        processData(_3d.rotateY(0.6).rotateX(0.6)(pump),'pumpcircle','green');
        processData_text(_3dtext.rotateY(0.6).rotateX(0.6)(pumpdata),'testtext',pumptext);
        processData_DSR(_3d.rotateY(0.6).rotateX(0.6)(DSRcircle),'dsrcircle');
        processData_text(_3dtext.rotateY(0.6).rotateX(0.6)(DSRposition),'dsrtext',DSRtext);
        //processData(_3d.rotateY(0.6).rotateX(0.6)(substationdata),'substation','red');
        processData_substation(_3d.rotateY(0.6).rotateX(0.6)(substationdata),'substation',["red"],["Substation"]);
        processData_text(_3dtext.rotateY(0.6).rotateX(0.6)(tankposition),'tanktext',tanktext);
        processData_text(_3dtext.rotateY(0.6).rotateX(0.6)(reservoirposition),'reservoirtext',reservoirtext);
        //processData_text(_3dtext.rotateY(0.6).rotateX(0.6)(substationpoint),'substationtext',substationtext);

        processData_load(_3d.rotateY(0.6).rotateX(0.6)(waterloadarrow),'waterloadarrow','cyan');





    }
)


d3.csv("pumpdata.csv",function(error,data){


    let datalength = data.length;
    for(let i = 0;i<datalength;i++){
        d3.select("#powernetwork").select("svg").append("g")
            .append("text")
            .attr("x", pumpchartposition[i][0]-140)
            .attr("y", pumpchartposition[i][1]-85)
            .text("kw")


        d3.select("#powernetwork").select("svg").append("g")
            .append("text")
            .attr("x", pumpchartposition[i][0]-90)
            .attr("y", pumpchartposition[i][1]-100)
            .text("Pump "+(i+1))

        let linechartx = pumpchartposition[i][0];
        let linecharty = pumpchartposition[i][1];

        //console.log("are we here")

        //console.log(linecharty)

        let cur_data = []
        for (let j=1;j<25;j++){
            let timepoint = "t"+j
            let temp = {}
            temp["kw"]=parseFloat(data[i][timepoint])
            temp["time"]=j
            cur_data.push(temp)


        }

        var direction = "left"
        //if (i>0){
        //    direction = "right"
        //}

        let hp = parseInt("10")


        drawlinechart(direction,linechartx,linecharty,cur_data,120,70,i,hp)



    }
})



d3.csv("waterchange.csv",function(error,data){


    let datalength = data.length;
    //console.log(datalength)
    let label1 = "km"
    let label2 = "3"
    let label3 = label2.sup()
    //let label = "km\u00B3"
    let label = "m\u00B3"+"/hour"
    //console.log(label)

    for(let i = 0;i<datalength;i++){

        if (i > 0){
            d3.select("#powernetwork").select("svg").append("g").append("text")
                .attr("x", Number(data[i].x)+30)
                .attr("y", data[i].y-100)
                .text(label)

        }else{
            d3.select("#powernetwork").select("svg").append("g").append("text")
                .attr("x", reservoirchartposition[i][0]-145)
                .attr("y", reservoirchartposition[i][1]-85)
                .text(label)
        }

        d3.select("#powernetwork").select("svg").append("g").append("text")
            .attr("x", reservoirchartposition[i][0]-100)
            .attr("y", reservoirchartposition[i][1]-105)
            .text("I10 Tank")

        let linechartx = reservoirchartposition[i][0]-135;
        let linecharty = reservoirchartposition[i][1];


        let cur_data = []
        for (let j=1;j<25;j++){
            let timepoint = "t"+j
            let temp = {}
            temp["km3"]=parseFloat(data[i][timepoint])
            temp["time"]=j
            cur_data.push(temp)

        }

        var direction = "right"
        if (i>0){
            direction = "left"
        }

        let hp = parseInt(10)


        drawwaterlinechart(direction,linechartx,linecharty,cur_data,120,70,i,hp)



    }
})
drawrectchart("power",1050,20,"powertotal.csv",210,130,"testpowertotal","t10");
drawrectchart("water",1050,370,"watertotal.csv",210,130,"testwatertotal","t10");




d3.csv("solar data.csv",function(error,data){


    let datalength = data.length;
    for(let i = 0;i<datalength;i++){

        if (i > 0){
            d3.select("#powernetwork").select("svg").append("g").append("text")
                .attr("x", solarchartposition[i][0]-145)
                .attr("y", solarchartposition[i][1]-85)
                .text("kw")

        }else{
            d3.select("#powernetwork").select("svg").append("g").append("text")
                .attr("x", solarchartposition[i][0]-145)
                .attr("y", solarchartposition[i][1]-85)
                .text("kw")
        }

        d3.select("#powernetwork").select("svg").append("g")
            .append("text")
            .attr("x", solarchartposition[i][0]-70)
            .attr("y", solarchartposition[i][1]-100)
            .text("DSR "+(i+1))

        let linechartx = solarchartposition[i][0];
        let linecharty = solarchartposition[i][1]


        let cur_data = []
        for (let j=1;j<25;j++){
            let timepoint = "t"+j
            let temp = {}
            temp["kw"]=parseFloat(data[i][timepoint])
            temp["time"]=j
            cur_data.push(temp)

        }

        var direction = "left"
        if (i>0){
            direction = "right"
        }

        let hp = parseInt("10")


        drawsolorlinechart(direction,linechartx,linecharty,cur_data,120,70,i,hp)



    }
})





var slidescale = d3.scaleLinear()
    .domain([1,24 ])
    .range([0, 875])
    .clamp(true);
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
let svgslide = d3.select("#slidecontainer").select("svg")
svgslide.append("g")
    .attr("id","slideraxis")
    .attr("transform","translate(15,-6)")
    .call(d3.axisBottom(slidescale).ticks(24))

slider.oninput = function() {
    output.innerHTML = this.value;
    let inputvalue = "t"+this.value;
    update(inputvalue)
}



