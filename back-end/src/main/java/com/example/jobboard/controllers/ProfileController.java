package com.example.jobboard.controllers;

import com.example.jobboard.model.Profile;
import com.example.jobboard.services.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/profiles")
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    @GetMapping("/{id}")
    public Optional<Profile> getProfileById(@PathVariable Long id){
        return profileService.findProfileById(id);
    }

    @GetMapping("/all")
    private Collection<Profile> getAll(){
        return profileService.findAllProfiles();
    }

    @GetMapping("/byEmail/{email}")
    public Optional<Profile> getProfileByEmail(@PathVariable String email){
        return profileService.findProfileByEmail(email);
    }

    @PostMapping("/add")
    public void addProfile(@RequestBody Profile profile){
        profileService.saveProfileToDb(profile);
    }

    @PutMapping("/update/{profileId}")
    public Optional<Profile> updateProfile(@PathVariable("profileId") Long profileId, @RequestBody Profile newProfile) {
        return profileService.findProfileById(profileId)
                .map((profile) -> {
                    profile.setFirstName(newProfile.getFirstName());
                    profile.setLastName(newProfile.getLastName());
                    profile.setEmail(newProfile.getEmail());
                    profile.setPassword(newProfile.getPassword());
                    profileService.saveProfileToDb(profile);
                    return profile;
                });

    }



 /*   @PatchMapping("/changePassword/{profileId}")
    public Optional<Profile> changePassword(@PathVariable("profileId") Long profileId ){

    }*/
}
