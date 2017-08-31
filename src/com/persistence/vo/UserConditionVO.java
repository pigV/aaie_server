package com.persistence.vo;


public class UserConditionVO
{
	public final static int PAGE_SHOW_COUNT = 10;

	private int pageNum = 1;

	private int pageSize = 0;

	private int totalCount = 0;
	
	private int pageNumShown = 0;

	private String orderField;

	private String orderDirection;

	private String userAccount;
	
	private String agentId;
	
	private String userName;

	private String userId;

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getUserName()
	{
		return userName;
	}

	public void setUserName(String userName)
	{
		this.userName = userName;
	}

	public int getPageNum()
	{
		return pageNum;
	}

	public void setPageNum(int pageNum)
	{
		this.pageNum = pageNum;
	}

	public int getPageSize()
	{
		return pageSize > 0 ? pageSize : PAGE_SHOW_COUNT;
	}

	public void setPageSize(int pageSize)
	{
		this.pageSize = pageSize;
	}

	public String getOrderField()
	{
		return orderField;
	}

	public void setOrderField(String orderField)
	{
		this.orderField = orderField;
	}

	public String getOrderDirection()
	{
		return "desc".equals(orderDirection) ? "desc" : "asc";
	}

	public void setOrderDirection(String orderDirection)
	{
		this.orderDirection = orderDirection;
	}

	public int getTotalCount()
	{
		return totalCount;
	}

	public void setTotalCount(int totalCount)
	{
		this.totalCount = totalCount;
	}

	public String getUserAccount()
	{
		return "".equals(userAccount) ? null : userAccount;
	}

	public void setUserAccount(String userAccount)
	{
		this.userAccount = userAccount;
	}

	public int getStartIndex()
	{
		int pageNum = this.getPageNum() > 0 ? this.getPageNum() - 1 : 0;
		return pageNum * this.getPageSize();
	}

	public void setKeywords(String keywords)
	{
		keywords = keywords;
	}

	public String getAgentId()
	{
		return agentId;
	}

	public void setAgentId(String agentId)
	{
		this.agentId = agentId;
	}

	public int getPageNumShown()
	{
		return pageNumShown;
	}

	public void setPageNumShown(int pageNumShown)
	{
		this.pageNumShown = pageNumShown;
	}
}
