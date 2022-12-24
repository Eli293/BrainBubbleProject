package com.example.brainbubbleproject.request;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class IdeaRequest {
    @NotBlank(message = "add idea")
    private String ideaDesc;
    @NotNull
    @Valid
    private CloudRequest cloud;
}
