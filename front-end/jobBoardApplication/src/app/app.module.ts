import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { JobPostingsPageComponent } from './job-postings-page/job-postings-page.component';
import { CompaniesPageComponent } from './companies-page/companies-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JobPostingListComponent } from './job-posting-list/job-posting-list.component';
import { JobPostingDetailsComponent } from './job-posting-details/job-posting-details.component';
import { JobPostingsSearchComponent } from './job-postings-search/job-postings-search.component';
import { HttpClientModule } from '@angular/common/http';
import { ApplyPageComponent } from './apply-page/apply-page.component';
import { ApplyPostingDetailsComponent } from './apply-posting-details/apply-posting-details.component';
import { ApplyFormComponent } from './apply-form/apply-form.component';
import { ApplySuccessPageComponent } from './apply-success-page/apply-success-page.component';
import { CreatePostingSuccessPageComponent } from './create-posting-success-page/create-posting-success-page.component';
import { UpdateProfileSuccessPageComponent } from './update-profile-success-page/update-profile-success-page.component';
import { ChangePasswordSuccessPageComponent } from './change-password-success-page/change-password-success-page.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { PostingCandidatesPageComponent } from './posting-candidates-page/posting-candidates-page.component';
import { PostingCandidateItemComponent } from './posting-candidate-item/posting-candidate-item.component';
import { NoActivePostingsComponent } from './no-active-postings/no-active-postings.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPersonPageComponent } from './registration-person-page/registration-person-page.component';
import { RegistrationCompanyPageComponent } from './registration-company-page/registration-company-page.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import { CompanyProfileMenuComponent } from './company-profile-menu/company-profile-menu.component';
import { UserProfileMenuComponent } from './user-profile-menu/user-profile-menu.component';
import { AddJobPostComponent } from './add-job-post/add-job-post.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UpdateCompanyProfileComponent } from './update-company-profile/update-company-profile.component';
import { CompanyJobPostsDetailsComponent } from './company-job-posts-details/company-job-posts-details.component';
import { CompanyJobPostsListComponent } from './company-job-posts-list/company-job-posts-list.component';
import { CompanyJobPostsPageComponent } from './company-job-posts-page/company-job-posts-page.component';
import { CompaniesListItemComponent } from './companies-list-item/companies-list-item.component';
import { LoginCompanyPageComponent } from './login-company-page/login-company-page.component';
import { ChangeCompanyPasswordComponent } from './change-company-password/change-company-password.component';
import { CompanyJobPostListingPageComponent } from './company-job-post-listing-page/company-job-post-listing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    JobPostingsPageComponent,
    CompaniesPageComponent,
    AboutPageComponent,
    JobPostingListComponent,
    JobPostingDetailsComponent,
    JobPostingsSearchComponent,
    ApplyPageComponent,
    ApplyFormComponent,
    LoginPageComponent,
    RegistrationPersonPageComponent,
    RegistrationCompanyPageComponent,
    ApplyPostingDetailsComponent,
    ApplyFormComponent,
    ApplySuccessPageComponent,
    CreatePostingSuccessPageComponent,
    UpdateProfileSuccessPageComponent,
    ChangePasswordSuccessPageComponent,
    SuccessMessageComponent,
    PostingCandidatesPageComponent,
    PostingCandidateItemComponent,
    NoActivePostingsComponent,
    UpdateProfileComponent,
    ProfileMenuComponent,
    UpdateProfileComponent,
    AddJobPostComponent,
    ProfileMenuComponent,
    CompanyProfileMenuComponent,
    UserProfileMenuComponent,
    ChangePasswordComponent,
    UpdateCompanyProfileComponent,
    CompanyJobPostsDetailsComponent,
    CompanyJobPostsListComponent,
    CompanyJobPostsPageComponent,
    CompaniesListItemComponent,
    LoginCompanyPageComponent,
    ChangeCompanyPasswordComponent,
    CompanyJobPostListingPageComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
