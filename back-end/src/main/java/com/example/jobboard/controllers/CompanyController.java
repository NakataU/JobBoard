package com.example.jobboard.controllers;

import com.example.jobboard.model.Company;
import com.example.jobboard.services.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;


@RestController
@RequestMapping("/companies")
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    @GetMapping("/{id}")
    public Optional<Company> getCompanyById(@PathVariable Long id){
        return companyService.findCompanyById(id);
    }

    @GetMapping("/all")
    private Collection<Company> getAll(){
        return companyService.findAllCompanies();
    }

    @PostMapping("/add")
    public void addCompany(@RequestBody Company company){
        companyService.saveCompanyToDb(company);
    }

    @PutMapping("/update/{companyId}")
    public Optional<Company> updateCompany(@PathVariable("companyId") Long companyId, @RequestBody Company newCompany) {
        return companyService.findCompanyById(companyId)
                .map((company) -> {
                    company.setName(newCompany.getName());
                    company.setEmail(newCompany.getEmail());
                    company.setPhoneNumber(newCompany.getPhoneNumber());
                    company.setCity(newCompany.getCity());
                    company.setAddress(newCompany.getAddress());
                    company.setWebsite(newCompany.getWebsite());
                    company.setDescription(newCompany.getDescription());
                    company.setPassword(newCompany.getPassword());
                    company.setImageUrl(newCompany.getImageUrl());
                    companyService.saveCompanyToDb(company);
                    return company;
                });
    }
    @GetMapping("/ByEmail/{email}")
    public Optional<Company> getCompanyByEmail(@PathVariable String email){
        return companyService.findCompanyByEmail(email);
    }
}
