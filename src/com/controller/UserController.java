package com.controller;

import com.persistence.model.CrmUserInfo;
import com.persistence.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import javax.ws.rs.*;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by Administrator on 2017/8/31 0031.
 */
public class UserController {

    @Autowired
    UserService userService;

    private static Logger logger = LoggerFactory.getLogger(UserController.class);

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
