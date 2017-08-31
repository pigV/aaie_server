package com.persistence.mapper;

import com.persistence.model.CrmGradeInfo;

import java.util.List;

public interface CrmGradeInfoMapper {

    int deleteByPrimaryKey(String gradeId);

    int deleteBySchoolId(String schoolId);

    int insert(CrmGradeInfo record);

    int insertSelective(CrmGradeInfo record);

    CrmGradeInfo selectByPrimaryKey(String gradeId);

    int updateByPrimaryKeySelective(CrmGradeInfo record);

    int updateByPrimaryKey(CrmGradeInfo record);

    List<CrmGradeInfo> querySchoolGradeBySchoolId(String schoolId);
}