 <%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ include file="/includes/taglib.jsp"%>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<ol class="sidebar" id="sidebar">
    <li  >
     <a  href="${ctx}/spcp/spcpIndex.jsp?user_id=<%= userId %>" >
        <i class="icon-type label1"></i>一经接口ETL过程监控
     </a>
    </li> 
    <li >
     <a href="${ctx}/spcp/spcpIndex.jsp?user_id=<%= userId %>" >
        <i class="icon-type label2"></i>接口上传校验返回监控
     </a>
    </li> 
    <li >
     <a href="${ctx}/spcp/spcpIndex.jsp?user_id=<%= userId %>" >
        <i class="icon-type label3"></i>考核以及影响接口监控
     </a>
    </li> 
    <li >
     <a href="${ctx}/spcp/spcpIndex.jsp?user_id=<%= userId %>" >
        <i class="icon-type label4"></i>其它监控
     </a>
    </li> 
    <li >
     <a href="${ctx}/spcp/spcpIndex.jsp?user_id=<%= userId %>" >
        <i class="icon-type label5"></i>一经知识库
     </a>
    </li> 
</ol>