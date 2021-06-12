package com.jos.dem.games;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.reactive.server.WebTestClient;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class GamesControllerTest {

  @Autowired private WebTestClient webTestClient;

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
}
