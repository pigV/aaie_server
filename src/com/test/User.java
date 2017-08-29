package com.test;

import javax.ws.rs.FormParam;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Created by Administrator on 2017/8/29 0029.
 */
@XmlRootElement(name = "user")
public class User {
    @FormParam("userName")
    private String userName;

    @FormParam("name")
    private String name;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @FormParam("telephone")
    private String telephone;

    @FormParam("email")
    private String email;
}
