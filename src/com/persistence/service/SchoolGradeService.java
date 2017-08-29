package com.persistence.service;

import com.persistence.mapper.CrmSchoolInfoMapper;
import com.persistence.model.CrmSchoolInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Administrator on 2017/8/28 0028.
 */
@Service("schoolGradeService")
public class SchoolGradeService {
    @Autowired
    private CrmSchoolInfoMapper crmSchoolInfoMapper;

    public int addSchool(CrmSchoolInfo crmSchoolInfo){
       int flag  = crmSchoolInfoMapper.insert(crmSchoolInfo);
       return flag;
    }
}
