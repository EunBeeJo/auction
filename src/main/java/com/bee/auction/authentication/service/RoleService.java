package com.bee.auction.authentication.service;


import com.bee.auction.authentication.model.Role;

import java.util.HashSet;

public interface RoleService {
    HashSet<Role> getUserRoleToSet();

    Role getUserRole();
}
