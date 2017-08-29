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
<div class="blockBackground">
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
                      <td width="20"></td>
                      <td width="90">
                          <input type="radio" name="checkRodio" id="" checked="checked"/> 考核通过
                       </td>
                       <td width="105">
		                  <input type="radio" name="checkRodio" id=""/> 考核未通过
                       </td>
                       <td>
		                  <button  class="queryBtn" id="queryBtn" >查询</button>
                       </td>
                      </tr>
                      
                   </tbody>
                 </table>
             </div>         	
           <div class="red-hr"></div> 
           <h1 class="table-title">当日考核通过明细</h1>
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

</body>
</html>