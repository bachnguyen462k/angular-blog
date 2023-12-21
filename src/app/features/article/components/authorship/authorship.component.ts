import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article } from '../../../../shared/model/article';

@Component({
  selector: 'app-authorship',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './authorship.component.html',
})
export class AuthorshipComponent {
  @Input() article: Article | undefined;
}
