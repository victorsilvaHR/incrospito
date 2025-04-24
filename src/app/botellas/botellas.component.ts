import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { botellas } from '../utils/botellas';

@Component({
  selector: 'app-botellas',
  templateUrl: './botellas.component.html',
  styleUrls: ['./botellas.component.scss']
})
export class BotellasComponent implements OnInit {

  botellasData = botellas;
  botella: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.botella = this.botellasData.find(b => b.id === id);
  }

}
