package com.example.brainbubbleproject.response;

import com.example.brainbubbleproject.entity.Cloud;

public class CloudResponse {
    private String type;
    private String color;

    public CloudResponse(Cloud cloud){
        type = cloud.getType();
        color = cloud.getColor();
    }
}
