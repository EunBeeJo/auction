package com.bee.auction.authentication.service;

import com.bee.auction.authentication.model.User;
import com.bee.auction.authentication.status.RegisterResponseMsg.RegisterStatus;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService{

    RegisterStatus register(User user);

}
