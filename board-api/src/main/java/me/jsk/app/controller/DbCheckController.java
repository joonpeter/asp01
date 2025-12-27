package me.jsk.app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.sql.DataSource;
import java.sql.Connection;

@RestController
public class DbCheckController {

    private final DataSource dataSource;

    public DbCheckController(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @GetMapping("/db-check")
    public String check() throws Exception {
        try (Connection conn = dataSource.getConnection()) {
            return "DB CONNECT OK";
        }
    }
}
