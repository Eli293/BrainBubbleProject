package com.example.brainbubbleproject.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class IdeaRequest {
    @NotBlank (message = "add idea")
    private String ideaDesc;
}
