package com.example.jobboard.model;

import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

@Entity
public class JobPostApplication {

    private final String PATH = "D:\\Mains\\University\\05.InformaticsV\\project_JobBoard\\database\\cvs\\";

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    private JobPost jobPost;

//    @ManyToOne
//    @Nullable
//    private Profile profile;

    private String firstName;

    private String lastName;

    private String email;

    private boolean favoured;

    private String cvFilePath;

    public JobPostApplication() {
    }

    public JobPostApplication(Long id, JobPost jobPost, String firstName, String lastName, String email, boolean favoured, MultipartFile cvFile) {
        this.id = id;
        this.jobPost = jobPost;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.favoured = favoured;
        this.cvFilePath = uploadImage(cvFile);
    }

    public Long getId() {
        return id;
    }

    public JobPost getJobPost() {
        return jobPost;
    }

//    public Profile getProfile() {
//        return profile;
//    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public boolean isFavoured() {
        return favoured;
    }

    public String getCvFilePath() {
        return this.cvFilePath;
    }

    public void setId(Long applicationId) {
        this.id = applicationId;
    }

    public void setJobPost(JobPost jobPost) {
        this.jobPost = jobPost;
    }

//    public void setProfile(Profile profile) {
//        this.profile = profile;
//    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setFavoured(boolean favoured) {
        this.favoured = favoured;
    }

    public void setCvFilePath(MultipartFile cvFile) {
        this.cvFilePath = uploadImage(cvFile);
    }

    public String uploadImage(MultipartFile file) {
        String fullPath = PATH+file.getOriginalFilename();
        try {
            file.transferTo(new File(fullPath));
        } catch (IOException e) {
            e.printStackTrace();
        }
        return fullPath;
    }

    public byte[] downloadImage() throws IOException{
        String fullPath = PATH + this.cvFilePath;
        return Files.readAllBytes(new File(fullPath).toPath());
    }
}
