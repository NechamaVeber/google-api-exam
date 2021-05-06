import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { New } from '../model/New.model';
import { NewesService } from '../newes.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  @Output() newId:EventEmitter<any> = new EventEmitter();
newsList:New[]=[];
newObj:New | undefined;
  constructor(private newesService:NewesService) { }

  ngOnInit(): void {
   
this.newesService.getTopicList().subscribe((res:any)=>{
  debugger
  this.newsList=res;
})
  }

  getNewContent(id:number){
    this.newesService.getNewContent(id).subscribe((res:any)=>{
      debugger
      // this.newObj=res;
      this.newId.emit(res);
    })
    // this.newObj= new NewesService;

  }

}
