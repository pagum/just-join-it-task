export interface JobOffer {
  city: string;
  company_logo_url: string;
  company_name: string;
  company_size: string;
  company_url: string;
  country_code: string;
  employment_type: string;
  experience_level: string;
  id: string;
  latitude: number;
  longitude: number;
  marker_icon: string;
  published_at: string;
  remote: false;
  salary_currency: string;
  salary_from: number;
  salary_to: number;
  skills: Skill[];
  street: string;
  title: string;
}
export interface Skill {
  name: string;
  level: number;
}
export interface MainComponentProps {
  jobOffers?: JobOffer[];
}
