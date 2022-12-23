package com.example.brainbubbleproject.entity;

import com.example.brainbubbleproject.request.IdeaRequest;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import javax.persistence.*;

public class Idea {


    @Entity
    @Table(name = "ideas")
    @Getter
    @Setter
    @NoArgsConstructor
    public class Idea {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private long id;
        @Column(name="idea_description", nullable = false)
        private String firstName;
        @OneToOne(cascade = CascadeType.ALL, optional = false)
        private Address address;
        public Idea(IdeaRequest ideaRequest){
            ideaDescription = ideaRequest.getDesc();

            address = new Address(teacherRequest.getAddress());
        }
    }
}
