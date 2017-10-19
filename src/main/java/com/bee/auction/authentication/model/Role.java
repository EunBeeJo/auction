package com.bee.auction.authentication.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
public class Role {

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ROLE_ID")
    private Long id;

    @Column(nullable = false)
    private String role;

    @ManyToMany
    @MapsId("USER_ID")
    @JsonIgnore
    private Set<User> users;
}
