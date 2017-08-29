<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>

<%@ include file="/includes/taglib.jsp"%>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<!DOCTYPE html>
<html>
<head>
<%@ include file="/includes/meta.jsp"%>
<title>数据质量保障系统</title>
<link rel="stylesheet" href="${ctx}/assets/css/pages/quantity.css" />
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
                <ol class="quantity-box">
                  <li class="quantity-blue">
                    <dl>
                     <dd>14543</dd>
                     <dt>当日接口生成数量</dt>
                    </dl>
                    
                  </li>
                   <li class="quantity-green">
                    <dl>
                     <dd>14543</dd>
                     <dt>当日接口上传数量</dt>
                    </dl>
                  </li>
                   <li class="quantity-orange">
                    <dl>
                     <dd>14543</dd>
                     <dt>当日接口记录文件返回数量</dt>
                    </dl>
                  </li>
                </ol>  	
           <div class="red-hr"></div> 
           <h1 class="table-title">当日接口上传明细</h1>
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