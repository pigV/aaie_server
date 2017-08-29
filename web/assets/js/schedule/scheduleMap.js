$(function() {

    ProcessMap.initSvg();
    $("#prevBtn").on("click", function() {
        ProcessMap.addPrevNode();
    }) 
    $("#nextBtn").on("click", function() {
        ProcessMap.addNextNode();
    })
})
var ProcessMap = (function(model) {

    //初始化画布参数
    model.initSvg = function() {
        var svgWidth = $(window).width() - 30;
        var svgHeight = $(window).height() - 162;
        $("#mapSvg").attr("width", svgWidth).attr("height", svgHeight);
        var tempObj = {
            id: $("#showJobId").val(),
            label: '程序:\n' + $("#showJobId").val()
        }
        if(true){
           tempObj.class = 'success';
        }

        model.nodesArr.push(tempObj);
        model.init();
    }
    model.nodesArr = [];
    model.linksArr = [];


    model.init = function() {
       
        var g = new dagreD3.graphlib.Graph().setGraph({}).setDefaultEdgeLabel(function() { return {}; });

        //向画布添加节点
        model.nodesArr.forEach(function(n) {
            if (n.class) {
                g.setNode(n.id, { label: n.label, class: n.class });

            } else {
                g.setNode(n.id, { label: n.label });
            }
        });
        //设置节点圆角
        g.nodes().forEach(function(v) {
            var node = g.node(v);
            node.rx = node.ry = 5;
        });
        model.linksArr.forEach(function(l) {
            g.setEdge(l.from, l.to);
        });

        var svg = d3.select("svg"),
            inner = svg.select("g");

        var zoom = d3.behavior.zoom().on("zoom", function() {
            inner.attr("transform", "translate(" + d3.event.translate + ")" +
                "scale(" + d3.event.scale + ")");
        });
        svg.call(zoom);

        var render = new dagreD3.render();
        render(inner, g);
        inner.selectAll("g.node").on("click", function(d) {
            
            $("#showJobId").val(d);
            //console.log($(this).html());
        });

        var initialScale = 1;
        zoom.translate([(svg.attr("width") - g.graph().width * initialScale) / 2, 20])
            .scale(initialScale)
            .event(svg);
    }
    //添加前置节点
    model.addPrevNode = function(){
        var param = { "jobId":$("#showJobId").val(),"dateArgs":$("#dateArgs").val(),"flag":true};
        AjaxFetchData({
            url: $.ctxServer+"etlPro/prevNextSchedule",
            data: param,
            type: "get"
        }, function(ajaxData) {
            //console.log(ajaxData);
          var tempArr = ajaxData["prevList"];
          for(var i=0;i<tempArr.length;i++){
               var tempObj = {
                  id: tempArr[i]['jobId'],
                  label: '程序:\n' + tempArr[i]['jobId']
               }
               if(tempArr[i]['taskState']){
                  tempObj.class = 'success';
               }
                model.nodesArr.push(tempObj);
                model.linksArr.push({ from: $("#showJobId").val(), to: tempArr[i]['jobId'] });
            }
            $("#msgTip").removeClass().show();
            if(tempArr.length>0){
              model.init();
              $("#msgTip").addClass('tip-success').text("查询数据成功");
            }else{
               $("#msgTip").addClass('tip-warning').text("未查询到前置节点!!");
            }

        })
    } 
    //添加前置节点
    model.addNextNode = function(){
        var param = { "jobId":$("#showJobId").val(),"dateArgs":$("#dateArgs").val(),"flag":false};
        AjaxFetchData({
            url: $.ctxServer+"etlPro/prevNextSchedule",
            data: param,
            type: "get"
        }, function(ajaxData) {
           // console.log(ajaxData);
            var tempArr = ajaxData["nextList"];
            for(var i=0;i<tempArr.length;i++){
               var tempObj = {
                  id: tempArr[i]['jobId'],
                  label: '程序:\n' + tempArr[i]['jobId']
               }
               if(tempArr[i]['taskState']){
                  tempObj.class = 'success';
               }
                model.nodesArr.push(tempObj);
                model.linksArr.push({ from: $("#showJobId").val(), to: tempArr[i]['jobId'] });
            }
            $("#msgTip").removeClass().show();
            if(tempArr.length>0){
              model.init();
              $("#msgTip").addClass('tip-success').text("查询数据成功");
            }else{
               $("#msgTip").addClass('tip-warning').text("未查询到后置节点!!");
            }
        })
    }

    return model;

})(window.ProcessMap || {});