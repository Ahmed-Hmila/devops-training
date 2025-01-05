import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UniversiteService } from 'src/app/services/universite.service';

@Component({
  selector: 'app-add-universite',
  templateUrl: './add-universite.component.html',
  styleUrls: ['./add-universite.component.css']
})
export class AddUniversiteComponent {
  universite = { nomUniversite: '', adresse: '' }; // Adjust based on your Universite model

  constructor(private universiteService: UniversiteService, private router: Router) {}

  addUniversite(): void {
    this.universiteService.addUniversite(this.universite).subscribe(() => {
      this.router.navigate(['/universite-list']);
    });
  }
}
