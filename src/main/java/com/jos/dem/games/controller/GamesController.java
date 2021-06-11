package com.jos.dem.games.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class GamesController {

  @RequestMapping("/")
  public String index() {
    return "index";
  }

  @RequestMapping("/giphy")
  public String giphy() {
    return "giphy";
  }
}
