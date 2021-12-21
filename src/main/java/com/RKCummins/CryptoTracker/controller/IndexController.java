package com.RKCummins.CryptoTracker.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@CrossOrigin(origins = "http://localhost:3000")
@Controller
public class IndexController {
    @GetMapping("")
    public ModelAndView home(){
        ModelAndView mav = new ModelAndView("index");
        return mav;
    }
}
