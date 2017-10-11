package com.bee.auction;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {
  @RequestMapping(value="/echo", method = RequestMethod.GET)
  public String echo(@RequestParam(value="request", defaultValue="Hello!") String request) {
    return request;
  }
}
