package com.controller;

import com.persistence.model.CrmUserInfo;
import com.persistence.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.ext.Provider;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by Administrator on 2017/8/31 0031.
 */
@Path("/UserController")
@Provider
@Component
public class UserController {

    @Autowired
    UserService userService;

    private static Logger logger = LoggerFactory.getLogger(UserController.class);

    @GET
    @Path("/login/{user_account}/{user_password}")
    @Produces("application/json;charset=UTF-8")
    public Map login(@PathParam("user_account") String strUserAccount, @PathParam("user_password") String strUserPassword,@Context HttpServletRequest request){
        Map mapResult = new HashMap();
        try{
            CrmUserInfo crmUserInfo = userService.queryUserByAccount(strUserAccount);
            String strUserAccount$ = crmUserInfo.getUserAccount();
            String strUserPassword$ = crmUserInfo.getUserPassword();
            if(strUserAccount.equals(strUserAccount$) && strUserPassword.equals(strUserPassword$)){
                request.getSession().setAttribute("crmUserInfo",crmUserInfo);
                mapResult.put("message","success");
            }else{
                mapResult.put("message","false");
            }

            mapResult.put("status", "1");
        }catch(Exception ex){
            mapResult.put("status","0");
        }

        return mapResult;
    }

    @POST
    @Path("/addUser")
    @Produces("application/json;charset=UTF-8")
    @Consumes("application/x-www-form-urlencoded")
    public Map addSchool(@BeanParam CrmUserInfo crmUserInfo) {
        Map mapResult = new HashMap();
        int flag = userService.addUser(crmUserInfo);
        if(flag == 0){
            mapResult.put("status", "1");
            mapResult.put("message","success");
        }else{
            mapResult.put("status","0");
        }

        return mapResult;
    }
}
