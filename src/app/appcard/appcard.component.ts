import { Component, Input } from '@angular/core';
import { Empleado } from '../interfaces/Empleado';

@Component({
  selector: 'appcard',
  templateUrl: './appcard.component.html',
  styleUrls: ['./appcard.component.css']
})
export class AppcardComponent {

@Input() empleado!: Empleado; 

constructor() {}
}
