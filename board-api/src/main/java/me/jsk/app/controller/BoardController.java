package me.jsk.app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/board")
public class BoardController {

    @GetMapping("/list")
    public List<Map<String, Object>> list() {

        List<Map<String, Object>> result = new ArrayList<>();

        Map<String, Object> row = new HashMap<>();
        row.put("docNo", 1);
        row.put("title", "첫 번째 글");
        row.put("writer", "admin");
        row.put("regDttm", "2025-12-28");
        row.put("view", 0);

        result.add(row);
        return result;
    }
}
