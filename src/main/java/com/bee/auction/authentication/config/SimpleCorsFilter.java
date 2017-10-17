package com.bee.auction.authentication.config;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class SimpleCorsFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletResponse httpServletResponse = (HttpServletResponse) response;

        httpServletResponse.setHeader("ACCESS-Control-Allow-Origin", "*");
        httpServletResponse.setHeader("ACCESS-Control-Allow-Methods", "POST, GET");
        httpServletResponse.setHeader("ACCESS-Control-Max-Age", "3600");
        httpServletResponse.setHeader("ACCESS-Control-Allow-Headers", "x-auth-token, content-type");

        chain.doFilter(request, httpServletResponse);
    }

    @Override
    public void destroy() {

    }
}
