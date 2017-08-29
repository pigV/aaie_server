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
<script src="${ctx}/assets/js/schedule/ruleCheckedQuery.js"></script>

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
                          <label class="labFmt100" >类型：</label>
                           <select class="selectFmt100"   id="checkType">
                              <option value="day"  >日核查</option>
                              <option value="month">月核查</option>
                           </select>
                        </td>  
                      <td>
                         <label class="labFmt100">日期：</label>
                          <input type="text" 
                          class="inputFmt100 dateInput"  id="opTimeDay"  />       
                          <input type="text" 
                          class="inputFmt100 dateInput"  id="opTimeMonth"  />
                      </td>
                      </td>
                        <td>
                          <label class="labFmt100" >合格状态：</label>
                           <select class="selectFmt100"   id="ifOk">
                              <option value="-1" selected>全部</option>
                              <option value="超标">超标</option>
                              <option value="OK">OK</option>
                           </select>
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
                  <th> 月份 </th>
                  <th> 规则代码 </th>
                  <th> 规则名称 </th>
                  <th> 考核类型 </th>
                  <th> 值1 </th>
                  <th> 值2 </th>
                  <th> 计算结果 </th>
                  <th> 是否合格 </th>
                  <th> 规则描述 </th>
                </tr>
              </thead>
              <tbody id="ruleListTable"></tbody>
            </table>
            
             <!-- 分页插件 -->
             <div class="table-page-box"  id="pager"></div> 
            </div>
        
      </div>
  </div>

</body>
</html>