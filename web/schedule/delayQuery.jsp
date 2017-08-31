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
<script src="${ctx}/assets/js/schedule/delayQuery.js"></script>

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
                      		 <button  class="queryBtn newBtn" id="newBtn">新建</button>
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
                </tr>
              </thead>
              <tbody id="scheduleListTable">
                
              </tbody>
            </table>
            
             <!-- 分页插件 -->
             <div class="table-page-box"  id="pager"></div> 
            </div>
        
      </div>
  </div>

  <!-- 新建弹窗 -->
  <div   id="addDelayDialog" >
  	<form id="delayForm">
	  	<table class="form-table">
	      <tbody>
	        <tr>
	          <td>
	              <label class="labFmt80" >周期类型：</label>
	              <select class="selectFmt100" id="interfaceType">
	              	<option value="1">日周期</option>
	              	<option value="2">月周期</option>
	              </select>
	          </td>
	          <td>
	              <label class="labFmt80" >延迟日期：</label>
	              <input type="text" class="inputFmt100 dateInput" 
	               id="opTime1" readonly="readonly" />
	                <input type="text" class="inputFmt100 dateInput" 
	               id="opTime2" readonly="readonly" />
	          </td>
	          </tr>
	         
	         <tr>
	          <td>
	             <label class="labFmt80">日接口数量：</label>
	             <input type="text" class="inputFmt80" 
	               id="dayInterface"  />
	          </td>
	          <td>
	             <label class="labFmt80">月接口数量：</label>
	             <input type="text" class="inputFmt80" 
	               id="monthInterface"  />
	          </td>
	          </tr>
	         
	         <tr>
	          <td>
	             <label class="labFmt80">接口ID：</label>
	             <input type="text" class="inputFmt170" 
	               id="interfaceId"  />
	          </td>
	          
	         </tr>
	         
	         <tr>
	         	<td width="220" colspan="2">
	         		<label class="labFmt80" >备注：</label>
	         		
	         		<input type="text" class="inputFmt170 inputFmt300" 
	               id="becauseM"  />
	         	</td>
	         </tr>
	         <tr>
	         	<td colspan="2">
	         		<button  type="button" class="queryBtn saveBtn" id="saveInterfaceBtn" >保存</button>
	         	</td>
	         </tr>
	      </tbody>
	    </table>
    </form>
  </div>

</body>
</html>