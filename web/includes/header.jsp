 <%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ include file="/includes/taglib.jsp"%>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<div class="header">
    <h1>奥亚CMC系统</h1>
    <div class="main-nav">
        <ol id="mainNav" >
          <li><a href="${ctx}/student/studentQuery.jsp" >Student Management</a></li>
          <li><a href="${ctx}/school/schoolQuery.jsp" >School Management</a></li>
          <li><a href="${ctx}/staff/staffQuery.jsp"  >Staff Management</a></li>
          <li><a href="${ctx}/system/cityQuery.jsp" >System Management</a></li>
         
        </ol>
    </div>
	<dl class="oper-list">
         <dd>
             <div  class="user-info">zhangsan</div>
         </dd>
         <dd>
             <div class="seg-line"></div>
         </dd>
         <dd>
             <div class="current-timer" id="currentTimer"></div>
         </dd>
    </dl>
</div>