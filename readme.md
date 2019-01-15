
---

https://stackoverflow.com/questions/40769200/configure-spring-boot-for-spa-frontend

---

spring boot angular router, work fine. ( use 1 controller )

```java
@Controller
public class RouteController {
    @RequestMapping(value = "/{path:[^\\.]*}")
    public String redirect() {
        return "forward:/";
    }
}
```

---
end
