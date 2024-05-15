import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OverlayComponent } from './overlay/overlay.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, OverlayComponent],
})
export class AppComponent {
  title = 'overlay';
  isShown: boolean = true;
}
