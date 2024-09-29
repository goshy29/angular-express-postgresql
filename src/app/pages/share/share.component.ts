import { Component } from '@angular/core';
import { ShareContentComponent } from "../../components/main/share-content/share-content.component";

@Component({
  selector: 'app-share',
  standalone: true,
  imports: [ShareContentComponent],
  templateUrl: './share.component.html',
  styleUrl: './share.component.css'
})
export class ShareComponent {

}
