package com.example.brainbubbleproject.service;

import com.example.brainbubbleproject.entity.Idea;
import com.example.brainbubbleproject.exception.NotFound;
import com.example.brainbubbleproject.repository.IdeaRepository;
import com.example.brainbubbleproject.request.IdeaRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IdeaService {
    @Autowired
    IdeaRepository ideaRepository;
    //second autowired

    public List<Idea> getAllIdeas(String ideaPar){
        if(ideaPar == null || ideaPar.isEmpty())
            return (List<Idea>) ideaRepository.findAll();

        return ideaRepository.findAllbyIdea(ideaPar);
    }

    public Idea updateIdea(long ideaId, IdeaRequest ideaRequest){
        ideaRepository.findById(ideaId).orElseThrow(()-> new NotFound("Id not found"));

        Idea ideaPut = new Idea(ideaRequest);
        ideaPut.setId(ideaId);
        return ideaRepository.save(ideaPut);
    }

    public Idea addIdea(IdeaRequest ideaRequest){
        Idea savedIdea = ideaRepository.save(new Idea(ideaRequest));
        return savedIdea;
    }

    public void deleteIdea(long ideaId){
        if(ideaRepository.existsById(ideaId))
            ideaRepository.deleteById(ideaId);
        else
            throw new NotFound("Idea not found")
    }
}
