package com.jos.dem.games.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import reactor.core.publisher.Mono;

@Controller
public class GamesController {

  @RequestMapping("/")
  public Mono<String> index() {
    return Mono.just("index");
  }

  @RequestMapping("/behugu")
  public Mono<String> behugu() {
    return Mono.just("behugu");
  }

  @RequestMapping("/giphy")
  public Mono<String> giphy() {
    return Mono.just("giphy");
  }

  @RequestMapping("/crecol")
  public Mono<String> crecol() {
    return Mono.just("crecol");
  }
}
