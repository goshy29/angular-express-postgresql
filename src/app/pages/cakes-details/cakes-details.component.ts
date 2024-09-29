import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cake } from '../../components/main/cakes-content/cake.model';
import { CAKES } from '../../data/cakes';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cakes-details',
  standalone: true,
  imports: [],
  templateUrl: './cakes-details.component.html',
  styleUrl: './cakes-details.component.css'
})
export class CakesDetailsComponent implements OnInit {
  cake: Cake | undefined;

  constructor(private route: ActivatedRoute, private title: Title) {}

  ngOnInit(): void {
    const cakeId = this.route.snapshot.paramMap.get('cakeId') || '';
    this.cake = CAKES.find(c => c.id === cakeId);

    if (this.cake) {
      this.title.setTitle(this.cake.title);
    } else {
      this.title.setTitle('Cake Not Found');
    }
  }
}
