import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UfsService, Uf } from '../../core/services/ufs.service';

@Component({
  standalone: true,
  selector: 'app-my-ufs',
  imports: [CommonModule],
  templateUrl: './my-ufs.component.html',
  styleUrls: ['./my-ufs.component.css']
})
export class MyUfsComponent implements OnInit {
  ufs: Uf[] = [];

  constructor(private ufsService: UfsService) {}

  ngOnInit(): void {
    this.ufsService.getAll().subscribe({
      next: (ufs) => {
        this.ufs = ufs;
      },
      error: (err) => {
        console.error('Error al cargar UFs:', err);
      }
    });
  }
}
