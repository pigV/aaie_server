<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>

<%@ include file="/includes/taglib.jsp"%>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<!DOCTYPE html>
<html>
<head>
<%@ include file="/includes/meta.jsp"%>
<title>数据质量保障系统</title>
<link rel="stylesheet" href="${ctx}/assets/css/pages/schedule.css" />
<script src="${ctx}/assets/js/schedule/scheduleQuery.js"></script>

</head>
<body>
<%@ include file="/includes/header.jsp"%>
<!-- 主体内容-->
<div class="container">
      <div class="content-left fleft">
           <%@ include file="/includes/sidebar.jsp"%>
      </div>
      <div class="content-wrapper">
            <div class="content-inner">
                 <div class="blue-hr"></div>
                 <div class="form-table-box">
                 <table class="form-table">
                   <tbody>
                     <tr>
                       <td>
                           <label class="labFmt80" >状态：</label>
                           <select class="selectFmt100" id="taskState"></select>
                       </td>
                       <td>
                           <label class="labFmt80" >周期：</label>
                           <select class="selectFmt100"   id="runFreq"></select>
                       </td>
                       <td width="220">
                      		<label class="labFmt100" >日期：</label>
                      		<input type="text" class="inputFmt100 dateInput" 
                            id="execTime" readonly="readonly" />
                      	</td>
                        <td width="300">
                          <label class="labFmt100">接口号：</label>
                          <input type="text" class="inputFmt170" 
                            id="jobName"  />
                       </td>
                      	<td width="180">
                      		 <button  class="queryBtn" id="queryBtn" >查询</button>
                      		 <button  class="queryBtn newBtn" id="newBtn" onclick="toggleWindow()">新建</button>
                      	</td>
                      </tr>
                      
                   </tbody>
                 </table>
             </div>         	
           <div class="red-hr"></div> 
           <table class="comTable">
              <thead>
                <tr>
                  <th width="150">任务ID</th>
                  <th> 任务名称 </th>
                  <th width="70">运行周期</th>
                  <th> 数据批次 </th>
                  <th width="140"> 状态 </th>
                  <th> Agent </th>
                  <th> 开始执行时间 </th>
                  <th>  运行结束时间</th>
                  <th width="100"> 时长 </th>
                </tr>
              </thead>
              <tbody id="scheduleListTable"></tbody>
            </table>
            
             <!-- 分页插件 -->
             <div class="table-page-box"  id="pager"></div> 
            </div>
        
      </div>
  </div>

  <!-- 遮罩层 -->
  <div class="overlay"></div>
  <!-- 新建弹窗 -->
  <div class="infoWindow">
  	<i class="windClose" id="windClose" onclick="toggleWindow()"></i>
  	<table class="form-table">
      <tbody>
        <tr>
          <td colspan="2">
             <label class="labFmt80">接口名称：</label>
             <input type="text" class="inputFmt170 inputFmt300" 
               id="jobName"  />
          </td>
         </tr>
         <tr>
          <td>
              <label class="labFmt80" >接口周期：</label>
              <select class="selectFmt100" id="taskState"></select>
          </td>
          <td>
              <label class="labFmt80" >重传日期：</label>
              <input type="text" class="inputFmt100 dateInput" 
               id="execTime" readonly="readonly" />
          </td>
         </tr>
         <tr>
         	<td width="220" colspan="2">
         		<label class="labFmt80" >重传原因：</label>
         		<input type="text" class="inputFmt170 inputFmt300" 
               id="jobName"  />
         	</td>
         </tr>
         <tr>
         	<td colspan="2">
         		<button  class="queryBtn saveBtn" id="saveBtn" >保存</button>
         	</td>
         </tr>
      </tbody>
    </table>
  </div>

</body>
</html>