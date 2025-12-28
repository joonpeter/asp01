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
