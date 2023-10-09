import { Component } from '@angular/core';
import { SharedUsers } from 'src/types';
@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css'],
})
export class SharedComponent {
  options: SharedUsers[];
}
