package com.example.jobboard.repos;

import com.example.jobboard.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {
    Optional<Company> findCompanyById(Long id);
    Optional<Company> findCompanyByEmail(String email);
}
