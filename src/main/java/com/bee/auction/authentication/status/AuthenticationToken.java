package com.bee.auction.authentication.status;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collection;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthenticationToken {
    private String email;
    private String name;
    private Collection authorities;
    private String token;
    private boolean isAuth;
}
