package com.bee.auction.authentication.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="AUCTION_USER")
public class User {

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "USER_ID")
    Long id;

    @Column(nullable = false)
    String name;

    @Column(nullable = false)
    String email;

    @Column(nullable = false)
    String password;

    @ManyToMany
    @MapsId("ROLE_ID")
    Set<Role> roles;
}
