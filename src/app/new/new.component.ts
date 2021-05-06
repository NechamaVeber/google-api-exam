import { Component, Input, OnInit } from '@angular/core';
import { New } from '../model/New.model';
import { NewesService } from '../newes.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
@Input() newId:New | undefined;
  constructor(private newesService:NewesService) { }

  ngOnInit(): void {
   
  }

}
