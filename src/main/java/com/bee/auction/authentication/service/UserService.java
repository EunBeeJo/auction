package com.bee.auction.authentication.service;

import com.bee.auction.authentication.model.User;
import com.bee.auction.authentication.status.RegisterResponseMsg.RegisterStatus;

public interface UserService {

    RegisterStatus register(User user);

}
