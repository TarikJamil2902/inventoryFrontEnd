import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  companyInfo = {
    name: 'SNOWTEX GROUP',
    description: `Snowtex has been setup by a highly educated and well-experienced entrepreneur
      with an excellent track record of Industrial Management, International Marketing as well as
      Local Business. It is managed by highly qualified and experienced personnel. Skilled workers
      are employed for its manufacturing units. The company’s success comes from its practice of
      maintaining the standard of quality, time schedule, and meeting the buyer’s needs.`,
    turnover: '$300 million',
    employees: '20,000+ family members',
    image: 'assets/aboutus.jpg'
  };

  managingDirector = {
    name: 'MR. S.M KHALED',
    description: `Mr. S.M Khaled, the honorable Managing Director of Snowtex completed his Master's
      degree from the University of Dhaka in Management with distinction. He started his journey in
      the apparel industry by establishing his own buying house named “Snowtex” in 2000. Based on
      his honesty, sincerity, commitment, and hard labor, he expanded the business significantly.`,
    image: 'assets/managingdirector.jpg',
    socialLinks: [
      { icon: 'fa-facebook', url: 'https://facebook.com' },
      { icon: 'fa-google-plus', url: 'https://plus.google.com' },
      { icon: 'fa-twitter', url: 'https://twitter.com' },
      { icon: 'fa-instagram', url: 'https://instagram.com' },
      { icon: 'fa-linkedin', url: 'https://linkedin.com' }
    ]
  };

  managementTeam = [
    {
      name: 'MD. MOSHARROF HOSSAIN',
      position: 'Director, Group Operation',
      image: 'assets/team1.jpg'
    },
    {
      name: 'S. G. PARTHO',
      position: 'Director, Merchandising',
      image: 'assets/team2.jpg'
    },
    {
      name: 'ENGR. MD. TOFAZZAL HOSSAIN',
      position: 'Director, Operation',
      image: 'assets/team3.png'
    },
    {
      name: 'MD. REZAUL KARIM (JEWEL)',
      position: 'Director, Consumption',
      image: 'assets/team4.png'
    }
  ];
}
