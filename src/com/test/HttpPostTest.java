package com.test;

import com.alibaba.fastjson.JSONObject;
import org.apache.http.Consts;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicHeader;
import org.apache.http.protocol.HTTP;
import org.apache.http.util.EntityUtils;

import java.io.*;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.List;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

public class HttpPostTest
{
    public void testPostBak(String urlStr)
    {
        OutputStreamWriter out = null;
        BufferedReader in = null;
        try {
            URL url = new URL(urlStr);
            URLConnection con = url.openConnection();
            con.setDoOutput(true);
            con.setDoInput(true);
            con.setRequestProperty("Pragma:", "no-cache");
            con.setRequestProperty("Cache-Control", "no-cache");
            con.setRequestProperty("Content-Type", "text/pain;charset=UTF-8");

            out = new OutputStreamWriter(con.getOutputStream());
            String strOut = getEricssonParas();
            out.write(strOut);
            out.flush();
            out.close();
            in = new BufferedReader(new InputStreamReader(con.getInputStream()));
            String line = "";
            for (line = in.readLine(); line != null; line = in.readLine())
                System.out.println(line);
        }
        catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                if (out != null)
                    out.close();
                if (in != null)
                    in.close();
            } catch (IOException ex) {
                ex.printStackTrace();
            }
        }
    }

    public void testPost(String urlStr){
        CloseableHttpClient closeHttpClient = HttpClients.createDefault();
        CloseableHttpResponse httpResponse = null;
        //发送Post请求
        HttpPost httpPost = new HttpPost(urlStr);
        //设置Post参数
        List<NameValuePair> params = new ArrayList<NameValuePair>();
/*        params.add(new BasicNameValuePair("current_page", "1"));
        params.add(new BasicNameValuePair("pageSize", "20"));
        params.add(new BasicNameValuePair("opTime", "20170824"));
        params.add(new BasicNameValuePair("opType", "day"));
        params.add(new BasicNameValuePair("ifOk", "OK"));*/
/*        params.add(new BasicNameValuePair("oaType", "4"));
        params.add(new BasicNameValuePair("taskId", "39"));
        params.add(new BasicNameValuePair("filterExpr", "taskId like '%%'"));
        params.add(new BasicNameValuePair("beginD", "2017-08-23"));
        params.add(new BasicNameValuePair("beginH", "15:00:00"));
        params.add(new BasicNameValuePair("endD", "2017-08-23"));
        params.add(new BasicNameValuePair("endH", "15:30:00"));
        params.add(new BasicNameValuePair("area", getEricssonParas()));*/
        try {
            //转换参数并设置编码格式
            httpPost.setEntity(new UrlEncodedFormEntity(params, Consts.UTF_8));
            //执行Post请求 得到Response对象
            httpResponse = closeHttpClient.execute(httpPost);
            //httpResponse.getStatusLine() 响应头信息
            System.out.println(httpResponse.getStatusLine());
            //返回对象 向上造型
            HttpEntity httpEntity = httpResponse.getEntity();
            if(httpEntity != null){
                //响应输入流
                InputStream is = httpEntity.getContent();
                //转换为字符输入流
                BufferedReader br = new BufferedReader(new InputStreamReader(is, Consts.UTF_8));
                String line = null;
                while((line=br.readLine())!=null){
                    System.out.println(line);
                }
                //关闭输入流
                is.close();
            }
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        } catch (ClientProtocolException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }finally{
            if(httpResponse != null){
                try {
                    httpResponse.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            if(closeHttpClient != null){
                try {
                    closeHttpClient.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    public void testPostJson(String urlStr) throws IOException {
        HttpPost httpPost = new HttpPost(urlStr);
        httpPost.addHeader(HTTP.CONTENT_TYPE, APPLICATION_JSON);
        httpPost.setHeader("Accept", "application/json");
        CloseableHttpClient client = HttpClients.createDefault();
        String strBody = getEricssonParas();
        StringEntity entity = new StringEntity(strBody);
        entity.setContentEncoding("UTF-8");
        entity.setContentType(APPLICATION_JSON);
        entity.setContentEncoding(new BasicHeader(HTTP.CONTENT_TYPE, APPLICATION_JSON));
        httpPost.setEntity(entity);
        HttpResponse resp = client.execute(httpPost);
        System.out.println(resp.getStatusLine().getStatusCode());
        HttpEntity he = resp.getEntity();
        String respContent = EntityUtils.toString(he,"UTF-8");
        JSONObject json = JSONObject.parseObject(respContent);
        System.out.println(json.toJSONString());
    }

    private String getXmlInfo() {
        StringBuilder sb = new StringBuilder();
        sb.append("<?xml version='1.0' encoding='UTF-8'?>").append("<ufinterface>").append("<basdoc id=\"GUOYINGAO\">").append("<basdoc_head>").append("<user_code> test1 </user_code>").append("<user_name> 哇哈哈1 </user_name>").append("<pk_deptdoc> 31455600 </pk_deptdoc>").append("<postname> 测试岗位1 </postname>").append("<email>test1@ln.chinamobile.com</email>").append("<firsttel >136444444 </firsttel>").append("</basdoc_head>").append("</basdoc>").append("</ufinterface>");
        return sb.toString();
    }

    private String getEricssonParas() {
        //格式:[[lac|ci],[lac|ci],[lac|ci]...]
        //String strReV = "[[16793|10362],[16515|40146],[16886|13072],[16696|42367],[16654|13172]]";
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("schoolName", "test_school_1");
        jsonObject.put("schoolLocation", "North");
        jsonObject.put("schoolKmsToCity", "1");
        jsonObject.put("schoolCommissionProportion", "10");
        jsonObject.put("schoolLanguage", "1");
        jsonObject.put("schoolType", "1");
        jsonObject.put("schoolSexType", "3");
        return jsonObject.toJSONString();
    }

    public static void main(String[] args) throws IOException {
//        String url = "http://10.68.81.166:8091/biOpenApi/rest/ericsson/realTimeMarketStream/1/null/" + URLEncoder.encode("imsi != ''", "UTF-8");
        String url = "http://localhost:8080/aaie_server/rest/SchoolGradeController/addSchool";
        new HttpPostTest().testPostJson(url);

/*        String url = "http://10.68.81.150:19527/ocsp/v1/api/events";
        new HttpPostTest().testPost(url);*/



//        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
//        OpenApiInterImpl openApiDao = (OpenApiInterImpl) context.getBean("openApiDao");

/*        String encoding="GBK";
        File file=new File("D:\\test.dat");
        if(file.isFile() && file.exists()){ //判断文件是否存在
            InputStreamReader read = new InputStreamReader(new FileInputStream(file),encoding);//考虑到编码格式
            BufferedReader bufferedReader = new BufferedReader(read);
            String lineTxt = null;
            while((lineTxt = bufferedReader.readLine()) != null){
                System.out.println(lineTxt);
            }
            read.close();
        }else{
            System.out.println("找不到指定的文件");
        }*/
    }
}