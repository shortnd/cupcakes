import { Component, OnInit, Input } from '@angular/core';
import { FileReadServiceService } from 'src/app/services/file-read-service.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  @Input()
  file: string;
  text: string;

  // public elArray: Array<string>;
  public elArray;

  constructor(private fileReadService: FileReadServiceService) {}

  ngOnInit() {
    this.elArray = this.fileReadService.getTextFromFile(
      `app/files/${this.file}.txt`,
      'Basic Cupcake:'
    );
  }
}
