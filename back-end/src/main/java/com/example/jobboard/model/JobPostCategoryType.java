package com.example.jobboard.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class JobPostCategoryType {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(unique = true)
    private String name;

    @ManyToMany(cascade = CascadeType.PERSIST)
    private Set<JobPost> jobPosts = new HashSet<>();

    public JobPostCategoryType() {
    }

    public JobPostCategoryType(String name) {
        this.name = name;
    }
}
