import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommonService} from "../../services/common.service";
import {ITag} from "../../interfaces/tag";
import { FormBuilder, FormGroup,  FormControl, Validators } from "@angular/forms";


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private commonService: CommonService,
    private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      name: new FormControl("", Validators.required)
    });
  }

  public tags: ITag[] = [];
  public form: FormGroup;

  ngOnInit(){
   this.getTags();
  }

  removeTag(tag: ITag){
    this.commonService.removeTag(tag).subscribe(res => {
      this.getTags();
    }, (err)=>{
      console.error('Tag delete failed', err);
    })
  }

  getTags(){
    this.commonService.getTagsList().subscribe( res => {
      this.tags = res;
    })
  }

  addTag(){
    this.commonService.addTag(this.form.value['name']).subscribe( () => {
      this.form.reset();
      this.getTags();
    })
  }


}
