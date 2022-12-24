package com.example.brainbubbleproject.controller;


import com.example.brainbubbleproject.entity.Idea;
import com.example.brainbubbleproject.request.IdeaRequest;
import com.example.brainbubbleproject.response.IdeaResponse;
import com.example.brainbubbleproject.service.IdeaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/ideas")
public class IdeaController {
    @Autowired
    IdeaService ideaService;

    @GetMapping()
    public List<IdeaResponse> getAllIdeas(@RequestParam(required = false) String ideaDesc){
        List<Idea> ideas = ideaService.getAllIdeas(ideaDesc);
        List<IdeaResponse> ideaResponses = new ArrayList<>();

        ideas.forEach(idea ->{
            IdeaResponse ideaResponse = new IdeaResponse(idea);
            ideaResponses.add(new IdeaResponse(idea));
        });
        return ideaResponses;
    }

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public IdeaResponse addIdea(@Valid @RequestBody IdeaRequest ideaRequest){
        Idea savedIdea = ideaService.addIdea(ideaRequest);
        return new IdeaResponse(savedIdea);
    }

    @PutMapping("/{id}")
    public IdeaResponse updateIdea (@PathVariable long id, @Valid @RequestBody IdeaRequest ideaRequest){
        Idea updatedIdea = ideaService.updateIdea(id, ideaRequest);
        return new IdeaResponse(updatedIdea);
    }

    @DeleteMapping("/{id}")
    public void deleteIdea(@PathVariable long id){
        ideaService.deleteIdea(id);}
}
