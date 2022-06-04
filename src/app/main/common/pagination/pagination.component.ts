import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ArticlesService } from '@app/main/home/articles.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  page: number = 1;
  rows: number = 5;
  @Output() pageOut = new EventEmitter<number>();
  constructor(
    private cdRef: ChangeDetectorRef,
  ) {}

  //Handle the previusPage click
  previusPage = () => {
    let previusPage = this.page -1;
    this.page = previusPage;
    this.pageOut.emit(this.page);
    this.cdRef.detectChanges();
  };
  //Handle the nextPage click
  nextPage = () => {
    let nextPage = this.page + 1;
    this.page = nextPage;
    this.pageOut.emit(this.page);
    this.cdRef.detectChanges();
  };
  //Handle the firstPage click
  firstPage = () => {
    let firstPage = this.page;
    this.page = firstPage;
    this.pageOut.emit(this.page);
    this.cdRef.detectChanges();
  };
  //Handle the secondPage click
  secondPage = () => {
    let secondPage = this.page+ 1;
    this.page = secondPage;
    this.pageOut.emit(this.page);
    this.cdRef.detectChanges();
  };
  //Handle the underLatsPage click
  underLatsPage = () => {
    const underLatsPage = this.page+ 3;
    this.page = underLatsPage;
    // this.total = this.page+4; 
    this.pageOut.emit(this.page);
    this.cdRef.detectChanges();
  };
  //Handle the lastPage click
  lastPage = () => {
    const LatsPage = this.page+ 4;
    this.page = LatsPage;
    // this.total = this.page+5; 
    this.pageOut.emit(this.page);
    this.cdRef.detectChanges();
  };

  ngOnInit(): void {}


}
