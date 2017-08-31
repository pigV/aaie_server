package com.persistence.model;

public class CrmGradeInfo {

    private String gradeId;

    private String gradeName;

    private String isVacancy;

    private String gradeTution;

    private String totalFee;

    private String schoolId;

    public String getGradeId() {
        return gradeId;
    }

    public void setGradeId(String gradeId) {
        this.gradeId = gradeId;
    }

    public String getGradeName() {
        return gradeName;
    }

    public void setGradeName(String gradeName) {
        this.gradeName = gradeName;
    }

    public String getGradeTution() {
        return gradeTution;
    }

    public void setGradeTution(String gradeTution) {
        this.gradeTution = gradeTution;
    }

    public String getSchoolId() {
        return schoolId;
    }

    public void setSchoolId(String schoolId) {
        this.schoolId = schoolId;
    }

    public String getIsVacancy() {
        return isVacancy;
    }

    public void setIsVacancy(String isVacancy) {
        this.isVacancy = isVacancy;
    }

    public String getTotalFee() {
        return totalFee;
    }

    public void setTotalFee(String totalFee) {
        this.totalFee = totalFee;
    }
}