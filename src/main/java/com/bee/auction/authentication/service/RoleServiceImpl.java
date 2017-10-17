package com.bee.auction.authentication.service;

import com.bee.auction.authentication.model.Role;
import com.bee.auction.authentication.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Objects;

@Service
public class RoleServiceImpl implements RoleService{
    @Autowired
    private RoleRepository roleRepository;

    public static final String USER_ROLE = "USER_ROLE";


    @Override
    public Role getUserRole() {
        Role userRole = roleRepository.findByRole(USER_ROLE);
        if (Objects.isNull(userRole)) {
            userRole = new Role();
            userRole.setRole(USER_ROLE);
            roleRepository.save(userRole);
        }

        return userRole;
    }

    @Override
    public HashSet<Role> getUserRoleToSet() {
        HashSet<Role> roles = new HashSet<>();

        roles.add(getUserRole());
        return roles;
    }
}
