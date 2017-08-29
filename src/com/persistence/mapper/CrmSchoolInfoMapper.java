package com.persistence.mapper;

import com.persistence.model.CrmSchoolInfo;
import com.persistence.vo.SchoolConditionVO;
import org.apache.ibatis.session.RowBounds;

import java.util.List;

public interface CrmSchoolInfoMapper {
    int deleteByPrimaryKey(String schoolId);

    int insert(CrmSchoolInfo record);

    CrmSchoolInfo selectByPrimaryKey(String schoolId);

    int updateByPrimaryKeySelective(CrmSchoolInfo record);

    int updateByPrimaryKey(CrmSchoolInfo record);

    List<CrmSchoolInfo> queryAllCrmSchoolInfoList();


    List<CrmSchoolInfo> queryAllCrmSchoolInfoListI();

    List<CrmSchoolInfo> queryAllCrmSchoolInfoListP();

    List<CrmSchoolInfo> queryAllCrmSchoolInfoElicosList();

    List<CrmSchoolInfo> findPageBreakByCondition(SchoolConditionVO vo, RowBounds rb);

    Integer findNumberByConditionCount(SchoolConditionVO vo);
}