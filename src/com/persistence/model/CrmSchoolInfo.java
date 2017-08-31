package com.persistence.model;

import javax.ws.rs.FormParam;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "crmSchoolInfo")
public class CrmSchoolInfo {

    @FormParam("schoolId")
    private String schoolId;

    @FormParam("schoolName")
    private String schoolName;

    @FormParam("schoolYear")
    private String schoolYear;

    @FormParam("schoolCommissionProportion")
    private String schoolCommissionProportion;

    @FormParam("schoolTution")
    private String schoolTution;

    @FormParam("schoolState")
    private String schoolState;

    @FormParam("schoolLocation")
    private String schoolLocation;

    @FormParam("schoolYearLevel")
    private String schoolYearLevel;

    @FormParam("schoolType")
    private String schoolType;

    @FormParam("schoolSexType")
    private String schoolSexType;

    @FormParam("schoolLanguage")
    private String schoolLanguage;

    @FormParam("schoolKmsToCity")
    private String schoolKmsToCity;

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

    public String getSchoolId() {
        return schoolId;
    }

    public void setSchoolId(String schoolId) {
        this.schoolId = schoolId;
    }

    public String getSchoolName() {
        return schoolName;
    }

    public void setSchoolName(String schoolName) {
        this.schoolName = schoolName;
    }

    public String getSchoolYear() {
        return schoolYear;
    }

    public void setSchoolYear(String schoolYear) {
        this.schoolYear = schoolYear;
    }

    public String getSchoolCommissionProportion() {
        return schoolCommissionProportion;
    }

    public void setSchoolCommissionProportion(String schoolCommissionProportion) {
        this.schoolCommissionProportion = schoolCommissionProportion;
    }

    public String getSchoolTution() {
        return schoolTution;
    }

    public void setSchoolTution(String schoolTution) {
        this.schoolTution = schoolTution;
    }

    public String getSchoolState() {
        return schoolState;
    }

    public void setSchoolState(String schoolState) {
        this.schoolState = schoolState;
    }


    public String getSchoolLanguage() {
        return schoolLanguage;
    }

    public void setSchoolLanguage(String schoolLanguage) {
        this.schoolLanguage = schoolLanguage;
    }

    public String getSchoolSexType() {
        return schoolSexType;
    }

    public void setSchoolSexType(String schoolSexType) {
        this.schoolSexType = schoolSexType;
    }
}