import { Component, OnInit } from '@angular/core';
import { ReadFileService } from 'src/app/services/read-file.service';

@Component({
  selector: 'app-upload-doc',
  templateUrl: './upload-doc.component.html',
  styleUrls: ['./upload-doc.component.scss']
})
export class UploadDocComponent implements OnInit {

  file: FileReader = new FileReader()

  constructor( public readFile: ReadFileService) { }

  ngOnInit(): void {
  }

  Upload(event){
   this.readFile.readFile(event)
    }
  }

}
