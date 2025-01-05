import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UniversiteService } from 'src/app/services/universite.service';

@Component({
  selector: 'app-update-universite',
  templateUrl: './update-universite.component.html',
  styleUrls: ['./update-universite.component.css']
})
export class UpdateUniversiteComponent implements OnInit {
  universite: any; // Adjust based on your Universite model

  constructor(
    private universiteService: UniversiteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const universityId = Number(id);
    this.universiteService.getUniversiteById(universityId).subscribe(data => {
      this.universite = data;
    });
  }

  updateUniversite(): void {
    this.universiteService.updateUniversite(this.universite).subscribe(() => {
      this.router.navigate(['/universite-list']);
    });
  }
}
