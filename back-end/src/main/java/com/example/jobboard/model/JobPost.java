package com.example.jobboard.model;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
public class JobPost {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String title;

    @ManyToOne
    private Company company;

    private String city;

    private LocalDate date;

    private String description;

    @ManyToMany(mappedBy = "jobPosts")
    private Set<JobPostCategoryType> categoryTypes = new HashSet<>();

    public JobPost() {
    }

    public JobPost(String title, Company company, LocalDate date, String description, String city) {
        this.title = title;
        this.company = company;
        this.date = date;
        this.description = description;
        this.city = city;
    }

    public void addCategory(JobPostCategoryType type) {
        this.categoryTypes.add(type);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }
}
