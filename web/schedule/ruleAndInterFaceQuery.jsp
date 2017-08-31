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
<script src="${ctx}/assets/js/schedule/ruleAndInterFaceQuery.js"></script>

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
                      <td width="330">
                          <label class="labFmt100">规则编号：</label>
                          <input type="text" class="inputFmt170"  id="ruleId"  />
                       </td>
                        <td >
                      		<label class="labFmt100">涉及接口：</label>
                      		<input type="text" class="inputFmt170" id="relateInterface"  />
                      	</td>
                      	<td>
                      		 <button  class="queryBtn" id="queryBtn" >查询</button>
                      	</td>
                      </tr>
                      
                   </tbody>
                 </table>
             </div>         	
           <div class="red-hr"></div> 
           <table class="comTable">
              <thead>
                <tr>
                  <th> 规则编码 </th>
                  <th> 规则类型 </th>
                  <th> 规则主题 </th>
                  <th> 规则名称 </th>
                  <th> 涉及接口 </th>
                  <th> 规则描述 </th>
                  <th> 扣分方式 </th>
                  <th> 计算流程 </th>
                  <th> 计算脚本 </th>
                  <th> 备注 </th>
                  <th> 负责厂商 </th>
                </tr>
              </thead>
              <tbody id="ruleListTable"></tbody>
            </table>
            
             <!-- 分页插件 -->
             <div class="table-page-box"  id="pager"></div> 
            </div>
        
      </div>
  </div>

  <form id="prevForm"  method="post" action="${ctx}/rest/etlPro/scheduleMap" target="_new">
     <input type="hidden" id="jobIdHidden" name="jobIdHidden" />
     <input type="hidden" id="dateArgsHidden" name="dateArgsHidden" />
     <input type="hidden" id="taskStateHidden" name="taskState" />
  </form>

</body>
</html>