package com.example.brainbubbleproject.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CloudRequest {
    @NotBlank
    private String type;
    @NotBlank
    private String color;
}
