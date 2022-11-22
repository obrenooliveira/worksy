import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  curriculum(){
    this.route.navigate(['perfil/curriculo']);
  }

}
