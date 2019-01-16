import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  names: string[];
  flags: boolean[];

  constructor() {
    this.names = ['Alice', 'John', 'Corlo', 'Delph', 'Eova'];
    this.flags = [false, false, false, false, false];
  }

  ngOnInit() {
  }

}
