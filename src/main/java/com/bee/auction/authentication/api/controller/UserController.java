package com.bee.auction.authentication.api.controller;

import com.bee.auction.UrlConstants;
import com.bee.auction.authentication.model.User;
import com.bee.auction.authentication.service.UserService;
import com.bee.auction.authentication.status.AuthenticationToken;
import com.bee.auction.authentication.status.RegisterResponseMsg.RegisterStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.logging.Logger;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    private static Logger log = Logger.getLogger(UserController.class.getName());

    @RequestMapping(value = UrlConstants.REGISTER_URL, method = RequestMethod.POST)
    public RegisterStatus register(@RequestBody User user) {

        return userService.register(user);
    }

    @RequestMapping(value = UrlConstants.LOGIN_URL, method = RequestMethod.POST)
    public AuthenticationToken login(@RequestBody User user, HttpSession httpSession) throws AuthenticationException{

        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword());
        AuthenticationToken authenticationToken = new AuthenticationToken();

        try {
            Authentication authentication = authenticationManager.authenticate(token);
            SecurityContextHolder.getContext().setAuthentication(authentication);
            httpSession.setAttribute(HttpSessionSecurityContextRepository.SPRING_SECURITY_CONTEXT_KEY, SecurityContextHolder.getContext());
            User authUser = userService.findByEmail(user.getEmail());
            authenticationToken = new AuthenticationToken(authUser.getEmail(), authUser.getName(), authUser.getRoles(), httpSession.getId(), true);
        } catch (Exception e) {
            authenticationToken.setAuth(false);
            e.printStackTrace();
        } finally {
            return authenticationToken;
        }

    }
}
