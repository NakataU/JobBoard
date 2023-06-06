package com.example.jobboard.services;

import com.example.jobboard.model.Company;
import com.example.jobboard.repos.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;
import java.util.logging.Level;
import java.util.logging.Logger;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepository companyRepository;
    private final static Logger LOGGER =
            Logger.getLogger(Logger.GLOBAL_LOGGER_NAME);

    public void saveCompanyToDb(Company company) {
        try {
            companyRepository.saveAndFlush(company);
        } catch (Exception e) {
            LOGGER.log(Level.SEVERE, "Company {} could not be saved in Database", company.getName());
        }
    }

    public Optional<Company> findCompanyById(Long id) {
        Optional<Company> company = companyRepository.findCompanyById(id);
        if (company.isPresent())
            return Optional.of(company.get());
        else {
            LOGGER.log(Level.WARNING, "Failed to find company in local DB for id: {}", id);
            return null;
        }
    }

    public Collection<Company> findAllCompanies() {
        return companyRepository.findAll();
    }

    public Optional<Company> findCompanyByEmail(String email) {
        Optional<Company> company = companyRepository.findCompanyByEmail(email);
        if (company.isPresent())
            return Optional.of(company.get());
        else {
            LOGGER.log(Level.WARNING, "Failed to find company in local DB for email: {}", email);
            return null;
        }
    }
}