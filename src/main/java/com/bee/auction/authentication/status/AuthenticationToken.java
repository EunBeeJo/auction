package com.bee.auction.authentication.status;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Collection;

@Data
@AllArgsConstructor
public class AuthenticationToken {
    private String username;
    private Collection authorities;
    private String token;
}
