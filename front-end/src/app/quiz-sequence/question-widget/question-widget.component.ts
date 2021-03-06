import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/models/question.model';
import { Quiz } from 'src/models/quiz.model';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/services/quiz.service';

@Component({
  selector: 'app-question-widget',
  templateUrl: './question-widget.component.html',
  styleUrls: ['./question-widget.component.scss']
})
export class QuestionWidgetComponent implements OnInit {
  quiz : Quiz;
  questions: Question[];

  /* @Output()
  answerSelected: EventEmitter<boolean> = new EventEmitter<boolean>();*/

  constructor(private route: ActivatedRoute, public quizService: QuizService) {
    this.quizService.quizSelected$.subscribe((quiz) => {
      this.quiz = quiz
      if(quiz.questions) this.questions = quiz.questions;
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(id);
  }

}
