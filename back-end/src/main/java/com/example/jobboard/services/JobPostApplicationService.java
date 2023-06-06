package com.example.jobboard.services;

import com.example.jobboard.model.JobPostApplication;
import com.example.jobboard.repos.JobPostApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.List;
import java.util.Optional;

@Service
public class JobPostApplicationService {

    @Autowired
    private JobPostApplicationRepository applicationRepository;

    public List<JobPostApplication> getAll() {
        return this.applicationRepository.findAll();
    }

    public JobPostApplication getById(Long id) {
        Optional<JobPostApplication> application = this.applicationRepository.findById(id);
        if (application.isPresent()) {
            return application.get();
        } else {
            return null;
        }
    }

    public void save(JobPostApplication application) {
        this.applicationRepository.saveAndFlush(application);
    }

}
