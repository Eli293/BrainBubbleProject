package com.example.brainbubbleproject.entity;

import com.example.brainbubbleproject.request.IdeaRequest;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

    @Entity
    @Table(name = "ideas")
    @Getter
    @Setter
    @NoArgsConstructor
    public class Idea {
        @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
        private long id;
        @Column(name="idea_description", nullable = false)
        private String ideaDesc;
        @Column
        private boolean clicked = false;
        @OneToOne(cascade = CascadeType.ALL, optional = false)
        private Cloud cloud;
        public Idea(IdeaRequest ideaRequest){
            ideaDesc = ideaRequest.getIdeaDesc();
            clicked = ideaRequest.isClicked();
            cloud = new Cloud(ideaRequest.getCloud());
        }
    }

