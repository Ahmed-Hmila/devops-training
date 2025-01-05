import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UniversiteService } from 'src/app/services/universite.service';

@Component({
  selector: 'app-universite-list',
  templateUrl: './universite-list.component.html',
  styleUrls: ['./universite-list.component.css']
})
export class UniversiteListComponent implements OnInit {
  universites: any[] = []; // Replace with your Universite model

  constructor(private router: Router, private universiteService: UniversiteService) {}

  ngOnInit(): void {
    this.loadUniversites();
  }

  loadUniversites(): void {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

    this.universiteService.getUniversites().subscribe(data => {
      this.universites = data;
      console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb");

      console.log(data);
    });
  }

  navigateToAddUniversite(): void {
    this.router.navigate(['/add-universite']);
  }

  navigateToUpdateUniversite(universiteId: number): void {
    this.router.navigate(['/update-universite', universiteId]);
  }

  navigateToUniversiteDetails(universiteId: number): void {
    this.router.navigate(['/universite-details', universiteId]);
  }

  deleteUniversite(universiteId: number): void {
    if (confirm('Are you sure you want to delete this university?')) {
      this.universiteService.deleteUniversite(universiteId).subscribe(() => {
        this.loadUniversites(); // Reload the list after deletion
      });
    }
  }
}
