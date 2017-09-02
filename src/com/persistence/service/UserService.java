package com.persistence.service;

import com.persistence.mapper.CrmUserInfoMapper;
import com.persistence.model.CrmUserInfo;
import com.persistence.vo.UserConditionVO;
import org.apache.ibatis.session.RowBounds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Administrator on 2017/8/31 0031.
 */
@Service("userService")
public class UserService {

    @Autowired
    private CrmUserInfoMapper crmUserInfoMapper;

    public int addUser(CrmUserInfo crmUserInfo){
        int flag = crmUserInfoMapper.insertSelective(crmUserInfo);
        return flag;
    }

    public CrmUserInfo queryUserByAccount(String strUserAccount){
        CrmUserInfo crmUserInfo = crmUserInfoMapper.findByUserAccount(strUserAccount);
        return crmUserInfo;
    }

    public int deleteUser(String strUserId){
        int flag = crmUserInfoMapper.deleteByPrimaryKey(strUserId);
        return flag;
    }

    public int updateUser(CrmUserInfo crmUserInfo){
        int flag = crmUserInfoMapper.updateByPrimaryKey(crmUserInfo);
        return flag;
    }

    public List<CrmUserInfo> queryUserListByAdmin(UserConditionVO vo){
        RowBounds rb = new RowBounds(vo.getStartIndex(), vo.getPageSize());
        List<CrmUserInfo> crmUserInfoList = crmUserInfoMapper.queryUserInfoListIsManage(vo,rb);
        return crmUserInfoList;
    }
}
