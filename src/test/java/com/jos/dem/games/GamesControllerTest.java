package com.jos.dem.games;

import static org.junit.jupiter.api.Assertions.assertTrue;

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
        .expectBody(String.class)
        .consumeWith(
            result -> {
              assertTrue(
                  result.getResponseBody().contains("<title>Games Workshop</title>"),
                  "should contain expected title");
            });
  }

  @Test
  @DisplayName("direct to bear human gun game")
  void shouldDirectToBehugu() {
    webTestClient
        .get()
        .uri("/behugu")
        .exchange()
        .expectStatus()
        .isOk()
        .expectBody(String.class)
        .consumeWith(
            result -> {
              assertTrue(
                  result.getResponseBody().contains("<title>Bear Human Gun</title>"),
                  "should contain expected title");
            });
  }

  @Test
  @DisplayName("direct to Giphy game")
  void shouldDirectToGiphyGame() {
    webTestClient
        .get()
        .uri("/giphy")
        .exchange()
        .expectStatus()
        .isOk()
        .expectBody(String.class)
        .consumeWith(
            result -> {
              assertTrue(
                  result.getResponseBody().contains("<title>Giphy Game</title>"),
                  "should contain expected title");
            });
  }

  @Test
  @DisplayName("direct to create a color game")
  void shouldDirectToCreateColorGame() {
    webTestClient
        .get()
        .uri("/crecol")
        .exchange()
        .expectStatus()
        .isOk()
        .expectBody(String.class)
        .consumeWith(
            result -> {
              assertTrue(
                  result.getResponseBody().contains("<title>Create a Color Game</title>"),
                  "should contain expected title");
            });
  }
}
