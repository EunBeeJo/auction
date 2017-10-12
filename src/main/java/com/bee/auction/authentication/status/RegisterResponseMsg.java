package com.bee.auction.authentication.status;

public class RegisterResponseMsg {

    public enum RegisterStatus {
        SUCCESS(0),
        BAD_USERNAME(1),
        BAD_PASSWORD(2),
        BAD_EMAIL(3),
        EXIST_USERNAME(4),
        EXIST_EMAIL(5);

        private final int statusCode;

        RegisterStatus(int statusCode) {
            this.statusCode = statusCode;
        }

        public int getStatusCode() {
            return statusCode;
        }

        public static RegisterStatus getByErrorCode(int statusCode) {
            for (RegisterStatus registerStatus : RegisterStatus.values()) {
                if (registerStatus.getStatusCode() == statusCode)
                    return registerStatus;
            }
            return null;
        }
    }
}
