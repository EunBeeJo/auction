package com.bee.auction.authentication.service;

import com.bee.auction.authentication.model.Role;
import com.bee.auction.authentication.model.User;
import com.bee.auction.authentication.repository.RoleRepository;
import com.bee.auction.authentication.repository.UserRepository;
import com.bee.auction.authentication.status.RegisterResponseMsg.RegisterStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Objects;
import java.util.Set;
import java.util.logging.Logger;
import java.util.regex.Pattern;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleService roleService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    private static Logger log = Logger.getLogger(UserService.class.getName());

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public RegisterStatus register(User user) {

        RegisterStatus registerResult = validate(user);

        if (registerResult.equals(RegisterStatus.SUCCESS)) {
            user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));

            user.setRoles(roleService.getUserRoleToSet());
            userRepository.save(user);
        }

        return registerResult;
    }

    private RegisterStatus validate(User user) {
        String namePattern = "^[a-zA-Z0-9]+$";
        String passwordPattern = "^[a-zA-Z0-9~!@#$%^&*()]{8,16}";
        String emailPattern = "^[a-z0-9A-Z_-]*@[a-z0-9A-Z]*.[a-zA-Z.]*$";

        if (!Pattern.matches(namePattern, user.getName())) {
            return RegisterStatus.BAD_USERNAME;
        } else if (!Pattern.matches(passwordPattern, user.getPassword())) {
            return RegisterStatus.BAD_PASSWORD;
        } else if (!Pattern.matches(emailPattern, user.getEmail())) {
            return RegisterStatus.BAD_EMAIL;
        } else if (Objects.nonNull(userRepository.findByName(user.getName()))) {
            return RegisterStatus.EXIST_USERNAME;
        } else if (Objects.nonNull(userRepository.findByEmail(user.getEmail()))) {
            return RegisterStatus.EXIST_EMAIL;
        } else {
            return RegisterStatus.SUCCESS;
        }
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email);

        Set<GrantedAuthority> grantedAuthorities = new HashSet<>();
        for (Role role : user.getRoles()) {
            grantedAuthorities.add(new SimpleGrantedAuthority(role.getRole()));
        }

        return new org.springframework.security.core.userdetails.User(user.getName(), user.getPassword(), grantedAuthorities);
    }

    @Override
    public PasswordEncoder passwordEncoder() {
        return bCryptPasswordEncoder;
    }
}
