import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '../../shared/material.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  home(){
    this.router.navigateByUrl('/home')
  }
}
