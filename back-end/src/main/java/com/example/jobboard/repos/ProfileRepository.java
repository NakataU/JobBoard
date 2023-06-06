package com.example.jobboard.repos;

import com.example.jobboard.model.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProfileRepository extends JpaRepository<Profile,Long> {
    Optional<Profile> findProfileById(Long id);
    Optional<Profile> findProfileByEmail(String email);
}
