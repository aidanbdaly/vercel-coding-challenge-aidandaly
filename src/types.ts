export const MAIN_TABS = [
  { name: "Company", id: "company" },
  { name: "Employees", id: "employees" },
  { name: "Products", id: "products" },
  { name: "Testimonials", id: "testimonials" },
  { name: "Departments", id: "departments" },
  { name: "Recent News", id: "recent-news" },
] as const;

export const SECONDARY_TABS = [
  { name: "Contact", id: "contact" },
] as const;

export type Tab = (typeof MAIN_TABS[number] | typeof SECONDARY_TABS[number])["id"];

export const isTab = (tab: string): tab is Tab => {
  return MAIN_TABS.some(t => t.id === tab) || SECONDARY_TABS.some(t => t.id === tab);
}

export interface StartupData {
  Company: Company;
  Employees: Employee[];
  Products: Product[];
  Testimonials: Testimonial[];
  Departments: Department[];
  RecentNews: NewsItem[];
  LastGenerated: string;
  DataVersion: string;
}

export interface Company {
  Name: string;
  Founded: string;
  Mission: string;
  Vision: string;
  Headquarters: string;
  Website: string;
  Industry: string;
  Stage: string;
  Metrics: Metrics;
}

export interface Metrics {
  TotalEmployees: number;
  MonthlyActiveUsers: number;
  Revenue: Revenue;
  CustomerSatisfaction: string;
  Funding: Funding;
}

export interface Revenue {
  Monthly: number;
  Annual: number;
  Growth: string;
}

export interface Funding {
  TotalRaised: string;
  LastRound: string;
  Investors: number;
}

export interface Employee {
  EmployeeID: string;
  FirstName: string;
  LastName: string;
  EmailAddress: string;
  PhoneNumber: string;
  Title: string;
  Department: string;
  Location: string;
  StartDate: string;
  Skills: string[];
  Biography: string;
  AvailableForMeeting: boolean;
  LinkedIn: string;
  GitHub: string;
  LastUpdated: string;
  ID: string;
}

export interface Product {
  ProductID: string;
  Name: string;
  Category: string;
  Description: string;
  Features: string[];
  PricingTier: string;
  MonthlyPrice: number;
  LaunchDate: string;
  Status: string;
  TeamLead: Employee;
  LastUpdated: string;
}

export interface Testimonial {
  TestimonialID: string;
  Customer: TestimonialCustomer;
  Content: string;
  Rating: number;
  DateSubmitted: string;
  ProductUsed: string;
  Featured: boolean;
  Verified: boolean;
}

export interface TestimonialCustomer {
  Name: string;
  Title: string;
  Company: string;
  Industry: string;
  CompanySize: string;
  Location: string;
}

export interface Department {
  Name: string;
  HeadCount: number;
  Lead: Employee;
  Budget: number;
  Goals: string[];
}

export interface NewsItem {
  Title: string;
  Date: string;
  Summary: string;
}