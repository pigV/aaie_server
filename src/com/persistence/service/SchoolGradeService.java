package com.persistence.service;

import com.persistence.mapper.CrmGradeInfoMapper;
import com.persistence.mapper.CrmSchoolInfoMapper;
import com.persistence.model.CrmGradeInfo;
import com.persistence.model.CrmSchoolInfo;
import com.persistence.vo.SchoolConditionVO;
import org.apache.ibatis.session.RowBounds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Administrator on 2017/8/28 0028.
 */
@Service("schoolGradeService")
public class SchoolGradeService {
    @Autowired
    private CrmSchoolInfoMapper crmSchoolInfoMapper;

    @Autowired
    private CrmGradeInfoMapper crmGradeInfoMapper;

    /** 学校 **/
    public int addSchool(CrmSchoolInfo crmSchoolInfo){
       int flag  = crmSchoolInfoMapper.insert(crmSchoolInfo);
       return flag;
    }

    public int deleteSchool(String strSchoolId){
        int flag = crmSchoolInfoMapper.deleteByPrimaryKey(strSchoolId);
        return flag;
    }

    public int updateSchool(CrmSchoolInfo crmSchoolInfo){
        int flag = crmSchoolInfoMapper.updateByPrimaryKeySelective(crmSchoolInfo);
        return flag;
    }

    public List<CrmSchoolInfo> queryCrmSchoolInfo(SchoolConditionVO vo) {
        RowBounds rb = new RowBounds(vo.getStartIndex(), vo.getPageSize());
        List<CrmSchoolInfo> crmSchoolInfoList = crmSchoolInfoMapper.findPageBreakByCondition(vo, rb);
        return crmSchoolInfoList;
    }

    /** 年级**/
    public int addGrade(CrmGradeInfo crmGradeInfo){
        int flag = crmGradeInfoMapper.insert(crmGradeInfo);
        return flag;
    }

    public int deleteGrade(String strGradeId){
        int flag = crmGradeInfoMapper.deleteByPrimaryKey(strGradeId);
        return flag;
    }

    public int updateGrade(CrmGradeInfo crmGradeInfo){
        int flag = crmGradeInfoMapper.updateByPrimaryKeySelective(crmGradeInfo);
        return flag;
    }

    public List<CrmGradeInfo> queryAllCrmGradeInfoList(String strSchoolId)
    {
        return crmGradeInfoMapper.querySchoolGradeBySchoolId(strSchoolId);
    }
}
