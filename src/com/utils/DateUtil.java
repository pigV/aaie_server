package com.utils;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

/**
 * 
 * <p>Description: 日期的操作参数</p>
 * <p>Copyright: Copyright  2009</p>
 * <p>Company: 亚信科技（中国）有限公司</p>
 * @author xiaoyx
 * @version 1.0 
 *
 */
public class DateUtil {
   
	/**
	 * 取当前日期的前十天日期 ，用于产品查询 
	 */
	public static String getBeforeTenDate() {
		 SimpleDateFormat format = new SimpleDateFormat("yyyyMMdd");
		 Calendar cal = Calendar.getInstance(); 
		 int day = cal.get(Calendar.DATE);  
		 cal.set(Calendar.DATE, day-10);  
		 Date currDay = cal.getTime();
		 
         return format.format(currDay);
	}
	
	public static void main(String[] args) {
		System.out.println(DateUtil.getBeforeTenDate());
	}
}
