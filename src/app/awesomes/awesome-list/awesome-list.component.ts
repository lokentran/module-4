import { AwesomeService } from './../../services/awesome.service';
import { IAwesome } from './../../interfaces/iawesome';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awesome-list',
  templateUrl: './awesome-list.component.html',
  styleUrls: ['./awesome-list.component.css']
})
export class AwesomeListComponent implements OnInit {
  lists;
  constructor(private awesomeService: AwesomeService ) { }

  ngOnInit(): void {
    this.getAll();
    console.log(this.getAll());
  }

  getAll() {
    return this.awesomeService.getAll().subscribe(data=>{
      this.lists = data;
    });
  }

  delete(index) {
    console.log(index);
    const list = this.lists[index];
    if(confirm('Are you sure?')) {
      this.awesomeService.delete(list.id).subscribe(data=>{this.getAll()});
    }

  }
}
