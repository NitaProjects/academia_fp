// src/app/admin/manage-alumnes/manage-alumnes.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnesService, Alumne } from '../../core/services/alumnes.service';

@Component({
  standalone: true,
  selector: 'app-manage-alumnes',
  imports: [CommonModule],
  templateUrl: './manage-alumnes.component.html',
  styleUrls: ['./manage-alumnes.component.css']
})
export class ManageAlumnesComponent implements OnInit {
  alumnes: Alumne[] = [];

  constructor(private alumnesService: AlumnesService) {}

  ngOnInit(): void {
    this.alumnesService.getAll().subscribe((res) => this.alumnes = res);
  }

  delete(id: number): void {
    this.alumnesService.delete(id).subscribe(() => {
      this.alumnes = this.alumnes.filter(a => a.id !== id);
    });
  }
}
