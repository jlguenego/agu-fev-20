import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz.service';
import { validateTrim } from 'src/app/validators/trim';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  f = new FormGroup({
    name: new FormControl('toto', [
      validateTrim,
      Validators.maxLength(20),
    ]),
  });
  constructor(private router: Router, private quizz: QuizzService) {}

  ngOnInit(): void {}

  submit() {
    console.log('submit');
    this.quizz.create(this.f.value.name);
    this.router.navigateByUrl('/setup');
  }
}
