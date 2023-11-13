import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RickimortyService } from '../../service/rickimorty.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  providers: [RickimortyService]
})
export class HomePage implements OnInit {

  characters: any[] = [];
  params = {} as any;

  constructor(private service: RickimortyService) { }

  ngOnInit() {
    this.params.page = 0;
    this.getCharacters();
  }

  getCharacters(event?: any){
    this.params.page++;
    // console.log(this.params);
    this.service.getCharacters(this.params).subscribe({
      next: (data: any) => {
        console.log(data);
        this.characters.push(...data.results);
        if(event){
          event.target.complete();
        }
      },
      error: (error: any) => {
        console.log(error);
        if(event){
          event.target.complete();
        }
      }
    })
  }

  shearchCharacters(event?: any){
    this.params.page = 1;
    // console.log(this.params);
    this.service.getCharacters(this.params).subscribe({
      next: (data: any) => {
        this.characters = data.results;
      },
      error: (error: any) => {

      }
    })
  }

}
