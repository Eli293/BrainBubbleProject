package com.example.brainbubbleproject.entity;

import com.example.brainbubbleproject.request.CloudRequest;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="clouds")
@Getter
@Setter
@NoArgsConstructor
public class Cloud {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false)
    private String type;
    @Column(nullable = false)
    private String color;

    public Cloud(CloudRequest cloudRequest){
        type = cloudRequest.getType();
        color = cloudRequest.getColor();
    }

}
