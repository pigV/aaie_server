package com.persistence.mapper;


import com.persistence.model.CrmUserInfo;
import com.persistence.vo.UserConditionVO;
import org.apache.ibatis.session.RowBounds;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface CrmUserInfoMapper
{
	int deleteByPrimaryKey(String userId);

	int insertSelective(CrmUserInfo record);

	CrmUserInfo selectByPrimaryKey(String userId);

	int updateByPrimaryKeySelective(CrmUserInfo record);

	int updateByPrimaryKey(CrmUserInfo record);
	
	// 查询
	List<CrmUserInfo> findPageBreakByCondition(UserConditionVO vo, RowBounds rb);

	Integer findNumberByCondition(UserConditionVO vo);
	
	CrmUserInfo findByUsername(String userAccount);

	int queryCountIsAdminCount();

	List<CrmUserInfo> queryUserInfoListIsAdmin(UserConditionVO vo, RowBounds rb);

	int queryCountIsManageCount();

	List<CrmUserInfo> queryUserInfoListIsManage(UserConditionVO vo, RowBounds rb);
}