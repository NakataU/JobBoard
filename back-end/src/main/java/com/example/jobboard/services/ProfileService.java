package com.example.jobboard.services;

import com.example.jobboard.model.Profile;
import com.example.jobboard.repos.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;
import java.util.logging.Level;
import java.util.logging.Logger;

@Service
public class ProfileService {

    @Autowired
    private ProfileRepository profileRepository;
    private final static Logger LOGGER =
            Logger.getLogger(Logger.GLOBAL_LOGGER_NAME);

    public void saveProfileToDb(Profile profile) {
        try {
            profileRepository.saveAndFlush(profile);
        } catch (Exception e) {
            LOGGER.log(Level.SEVERE, "Profile {} could not be saved in Database", profile.getFirstName() + profile.getLastName());
        }
    }

    public Optional<Profile> findProfileByEmail(String email) {
        Optional<Profile> profile = profileRepository.findProfileByEmail(email);
        if (profile.isPresent())
            return Optional.of(profile.get());
        else {
            LOGGER.log(Level.WARNING, "Failed to find profile in local DB for email: {}", email);
            return null;
        }
    }

    public Optional<Profile> findProfileById(Long id) {
        Optional<Profile> profile = profileRepository.findProfileById(id);
        if (profile.isPresent())
            return Optional.of(profile.get());
        else {
            LOGGER.log(Level.WARNING, "Failed to find profile in local DB for id: {}", id);
            return null;
        }
    }

    public Collection<Profile> findAllProfiles() {
        return profileRepository.findAll();
    }

}


