 <%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ include file="/includes/taglib.jsp"%>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<ol class="sidebar" id="sidebar">
    <li  >
     <a  href="${ctx}/student/studentQuery.jsp" >
        <i class="icon-type label1"></i>Students Search
     </a>
    </li> 
    <li >
     <a href="${ctx}/student/studentAdd.jsp" >
        <i class="icon-type label2"></i>Add New Student
     </a>
    </li> 
</ol>