package com.utils;

import org.codehaus.jackson.jaxrs.JacksonJsonProvider;
import org.glassfish.jersey.jackson.JacksonFeature;
import org.glassfish.jersey.server.ResourceConfig;

/**
 * Created by Administrator on 2017/8/28 0028.
 */
public class RestApplication extends ResourceConfig {
    public RestApplication() {
        //服务类所在的包路径
        packages("com.controller");
        //注册JSON转换器
//        register(JacksonJsonProvider.class);
        register(JacksonFeature.class);
        //register(JspMvcFeature.class); //注册MVC支持
        //property(JspMvcFeature.TEMPLATE_BASE_PATH, "/");//jsp文件所在位置，当前JSP文件是在项目根目录下
    }
}
