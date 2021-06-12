package com.jos.dem.games;

import lombok.RequiredArgsConstructor;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.reactive.server.WebTestClient;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@RequiredArgsConstructor(onConstructor_ = @Autowired)
class GamesControllerTest {

  private final WebTestClient webTestClient;

  @Test
  @DisplayName("direct to index")
  void shouldDirectToIndex() {
    webTestClient
        .get()
        .uri("/")
        .exchange()
        .expectStatus()
        .isOk()
        .expectBody(String.class).consumeWith(result ->{
          result.getResponseBody().equals("index");
    });
  }

  @Test
  @DisplayName("direct to bear human gun game")
  void shouldDirectToBehugu() {
    webTestClient
            .get()
            .uri("/")
            .exchange()
            .expectStatus()
            .isOk()
            .expectBody(String.class).consumeWith(result ->{
      result.getResponseBody().equals("behugu");
    });
  }
}
