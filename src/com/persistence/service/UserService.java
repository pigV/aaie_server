package com.persistence.service;

import com.persistence.mapper.CrmUserInfoMapper;
import com.persistence.model.CrmUserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Administrator on 2017/8/31 0031.
 */
@Service("schoolGradeService")
public class UserService {

    @Autowired
    private CrmUserInfoMapper crmUserInfoMapper;

    public int addUser(CrmUserInfo crmUserInfo){
        int flag = crmUserInfoMapper.insertSelective(crmUserInfo);
        return flag;
    }
}
