package com.jos.dem.games;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class GamesApplicationTest {

  @Test
  @DisplayName("Testing main application")
  void shouldStartGamesApplication() {
    GamesApplication.main(new String[] {});
  }
}
