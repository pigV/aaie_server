<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ include file="/includes/taglib.jsp"%>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<html>
<head>
<%@ include file="/includes/meta.jsp"%>
<title>数据质量保障系统</title>
<link rel="stylesheet" href="${ctx}/assets/css/pages/schedule.css" />
<script src="${ctx}/assets/lib/d3/d3.v3.min.js"></script>
<script src="${ctx}/assets/lib/d3/dagre-d3.js"></script>

</head>

<body>
  
	<%@ include file="/includes/header.jsp"%>

	 <div class="content-inner">
          <div class="blue-hr"></div>
          <div class="schedule-btn-box">
        	<ol>
        		<li>
        			<button id="prevBtn" class="schedule-btn">前驱</button>
        		</li>
        		<li>
        			<button id="nextBtn" class="schedule-btn" >后置</button>
        		</li>
            <li>
              <label class="labFmt80">选择节点：</label>
              <input type="text" class="inputFmt170"  id="showJobId"  
              value="${jobId}" readonly="readonly" />
               <input type="hidden" id="dateArgs"  value="${dateArgs}" />
               <input type="hidden" id="taskState"  value="${taskState}" />
            </li>
            <li>
              <div id="msgTip" class="none tip-success">
              </div>
            </li>
        	</ol>
           </div>
           <div class="red-hr"></div>
           <div class="svg-box">
           	   <svg   id="mapSvg" ><g/></svg>
           </div>
     </div>
      <script src="${ctx}/assets/js/schedule/scheduleMap.js"></script>
</body>