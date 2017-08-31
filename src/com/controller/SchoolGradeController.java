package com.controller;

import com.persistence.model.CrmGradeInfo;
import com.persistence.model.CrmSchoolInfo;
import com.persistence.service.SchoolGradeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import javax.ws.rs.*;
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
     * 创建学校
     * @param crmSchoolInfo
     * @return
     */
    @POST
    @Path("/addSchool")
    @Produces("application/json;charset=UTF-8")
    @Consumes("application/x-www-form-urlencoded")
    public Map addSchool(@BeanParam CrmSchoolInfo crmSchoolInfo) {
        Map mapResult = new HashMap();
        int flag = schoolGradeService.addSchool(crmSchoolInfo);
        if(flag == 0){
            mapResult.put("status", "1");
            mapResult.put("message","success");
        }else{
            mapResult.put("status","0");
        }

        return mapResult;
    }

    /**
     * 创建学校对应的年级
     * @param crmGradeInfo
     * @return
     */
    @POST
    @Path("/addGrade")
    @Produces("application/json;charset=UTF-8")
    @Consumes("application/x-www-form-urlencoded")
    public Map addGrade(@BeanParam CrmGradeInfo crmGradeInfo) {
        Map mapResult = new HashMap();
        int flag = schoolGradeService.addGrade(crmGradeInfo);
        if(flag == 0){
            mapResult.put("status", "1");
            mapResult.put("message","success");
        }else{
            mapResult.put("status","0");
        }

        return mapResult;
    }
}
