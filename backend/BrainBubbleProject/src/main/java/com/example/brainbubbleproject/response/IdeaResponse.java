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
    //private CloudResponse cloudType;

    public IdeaResponse(Idea idea){
        id = Idea.getId();
        ideaDesc = Idea.getIdeaDesc();
        //cloud = new CloudResponse(Idea.getCloud());
    }
}
