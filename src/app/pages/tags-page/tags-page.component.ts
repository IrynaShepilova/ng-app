import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TagsService} from "../../services/tags.service";
import {ITag} from "../../interfaces/tag";
import { FormBuilder, FormGroup,  FormControl, Validators } from "@angular/forms";
import { ToastrService  } from "ngx-toastr";

@Component({
  selector: 'app-tags-page',
  templateUrl: './tags-page.component.html',
  styleUrls: ['./tags-page.component.scss']
})
export class TagsPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private tagsService: TagsService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService) {

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
    this.tagsService.removeTag(tag).subscribe(res => {
      this.toastr.success('Tag removed' )
      this.getTags();
    }, (err)=>{
      this.toastr.error(`Could not delete tag: ${err.message}`)
    })
  }

  getTags(){
    this.tagsService.getTagsList().subscribe( res => {
      this.tags = res;
    })
  }

  addTag(){
    this.tagsService.addTag(this.form.value['name']).subscribe( () => {
      this.toastr.success('Tag was successfully added')
      this.form.reset();
      this.getTags();
    }, err=> {
      this.toastr.error(`Tag was not added: ${err.message}`)
    })
  }


}
