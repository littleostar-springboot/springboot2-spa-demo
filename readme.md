
---

- https://stackoverflow.com/questions/40769200/configure-spring-boot-for-spa-frontend
    - https://spring.io/guides/tutorials/spring-security-and-angular-js/
    - https://spring.io/blog/2015/05/13/modularizing-the-client-angular-js-and-spring-security-part-vii
        - https://spring.io/blog/2015/05/13/modularizing-the-client-angular-js-and-spring-security-part-vii#using-ldquo-natural-rdquo-routes

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

- create module public -> angular;
- build angular get app, put app to springboot resources/public floder;
- use 1 controller, always access http://localhost:8080/;
- angular router work fine!

- resources/public
    - index.html
    - main.js
    - ...

---
end
