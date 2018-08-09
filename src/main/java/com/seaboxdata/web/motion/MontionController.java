package com.seaboxdata.web.motion;

import com.seaboxdata.core.base.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by SongCQ on 2018/8/9.
 */
@Controller
@RequestMapping("/motion")
public class MontionController extends BaseController {

    /**
     * 首页
     * @return
     */
    @RequestMapping
    public String index(ModelMap map){
        return "page/motion/index";
    }

    /**
     * 月度监测
     * @param map
     * @return
     */
    @RequestMapping
    public String mounthReport(ModelMap map){
        return "page/motion/mounthReport";
    }
}
