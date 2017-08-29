package com.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.persistence.model.CrmSchoolInfo;
import com.persistence.service.SchoolGradeService;
import com.utils.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.ext.Provider;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by Administrator on 2017/8/28 0028.
 */
@Path("/SchoolGradeController")
@Provider
@Component
public class SchoolGradeController {

    @Autowired
    SchoolGradeService schoolGradeService;

    private static Logger logger = LoggerFactory.getLogger(SchoolGradeController.class);

    /**
     * @Description 创建学校
     *
     */
    @POST
    @Path("/addSchool")
    @Produces("application/json;charset=UTF-8")
    @Consumes(MediaType.APPLICATION_JSON)
    public Map addSchool(JSONObject jsonBody) {
        Map mapResult = new HashMap();
        CrmSchoolInfo crmSchoolInfo = JSON.parseObject(jsonBody.toJSONString(),CrmSchoolInfo.class);
        crmSchoolInfo.setSchoolId(RandomString.randomString(8));
        int flag = schoolGradeService.addSchool(crmSchoolInfo);
        if(flag == 0){
            mapResult.put("status", "1");
            mapResult.put("message","success");
        }else{
            mapResult.put("status","0");
        }

        return mapResult;
    }
}
