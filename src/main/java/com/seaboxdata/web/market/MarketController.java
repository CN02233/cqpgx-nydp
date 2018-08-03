package com.seaboxdata.web.market;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import com.seaboxdata.core.base.BaseController;

/**
 * Created by cc on 2018/7/31.
 */
@Controller
@RequestMapping("/market")
public class MarketController  extends BaseController {

    /**
     * 首页
     * @return
     */
	@RequestMapping
	public String index(ModelMap map){
	        return "page/market/index";
	    }

	/**
	 * 产品动态
	 * @return
	 */
	@RequestMapping
	public String price(ModelMap map){
		return "page/market/price";
	}
	/**
	 * 金融市场
	 * @return
	 */
	@RequestMapping
	public String finance(ModelMap map){
		return "page/market/finance";
	}
}
