package com.example.jobboard.controllers;

import com.example.jobboard.model.JobPostApplication;
import com.example.jobboard.services.JobPostApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/applications")
public class JobPostApplicationController {

    @Autowired
    private JobPostApplicationService applicationService;

    @GetMapping("/{id}")
    public JobPostApplication getById(@PathVariable Long id) {
        return this.applicationService.getById(id);
    }

    @GetMapping
    public List<JobPostApplication> getAll() {
        return this.applicationService.getAll();
    }

    @PostMapping
    public void save(@RequestBody JobPostApplication application) {
        this.applicationService.save(application);
    }
}
