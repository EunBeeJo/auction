package com.bee.auction.authentication.api.controller;

import com.bee.auction.UrlConstants;
import com.bee.auction.authentication.model.User;
import com.bee.auction.authentication.service.UserService;
import com.bee.auction.authentication.status.RegisterResponseMsg.RegisterStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = UrlConstants.REGISTER_URL, method = RequestMethod.POST)
    public RegisterStatus register(@RequestBody User user) {

        return userService.register(user);
    }
}
