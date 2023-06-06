package com.example.jobboard.repos;

import com.example.jobboard.model.JobPostCategoryType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobPostCategoryTypeRepository extends JpaRepository<JobPostCategoryType, Long> {
}
