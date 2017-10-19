package com.bee.auction.authentication.service;

import com.bee.auction.authentication.model.User;
import com.bee.auction.authentication.status.AuthenticationToken;
import com.bee.auction.authentication.status.RegisterResponseMsg.RegisterStatus;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;

public interface UserService extends UserDetailsService{

    RegisterStatus register(User user);

    User findByEmail(String email);

    PasswordEncoder passwordEncoder();

}
