import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
    constructor(private activatedRoute:ActivatedRoute) {

    }
    id!:string;

    ngOnInit(): void {
       this.id =   this.activatedRoute.snapshot.params['id'];
    }
    

    

}
