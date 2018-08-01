package com.seaboxdata.web.pattern;

import com.seaboxdata.core.base.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by cc on 2018/7/30.
 */
@Controller
@RequestMapping("/pattern")
public class PatternController extends BaseController {

    /**
     * 首页-储量
     */
    @RequestMapping
    public String index(ModelMap map){
        return "page/pattern/index";
    }
    /**
     * 供给
     */
    @RequestMapping
    public String supply(ModelMap map){
        return "page/pattern/supply";
    }
    /**
     * 需求
     */
    @RequestMapping
    public String require(ModelMap map){
        return "page/pattern/require";
    }
    /**
     * 库存
     */
    @RequestMapping
    public String store(ModelMap map){
        return "page/pattern/store";
    }
}
