package com.example.jobboard.services;

import com.example.jobboard.model.JobPost;
import com.example.jobboard.repos.JobPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;
import java.util.logging.Level;
import java.util.logging.Logger;

@Service
public class JobPostService {

    @Autowired
    private JobPostRepository jobPostRepository;

    private final static Logger LOGGER = Logger.getLogger(Logger.GLOBAL_LOGGER_NAME);

    public void saveJobPostToDb(JobPost jobPost) {
        try {
            jobPostRepository.saveAndFlush(jobPost);
        } catch (Exception e) {
            System.out.println(String.format("JobPost %s with id %s could not be saved in Database", jobPost.getTitle(), jobPost.getId()));
            LOGGER.log(Level.SEVERE, String.format("JobPost {} with id {} could not be saved in Database", jobPost.getTitle(), jobPost.getId()));
        }
    }

    public void updateJobPost(JobPost newJobPost) { // they have to be with the same id
        try {
            if (jobPostRepository.existsById(newJobPost.getId())) {
                JobPost oldJobPost = jobPostRepository.getReferenceById(newJobPost.getId());
                oldJobPost.setCompany(newJobPost.getCompany());
                oldJobPost.setDate(newJobPost.getDate());
                oldJobPost.setDescription(newJobPost.getDescription());
                oldJobPost.setTitle(newJobPost.getTitle());
                jobPostRepository.saveAndFlush(newJobPost);
            } else {
                LOGGER.log(Level.SEVERE, "There is no job post with id:{}.", newJobPost.getId());
            }
        } catch (Exception e) {
            LOGGER.log(Level.WARNING, "The job post {} could not be updated!", newJobPost.getTitle());
        }
    }

    public JobPost findJobPostById(Long id) {
        Optional<JobPost> jobPost = jobPostRepository.findJobPostsById(id);
        if (jobPost.isPresent()) {
            return jobPost.get();
        } else {
            return null;
        }
    }

    public Collection<JobPost> findAllJobPosts() {
        return jobPostRepository.findAll();
    }

    public void deleteJobPostById(Long id) {
        try {
            jobPostRepository.deleteById(id);
        }
        catch (Exception e) {
            System.out.println("Job post with id: " + id + " could not be deleted!");
        }
    }

}

