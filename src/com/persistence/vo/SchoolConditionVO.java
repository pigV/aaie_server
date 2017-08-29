package com.persistence.vo;


public class SchoolConditionVO
{
	public final static int PAGE_SHOW_COUNT = 10;

	private int pageNum = 1;

	private int pageSize = 0;

	private int totalCount = 0;
	
	private int pageNumShown = 0;

	private String targetType;

	public String getTargetType() {
		return targetType;
	}

	public void setTargetType(String targetType) {
		this.targetType = targetType;
	}

	private String orderField = null;

	private String orderDirection = null;

	private String schoolName = null;

	private String schoolLocation = null;

	private String schoolType = null;

	public String getSchoolType() {
		return schoolType;
	}

	public void setSchoolType(String schoolType) {
		this.schoolType = schoolType;
	}

	public String getSchoolYearLevel() {
		return schoolYearLevel;
	}

	public void setSchoolYearLevel(String schoolYearLevel) {
		this.schoolYearLevel = schoolYearLevel;
	}

	private String schoolYearLevel = null;

	public String getSchoolLocation() {
		return schoolLocation;
	}

	public void setSchoolLocation(String schoolLocation) {
		this.schoolLocation = schoolLocation;
	}

	public String getSchoolKmsToCity() {
		return schoolKmsToCity;
	}

	public void setSchoolKmsToCity(String schoolKmsToCity) {
		this.schoolKmsToCity = schoolKmsToCity;
	}

	private String schoolKmsToCity = null;

	public String getSchoolName() {
		return schoolName;
	}

	public void setSchoolName(String schoolName) {
		this.schoolName = schoolName;
	}

	public String getSchoolState() {
		return schoolState;
	}

	public void setSchoolState(String schoolState) {
		this.schoolState = schoolState;
	}

	private String schoolState = null;
	
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

	public int getStartIndex()
	{
		int pageNum = this.getPageNum() > 0 ? this.getPageNum() - 1 : 0;
		return pageNum * this.getPageSize();
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
