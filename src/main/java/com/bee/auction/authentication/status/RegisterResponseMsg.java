package com.bee.auction.authentication.status;

import com.fasterxml.jackson.annotation.JsonFormat;

public class RegisterResponseMsg {

    @JsonFormat(shape = JsonFormat.Shape.OBJECT)
    public enum RegisterStatus {
        SUCCESS("success", 0),
        BAD_USERNAME("bad_username", 1),
        BAD_PASSWORD("bad_password", 2),
        BAD_EMAIL("bad_email", 3),
        EXIST_USERNAME("exist_username", 4),
        EXIST_EMAIL("exist_email", 5);

        private final String status;
        private final int statusCode;

        RegisterStatus(String status, int statusCode) {
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
