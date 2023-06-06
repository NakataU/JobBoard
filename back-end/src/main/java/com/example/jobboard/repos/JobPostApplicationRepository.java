package com.example.jobboard.repos;

import com.example.jobboard.model.JobPostApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobPostApplicationRepository extends JpaRepository<JobPostApplication, Long> {
}
