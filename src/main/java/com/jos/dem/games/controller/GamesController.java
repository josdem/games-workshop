package com.jos.dem.games.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import reactor.core.publisher.Mono;

@Controller
public class GamesController {

  @GetMapping("/")
  public Mono<String> index() {
    return Mono.just("index");
  }

  @GetMapping("/behugu")
  public Mono<String> behugu() {
    return Mono.just("behugu");
  }

  @GetMapping("/giphy")
  public Mono<String> giphy() {
    return Mono.just("giphy");
  }

  @GetMapping("/crecol")
  public Mono<String> crecol() {
    return Mono.just("crecol");
  }

  @GetMapping("/guenum")
  public Mono<String> guenum() {
    return Mono.just("guenum");
  }
}
