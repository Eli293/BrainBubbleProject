package com.example.brainbubbleproject.repository;
import com.example.brainbubbleproject.entity.Idea;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IdeaRepository extends CrudRepository<Idea, Long> {
    public List<Idea> findAllbyIdea(String Idea);

}
