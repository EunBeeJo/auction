package com.bee.auction.authentication.repository;

import com.bee.auction.authentication.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long>{
    Role findByRole(String role);
}
