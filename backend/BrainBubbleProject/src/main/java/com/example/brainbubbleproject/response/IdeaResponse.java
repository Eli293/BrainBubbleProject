package com.example.brainbubbleproject.response;

import com.example.brainbubbleproject.entity.Idea;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class IdeaResponse {

    private long id;
    private String ideaDesc;
    private CloudResponse cloud;

    public IdeaResponse(Idea idea){
        id = idea.getId();
        ideaDesc = idea.getIdeaDesc();
        cloud = new CloudResponse(idea.getCloud());
    }
}
