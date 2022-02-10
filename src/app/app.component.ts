import { Component, OnInit } from '@angular/core';

interface IVote {
  title: string;
  link: string;
  voteCount: number;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  votingList: Array<IVote> = [];
  voteObject: IVote;

  constructor() {

  }

  ngOnInit(): void {

  }
}
