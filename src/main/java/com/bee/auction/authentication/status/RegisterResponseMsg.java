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

        private final String registerStatus;
        private final int registerStatusCode;

        RegisterStatus(String registerStatus, int registerStatusCode) {
            this.registerStatus = registerStatus;
            this.registerStatusCode = registerStatusCode;
        }

        public int getStatusCode() {
            return registerStatusCode;
        }

        public String getStatus() {
            return registerStatus;
        }

    }
}
