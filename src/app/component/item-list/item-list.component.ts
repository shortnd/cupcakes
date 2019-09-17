import { Component, OnInit, Input } from '@angular/core';
import { FileReadServiceService } from 'src/app/services/file-read-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  @Input() props: { file: string; text: string; heading: string };

  public elArray: Array<string>;
  public heading: string;

  constructor(private fileReadService: FileReadServiceService, private httpClient: HttpClient) {}

  ngOnInit() {
    this.getFile();
    this.heading = this.props.heading;
  }

  getFile() {
    this.fileReadService.getTextFromFile(`${this.props.file}`, this.props.text).subscribe(data => {
      this.elArray = data
        .toString()
        .split('\n')
        .filter(el => {
          return el !== this.props.text;
        });
    });
  }
}
