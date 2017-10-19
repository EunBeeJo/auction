package com.bee.auction.authentication.model;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

public class AuthUser extends User{

    private String name;

    public AuthUser(com.bee.auction.authentication.model.User user) {
        super(user.getEmail(), user.getPassword(), authorities(user.getRoles()));
        this.name = user.getName();
    }

    private static Collection<? extends GrantedAuthority> authorities(Set<Role> userRoles) {
        Set<GrantedAuthority> grantedAuthorities = new HashSet<>();
        for (Role role : userRoles) {
            grantedAuthorities.add(new SimpleGrantedAuthority(role.getRole()));
        }

        return grantedAuthorities;
    }
}
