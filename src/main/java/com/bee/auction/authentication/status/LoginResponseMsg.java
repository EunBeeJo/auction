package com.bee.auction.authentication.status;

import com.fasterxml.jackson.annotation.JsonFormat;

public class LoginResponseMsg {
    @JsonFormat(shape = JsonFormat.Shape.OBJECT)
    public enum LoginStatus {
        SUCCESS("success", 0),
        Login_FAILED("login_failed", 1);

        private final String status;
        private final int statusCode;

        LoginStatus(String status, int statusCode) {
            this.status = status;
            this.statusCode = statusCode;
        }

        public int getStatusCode() {
            return statusCode;
        }

        public String getStatus() {
            return status;
        }
    }
}
