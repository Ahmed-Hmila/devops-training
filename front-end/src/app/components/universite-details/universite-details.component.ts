import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UniversiteService } from 'src/app/services/universite.service';

@Component({
  selector: 'app-universite-details',
  templateUrl: './universite-details.component.html',
  styleUrls: ['./universite-details.component.css']
})
export class UniversiteDetailsComponent implements OnInit {
  universite: any; // Adjust based on your Universite model

  constructor(private route: ActivatedRoute, private universiteService: UniversiteService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const universityId = Number(id);
    this.universiteService.getUniversiteById(universityId).subscribe(data => {
      this.universite = data;
    });
  }
}
